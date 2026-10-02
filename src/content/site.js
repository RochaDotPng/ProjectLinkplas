// Copy and links for the site shell (header and footer), per language, kept out of components.
// Link targets are router paths: the router adds the language prefix.

import { useLanguage } from '../i18n/language-context';

export const BRAND_NAME = 'LinkPlas';

const contactDetails = {
  address: 'Rua António Gomes Correia Junior, Oliveira de Azeméis',
  phone: { label: '+351 256 601 535', href: 'tel:+351256601535' },
  email: { label: 'geral@linkplas.pt', href: 'mailto:geral@linkplas.pt' },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/linkplaspt/' },
    { label: 'Instagram', href: 'https://www.instagram.com/link_plas/' },
    { label: 'Facebook', href: 'https://www.facebook.com/p/LinkplasLda-100057181310945' },
  ],
};

const complaintsBookUrl = 'https://www.livroreclamacoes.pt/';

const site = {
  pt: {
    homeLabel: 'LinkPlas — página inicial',
    skipLinkLabel: 'Saltar para o conteúdo',
    languageLabel: 'Idioma',
    mainNav: {
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
    },
    footer: {
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
    mainNav: {
      label: 'Main navigation',
      items: [
        { label: 'Company', to: '/About' },
        { label: 'Products', to: '/Products' },
        { label: 'Quality', to: '/Policy' },
        { label: 'Contact', to: '/Contacts' },
      ],
      cta: { label: 'Request a quote', to: '/Contacts' },
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
            { label: 'About us', to: '/About' },
            { label: 'Quality', to: '/Policy' },
          ],
        },
        {
          heading: 'Products',
          links: [
            { label: 'TupperLink', to: '/Products/Take-Away' },
            { label: 'PharmaLink', to: '/Products/Farmaceutica' },
          ],
        },
        {
          heading: 'Sectors',
          links: [
            { label: 'Industry', to: '/Products/Industria' },
            { label: 'Pharmacy', to: '/Products/Farmaceutica' },
            { label: 'Take-away', to: '/Products/Take-Away' },
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
