# LinkPlas Web — Project Guide for Claude Code

LinkPlas (Engineered Plastic Solutions) is a parent brand with five sub-brands: ThermaLink, TupperLink, PharmaLink, KeepyLink and FactoryLink (the manual defines the first four; FactoryLink was added afterwards, see decision 6). This repo is the web implementation of the 2026 rebrand.

**Sources of truth, in order:**
1. `docs/brand/manual-normas-graficas-2026.pdf`: the brand manual. It wins on brand rules (logo, colours, typography intent).
2. Figma design system, file key `T90TiwsFvl1GxlF2AHvqgb` ("LinkPlas — Design System (Web)"). It wins on UI: components, spacing, states and layout.
3. This file. It records the decisions taken where 1 and 2 disagree.

Page layouts come from a second Figma file, key `cBcn3v2KdluyJjrBgMFvKE` ("Linkplas-Website"), which is built from the design system. It has two page designs: "Produtos (Desktop)", node `2:2037`, and the home page, node `2:1222`. Where a page frame and the design system differ on a component, the design system wins and the difference is flagged. The other pages have no frame: they are composed from design-system components only.

If something isn't covered by any of these, ask before inventing it. Don't add new colours, radii, shadows or font sizes.

**The brand name is spelled `LinkPlas`** (capital P), not `Linkplas`. The one exception is the registered company name, `Linkplas, Lda`. Email addresses, the domain and social-network addresses keep their own spelling.

---

## Stack

- React with function components and hooks.
- Bootstrap 5.3 compiled from **Sass source**, never the CDN CSS, so tokens can override its variables. Use React-Bootstrap for interactive primitives (Modal, Dropdown, Accordion, Tabs, Toast, Tooltip), because their keyboard and ARIA handling is already correct.
- UI copy is **European Portuguese**: `<html lang="pt-PT">`. The design system includes a Language Switcher, so keep strings out of components so they can be translated.

## Folder structure

```
src/
  styles/
    _tokens.scss          # CSS custom properties from Figma variables (--lp-*), text-style mixins, lp-page-gutter
    _bootstrap-vars.scss  # Bootstrap Sass variable overrides (imported BEFORE bootstrap)
    _base.scss            # html, typography classes, focus ring, page fade, skip link
    main.scss             # entry: tokens → bootstrap-vars → bootstrap → base → components
  components/
    brand/                # Logo, SubbrandLogo, ModularPattern
    ui/                   # Button, IconButton, Icon (+ icons.js), Badge, Chip, SubbrandTag, Alert, StandaloneLink,
                          # CertificationBadge, ImagePlaceholder, ContentPlaceholder, ModelViewer, BackgroundVideo
    forms/                # FormField, Input, Textarea, Select, Checkbox
    navigation/           # NavItem, NavDropdown (dropdown and mega menu), LanguageSwitcher, Breadcrumb, BackToTop
    cards/                # ProductCard, DownloadCard, FeatureCard, NewsCard, PartnerCard, TeamCard, TestimonialCard, Stat
    content/              # Section, SectionHeading, Eyebrow, ProcessStep, TimelineItem, CheckList, QuoteBlock, SpecList, SpecTable
    sections/             # PageLayout, HomeHero, InteriorHero, BrandHero, SectorShowcase, StatsBand, CtaSection, LogoStrip,
                          # ContactSection, ZorPartnership, ProductCatalogue, ProductDetail
    seo/                  # PageMeta (title, description, canonical, hreflang)
    Header.jsx, Footer.jsx, ScrollToTop.jsx   # still at the top of components/, with _header.scss and _footer.scss
  pages/                  # one file per route: Home, News, Products, ProductDetail, Brand, Partners, Portfolio,
                          # About, Process, Quality, Contact
  content/                # copy per language and site data: routes.js, site.js, meta.js, home.js, news.js, products.js,
                          # brands.js, partners.js, company.js, contact.js, model-finishes.js
  i18n/                   # language list, URL prefix helpers, useLanguage()
  assets/brand/           # official logo SVGs only
  assets/icons/           # Figma icons, one file per size (name-size.svg)
  assets/logos/           # client and partner logos for the logo strip and Parcerias (see its LEIA-ME.md)
docs/brand/               # brand manual PDF
scripts/                  # build-3d-models.mjs (`npm run models`), build-sitemap.mjs (`npm run sitemap`)
content-inbox/            # files supplied by the client; never published
```

Each component lives in its own folder, with its `.jsx` file and a `_name.scss` partial when it needs one; the partial is imported from `styles/main.scss`. Components only consume tokens through `var(--lp-*)` or Bootstrap variables, never raw hex values. A page file only composes sections and reads its copy from a content module; it holds no copy and no styles of its own.

---

## Working with Figma

The Figma MCP server is connected. Before building or changing a component:

