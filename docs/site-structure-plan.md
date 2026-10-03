# LinkPlas website — page structure and content plan

Purpose: decide which page each piece of company information lives on, so the pages can be designed with real content. It maps the *Apresentação Institucional LinkPlas 2026* (21 pages, September 2026) onto the new navigation, adds the content the current site already has, and lists what is still missing.

Source references: **p. N** is a page of the presentation. **Site** is content on the current website. **Gap** means nobody has supplied it yet.

Section names and copy are kept in Portuguese, as they will appear on the site.

---

## 1. Navigation

| Nav item | Dropdown | Pages |
|---|---|---|
| *(logo)* | — | Início |
| Notícias | — | Notícias |
| Produtos | — | Produtos (catalogue), and one detail page per product |
| Marcas | TupperLink · PharmaLink · FactoryLink | one page per sub-brand |
| Parcerias | Parceiros · Portfólio | Parceiros, Portfólio |
| Empresa | Sobre nós · Como trabalhamos · Qualidade | three pages |
| Contactos | — | Contactos |

"Pedir orçamento" stays as the header button and leads to Contactos.

Not in the menu for now:
- **KeepyLink** and the sector "Organização" (p. 7, sector 05): the product is not launched, so nothing on the site names it.
- **ThermaLink**: this will be the name under which LinkPlas later sells, as its own brand, what is today ecoCatch. Until then ecoCatch appears as the ZØR partnership, and there is no ThermaLink page. When it launches, pages 14 and 15 of the presentation become its brand page and it joins the Marcas dropdown.

---

## 2. Pages

For each section: what it says, where the content comes from, and which design-system component fits.

### 2.1 Início

The home page summarises the company and sends people to the other pages. It repeats little; each block links onward.

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Hero | **Built** (2026-10-03) from the Figma `Hero` (Type=Home), with the production video `public/images/Hero.webm` where the design has a photograph. Eyebrow "Injeção de plásticos · Desde 2012"; title "Peças plásticas com rigor técnico, produzidas em Portugal."; line "Da ideia ao molde, da injeção à personalização: somos o parceiro de desenvolvimento para a indústria, a farmácia e o take-away." (the Figma copy); buttons Pedir orçamento, Ver produtos. The header above it stays white | Figma; p. 2 headline | Hero (Home), BackgroundVideo |
| 2 | Números | 14 anos de atividade contínua · 5 máquinas de injeção, de 50t a 550t · 12 colaboradores, 6 desde o início · +20 clientes ativos · 99% de entregas no prazo | p. 2 | Stats band |
| 3 | Posicionamento | "O parceiro português de injeção de plásticos que junta capacidade técnica e sustentabilidade real, com a proximidade de quem acompanha cada projeto de perto." Four pillars with their quotes: Capacidade técnica, Sustentabilidade real, Parceria e proximidade, Pessoas e integridade | p. 6 | Section Heading + Feature Card ×4 |
| 4 | Setores | Indústria · Farmácia · Restauração e take-away · Cadeia alimentar e pescas, each with who it serves and what LinkPlas supplies. Each links to its brand: Indústria to FactoryLink, Farmácia to PharmaLink, take-away to TupperLink, pescas to the ZØR partnership | p. 7 | Sector Card |
| 5 | Marcas | TupperLink, PharmaLink and FactoryLink, one line each, linking to the brand pages | p. 12, p. 13, p. 10 | Product Card with sub-brand tag |
| 6 | Como trabalhamos (teaser) | "Um só interlocutor, da ideia à produção em série." The four steps in short, link to the full page | p. 9 | Process Step ×4 |
| 7 | Prova | One testimonial and the client names | p. 16–17, p. 12 | Testimonial Card + Logo Strip |
| 8 | Notícias | The three most recent posts, link to Notícias | Site (`cards.json`) | News Card ×3 |
| 9 | Fecho | "Desenvolvemos consigo, não apenas para si." + Pedir orçamento | p. 21, p. 6 | CTA Section |

### 2.2 Notícias

