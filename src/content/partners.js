// Partners, their logos and the portfolio of delivered projects, per language.
// Monte Meão is deliberately absent: it is not an active partnership.

import { useLanguage } from '../i18n/language-context';
import { ROUTES } from './routes';

// Every image dropped into src/assets/logos is picked up here; see the LEIA-ME in that folder.
const logoFiles = import.meta.glob('../assets/logos/*.{svg,png,webp}', { eager: true, import: 'default' });
const logos = Object.fromEntries(
  Object.entries(logoFiles).map(([path, url]) => [path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.')), url])
);

// The eight active partners. `id` is also the logo's file name.
const PARTNERS = [
  { id: 'platec', name: 'Platec' },
  { id: 'plural', name: 'Plural' },
  { id: 'zor', name: 'ZØR' },
  { id: 'polisport', name: 'Polisport' },
  { id: 'empifarma', name: 'Empifarma' },
  { id: 'ocp', name: 'OCP' },
  { id: 'medlog', name: 'Medlog' },
  { id: 'coprax', name: 'Coprax' },
];

const partners = {
  pt: {
    crumb: 'Parcerias',
    hero: {
      eyebrow: 'Clientes e parceiros',
      title: 'Relações que continuam para além da primeira entrega.',
      lead: 'Trabalhamos com empresas da indústria, da distribuição farmacêutica, da restauração e das pescas.',
    },
    // ecoCatch is this isothermal kit. Its plastic box is the one the PharmaLink boxes use,
    // put to another use, so nothing here calls it a pharmacy product.
    zor: {
      eyebrow: 'ecoCatch · em parceria com a ZØR',
      title: 'LinkPlas × ZØR',
      lead: 'O kit isotérmico é adequado para todos os tipos de transporte de produtos termossensíveis. Trata-se de uma solução fácil de utilizar, reutilizável e qualificada até 20 horas.',
      action: { label: 'Ver o projeto no portfólio', to: ROUTES.portfolio },
      layers: [
        'Caixa exterior LinkPlas em plástico resistente',
        'Inserção em esferovite ZØR para conservação térmica',
        'Acumulador para manutenção de baixas temperaturas',
        'Tampa do invólucro em esferovite',
        'Tampa da caixa exterior',
      ],
      // Labels on the exploded view, keyed by the part each one follows.
      callouts: {
        caixa: ['01. Caixa exterior', 'plástica com tampa'],
        tampa: '02. Reforço com isolamento térmico',
        acumulador: '03. Acumuladores',
      },
    },
    list: {
      eyebrow: 'Parceiros',
      title: 'Parcerias ativas',
      description: 'Mais de 20 clientes ativos confiam na LinkPlas.',
      lines: {
        platec: 'Projeto concluído em dezembro de 2025.',
        plural: 'Mais de 10.000 caixas e tampas personalizadas com a marca do cliente.',
        zor: 'ecoCatch: sistema reutilizável para pescado, desenvolvido em parceria.',
        polisport: 'Recomendou a LinkPlas à Coprax.',
        empifarma: 'Caixas de transporte de medicamentos para a distribuição farmacêutica.',
        ocp: 'Caixas de transporte de medicamentos para a distribuição farmacêutica.',
        medlog: 'Caixas de transporte de medicamentos para a distribuição farmacêutica.',
        coprax: 'Chegou à LinkPlas por indicação da Polisport.',
      },
    },
    referral: {
      eyebrow: 'Recomendação',
      title: 'Clientes que chegam por recomendação de outros clientes.',
      text: 'A Coprax chegou à LinkPlas por indicação da Polisport, que a destacou como uma empresa cumpridora e com elevado conhecimento técnico.',
      quote: '“Chegámos à LinkPlas por recomendação da Polisport, que a destacou como uma empresa cumpridora e com muito conhecimento.”',
      author: 'Tiago Cunha — CEO, Coprax',
    },
    portfolio: {
      photoLabel: 'Fotografia',
      hero: {
        eyebrow: 'Portfólio',
        title: 'Projetos entregues.',
        lead: 'Alguns dos projetos que desenvolvemos e produzimos com os nossos parceiros.',
      },
      projects: [
        {
          id: 'plural',
          client: 'Plural',
          period: '2025–2026',
          title: 'Caixas e tampas com a marca do cliente',
          stat: { value: '+10.000', label: 'caixas e tampas personalizadas' },
          text: 'Caixas e tampas personalizadas com a marca do cliente, com etiquetagem numerada e componentes à especificação.',
          testimonial: {
            quote: '“(…) Foram excelentes no prazo de entrega, na qualidade das caixas fornecidas, nos componentes colocados especificados por nós e, claro, na personalização da nossa marca nas caixas. Continuem assim!”',
            name: 'Nuno Duarte',
            role: 'Responsável de Logística, Plural · fevereiro de 2026',
          },
          photo: 'Fotografia das caixas e tampas Plural.',
        },
        {
          id: 'platec',
          client: 'Platec',
          period: '2025',
          title: 'Projeto concluído em dezembro de 2025',
          missing: 'Descrição do projeto Platec: o que foi desenvolvido e produzido.',
          testimonial: {
            quote: '“Excelente profissionalismo, organização e cumprimento em todo o processo, do início ao fim do projeto.”',
            name: 'Xavier Miranda',
            role: 'Platec',
          },
          photo: 'Fotografia do projeto Platec.',
        },
        {
          id: 'coprax',
          client: 'Coprax',
          title: 'Um cliente que chegou por recomendação',
          text: 'A Coprax chegou à LinkPlas por indicação da Polisport, que a destacou como uma empresa cumpridora e com elevado conhecimento técnico.',
          testimonial: {
            quote: '“Chegámos à LinkPlas por recomendação da Polisport, que a destacou como uma empresa cumpridora e com muito conhecimento.”',
            name: 'Tiago Cunha',
            role: 'CEO, Coprax',
          },
          photo: 'Fotografia do projeto Coprax.',
        },
        {
          id: 'ecocatch',
          client: 'ecoCatch, com a ZØR',
          period: '2026',
          title: 'Caixas reutilizáveis para pescado, em vez de EPS descartável',
          stat: { value: '6 t', label: 'de EPP reutilizável substituem 720 toneladas de EPS descartável (3 anos, numa operação típica)' },
          text: 'Sistema modular para a logística de peixe fresco e marisco, com controlo térmico e sem necessidade de gelo.',
          features: [
            { icon: 'package', title: 'ecoFish', text: 'Caixa de transporte direto de peixe, filetes e marisco. Tampa com acumulador de frio integrado. 525 × 330 × 160 mm, cerca de 16 L.' },
            { icon: 'layers', title: 'ecoShell', text: 'Contentor isotérmico em EPP, compatível com a logística existente. Até 24 h sem refrigeração. 595 × 395 × 260 mm.' },
            { icon: 'link', title: 'ecoTrace', text: 'Gestão digital de ativos e rastreabilidade, com relatórios de impacto para a gestão ESG. Serviço digital.' },
          ],
          benefits: [
            'Menos perdas de pescado',
            'Operações mais simples, sem gelo',
            'Controlo térmico até 24 h em veículos não refrigerados',
            'Imagem premium e conformidade com o Green Deal e a PPWR',
          ],
          image: '/images/home/setor-ecocatch.webp',
          imageAlt: 'Vista explodida do ecoCatch: caixa exterior plástica com tampa, reforço com isolamento térmico e acumuladores.',
        },
      ],
    },
  },

  en: {
    crumb: 'Partnerships',
    hero: {
      eyebrow: 'Clients and partners',
      title: 'Relationships that carry on beyond the first delivery.',
      lead: 'We work with companies in industry, pharmaceutical distribution, catering and fishing.',
    },
    zor: {
      eyebrow: 'ecoCatch · in partnership with ZØR',
      title: 'LinkPlas × ZØR',
      lead: 'The isothermal kit suits every kind of transport of temperature-sensitive products. It is easy to use, reusable and qualified for up to 20 hours.',
      action: { label: 'See the project in the portfolio', to: ROUTES.portfolio },
      layers: [
        'LinkPlas outer box in strong plastic',
        'ZØR polystyrene insert for thermal protection',
        'Cold pack that keeps temperatures low',
        'Polystyrene insert lid',
        'Lid of the outer box',
      ],
      callouts: {
        caixa: ['01. Plastic outer', 'box with lid'],
        tampa: '02. Liner with thermal insulation',
        acumulador: '03. Cold packs',
      },
    },
    list: {
      eyebrow: 'Partners',
      title: 'Active partnerships',
      description: 'More than 20 active clients trust LinkPlas.',
      lines: {
        platec: 'Project completed in December 2025.',
        plural: "More than 10,000 boxes and lids customised with the client's brand.",
        zor: 'ecoCatch: a reusable system for fish, developed in partnership.',
        polisport: 'Recommended LinkPlas to Coprax.',
        empifarma: 'Medicine transport boxes for pharmaceutical distribution.',
        ocp: 'Medicine transport boxes for pharmaceutical distribution.',
        medlog: 'Medicine transport boxes for pharmaceutical distribution.',
        coprax: 'Came to LinkPlas on the recommendation of Polisport.',
      },
    },
    referral: {
      eyebrow: 'Recommendation',
      title: 'Clients who arrive on the recommendation of other clients.',
      text: 'Coprax came to LinkPlas on the recommendation of Polisport, which singled it out as a dependable company with deep technical knowledge.',
      quote: '“We came to LinkPlas on the recommendation of Polisport, which singled it out as a dependable and very knowledgeable company.”',
      author: 'Tiago Cunha — CEO, Coprax',
    },
    portfolio: {
      photoLabel: 'Photograph',
      hero: {
        eyebrow: 'Portfolio',
        title: 'Projects delivered.',
        lead: 'Some of the projects we have developed and produced with our partners.',
      },
      projects: [
        {
          id: 'plural',
          client: 'Plural',
          period: '2025–2026',
          title: "Boxes and lids with the client's brand",
          stat: { value: '+10,000', label: 'customised boxes and lids' },
          text: "Boxes and lids customised with the client's brand, with numbered labelling and components to specification.",
          testimonial: {
            quote: '“(…) They were excellent on delivery time, on the quality of the boxes supplied, on fitting the components we specified and, of course, on customising the boxes with our brand. Keep it up!”',
            name: 'Nuno Duarte',
            role: 'Logistics Manager, Plural · February 2026',
          },
          photo: 'Photograph of the Plural boxes and lids.',
        },
        {
          id: 'platec',
          client: 'Platec',
          period: '2025',
          title: 'Project completed in December 2025',
          missing: 'Description of the Platec project: what was developed and produced.',
          testimonial: {
            quote: '“Excellent professionalism, organisation and reliability throughout the process, from the start of the project to the end.”',
            name: 'Xavier Miranda',
            role: 'Platec',
          },
          photo: 'Photograph of the Platec project.',
        },
        {
          id: 'coprax',
          client: 'Coprax',
          title: 'A client who came by recommendation',
          text: 'Coprax came to LinkPlas on the recommendation of Polisport, which singled it out as a dependable company with deep technical knowledge.',
          testimonial: {
            quote: '“We came to LinkPlas on the recommendation of Polisport, which singled it out as a dependable and very knowledgeable company.”',
            name: 'Tiago Cunha',
            role: 'CEO, Coprax',
          },
          photo: 'Photograph of the Coprax project.',
        },
        {
          id: 'ecocatch',
          client: 'ecoCatch, with ZØR',
          period: '2026',
          title: 'Reusable boxes for fish, instead of disposable EPS',
          stat: { value: '6 t', label: 'of reusable EPP replace 720 tonnes of disposable EPS (3 years, in a typical operation)' },
          text: 'A modular system for the logistics of fresh fish and seafood, with thermal control and no need for ice.',
          features: [
            { icon: 'package', title: 'ecoFish', text: 'Box for the direct transport of fish, fillets and seafood. Lid with a built-in cold pack. 525 × 330 × 160 mm, about 16 L.' },
            { icon: 'layers', title: 'ecoShell', text: 'Isothermal EPP container, compatible with existing logistics. Up to 24 h without refrigeration. 595 × 395 × 260 mm.' },
            { icon: 'link', title: 'ecoTrace', text: 'Digital asset management and traceability, with impact reports for ESG management. A digital service.' },
          ],
          benefits: [
            'Less fish lost',
            'Simpler operations, with no ice',
            'Thermal control for up to 24 h in unrefrigerated vehicles',
            'A premium image and compliance with the Green Deal and the PPWR',
          ],
          image: '/images/home/setor-ecocatch.webp',
          imageAlt: 'Exploded view of ecoCatch: plastic outer box with lid, liner with thermal insulation and cold packs.',
        },
      ],
    },
  },
};

const titleCase = (id) => id.replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

// The partners, each with its logo when a file with its id exists, followed by any other
// logo found in the folder.
function logoItems() {
  const known = PARTNERS.map(({ id, name }) => ({ id, name, logo: logos[id] }));
  const extra = Object.keys(logos)
    .filter((id) => !PARTNERS.some((partner) => partner.id === id))
    .map((id) => ({ id, name: titleCase(id), logo: logos[id] }));
  return [...known, ...extra];
}

export function useLogoStripItems() {
  return logoItems();
}

export function usePartnersContent() {
  const copy = partners[useLanguage()];
  return {
    ...copy,
    partners: PARTNERS.map(({ id, name }) => ({ id, name, logo: logos[id], line: copy.list.lines[id] })),
  };
}
