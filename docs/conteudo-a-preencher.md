# Conteúdo a preencher — site LinkPlas

Esta folha reúne tudo o que as novas páginas precisam e que ainda não existe na Apresentação Institucional 2026 nem no site atual. Acompanha o plano em `docs/site-structure-plan.md`.

**Estado em 3 de outubro de 2026:** todas as páginas estão construídas, em português e em inglês. Onde falta conteúdo, a página mostra uma nota "Conteúdo a fornecer" com o que é preciso; cada nota desaparece quando o conteúdo chega. Esta folha lista as mesmas faltas, por página.

**Como preencher**
- Escreva a resposta por baixo de cada campo, no lugar de `…`.
- O que já se sabe está preenchido e marcado com **(confirmar)**: basta corrigir se estiver errado.
- Os textos são em português de Portugal. A versão inglesa de tudo o que já está no site foi escrita a partir do português e está publicada como rascunho: precisa de revisão (ver 8.4).
- Se um campo não se aplica, escreva "não se aplica" para sabermos que não ficou esquecido.

**Onde colocar os ficheiros**

Fotografias, logótipos, vídeos, certificados e modelos 3D vão para a pasta `content-inbox/`, na raiz do projeto. Esta pasta não é publicada no site.

| Pasta | O que colocar |
|---|---|
| `content-inbox/inicio/` | Vídeo do hero e outras imagens da página inicial |
| `content-inbox/marcas/tupperlink/` | Fotografias da TupperLink |
| `content-inbox/marcas/pharmalink/` | Fotografias da PharmaLink |
| `content-inbox/marcas/factorylink/` | Fotografias da FactoryLink |
| `content-inbox/produtos/` | Fotografias de cada produto, para o catálogo e a ficha técnica |
| `content-inbox/3d/` | Modelos 3D em STL, um por peça e por tamanho |
| `src/assets/logos/` | Logótipos dos clientes e parceiros, de preferência em SVG. Esta pasta é do próprio site: um logótipo colocado aqui aparece sozinho na faixa de clientes da página inicial e na página Parcerias (a pasta tem um LEIA-ME com as regras do nome do ficheiro) |
| `content-inbox/parcerias/portfolio/` | Fotografias dos projetos |
| `content-inbox/empresa/timeline/` | Fotografias e vídeos da história |
| `content-inbox/empresa/equipa/` | Fotografia de grupo e retratos |
| `content-inbox/qualidade/` | Certificados em PDF e selos |
| `content-inbox/noticias/` | Imagens das publicações |

Nome dos ficheiros: em minúsculas, sem espaços nem acentos, a dizer o que é. Por exemplo `tupperlink-1000ml-tampa.stl`, `2018-linha-de-montagem.jpg`, `plural-logo.svg`. Os vídeos podem ser indicados por ligação (YouTube, Vimeo) em vez de ficheiro.

---

## 1. Início

**1.1 Vídeo do hero**
A página usa o vídeo da produção (`Hero.webm`) no lugar da fotografia do design. O ficheiro tem cerca de 18 MB e só existe em WebM.
- Versão mais leve (até 3 ou 4 MB), em MP4 e em WebM: …
- Imagem para mostrar enquanto o vídeo carrega: …

**1.2 Logótipos da faixa "Mais de 20 clientes ativos confiam na LinkPlas"**
Enquanto não houver logótipos, a faixa mostra os nomes dos oito parceiros em texto.
- Ficheiros colocados em `src/assets/logos/`: os oito parceiros (ZØR, OCP, Medlog, Polisport, Empifarma, Plural, Platec e Coprax; 8 de outubro de 2026).
- Dois precisam de um ficheiro melhor: o da **Platec** veio na versão para fundo escuro (letras a desvanecer para branco) e é pequeno (150 × 56 px): as letras foram passadas a um só tom de cinzento para se lerem, e o ficheiro original está em `content-inbox/parcerias/logos/platec-original.png`; o da **Coprax** é um JPG pequeno (220 × 80 px) com fundo branco. Versões para fundo claro, em SVG ou PNG maior: …
- O logótipo da Plural diz "plural+udifar". Decidido (8 de outubro de 2026): o site continua a escrever "Plural".
- Outros clientes a acrescentar à faixa: …

**1.3 "Respondemos no prazo de 2 dias úteis com uma proposta."**
A frase veio com o design. O prazo está certo? **Sim, confirmado (5 de outubro de 2026).**