A feed of recent posts about the company, newest first. Posts are added by hand, as today; an automatic feed from the social networks is a later improvement.

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Cabeçalho | Title and one-line intro | Gap (one sentence) | Hero (Interior) |
| 2 | Feed | Image, date, origin (LinkedIn, Instagram…), title, short text, link to the original post | Site: the six posts in `cards.json` | News Card, Pagination |

Candidate posts the presentation mentions that are not in the feed yet: presence at ExpoFarma (p. 20), ecoCatch with ZØR (p. 3, p. 14), the Platec project concluded in December 2025 (p. 16), the Plural delivery (p. 17). The Selo Igualdade Salarial 2024 (p. 20) is already there.

### 2.3 Produtos

One catalogue page, with no dropdown in the menu. It follows the Figma frame "Produtos (Desktop)" (file `cBcn3v2KdluyJjrBgMFvKE`, node `2:2037`). **Built** on 2026-10-02, with the detail pages below; addresses are `/Products` and `/Products/<product>` until the address question in section 6 is settled.

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Filtros | Eyebrow "Filtros" and one chip per brand: TupperLink · PharmaLink · FactoryLink. Several can be selected at once. No brand is selected at first, and with none selected every product shows; selecting brands narrows the list to them. The selection is kept in the address (`?marcas=factorylink`), so a filtered catalogue can be linked to. (The Figma frame draws three chips selected; the client chose this behaviour instead.) | Figma frame | Eyebrow, Chip (multi-select) |
| 2 | Grelha de produtos | Three cards per row on desktop. Each card: image, brand tag, product name, one- or two-line description, reference line ("REF. · material · capacidade"), link "Ver ficha técnica" to the product's detail page | Figma frame; product data in the table below | Product Card, Tag / Submarca |

The frame has no page title. The page has a visually hidden "Produtos" heading for screen readers and search engines.

There is no mobile frame. As built: one card per row below 768px, two from 768px, three from 992px; the chips wrap; page margins are 20px, as in the mobile header.

The frame's chips also include KeepyLink and ThermaLink. Those two are left out until the products launch.

**Products in the catalogue**

Each row is one card and one detail page. Until new photographs arrive, the cards and pages use the product images of the old site (`public/images/`); the e-Pharma kit shows its polystyrene insert, cold pack and lid.

| Brand | Product | Sizes or volumes | 3D source available today | Content today |
|---|---|---|---|---|
| TupperLink | Recipiente TupperLink | 500 ml, 1000 ml, 1500 ml, 2000 ml, 2500 ml, 4000 ml; transparent and coloured | STL received for every volume except 2000 ml (base and lid) | Site: description, sizes table, photos. 4000 ml is new: it came with the 3D files and has no measurements on the site |
| PharmaLink | Caixa de transporte de medicamentos | Grande, Médio, Pequeno; lid | STL received for the three boxes and one lid | Site: description, photos; p. 12 |
| PharmaLink | Kit isotérmico (e-Pharma) | one | none yet | Site: description, temperature ranges, PDF; p. 12 |
| FactoryLink | Tampa para tubos | seven sizes (30001–30007) | none (STEP for one size, not used by the viewer) | Site: description, sizes table, CAD files, catalogue PDF |
| FactoryLink | Intercalar longarina | one | STL received | Site: description, CAD files |
| FactoryLink | Tampa para veio | 16 mm, 20 mm | STL received for 16 mm | Site: description, CAD files, PDF |
| FactoryLink | Anilha intercalar | three sizes (30014, 30015, 30016) | STL received for 30015 | Site: description, sizes table, CAD files |
| FactoryLink | Abraçadeira | one | STL received | Site: description, CAD files |
| FactoryLink | Soldadura por ultrassons | none (a service) | not applicable | Site: description, benefits; p. 11 |

FactoryLink gathers what the current site shows under "Indústria" and "Serviços". Four of its products have the 3D viewer (from 2026-10-03): Intercalar longarina, Abraçadeira, Tampa para veio (16 mm) and Anilha intercalar (30015). Tampa para tubos and Soldadura por ultrassons show an image.

ecoCatch (ecoFish, ecoShell, ecoTrace) is not in the catalogue: it stays on Parcerias until ThermaLink launches.