1. Find it in Figma by its component-set name. The names match the folders above: `Button`, `Form Field`, `Product Card`, `Hero`, and so on. The design system pages are Marca, Botões, Links e navegação secundária, Badges e tags, Formulários, Navegação, Cards, Feedback, Conteúdo, Secções do site and Utilidades.
2. Call `get_design_context` on the component set to read its exact spacing, radius, typography, states and variables.
3. Map Figma variant properties to React props with the same names in camelCase. For example, `Variant`, `Size` and `State` on Button become `variant` and `size` props. `State` is handled by CSS (`:hover`, `:focus-visible`, `:disabled`, `aria-*`), not by a prop.
4. Map Figma variables to tokens by name. For example, `action/primary/bg-hover` becomes `--lp-action-primary-bg-hover`.

Don't eyeball values from screenshots. If a value in Figma isn't bound to a variable, flag it instead of hard-coding it.

The MCP call that lists the file's pages returns a stale list (only "Capa" and "Marca"). Go straight to a page by node id instead:

| Page | Node id | Page | Node id |
|---|---|---|---|
| Cores | `3:4` | Links e navegação secundária | `3:12` |
| Tipografia | `3:5` | Badges e tags | `3:13` |
| Espaçamento, raios e grelhas | `3:6` | Formulários | `3:14` |
| Sombras | `3:7` | Navegação | `3:15` |
| Iconografia | `3:8` | Cards | `3:16` |
| Marca | `3:9` | Feedback | `3:17` |
| Botões | `3:11` | Conteúdo | `3:18` |
| Secções do site | `3:20` | | |

Logos and icons are exported from Figma as separate vector layers and used unmodified: `Logo` and `SubbrandLogo` stack the layers at the offsets Figma defines, and `Icon` uses the SVG as a CSS mask so it takes the parent's colour.

---

## Tokens

### Naming

Every Figma variable becomes a CSS custom property: replace `/` with `-` and add the `--lp-` prefix. So `text/secondary` becomes `--lp-text-secondary`, `space/24` becomes `--lp-space-24` and `radius/md` becomes `--lp-radius-md`. Primitives (`navy/*`, `petrol/*`, `neutral/*`, …) are defined in `_tokens.scss` but components only use the **semantic** tokens (`bg/*`, `text/*`, `border/*`, `icon/*`, `action/*`, `control/*`, `feedback/*`, `subbrand/*`).

### Core colours

| Brand name (manual) | Primitive | Hex | Main semantic uses |
|---|---|---|---|
| Azul Profundo | `navy/900` | `#0D222C` | `text/primary`, `bg/inverse`, `action/primary/bg` |
| Azul Petróleo | `petrol/500` | `#457A8B` | `bg/brand`, `action/accent/bg`, `border/focus`, `control/checked` |
| Azul Petróleo (text) | `petrol/600` | `#3A6676` | `text/brand`, `text/link` |
| Branco | `neutral/0` | `#FFFFFF` | `bg/page`, `text/inverse`, `text/on-brand` |

The manual's recommended proportions are 60% Azul Profundo, 30% white or light neutrals and 10% Azul Petróleo. Petrol is an accent and must never become a large background by default.

### Bootstrap Sass overrides (`_bootstrap-vars.scss`)

| Bootstrap variable | Value | Token |
|---|---|---|
| `$primary` | `#0D222C` | `action/primary/bg` |
| `$secondary` | `#5B6B73` | `neutral/700` |
| `$theme-colors` | add `"accent": #457A8B` | `action/accent/bg` |
| `$info` | `#457A8B` | `feedback/info/border` |
| `$success` / `$warning` / `$danger` | `#2E8B5E` / `#D9951E` / `#D0402F` | `green/500` / `amber/500` / `red/500` |
| `$light` / `$dark` | `#F2F5F6` / `#0D222C` | `neutral/100` / `navy/900` |
| `$body-color` / `$body-bg` | `#0D222C` / `#FFFFFF` | `text/primary` / `bg/page` |
| `$secondary-color` | `#5B6B73` | `text/secondary` |
| `$link-color` / `$link-hover-color` | `#3A6676` / `#0D222C` | `text/link` / `text/link-hover` |
| `$border-color` | `#E4E9EB` | `border/default` |
| `$focus-ring-color` | `#457A8B` | `border/focus` (shape from the Figma `Focus/Ring` effect style) |
| `$border-radius-sm` / `$border-radius` / `$border-radius-lg` / `$border-radius-xl` / `$border-radius-pill` | `4px` / `6px` / `8px` / `16px` / `999px` | `radius/sm` / `md` / `lg` / `xl` / `full` |
| `$box-shadow-sm` / `$box-shadow` / `$box-shadow-lg` | from the Figma `Shadow/SM` / `Shadow/MD` / `Shadow/LG` effect styles | read their exact values from Figma |

For components that need several state colours (Button, Link, form controls), set Bootstrap's component CSS variables (for example `--bs-btn-hover-bg`) from the `action/*` and `control/*` tokens. Don't use `button-variant()` with computed shades, because Bootstrap's auto-darkening doesn't match the Figma hover and pressed values.

### Spacing

Replace Bootstrap's `$spacers` map so that its keys are the Figma pixel values. That way `p-24` means `space/24`, with no translation needed:

```scss
$spacers: (0: 0, 2: 2px, 4: 4px, 8: 8px, 12: 12px, 16: 16px, 20: 20px, 24: 24px,
           32: 32px, 40: 40px, 48: 48px, 64: 64px, 80: 80px, 96: 96px, 128: 128px, 160: 160px);
```

Don't use Bootstrap's default `1`–`5` spacing utilities anywhere, because those keys no longer exist.

### Layout and breakpoints

- `$grid-breakpoints: (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1440px)`. The Figma frames are 390 (mobile), 768 (tablet) and 1440 (desktop).
- Content width (`container/max`) is 1200px. Set `$container-max-widths: (sm: 540px, md: 720px, lg: 960px, xl: 1140px, xxl: 1200px)` and add a `.container-wide` class at 1320px (`container/wide`). Below 992px `.container` runs the full width of the screen (`_base.scss`) and each section adds a 20px page gutter with the `lp-page-gutter` mixin, as the 390 and 768 frames do.
- Control heights are 36, 44 and 52px (`control/height-sm`, `-md`, `-lg`). Buttons, inputs and selects must hit these exactly. Enforce them with `min-height` from the tokens, not with padding guesses. 44px is the default, and it is also the minimum touch target.

### Typography

Load **Google Sans Flex** (variable) and **Google Sans Code** from Google Fonts, or self-host them.

```scss
$font-family-sans-serif: "Google Sans Flex", "Google Sans", Arial, sans-serif; // Arial = manual's approved fallback
$font-family-monospace:  "Google Sans Code", ui-monospace, monospace;
$font-size-base: 1rem;            // Body/Base 16/26
$line-height-base: 1.625;
$headings-font-weight: 500;       // Medium
$enable-rfs: true;                // shrinks large headings on small screens
```

| Text style | Size / line height | Weight | Element or class |
|---|---|---|---|
| Display/XL | 72 / 80 | 500 | `.display-1` |
| Display/L | 56 / 64 | 500 | `.display-2` |
| Heading/H1 | 48 / 56 | 500 | `h1`, `.h1` |
| Heading/H2 | 40 / 48 | 500 | `h2` |
| Heading/H3 | 32 / 40 | 500 | `h3` |
| Heading/H4 | 24 / 32 | 500 | `h4` |
| Heading/H5 | 20 / 28 | 500 | `h5` |
| Heading/H6 | 18 / 26 | **500** (see decision 3 below) | `h6` |
| Body/L · M · Base · S | 20/32 · 18/28 · 16/26 · 14/22 | 400 | `.lead` = Body/L, `.text-body-m`, body, `.small` |
| Body Strong (Base, S) | 16/26 · 14/22 | 500 | `<strong>` within body text |
| Label/L · M · S | 16/24 · 14/20 · 12/16 | 500 | buttons, form labels, nav |
| Caption | 12 / 18 | 400 | `.caption` |
| Eyebrow | 13 / 16 | 500 | `Eyebrow` component |
| Stat/XL · L | 96/96 · 64/68 | 500 | `Stat` component |
| Quote | 28 / 40 | 500 | `TestimonialCard` |
| Code/M · S | 14/22 · 12/18 | 400 · 500 | `code`, `pre` |

Following the manual, use Bold (700) only for occasional emphasis. Never use it for headings or labels.

---

## Brand rules (from the manual, non-negotiable)

**Logo**
- Use only the official SVGs in `src/assets/brand/`, exported from the Figma `Logo` and `Logo / Submarca` components. Name them following the manual, for example `LinkPlas_Logo_Cor_Positivo.svg`, `LinkPlas_Logo_Cor_Negativo.svg`, `LinkPlas_Logo_Mono_Positivo.svg`, `LinkPlas_Logo_Mono_Negativo.svg`, `LinkPlas_Simbolo_Cor.svg` and `[Submarca]_Logo_Cor_Negativo.svg`.
- Never redraw the logo in CSS or JSX. Never recolour, rotate, distort, add effects to or rearrange it.
- Pick the version by background:
  - white or light background: colour positive (`Color=Default`);
  - Azul Profundo background: colour negative (`Color=Inverse`);
  - Azul Petróleo background: **mono white** (`Color=Mono Inverse`), because the petrol P square would disappear;
  - mid-tone backgrounds without enough contrast: not allowed.
- Keep a clear space of at least one module M on every side. M is the width of the symbol's bar, about 22% of the symbol's height.
- The full logo must be at least 140px wide. The tagline version (`Full + Tagline`) is only for large sizes. Below those sizes, such as in favicons and avatars, use the symbol alone at a minimum of 24px.
- The `Logo` component takes an accessible name: `<img alt="LinkPlas">`, or `aria-label` on an inline SVG plus `role="img"`. When it is a link to the home page, the link's name is "LinkPlas — página inicial".

