// Shared pt-PT copy and links for the site shell, kept out of components so it can be translated.

export const brand = {
  name: 'LinkPlas',
  homeLabel: 'LinkPlas — página inicial',
};

export const skipLinkLabel = 'Saltar para o conteúdo';

export const mainNav = {
  label: 'Navegação principal',
  items: [
    { label: 'Empresa', to: '/About' },
    { label: 'Produtos', to: '/Products' },
    { label: 'Qualidade', to: '/Policy' },
    { label: 'Contactos', to: '/Contacts' },
  ],
  cta: { label: 'Pedir orçamento', to: '/Contacts' },
  openMenuLabel: 'Abrir menu',
  closeMenuLabel: 'Fechar menu',
  mobileMenuLabel: 'Menu',
};

export const languages = {
  label: 'Idioma',
  current: 'pt',
  options: [{ code: 'pt', short: 'PT', name: 'Português' }],
};

export const footer = {
  tagline: 'Injeção de plásticos com rigor técnico e proximidade ao cliente. Oliveira de Azeméis, desde 2012.',
  certification: { title: 'ISO 9001', description: 'Gestão da Qualidade' },
  columns: [
    {
      heading: 'Empresa',
      links: [
        { label: 'Sobre nós', to: '/About' },
        { label: 'Qualidade', to: '/Policy' },
      ],
    },
    {
      heading: 'Produtos',
      links: [
        { label: 'TupperLink', to: '/Products/Take-Away' },
        { label: 'PharmaLink', to: '/Products/Farmaceutica' },
      ],
    },
    {
      heading: 'Setores',
      links: [
        { label: 'Indústria', to: '/Products/Industria' },
        { label: 'Farmácia', to: '/Products/Farmaceutica' },
        { label: 'Take-away', to: '/Products/Take-Away' },
      ],
    },
  ],
  contacts: {
    heading: 'Contactos',
    address: 'Rua António Gomes Correia Junior, Oliveira de Azeméis',
    phone: { label: '+351 256 601 535', href: 'tel:+351256601535' },
    email: { label: 'geral@linkplas.pt', href: 'mailto:geral@linkplas.pt' },
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/linkplaspt/' },
      { label: 'Instagram', href: 'https://www.instagram.com/link_plas/' },
      { label: 'Facebook', href: 'https://www.facebook.com/p/LinkplasLda-100057181310945' },
    ],
  },
  legal: {
    copyright: 'LinkPlas. Todos os direitos reservados.',
    links: [{ label: 'Livro de Reclamações', href: 'https://www.livroreclamacoes.pt/' }],
  },
};
