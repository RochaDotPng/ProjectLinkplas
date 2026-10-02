// How the 3D models are finished, shared by the product page (which recolours a model while
// it is on screen) and by scripts/build-3d-models.mjs (which writes each model's starting
// finish). Keep this file free of imports so both can load it.

// Clear polypropylene. glTF stores colour factors as linear values, not the sRGB ones a
// colour picker shows, so these are not a hex colour.
export const CLEAR_FINISH = { color: [0.6, 0.7, 0.76], opacity: 0.45, roughness: 0.08 };

export const SOLID_ROUGHNESS = 0.55;

// "#rrggbb" (sRGB) to the linear red, green and blue factors glTF expects.
export function hexToLinear(hex) {
  return [1, 3, 5].map((start) => {
    const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
}

// The colours the PharmaLink box and lid start in, keyed by the part's name in the model.
// The models are built in these colours and the page's colour pickers start on them.
export const PHARMALINK_START_COLOURS = { caixa: '#B2B2B2', tampa: '#505898' };