**1.4 Imagem do ecoCatch**
Confirmado (5 de outubro de 2026): a vista explodida do kit isotérmico é o ecoCatch. Usa o mesmo recipiente plástico das caixas PharmaLink, com outra utilização, e não é um produto de farmácia. A imagem fica.
- A imagem tem as legendas desenhadas em português. Existe uma versão sem legendas, ou em inglês, para a página inglesa? …
- A página Parcerias diz que o kit é "qualificado até 20 horas" (texto do site antigo) e o Portfólio diz "até 24 h" (apresentação). Qual é o valor certo? …

**1.5 Passos do processo**
A página inicial mostra os passos do design (Desenvolvimento · Molde · Injeção · Personalização) e a página Como trabalhamos os da apresentação (Viabilidade · Molde e protótipos · Industrialização · Produção). Ficam os dois ou escolhe-se um? …

---

## 2. Notícias

**2.1 Frase de introdução da página** (uma linha)
Opcional: a página abre só com o título "Novidades da LinkPlas." e já não mostra a nota "Conteúdo a fornecer". Se quiser uma frase por baixo do título, escreva-a aqui.
- …

**2.2 Novas publicações**
A apresentação refere estes quatro temas. O primeiro já está publicado; os outros ainda não estão no feed. Preencha os que quiser publicar e acrescente linhas para outros.

| Data | Origem (LinkedIn, Instagram, site…) | Título | Texto curto (até 200 caracteres) | Imagem (ficheiro) | Ligação para a publicação original |
|---|---|---|---|---|---|
| 28 de maio de 2026 (primeiro dia da feira) | site, sem publicação original | Presença na ExpoFarma | **Publicado, a rever:** "A LinkPlas esteve na ExpoFarma 2026, no Centro de Congressos de Lisboa, a feira que reúne o setor das farmácias em Portugal." | fotografia enviada em 2026-10-08 | … (se existir uma publicação, o cartão passa a ligar a ela) |
| … | … | ecoCatch, em parceria com a ZØR | … | … | … |
| dezembro de 2025 **(confirmar)** | … | Projeto Platec concluído | … | … | … |
| fevereiro de 2026 **(confirmar)** | … | Entrega à Plural | … | … | … |
| … | … | … | … | … | … |

---

## 3. Produtos

A página Produtos é um catálogo com filtros por marca (TupperLink, PharmaLink, FactoryLink). Cada produto tem um cartão no catálogo e uma página própria ("ficha técnica") com descrição, pré-visualização, tamanhos e ficheiros para descarregar. As imagens ficam com um marcador de posição até chegarem as fotografias. Estas páginas já estão construídas (endereço `/Products`), com os dados do site atual; o que for preenchido aqui substitui-os.

**3.1 Lista de produtos**

| Marca | Produto | Tamanhos ou volumes |
|---|---|---|
| TupperLink | Recipiente TupperLink | 500, 1000, 1500, 2000, 2500 e 4000 ml |
| PharmaLink | Caixa de transporte de medicamentos | Grande, Médio, Pequeno |
| PharmaLink | Kit isotérmico (e-Pharma) | um |
| FactoryLink | Tampa para tubos | sete (30001 a 30007) |
| FactoryLink | Intercalar longarina | um |
| FactoryLink | Tampa para veio | 16 mm e 20 mm |
| FactoryLink | Anilha intercalar | três (30014, 30015, 30016) |
| FactoryLink | Abraçadeira | um |
| FactoryLink | Soldadura por ultrassons | serviço, sem tamanhos |

- Há produtos a acrescentar ou a retirar? …
- Os nomes estão certos? …

**3.2 Dados de cada produto**

O cartão do catálogo mostra uma linha com referência, material e capacidade (por exemplo "REF. 30005 · PP · Ø48 mm"). O site atual não indica o material de nenhum produto.

