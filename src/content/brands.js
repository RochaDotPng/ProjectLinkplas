// The brand pages, per language. The copy is the client's brand presentation of October 2026
// (one slide per brand, two for PharmaLink): a sector, a title, one paragraph and a short
// list of points. `more` holds a brand's further slides, each with the same four parts.

import { useLanguage } from '../i18n/language-context';
import { ROUTES } from './routes';

export const BRAND_SLUGS = ['tupperlink', 'pharmalink', 'factorylink'];

const IMAGES = {
  tupperlink: '/images/home/setor-takeaway.webp',
  pharmalink: '/images/home/setor-farmacia.webp',
  factorylink: '/images/home/setor-industria.webp',
};

const NAMES = { tupperlink: 'TupperLink', pharmalink: 'PharmaLink', factorylink: 'FactoryLink' };

const ui = {
  pt: {
    crumb: 'Marcas',
    products: (name) => `Produtos ${name}`,
    allProducts: (name) => `Ver produtos ${name}`,
    quote: 'Pedir orçamento',
  },
  en: {
    crumb: 'Brands',
    products: (name) => `${name} products`,
    allProducts: (name) => `View ${name} products`,
    quote: 'Request a quote',
  },
};

const brands = {
  tupperlink: {
    pt: {
      meta: {
        title: 'TupperLink - Recipientes reutilizáveis para take-away e delivery | LinkPlas',
        description: 'TupperLink: recipientes reutilizáveis para take-away e delivery. Uma alternativa reutilizável às embalagens descartáveis, pensada para restaurantes e serviços de entrega.',
      },
      eyebrow: 'Take-away',
      title: 'Recipientes reutilizáveis para take-away e delivery.',
      lead: 'Uma alternativa reutilizável às embalagens descartáveis, pensada para restaurantes e serviços de entrega.',
      points: [
        'Reutilizáveis e fáceis de higienizar',
        'Formatos para take-away e delivery',
        'Personalização com a marca do restaurante',
      ],
    },
    en: {
      meta: {
        title: 'TupperLink - Reusable containers for take-away and delivery | LinkPlas',
        description: 'TupperLink: reusable containers for take-away and delivery. A reusable alternative to disposable packaging, designed for restaurants and delivery services.',
      },
      eyebrow: 'Take-away',
      title: 'Reusable containers for take-away and delivery.',
      lead: 'A reusable alternative to disposable packaging, designed for restaurants and delivery services.',
      points: [
        'Reusable and easy to clean',
        'Formats for take-away and delivery',
        "Customisation with the restaurant's brand",
      ],
    },
  },

  pharmalink: {
    pt: {
      meta: {
        title: 'PharmaLink - Caixas e componentes para a farmácia | LinkPlas',
        description: 'PharmaLink: caixas e componentes pensados para a farmácia, e caixas de transporte de medicamentos que mantêm a cadeia de frio na distribuição farmacêutica.',
      },
      eyebrow: 'Farmácia',
      title: 'Caixas e componentes pensados para a farmácia.',
      lead: 'Soluções plásticas para acondicionar e organizar medicamentos, produzidas com o rigor e a higiene que o setor exige.',
      points: [
        'Caixas para medicamentos em diferentes formatos',
        'Personalização com a identidade do cliente',
      ],
      more: [
        {
          id: 'protecao-termica',
          eyebrow: 'Farmácia',
          title: 'Proteção térmica entre o armazém e a farmácia.',
          text: 'Caixas de transporte de medicamentos que mantêm a cadeia de frio na distribuição farmacêutica, reutilizáveis e adequadas a operações regulamentadas.',
          points: [
            'Caixa exterior plástica com tampa. Robusta, empilhável e reutilizável.',
            'Reforço isolante interior: isolamento térmico durante todo o transporte.',
            'Acumuladores de frio integrados para proteger o produto · parceria ZØR',
          ],
          image: '/images/kit-isotermico-vista-explodida.png',
          imageAlt: 'Vista explodida do kit isotérmico: caixa exterior plástica com tampa, reforço com isolamento térmico e acumuladores',
        },
      ],
    },
    en: {
      meta: {
        title: 'PharmaLink - Boxes and components for pharmacy | LinkPlas',
        description: 'PharmaLink: boxes and components designed for pharmacy, and medicine transport boxes that keep the cold chain in pharmaceutical distribution.',
      },
      eyebrow: 'Pharmacy',
      title: 'Boxes and components designed for pharmacy.',
      lead: 'Plastic solutions for packing and organising medicines, produced with the rigour and hygiene the sector demands.',
      points: [
        'Medicine boxes in different formats',
        "Customisation with the client's identity",
      ],
      more: [
        {
          id: 'protecao-termica',
          eyebrow: 'Pharmacy',
          title: 'Thermal protection between the warehouse and the pharmacy.',
          text: 'Medicine transport boxes that keep the cold chain in pharmaceutical distribution, reusable and suited to regulated operations.',
          points: [
            'Plastic outer box with lid. Sturdy, stackable and reusable.',
            'Insulating inner liner: thermal insulation throughout transport.',
            'Built-in cold packs to protect the product · ZØR partnership',
          ],
          image: '/images/kit-isotermico-vista-explodida.png',
          imageAlt: 'Exploded view of the isothermal kit: plastic outer box with lid, liner with thermal insulation and cold packs',
        },
      ],
    },
  },

  factorylink: {
    pt: {
      meta: {
        title: 'FactoryLink - Peças técnicas por medida, do desenho ao molde | LinkPlas',
        description: 'FactoryLink: peças técnicas por medida, do desenho ao molde. Componentes plásticos para a indústria, soldadura por ultrassons e injeção de 50 a 550 t.',
      },
      eyebrow: 'Indústria',
      title: 'Peças técnicas por medida, do desenho ao molde.',
      lead: 'Desenvolvemos e produzimos componentes plásticos para a indústria, com acompanhamento técnico em cada fase do projeto.',
      points: [
        'Análise de viabilidade e otimização do desenho da peça',
        'Serviço de soldadura por ultrassons',
        'Injeção de 50 a 550 t, de séries curtas a grandes volumes',
      ],
    },
    en: {
      meta: {
        title: 'FactoryLink - Technical parts made to measure, from drawing to mould | LinkPlas',
        description: 'FactoryLink: technical parts made to measure, from drawing to mould. Plastic components for industry, ultrasonic welding and injection from 50 to 550 t.',
      },
      eyebrow: 'Industry',
      title: 'Technical parts made to measure, from drawing to mould.',
      lead: 'We develop and produce plastic components for industry, with technical support at every stage of the project.',
      points: [
        'Feasibility analysis and optimisation of the part design',
        'Ultrasonic welding service',
        'Injection from 50 to 550 t, from short runs to large volumes',
      ],
    },
  },
};

export function useBrand(slug) {
  const language = useLanguage();
  if (!brands[slug]) return null;
  return {
    slug,
    name: NAMES[slug],
    path: ROUTES.brand(slug),
    image: IMAGES[slug],
    productsPath: ROUTES.productsOfBrand(slug),
    ...brands[slug][language],
  };
}

export function useBrandsUi() {
  return ui[useLanguage()];
}