The three development services on p. 8 (desenvolvimento de produto, injeção de peças técnicas, acabamento) stay on Como trabalhamos; they are how LinkPlas works, not catalogue items.

#### Product detail page ("Ficha técnica")

One page per product, reached from its card. There is no Figma frame for it, so it was built as a first proposal from design-system components only (Breadcrumb, Tag / Submarca, Chip, Spec Table, Download Card, Button, Link), to iterate on. On desktop the preview sits beside the name, summary, size selector and "Pedir orçamento"; description, specifications and downloads follow below. On mobile everything stacks in that order.

| # | Section | Content | Applies to | Component |
|---|---|---|---|---|
| 1 | Caminho | Início › Produtos › brand › product. The brand links to the catalogue filtered by that brand until the brand pages exist | all | Breadcrumb |
| 2 | Pré-visualização | The 3D viewer (rotate and zoom) when the product has a 3D file, and the product photographs; thumbnails under the preview switch between them. Changing a size or a colour brings the 3D model back. Old-site photographs for now | all; viewer where a 3D model exists (see the table above) | 3D viewer, image |
| 3 | Identificação | Brand tag, product name, reference line | all | Tag / Submarca, heading |
| 4 | Seletor de tamanho ou volume | One option per size or volume. Choosing one changes the preview, the reference, the measurements listed under the chips and the downloads shown, and is kept in the address (`?medida=1000ml`) | only products with more than one size or volume | Chip (single choice) |
| 5 | Seletor de cor | Recolours the 3D preview as it is chosen, one choice per part (body and lid). **TupperLink**: "Transparente" (the default) or "Com cor", which opens a colour picker for any colour. **PharmaLink**: a colour picker only, for any colour; the box starts dark blue (`#2B305F`) and the lid grey (`#89898B`). The chosen colours go into the quote request | products with a 3D file: the TupperLink container and the PharmaLink box | Chip (single choice) for clear or coloured, browser colour picker |
| 6 | Descrição | What the product is and what it is for | all | text |
| 7 | Especificações | No tables (client decision, 2026-10-03). The measurements of the selected size, the reference, the material and similar facts are listed under the size chips and change with the size. A size chart could still help on Tampa para tubos (seven sizes, chosen by tube diameter); not built unless the client asks | products with specifications | Spec list (label over value) |
| 8 | Downloads | Technical drawings and CAD files for the selected size (PDF, DWG, IGS, STEP, SLDPRT), catalogue | products with files | Download Card |
| 9 | Fecho | "Pedir orçamento" opens Contactos with the product and size already written in the message; "Ver todos os produtos" returns to the catalogue. The link to the brand page waits for the brand pages | all | Button, Link |

How the size selector and the preview work together:
- If there is a 3D file for the chosen size, the viewer loads that model.
- If there is none, the preview keeps the model or image it has and only the measurements, reference and downloads change. The page says which size the preview shows.
- A product with a single size has no selector.

3D models: the STL files in `content-inbox/3d/` are converted by `npm run models` into `public/models/`. TupperLink bases and lids come in assembly position, so the lid sits on the base. The PharmaLink lid is one file for the three boxes and is shown lifted above the box, as in the existing renders.

### 2.4 Marcas — one page per sub-brand

Every brand page has the same four blocks you asked for, plus proof and a call to action. The brand's accent colour is used only on that page.

| # | Block | What it answers |
|---|---|---|
| 1 | Hero | Brand logo, one-line promise, product image |
| 2 | Propósito | Why the brand exists and who it is for |
| 3 | Vantagens | What the customer gains |
| 4 | Características | What the product is: parts, sizes, materials, variants, 3D viewer |
| 5 | Origem | How and when LinkPlas created it |
| 6 | Prova | Clients and testimonials |
| 7 | Fecho | Pedir orçamento |

**TupperLink**