| Produto | Referência | Material | Capacidade ou medida principal | Descrição curta (até 120 caracteres) |
|---|---|---|---|---|
| Recipiente TupperLink | … | … | 500 a 4000 ml **(confirmar)** | … |
| Caixa de transporte de medicamentos | … | … | … | … |
| Kit isotérmico (e-Pharma) | … | … | … | … |
| Tampa para tubos | 30001 a 30007 **(confirmar)** | … | Ø12 a Ø63 mm **(confirmar)** | … |
| Intercalar longarina | … (desenho 7017030013) | … | … | … |
| Tampa para veio | … (desenhos 7017030011 e 7017030009) | … | 16 mm e 20 mm **(confirmar)** | … |
| Anilha intercalar | 30014 a 30016 **(confirmar)** | … | Ø40 e Ø60 mm **(confirmar)** | … |
| Abraçadeira | … (desenho 7017030008) | … | … | … |
| Soldadura por ultrassons | não se aplica | não se aplica | não se aplica | … |

**Descrição longa** — para a ficha técnica de cada produto, 60 a 150 palavras: o que é, para que serve, onde se aplica. Por agora as páginas usam o texto do site atual, tal como estava.
- Recipiente TupperLink: …
- Caixa de transporte de medicamentos: …
- Kit isotérmico (e-Pharma): …
- Tampa para tubos: …
- Intercalar longarina: …
- Tampa para veio: …
- Anilha intercalar: …
- Abraçadeira: …
- Soldadura por ultrassons: …

**3.3 Tamanhos das peças FactoryLink** — do site atual **(confirmar)**

Os tamanhos, as cores e os modelos 3D da TupperLink e da PharmaLink estão nas secções 4.1 e 4.2.

Tampa para tubos

| Referência | Diâmetro | Altura | Espessura |
|---|---|---|---|
| 30001 | 12 mm | 10 mm | 2,5 mm |
| 30002 | 16 mm | 12 mm | 3 mm |
| 30003 | 38 mm | 16 mm | 3,5 mm |
| 30004 | 42 mm | 16 mm | 3,5 mm |
| 30005 | 48 mm | 18,5 mm | 4 mm |
| 30006 | 51 mm | 18,5 mm | 4 mm |
| 30007 | 63 mm | 20 mm | 4,5 mm |

Anilha intercalar

| Referência | Diâmetro exterior | Diâmetro interior | Espessura |
|---|---|---|---|
| 30014 | 40 mm | 9 mm | 6 mm |
| 30015 | 60 mm | 9 mm | 7 mm |
| 30016 | 60 mm | 21 mm | 7 mm |

Tampa para veio

| Tamanho | Desenho | Outras medidas |
|---|---|---|
| 16 mm | 7017030011 | … |
| 20 mm | 7017030009 | … |

Intercalar longarina e Abraçadeira: o site atual não indica medidas.
- Intercalar longarina (medidas): …
- Abraçadeira (medidas): …

**3.4 Modelos 3D e pré-visualização por tamanho**

Na ficha técnica, quem visita escolhe o tamanho ou o volume e a pré-visualização 3D muda. Quando não há modelo para um tamanho, a pré-visualização mantém-se e a página diz que tamanho está a mostrar. Têm visualizador 3D o recipiente TupperLink, a caixa PharmaLink e quatro peças FactoryLink.

Modelos recebidos em `content-inbox/3d/` e já no site:

| Produto | Tamanho | Modelo |
|---|---|---|
| Recipiente TupperLink | 500, 1000, 1500, 2500 e 4000 ml | base e tampa |
| Recipiente TupperLink | 2000 ml | **em falta** |
| Caixa de transporte de medicamentos | Grande, Médio, Pequeno | caixa |
| Caixa de transporte de medicamentos | — | uma tampa (`tampa cx med`) |
| Intercalar longarina | único | peça |
| Abraçadeira | único | peça |
| Tampa para veio | 16 mm | peça |
| Tampa para veio | 20 mm | **em falta** |
| Anilha intercalar | 30015 | peça |
| Anilha intercalar | 30014 e 30016 | **em falta** |
| Tampa para tubos | 30001 a 30007 | **em falta** |

- Modelo do recipiente de 2000 ml (ficheiro): …
- Modelos em falta das peças FactoryLink (ficheiros STL): …
- As peças FactoryLink aparecem nas cores das fotografias atuais (intercalar bege, as outras pretas ou cinzento-escuro). Estão certas? …
- A tampa das caixas PharmaLink é a mesma para os três tamanhos? No site aparece levantada por cima da caixa, como nas imagens atuais. …
- Cores: na ficha técnica já se pode mudar a cor do modelo. TupperLink: transparente ou qualquer cor, com recipiente e tampa separados. PharmaLink: qualquer cor à escolha, para a caixa e para a tampa; começa com a caixa em cinzento claro e a tampa em azul. Ver 4.1 e 4.2.

