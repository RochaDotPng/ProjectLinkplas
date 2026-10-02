# LinkPlas Web — Project Guide for Claude Code

LinkPlas (Engineered Plastic Solutions) is a parent brand with four sub-brands: ThermaLink, TupperLink, PharmaLink and KeepyLink. This repo is the web implementation of the 2026 rebrand.

**Sources of truth, in order:**
1. `docs/brand/manual-normas-graficas-2026.pdf`: the brand manual. It wins on brand rules (logo, colours, typography intent).
2. Figma design system, file key `T90TiwsFvl1GxlF2AHvqgb` ("LinkPlas — Design System (Web)"). It wins on UI: components, spacing, states and layout.
3. This file. It records the decisions taken where 1 and 2 disagree.

If something isn't covered by any of these, ask before inventing it. Don't add new colours, radii, shadows or font sizes.

**The brand name is spelled `LinkPlas`** (capital P), not `Linkplas` — the current codebase, copy and all metadata use the old spelling throughout and need to be updated as part of the rebrand.

---

## Stack

- React with function components and hooks.
- Bootstrap 5.3 compiled from **Sass source**, never the CDN CSS, so tokens can override its variables. Use React-Bootstrap for interactive primitives (Modal, Dropdown, Accordion, Tabs, Toast, Tooltip), because their keyboard and ARIA handling is already correct.
- UI copy is **European Portuguese**: `<html lang="pt-PT">`. The design system includes a Language Switcher, so keep strings out of components so they can be translated.

## Folder structure (target — being migrated to)

```
src/
  styles/
    _tokens.scss          # CSS custom properties generated from Figma variables (--lp-*)
    _bootstrap-vars.scss  # Bootstrap Sass variable overrides (imported BEFORE bootstrap)
    _base.scss            # html/body, typography classes, focus ring
    main.scss             # entry: tokens → bootstrap-vars → bootstrap → base → components
  components/
    brand/                # Logo, SubbrandLogo, ModularPattern
    ui/                    # Button, IconButton, Badge, Tag, Chip, Link, Alert, ...
    forms/                 # FormField, Input, Select, Textarea, Checkbox, Radio, Toggle, FileUpload
    navigation/            # Header, NavItem, MobileNav, Breadcrumb, Pagination, Tabs, LanguageSwitcher
    cards/                 # ProductCard, SectorCard, FeatureCard, NewsCard, TestimonialCard, Stat
    content/               # SectionHeading, Eyebrow, AccordionItem, ProcessStep, TimelineItem, SpecTable, Stepper
    sections/              # Hero, CTASection, Footer, CookieBanner
    seo/                   # PageMeta (title, description, canonical, hreflang)
  content/                 # copy per language: site.js (header and footer), meta.js (page metadata)
  i18n/                    # language list, URL prefix helpers, useLanguage()
  assets/brand/            # official logo SVGs only
  assets/icons/            # Figma icons, one file per size (name-size.svg)
docs/brand/                # brand manual PDF
```

Each component lives in its own folder, with its `.jsx` file and a `_name.scss` partial when it needs one; the partial is imported from `styles/main.scss`. Components only consume tokens through `var(--lp-*)` or Bootstrap variables, never raw hex values.

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
- Content width (`container/max`) is 1200px. Set `$container-max-widths: (sm: 540px, md: 720px, lg: 960px, xl: 1140px, xxl: 1200px)` and add a `.container-wide` class at 1320px (`container/wide`).
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
4. **There is only a light theme for now.** Figma defines only a Light mode, so don't build dark-mode switching. `bg/inverse` sections such as Hero, CTA and Footer are part of the light theme.
5. **The logo is never narrower than 140px**, following the manual's digital minimum. Figma draws it at 134px in the desktop header and footer and at 86px in the mobile header. The manual also has no logo without the tagline, so the header uses the full lockup. `Logo` enforces the minimum.

Open, not yet decided:
- **Button corner radius.** The Figma `Button` component has square corners, which is what the code uses. The text on the Figma "Espaçamento, raios e grelhas" page says buttons use `radius/md` (6px).
- **Header call to action.** The Figma "Navegação" page text says "Pedir orçamento" is always visible, but the desktop `Header` component only shows the language switcher. The code shows the button on desktop.

---

## Implementation status

Phase 1 (done): tokens and Bootstrap overrides in `src/styles/`, official logo and icon assets, `Logo`, `SubbrandLogo`, `Button`, `IconButton`, `Icon`, `Eyebrow`, `NavItem`, `LanguageSwitcher`, `CertificationBadge`, the rebuilt `Header` and `Footer`, and the company and product renames. Shell copy and links live in `src/content/site.js`.

Language infrastructure (done): see "Languages" below. English is built but **not published**.

Everything else is still the pre-rebrand implementation and is styled by `src/App.css`:
- Its colour variables (`--bs-secondary-gradient`, `--bs-primary-dark`, …) are aliases onto the new tokens until those sections are rebuilt. Don't use them in new code.
- It has a global `a { display: flex; color: white; font-weight: 300 }` and a mobile `.container { padding: 2% }`. New components set these properties explicitly.
- Bootstrap's `btn-secondary` is still used by the old product pages, so the Figma "Secondary" button is the class `btn-lp-secondary` (`<Button variant="secondary">` maps to it).
- `Header` and `Footer` still sit in `src/components/`; they move to `navigation/` and `sections/` with the rest of the kit.
- Several old sections have fixed pixel heights tuned to the previous font, so check them when type or spacing changes.

Not built yet: the dark `Header` theme, mega menu, the remaining Figma components and page sections, a ThermaLink or KeepyLink section, a cookie banner, and English page copy (only the header, footer and page metadata are translated).