| Block | Content | Source |
|---|---|---|
| Hero | "Take-away para voltar a usar." Marca própria LinkPlas | p. 13 |
| Propósito | "Recipientes reutilizáveis para restauração, take-away e entrega ao domicílio, pensados como alternativa durável ao descartável." For restaurantes, cadeias de delivery e distribuidores de embalagens. "Reutilizar em vez de deitar fora." | p. 13, p. 7, p. 6 |
| Vantagens | Menos resíduos · Menor custo por utilização · Menos embalagens de uso único. Alinhado com a PPWR e o Green Deal | p. 13, p. 6 |
| Características | Durável e seguro (contacto alimentar, múltiplos ciclos de lavagem) · Modular (empilhável, tampas transparentes, encaixam entre si) · Com a marca do cliente (personalizável). Five sizes from 500 ml to 2500 ml with dimensions; transparent and coloured versions. 3D viewer | p. 13; Site (sizes table, photos) |
| Origem | 2016: first own product for the food sector. 2023: range of eco-friendly food storage boxes | Site timeline. **Gap**: the story in a paragraph |
| Prova | **Gap**: no TupperLink client or testimonial in the presentation |

**PharmaLink**

| Block | Content | Source |
|---|---|---|
| Hero | "Proteção térmica entre o armazém e a farmácia." | p. 12 |
| Propósito | "Caixas de transporte de medicamentos que mantêm a cadeia de frio na distribuição farmacêutica, reutilizáveis e adequadas a operações regulamentadas." For laboratórios, distribuidores e farmácias | p. 12, p. 7 |
| Vantagens | Reutilizável, robusta e empilhável; isolamento térmico durante todo o transporte; personalização com a marca do cliente e etiquetagem numerada | p. 12, p. 17, p. 11 |
| Características | 01 Caixa exterior plástica com tampa · 02 Reforço interior isolante · 03 Acumuladores de frio (exploded view). Three box sizes and the lid. Temperature ranges and duration of the isothermal kit. 3D viewer | p. 12; Site (sizes, lid, e-Pharma kit details and PDF) |
| Origem | 2024: start of production of medicine transport boxes, with LinkPlas's own moulds | Site timeline. **Gap**: the story in a paragraph |
| Prova | "Desenvolvido para Empifarma · Plural · OCP · Medlog". Plural case: +10.000 caixas e tampas personalizadas, with Nuno Duarte's testimonial (links to Portfólio) | p. 12, p. 17 |

**FactoryLink**

The brand for technical parts made to specification and for the finishing services. It has its own page under Marcas, like the other brands. Colours from Figma: accent `#C2521A`, subtle `#FBE9E0`, text `#7E3511`. The logo exists in the design system (`Logo / Submarca`, Brand=FactoryLink).

| Block | Content | Source |
|---|---|---|
| Hero | "Componentes à especificação, da precisão às grandes séries." | p. 10 |
| Propósito | "Peças técnicas à especificação", for "empresas que precisam de componentes plásticos injetados" | p. 7 |
| Vantagens | Da análise à produção · Controlo em cada série · Produção em Portugal, com 99% de entregas no prazo. "Menos fornecedores para gerir e a identidade da marca do cliente no próprio produto." | p. 10, p. 11 |
| Características | 50t–550t de força de fecho, em 5 máquinas de injeção. Materiais: PP, PE, PA, ABS, PC e outros. Soldadura por ultrassons, colocação de componentes, etiquetagem e personalização. The catalogue parts, linking to their detail pages | p. 10, p. 11; Site |
| Origem | The company's first activity was injected components for industrial clients (year to confirm). 2018: assembly line. 2020: ultrasonic welding machine | p. 3; Site timeline. **Gap**: the story in a paragraph |
| Prova | **Gap**: which clients and testimonials belong to this brand |

### 2.5 Parcerias

**Parceiros** — the companies with active partnerships.

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Cabeçalho | "Relações que continuam para além da primeira entrega." | p. 16 | Hero (Interior) |
| 2 | Parceiro em destaque: ZØR | ecoCatch, "Caixas reutilizáveis para pescado, em vez de EPS descartável." Sistema modular para a logística de peixe fresco e marisco, com controlo térmico e sem necessidade de gelo | p. 14 | Feature section with image |
| 3 | Lista de parceiros | The eight active partners: **Platec, Plural, ZØR, Polisport, Empifarma, OCP, Medlog, Coprax**, each with logo and a line on the partnership. "+20 clientes ativos" | p. 14, p. 16, p. 17, p. 2 | Logo Strip or name list |
| 4 | Como chegam até nós | "Clientes que chegam por recomendação de outros clientes." The Coprax and Polisport story, with Tiago Cunha's quote | p. 17 | Quote Block |