**Sub-brands**
- Each sub-brand is the LP monogram plus the area name plus "Link", with no space, set in Google Sans Medium. Its accent colour only goes on the P square and the word "Link".
- Never use a sub-brand accent in LinkPlas parent-brand communication, and never mix two sub-brands' accents in one composition.
- When a sub-brand and the parent brand appear together, the LinkPlas logo is the secondary one.
- Accent colours come from the `subbrand/<name>/accent` token, light tinted backgrounds from `subbrand/<name>/subtle` and text from `subbrand/<name>/text` (the `/700` shades).
- **Contrast:** never use the `/500` accents as text on white (ThermaLink and TupperLink especially). On Azul Profundo, KeepyLink `/500` is about 2.8:1, which fails WCAG for text. It is fine inside the logo, since logos are exempt, but don't use it for UI text on dark backgrounds.

| Sub-brand | Accent hex | Notes |
|---|---|---|
| ThermaLink | `#77CAE3` | Light — don't use as text on white |
| TupperLink | `#C6D24B` | Light — don't use as text on white |
| PharmaLink | `#AB8FC2` | |
| KeepyLink | `#0066B1` (manual value; see decision 1) | ~2.8:1 on Azul Profundo — logo-only at that pairing |
| FactoryLink | `#C2521A` (Figma; not in the manual, see decision 6) | 4.65:1 on white, 3.5:1 on Azul Profundo — on dark backgrounds use it for large text and UI shapes only. Subtle `#FBE9E0`, text `#7E3511` |

**Modular pattern**
- The bars and squares follow the symbol's grid, with gaps of x ≈ 0.27 M. See the Figma frame "Padrão modular" on the Marca page.
- Use it tone-on-tone, with Azul Petróleo only as an occasional accent square.
- It may be cropped by the edges of its container but must **never sit behind the logo**.
- It is decorative only: hide it from assistive tech with `aria-hidden="true"` and keep it out of the tab order.

---

## Engineering rules

**Mobile-first**
- Write the base styles for 320px, then add `min-width` media queries for larger screens.
- Test every layout at 320, 390, 768, 1200 and 1440px.
- Nothing may scroll sideways at 320px. Wide content such as spec tables and code scrolls inside its own `overflow-x: auto` wrapper.

**Accessibility (WCAG 2.2 AA)**
- Use semantic landmarks: `<header>`, `<nav aria-label="…">`, `<main id="conteudo">`, `<footer>`. Add a "Saltar para o conteúdo" skip link as the first focusable element.
- Use one `h1` per page, and never skip heading levels. The visual style can be decoupled from the level: `<h2 className="h4">`.
- Every interactive element must be reachable with Tab and have a visible `:focus-visible` ring (the `Focus/Ring` style). Never use `outline: none` without a replacement.
- Use native elements before ARIA: `<button>` for actions, `<a href>` for navigation.
  - Accordion: `aria-expanded` and `aria-controls`.
  - Tabs: the `tablist`, `tab` and `tabpanel` roles, with arrow-key navigation.
  - Modal: focus trap, Esc to close, and focus returns to the trigger.
  - Toast: `role="status"`.
  - Alert of tone error: `role="alert"`.
- In forms, every control has a `<label>`. Link helper and error text with `aria-describedby`, set `aria-invalid` on errors, and mark required fields with `required` plus a visible marker.
- Icon-only buttons (`IconButton`) need an `aria-label`. Decorative icons get `aria-hidden="true"`.
- Respect `prefers-reduced-motion`: keep transitions at 200ms or less, and disable them under reduce.
- Contrast is at least 4.5:1 for body text and 3:1 for large text and UI boundaries. Check every new colour pairing.

**Visual restraint**
- Don't add decorative gradients, blurred blobs, glassmorphism, or cards wrapped around content that doesn't need a container.
- Hierarchy comes from typography and whitespace, using the spacing scale only.
- Shadows only come from the Shadow XS–XL styles, and only where Figma uses them.

**Code**
- Keep components small and composable. For example, `FormField` wraps `Input`, `Select` or `Textarea` and supplies the label, helper and error. Don't build monolithic page files.
- Comment the *why* (brand rule, a11y reason), not the *what*.
- Don't leave TODO placeholders in shipped code. If information is missing, ask.

---

## Decisions log

These resolve differences between the manual and the Figma file. Update the Figma file to match.

