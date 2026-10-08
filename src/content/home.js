// Copy for the home page, per language.

import { useLanguage } from '../i18n/language-context';
import { PORTFOLIO_PUBLISHED, ROUTES } from './routes';

// What does not change with the language: where each sector leads and what it shows.
const sectorBase = {
  industria: {
    id: 'industria',
    tone: 'factorylink',
    icon: 'factory',
    brand: 'factorylink',
    to: ROUTES.productsOfBrand('factorylink'),
    panel: { name: 'FactoryLink', to: ROUTES.brand('factorylink'), image: '/images/home/setor-industria.webp' },
  },
  farmacia: {
    id: 'farmacia',
    tone: 'pharmalink',
    icon: 'pill',
    brand: 'pharmalink',
    to: ROUTES.productsOfBrand('pharmalink'),
    panel: { name: 'PharmaLink', to: ROUTES.brand('pharmalink'), image: '/images/home/setor-farmacia.webp' },
  },
  takeaway: {
    id: 'takeaway',
    tone: 'tupperlink',
    icon: 'package',
    brand: 'tupperlink',
    to: ROUTES.productsOfBrand('tupperlink'),
    panel: { name: 'TupperLink', to: ROUTES.brand('tupperlink'), image: '/images/home/setor-takeaway.webp' },
  },
  ecocatch: {
    id: 'ecocatch',
    tone: 'brand',
    // "Conhecer o projeto" leads to the project's page, or to Parcerias while that page is hidden.
    to: PORTFOLIO_PUBLISHED ? ROUTES.portfolio : ROUTES.partners,
    panel: {
      name: 'ecoCatch',
      to: ROUTES.partners,
      image: '/images/home/setor-ecocatch.webp',
      imageFit: 'contain',
      partnerLogo: '/images/home/zor-logo.png',
      partnerName: 'ZØR',
    },
  },
};

const sector = (id, copy) => ({
  ...sectorBase[id],
  ...copy,
  panel: { ...sectorBase[id].panel, ...copy.panel },
});