**Monte Meão is left out**: it is not an active partnership at the moment, so its project (Accor Hotels Arena, Paris, 2015) and António Pimentel's testimonial on p. 16 are not used on the site. Permission to publish the partners' names, logos and testimonials is confirmed.

**Portfólio** — projects delivered.

| Project | Content | Source |
|---|---|---|
| Plural, 2025–2026 | +10.000 caixas e tampas personalizadas com a marca do cliente, com etiquetagem numerada e componentes à especificação. Testimonial: Nuno Duarte, Responsável de Logística, fevereiro de 2026 | p. 17 |
| Platec | Project concluded in December 2025. Testimonial: Xavier Miranda | p. 16 |
| Coprax | Arrived by recommendation of Polisport. Testimonial: Tiago Cunha, CEO | p. 17 |
| ecoCatch, with ZØR | ecoFish, ecoShell, ecoTrace. Impact: "6 toneladas de EPP reutilizável substituem 720 toneladas de EPS descartável" (3 anos, numa operação típica). Menos perdas de pescado · operações mais simples, sem gelo · controlo térmico até 24 h em veículos não refrigerados · conformidade com o Green Deal e a PPWR | p. 14, p. 15 |

Components: Testimonial Card, Stat, Quote Block, a project card (image, client, year, result).

### 2.6 Empresa

**Sobre nós** — today this page is text only. The new version tells the story with a timeline, photos, videos and the team.

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Cabeçalho | "Peças plásticas com rigor técnico, produzidas em Portugal desde 2012." and the Quem somos paragraph | p. 2 | Hero (Interior) |
| 2 | Números | The five figures; "Oliveira de Azeméis — desenvolvimento e produção" | p. 2 | Stat |
| 3 | A nossa história | "De fornecedor de componentes a parceiro de desenvolvimento." The founding conviction paragraph, then the timeline (see below), each entry with a photo or video | p. 3; Site | Timeline Item |
| 4 | Missão e visão | Both texts in full | p. 4 | two-column text |
| 5 | Valores | "Quatro valores que orientam cada projeto." 01 Confiança e rigor · 02 Qualidade e excelência · 03 Responsabilidade ambiental e social · 04 Eficácia e eficiência operacional, each with its description | p. 5 | Feature Card ×4 |
| 6 | A nossa equipa | "12 colaboradores, 6 desde o início." "Entreajuda, boa disposição e compromisso. Uma equipa que celebra junta cada conquista e cumpre o que promete." Group photo | p. 18 | image + Stat |
| 7 | Liderança | "As pessoas que acompanham cada projeto." Paula Rocha, Ana Paula, António Filipe, Sandra Tavares: role, since when, short bio, portrait | p. 19 | Team Card ×4 |
| 8 | Fecho | Link to Como trabalhamos and Contactos | — | CTA Section |

Timeline entries available today:

| When | Milestone | Source |
|---|---|---|
| 2012 | Fundação. Paula Rocha cria a LinkPlas, depois de uma carreira ligada à indústria | p. 3 |
| — | Indústria: peças e componentes injetados para clientes industriais | p. 3 (no date) |
| 2014 | Certificação ISO 9001 | Site |
| 2016 | Primeiro produto próprio na área alimentar | Site |
| 2018 | Linha de montagem para vários setores | Site |
| 2020 | Máquina de ultrassons | Site |
| — | Parceria: do desenho da peça ao molde, da injeção à personalização | p. 3 (no date) |
| 2023 | Gama de caixas plásticas para armazenamento de alimentos | Site |
| 2024 | Caixas de transporte de medicamentos, com moldes próprios | Site |
| 2026 | ecoCatch com a ZØR e 14 anos de atividade contínua | p. 3 |