**3.5 Ficheiros para descarregar**

Os desenhos e ficheiros CAD do site atual (PDF, DWG, IGS, STEP, SLDPRT), o catálogo e a ficha do kit isotérmico passam para a ficha técnica de cada produto.
- Há ficheiros a acrescentar, a atualizar ou a retirar? …
- O catálogo atual (`catalogo_Linkplas_sem_taco.pdf`) tem o logótipo antigo. Há uma versão nova? …

**3.6 Fotografias**

Uma fotografia por produto para o cartão (formato horizontal, fundo neutro) e, se existirem, mais fotografias para a ficha técnica. Colocar em `content-inbox/produtos/`. Por agora o site usa as imagens do site antigo, que são pesadas (cerca de 10 MB só nas imagens do catálogo): as novas devem vir num tamanho próprio para a web.
- Ficheiros: …

**3.7 ecoCatch**

Decidido: por agora a ecoCatch fica só na página Parcerias e não aparece no catálogo de Produtos.
- Fotografias próprias, se existirem (ficheiros): …
- A imagem da apresentação é da ZØR. Podemos usá-la no site? …

**3.8 Texto de fecho da ficha técnica**

Convite a pedir orçamento para o produto, com ligação para a página da marca. Uma ou duas frases.
- …

---

## 4. Marcas

Desde 8 de outubro de 2026 as páginas das marcas usam o texto do PowerPoint de apresentação das marcas (setor, título, parágrafo e pontos de cada diapositivo), seguido dos produtos da marca. Todos os campos desta secção deixaram de ser necessários para as páginas; ficam como registo.

As páginas das marcas já não têm as secções "Origem" e "Clientes" (retiradas a 8 de outubro de 2026). Os campos **Origem** e **Cliente ou testemunho** abaixo deixaram de ser necessários; ficam aqui apenas para o caso de as secções voltarem.

### 4.1 TupperLink

**Origem** — a história da marca, em 60 a 120 palavras. Pontos de partida conhecidos: 2016, primeiro produto próprio na área alimentar; 2023, gama de caixas para armazenamento de alimentos **(confirmar)**.
- Como e porquê surgiu a ideia: …
- Quem desenvolveu e onde é produzida: …
- Marcos importantes: …

**Cliente ou testemunho** — a apresentação não tem nenhum para a TupperLink.
- Nome, cargo e empresa: …
- Citação: …

**Tamanhos** — do site atual **(confirmar)**

| N.º | Volume | Comprimento | Largura | Altura |
|---|---|---|---|---|
| 1 | 500 ml | 210 mm | 160 mm | 28 mm |
| 2 | 1000 ml | 210 mm | 160 mm | 45 mm |
| 3 | 1500 ml | 210 mm | 160 mm | 64 mm |
| 4 | 2000 ml | 210 mm | 160 mm | 86 mm |
| 5 | 2500 ml | 346 mm | 226 mm | 50 mm |
| 6 | 4000 ml | … | … | … |

O volume de 4000 ml foi retirado do site em 2026-10-13, até entrar em produção. Veio com os modelos 3D; no modelo mede cerca de 346 × 226 × 76 mm.
- Medidas do recipiente de 4000 ml: …
- No modelo 3D, o recipiente de 1500 ml tem 62 mm de altura; o site indica 64 mm. Qual é o valor certo? …

**Cores** — decidido: vende-se sobretudo transparente, mas faz-se em qualquer cor, e a tampa pode ter cor diferente do recipiente. No site, quem visita escolhe "Transparente" ou "Com cor" e, neste caso, uma cor à vontade, para o recipiente e para a tampa.
- Há cores habituais que valha a pena propor logo (nome e referência)? …

**Modelos 3D** — recebidos para 500, 1000, 1500, 2500 e 4000 ml (base e tampa). Falta o de 2000 ml (ver 3.4).

**Fotografias** (ficheiros): …

### 4.2 PharmaLink

**Origem** — 60 a 120 palavras. Ponto de partida conhecido: 2024, início de produção das caixas de transporte de medicamentos, com moldes próprios **(confirmar)**.
- Como e porquê surgiu a ideia: …
- Para quem foi desenvolvida primeiro: …
- Marcos importantes: …