1. **KeepyLink accent is `#0066B1`**, following the manual. Figma currently has `#0067B1` in `keepylink/500`.
2. **The web font is Google Sans Flex.** It is the variable version of the Google Sans named in the manual. Arial remains the fallback, as the manual allows.
3. **Heading/H6 is Medium (500).** The manual reserves Bold for emphasis. Figma currently uses SemiBold for H6.
4. **There is only a light theme for now.** Figma defines only a Light mode, so don't build dark-mode switching. The client may add a dark mode later (said on 2026-10-02), which is one more reason to keep every colour on a semantic token. `bg/inverse` sections such as Hero, CTA and Footer are part of the light theme.
5. **The logo is never narrower than 140px**, following the manual's digital minimum. Figma draws it at 134px in the desktop header and footer and at 86px in the mobile header. The manual also has no logo without the tagline, so the header uses the full lockup. `Logo` enforces the minimum.
6. **FactoryLink is a fifth sub-brand**, for the technical parts and services the old site showed under Indústria and Serviços. It exists in Figma only (`subbrand/factorylink/*` variables and the `Logo / Submarca` variants with Brand=FactoryLink); the manual should gain it. The sub-brand rules above apply to it unchanged. In the design system the matching `Tag / Submarca` variant is named "Industrial" and should be renamed.
7. **Inner pages use the light header**, confirmed by the client. The "Produtos (Desktop)" frame draws the dark one, but the design system reserves dark for the home hero; the dark version is left for a possible future dark mode. The frame also spaces its sections with 50px, 10px and 112px, which are not on the spacing scale; the build uses 48px, 12px and 96px. The filter chips are 12px apart rather than the frame's 24px, at the client's request.
8. **The home hero video has no pause button**, at the client's request (2026-10-03). This falls short of WCAG 2.2.2 (moving content longer than five seconds needs a way to pause it), which the rest of the site meets. The video still does not start on its own for visitors who ask for reduced motion.
9. **Page addresses are Portuguese and shared by both languages** (client decision, 2026-10-03): `/noticias`, `/produtos`, `/produtos/<slug>`, `/marcas/<marca>`, `/parcerias`, `/parcerias/portfolio`, `/empresa/sobre-nos`, `/empresa/como-trabalhamos`, `/empresa/qualidade`, `/contactos`. English adds `/en` in front. All of them are in `src/content/routes.js`; never write an address as a string anywhere else. The addresses the site used before (`/About`, `/Policy`, `/Contacts`, `/Products…`) redirect permanently: see "Deployment".
10. **Content the client has not supplied yet is shown on the page as a visible placeholder** (client decision, 2026-10-03): `ContentPlaceholder` ("Conteúdo a fornecer: …") for text and `ImagePlaceholder` for photographs. In content modules these are the `missing` and `photo` fields. Remove each one as its content arrives; never fill a gap with invented copy.
11. **Corners are square almost everywhere**, following the design-system update of October 2026: Button, Product Card, Tag / Submarca, Download Card, Certification Badge, Language Switcher, Nav Item, inputs and checkboxes use `radius/none`. Chip stays `radius/full`; icon boxes and the logo-strip boxes are `radius/md`; the map is `radius/lg`; the CTA box and the contact form card are `radius/xl`; the check-list tick is `radius/xs`. This settles the old open question about the button radius.
12. **The home page's sectors change by themselves every four seconds** (client request): `SectorShowcase` advances the active item like a slide show until the visitor hovers, clicks or focuses an item, and from then on only changes when they choose. It does not advance under reduced motion, nor while the section is off screen. The Figma frame draws the four states one under the other; the page shows one at a time. The design's "Ver KeepyLink" link reads "Ver TupperLink", and its "Novo" tag, drawn in ThermaLink's colours, is a brand-tone Badge.
13. **The logo strip reads its logos from a folder**: any image dropped in `src/assets/logos/` appears in the strip and, when its file name matches a partner, on Parcerias (see the LEIA-ME.md there). Until a partner has a logo its name is shown as text. When the row is wider than the page it scrolls slowly and endlessly, pausing on hover and focus; under reduced motion it is a row the visitor scrolls.
14. **The contact form has no file upload** (client decision; the EmailJS plan does not carry attachments). It has the previous fields plus a request type and a required consent checkbox. The consent text does not mention a privacy policy, because the site has none yet; the design's "Li e aceito a política de privacidade" should replace it once that page exists.
15. **Transitions last 200ms**, the page fade included (it was 250ms inside a 500ms wait), and scrolling is instant (`$enable-smooth-scroll: false`): smooth scrolling fought the pinned ZØR animation.

Open, not yet decided:
- **Header call to action.** The Figma "Navegação" page text says "Pedir orçamento" is always visible, but the desktop `Header` component only shows the language switcher, and so do the page frames. The code shows the button on desktop.
- **Form control borders.** Figma draws inputs, selects and checkboxes with `border/strong` (`#CED6D9`), which is 1.47:1 on white, below the 3:1 that WCAG 1.4.11 asks of a control's boundary. The code uses two tokens that Figma does not have yet, `control/border` (`neutral/600`, 4.2:1) and `control/border-hover` (`neutral/800`). Either add them to Figma or accept the lighter border.
- **`text/tertiary` on small text.** It is 4.2:1 on white and 3.8:1 on `bg/subtle`, under the 4.5:1 body text needs. The new components use `text/secondary` where Figma has tertiary (captions, dates, the contact labels). The Product Card's reference line still uses tertiary, as designed.
- **Off-scale gaps in Figma.** Several components use 6px, 10px or 14px gaps that are not bound to a spacing variable (Form Field, Checkbox, Contact Section rows, the 112px between page sections). The code uses the nearest step of the scale (8, 12, 16 and 96px).
- **The ecoCatch picture on the home page.** The Figma frame illustrates "ecoCatch, desenvolvido com a ZØR" with the exploded view of the pharmacy isothermal kit, not with the fish boxes. The home page uses it as designed; Parcerias and Portfólio show a placeholder until ZØR's ecoCatch images arrive.