**Como trabalhamos**

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Cabeçalho | "Do desenho da peça ao produto pronto a usar." | p. 8 | Hero (Interior) |
| 2 | Desenvolvimento de produto | "Um só interlocutor, da ideia à produção em série." 01 Viabilidade · 02 Molde e protótipos · 03 Industrialização · 04 Produção. Benefits: menos riscos e menos iterações · produto otimizado para produção · equipa com experiência em injeção, materiais e conformidade | p. 9 | Process Step ×4, Check List |
| 3 | Injeção de peças técnicas | "Componentes à especificação, da precisão às grandes séries." 50t–550t de força de fecho, em 5 máquinas. Materiais: PP, PE, PA, ABS, PC e outros. Da análise à produção · Controlo em cada série · Produção em Portugal (99% de entregas no prazo) | p. 10 | Stat, Feature Card ×3, tags |
| 4 | Soldadura e acabamento | "Uniões limpas e resistentes, sem colas." Soldadura por ultrassons · colocação de componentes · etiquetagem e personalização com a marca do cliente. "Menos fornecedores para gerir e a identidade da marca do cliente no próprio produto." Photo of the sonotrode and fixture | p. 11; Site (ultrasonic welding page) | image + Check List |
| 5 | Parceria e proximidade | "Desenvolvemos consigo, não apenas para si." Acompanhamento direto do projeto à produção, com resposta rápida | p. 6 | Quote Block |
| 6 | Fecho | Pedir orçamento | — | CTA Section |

**Qualidade**

| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 1 | Cabeçalho | "Qualidade certificada e compromisso social." | p. 20 | Hero (Interior) |
| 2 | Certificações | ISO 9001 (since 2014). "Certificações de qualidade e conformidade de materiais para contacto alimentar e farmacêutico." | p. 20; Site | Certification Badge, Download Card |
| 3 | Política da qualidade | The current policy text with its four commitments | Site (Política de Qualidade page) | text, numbered list |
| 4 | Controlo | "Controlo dimensional e de qualidade, com domínio da conformidade regulamentar." "Conhecimento técnico dos materiais, controlo em cada série." | p. 10, p. 5 | Check List |
| 5 | Sustentabilidade | "Reutilizar em vez de deitar fora." Reutilização e durabilidade como alternativa ao descartável; alinhamento com a PPWR e o Green Deal; the 6 t vs 720 t figure | p. 6, p. 5, p. 15 | Stat, text |
| 6 | Responsabilidade social | Selo Igualdade Salarial 2024, with its explanation | p. 20 | image + text |
| 7 | Presença no setor | ExpoFarma, with photo | p. 20 | image |

### 2.7 Contactos

Layout as in the design system's "Contacto e pedido de orçamento": contacts and map on the left, form on the right.

| # | Section | Content | Source |
|---|---|---|---|
| 1 | Cabeçalho | "Desenvolvemos consigo, não apenas para si." | p. 21 |
| 2 | Contactos | Address: Rua António Gomes Correia Júnior, n.º 459, Zona Industrial do Mergulhão, Cesar, 3700-606 Oliveira de Azeméis. Phone and email. LinkedIn, Instagram, Facebook. Map | p. 21; Site |
| 3 | Formulário | Nome, Empresa, Contacto, Email, Mensagem, as today. The design system also shows a request type, a file upload for drawings and a consent checkbox | Site; design system |

---

## 3. Where each presentation page goes

Every page of the presentation is placed at least once.