**Tamanhos** — o site atual mostra três tamanhos, sem medidas.

| Tamanho | Comprimento | Largura | Altura | Capacidade |
|---|---|---|---|---|
| Grande | … | … | … | … |
| Médio | … | … | … | … |
| Pequeno | … | … | … | … |

Medidas exteriores tiradas dos modelos 3D, para confirmar ou corrigir (não estão no site): Grande 491 × 300 × 260 mm; Médio 493 × 303 × 210 mm; Pequeno 490 × 300 × 160 mm; tampa 499 × 308 × 43 mm.

**Kit isotérmico** — do site atual **(confirmar)**
- Intervalos de temperatura: −21 ºC; +2 ºC a +8 ºC; +15 ºC a +25 ºC
- Duração: até 20 horas
- O nome "e-Pharma" mantém-se para este kit? …

**Cores** — no site, quem visita escolhe qualquer cor para a caixa e para a tampa. À partida a caixa aparece em azul-escuro (`#2B305F`) e a tampa em cinzento (`#89898B`).
- Cor certa da caixa (nome e referência RAL, Pantone ou código): …
- Cor certa da tampa (nome e referência): …

**Modelos 3D** — recebidos para os três tamanhos de caixa e uma tampa (ver 3.4).

**Fotografias** (ficheiros): …

### 4.3 FactoryLink

Marca nova, para as peças técnicas à especificação e para os serviços de acabamento (o que o site atual mostra em "Indústria" e "Serviços"). Os produtos e os seus dados estão na secção 3.

**Origem** — 60 a 120 palavras. Pontos de partida conhecidos: a primeira atividade da empresa foram componentes injetados para clientes industriais (ano por indicar); 2018, linha de montagem; 2020, máquina de soldadura por ultrassons **(confirmar)**.
- Porquê criar uma marca para esta área: …
- Marcos importantes: …

**Clientes ou testemunho**
- Que clientes e testemunhos da apresentação pertencem a esta marca: …
- Nome, cargo, empresa e citação, se houver um novo: …

**Página da marca** — decidido: a FactoryLink tem página própria em "Marcas", como a TupperLink e a PharmaLink.

**Manual de normas** — a FactoryLink ainda não está no Manual de Normas Gráficas 2026.
- Vai ser acrescentada ao manual? …

**Fotografias** (ficheiros, em `content-inbox/marcas/factorylink/`): …

### 4.4 ThermaLink

Sem nada a preencher por agora. Quando a marca for lançada, precisaremos do nome dos produtos, das diferenças face à ecoCatch e da data de lançamento.

---

## 5. Parcerias

### 5.1 Parceiros

Parceiros ativos: Platec, Plural, ZØR, Polisport, Empifarma, OCP, Medlog e Coprax.

| Parceiro | Logótipo (ficheiro) | Site | Desde (ano) | A parceria em uma ou duas frases |
|---|---|---|---|---|
| Platec | … | … | … | Projeto concluído em dezembro de 2025. |
| Plural | … | … | … | Mais de 10.000 caixas e tampas personalizadas com a marca do cliente. |
| ZØR | … | … | … | ecoCatch: sistema reutilizável para pescado, desenvolvido em parceria. |
| Polisport | … | … | … | Recomendou a LinkPlas à Coprax. |
| Empifarma | … | … | … | Caixas de transporte de medicamentos para a distribuição farmacêutica. |
| OCP | … | … | … | Caixas de transporte de medicamentos para a distribuição farmacêutica. |
| Medlog | … | … | … | Caixas de transporte de medicamentos para a distribuição farmacêutica. |
| Coprax | … | … | … | Chegou à LinkPlas por indicação da Polisport. |

As frases da última coluna são as que estão no site, confirmadas a 5 de outubro de 2026.

Os logótipos vão para `src/assets/logos/`, com o nome do parceiro em minúsculas (`platec.svg`, `zor.svg`…).

A página Parcerias abre com o ecoCatch (a animação do kit isotérmico) e o Portfólio mostra a vista explodida do kit. Fotografias do ecoCatch em utilização, se existirem, são bem-vindas:
- Ficheiros: …

A Monte Meão não entra no site: de momento não é uma parceria ativa.

### 5.2 Portfólio

> A página Portfólio está escondida do site desde 2026-10-08, até este conteúdo existir. Volta a aparecer no menu quando estiver pronto.

