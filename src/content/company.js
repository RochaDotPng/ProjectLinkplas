// The Empresa pages (Sobre nós, Como trabalhamos, Qualidade), per language. The copy comes
// from the 2026 institutional presentation and from the previous site. `missing` marks
// content the client still has to supply.

import { useLanguage } from '../i18n/language-context';
import { ROUTES } from './routes';

const company = {
  pt: {
    crumb: 'Empresa',

    about: {
      hero: {
        current: 'Sobre nós',
        eyebrow: 'Quem somos',
        title: 'Peças plásticas com rigor técnico, produzidas em Portugal desde 2012.',
        lead: 'A LinkPlas é uma empresa portuguesa especializada na injeção de peças plásticas, com atividade na indústria, na farmácia e no take-away. Desenvolvemos e produzimos soluções que aliam capacidade técnica, rigor e proximidade ao cliente.',
        image: { src: '/images/empresa/maquina-injecao.webp', position: 'right', alt: 'Máquina de injeção na fábrica da LinkPlas, com uma tampa acabada de moldar' },
      },
      stats: {
        label: 'A LinkPlas em números',
        items: [
          { value: '14', label: 'anos de atividade contínua' },
          { value: '5', label: 'máquinas de injeção, de 50 a 550 t' },
          { value: '12', label: 'colaboradores, 6 desde o início' },
          { value: '+20', label: 'clientes ativos' },
          { value: '99%', label: 'de entregas no prazo' },
        ],
      },
      history: {
        eyebrow: 'A nossa história',
        title: 'De fornecedor de componentes a parceiro de desenvolvimento.',
        text: 'A LinkPlas nasceu em 2012 com uma convicção simples: numa indústria onde o preço é muitas vezes o único argumento, há espaço para quem compete pela qualidade, pelo rigor técnico e pela confiança construída com cada cliente.',
        image: { src: '/images/empresa/armazem-moldes.jpg', alt: 'Estantes com moldes de injeção no armazém da LinkPlas' },
        timeline: [
          { year: '2012', title: 'Fundação', description: 'Paula Rocha cria a LinkPlas, depois de uma carreira ligada à indústria.' },
          { year: '2014', title: 'Certificação ISO 9001' },
          { year: '2016', title: 'Primeiro produto próprio na área alimentar' },
          { year: '2018', title: 'Linha de montagem para vários setores' },
          { year: '2020', title: 'Máquina de ultrassons', description: 'Para dar resposta às solicitações do mercado.' },
          { year: '2023', title: 'Caixas plásticas para armazenamento de alimentos', description: 'Conceção, desenvolvimento e início de produção da gama.' },
          { year: '2024', title: 'Caixas de transporte de medicamentos', description: 'Início de produção, em plástico de alta resistência e com moldes próprios.' },
          { year: '2026', title: 'Hoje', description: 'ecoCatch com a ZØR e 14 anos de atividade contínua.', current: true },
        ],
      },
      purpose: {
        image: { src: '/images/empresa/linha-producao.webp', alt: 'Tampas transparentes, acabadas de injetar, no tapete de saída da máquina' },
        mission: {
          title: 'Missão',
          text: 'Desenvolver e produzir peças e componentes plásticos de elevada qualidade e exigência técnica, trabalhando em parceria com os clientes em soluções eficientes e inovadoras que reduzem o impacto ambiental ao longo de todo o ciclo de vida.',
        },
        vision: {
          title: 'Visão',
          text: 'Ser uma referência nos componentes plásticos, com resposta global aos clientes mais exigentes, em Portugal e no estrangeiro, reconhecida pela capacidade tecnológica e por um compromisso firme com o desenvolvimento sustentável.',
        },
      },
      values: {
        eyebrow: 'Valores',
        title: 'Quatro valores que orientam cada projeto.',
        image: { src: '/images/empresa/rececao.webp', alt: 'Receção da LinkPlas, com os certificados da empresa na parede' },
        items: [
          { number: '01', title: 'Confiança e rigor', description: 'Relação direta com o cliente, transparência nos prazos e nos custos, e palavra cumprida.' },
          { number: '02', title: 'Qualidade e excelência', description: 'Conhecimento técnico dos materiais, controlo em cada série e conformidade para contacto alimentar e farmacêutico.' },
          { number: '03', title: 'Responsabilidade ambiental e social', description: 'Reutilização e durabilidade como alternativa ao descartável, e respeito por quem produz e por quem compra.' },
          { number: '04', title: 'Eficácia e eficiência operacional', description: 'Flexibilidade entre séries industriais, projetos de diferentes escalas e produtos de marca própria.' },
        ],
      },
      team: {
        eyebrow: 'A nossa equipa',
        title: 'Entreajuda, boa disposição e compromisso.',
        text: 'Uma equipa que celebra junta cada conquista e cumpre o que promete.',
        stat: { value: '12', label: 'colaboradores, 6 desde o início' },
        photo: '/images/equipa/equipa.jpg',
        photoAlt: 'A equipa da LinkPlas',
      },
      // The people, their roles and their photographs are the client's team slide (October 2026).
      // `since` and `bio` come from the institutional presentation; the client is to supply them
      // for Rui Silva and André Silva.
      people: {
        title: 'As pessoas por trás de cada peça.',
        people: [
          { name: 'Paula Rocha', role: 'Fundadora · Comercial', since: 'Desde 2012', bio: 'Fundou a LinkPlas depois de uma carreira ligada à indústria. Lidera negociações, projetos e a coordenação com clientes e fornecedores.', photo: '/images/equipa/paula-rocha.jpg' },
          { name: 'Ana Paula', role: 'Qualidade e Planeamento', since: 'Desde maio de 2012', bio: 'Engenharia Química e Industrial, pós-graduada em Qualidade. Lidera as certificações e o desenvolvimento de produto.', photo: '/images/equipa/ana-paula.jpg' },
          { name: 'Rui Silva', role: 'Projetos', photo: '/images/equipa/rui-silva.jpg' },
          { name: 'Sandra Tavares', role: 'Logística e Armazém', since: 'Desde março de 2012', bio: 'Começou como operadora de máquina e passou pelo controlo de qualidade. É a voz da LinkPlas no contacto diário com clientes.', photo: '/images/equipa/sandra-tavares.jpg' },
          { name: 'António Filipe', role: 'Produção e Afinação de Máquinas', since: 'Desde junho de 2012', bio: 'Entrou com 16 anos de experiência em injeção. Acompanha o arranque de cada peça para que seja viável e rentável.', photo: '/images/equipa/antonio-filipe.jpg' },
          { name: 'André Silva', role: 'Responsável Digital', photo: '/images/equipa/andre-silva.jpg' },
        ],
      },
    },

    process: {
      hero: {
        current: 'Como trabalhamos',
        eyebrow: 'O que fazemos',
        title: 'Do desenho da peça ao produto pronto a usar.',
      },
      development: {
        eyebrow: 'Desenvolvimento de produto',
        title: 'Um só interlocutor, da ideia à produção em série.',
        steps: [
          { number: '01', title: 'Viabilidade', description: 'Análise da ideia e da peça, e escolha dos materiais.' },
          { number: '02', title: 'Molde e protótipos', description: 'Apoio ao desenvolvimento do molde e validação com protótipos.' },
          { number: '03', title: 'Industrialização', description: 'Preparação do processo para a produção em série.' },
          { number: '04', title: 'Produção', description: 'Injeção, controlo de qualidade, acabamento e entrega.' },
        ],
        benefits: [
          'Menos riscos e menos iterações',
          'Produto otimizado para produção',
          'Equipa com experiência em injeção, materiais e conformidade',
        ],
      },
      injection: {
        eyebrow: 'Injeção de peças técnicas',
        title: 'Componentes à especificação, da precisão às grandes séries.',
        stat: { value: '50–550 t', label: 'de força de fecho, em 5 máquinas de injeção' },
        materialsTitle: 'Materiais técnicos',
        materials: ['PP', 'PE', 'PA', 'ABS', 'PC', 'e outros'],
        cards: [
          { icon: 'ruler', title: 'Da análise à produção', description: 'Acompanhamos o cliente desde a análise da peça e a escolha do material até à produção e ao acabamento.' },
          { icon: 'shield-check', title: 'Controlo em cada série', description: 'Controlo dimensional e de qualidade, com domínio da conformidade regulamentar.' },
          { icon: 'truck', title: 'Produção em Portugal', description: 'Cumprimento de prazos, resposta rápida e proximidade, com 99% de entregas no prazo.' },
        ],
        link: { label: 'Conhecer a FactoryLink', to: ROUTES.brand('factorylink') },
      },
      finishing: {
        eyebrow: 'Soldadura e acabamento',
        title: 'Uniões limpas e resistentes, sem colas.',
        text: 'Serviços de acabamento e montagem que complementam a injeção e entregam o produto pronto a usar à saída da fábrica.',
        items: [
          'Soldadura por ultrassons',
          'Colocação de componentes',
          'Etiquetagem e personalização com a marca do cliente',
        ],
        note: 'Menos fornecedores para gerir e a identidade da marca do cliente no próprio produto.',
        image: '/images/soldadura-ultrassons.jpg',
        imageAlt: 'Soldadura de uma peça plástica por ultrassons',
        link: { label: 'Ver a soldadura por ultrassons', to: ROUTES.product('soldadura-por-ultrassons') },
      },
    },

    quality: {
      hero: {
        current: 'Qualidade',
        eyebrow: 'Qualidade e responsabilidade',
        title: 'Qualidade certificada e compromisso social.',
      },
      certifications: {
        title: 'Certificações',
        badge: { title: 'ISO 9001', description: 'Gestão da Qualidade' },
        since: 'Certificação ISO 9001 desde 2014.',
        text: 'Certificações de qualidade e conformidade de materiais para contacto alimentar e farmacêutico.',
        missing: 'O certificado ISO 9001 em PDF e a lista das certificações de materiais.',
      },
      policy: {
        title: 'Política da qualidade',
        intro: 'Através de uma estratégia de melhoria contínua, a LinkPlas compromete-se a desenvolver e implementar continuamente as medidas e ações necessárias para manter os padrões de qualidade e para reduzir e minimizar os perigos e riscos da sua atividade, tomando as medidas necessárias para atingir os seus objetivos.',
        lead: 'A LinkPlas compromete-se a:',
        commitments: [
          'Assegurar o cumprimento dos requisitos do Sistema de Gestão, da legislação aplicável e das boas práticas do setor.',
          'Promover a excelência no design e a melhoria contínua dos processos para maximizar resultados e satisfação, liderando a transição para soluções mais sustentáveis através da consciencialização proativa da nossa cadeia de valor (clientes e fornecedores) para a escolha de produtos de reduzido impacto ambiental, garantindo a superação das necessidades e expectativas das partes interessadas relevantes.',
          'Promover comportamentos orientados para o uso racional de energia e matérias-primas, incentivando a economia circular através da redução de desperdícios e da valorização de materiais reciclados sempre que tecnicamente viável.',
          'Promover o crescimento e a motivação através da formação contínua e do desenvolvimento de competências, consolidando uma cultura de segurança, responsabilidade ambiental e reconhecimento da criatividade individual como pilares do nosso sucesso.',
        ],
      },
      control: {
        title: 'Controlo',
        items: [
          'Controlo dimensional e de qualidade, com domínio da conformidade regulamentar.',
          'Conhecimento técnico dos materiais, controlo em cada série e conformidade para contacto alimentar e farmacêutico.',
        ],
      },
      sustainability: {
        eyebrow: 'Sustentabilidade',
        title: '“Reutilizar em vez de deitar fora.”',
        text: [
          'Reutilização e durabilidade como alternativa ao descartável, e respeito por quem produz e por quem compra.',
          'TupperLink e ecoCatch reduzem resíduos e emissões, alinhados com a PPWR e o Green Deal.',
        ],
        stat: { value: '6 t', label: 'de EPP reutilizável substituem 720 toneladas de EPS descartável (ecoCatch: 3 anos, numa operação típica)' },
      },
      social: {
        eyebrow: 'Responsabilidade social',
        title: 'Selo Igualdade Salarial 2024',
        text: 'Reconhece as empresas sem diferenças remuneratórias entre mulheres e homens em funções equivalentes.',
        image: '/LinkplasData/igualdade.jpeg',
        imageAlt: 'Selo Igualdade Salarial atribuído à LinkPlas',
      },
      presence: {
        title: 'Presença no setor: ExpoFarma',
        missing: 'Fotografia e uma frase sobre a presença na ExpoFarma.',
      },
    },
  },

  en: {
    crumb: 'Company',

    about: {
      hero: {
        current: 'About us',
        eyebrow: 'Who we are',
        title: 'Precision plastic parts, made in Portugal since 2012.',
        lead: 'LinkPlas is a Portuguese company specialising in plastic injection moulding, working for industry, pharmacy and take-away. We develop and produce solutions that combine technical capability, rigour and closeness to the client.',
        image: { src: '/images/empresa/maquina-injecao.webp', position: 'right', alt: 'Injection machine at the LinkPlas factory, with a freshly moulded lid' },
      },
      stats: {
        label: 'LinkPlas in numbers',
        items: [
          { value: '14', label: 'years of continuous activity' },
          { value: '5', label: 'injection machines, from 50 to 550 t' },
          { value: '12', label: 'employees, 6 since the start' },
          { value: '+20', label: 'active clients' },
          { value: '99%', label: 'on-time deliveries' },
        ],
      },
      history: {
        eyebrow: 'Our history',
        title: 'From component supplier to development partner.',
        text: 'LinkPlas was born in 2012 with a simple conviction: in an industry where price is often the only argument, there is room for those who compete on quality, technical rigour and the trust built with each client.',
        image: { src: '/images/empresa/armazem-moldes.jpg', alt: 'Racks of injection moulds in the LinkPlas warehouse' },
        timeline: [
          { year: '2012', title: 'Founding', description: 'Paula Rocha creates LinkPlas, after a career in industry.' },
          { year: '2014', title: 'ISO 9001 certification' },
          { year: '2016', title: 'First own product for the food sector' },
          { year: '2018', title: 'Assembly line for several sectors' },
          { year: '2020', title: 'Ultrasonic welding machine', description: 'To answer market demand.' },
          { year: '2023', title: 'Plastic boxes for food storage', description: 'Design, development and start of production of the range.' },
          { year: '2024', title: 'Medicine transport boxes', description: 'Production begins, in high-strength plastic and with our own moulds.' },
          { year: '2026', title: 'Today', description: 'ecoCatch with ZØR and 14 years of continuous activity.', current: true },
        ],
      },
      purpose: {
        image: { src: '/images/empresa/linha-producao.webp', alt: "Clear lids, freshly moulded, on the machine's outfeed conveyor" },
        mission: {
          title: 'Mission',
          text: 'To develop and produce plastic parts and components of high quality and technical demand, working in partnership with clients on efficient, innovative solutions that reduce environmental impact throughout the whole life cycle.',
        },
        vision: {
          title: 'Vision',
          text: 'To be a reference in plastic components, with a global answer for the most demanding clients, in Portugal and abroad, recognised for technological capability and a firm commitment to sustainable development.',
        },
      },
      values: {
        eyebrow: 'Values',
        title: 'Four values that guide every project.',
        image: { src: '/images/empresa/rececao.webp', alt: "LinkPlas reception, with the company's certificates on the wall" },
        items: [
          { number: '01', title: 'Trust and rigour', description: 'A direct relationship with the client, transparency on deadlines and costs, and promises kept.' },
          { number: '02', title: 'Quality and excellence', description: 'Technical knowledge of materials, control in every series and compliance for food and pharmaceutical contact.' },
          { number: '03', title: 'Environmental and social responsibility', description: 'Reuse and durability as an alternative to disposables, and respect for those who produce and those who buy.' },
          { number: '04', title: 'Operational effectiveness and efficiency', description: 'Flexibility across industrial series, projects of different scales and own-brand products.' },
        ],
      },
      team: {
        eyebrow: 'Our team',
        title: 'Mutual support, good humour and commitment.',
        text: 'A team that celebrates every achievement together and delivers what it promises.',
        stat: { value: '12', label: 'employees, 6 since the start' },
        photo: '/images/equipa/equipa.jpg',
        photoAlt: 'The LinkPlas team',
      },
      people: {
        title: 'The people behind every part.',
        people: [
          { name: 'Paula Rocha', role: 'Founder · Sales', since: 'Since 2012', bio: 'Founded LinkPlas after a career in industry. Leads negotiations, projects and coordination with clients and suppliers.', photo: '/images/equipa/paula-rocha.jpg' },
          { name: 'Ana Paula', role: 'Quality and Planning', since: 'Since May 2012', bio: 'Chemical and Industrial Engineering, with a postgraduate degree in Quality. Leads certifications and product development.', photo: '/images/equipa/ana-paula.jpg' },
          { name: 'Rui Silva', role: 'Projects', photo: '/images/equipa/rui-silva.jpg' },
          { name: 'Sandra Tavares', role: 'Logistics and Warehouse', since: 'Since March 2012', bio: 'Started as a machine operator and moved through quality control. She is the voice of LinkPlas in day-to-day contact with clients.', photo: '/images/equipa/sandra-tavares.jpg' },
          { name: 'António Filipe', role: 'Production and Machine Setting', since: 'Since June 2012', bio: 'Joined with 16 years of experience in injection moulding. Follows the start-up of each part so that it is viable and profitable.', photo: '/images/equipa/antonio-filipe.jpg' },
          { name: 'André Silva', role: 'Digital Lead', photo: '/images/equipa/andre-silva.jpg' },
        ],
      },
    },

    process: {
      hero: {
        current: 'How we work',
        eyebrow: 'What we do',
        title: 'From the drawing of the part to the ready-to-use product.',
      },
      development: {
        eyebrow: 'Product development',
        title: 'A single point of contact, from the idea to series production.',
        steps: [
          { number: '01', title: 'Feasibility', description: 'Analysis of the idea and the part, and choice of materials.' },
          { number: '02', title: 'Mould and prototypes', description: 'Support for mould development and validation with prototypes.' },
          { number: '03', title: 'Industrialisation', description: 'Preparing the process for series production.' },
          { number: '04', title: 'Production', description: 'Injection, quality control, finishing and delivery.' },
        ],
        benefits: [
          'Fewer risks and fewer iterations',
          'A product optimised for production',
          'A team experienced in injection, materials and compliance',
        ],
      },
      injection: {
        eyebrow: 'Injection of technical parts',
        title: 'Components to specification, from precision to large series.',
        stat: { value: '50–550 t', label: 'of clamping force, across 5 injection machines' },
        materialsTitle: 'Technical materials',
        materials: ['PP', 'PE', 'PA', 'ABS', 'PC', 'and others'],
        cards: [
          { icon: 'ruler', title: 'From analysis to production', description: 'We work alongside the client from the analysis of the part and the choice of material through to production and finishing.' },
          { icon: 'shield-check', title: 'Control in every series', description: 'Dimensional and quality control, with command of regulatory compliance.' },
          { icon: 'truck', title: 'Made in Portugal', description: 'Deadlines met, fast answers and proximity, with 99% on-time deliveries.' },
        ],
        link: { label: 'Discover FactoryLink', to: ROUTES.brand('factorylink') },
      },
      finishing: {
        eyebrow: 'Welding and finishing',
        title: 'Clean, strong joints, without glue.',
        text: 'Finishing and assembly services that complement injection and deliver the product ready to use as it leaves the factory.',
        items: [
          'Ultrasonic welding',
          'Fitting of components',
          "Labelling and customisation with the client's brand",
        ],
        note: "Fewer suppliers to manage, and the client's brand identity on the product itself.",
        image: '/images/soldadura-ultrassons.jpg',
        imageAlt: 'Ultrasonic welding of a plastic part',
        link: { label: 'See ultrasonic welding', to: ROUTES.product('soldadura-por-ultrassons') },
      },
    },

    quality: {
      hero: {
        current: 'Quality',
        eyebrow: 'Quality and responsibility',
        title: 'Certified quality and social commitment.',
      },
      certifications: {
        title: 'Certifications',
        badge: { title: 'ISO 9001', description: 'Quality Management' },
        since: 'ISO 9001 certified since 2014.',
        text: 'Quality certifications and compliance of materials for food and pharmaceutical contact.',
        missing: 'The ISO 9001 certificate as a PDF and the list of material certifications.',
      },
      policy: {
        title: 'Quality policy',
        intro: 'Through a strategy of continuous improvement, LinkPlas commits to continuously developing and implementing the measures and actions needed to maintain quality standards and to reduce and minimise the hazards and risks of its activity, taking the measures needed to reach its objectives.',
        lead: 'LinkPlas commits to:',
        commitments: [
          'Ensuring compliance with the requirements of the Management System, the applicable legislation and the good practices of the sector.',
          'Promoting excellence in design and the continuous improvement of processes to maximise results and satisfaction, leading the transition to more sustainable solutions by proactively raising awareness across our value chain (clients and suppliers) of the choice of products with a low environmental impact, and exceeding the needs and expectations of the relevant stakeholders.',
          'Promoting behaviour geared to the rational use of energy and raw materials, encouraging the circular economy by reducing waste and valuing recycled materials whenever technically viable.',
          'Promoting growth and motivation through continuous training and the development of skills, consolidating a culture of safety, environmental responsibility and recognition of individual creativity as pillars of our success.',
        ],
      },
      control: {
        title: 'Control',
        items: [
          'Dimensional and quality control, with command of regulatory compliance.',
          'Technical knowledge of materials, control in every series and compliance for food and pharmaceutical contact.',
        ],
      },
      sustainability: {
        eyebrow: 'Sustainability',
        title: '“Reuse instead of throwing away.”',
        text: [
          'Reuse and durability as an alternative to disposables, and respect for those who produce and those who buy.',
          'TupperLink and ecoCatch reduce waste and emissions, in line with the PPWR and the Green Deal.',
        ],
        stat: { value: '6 t', label: 'of reusable EPP replace 720 tonnes of disposable EPS (ecoCatch: 3 years, in a typical operation)' },
      },
      social: {
        eyebrow: 'Social responsibility',
        title: 'Equal Pay Seal 2024',
        text: 'It recognises companies with no pay differences between women and men in equivalent roles.',
        image: '/LinkplasData/igualdade.jpeg',
        imageAlt: 'Equal Pay Seal awarded to LinkPlas',
      },
      presence: {
        title: 'Presence in the sector: ExpoFarma',
        missing: 'A photograph and a sentence about the presence at ExpoFarma.',
      },
    },
  },
};

export function useCompanyContent() {
  return company[useLanguage()];
}
