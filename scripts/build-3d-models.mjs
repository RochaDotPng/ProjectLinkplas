// Converts the client's STL files (content-inbox/3d, not published) into the GLB models
// the product pages load (public/models). Run with `npm run models` when the sources change.
//
// STL carries geometry only, so this script also: welds the triangles, simplifies heavy meshes,
// computes normals, rotates Z-up parts to glTF's Y-up, scales millimetres to metres and
// gives each part its starting material.

import fs from 'node:fs';
import path from 'node:path';
import { MeshoptSimplifier } from 'meshoptimizer';
import {
  CLEAR_FINISH,
  PHARMALINK_START_COLOURS,
  SOLID_ROUGHNESS,
  hexToLinear,
} from '../src/content/model-finishes.js';

const SOURCE_DIR = 'content-inbox/3d';
const OUTPUT_DIR = 'public/models';

// Heavier meshes are simplified to this many triangles so a model stays around 1 MB.
const MAX_TRIANGLES = 25000;
// Edges sharper than this stay sharp; flatter ones are shaded smooth.
const CREASE_ANGLE_DEGREES = 35;
// STL files carry no unit. Most of the client's files are in millimetres; a part exported in
// metres says so with `units: 'm'`.
const TO_METRES = { mm: 0.001, m: 1 };

// Every part gets its own material, named after the part, so the product page can recolour
// the parts separately. A part starts either clear or in the solid colour given here.
function materialFor(part) {
  if (part.clear) {
    return {
      name: part.name,
      pbrMetallicRoughness: {
        baseColorFactor: [...CLEAR_FINISH.color, CLEAR_FINISH.opacity],
        metallicFactor: 0,
        roughnessFactor: CLEAR_FINISH.roughness,
      },
      alphaMode: 'BLEND',
      doubleSided: true,
    };
  }
  return {
    name: part.name,
    pbrMetallicRoughness: {
      baseColorFactor: [...hexToLinear(part.color), 1],
      metallicFactor: 0,
      roughnessFactor: SOLID_ROUGHNESS,
    },
    doubleSided: true,
  };
}

// Source files are matched by pattern so their original names never have to be repeated here.
// TupperLink bases and lids are exported in assembly position, so the lid already sits on the base.
const tupperLink = (millilitres) => ({
  output: `tupperlink-${millilitres}ml`,
  parts: [
    { name: 'base', source: new RegExp(`^${millilitres}ML.*base`, 'i'), clear: true },
    { name: 'tampa', source: new RegExp(`^${millilitres}ML.*tampa`, 'i'), clear: true },
  ],
});

// PharmaLink boxes share one lid, exported on its own. It is shown lifted above the box,
// as in the existing product renders, because its seated position is not in the files.
const pharmaLink = (size, source, up) => ({
  output: `pharmalink-caixa-${size}`,
  parts: [
    { name: 'caixa', source, up, color: PHARMALINK_START_COLOURS.caixa },
    { name: 'tampa', source: /^tampa cx/i, up: 'y', color: PHARMALINK_START_COLOURS.tampa, liftAbove: 'caixa' },
  ],
});

// FactoryLink parts are one piece each, shown in the colour of their current product photos.
const factoryLink = (output, source, color, units) => ({
  output: `factorylink-${output}`,
  parts: [{ name: 'peca', source, color, units }],
});

const MODELS = [
  tupperLink(500),
  tupperLink(1000),
  tupperLink(1500),
  tupperLink(2500),
  tupperLink(4000),
  pharmaLink('grande', /^caixa grande/i, 'y'),
  pharmaLink('media', /^caixa m/i, '-z'),
  pharmaLink('pequena', /^caixa pequena/i, 'z'),
  factoryLink('intercalar-longarina', /^7017030013\./, '#D8D4C8', 'm'),
  factoryLink('tampa-para-veio-16mm', /^7017030011\./, '#2B2725', 'm'),
  factoryLink('anilha-intercalar-30015', /^7017030015\./, '#2E2E2E'),
  factoryLink('abracadeira', /^7017030008\./, '#3C3C3C'),
];