Para cada projeto: o que o cliente precisava, o que a LinkPlas fez e o resultado. Duas ou três frases em cada campo. Os testemunhos já existem na apresentação.

**Plural (2025–2026)**
- Já sabemos: mais de 10 000 caixas e tampas personalizadas com a marca do cliente, com etiquetagem numerada e componentes à especificação. Testemunho de Nuno Duarte **(confirmar)**
- O que o cliente precisava: …
- Fotografias (ficheiros): …

**Platec**
- Já sabemos: projeto concluído em dezembro de 2025. Testemunho de Xavier Miranda **(confirmar)**
- Nome ou descrição do projeto: …
- O que a LinkPlas forneceu: …
- Fotografias (ficheiros): …

**Coprax**
- Já sabemos: chegou por recomendação da Polisport. Testemunho de Tiago Cunha **(confirmar)**
- O que a LinkPlas forneceu: …
- Ano: …
- Fotografias (ficheiros): …

**ecoCatch, com a ZØR**
- Já sabemos: ecoFish, ecoShell e ecoTrace; 6 toneladas de EPP reutilizável substituem 720 toneladas de EPS descartável em 3 anos, numa operação típica **(confirmar)**
- O papel da LinkPlas no projeto (desenho, molde, injeção…): …
- Fase atual (desenvolvimento, produção, à venda): …
- Fotografias (ficheiros): …

**Outros projetos a acrescentar**

| Cliente | Ano | O que foi feito | Resultado | Fotografias |
|---|---|---|---|---|
| … | … | … | … | … |

---

## 6. Empresa

### 6.1 Sobre nós — história em timeline

Cada marco precisa de um ano, de uma ou duas frases e, se possível, de uma fotografia ou vídeo. Corrija os anos, acrescente o que falta e apague o que não interessa.

| Ano | Título | Texto (uma ou duas frases) | Fotografia ou vídeo (ficheiro ou ligação) | Legenda |
|---|---|---|---|---|
| 2012 | Fundação | Paula Rocha cria a LinkPlas, depois de uma carreira ligada à indústria. **(confirmar)** | … | … |
| … | Componentes para a indústria | Peças e componentes injetados para clientes industriais. | … | … |
| 2014 | Certificação ISO 9001 | … | … | … |
| 2016 | Primeiro produto próprio na área alimentar | … | … | … |
| 2018 | Linha de montagem | … | … | … |
| 2020 | Máquina de ultrassons | … | … | … |
| … | Parceiro de desenvolvimento | Do desenho da peça ao molde, da injeção à personalização. | … | … |
| 2023 | Gama de caixas para armazenamento de alimentos | … | … | … |
| 2024 | Caixas de transporte de medicamentos | … | … | … |
| 2024 **(confirmar)** | Moldes próprios | … | … | … |
| 2025 **(confirmar)** | ecoFish, caixa reutilizável | … | … | … |
| 2026 | ecoCatch com a ZØR e 14 anos de atividade | … | … | … |
| … | … | … | … | … |

**Vídeos institucionais**

| Título | Ligação ou ficheiro | Duração | Onde usar (timeline, topo da página…) |
|---|---|---|---|
| … | … | … | … |

Recebidas a 8 de outubro de 2026 quatro fotografias da fábrica (máquina de injeção, armazém de moldes, tapete de saída e receção), já colocadas ao longo da página Sobre nós. Estão em `public/images/empresa/`.

### 6.2 Sobre nós — equipa

Recebido a 8 de outubro de 2026 (diapositivo "A equipa"): a fotografia de grupo e seis pessoas com retrato, nome e cargo. Já estão na página; os ficheiros estão em `public/images/equipa/`.

Paula Rocha, Ana Paula, António Filipe e Sandra Tavares têm a data de entrada e uma pequena biografia (da apresentação institucional). **Faltam para os dois novos**, no mesmo formato ("Desde …" e uma ou duas frases):
- Rui Silva (Projetos): …
- André Silva (Responsável Digital): …

**Fotografia de grupo**
A apresentação tem uma fotografia de um jantar da equipa. Usa-se essa ou outra?
- Ficheiro: …
- Legenda: …

**Liderança** — da apresentação **(confirmar)**

