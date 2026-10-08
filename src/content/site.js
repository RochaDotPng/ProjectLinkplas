// Copy and links for the site shell (header and footer), per language, kept out of components.
// Link targets are router paths: the router adds the language prefix.

import { useLanguage } from '../i18n/language-context';
import { ROUTES } from './routes';

export const BRAND_NAME = 'LinkPlas';

const contactDetails = {
  address: 'Rua António Gomes Correia Júnior, Oliveira de Azeméis',
  phone: { label: '+351 256 601 535', href: 'tel:+351256601535' },
  email: { label: 'geral@linkplas.pt', href: 'mailto:geral@linkplas.pt' },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/linkplaspt/' },
    { label: 'Instagram', href: 'https://www.instagram.com/link_plas/' },
    { label: 'Facebook', href: 'https://www.facebook.com/p/LinkplasLda-100057181310945' },
  ],
};

const complaintsBookUrl = 'https://www.livroreclamacoes.pt/';

// The brands open as a mega menu: icon, name, one line.
const brandLinks = (lines) => [
  { label: 'FactoryLink', brand: 'factorylink', to: ROUTES.brand('factorylink'), icon: 'factory', description: lines.factorylink },
  { label: 'PharmaLink', brand: 'pharmalink', to: ROUTES.brand('pharmalink'), icon: 'pill', description: lines.pharmalink },
  { label: 'TupperLink', brand: 'tupperlink', to: ROUTES.brand('tupperlink'), icon: 'package', description: lines.tupperlink },
];

