// Every page address, in one place. Addresses are Portuguese and shared by both languages
// (English adds the /en prefix through the router basename).

export const ROUTES = {
  home: '/',
  news: '/noticias',
  products: '/produtos',
  product: (slug) => `/produtos/${slug}`,
  productsOfBrand: (brand) => `/produtos?marcas=${brand}`,
  brand: (brand) => `/marcas/${brand}`,
  partners: '/parcerias',
  portfolio: '/parcerias/portfolio',
  about: '/empresa/sobre-nos',
  process: '/empresa/como-trabalhamos',
  quality: '/empresa/qualidade',
  contact: '/contactos',
};

// Addresses the site used before the rebrand, and where each one lives now. The same list is
// served as permanent redirects by vercel.json and web.config; this copy covers any other host.
export const LEGACY_ROUTES = {
  '/About': ROUTES.about,
  '/Policy': ROUTES.quality,
  '/Contacts': ROUTES.contact,
  '/Products': ROUTES.products,
  '/Products/Take-Away': ROUTES.productsOfBrand('tupperlink'),
  '/Products/Farmaceutica': ROUTES.productsOfBrand('pharmalink'),
  '/Products/Industria': ROUTES.productsOfBrand('factorylink'),
  '/Products/Servicos': ROUTES.product('soldadura-por-ultrassons'),
};
