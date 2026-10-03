// The brand pages, per language. Each brand answers the same questions in the same order:
// what it is for, what the customer gains, what the product is, where it came from and
// who uses it. `missing` marks content the client still has to supply.

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
    purpose: 'Propósito',
    audience: 'Para quem',
    advantages: 'Vantagens',
    features: 'Características',
    materials: 'Materiais',
    products: (name) => `Produtos ${name}`,
    allProducts: (name) => `Ver produtos ${name}`,
    quote: 'Pedir orçamento',
    origin: 'Origem',
    proof: 'Clientes',
  },
  en: {
    crumb: 'Brands',
    purpose: 'Purpose',
    audience: 'Who it is for',
    advantages: 'Advantages',
    features: 'Features',
    materials: 'Materials',
    products: (name) => `${name} products`,
    allProducts: (name) => `View ${name} products`,
    quote: 'Request a quote',
    origin: 'Origin',
    proof: 'Clients',
  },
};

const plural = {
  pt: {
    quote: '“(…) Foram excelentes no prazo de entrega, na qualidade das caixas fornecidas, nos componentes colocados especificados por nós e, claro, na personalização da nossa marca nas caixas. Continuem assim!”',
    name: 'Nuno Duarte',
    role: 'Responsável de Logística, Plural · fevereiro de 2026',
  },
  en: {
    quote: '“(…) They were excellent on delivery time, on the quality of the boxes supplied, on fitting the components we specified and, of course, on customising the boxes with our brand. Keep it up!”',
    name: 'Nuno Duarte',
    role: 'Logistics Manager, Plural · February 2026',
  },
};