const site = {
  pt: {
    homeLabel: 'LinkPlas — página inicial',
    skipLinkLabel: 'Saltar para o conteúdo',
    languageLabel: 'Idioma',
    placeholderLabel: 'Conteúdo a fornecer',
    breadcrumbLabel: 'Caminho',
    homeCrumb: 'Início',
    backToTopLabel: 'Voltar ao topo',
    newTabLabel: '(abre num novo separador)',
    // Closes every page.
    closingCta: {
      title: 'Tem um projeto em mente?',
      text: 'Envie-nos o desenho ou a ideia. Respondemos no prazo de 2 dias úteis com uma proposta.',
      action: { label: 'Pedir orçamento', to: ROUTES.contact },
    },
    mainNav: {
      label: 'Navegação principal',
      items: [
        { label: 'Notícias', to: ROUTES.news },
        { label: 'Produtos', to: ROUTES.products },
        {
          label: 'Marcas',
          base: '/marcas',
          mega: true,
          children: brandLinks({
            factorylink: 'Peças e componentes técnicos injetados, do desenvolvimento ao molde.',
            pharmalink: 'Caixas isotérmicas e embalagens para distribuição farmacêutica.',
            tupperlink: 'Caixas reutilizáveis e personalizadas para restauração.',
          }),
        },
        {
          label: 'Parcerias',
          base: '/parcerias',
          children: [
            { label: 'Parceiros', to: ROUTES.partners, end: true },
            { label: 'Portfólio', to: ROUTES.portfolio },
          ],
        },
        {
          label: 'Empresa',
          base: '/empresa',
          children: [
            { label: 'Sobre nós', to: ROUTES.about },
            { label: 'Como trabalhamos', to: ROUTES.process },
            { label: 'Qualidade', to: ROUTES.quality },
          ],
        },
        { label: 'Contactos', to: ROUTES.contact },
      ],
      cta: { label: 'Pedir orçamento', to: ROUTES.contact },
      megaLinkLabel: (name) => `Ver ${name}`,
      openMenuLabel: 'Abrir menu',
      closeMenuLabel: 'Fechar menu',
      mobileMenuLabel: 'Menu',
    },
    footer: {
      tagline: 'Injeção de plásticos com rigor técnico e proximidade ao cliente. Oliveira de Azeméis, desde 2012.',
      certification: { title: 'ISO 9001', description: 'Gestão da Qualidade' },
      columns: [
        {
          heading: 'Empresa',
          links: [
            { label: 'Sobre nós', to: ROUTES.about },
            { label: 'Como trabalhamos', to: ROUTES.process },
            { label: 'Qualidade', to: ROUTES.quality },
            { label: 'Notícias', to: ROUTES.news },
          ],
        },
        {
          heading: 'Marcas',
          links: [
            { label: 'TupperLink', to: ROUTES.brand('tupperlink') },
            { label: 'PharmaLink', to: ROUTES.brand('pharmalink') },
            { label: 'FactoryLink', to: ROUTES.brand('factorylink') },
            { label: 'Todos os produtos', to: ROUTES.products },
          ],
        },
        {
          heading: 'Parcerias',
          links: [
            { label: 'Parceiros', to: ROUTES.partners },
            { label: 'Portfólio', to: ROUTES.portfolio },
          ],
        },
      ],
      contacts: { heading: 'Contactos', ...contactDetails },
      legal: {
        copyright: 'LinkPlas. Todos os direitos reservados.',
        links: [{ label: 'Livro de Reclamações', href: complaintsBookUrl }],
      },
    },
  },

  en: {
    homeLabel: 'LinkPlas — home page',
    skipLinkLabel: 'Skip to content',
    languageLabel: 'Language',
    placeholderLabel: 'Content to come',
    breadcrumbLabel: 'Breadcrumb',
    homeCrumb: 'Home',
    backToTopLabel: 'Back to top',
    newTabLabel: '(opens in a new tab)',
    closingCta: {
      title: 'Have a project in mind?',
      text: 'Send us the drawing or the idea. We reply with a proposal within 2 working days.',
      action: { label: 'Request a quote', to: ROUTES.contact },
    },
    mainNav: {
      label: 'Main navigation',
      items: [
        { label: 'News', to: ROUTES.news },
        { label: 'Products', to: ROUTES.products },
        {
          label: 'Brands',
          base: '/marcas',
          mega: true,
          children: brandLinks({
            factorylink: 'Injected technical parts and components, from development to mould.',
            pharmalink: 'Isothermal boxes and packaging for pharmaceutical distribution.',
            tupperlink: 'Reusable, customised containers for restaurants.',
          }),
        },
        {
          label: 'Partnerships',
          base: '/parcerias',
          children: [
            { label: 'Partners', to: ROUTES.partners, end: true },
            { label: 'Portfolio', to: ROUTES.portfolio },
          ],
        },
        {
          label: 'Company',
          base: '/empresa',
          children: [
            { label: 'About us', to: ROUTES.about },
            { label: 'How we work', to: ROUTES.process },
            { label: 'Quality', to: ROUTES.quality },
          ],
        },
        { label: 'Contact', to: ROUTES.contact },
      ],
      cta: { label: 'Request a quote', to: ROUTES.contact },
      megaLinkLabel: (name) => `View ${name}`,
      openMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      mobileMenuLabel: 'Menu',
    },
    footer: {
      tagline: 'Plastic injection moulding with technical rigour and close customer support. Oliveira de Azeméis, since 2012.',
      certification: { title: 'ISO 9001', description: 'Quality Management' },
      columns: [
        {
          heading: 'Company',
          links: [
            { label: 'About us', to: ROUTES.about },
            { label: 'How we work', to: ROUTES.process },
            { label: 'Quality', to: ROUTES.quality },
            { label: 'News', to: ROUTES.news },
          ],
        },
        {
          heading: 'Brands',
          links: [
            { label: 'TupperLink', to: ROUTES.brand('tupperlink') },
            { label: 'PharmaLink', to: ROUTES.brand('pharmalink') },
            { label: 'FactoryLink', to: ROUTES.brand('factorylink') },
            { label: 'All products', to: ROUTES.products },
          ],
        },
        {
          heading: 'Partnerships',
          links: [
            { label: 'Partners', to: ROUTES.partners },
            { label: 'Portfolio', to: ROUTES.portfolio },
          ],
        },
      ],
      contacts: { heading: 'Contact', ...contactDetails },
      legal: {
        copyright: 'LinkPlas. All rights reserved.',
        links: [{ label: 'Complaints Book', href: complaintsBookUrl }],
      },
    },
  },
};

export function useSiteContent() {
  return site[useLanguage()];
}