---

## Implementation status

Every page is built on the design system. The pre-rebrand components and `src/App.css` are gone; nothing styles the site but `src/styles/` and the component partials.

| Page | Address | Page file | Copy |
|---|---|---|---|
| Início | `/` | `pages/Home.jsx` | `content/home.js` |
| Notícias | `/noticias` | `pages/News.jsx` | `content/news.js` |
| Produtos | `/produtos` | `pages/Products.jsx` | `content/products.js` |
| Ficha técnica | `/produtos/<slug>` | `pages/ProductDetail.jsx` | `content/products.js` |
| Marca | `/marcas/tupperlink`, `/pharmalink`, `/factorylink` | `pages/Brand.jsx` | `content/brands.js` |
| Parceiros | `/parcerias` | `pages/Partners.jsx` | `content/partners.js` |
| Portfólio | `/parcerias/portfolio` | `pages/Portfolio.jsx` | `content/partners.js` |
| Sobre nós | `/empresa/sobre-nos` | `pages/About.jsx` | `content/company.js` |
| Como trabalhamos | `/empresa/como-trabalhamos` | `pages/Process.jsx` | `content/company.js` |
| Qualidade | `/empresa/qualidade` | `pages/Quality.jsx` | `content/company.js` |
| Contactos | `/contactos` | `pages/Contact.jsx` | `content/contact.js` |

Only Início and Produtos follow a Figma page frame. The product page, the brand pages, Parcerias, Portfólio, the three Empresa pages, Contactos and **every mobile layout** were built without one, from design-system components only, as a first proposal the client will iterate on. Copy comes from the 2026 institutional presentation, the Figma frames and the previous site; where none of them has it, the page shows a placeholder (decision 10).

How the pages are put together:
- **Every page** is `<PageLayout>`: header, `<main id="conteudo">`, the closing call to action (`closingCta` in `site.js`; Início places it mid-page and Contactos has none) and footer. Inside it, `<PageMeta>` first, then one hero with the page's only `h1` (`HomeHero`, `InteriorHero`, `BrandHero` or `ContactSection`), then `Section` bands that alternate `tone="page"` and `tone="subtle"`.
- **Section helpers** in `content/Section/_section.scss`: `.lp-grid` (`--3`, `--4`) for card grids, `.lp-split` for two columns, `.lp-stack`, `.lp-prose`, `.lp-media`, `.lp-subheading`, `.lp-note`, `.lp-tag-list`.
- **Header**: Notícias, Produtos, Marcas, Parcerias, Empresa, Contactos, from `mainNav` in `site.js`. Produtos has no dropdown. Marcas opens the mega menu and Parcerias and Empresa a dropdown menu (`NavDropdown`, on React-Bootstrap's Dropdown); on mobile they are disclosure groups in the off-canvas menu. The header is always the light one.
- **Início** (Figma `2:1222`): `HomeHero`, sectors (`SectorShowcase`, decision 12), `StatsBand`, `CtaSection`, the four process steps, `LogoStrip` (decision 13).
- **Home hero**: the Figma `Hero` (Type=Home) with `BackgroundVideo` (`public/images/Hero.webm`, muted, looping, decorative) in place of the photograph. The copy panel is Azul Profundo (`bg/inverse`) rather than the Figma `bg/inverse-subtle`, at the client's request. The brand pattern (`ModularPattern`, the client's `public/images/elemento-grafico.svg`) is shown at 1.6 times its size in the margin left of the copy from 1200px up, cropped by the hero's edges and ending 80px before the text; past one drawing's width it repeats to the left. The video does not start on its own under reduced motion and has no pause button (decision 8). It is about 18 MB at 1920 × 1080 and WebM only: it needs a compressed version, an MP4 fallback and a poster image.
- **Marcas**: one template, `pages/Brand.jsx`, for the three brands: hero on the brand's tint (`BrandHero`), Propósito, Vantagens, Características with the brand's products, Origem, Clientes. A brand's tint and logo appear only on its own page.
- **Parcerias**: the ZØR scroll animation of the old home page lives here (`sections/ZorPartnership`, GSAP ScrollTrigger; pinned on desktop, open and static under reduced motion), then ecoCatch, the eight active partners and the Coprax recommendation. Monte Meão is not shown.
- **Notícias**: posts are added by hand to `content/news.js`, newest first, each linking to the original post.
- **Contactos**: `ContactSection`. The form validates in the page's language (`noValidate`), ties every message to its field (`aria-describedby`, `aria-invalid`), moves focus to the first field to fix, and sends through EmailJS after reCAPTCHA v3. It sends `nome`, `empresa`, `contacto`, `email`, `mensagem`, `tipo_pedido` and `recaptcha_token`; the request type is also written at the top of `mensagem`, so it reaches the inbox even while the EmailJS template has no `{{tipo_pedido}}` field. A product page opens it with the product, size and colours already in the message. The opening hours are a placeholder.
- **Buttons that are links** (`<Button as={Link}>`) are announced as links: `Button` removes the `role="button"` React-Bootstrap would add.
- **The page transition** in `App.jsx` keeps the outgoing page mounted for 200ms under the *new* route, so a page must not redirect or read its route params as if it were still current while it fades out (see `pages/ProductDetail.jsx` and `pages/Brand.jsx`).

