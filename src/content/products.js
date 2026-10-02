// The product catalogue: one entry per product, with its copy per language.
// Measurements are numbers so each language formats them its own way; `slug` is the page address.

import { useLanguage } from '../i18n/language-context';
import { getLanguage } from '../i18n/languages';

export const BRANDS = {
  tupperlink: 'TupperLink',
  pharmalink: 'PharmaLink',
  factorylink: 'FactoryLink',
};

// Old category addresses, kept working by redirecting them into the new catalogue.
export const LEGACY_PRODUCT_PATHS = {
  'Take-Away': '/Products?marcas=tupperlink',
  Farmaceutica: '/Products?marcas=pharmalink',
  Industria: '/Products?marcas=factorylink',
  Servicos: '/Products/soldadura-por-ultrassons',
};

// Unit of each numeric specification. Text specifications have no entry.
const SPEC_UNITS = {
  volume: 'ml',
  length: 'mm',
  width: 'mm',
  height: 'mm',
  diameter: 'mm',
  outerDiameter: 'mm',
  innerDiameter: 'mm',
  thickness: 'mm',
};

const cadFiles = (folder, drawing, kinds) =>
  kinds.map((kind) => ({
    kind,
    code: drawing,
    file: `/files/${folder}/${drawing}.${kind === 'drawing' ? 'pdf' : kind.toUpperCase()}`,
  }));

const catalogue = { kind: 'catalogue', file: '/files/catalogo_Linkplas_sem_taco.pdf' };

