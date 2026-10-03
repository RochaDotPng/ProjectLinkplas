// Copy for the home page, per language. Sections are added here as the page is rebuilt.

import { useLanguage } from '../i18n/language-context';

const home = {
  pt: {
    hero: {
      eyebrow: 'Injeção de plásticos · Desde 2012',
      title: 'Peças plásticas com rigor técnico, produzidas em Portugal.',
      lead: 'Da ideia ao molde, da injeção à personalização: somos o parceiro de desenvolvimento para a indústria, a farmácia e o take-away.',
      primaryAction: { label: 'Pedir orçamento', to: '/Contacts' },
      secondaryAction: { label: 'Ver produtos', to: '/Products' },
    },
  },
  en: {
    hero: {
      eyebrow: 'Plastic injection moulding · Since 2012',
      title: 'Precision plastic parts, made in Portugal.',
      lead: 'From idea to mould, from injection to customisation: we are the development partner for industry, pharmacy and take-away.',
      primaryAction: { label: 'Request a quote', to: '/Contacts' },
      secondaryAction: { label: 'View products', to: '/Products' },
    },
  },
};

export function useHomeContent() {
  return home[useLanguage()];
}