// How far the lid floats above the box, as a share of the box height.
const LID_LIFT = 0.35;

function findSource(pattern) {
  const matches = fs.readdirSync(SOURCE_DIR).filter((file) => /\.stl$/i.test(file) && pattern.test(file));
  if (matches.length !== 1) {
    throw new Error(`Expected one STL matching ${pattern} in ${SOURCE_DIR}, found ${matches.length}`);
  }
  return path.join(SOURCE_DIR, matches[0]);
}

// The corner coordinates of every triangle, in file order.
// Binary STL: 80-byte header, triangle count, then 50 bytes per triangle (normal, 3 vertices, attribute).
// Text STL: `vertex x y z` lines inside `facet` blocks.
function readCorners(file) {
  const data = fs.readFileSync(file);
  const count = data.length >= 84 ? data.readUInt32LE(80) : 0;
  if (data.length === 84 + count * 50) {
    const values = new Float32Array(count * 9);
    for (let triangle = 0; triangle < count; triangle += 1) {
      for (let index = 0; index < 9; index += 1) {
        values[triangle * 9 + index] = data.readFloatLE(84 + triangle * 50 + 12 + index * 4);
      }
    }
    return values;
  }
  const text = data.toString('latin1');
  if (!/^\s*solid/.test(text)) throw new Error(`${file} is not an STL file`);
  const numbers = [];
  for (const match of text.matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g)) {
    numbers.push(Number(match[1]), Number(match[2]), Number(match[3]));
  }
  if (numbers.length === 0 || numbers.length % 9 !== 0 || numbers.some(Number.isNaN)) {
    throw new Error(`${file} could not be read as a text STL`);
  }
  return Float32Array.from(numbers);
}

function readStl(file, up, units = 'mm') {
  const source = readCorners(file);
  const corners = new Float32Array(source.length);
  for (let corner = 0; corner < source.length; corner += 3) {
    const [x, y, z] = [source[corner], source[corner + 1], source[corner + 2]];
    // A part drawn with its height along Z is rotated a quarter turn about X so that the
    // height runs along Y; '-z' is a part drawn upside down.
    const [height, depth] = { y: [y, z], z: [z, -y], '-z': [-z, y] }[up ?? 'y'];
    corners[corner] = x * TO_METRES[units];
    corners[corner + 1] = height * TO_METRES[units];
    corners[corner + 2] = depth * TO_METRES[units];
  }
  return corners;
}

// Merges coincident corners so neighbouring triangles share vertices.
function weld(corners) {
  const lookup = new Map();
  const positions = [];
  const indices = new Uint32Array(corners.length / 3);
  for (let corner = 0; corner < indices.length; corner += 1) {
    const x = corners[corner * 3];
    const y = corners[corner * 3 + 1];
    const z = corners[corner * 3 + 2];
    const key = `${Math.round(x * 1e6)},${Math.round(y * 1e6)},${Math.round(z * 1e6)}`;
    let index = lookup.get(key);
    if (index === undefined) {
      index = positions.length / 3;
      positions.push(x, y, z);
      lookup.set(key, index);
    }
    indices[corner] = index;
  }
  return { positions: new Float32Array(positions), indices };
}

function simplify({ positions, indices }) {
  if (indices.length / 3 <= MAX_TRIANGLES) return { positions, indices };
  const [simplified] = MeshoptSimplifier.simplify(indices, positions, 3, MAX_TRIANGLES * 3, 0.002, ['LockBorder']);
  return { positions, indices: simplified };
}