const products = [
  {
    slug: 'recipiente-tupperlink',
    brand: 'tupperlink',
    variantSpec: 'volume',
    variants: [
      { id: '500ml', specs: { volume: 500, length: 210, width: 160, height: 28 }, model: '/models/tupperlink-500ml.glb' },
      { id: '1000ml', specs: { volume: 1000, length: 210, width: 160, height: 45 }, model: '/models/tupperlink-1000ml.glb' },
      { id: '1500ml', specs: { volume: 1500, length: 210, width: 160, height: 64 }, model: '/models/tupperlink-1500ml.glb' },
      { id: '2000ml', specs: { volume: 2000, length: 210, width: 160, height: 86 } },
      { id: '2500ml', specs: { volume: 2500, length: 346, width: 226, height: 50 }, model: '/models/tupperlink-2500ml.glb' },
      { id: '4000ml', specs: { volume: 4000 }, model: '/models/tupperlink-4000ml.glb' },
    ],
    pt: {
      name: 'Recipiente TupperLink',
      summary: 'Recipientes empilháveis para armazenamento e take-away, do congelador à máquina de lavar louça.',
      cardSpecs: ['500–4000 ml'],
      description: [
        'TupperLink: a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza. A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente.',
        'Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os TupperLink oferecem praticidade sem igual.',
      ],
      specs: { finish: 'Transparente ou com cor' },
    },
    en: {
      name: 'TupperLink container',
      summary: 'Stackable containers for storage and take-away, from the freezer to the dishwasher.',
      cardSpecs: ['500–4000 ml'],
      description: [
        'TupperLink: the versatile, sustainable storage solution. Stackable to save space, these containers go from the freezer to the dishwasher, making storage and cleaning easy. The conscious choice for your kitchen: practical, convenient and eco-friendly in every container.',
        'Designed to fit take-away service perfectly, TupperLink containers are exceptionally practical.',
      ],
      specs: { finish: 'Clear or coloured' },
    },
  },

  {
    slug: 'caixa-de-transporte-de-medicamentos',
    brand: 'pharmalink',
    variantSpec: 'size',
    variants: [
      { id: 'grande', label: { pt: 'Grande', en: 'Large' }, model: '/models/pharmalink-caixa-grande.glb' },
      { id: 'medio', label: { pt: 'Médio', en: 'Medium' }, model: '/models/pharmalink-caixa-media.glb' },
      { id: 'pequeno', label: { pt: 'Pequeno', en: 'Small' }, model: '/models/pharmalink-caixa-pequena.glb' },
    ],
    pt: {
      name: 'Caixa de transporte de medicamentos',
      summary: 'Caixa em plástico de alta resistência para o transporte seguro de produtos farmacêuticos.',
      description: [
        'Caixa de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos. Com dimensões otimizadas para facilidade de manuseamento e armazenamento, esta caixa possui um sistema de fecho seguro e é resistente a variações de temperatura e humidade. Ideal para uso em farmácias, hospitais e clínicas, garante a integridade e a qualidade dos medicamentos durante o transporte.',
      ],
    },
    en: {
      name: 'Medicine transport box',
      summary: 'High-strength plastic box for the safe transport of pharmaceutical products.',
      description: [
        'A medicine transport box made of high-strength plastic, designed to keep pharmaceutical products safe and well preserved. Its dimensions are optimised for easy handling and storage; it has a secure closing system and withstands changes in temperature and humidity. Ideal for pharmacies, hospitals and clinics, it protects the integrity and quality of medicines during transport.',
      ],
    },
  },

  {
    slug: 'kit-isotermico-e-pharma',
    brand: 'pharmalink',
    downloads: [{ kind: 'datasheet', file: '/files/ZØR_LINKPLAS_Kit.pdf' }],
    pt: {
      name: 'Kit isotérmico e-Pharma',
      summary: 'Kit isotérmico reutilizável para produtos termossensíveis, qualificado até 20 horas.',
      description: [
        'O kit isotérmico é adequado para todos os tipos de transporte de produtos termossensíveis. Trata-se de uma solução fácil de utilizar, reutilizável e qualificada até 20 horas.',
        'Este kit é composto por uma caixa exterior polimérica, um reforço com isolamento térmico e acumuladores de frio que envolvem o(s) produto(s) a transportar.',
      ],
      specs: { temperature: '−21 ºC · +2 ºC a +8 ºC · +15 ºC a +25 ºC', duration: 'Até 20 horas' },
    },
    en: {
      name: 'e-Pharma isothermal kit',
      summary: 'Reusable isothermal kit for temperature-sensitive products, qualified for up to 20 hours.',
      description: [
        'The isothermal kit suits every kind of transport of temperature-sensitive products. It is easy to use, reusable and qualified for up to 20 hours.',
        'The kit is made up of a polymer outer box, a thermally insulated liner and cold packs that surround the product or products being transported.',
      ],
      specs: { temperature: '−21 °C · +2 °C to +8 °C · +15 °C to +25 °C', duration: 'Up to 20 hours' },
    },
  },

  {
    slug: 'tampa-para-tubos',
    brand: 'factorylink',
    variantSpec: 'diameter',
    specs: { material: 'PE1000' },
    downloads: [catalogue],
    variants: [
      { id: '30001', specs: { reference: '30001', diameter: 12, height: 10, thickness: 2.5 } },
      { id: '30002', specs: { reference: '30002', diameter: 16, height: 12, thickness: 3 } },
      { id: '30003', specs: { reference: '30003', diameter: 38, height: 16, thickness: 3.5 } },
      { id: '30004', specs: { reference: '30004', diameter: 42, height: 16, thickness: 3.5 } },
      {
        id: '30005',
        specs: { reference: '30005', diameter: 48, height: 18.5, thickness: 4 },
        downloads: cadFiles('Tampa', '7017030005', ['dwg', 'igs', 'step', 'sldprt']),
      },
      { id: '30006', specs: { reference: '30006', diameter: 51, height: 18.5, thickness: 4 } },
      { id: '30007', specs: { reference: '30007', diameter: 63, height: 20, thickness: 4.5 } },
    ],
    pt: {
      name: 'Tampa para tubos',
      summary: 'Tampas em PE1000, resistentes ao desgaste, ao impacto e a produtos químicos.',
      cardSpecs: ['REF. 30001–30007', 'PE1000', 'Ø12–63 mm'],
      description: [
        'Tampas fabricadas em PE1000, reconhecido pela resistência ao desgaste, impacto e produtos químicos. Uma solução simples e robusta.',
      ],
    },
    en: {
      name: 'Tube cap',
      summary: 'Caps in PE1000, resistant to wear, impact and chemicals.',
      cardSpecs: ['REF. 30001–30007', 'PE1000', 'Ø12–63 mm'],
      description: ['Caps made of PE1000, known for its resistance to wear, impact and chemicals. A simple, robust solution.'],
    },
  },

  {
    slug: 'intercalar-longarina',
    brand: 'factorylink',
    downloads: cadFiles('Intercalar', '7017030013', ['dwg', 'igs', 'step', 'sldprt']),
    pt: {
      name: 'Intercalar longarina',
      summary: 'Espaçador para longarinas em transportadores.',
      description: ['Espaçador para longarinas em transportadores.'],
    },
    en: {
      name: 'Stringer spacer',
      summary: 'Spacer for the stringers of conveyors.',
      description: ['Spacer for the stringers of conveyors.'],
    },
  },

  {
    slug: 'tampa-para-veio',
    brand: 'factorylink',
    variantSpec: 'diameter',
    variants: [
      {
        id: '16mm',
        specs: { diameter: 16 },
        downloads: cadFiles('TampaVeio', '7017030011', ['drawing', 'dwg', 'igs', 'step', 'sldprt']),
      },
      {
        id: '20mm',
        specs: { diameter: 20 },
        downloads: cadFiles('TampaVeio', '7017030009', ['drawing', 'dwg', 'igs', 'step', 'sldprt']),
      },
    ],
    pt: {
      name: 'Tampa para veio',
      summary: 'Topo de proteção exterior de veio.',
      cardSpecs: ['Ø16 mm', 'Ø20 mm'],
      description: ['Topo de proteção exterior de veio.'],
    },
    en: {
      name: 'Shaft cap',
      summary: 'Outer protective end cap for shafts.',
      cardSpecs: ['Ø16 mm', 'Ø20 mm'],
      description: ['Outer protective end cap for shafts.'],
    },
  },

  {
    slug: 'anilha-intercalar',
    brand: 'factorylink',
    variantSpec: 'reference',
    specs: { material: 'POM' },
    variants: [
      {
        id: '30014',
        specs: { reference: '30014', outerDiameter: 40, innerDiameter: 9, thickness: 6 },
        downloads: [
          { kind: 'drawing', code: '7017030014', file: '/files/Anilha/7017030014.PDF' },
          ...cadFiles('Anilha', '7017030014', ['igs', 'step', 'sldprt']),
        ],
      },
      {
        id: '30015',
        specs: { reference: '30015', outerDiameter: 60, innerDiameter: 9, thickness: 7 },
        downloads: [
          { kind: 'drawing', code: '7017030015', file: '/files/Anilha/7017030015.PDF' },
          ...cadFiles('Anilha', '7017030015', ['igs', 'step', 'sldprt']),
        ],
      },
      {
        id: '30016',
        specs: { reference: '30016', outerDiameter: 60, innerDiameter: 21, thickness: 7 },
        downloads: [
          { kind: 'drawing', code: '7017030016', file: '/files/Anilha/7017030016.PDF' },
          ...cadFiles('Anilha', '7017030016', ['igs', 'step']),
        ],
      },
    ],
    pt: {
      name: 'Anilha intercalar',
      summary: 'Anilhas intercalares em POM.',
      cardSpecs: ['REF. 30014–30016', 'POM', 'Ø40–60 mm'],
      description: ['Anilhas intercalares em POM.'],
    },
    en: {
      name: 'Spacer washer',
      summary: 'Spacer washers in POM.',
      cardSpecs: ['REF. 30014–30016', 'POM', 'Ø40–60 mm'],
      description: ['Spacer washers in POM.'],
    },
  },

  {
    slug: 'abracadeira',
    brand: 'factorylink',
    downloads: [catalogue, ...cadFiles('Abracadeira', '7017030008', ['dwg', 'igs', 'step', 'sldprt'])],
    pt: {
      name: 'Abraçadeira',
      summary: 'Abraçadeira de plástico para tubo, de encaixe fácil e fixação resistente.',
      description: [
        'A inovadora Abraçadeira para Tubo da LinkPlas: a solução perfeita para fixação eficiente e de confiança. Com um design inteligente e encaixe fácil, a nossa abraçadeira de plástico proporciona uma instalação sem complicações, enquanto a sua resistência garante segurança duradoura. Moldada com precisão, a nossa abraçadeira é a escolha ideal para garantir a estabilidade e integridade dos seus projetos.',
      ],
    },
    en: {
      name: 'Tube clamp',
      summary: 'Plastic tube clamp that snaps on easily and holds firmly.',
      description: [
        'The innovative LinkPlas tube clamp: the right solution for efficient, dependable fastening. With a smart design and an easy snap fit, our plastic clamp installs without fuss, while its strength gives lasting security. Precision moulded, it is the ideal choice to keep your projects stable and sound.',
      ],
    },
  },

  {
    slug: 'soldadura-por-ultrassons',
    brand: 'factorylink',
    pt: {
      name: 'Soldadura por ultrassons',
      summary: 'Soldadura de peças plásticas por ultrassons, com ciclos curtos e união imediata.',
      description: [
        'A LinkPlas tem a capacidade interna para realizar soldadura de peças plásticas por ultrassons. Temos assim a capacidade única de ajustar o processo de solda a variações peça-a-peça e materiais únicos.',
      ],
      featuresTitle: 'Benefícios da soldadura por ultrassons',
      features: [
        'Tempos de ciclo curtos',
        'Repetibilidade excecional',
        'Sem tempo de cura: gera uma união robusta e imediata',
        'Sem consumíveis',
      ],
    },
    en: {
      name: 'Ultrasonic welding',
      summary: 'Ultrasonic welding of plastic parts, with short cycles and an immediate bond.',
      description: [
        'LinkPlas welds plastic parts by ultrasound in house. This gives us the rare ability to adjust the welding process to part-by-part variations and to unusual materials.',
      ],
      featuresTitle: 'Benefits of ultrasonic welding',
      features: ['Short cycle times', 'Exceptional repeatability', 'No curing time: a strong bond straight away', 'No consumables'],
    },
  },
];