| Page | Topic | Goes to |
|---|---|---|
| 1 | Capa, tagline | Início (hero) |
| 2 | Quem somos, números | Início, Sobre nós |
| 3 | A nossa história | Sobre nós (timeline) |
| 4 | Missão, visão | Sobre nós |
| 5 | Valores | Sobre nós; value 02 also on Qualidade |
| 6 | Posicionamento | Início; pillars also on Como trabalhamos, Qualidade and the brand pages |
| 7 | Setores | Início; each sector's text also on its brand page |
| 8 | O que fazemos | Como trabalhamos (services); Produtos and the brand pages (products) |
| 9 | Desenvolvimento de produto | Como trabalhamos; teaser on Início |
| 10 | Injeção de peças técnicas | Como trabalhamos; FactoryLink |
| 11 | Soldadura e acabamento | Como trabalhamos; FactoryLink (the welding service has a product page) |
| 12 | Embalagens farmacêuticas | PharmaLink; its product pages |
| 13 | Marca própria take-away | TupperLink; its product page |
| 14 | ecoCatch | Parceiros (ZØR); Portfólio |
| 15 | ecoCatch, impacto | Portfólio; Qualidade (sustentabilidade) |
| 16 | Clientes e parceiros | Parceiros, Portfólio; one quote on Início |
| 17 | Plural, Coprax | Portfólio; Plural also on PharmaLink |
| 18 | A nossa equipa | Sobre nós |
| 19 | Liderança | Sobre nós |
| 20 | Qualidade e responsabilidade | Qualidade; ExpoFarma also as a news post |
| 21 | Contacto | Contactos; closing line on Início and Como trabalhamos |

---

## 4. Current site content and where it moves

| Today | Moves to |
|---|---|
| Home carousel and product showcase | replaced by the new Início |
| "Novidades" cards (`cards.json`) | Notícias, and the three latest on Início |
| LinkPlas × ZØR section on the home page, and the e-Pharma kit | PharmaLink (características); the ZØR relationship itself on Parceiros |
| Products page with sidebar (Farmacêutica, Take-Away, Indústria, Serviços) | The Produtos catalogue and one detail page per product. Indústria and Serviços become the FactoryLink brand |
| Ultrasonic welding (Serviços) | A FactoryLink product page; the service is also described on Como trabalhamos |
| Sobre (history text, missão, visão, valores, CEO quote) | Sobre nós |
| Política de Qualidade | Qualidade |
| Contactos (card, map, form) | Contactos |

The existing addresses `/About`, `/Policy`, `/Contacts`, `/Products` and `/Products/<categoria>` are indexed by search engines. Whatever the new addresses are, the old ones must keep leading somewhere sensible.

---

## 5. Places where the presentation or the Figma files disagree with what has been decided

| # | Presentation | Decision already taken | Plan follows |
|---|---|---|---|
| 1 | Pages 3, 6, 7 and 8 call the take-away brand "KeepyLink". Page 13 shows the TupperLink logo | Take-away is TupperLink; KeepyLink must not appear | TupperLink everywhere |
| 2 | Sector 05, "Organização — embalagens de arrumação" (p. 7) | This is the unreleased KeepyLink product | Left out until launch |
| 3 | No mention of ISO 9001 by name (p. 20 says "certificações de qualidade") | The site and the design system say ISO 9001 since 2014 | ISO 9001, to be confirmed |
| 4 | Paula Rocha is "Fundadora · Comercial e Projetos" on p. 19 and "Fundadora · Vendas e Projetos" on p. 21 | The site uses the title CEO | One title to be chosen |
| 5 | Contact is Paula Rocha's mobile and direct email (p. 21) | The site publishes the landline +351 256 601 535 and geral@linkplas.pt | To be chosen |
| 6 | The Coprax testimonial spells the company "Linkplas" (p. 17) | The brand is written LinkPlas | To be chosen: quote as written, or normalise |
| 7 | Process shown as Viabilidade → Molde e protótipos → Industrialização → Produção (p. 9) | The design system's example says Desenvolvimento → Molde → Injeção → Personalização | The presentation's four steps |
| 8 | — | The design system's header and footer list Empresa, Produtos, Setores, Qualidade, Notícias, Contactos | The new menu in section 1; the Figma header, mega menu and footer need updating |
| 9 | — | The Produtos frame has filter chips for KeepyLink and ThermaLink, and its footer lists both | Left out until those products launch |
| 10 | — | The brand manual defines four sub-brands; FactoryLink is a fifth, added in Figma only | FactoryLink is used; the manual should gain it |
| 11 | — | In the design system, the FactoryLink tag is a variant named "Industrial" | Treated as FactoryLink; the variant should be renamed |
| 12 | — | The Produtos frame uses the dark header; the design system says dark is for the home hero and light for inner pages | Light header kept, confirmed by the client. A dark mode may be built later; the frame's dark header belongs to that |
| 13 | — | The Produtos frame spaces its sections with 50px, 10px and 112px, which are not on the spacing scale | Built with the nearest steps: 48px, 12px and 96px |
| 15 | — | The Produtos frame spaces the filter chips 24px apart | 12px, at the client's request: 24px looked too loose |
| 14 | — | The Produtos frame's header has no "Pedir orçamento" button and shows the new menu | The current header stays (four items and the button) until the other pages exist |