// Gives every corner the average normal of the faces around its vertex that lie within the
// crease angle, then merges corners that ended up identical.
function shade({ positions, indices }) {
  const triangleCount = indices.length / 3;
  const faceNormals = new Float64Array(triangleCount * 3);
  const facesOfVertex = new Map();
  for (let triangle = 0; triangle < triangleCount; triangle += 1) {
    const [a, b, c] = [indices[triangle * 3], indices[triangle * 3 + 1], indices[triangle * 3 + 2]];
    const ab = [0, 1, 2].map((axis) => positions[b * 3 + axis] - positions[a * 3 + axis]);
    const ac = [0, 1, 2].map((axis) => positions[c * 3 + axis] - positions[a * 3 + axis]);
    // The cross product's length is twice the triangle's area, which weights larger faces more.
    faceNormals[triangle * 3] = ab[1] * ac[2] - ab[2] * ac[1];
    faceNormals[triangle * 3 + 1] = ab[2] * ac[0] - ab[0] * ac[2];
    faceNormals[triangle * 3 + 2] = ab[0] * ac[1] - ab[1] * ac[0];
    for (const vertex of [a, b, c]) {
      if (!facesOfVertex.has(vertex)) facesOfVertex.set(vertex, []);
      facesOfVertex.get(vertex).push(triangle);
    }
  }

  const length = (face) => Math.hypot(faceNormals[face * 3], faceNormals[face * 3 + 1], faceNormals[face * 3 + 2]);
  const creaseCosine = Math.cos((CREASE_ANGLE_DEGREES * Math.PI) / 180);
  const lookup = new Map();
  const outPositions = [];
  const outNormals = [];
  const outIndices = [];

  for (let triangle = 0; triangle < triangleCount; triangle += 1) {
    const ownLength = length(triangle);
    if (ownLength === 0) continue; // degenerate sliver
    for (let corner = 0; corner < 3; corner += 1) {
      const vertex = indices[triangle * 3 + corner];
      const normal = [0, 0, 0];
      for (const face of facesOfVertex.get(vertex)) {
        const faceLength = length(face);
        if (faceLength === 0) continue;
        const cosine =
          (faceNormals[face * 3] * faceNormals[triangle * 3] +
            faceNormals[face * 3 + 1] * faceNormals[triangle * 3 + 1] +
            faceNormals[face * 3 + 2] * faceNormals[triangle * 3 + 2]) /
          (faceLength * ownLength);
        if (cosine >= creaseCosine) {
          normal[0] += faceNormals[face * 3];
          normal[1] += faceNormals[face * 3 + 1];
          normal[2] += faceNormals[face * 3 + 2];
        }
      }
      const normalLength = Math.hypot(...normal) || 1;
      const unit = normal.map((value) => value / normalLength);
      const key = `${vertex}:${unit.map((value) => Math.round(value * 500)).join(',')}`;
      let index = lookup.get(key);
      if (index === undefined) {
        index = outPositions.length / 3;
        outPositions.push(positions[vertex * 3], positions[vertex * 3 + 1], positions[vertex * 3 + 2]);
        outNormals.push(...unit);
        lookup.set(key, index);
      }
      outIndices.push(index);
    }
  }

  return {
    positions: new Float32Array(outPositions),
    normals: new Float32Array(outNormals),
    indices: new Uint32Array(outIndices),
  };
}

function bounds(positions) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let index = 0; index < positions.length; index += 3) {
    for (let axis = 0; axis < 3; axis += 1) {
      min[axis] = Math.min(min[axis], positions[index + axis]);
      max[axis] = Math.max(max[axis], positions[index + axis]);
    }
  }
  return { min, max };
}