## Roadmap

Page work is **on hold**: the client is preparing the page structure designs. Don't rebuild or restructure pages, and don't build page sections (Hero, CTA, stats band, contact section), until those designs arrive.

Phase 2, not tied to page structure:
- **English language.** The infrastructure is done and English is unpublished (see "Languages"). Page copy is translated page by page as each page is refactored, then English is published.
- **3D product viewer.** An interactive viewer for the TupperLink and PharmaLink products, built as a standalone component that the future product pages will place. Agreed scope: rotate, zoom and colour variants. The client's source files are **STL**, which carries geometry only (no colour, material or separate parts), so they are converted to GLB in the repo by a script, with materials and colours applied in code. STL sources stay out of `public/`. The viewer needs a static image fallback, keyboard controls, an accessible name, and must load only when it scrolls into view. Colour variants must be real product colours supplied by the client.
- **Component kit.** The remaining Figma components that don't depend on page structure (forms, cards, badges and tags, feedback, content blocks).

Phase 3, after the page designs arrive: rebuild the five pages on the kit, retire `src/App.css`, the mega menu and dark header, and move `Header`/`Footer` into their folders. **Each page refactor includes its English translation** (see the reminder under "Languages").

Phase 4, waiting on client content: the KeepyLink product, ThermaLink, the cookie banner and the multi-step quote form.

---

## Languages

Portuguese (pt-PT) is the default and keeps the unprefixed URLs. English lives under `/en/...`.

> **Reminder — a page refactor is not finished until it has English.** When a page is rebuilt, move its copy into a content module with `pt` and `en` entries (as `src/content/site.js` does), draft the English, and ask the client to review it. Remind the user of this when a page refactor is being wrapped up. When all five pages are done, publish English with the checklist below.

How it works:
- `src/i18n/languages.js` lists the languages. A language with `published: false` is served by the dev server only, so English can be reviewed at `localhost:5173/en` but is absent from production builds (there, `/en/...` falls through to the Portuguese catch-all and the switcher lists Portuguese only).
- The language is read from the URL once at load (`src/main.jsx`) and its prefix is the router `basename` (`src/App.jsx`). Routes, `<Link>` and `navigate()` therefore never mention a language. Changing language is a full page load, which is why `LanguageSwitcher` renders plain links.
- Copy comes from content modules through hooks: `useSiteContent()` for the header and footer, and `src/content/meta.js` for page titles and descriptions. `useLanguage()` gives the current language code.
- Every page renders `<PageMeta page="…" />`, which sets the title, description, Open Graph tags, the canonical URL for the current language, and `hreflang` alternates when more than one language is served.
- Reference files in `public/` with root-absolute paths (`/images/…`, `/files/…`). Relative paths such as `../images/…` break under `/en/...`.

Publishing English (only after every page has reviewed English copy):
1. Set `published: true` for `en` in `src/i18n/languages.js`.
2. Add the `/en/...` URLs to `sitemap.xml` and `public/sitemap.xml`.
3. Add English to `availableLanguage` in the JSON-LD in `index.html`.
4. Remove the static canonical and `og:url` tags from `index.html`: they point every page at the home page and conflict with the per-page ones.

The English header, footer and metadata copy are drafts awaiting client review.

---

## Product → sub-brand renaming (this rebrand)

The brand manual's product architecture **overrides** the current site's naming. Current site content must be remapped, not just restyled. Confirmed with the client:

- `KeepyFarma` → **PharmaLink** (pharmacy transport boxes). `e-Pharma` stays a product under PharmaLink; confirm final product name during the content pass.
- Take-away tupperware line (currently branded `KeepyLink`) → **TupperLink**.
- `KeepyLink` (the name) is **no longer the take-away line**. It is now a **new product, not yet on the site**: transparent pharmacy-style storage boxes — the same box shape as the PharmaLink medicine boxes, but transparent and without the ventilation holes, repurposed as general storage/organisation containers. This needs new content, photography/renders and copy written from scratch; don't reuse take-away copy for it.
- **Until KeepyLink launches, the site must carry no trace of the name**: no copy, alt text, metadata, class names, file names, logo assets or tokens. The KeepyLink logo files and `subbrand/keepylink/*` tokens are deliberately absent from the repo; export them from Figma (`Logo / Submarca`, node `31:313`) when the product is added.
- **ThermaLink is a future product line, out of scope for this pass.** Don't build a ThermaLink section or migrate any current content into it — just reserve the name/colour so it isn't reused elsewhere. Confirm with the client before adding any ThermaLink content later.
- The current **Indústria** (Tampa, Intercalar, TampaVeio, Anilha, Abraçadeira) and **Serviços** (UltraSons) categories are **not** being folded into any sub-brand right now — they stay as parent-brand (LinkPlas) content, styled with the parent palette (Azul Profundo / Azul Petróleo), not a sub-brand accent.
- Every occurrence of the company name itself must change from `Linkplas` to `LinkPlas` (copy, alt text, meta tags, structured data, emails, file names where practical). The one exception is the registered company name, which stays **`Linkplas, Lda`** wherever the legal entity is named (for example the address card on Contacts).

Resulting product architecture for this rebrand:
- **LinkPlas (parent)** — Indústria, Serviços
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
```

No test suite is configured.

Env vars (Vite `import.meta.env`, not committed):
- `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` — EmailJS config for the contact form.
- `VITE_RECAPTCHA_SITE_KEY` — Google reCAPTCHA v3 site key.

Deployment: `vercel.json` rewrites all paths to `index.html` for Vercel; `web.config` does the IIS/Windows equivalent (also forces a `www.` redirect). Keep both in sync if SPA routing behavior changes.