const ui = {
  pt: {
    catalogueTitle: 'Produtos',
    filtersLabel: 'Filtros',
    cardLink: 'Ver ficha técnica',
    resultCount: (count) => (count === 1 ? '1 produto' : `${count} produtos`),
    noBrandSelected: 'Nenhuma marca selecionada. Escolha pelo menos uma marca para ver os produtos.',
    breadcrumbLabel: 'Caminho',
    home: 'Início',
    description: 'Descrição',
    specifications: 'Especificações',
    allVariants: 'Todas as medidas',
    downloads: 'Ficheiros para descarregar',
    downloadAction: 'Descarregar',
    requestQuote: 'Pedir orçamento',
    quoteMessage: (name) => `Pedido de orçamento: ${name}`,
    allProducts: 'Ver todos os produtos',
    specHeader: ['Característica', 'Valor'],
    previewOf: (shown, selected) => `Ainda não há modelo 3D para ${selected}. A pré-visualização mostra ${shown}.`,
    viewer: {
      alt: (name) => `Modelo 3D: ${name}`,
      hint: 'Arraste para rodar. Use os botões para ampliar ou, com o teclado, as setas.',
      zoomIn: 'Ampliar',
      zoomOut: 'Reduzir',
    },
    specLabels: {
      reference: 'Referência',
      material: 'Material',
      finish: 'Acabamento',
      size: 'Tamanho',
      volume: 'Volume',
      length: 'Comprimento',
      width: 'Largura',
      height: 'Altura',
      diameter: 'Diâmetro',
      outerDiameter: 'Diâmetro exterior',
      innerDiameter: 'Diâmetro interior',
      thickness: 'Espessura',
      temperature: 'Intervalos de temperatura',
      duration: 'Duração',
    },
    downloadKinds: {
      catalogue: 'Catálogo',
      datasheet: 'Ficha do produto',
      drawing: 'Desenho técnico',
      dwg: 'Desenho 2D',
      igs: 'Modelo 3D',
      step: 'Modelo 3D',
      sldprt: 'Modelo 3D',
    },
  },
  en: {
    catalogueTitle: 'Products',
    filtersLabel: 'Filters',
    cardLink: 'View data sheet',
    resultCount: (count) => (count === 1 ? '1 product' : `${count} products`),
    noBrandSelected: 'No brand selected. Choose at least one brand to see the products.',
    breadcrumbLabel: 'Breadcrumb',
    home: 'Home',
    description: 'Description',
    specifications: 'Specifications',
    allVariants: 'All sizes',
    downloads: 'Files to download',
    downloadAction: 'Download',
    requestQuote: 'Request a quote',
    quoteMessage: (name) => `Quote request: ${name}`,
    allProducts: 'View all products',
    specHeader: ['Specification', 'Value'],
    previewOf: (shown, selected) => `There is no 3D model for ${selected} yet. The preview shows ${shown}.`,
    viewer: {
      alt: (name) => `3D model: ${name}`,
      hint: 'Drag to rotate. Use the buttons to zoom or, on a keyboard, the arrow keys.',
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
    },
    specLabels: {
      reference: 'Reference',
      material: 'Material',
      finish: 'Finish',
      size: 'Size',
      volume: 'Volume',
      length: 'Length',
      width: 'Width',
      height: 'Height',
      diameter: 'Diameter',
      outerDiameter: 'Outer diameter',
      innerDiameter: 'Inner diameter',
      thickness: 'Thickness',
      temperature: 'Temperature ranges',
      duration: 'Duration',
    },
    downloadKinds: {
      catalogue: 'Catalogue',
      datasheet: 'Product sheet',
      drawing: 'Technical drawing',
      dwg: '2D drawing',
      igs: '3D model',
      step: '3D model',
      sldprt: '3D model',
    },
  },
};