---

## 6. Decisions and open questions

Decided:
- **ThermaLink** is the future own-brand name for what is now ecoCatch. Today ecoCatch is shown as the ZØR partnership.
- **Produtos** has no dropdown. It is one catalogue page filtered by brand, following the Figma frame, and **every product has its own detail page** with a description, a 3D viewer where a 3D file exists, and a size or volume selector where there is more than one.
- **FactoryLink** is a new brand for what the current site shows under Indústria and Serviços.
- **Images**: the old site's product images stand in until new photographs are supplied.
- **ecoCatch** stays on Parcerias only, and is not in the Produtos catalogue, for now.
- **FactoryLink** has its own page under Marcas.
- **3D viewer** on the TupperLink container, the PharmaLink box and four FactoryLink parts (Intercalar longarina, Abraçadeira, Tampa para veio 16 mm, Anilha intercalar 30015), shown in the colours of their current photos with no colour choice. A page opens on the first size that has a model.
- **The product detail page and the mobile catalogue** were built without a Figma design, as a first proposal to iterate on.
- **Inner pages keep the white (light) header.** A dark mode may be built in the future; nothing is built for it now.
- **Active partners** are Platec, Plural, ZØR, Polisport, Empifarma, OCP, Medlog and Coprax. Permission to publish names, logos and testimonials is in place.
- **Monte Meão** is not an active partnership and is not shown.
- **Notícias** are added by hand for now.

Still open:
1. **3D models.** There is no model for the 2000 ml TupperLink, and the 4000 ml one has no measurements on the site. Is the PharmaLink lid the same for the three boxes? The PharmaLink starting colours are set by the client: dark blue box `#2B305F`, grey lid `#89898B`.
2. **Product data.** Reference, material and measurements are missing for several products (see the worksheet, section 3).
3. **Product copy.** The descriptions were carried over from the current site as they were; the English versions are drafts to review.
4. **Timeline.** Confirm the dated list in 2.6 and say which entries have photos or videos. The older deck adds three entries the 2026 presentation and the site do not have: 2024 moldes próprios, 2025 ecoFish (caixa reutilizável), 2026 ecoFish em produção.
5. **Addresses.** New pages need URLs. Should the site move to Portuguese addresses (`/produtos`, `/empresa/sobre-nos`) with the old ones redirected, or keep the current English-style ones?
6. **Contact form.** Should it gain the request type, drawing upload and consent checkbox shown in the design system? A file upload needs a different sending service from the one used today.

## 7. Content still to be supplied

The worksheet `docs/conteudo-a-preencher.md` has a field for every missing item, in Portuguese, grouped by page. Files (photos, logos, videos, certificates, 3D models) go in `content-inbox/`, in the folder the worksheet names.

In short:
- **Produtos**: for every product, the reference, material and capacity shown on its card, a short and a long description, the measurements of each size, and photographs. 3D files per size for the viewer.
- **Marcas**: the "Origem" story of TupperLink and of PharmaLink; a TupperLink client or testimonial; box dimensions for PharmaLink; the STL files and real product colours for the 3D viewer; the origin story and clients of FactoryLink.
- **Parcerias**: for each partner, the logo and a description of the partnership (Polisport has no content in the presentation); for each portfolio project, what was supplied and a photo.
- **Sobre nós**: years for the undated milestones, and photos and videos for the timeline; a team photo.
- **Qualidade**: the list of certifications and the certificates as files.
- **Início**: the hero photograph and the testimonial to feature.
- **Notícias**: a one-line page introduction and the next posts.
- **English**: each page is translated when it is rebuilt.