function writeGlb(file, parts) {
  const chunks = [];
  let byteLength = 0;
  const gltf = {
    asset: { version: '2.0', generator: 'LinkPlas build-3d-models' },
    scene: 0,
    scenes: [{ nodes: parts.map((_, index) => index) }],
    nodes: [],
    meshes: [],
    materials: [],
    accessors: [],
    bufferViews: [],
    buffers: [],
  };

  const addView = (typedArray, target) => {
    const bytes = Buffer.from(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    const padding = (4 - (bytes.length % 4)) % 4;
    gltf.bufferViews.push({ buffer: 0, byteOffset: byteLength, byteLength: bytes.length, target });
    chunks.push(bytes, Buffer.alloc(padding));
    byteLength += bytes.length + padding;
    return gltf.bufferViews.length - 1;
  };

  for (const part of parts) {
    gltf.materials.push(materialFor(part));
    const { positions, normals, indices } = part.mesh;
    const vertexCount = positions.length / 3;
    const compactIndices = vertexCount <= 65535 ? new Uint16Array(indices) : indices;

    const position = gltf.accessors.length;
    gltf.accessors.push({
      bufferView: addView(positions, 34962),
      componentType: 5126,
      count: vertexCount,
      type: 'VEC3',
      ...bounds(positions),
    });
    gltf.accessors.push({ bufferView: addView(normals, 34962), componentType: 5126, count: vertexCount, type: 'VEC3' });
    gltf.accessors.push({
      bufferView: addView(compactIndices, 34963),
      componentType: compactIndices instanceof Uint16Array ? 5123 : 5125,
      count: indices.length,
      type: 'SCALAR',
    });

    gltf.meshes.push({
      name: part.name,
      primitives: [
        {
          attributes: { POSITION: position, NORMAL: position + 1 },
          indices: position + 2,
          material: gltf.materials.length - 1,
        },
      ],
    });
    gltf.nodes.push({ name: part.name, mesh: gltf.meshes.length - 1, translation: part.translation });
  }

  gltf.buffers.push({ byteLength });
  let json = Buffer.from(JSON.stringify(gltf));
  json = Buffer.concat([json, Buffer.alloc((4 - (json.length % 4)) % 4, 0x20)]);
  const binary = Buffer.concat(chunks);

  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0); // "glTF"
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(12 + 8 + json.length + 8 + binary.length, 8);
  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(json.length, 0);
  jsonHeader.writeUInt32LE(0x4e4f534a, 4); // "JSON"
  const binaryHeader = Buffer.alloc(8);
  binaryHeader.writeUInt32LE(binary.length, 0);
  binaryHeader.writeUInt32LE(0x004e4942, 4); // "BIN"

  fs.writeFileSync(file, Buffer.concat([header, jsonHeader, json, binaryHeader, binary]));
}

await MeshoptSimplifier.ready;
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const model of MODELS) {
  const parts = model.parts.map((part) => {
    const mesh = shade(simplify(weld(readStl(findSource(part.source), part.up, part.units))));
    return { ...part, mesh, box: bounds(mesh.positions) };
  });

  for (const part of parts) {
    const base = parts.find((other) => other.name === part.liftAbove);
    if (!base) {
      part.translation = [0, 0, 0];
      continue;
    }
    // Centre the lid over the box and raise it clear of the rim.
    const centre = (box, axis) => (box.min[axis] + box.max[axis]) / 2;
    const height = base.box.max[1] - base.box.min[1];
    part.translation = [
      centre(base.box, 0) - centre(part.box, 0),
      base.box.max[1] + height * LID_LIFT - part.box.min[1],
      centre(base.box, 2) - centre(part.box, 2),
    ];
  }

  const file = path.join(OUTPUT_DIR, `${model.output}.glb`);
  writeGlb(file, parts);
  const triangles = parts.reduce((total, part) => total + part.mesh.indices.length / 3, 0);
  // A part that comes out microscopic or huge was almost certainly read in the wrong unit.
  const largest = Math.max(...parts.flatMap(({ box }) => box.max.map((value, axis) => value - box.min[axis])));
  if (largest < 0.005 || largest > 2) {
    console.warn(`  check the units of ${model.output}: its largest side is ${(largest * 1000).toFixed(2)} mm`);
  }
  console.log(`${file}  ${triangles} triangles  ${(fs.statSync(file).size / 1024).toFixed(0)} kB`);
}