const DIAMETER_SPECS = ['diameter', 'outerDiameter', 'innerDiameter'];

function formatSpec(key, value, locale) {
  if (typeof value !== 'number') return value;
  const amount = new Intl.NumberFormat(locale, { useGrouping: false }).format(value);
  return `${DIAMETER_SPECS.includes(key) ? 'Ø' : ''}${amount} ${SPEC_UNITS[key]}`;
}

const fileFormat = (file) => file.slice(file.lastIndexOf('.') + 1).toUpperCase();

function localize(product, language, locale) {
  const copy = product[language];
  const text = ui[language];

  const toRows = (specs = {}) =>
    Object.entries(specs).map(([key, value]) => ({ key, label: text.specLabels[key], value: formatSpec(key, value, locale) }));

  const toDownloads = (files = []) =>
    files.map(({ kind, code, file }) => ({
      href: encodeURI(file),
      title: text.downloadKinds[kind],
      meta: [fileFormat(file), code].filter(Boolean).join(' · '),
    }));

  const variants = (product.variants ?? []).map((variant) => ({
    id: variant.id,
    label: variant.label?.[language] ?? formatSpec(product.variantSpec, variant.specs[product.variantSpec], locale),
    model: variant.model,
    specs: toRows(variant.specs),
    downloads: toDownloads(variant.downloads),
  }));

  return {
    slug: product.slug,
    path: `/Products/${product.slug}`,
    brand: product.brand,
    brandName: BRANDS[product.brand],
    name: copy.name,
    summary: copy.summary,
    cardSpecs: copy.cardSpecs,
    description: copy.description,
    featuresTitle: copy.featuresTitle,
    features: copy.features,
    variantLabel: product.variantSpec ? text.specLabels[product.variantSpec] : undefined,
    variants,
    specs: toRows({ ...product.specs, ...copy.specs }),
    downloads: toDownloads(product.downloads),
  };
}

export function useProducts() {
  const language = useLanguage();
  const { locale } = getLanguage(language);
  return products.map((product) => localize(product, language, locale));
}

export function useProduct(slug) {
  const language = useLanguage();
  const { locale } = getLanguage(language);
  const product = products.find((entry) => entry.slug === slug);
  return product ? localize(product, language, locale) : undefined;
}

export function useProductsUi() {
  return ui[useLanguage()];
}

export const PRODUCT_SLUGS = products.map((product) => product.slug);