Produtos, in more detail:
- All product data and copy is in `src/content/products.js` (`pt` and `en`). Add or change a product there; run `npm run sitemap` afterwards.
- Brand filters start with none selected, and none selected shows every product. They live in the address as `?marcas=…` and the selected size as `?medida=…`. Both rewrite the query with `state: { keepScroll: true }`, which `ScrollToTop` honours so the page does not jump.
- Product images are the old site's files in `public/images/`, listed per product in `products.js` (`images`, the first one is the card image), as stand-ins until new photographs arrive; they are large (about 10 MB for the nine card images), so replace them with web-sized files. On the detail page `ProductGallery` shows the 3D model and the photographs with thumbnails. Product copy was carried over from the old site unchanged.
- Specifications are not tables: `SpecList` shows the selected size's measurements and the product's other facts under the size chips (client decision). `SpecTable` is built but no longer used; it is the component to reach for if the client wants a size chart back, for example on Tampa para tubos.
- 3D: `npm run models` converts the STL files in `content-inbox/3d/` to `public/models/*.glb` (see the script for orientation, simplification and materials). `ModelViewer` wraps `@google/model-viewer`, loaded on demand; plain wheel scrolling is left to the page and zoom is on buttons, pinch and the keyboard. Models exist for the TupperLink container, the PharmaLink box and four FactoryLink parts (Intercalar longarina and Abraçadeira on the product, Tampa para veio 16 mm and Anilha intercalar 30015 on that size); the FactoryLink ones keep the colour of their current photos and have no colour choice. The script reads binary and text STL; some of the client's text exports are in metres rather than millimetres, so a part can set `units: 'm'`, and the script warns when a model comes out implausibly small or large. Without a size in the address, a page opens on the first size that has a model.
- Colours: each part of a model (body, lid) is a material named after the part, and `ModelViewer` recolours them live from its `finishes` prop. The choices are per product in `products.js` (`colours`): TupperLink is clear by default or any colour through the browser's colour picker, body and lid separately; PharmaLink has only the colour picker, starting on a dark blue box (`#2B305F`) and a grey lid (`#89898B`), as given by the client (`PHARMALINK_START_COLOURS`). The clear finish and the colour conversion are in `src/content/model-finishes.js`, shared with the conversion script so a model's starting finish matches the page's default. The chosen colours are added to the quote request.

Not built yet: the dark `Header` theme, a ThermaLink or KeepyLink section, the cookie banner, a privacy-policy page, pagination on Notícias, the multi-step quote form with file upload, and the design-system components no page uses yet (Radio, Toggle, File Upload, Tabs, Accordion, Modal, Toast, Tooltip, Stepper, Pagination).

## Roadmap

The navigation is Notícias, Produtos, Marcas, Parcerias, Empresa and Contactos, and every page behind it exists. `docs/site-structure-plan.md` maps the 2026 institutional presentation and the previous site's content onto the pages and says what each section's source is. `docs/conteudo-a-preencher.md` is the worksheet (in Portuguese) the client fills in for the content that is still missing; the files they supply arrive in `content-inbox/`, which is not published.

What comes next, in the order the client asks for it:
- **Iterating on the pages built without a design** (everything except Início and Produtos). Expect layout changes; keep them inside the design system.
- **Replacing placeholders with content**: search the content modules for `missing` and `photo`, and the pages for `ContentPlaceholder` and `ImagePlaceholder`. The worksheet lists the same gaps for the client.
- **Client review of the English copy.** All of it is a draft written here from the Portuguese.
- **Media weight**: the hero video (18 MB, WebM only) and the old product images.
- **3D viewer**: the exact PharmaLink colour references; the 2000 ml TupperLink model, which was not supplied; models for the remaining FactoryLink sizes. STL sources go in `content-inbox/3d/`, never in `public/`.
- **Waiting on client content**: the KeepyLink product, ThermaLink (the name under which ecoCatch will be sold), the cookie banner, a privacy policy, the multi-step quote form.
- **Tidying**: `Header` and `Footer` still sit at the top of `src/components/` and belong in `navigation/` and `sections/`. `public/font/`, `public/LinkplasData/cards.json`, `src/_redirects` and `src/Untitled` are left over from the old site and are no longer used.

---

## Languages

Portuguese (pt-PT) is the default and keeps the unprefixed URLs. English lives under `/en/...`, with the same Portuguese addresses after the prefix (`/en/empresa/sobre-nos`). **English is published** (2026-10-03): the language switcher lists both languages in production.

> **Reminder — nothing is finished until it has English.** Every new page, section or piece of copy goes into a content module with `pt` and `en` entries, in the same change. The English is a draft until the client has reviewed it; say so when the work is handed over.

