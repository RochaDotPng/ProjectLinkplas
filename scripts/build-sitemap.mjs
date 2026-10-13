// Writes sitemap.xml (repo root, for the IIS host) and public/sitemap.xml (for Vite and
// Vercel) from the site's own lists: the routes, the product and brand slugs, and the
// published languages. Run it with `npm run sitemap` whenever a page, product, brand or
// language is added or removed.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { PORTFOLIO_PUBLISHED, ROUTES } from '../src/content/routes.js';

const ORIGIN = 'https://www.linkplas.pt';
const root = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));

// The content modules import React and Vite-only APIs, so they cannot be loaded here; the
// few values needed are read from their source instead. Each read fails loudly if the
// source no longer looks the way it is expected to.
async function matches(file, pattern, what) {
  const found = [...(await readFile(root(file), 'utf8')).matchAll(pattern)];
  if (found.length === 0) throw new Error(`No ${what} found in ${file}: has its format changed?`);
  return found;
}

const languages = (
  await matches(
    'src/i18n/languages.js',
    /code: '(\w+)', locale: '([\w-]+)',.*?prefix: '([^']*)', published: (true|false)/g,
    'languages'
  )
)
  .filter(([, , , , published]) => published === 'true')
  .map(([, code, locale, prefix]) => ({ code, locale, prefix }));

const productSlugs = (await matches('src/content/products.js', /^ {4}slug: '([^']+)',\n(?! {4}hidden: true)/gm, 'product slugs')).map(
  ([, slug]) => slug
);

const [[, brandList]] = await matches('src/content/brands.js', /BRAND_SLUGS = \[([^\]]+)\]/g, 'brand slugs');
const brandSlugs = brandList.split(',').map((slug) => slug.trim().replace(/'/g, ''));

const pages = [
  { path: ROUTES.home, changefreq: 'monthly', priority: '1.0' },
  { path: ROUTES.products, changefreq: 'weekly', priority: '0.9' },
  ...productSlugs.map((slug) => ({ path: ROUTES.product(slug), changefreq: 'monthly', priority: '0.8' })),
  ...brandSlugs.map((slug) => ({ path: ROUTES.brand(slug), changefreq: 'monthly', priority: '0.8' })),
  { path: ROUTES.news, changefreq: 'weekly', priority: '0.7' },
  { path: ROUTES.partners, changefreq: 'monthly', priority: '0.7' },
  ...(PORTFOLIO_PUBLISHED ? [{ path: ROUTES.portfolio, changefreq: 'monthly', priority: '0.7' }] : []),
  { path: ROUTES.about, changefreq: 'yearly', priority: '0.8' },
  { path: ROUTES.process, changefreq: 'yearly', priority: '0.7' },
  { path: ROUTES.quality, changefreq: 'yearly', priority: '0.6' },
  { path: ROUTES.contact, changefreq: 'yearly', priority: '0.5' },
];

// The same rule as localizedPath() in src/i18n/languages.js.
const url = ({ prefix }, path) => `${ORIGIN}${path === '/' ? prefix || '/' : `${prefix}${path}`}`;

const today = new Date().toISOString().slice(0, 10);
const [defaultLanguage] = languages;

const entries = pages.flatMap((page) =>
  languages.map((language) => {
    const alternates =
      languages.length > 1
        ? [
            ...languages.map(
              (other) => `    <xhtml:link rel="alternate" hreflang="${other.locale}" href="${url(other, page.path)}"/>`
            ),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(defaultLanguage, page.path)}"/>`,
          ]
        : [];
    return [
      '  <url>',
      `    <loc>${url(language, page.path)}</loc>`,
      ...alternates,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries,
  '</urlset>',
  '',
].join('\n');

await Promise.all(['sitemap.xml', 'public/sitemap.xml'].map((file) => writeFile(root(file), xml)));
console.log(`Sitemap written: ${entries.length} addresses (${pages.length} pages × ${languages.length} languages).`);