const home = {
  pt: {
    hero: {
      eyebrow: 'Injeção de plásticos · Desde 2012',
      title: 'Peças plásticas com rigor técnico, produzidas em Portugal.',
      lead: 'Da ideia ao molde, da injeção à personalização: desenvolvemos consigo, não apenas para si.',
      primaryAction: { label: 'Pedir orçamento', to: ROUTES.contact },
      secondaryAction: { label: 'Ver produtos', to: ROUTES.products },
    },
    sectors: {
      eyebrow: 'Setores',
      title: 'Três setores, a mesma exigência técnica.',
      description: 'Da peça industrial à embalagem farmacêutica e ao take-away reutilizável.',
      items: [
        sector('industria', {
          title: 'Indústria',
          text: 'Peças e componentes técnicos injetados, do desenvolvimento ao molde.',
          linkLabel: 'Ver FactoryLink',
          panel: {
            text: 'Peças plásticas técnicas para diversas indústrias, com precisão, qualidade e resistência.',
            action: 'Saber mais',
          },
        }),
        sector('farmacia', {
          title: 'Farmácia',
          text: 'Caixas isotérmicas e embalagens para distribuição farmacêutica.',
          linkLabel: 'Ver PharmaLink',
          panel: {
            text: 'Caixas para farmácias com boa durabilidade, concebidas para proteger os seus medicamentos no dia a dia.',
            action: 'Saber mais',
          },
        }),
        sector('takeaway', {
          title: 'Take-away',
          text: 'Caixas reutilizáveis e personalizadas para restauração.',
          linkLabel: 'Ver TupperLink',
          panel: {
            text: 'Recipientes TupperLink reutilizáveis para take-away. Uma alternativa às embalagens descartáveis.',
            action: 'Saber mais',
          },
        }),
        sector('ecocatch', {
          badge: 'Novo',
          title: 'ecoCatch, desenvolvido com a ZØR',
          linkLabel: 'Conhecer o projeto',
          panel: {
            text: 'O ecoCatch nasceu da parceria entre a LinkPlas e a ZØR — uma colaboração que reuniu ideias, experiência e um compromisso comum de criar algo novo.',
            action: 'Saber mais',
          },
        }),
      ],
    },
    stats: {
      label: 'A LinkPlas em números',
      items: [
        { value: '14', label: 'anos de atividade contínua' },
        { value: '5', label: 'máquinas de injeção, de 50 a 550 t' },
        { value: '+20', label: 'clientes ativos' },
        { value: '99%', label: 'de entregas no prazo' },
      ],
    },
    process: {
      eyebrow: 'Como trabalhamos',
      title: 'Do desenho à peça final.',
      steps: [
        { number: '01', title: 'Desenvolvimento', description: 'Do desenho da peça à validação do protótipo.' },
        { number: '02', title: 'Molde', description: 'Projeto e acompanhamento do molde.' },
        { number: '03', title: 'Injeção', description: '5 máquinas de 50 a 550 toneladas.' },
        { number: '04', title: 'Personalização', description: 'Marcação com a marca do cliente.' },
      ],
      more: { label: 'Ver como trabalhamos', to: ROUTES.process },
    },
    logoStrip: { title: 'Mais de 20 clientes ativos confiam na LinkPlas' },
  },

  en: {
    hero: {
      eyebrow: 'Plastic injection moulding · Since 2012',
      title: 'Precision plastic parts, made in Portugal.',
      lead: 'From idea to mould, from injection to customisation: we develop with you, not just for you.',
      primaryAction: { label: 'Request a quote', to: ROUTES.contact },
      secondaryAction: { label: 'View products', to: ROUTES.products },
    },
    sectors: {
      eyebrow: 'Sectors',
      title: 'Three sectors, the same technical standard.',
      description: 'From industrial parts to pharmaceutical packaging and reusable take-away.',
      items: [
        sector('industria', {
          title: 'Industry',
          text: 'Injected technical parts and components, from development to mould.',
          linkLabel: 'View FactoryLink',
          panel: {
            text: 'Technical plastic parts for many industries, with precision, quality and strength.',
            action: 'Learn more',
          },
        }),
        sector('farmacia', {
          title: 'Pharmacy',
          text: 'Isothermal boxes and packaging for pharmaceutical distribution.',
          linkLabel: 'View PharmaLink',
          panel: {
            text: 'Durable boxes for pharmacies, designed to protect your medicines day after day.',
            action: 'Learn more',
          },
        }),
        sector('takeaway', {
          title: 'Take-away',
          text: 'Reusable, customised containers for restaurants.',
          linkLabel: 'View TupperLink',
          panel: {
            text: 'Reusable TupperLink containers for take-away. An alternative to disposable packaging.',
            action: 'Learn more',
          },
        }),
        sector('ecocatch', {
          badge: 'New',
          title: 'ecoCatch, developed with ZØR',
          linkLabel: 'Discover the project',
          panel: {
            text: 'ecoCatch was born from the partnership between LinkPlas and ZØR — a collaboration that brought together ideas, experience and a shared commitment to create something new.',
            action: 'Learn more',
          },
        }),
      ],
    },
    stats: {
      label: 'LinkPlas in numbers',
      items: [
        { value: '14', label: 'years of continuous activity' },
        { value: '5', label: 'injection machines, from 50 to 550 t' },
        { value: '+20', label: 'active clients' },
        { value: '99%', label: 'on-time deliveries' },
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'From drawing to finished part.',
      steps: [
        { number: '01', title: 'Development', description: 'From the part drawing to prototype validation.' },
        { number: '02', title: 'Mould', description: 'Mould design and follow-up.' },
        { number: '03', title: 'Injection', description: '5 machines from 50 to 550 tonnes.' },
        { number: '04', title: 'Customisation', description: "Marking with the client's brand." },
      ],
      more: { label: 'See how we work', to: ROUTES.process },
    },
    logoStrip: { title: 'More than 20 active clients trust LinkPlas' },
  },
};

export function useHomeContent() {
  return home[useLanguage()];
}