How it works:
- `src/i18n/languages.js` lists the languages. A language with `published: false` would be served by the dev server only, which is how a new language can be reviewed before launch.
- The language is read from the URL once at load (`src/main.jsx`) and its prefix is the router `basename` (`src/App.jsx`). Routes, `<Link>` and `navigate()` therefore never mention a language. Changing language is a full page load, which is why `LanguageSwitcher` renders plain links.
- Copy comes from content modules through hooks (`useSiteContent()`, `useHomeContent()`, `useProducts()`, `useBrand()`, `usePartnersContent()`, `useCompanyContent()`, `useContactContent()`, `useNews()`), and `src/content/meta.js` holds page titles and descriptions. `useLanguage()` gives the current language code.
- Every page renders `<PageMeta page="…" />` (or `path` and `meta` for pages generated from data: products and brands), which sets the title, description, Open Graph tags, the canonical URL for the current language, and the `hreflang` alternates.
- Reference files in `public/` with root-absolute paths (`/images/…`, `/files/…`). Relative paths such as `../images/…` break under `/en/...`.
- `npm run sitemap` writes `sitemap.xml` and `public/sitemap.xml` from the routes, the product and brand slugs and the published languages, with the `hreflang` alternates. Run it when a page, product, brand or language is added or removed.

Adding another language: add it to `languages.js` with `published: false`, add its entry to every content module, review it on the dev server, then set `published: true`, add it to `availableLanguage` in the JSON-LD in `index.html`, and run `npm run sitemap`.

---

## Product → sub-brand renaming (this rebrand)

The brand manual's product architecture **overrides** the current site's naming. Current site content must be remapped, not just restyled. Confirmed with the client:

- `KeepyFarma` → **PharmaLink** (pharmacy transport boxes). `e-Pharma` stays a product under PharmaLink; confirm final product name during the content pass.
- Take-away tupperware line (currently branded `KeepyLink`) → **TupperLink**.
- `KeepyLink` (the name) is **no longer the take-away line**. It is now a **new product, not yet on the site**: transparent pharmacy-style storage boxes — the same box shape as the PharmaLink medicine boxes, but transparent and without the ventilation holes, repurposed as general storage/organisation containers. This needs new content, photography/renders and copy written from scratch; don't reuse take-away copy for it.
- **Until KeepyLink launches, the site must carry no trace of the name**: no copy, alt text, metadata, class names, file names, logo assets or tokens. The KeepyLink logo files and `subbrand/keepylink/*` tokens are deliberately absent from the repo; export them from Figma (`Logo / Submarca`, node `31:313`) when the product is added.
- **ecoCatch** (reusable fish boxes: ecoFish, ecoShell, ecoTrace) is a partnership with ZØR and is presented as such. Active partners are Platec, Plural, ZØR, Polisport, Empifarma, OCP, Medlog and Coprax. Monte Meão is not an active partnership and is not shown on the site.
- **ThermaLink is the name under which LinkPlas will later sell ecoCatch as its own brand. It is out of scope for now.** Don't build a ThermaLink section or migrate any current content into it — just reserve the name/colour so it isn't reused elsewhere. Confirm with the client before adding any ThermaLink content later.
- The current **Indústria** (Tampa, Intercalar, TampaVeio, Anilha, Abraçadeira) and **Serviços** (UltraSons) categories become the **FactoryLink** sub-brand. This replaces the earlier decision to keep them as parent-brand content.
- Every occurrence of the company name itself must change from `Linkplas` to `LinkPlas` (copy, alt text, meta tags, structured data, emails, file names where practical). The one exception is the registered company name, which stays **`Linkplas, Lda`** wherever the legal entity is named (for example the address card on Contacts).

Resulting product architecture for this rebrand:
- **LinkPlas (parent)** — the company itself; no products of its own
- **FactoryLink** — Tampa para tubos, Intercalar longarina, Tampa para veio, Anilha intercalar, Abraçadeira, Soldadura por ultrassons (the old Indústria and Serviços)
- **PharmaLink** — KeepyFarma (rename), e-Pharma
- **TupperLink** — current take-away products (rename from KeepyLink)
- **KeepyLink** — new storage/organisation boxes (new content)
- **ThermaLink** — reserved, no content yet

## Repo facts that remain true through the rebrand

```bash
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # eslint over src, max-warnings 0
npm run models    # rebuild public/models/*.glb from the STL files in content-inbox/3d/
npm run sitemap   # rewrite sitemap.xml and public/sitemap.xml from the routes, products, brands and languages
```

No test suite is configured.

Env vars (Vite `import.meta.env`, not committed):
- `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` — EmailJS config for the contact form.
- `VITE_RECAPTCHA_SITE_KEY` — Google reCAPTCHA v3 site key.

Deployment: `vercel.json` rewrites all paths to `index.html` for Vercel; `web.config` does the IIS/Windows equivalent (also forces a `www.` redirect). Both also redirect the pre-rebrand addresses permanently (301) to their new pages, and `LEGACY_ROUTES` in `src/content/routes.js` does the same in the browser for any other host. Keep the three in step when an address changes.