const brands = {
  tupperlink: {
    pt: {
      meta: {
        title: 'TupperLink - Recipientes reutilizáveis para take-away | LinkPlas',
        description: 'TupperLink, a marca própria LinkPlas de recipientes reutilizáveis para restauração, take-away e entrega ao domicílio: duráveis, modulares e com a marca do cliente.',
      },
      eyebrow: 'Marca própria LinkPlas',
      title: 'Take-away para voltar a usar.',
      lead: 'Marca própria de recipientes reutilizáveis para take-away e delivery.',
      purpose: {
        text: 'Recipientes reutilizáveis para restauração, take-away e entrega ao domicílio, pensados como alternativa durável ao descartável.',
        audience: ['Restaurantes', 'Cadeias de delivery', 'Distribuidores de embalagens'],
        quote: '“Reutilizar em vez de deitar fora.”',
      },
      advantages: {
        items: ['Menos resíduos', 'Menor custo por utilização', 'Menos embalagens de uso único'],
        note: 'Alinhado com a PPWR e o Green Deal.',
      },
      features: {
        cards: [
          { icon: 'shield-check', title: 'Durável e seguro', description: 'Apto para contacto alimentar e resistente a múltiplos ciclos de lavagem.' },
          { icon: 'layers', title: 'Modular', description: 'Empilhável, com tampas transparentes; os recipientes encaixam entre si e otimizam transporte e armazenamento.' },
          { icon: 'award', title: 'Com a marca do cliente', description: 'Personalizável, reforça a imagem junto do consumidor.' },
        ],
      },
      origin: {
        timeline: [
          { year: '2016', title: 'Primeiro produto próprio na área alimentar' },
          { year: '2023', title: 'Gama de caixas plásticas para armazenamento de alimentos' },
        ],
        missing: 'A história da marca TupperLink, num parágrafo.',
      },
      proof: { missing: 'Clientes e testemunhos TupperLink.' },
    },
    en: {
      meta: {
        title: 'TupperLink - Reusable take-away containers | LinkPlas',
        description: "TupperLink, LinkPlas's own brand of reusable containers for restaurants, take-away and home delivery: durable, modular and carrying the client's brand.",
      },
      eyebrow: "LinkPlas's own brand",
      title: 'Take-away made to be used again.',
      lead: 'Our own brand of reusable containers for take-away and delivery.',
      purpose: {
        text: 'Reusable containers for restaurants, take-away and home delivery, designed as a durable alternative to disposables.',
        audience: ['Restaurants', 'Delivery chains', 'Packaging distributors'],
        quote: '“Reuse instead of throwing away.”',
      },
      advantages: {
        items: ['Less waste', 'Lower cost per use', 'Less single-use packaging'],
        note: 'In line with the PPWR and the Green Deal.',
      },
      features: {
        cards: [
          { icon: 'shield-check', title: 'Durable and safe', description: 'Suitable for food contact and resistant to many wash cycles.' },
          { icon: 'layers', title: 'Modular', description: 'Stackable, with transparent lids; the containers nest into each other and optimise transport and storage.' },
          { icon: 'award', title: "With the client's brand", description: 'Customisable, it strengthens the brand in front of the consumer.' },
        ],
      },
      origin: {
        timeline: [
          { year: '2016', title: 'First own product for the food sector' },
          { year: '2023', title: 'Range of plastic boxes for food storage' },
        ],
        missing: 'The story of the TupperLink brand, in a paragraph.',
      },
      proof: { missing: 'TupperLink clients and testimonials.' },
    },
  },

  pharmalink: {
    pt: {
      meta: {
        title: 'PharmaLink - Caixas para a distribuição farmacêutica | LinkPlas',
        description: 'PharmaLink: caixas de transporte de medicamentos reutilizáveis, com proteção térmica entre o armazém e a farmácia, para a distribuição farmacêutica.',
      },
      eyebrow: 'Embalagens farmacêuticas',
      title: 'Proteção térmica entre o armazém e a farmácia.',
      lead: 'Caixas isotérmicas reutilizáveis para a distribuição farmacêutica.',
      purpose: {
        text: 'Caixas de transporte de medicamentos que mantêm a cadeia de frio na distribuição farmacêutica, reutilizáveis e adequadas a operações regulamentadas.',
        audience: ['Laboratórios', 'Distribuidores', 'Farmácias'],
      },
      advantages: {
        items: [
          'Robusta, empilhável e reutilizável',
          'Isolamento térmico durante todo o transporte',
          'Personalização com a marca do cliente e etiquetagem numerada',
        ],
      },
      features: {
        cards: [
          { number: '01', title: 'Caixa exterior plástica com tampa', description: 'Robusta, empilhável e reutilizável.' },
          { number: '02', title: 'Reforço interior isolante', description: 'Isolamento térmico durante todo o transporte.' },
          { number: '03', title: 'Acumuladores de frio', description: 'Integrados, para proteger o produto.' },
        ],
      },
      origin: {
        timeline: [
          { year: '2024', title: 'Início da produção de caixas de transporte de medicamentos, com moldes próprios' },
        ],
        missing: 'A história da marca PharmaLink, num parágrafo.',
      },
      proof: {
        clientsLabel: 'Desenvolvido para',
        clients: ['Empifarma', 'Plural', 'OCP', 'Medlog'],
        testimonial: plural.pt,
        link: { label: 'Ver o projeto Plural no portfólio', to: ROUTES.portfolio },
      },
    },
    en: {
      meta: {
        title: 'PharmaLink - Boxes for pharmaceutical distribution | LinkPlas',
        description: 'PharmaLink: reusable medicine transport boxes with thermal protection between the warehouse and the pharmacy, for pharmaceutical distribution.',
      },
      eyebrow: 'Pharmaceutical packaging',
      title: 'Thermal protection between the warehouse and the pharmacy.',
      lead: 'Reusable isothermal boxes for pharmaceutical distribution.',
      purpose: {
        text: 'Medicine transport boxes that keep the cold chain in pharmaceutical distribution, reusable and suited to regulated operations.',
        audience: ['Laboratories', 'Distributors', 'Pharmacies'],
      },
      advantages: {
        items: [
          'Sturdy, stackable and reusable',
          'Thermal insulation throughout transport',
          "Customisation with the client's brand and numbered labelling",
        ],
      },
      features: {
        cards: [
          { number: '01', title: 'Plastic outer box with lid', description: 'Sturdy, stackable and reusable.' },
          { number: '02', title: 'Insulating inner liner', description: 'Thermal insulation throughout transport.' },
          { number: '03', title: 'Cold packs', description: 'Built in, to protect the product.' },
        ],
      },
      origin: {
        timeline: [
          { year: '2024', title: 'Production of medicine transport boxes begins, with our own moulds' },
        ],
        missing: 'The story of the PharmaLink brand, in a paragraph.',
      },
      proof: {
        clientsLabel: 'Developed for',
        clients: ['Empifarma', 'Plural', 'OCP', 'Medlog'],
        testimonial: plural.en,
        link: { label: 'See the Plural project in the portfolio', to: ROUTES.portfolio },
      },
    },
  },

  factorylink: {
    pt: {
      meta: {
        title: 'FactoryLink - Peças técnicas injetadas à especificação | LinkPlas',
        description: 'FactoryLink: componentes plásticos injetados à especificação, da precisão às grandes séries, com soldadura por ultrassons, montagem e personalização.',
      },
      eyebrow: 'Injeção de peças técnicas',
      title: 'Componentes à especificação, da precisão às grandes séries.',
      lead: 'Peças técnicas à especificação, para empresas que precisam de componentes plásticos injetados.',
      purpose: {
        text: 'Acompanhamos o cliente desde a análise da peça e a escolha do material até à produção e ao acabamento.',
        audience: ['Empresas que precisam de componentes plásticos injetados'],
      },
      advantages: {
        cards: [
          { icon: 'ruler', title: 'Da análise à produção', description: 'Acompanhamos o cliente desde a análise da peça e a escolha do material até à produção e ao acabamento.' },
          { icon: 'shield-check', title: 'Controlo em cada série', description: 'Controlo dimensional e de qualidade, com domínio da conformidade regulamentar.' },
          { icon: 'truck', title: 'Produção em Portugal', description: 'Cumprimento de prazos, resposta rápida e proximidade, com 99% de entregas no prazo.' },
        ],
        note: 'Menos fornecedores para gerir e a identidade da marca do cliente no próprio produto.',
      },
      features: {
        stat: { value: '50–550 t', label: 'de força de fecho, em 5 máquinas de injeção' },
        materials: ['PP', 'PE', 'PA', 'ABS', 'PC', 'e outros'],
        checklist: [
          'Soldadura por ultrassons',
          'Colocação de componentes',
          'Etiquetagem e personalização com a marca do cliente',
        ],
      },
      origin: {
        timeline: [
          { year: '2018', title: 'Linha de montagem para vários setores' },
          { year: '2020', title: 'Máquina de ultrassons' },
        ],
        missing: 'A história da marca FactoryLink, num parágrafo, e o ano em que começou a produção de componentes para clientes industriais.',
      },
      proof: { missing: 'Clientes e testemunhos FactoryLink.' },
    },
    en: {
      meta: {
        title: 'FactoryLink - Injected technical parts to specification | LinkPlas',
        description: 'FactoryLink: injected plastic components made to specification, from precision parts to large series, with ultrasonic welding, assembly and customisation.',
      },
      eyebrow: 'Injection of technical parts',
      title: 'Components to specification, from precision to large series.',
      lead: 'Technical parts to specification, for companies that need injected plastic components.',
      purpose: {
        text: 'We work alongside the client from the analysis of the part and the choice of material through to production and finishing.',
        audience: ['Companies that need injected plastic components'],
      },
      advantages: {
        cards: [
          { icon: 'ruler', title: 'From analysis to production', description: 'We work alongside the client from the analysis of the part and the choice of material through to production and finishing.' },
          { icon: 'shield-check', title: 'Control in every series', description: 'Dimensional and quality control, with command of regulatory compliance.' },
          { icon: 'truck', title: 'Made in Portugal', description: 'Deadlines met, fast answers and proximity, with 99% on-time deliveries.' },
        ],
        note: "Fewer suppliers to manage, and the client's brand identity on the product itself.",
      },
      features: {
        stat: { value: '50–550 t', label: 'of clamping force, across 5 injection machines' },
        materials: ['PP', 'PE', 'PA', 'ABS', 'PC', 'and others'],
        checklist: [
          'Ultrasonic welding',
          'Fitting of components',
          "Labelling and customisation with the client's brand",
        ],
      },
      origin: {
        timeline: [
          { year: '2018', title: 'Assembly line for several sectors' },
          { year: '2020', title: 'Ultrasonic welding machine' },
        ],
        missing: 'The story of the FactoryLink brand, in a paragraph, and the year production of components for industrial clients began.',
      },
      proof: { missing: 'FactoryLink clients and testimonials.' },
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
