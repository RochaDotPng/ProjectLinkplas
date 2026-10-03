// The news feed. Posts are added here by hand, newest first; each one links to the original
// post on the company's social networks.

import { useLanguage } from '../i18n/language-context';
import { getLanguage } from '../i18n/languages';

const posts = [
  {
    date: '2026-01-08',
    source: 'LinkedIn',
    image: '/LinkplasData/newyear.jpg',
    url: 'https://www.linkedin.com/posts/linkplaspt_ap%C3%B3s-um-2025-que-teve-tanto-de-desafiante-activity-7415088926480048128-VP_G',
    pt: {
      title: 'Iniciar 2026 com união e ambição',
      text: 'Depois de um 2025 desafiante e bem-sucedido, iniciamos 2026 com ambição de crescer, agradecendo a clientes, parceiros e à nossa equipa pela união e dedicação.',
    },
    en: {
      title: 'Starting 2026 united and ambitious',
      text: 'After a demanding and successful 2025, we start 2026 with the ambition to grow, thanking clients, partners and our team for their unity and dedication.',
    },
  },
  {
    date: '2024-12-23',
    source: 'LinkedIn',
    image: '/LinkplasData/natal.jpeg',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7277005348857663489',
    pt: {
      title: 'Feliz Natal',
      text: 'Desejamos que este Natal vos traga a vocês e às vossas famílias momentos de paz, alegria e renovação. Um Ano Novo repleto de saúde, felicidade e prosperidade.',
    },
    en: {
      title: 'Merry Christmas',
      text: 'We wish you and your families a Christmas of peace, joy and renewal, and a New Year full of health, happiness and prosperity.',
    },
  },
  {
    date: '2024-12-18',
    source: 'Instagram',
    image: '/LinkplasData/rabanada.jpeg',
    url: 'https://www.instagram.com/p/DDvOZGfCb6sdpaIIO__HDVJVwVnwqTH-Tc9il80/',
    pt: {
      title: 'Rabanadas frescas',
      text: 'Com TupperLink ela não “murcha”: mantém o seu sabor e textura crocante sem precisar de um milagre de Natal.',
    },
    en: {
      title: 'Fresh rabanadas',
      text: 'With TupperLink they do not go soft: they keep their flavour and crisp texture without needing a Christmas miracle.',
    },
  },
  {
    date: '2024-11-14',
    source: 'LinkedIn',
    image: '/LinkplasData/igualdade.jpeg',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7262842505405091840',
    pt: {
      title: 'Selo Igualdade Salarial',
      text: 'Este reconhecimento reafirma o nosso compromisso com a igualdade de género e com um ambiente onde todos são valorizados pelo seu talento.',
    },
    en: {
      title: 'Equal Pay Seal',
      text: 'This recognition reaffirms our commitment to gender equality and to a workplace where everyone is valued for their talent.',
    },
  },
  {
    date: '2024-10-28',
    source: 'Instagram',
    image: '/LinkplasData/image.jpg',
    url: 'https://www.instagram.com/p/DBrQHqqipX8-WmDx8uMIDVILqkWciNnASDN3-Q0/',
    pt: {
      title: 'Nos bastidores da LinkPlas',
      text: 'Aqui está um vislumbre do nosso compromisso com a qualidade enquanto preparamos cada embalagem com precisão.',
    },
    en: {
      title: 'Behind the scenes at LinkPlas',
      text: 'A glimpse of our commitment to quality as we prepare each package with precision.',
    },
  },
  {
    date: '2024-10-22',
    source: 'LinkedIn',
    image: '/LinkplasData/organizacao.jpeg',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7254503911208722432',
    pt: {
      title: 'Introdução da gama TupperLink',
      text: 'Novidade para o seu restaurante ou take-away e para a organização da sua casa. Empilháveis e compactas: poupam espaço na cozinha e no restaurante.',
    },
    en: {
      title: 'Introducing the TupperLink range',
      text: 'New for your restaurant or take-away, and for organising your home. Stackable and compact: they save space in the kitchen and in the restaurant.',
    },
  },
];

const ui = {
  pt: {
    hero: { eyebrow: 'Notícias', title: 'Novidades da LinkPlas.', missingLead: 'Uma frase de introdução à página de notícias.' },
    readPost: 'Ler publicação',
  },
  en: {
    hero: { eyebrow: 'News', title: 'News from LinkPlas.', missingLead: 'A one-line introduction to the news page.' },
    readPost: 'Read post',
  },
};

export function useNews() {
  const language = useLanguage();
  const { locale } = getLanguage(language);
  const formatDate = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  return {
    ...ui[language],
    posts: [...posts]
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(({ date, source, image, url, [language]: copy }) => ({
        date,
        dateLabel: formatDate.format(new Date(date)),
        source,
        image,
        url,
        ...copy,
      })),
  };
}