| Nome | Função | Desde | Retrato (ficheiro) |
|---|---|---|---|
| Paula Rocha | Fundadora · … | 2012 | … |
| Ana Paula | Qualidade e Planeamento | maio de 2012 | … |
| António Filipe | Produção e Afinação de Máquinas | junho de 2012 | … |
| Sandra Tavares | Logística e Armazém | março de 2012 | … |

A função de Paula Rocha aparece de três formas: "Comercial e Projetos", "Vendas e Projetos" e, no site atual, "CEO". Qual fica? …

### 6.3 Como trabalhamos

O texto vem todo da apresentação. Faltam só imagens.
- Fotografias das quatro fases (viabilidade, molde e protótipos, industrialização, produção): …
- Fotografia das máquinas de injeção: …
- A fotografia da soldadura por ultrassons da apresentação pode ser usada? …

### 6.4 Qualidade

**Certificações**

| Certificação | Entidade certificadora | Desde | Válida até | Certificado em PDF (ficheiro) | Disponível para descarregar? |
|---|---|---|---|---|---|
| ISO 9001 | … | 2014 **(confirmar)** | … | … | … |
| … | … | … | … | … | … |

**Conformidade dos materiais**
A apresentação fala em conformidade para contacto alimentar e farmacêutico.
- Regulamentos ou normas a referir: …
- Declarações de conformidade para descarregar (ficheiros): …

**Selo Igualdade Salarial 2024**
- Imagem do selo (ficheiro): …

A presença na ExpoFarma saiu desta página e passou a ser uma notícia (secção 2.2). A página Qualidade também já não mostra a nota "Conteúdo a fornecer" das certificações; os ficheiros acima continuam em falta.

---

## 7. Contactos

A apresentação e o site antigo indicam contactos diferentes. A página usa os da coluna "Fica"; o telefone e o email foram confirmados a 5 de outubro de 2026.

| Campo | Apresentação | Site antigo | Fica |
|---|---|---|---|
| Telefone | +351 919 827 175 | +351 256 601 535 | +351 256 601 535 (confirmado) |
| Email | paula.rocha@linkplas.pt | geral@linkplas.pt no rodapé, paula.rocha@linkplas.pt na página Contactos | geral@linkplas.pt (confirmado) |
| Morada | Rua António Gomes Correia Júnior, n.º 459, Zona Industrial do Mergulhão, Cesar, 3700-606 Oliveira de Azeméis | igual, sem o número da porta | a da apresentação, com "Linkplas, Lda" por cima **(confirmar)** |

**Horário de atendimento**: segunda a sexta, das 9h00 às 18h00 (indicado a 8 de outubro de 2026; já está na página).

**Formulário** — decidido: tem os campos Nome, Empresa, Email, Telefone, Tipo de pedido (Orçamento · Informação · Parceria) e Mensagem, e uma caixa de consentimento obrigatória. Não tem envio de ficheiros.

- Texto do consentimento, enquanto não houver política de privacidade: "Autorizo a LinkPlas a utilizar os dados deste formulário para responder ao meu pedido." **(confirmar)**
- O tipo de pedido chega no início da mensagem. Para aparecer também num campo próprio do email, é preciso acrescentar `{{tipo_pedido}}` ao modelo do EmailJS: …

---

## 8. Decisões gerais

**8.1 Nome da empresa nos testemunhos**
O testemunho da Coprax escreve "Linkplas". No site está "LinkPlas". Fica assim ou mantém-se como foi escrito? …

**8.2 Endereços das páginas**
Decidido: os endereços são em português (`/produtos`, `/empresa/sobre-nos`…), iguais nas duas línguas (o inglês acrescenta `/en` no início), e os antigos redirecionam para os novos.

**8.3 Páginas legais**
O rodapé do design system tem ligações para Política de privacidade, Política de cookies e Termos de utilização. Estes textos existem? …
Sem a política de privacidade não é possível publicar o aviso de cookies nem o texto de consentimento que o design prevê ("Li e aceito a política de privacidade"). O rodapé do site só tem, por agora, o Livro de Reclamações.

**8.4 Revisão do inglês**
Todas as páginas têm versão inglesa, escrita a partir do português e ainda não revista. Quem a revê e até quando? …

**8.5 Páginas feitas sem design**
As páginas das marcas, Parcerias, Portfólio, Sobre nós, Como trabalhamos, Qualidade e Contactos foram montadas com os componentes do design system, como primeira proposta. O que muda? …
