// Page titles and descriptions per language. `path` is the router path of the page.

import { ROUTES } from './routes';

export const SITE_ORIGIN = 'https://www.linkplas.pt';
export const UPDATED_TIME = '2026-10-03T00:00:00+00:00';

export const pageMeta = {
  home: {
    path: ROUTES.home,
    pt: {
      title: 'LinkPlas - Peças Plásticas & TupperLink Take-Away',
      description: 'LinkPlas - especialistas em peças plásticas e tupperwares take-away TupperLink. Recipientes reutilizáveis para delivery, tuppers ecológicos empilháveis e componentes industriais desde 2012.',
      keywords: 'LinkPlas, peças plásticas, tupperwares takeaway, tuppers take away, recipientes reutilizáveis, delivery containers Portugal, TupperLink, PharmaLink, componentes industriais',
      ogTitle: 'LinkPlas - Peças Plásticas & Tupperwares Take-Away TupperLink',
      ogDescription: 'LinkPlas - especialistas em peças plásticas e tupperwares take-away TupperLink. Recipientes reutilizáveis para delivery e componentes industriais desde 2012.',
    },
    en: {
      title: 'LinkPlas - Plastic Parts & TupperLink Take-Away',
      description: 'LinkPlas - specialists in plastic parts and TupperLink take-away containers. Reusable containers for delivery, stackable eco-friendly tubs and industrial components since 2012.',
      keywords: 'LinkPlas, plastic parts, take-away containers, reusable containers, delivery containers Portugal, TupperLink, PharmaLink, industrial components',
      ogTitle: 'LinkPlas - Plastic Parts & TupperLink Take-Away Containers',
      ogDescription: 'LinkPlas - specialists in plastic parts and TupperLink take-away containers. Reusable containers for delivery and industrial components since 2012.',
    },
  },

  news: {
    path: ROUTES.news,
    pt: {
      title: 'Notícias - LinkPlas',
      description: 'Novidades da LinkPlas: projetos, produtos, reconhecimentos e presença no setor.',
    },
    en: {
      title: 'News - LinkPlas',
      description: 'News from LinkPlas: projects, products, recognition and presence in the sector.',
    },
  },

  products: {
    path: ROUTES.products,
    pt: {
      title: 'Produtos - LinkPlas',
      description: 'Catálogo LinkPlas: recipientes TupperLink para take-away, caixas de transporte de medicamentos PharmaLink e componentes plásticos e soldadura por ultrassons FactoryLink.',
    },
    en: {
      title: 'Products - LinkPlas',
      description: 'The LinkPlas catalogue: TupperLink take-away containers, PharmaLink medicine transport boxes, and FactoryLink plastic components and ultrasonic welding.',
    },
  },

  partners: {
    path: ROUTES.partners,
    pt: {
      title: 'Parcerias - LinkPlas',
      description: 'Os parceiros da LinkPlas na indústria, na distribuição farmacêutica, na restauração e nas pescas, e a parceria com a ZØR no ecoCatch.',
    },
    en: {
      title: 'Partnerships - LinkPlas',
      description: "LinkPlas's partners in industry, pharmaceutical distribution, catering and fishing, and the partnership with ZØR on ecoCatch.",
    },
  },

  portfolio: {
    path: ROUTES.portfolio,
    pt: {
      title: 'Portfólio - LinkPlas',
      description: 'Projetos entregues pela LinkPlas: Plural, Platec, Coprax e o sistema ecoCatch desenvolvido com a ZØR.',
    },
    en: {
      title: 'Portfolio - LinkPlas',
      description: 'Projects delivered by LinkPlas: Plural, Platec, Coprax and the ecoCatch system developed with ZØR.',
    },
  },

  about: {
    path: ROUTES.about,
    pt: {
      title: 'Sobre nós - LinkPlas',
      description: 'Conheça a história da LinkPlas desde 2012: uma empresa portuguesa de injeção de peças plásticas, certificada ISO 9001. Missão, visão, valores e equipa.',
      ogTitle: 'Sobre nós - LinkPlas | História e valores',
    },
    en: {
      title: 'About us - LinkPlas',
      description: 'Discover the history of LinkPlas since 2012: a Portuguese plastic injection moulding company, ISO 9001 certified. Mission, vision, values and team.',
      ogTitle: 'About us - LinkPlas | History and values',
    },
  },

  process: {
    path: ROUTES.process,
    pt: {
      title: 'Como trabalhamos - LinkPlas',
      description: 'Do desenho da peça ao produto pronto a usar: desenvolvimento de produto, injeção de peças técnicas de 50 a 550 t, soldadura por ultrassons e acabamento.',
    },
    en: {
      title: 'How we work - LinkPlas',
      description: 'From the drawing of the part to the ready-to-use product: product development, injection of technical parts from 50 to 550 t, ultrasonic welding and finishing.',
    },
  },

  quality: {
    path: ROUTES.quality,
    pt: {
      title: 'Qualidade - LinkPlas',
      description: 'Qualidade certificada ISO 9001, política da qualidade, sustentabilidade e responsabilidade social na LinkPlas.',
      ogTitle: 'Qualidade - LinkPlas | ISO 9001',
    },
    en: {
      title: 'Quality - LinkPlas',
      description: 'ISO 9001 certified quality, the quality policy, sustainability and social responsibility at LinkPlas.',
      ogTitle: 'Quality - LinkPlas | ISO 9001',
    },
  },

  contact: {
    path: ROUTES.contact,
    pt: {
      title: 'Contactos - LinkPlas',
      description: 'Contacte a LinkPlas: telefone +351 256 601 535, email geral@linkplas.pt. Oliveira de Azeméis. Peça um orçamento para peças plásticas.',
      ogTitle: 'Contactos - LinkPlas | Peça um orçamento',
    },
    en: {
      title: 'Contact - LinkPlas',
      description: 'Contact LinkPlas: phone +351 256 601 535, email geral@linkplas.pt. Oliveira de Azeméis. Request a quote for plastic parts.',
      ogTitle: 'Contact - LinkPlas | Request a quote',
    },
  },
};
