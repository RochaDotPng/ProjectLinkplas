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

// The Portfólio page is built but hidden until its content is ready (client, 2026-10-08).
// While this is false the page has no route (its address leads to Parcerias), no link
// anywhere and no sitemap entry. Set it to true and run `npm run sitemap` to bring it back.
export const PORTFOLIO_PUBLISHED = false;

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
