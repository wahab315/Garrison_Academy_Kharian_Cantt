# GAK Campus — Refactor Plan

**Audience:** the AI agent performing the refactor.
**Repo:** `GAK_website-main` · Next.js 15.5 (App Router) · React 19 · TypeScript strict
**Baseline commit:** `18403ea` · branch `master` · `npx tsc --noEmit` passes clean.

Read this whole document before touching a file. Execute phases **in order**. Do not skip ahead.
Every phase ends with a build gate and a git commit. If a gate fails, fix it before continuing.

---

## 0. What the codebase actually looks like (verified audit)

| Fact | Value |
| --- | --- |
| Routes | 18 (17 static pages + `/sections/[slug]`) |
| Components | 10, all flat in `/components` |
| `globals.css` | 1807 lines, single file |
| Unique CSS classes | 124 |
| Inline `style={{…}}` | **86 occurrences** across 19 files |
| Tailwind utility classes in TSX | **0** |
| `@apply` in CSS | **0** |
| Dead nav links (`href: "#"`) | 5 |
| Working forms | 0 (no `name` attrs, no state, no validation) |
| `sass` / `zod` / `react-hook-form` | not installed |

### The five real problems

1. **Tailwind is installed, configured, and completely unused.** `tailwind.config.ts` defines a full colour/font theme that nothing consumes. Its only actual effect is **Preflight** (the reset injected by `@tailwind base`).
2. **86 inline styles** carry layout and colour decisions that belong in stylesheets. This is the single biggest DRY violation.
3. **Class names are unreadable abbreviations**: `g2`, `ct`, `ci`, `cv`, `ov`, `ph`, `nm`, `mi`, `s`, `n`, `l`, `q`, `a`. There is no BEM pattern present to "preserve".
4. **Content is hardcoded in JSX.** `lib/data.ts` holds *some* content (nav, sections, FAQs, chatbot), but page copy, headings, CTA labels and card lists live inline in `page.tsx` files.
5. **Forms are decorative.** `ToastButton` fires a toast and discards every keystroke. There is no `name`, no state, no schema, no submission.

---

## 1. Contradictions in the source prompts — and how they are resolved

The two prompts you were given contradict each other and the code. These are the binding rulings. **Where this document disagrees with the original prompts, this document wins.**

| # | Conflict | Ruling |
| --- | --- | --- |
| C1 | SCSS prompt: *"Do NOT restructure TSX components."* Architecture prompt: *"Rebuild every page onto Typography/Button/Box."* | **Restructure.** The SCSS prompt was written for a styles-only migration of a different project. Here the component tree is being rebuilt, so SCSS mirrors the **new** tree. |
| C2 | SCSS prompt: *"Preserve all existing class names… keep the BEM-like pattern."* Reality: names are `g2`, `cv`, `ph` — no BEM exists. | **Rename to BEM** as each component is rebuilt (Phases 5–8). Never rename a class in a phase that isn't also rebuilding that component. |
| C3 | SCSS prompt: *"Do not import SCSS inside individual .tsx files."* | **Upheld.** `src/styles/main.scss` is imported exactly once, in the root layout. |
| C4 | SCSS prompt implies plain-CSS project. Reality: Tailwind is present. | **Remove Tailwind** (Phase 1) — but only after replacing Preflight. See the trap below. |
| C5 | Architecture prompt: page-local `content/` + `types/` folders. Your instruction: a single `src/data/` folder. | **`src/data/`** holds routes, types and content, sub-foldered per page. Your instruction wins. |
| C6 | Prompt spells the tokens folder `globels/`. | Use the correct spelling **`globals/`**. If you want byte-parity with the Gate Guide project, rename it — nothing else depends on the spelling. |

### ⚠️ C4, the Preflight trap — read this twice

`@tailwind base` injects Preflight, which sets:

```css
h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit; }
ul,ol { list-style: none; margin: 0; padding: 0; }
table { border-collapse: collapse; }
button,input,select,textarea { font: inherit; }
```

The existing CSS **silently depends on this.** Verified in the current tree:

- **13 bare `<h3>`, 4 bare `<h4>`, 1 bare `<h5>`** carry no size class. They render at body size today *only because Preflight neutralises them.* Delete Preflight naively and they jump to browser defaults (`h3` → 1.17em bold, `h4` → 1em bold).
- `app/about/page.tsx` has a `<ul>` inside `.card`. Nothing in `globals.css` resets it — Preflight does. Remove Preflight and bullets and indentation appear.
- `.prose ul`, `footer ul`, `.unicard .bd li` *do* set `list-style: none` explicitly, so those are safe. `.card ul` is not.

**Therefore:** in Phase 1, before deleting Tailwind, port the four Preflight rule groups above into `utils/_base.scss`. Do not skip this. Do not assume the existing `* { margin: 0; padding: 0 }` reset covers it — it does not cover `font-size: inherit` on headings.

### Decisions you already made

- **Forms** → real `zod` + `react-hook-form` with inline errors, submitted via a **Next.js Server Action that sends email**. Requires an SMTP provider (Resend recommended) and `RESEND_API_KEY`. Phase 9.
- **Routes** → expand `SECTIONS` to 7 real slugs, kill all 5 dead links, rename `/links` → `/external-links` with a permanent redirect. Phase 2.

---

## 2. Target architecture

```
public/
├── common/                  # shared across pages
│   ├── logo.png
│   ├── favicons/
│   └── icons/
├── home/
│   └── hero/{hero-1,hero-2,hero-3}.jpg
├── about/
└── …one folder per page, created only when it has assets

src/
├── app/
│   ├── layout.tsx           # root: fonts, <html>, imports main.scss ONCE
│   ├── not-found.tsx        # global 404
│   ├── icon.png             # ⚠ must stay in app/ (Next file convention)
│   ├── apple-icon.png       # ⚠ must stay in app/
│   └── (business)/
│       ├── layout.tsx       # Header + <main> + Footer
│       ├── page.tsx         # /
│       ├── about/page.tsx
│       ├── admissions/page.tsx
│       ├── … all business pages …
│       └── sections/[slug]/page.tsx
│
├── components/
│   ├── common/              # UI primitives — zero business knowledge
│   │   ├── box.tsx          # polymorphic `as`
│   │   ├── container.tsx    # max-width wrapper (replaces .wrap)
│   │   ├── typography.tsx   # polymorphic `as` + classStyle
│   │   ├── button.tsx       # href → <Link>, else <button>
│   │   ├── input.tsx        # forwardRef, label + error
│   │   ├── textarea.tsx     # forwardRef, label + error
│   │   ├── select.tsx       # forwardRef, native <select>
│   │   ├── checkbox.tsx     # forwardRef
│   │   └── grid.tsx         # version prop → grid__version--{n}
│   │
│   ├── features/            # composite, stateful, reusable
│   │   ├── header/
│   │   │   ├── index.tsx
│   │   │   ├── utility-strip.tsx
│   │   │   ├── mega-menu.tsx
│   │   │   └── mobile-drawer.tsx
│   │   ├── footer.tsx
│   │   ├── page-head.tsx
│   │   ├── dropdown.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   ├── toast.tsx
│   │   ├── chatbot.tsx
│   │   └── notification-ticker.tsx
│   │
│   └── ui/                  # page-specific sections
│       ├── home/
│       │   ├── home.hero.tsx
│       │   ├── home.quick-access.tsx
│       │   ├── home.principal-message.tsx
│       │   ├── home.explore.tsx
│       │   └── home.cta-band.tsx
│       ├── about/
│       └── …one folder per page
│
├── data/
│   ├── routes.ts            # single source of truth for every URL
│   ├── navigation.ts        # was: NAV in lib/data.ts
│   ├── sections.ts          # was: SECTIONS
│   ├── faqs.ts              # was: FAQ_DATA
│   ├── chatbot.ts           # was: CHAT_QA
│   ├── assets.ts            # public/ paths as constants — no magic strings
│   ├── types/
│   │   ├── type.business-header-section.ts
│   │   ├── type.business-card-grid.ts
│   │   └── …shared section prop types
│   └── content/
│       ├── home/
│       │   ├── content.home-hero.ts
│       │   ├── content.home-quick-access.ts
│       │   └── …
│       └── …one folder per page
│
└── styles/                  # the "style folder"
    ├── main.scss            # @forward only
    ├── globals/
    │   ├── _index.scss
    │   ├── _color.scss
    │   ├── _breakPoint.scss
    │   ├── _typography.scss # font-family / size tokens
    │   └── _layout.scss     # radius, shadow, max-width tokens
    ├── utils/
    │   ├── _index.scss
    │   ├── _base.scss       # reset + PORTED PREFLIGHT
    │   ├── _utils.scss
    │   ├── _typography.scss
    │   └── _animation.scss  # fade, kbz, marq, bob
    ├── components/
    │   ├── _index.scss
    │   ├── common/          # mirrors components/common/
    │   ├── features/        # mirrors components/features/
    │   └── ui/
    │       └── home/        # mirrors components/ui/home/
    └── modules/
        ├── _index.scss
        └── _notFound.scss
```

**Rule:** `src/styles/components/**` mirrors `src/components/**` exactly. Never create an SCSS folder without a matching TSX folder.

### Path aliases (`tsconfig.json`)

```jsonc
"paths": {
  "@/*":          ["./src/*"],
  "@/common/*":   ["./src/components/common/*"],
  "@/features/*": ["./src/components/features/*"],
  "@/ui/*":       ["./src/components/ui/*"],
  "@/data/*":     ["./src/data/*"],
  "@/styles/*":   ["./src/styles/*"]
}
```

---

## 3. Conventions

### File naming

| Kind | Pattern | Example |
| --- | --- | --- |
| UI primitive | `{name}.tsx` | `common/button.tsx` |
| Feature | `{name}.tsx` | `features/dropdown.tsx` |
| Page section | `{page}.{section}.tsx` | `ui/home/home.hero.tsx` |
| Content | `content.{page}-{section}.ts` | `content.home-hero.ts` |
| Type | `type.{name}.ts` | `type.business-header-section.ts` |
| SCSS partial | `_{camelCase}.scss` | `_homeHero.scss` |

### SCSS import chain

- `_index.scss` files contain **only** `@forward`. Never a style rule.
- Partials use `@use` for tokens. `@forward` paths drop the underscore and extension.
- Verified: loading the same module under two namespaces (`@use "…" as color; @use "…" as breakPoint;`) **is legal** in Dart Sass. It compiles. But prefer one namespace:

```scss
@use "../../globals" as g;

.home-hero {
  color: g.$green-900;
  @include g.respond(tab-port) { font-size: 1.4rem; }
}
```

- **Every new partial must be registered in its parent `_index.scss`.** An unregistered partial produces no CSS and no error. This is the single most common failure mode.

### Component usage — strict

| Never write | Always write |
| --- | --- |
| `<h1>` … `<h6>`, `<p>`, `<span>`, `<label>` | `<Typography as="…">` |
| `<button>`, `<a>`, `<Link>` for a CTA | `<Button>` |
| `<input>`, `<textarea>`, `<select>` | `<Input>`, `<Textarea>`, `<Select>` |
| `<div className="wrap">` | `<Container>` |
| `<div className="grid g4">` | `<Grid version="4">` |
| `<div>` as a semantic section | `<Box as="section">` |
| `style={{ … }}` | an SCSS class |
| A literal string in a section component | a prop, sourced from `content.*` |
| `href="/admissions"` | `Routes.admissions` |

**One exception to the no-inline-style rule:** dynamic values that cannot be known at build time (e.g. `style={{ backgroundImage: url(${src}) }}` in the hero slider). Everything else moves to SCSS.

---

## 4. Design tokens

Take colours from the existing `:root` in `globals.css` — they already match the crest. Do not invent new ones.

```scss
// src/styles/globals/_color.scss
$green-900: #15301a;  $green-800: #1c4326;  $green-700: #235230;
$green-600: #2f6b3d;  $green-500: #3d7d4b;  $green-tint: #e8efe6;
$gold-600:  #a5732f;  $gold-500:  #c08a3e;  $gold-400:  #d4a24c;  $gold-300: #e6c684;
$flame:     #e8633a;  $flame-2:   #f7a13c;
$cream:     #f7f3e9;  $paper:     #fffdf7;  $paper-2:   #f3ede0;
$ink:       #1b211b;  $ink-soft:  #4a534a;
$line:      #e2dac8;  $line-strong: #cdbf9f;
```

Keep the CSS custom properties (`--green-900` etc.) emitted from `_base.scss` as well — 86 inline styles reference them, and they are removed gradually across Phases 5–8. Delete the custom properties only in Phase 10, once the last `var(--…)` reference is gone.

### Breakpoints

`globals.css` uses **ten** distinct max-widths: `520, 560, 620, 680, 840, 860, 880, 920, 980, 1080`. Preserve all ten for pixel parity, expressed as a map + loop (this satisfies the "use loops" requirement):

```scss
// src/styles/globals/_breakPoint.scss
$breakpoints: (
  mobile-sm: 32.5em,  // 520
  mobile:    35em,    // 560
  mobile-lg: 38.75em, // 620
  phablet:   42.5em,  // 680
  tab-sm:    52.5em,  // 840
  tab-port:  53.75em, // 860
  tab:       55em,    // 880
  tab-mid:   57.5em,  // 920
  tab-land:  61.25em, // 980
  desktop:   67.5em   // 1080
);

@mixin respond($key) {
  $size: map.get($breakpoints, $key);
  @if $size == null {
    @error "Unknown breakpoint `#{$key}`. Valid: #{map.keys($breakpoints)}";
  }
  @media only screen and (max-width: $size) { @content; }
}
```

Consolidating ten breakpoints down to four is a **separate, later task**. Do not attempt it during this refactor — it changes layout at the edges and will be blamed on the migration.

---

## 5. Phases

Each phase: **Goal → Steps → Gate → Commit.**

The **Gate** for every phase is:

```bash
npx tsc --noEmit && npm run lint && npm run build
```

plus a visual check of the affected pages via `npm run dev`. A phase is not done until the gate is green.

---

### Phase 0 — Baseline & safety net

**Goal:** be able to prove nothing broke.

1. `git checkout -b refactor/architecture`
2. Run `npm run build`. Record that it succeeds.
3. Start `npm run dev`. Screenshot **all 18 routes** at 1440px and 390px widths into `.refactor-baseline/` (gitignored). This is the only ground truth for "same visual output".
4. Add `.refactor-baseline/` to `.gitignore`.

**Gate:** build passes; 36 screenshots exist.
**Commit:** `chore(refactor): baseline screenshots and refactor branch`

---

### Phase 1 — Tooling: Sass in, Tailwind out

**Goal:** correct dependencies, without a single visual change.

1. `npm i -D sass` · `npm i zod react-hook-form @hookform/resolvers`
2. **Port Preflight first.** Create `src/styles/utils/_base.scss` containing the current `globals.css` reset **plus** the four Preflight groups from §1 (headings `font-size`/`font-weight` inherit; `ul,ol` list reset; `table` border-collapse; form controls `font: inherit`).
3. Remove `@tailwind base; @tailwind components; @tailwind utilities;` from `app/globals.css`.
4. Delete `tailwind.config.ts`. `npm uninstall tailwindcss`. **Keep** `postcss` + `autoprefixer`; reduce `postcss.config.mjs` to autoprefixer only.
5. Tighten `.eslintrc.json` — the junior dev disabled two rules to hide problems:
   - Re-enable `@next/next/no-img-element` (Phase 6 replaces the two `<img>` in Header with `next/image`).
   - Re-enable `react/no-unescaped-entities`.
   - Add `"react-hooks/exhaustive-deps": "warn"`.
   Leave them **off** for now if they block the build; turn them on in Phase 10 once the offending code is gone. Record which you deferred.
6. Next 15 may emit a Sass `legacy-js-api` deprecation warning. If it is noisy, add to `next.config.mjs`:
   ```js
   sassOptions: { silenceDeprecations: ["legacy-js-api"] }
   ```

**Gate:** build passes. **Diff the 18 screenshots against Phase 0.** Any pixel difference means the Preflight port is incomplete — fix it before moving on. This is the highest-risk phase in the plan.
**Commit:** `build(refactor): replace tailwind with sass, port preflight into base reset`

---

### Phase 2 — `src/` restructure, route group, routing fixes

**Goal:** final folder skeleton and final URLs. Nothing else.

1. `git mv app src/app` · `git mv components src/components` · `git mv lib src/data`
2. Update `tsconfig.json` `paths` to the block in §2. Update `include` if needed.
3. Create the `(business)` route group. Move every page except `not-found.tsx` and `layout.tsx` into `src/app/(business)/`. Route groups do **not** change URLs.
4. `src/app/layout.tsx` (root) keeps `<html>`, fonts, `metadata`, and the single `main.scss` import.
   `src/app/(business)/layout.tsx` gets `<ToastProvider><Header /><main id="main">{children}</main><Footer /></ToastProvider>`.
5. **Leave `icon.png` and `apple-icon.png` in `src/app/`.** They are Next.js file conventions and stop working from `public/`. If you want them under `public/common/favicons/` regardless, you must declare them explicitly:
   ```ts
   export const metadata: Metadata = {
     icons: { icon: "/common/favicons/icon.png",
              apple: "/common/favicons/apple-icon.png" }
   };
   ```
   Recommendation: keep the convention. Put *other* brand assets in `public/common/`.
6. Create `src/data/routes.ts` as the single source of truth:
   ```ts
   export const Routes = {
     home: "/",
     about: "/about",
     admissions: "/admissions",
     externalLinks: "/external-links",
     quickLinks: "/quick-links",
     section: (slug: SectionKey) => `/sections/${slug}`,
     // …all 18
   } as const;
   ```
7. **Fix routing** (your decision):
   - Expand `SECTIONS` to 7 slugs: `pre`, `junior`, `middle-girls`, `middle-boys`, `senior-girls`, `senior-boys`, `apsis`. Fill `SectionData` for each. `generateStaticParams` picks them up automatically.
   - Replace all 5 `href: "#"` in `navigation.ts` with real `Routes.section(…)` calls.
   - Rename `/links` → `/external-links`. Add to `next.config.mjs`:
     ```js
     async redirects() {
       return [{ source: "/links", destination: "/external-links", permanent: true }];
     }
     ```
8. Add `metadata` to the two pages missing it: `(business)/page.tsx` and `sections/[slug]/page.tsx` (the latter already has `generateMetadata` — verify it handles the 3 new slugs).
9. Improve `not-found.tsx`: it currently reuses `PageHead`. Give it a dedicated `modules/_notFound.scss` treatment with a large "404", the message, and a Back-to-Home CTA.

**Gate:** build passes. Every route in §0 resolves. `/links` 308-redirects. All 7 section slugs render. Zero `href="#"` remain.
**Commit:** `refactor(structure): move to src/, add (business) route group, fix routes and 404`

---

### Phase 3 — Assets

**Goal:** `public/` organised by page; no magic strings in code.

1. Create `public/common/` → move `logo.png` there. Create `public/common/icons/` for any shared icon files.
2. Create `public/home/hero/` → move `hero1.jpg`, `hero2.jpg`, `hero3.jpg`, renaming to `hero-1.jpg` etc.
3. Create a page folder only when that page has assets. Do not create empty folders.
4. Create `src/data/assets.ts`:
   ```ts
   export const Assets = {
     logo: "/common/logo.png",
     home: { hero: ["/home/hero/hero-1.jpg", "/home/hero/hero-2.jpg", "/home/hero/hero-3.jpg"] },
   } as const;
   ```
5. Update `Hero.tsx` and `Header.tsx` to read from `Assets`. No literal `/logo.png` anywhere.
6. Note: the 40+ emoji "icons" in `data.ts` (`"💬"`, `"🏛️"`, `"✎"`) are strings, not assets. Leave them for now; migrating them to real SVGs in `public/common/icons/` is a **separate design task**, out of scope.

**Gate:** build passes; no 404s in the Network tab on `/` or any page with images.
**Commit:** `refactor(assets): reorganise public/ into common/ and per-page folders`

---

### Phase 4 — SCSS foundation

**Goal:** `globals.css` fully replaced by the SCSS tree. **Class names unchanged.** Zero visual change.

1. Scaffold the full `src/styles/` tree from §2, with every `_index.scss` present (may be empty initially).
2. `globals/_color.scss` — tokens from §4.
3. `globals/_breakPoint.scss` — map + `respond()` mixin from §4. Remember `@use "sass:map";`.
4. `globals/_typography.scss`, `globals/_layout.scss` — font stacks, radii (`--r: 14px`, `--r-sm: 9px`), shadows, `--maxw`.
5. `utils/_base.scss` — reset + ported Preflight (from Phase 1) + `:root` custom properties + `html`/`body`/`a`/`img`/`button` rules.
6. `utils/_animation.scss` — the four `@keyframes`: `fade`, `kbz`, `marq`, `bob`, plus the `prefers-reduced-motion` block.
7. `utils/_typography.scss` — `.eyebrow`, `.h-xl`, `.h-lg`, `.h-md`, `p.lead`. These become Typography `classStyle` targets in Phase 5.
8. `utils/_utils.scss` — genuine single-purpose utilities only (`.center`, `.mt`, `.mt2`, `.tight`).
9. Move the remaining ~1500 lines of component CSS into `styles/components/**`, mirroring the **current** flat component names for now (`_header.scss`, `_footer.scss`, `_hero.scss`, `_card.scss`, …). They get re-homed and renamed as each component is rebuilt in Phases 5–8.
10. Swap the import in the root layout: `import "@/styles/main.scss";` Delete `app/globals.css`.

**Gate:** build passes. **Diff screenshots against Phase 0 again** — this phase must be visually identical. Search the repo for `.css` imports: only `main.scss` should remain.
**Commit:** `refactor(styles): migrate globals.css to modular scss architecture`

---

### Phase 5 — UI primitives (`components/common/`)

**Goal:** the design system exists and is styled. Pages do not use it yet.

Build in this order (later ones depend on earlier ones):

1. **`box.tsx`** — polymorphic `as`, forwards `className` and rest props.
2. **`container.tsx`** — wraps `Box`, applies `.container` (replaces `.wrap`).
3. **`typography.tsx`** — polymorphic `as: h1…h6 | p | span | label`; `classStyle` → `heading__{x}` / `text__{x}`; `forwardRef` for `label`.
   Map the existing classes: `.h-xl` → `heading__main`, `.h-lg` → `heading__primary`, `.h-md` → `heading__secondary`, `.lead` → `text__large`, `.eyebrow` → `text__eyebrow`.
4. **`button.tsx`** — discriminated props. `href` present → `next/link`; absent → `<button type="button">`. `classStyle` → `btn__{x}`. Map: `.btn-primary` → `btn__primary`, `.btn-ghost` → `btn__ghost`, `.btn-submit` → `btn__submit`.
5. **`grid.tsx`** — `version: "2"|"3"|"4"` → `grid__version--{n}`. Replaces `.grid.g2/.g3/.g4`.
6. **`input.tsx`**, **`textarea.tsx`**, **`select.tsx`**, **`checkbox.tsx`** — all `forwardRef` (react-hook-form `register()` needs it). Each takes `label`, `name`, `error?`, `placeholder?`. On error: `aria-invalid`, `aria-describedby`, and an `input--invalid` class. Render the error via `<Typography as="span" classStyle="error">`.

For each: create `src/styles/components/common/_{name}.scss` and register it in `common/_index.scss`. Use BEM (`block__element--modifier`).

**Gate:** build passes. Primitives are unused so far — that is expected and correct. Do not wire them into pages yet.
**Commit:** `feat(ui): add typography, button, box, container, grid and form primitives`

---

### Phase 6 — Feature components (`components/features/`)

**Goal:** shared stateful components rebuilt on the primitives.

1. **`header/`** — split the 242-line `Header.tsx` into `index.tsx`, `utility-strip.tsx`, `mega-menu.tsx`, `mobile-drawer.tsx`. Fix while you are there:
   - Replace `<img src="/logo.png">` with `next/image` (re-enables the ESLint rule).
   - Remove the 10 inline styles.
   - `window.innerWidth > 1080` inside event handlers is fragile. Replace with a `useMediaQuery` hook.
   - The mega-menu `<button>` needs `aria-expanded` and `aria-haspopup`.
2. **`footer.tsx`**, **`page-head.tsx`** (used by 17 pages — highest leverage), **`accordion.tsx`**, **`tabs.tsx`**, **`toast.tsx`**, **`chatbot.tsx`**, **`notification-ticker.tsx`**.
3. **`dropdown.tsx`** — new. Controlled: `value`, `options`, `onValueChange`. `role="listbox"`, `aria-expanded`, click-outside, Escape/Enter/Space. Used by the forms in Phase 9.
4. **Fix `Toast.tsx`:** `ToastButton` renders `role="button"` on an actual `<button>` (redundant/invalid) and spreads `Record<string, unknown>`. Rebuild it on `<Button>` with proper typing.
5. **`accordion.tsx`** needs `aria-expanded` + `aria-controls`; **`tabs.tsx`** needs `role="tablist"` / `role="tab"` / `role="tabpanel"`.

Each gets `src/styles/components/features/_{name}.scss`, registered in `features/_index.scss`.

**Gate:** build passes. Header/footer/nav behave identically at 1440px, 1080px, 860px, 390px. Mega-menu opens on hover (desktop) and click (mobile). Screenshot-diff every page — the header and footer appear on all 18.
**Commit:** `refactor(features): rebuild header, footer, page-head and shared widgets on ui primitives`

---

### Phase 7 — Types and content layer

**Goal:** every string a page renders lives in `src/data/`.

1. Split `src/data/data.ts` into `navigation.ts`, `sections.ts`, `faqs.ts`, `chatbot.ts`. Delete the original.
2. Write the shared section types in `src/data/types/`. Start with the ones that recur across pages:
   ```ts
   // type.business-lead-copy.ts
   export type BusinessLeadCopy = {
     eyebrow: string;
     heading: string;
     description?: string;
   };

   // type.business-header-section.ts
   export type BusinessHeaderSectionProps = BusinessLeadCopy & {
     crumb: { label: string; href?: string }[];
   };

   // type.business-card-grid.ts
   export type BusinessCardGridProps = BusinessLeadCopy & {
     cards: { icon: string; title: string; desc: string; href?: string; cta?: string }[];
   };
   ```
3. Every content export ends in `satisfies TypeName` — never `: TypeName`. (`satisfies` preserves literal types; the annotation widens them.)
4. All `href` values come from `Routes`. No string literal paths in content.
5. Content files hold **static data only**. No functions, no `fetch`, no business logic.

**Gate:** `npx tsc --noEmit` passes. Nothing consumes the content yet.
**Commit:** `feat(data): add shared section types and split legacy data.ts`

---

### Phase 8 — Page migration loop ⭐

**Goal:** every `page.tsx` becomes a thin orchestrator.

This is the bulk of the work. **One page per commit.** Do not batch. Order — easiest first, to establish the pattern:

`home` → `contact` → `faqs` → `quick-links` → `downloads` → `hr` → `alumni` → `external-links` → `organogram` → `scholarships` → `activities` → `messages` → `about` → `uniform` (275 lines, hardest) → `chatbot` → `sections/[slug]` → `admissions` + `feedback` (**defer the forms to Phase 9**)

For each page, in strict order:

1. **Audit** — list its visual sections. Note every hardcoded string, link, image, and inline style.
2. **Types** — reuse a shared type from `data/types/` if the shape matches. Only create a page-specific type when it genuinely does not.
3. **Content** — extract every string into `data/content/{page}/content.{page}-{section}.ts`.
4. **Sections** — build `components/ui/{page}/{page}.{section}.tsx`. Each takes typed props. It may use **only** `@/common`, `@/features`, and other `@/ui` components. Zero literal copy. Map over arrays — never hardcode a list.
   **If a section already exists on another page, reuse it.** Do not create `HomeCardGrid` and `AboutCardGrid`; create `BusinessCardGrids` and pass different content. This is the DRY payoff.
5. **SCSS** — `src/styles/components/ui/{page}/_{section}.scss`, registered in `ui/{page}/_index.scss`, and that folder registered in `ui/_index.scss`. Delete the corresponding rules from the Phase-4 holding files. Every inline style becomes a class here.
6. **Slim the page** to composition only:
   ```tsx
   export const metadata = { title: "…" };

   export default function HomePage() {
     return (
       <>
         <HomeHero {...homeHeroContent} />
         <HomeQuickAccess {...homeQuickAccessContent} />
         <HomePrincipalMessage {...homePrincipalMessageContent} />
         <HomeExplore {...homeExploreContent} />
         <HomeCtaBand {...homeCtaBandContent} />
       </>
     );
   }
   ```

**Per-page gate:** build passes; `grep` the page for `style={{`, `<h`, `<p>`, `<button`, `href="/` → all must return nothing (except the documented dynamic-style exception). Screenshot-diff that page against Phase 0.

**Commit per page:** `refactor(home): extract content, build ui sections, slim page to orchestrator`

**Report after each page** (as the architecture prompt requires): the type files, the content files, the section components, the final page file, and a list of what was removed or consolidated.

---

### Phase 9 — Forms

**Goal:** Admissions and Feedback actually work.

1. `src/data/validation/admission-schema.ts` and `feedback-schema.ts` — zod, with **user-facing messages**, not defaults:
   ```ts
   export const admissionSchema = z.object({
     studentName: z.string().min(3, "Please enter the student's full name"),
     classApplying: z.enum(CLASS_OPTIONS, { message: "Select a class" }),
     guardianName: z.string().min(3, "Please enter the guardian's name"),
     contact: z.string().regex(/^03\d{2}-?\d{7}$/, "Use the format 03XX-XXXXXXX"),
     email: z.string().email("Enter a valid email").optional().or(z.literal("")),
     dob: z.string().optional(),
     stream: z.enum(["APSACS (FBISE)", "APSIS (Cambridge)"]),
   });
   export type AdmissionInput = z.infer<typeof admissionSchema>;
   ```
2. Form components are `"use client"`, live in `components/ui/{page}/`, and use `useForm({ resolver: zodResolver(schema) })`. Pass `error={errors.field?.message}` into `<Input>` / `<Select>` / `<Textarea>`.
3. Server Action in `src/app/(business)/admissions/actions.ts`:
   ```ts
   "use server";
   export async function submitAdmission(input: AdmissionInput) {
     const parsed = admissionSchema.safeParse(input);   // re-validate on the server, always
     if (!parsed.success) return { ok: false, errors: parsed.error.flatten() };
     await sendMail({ to: process.env.ADMISSIONS_INBOX!, subject: "…", body: … });
     return { ok: true };
   }
   ```
   **Never trust the client.** The same schema runs on both sides.
4. Email transport: `npm i resend`. Env vars `RESEND_API_KEY`, `ADMISSIONS_INBOX`, `FEEDBACK_INBOX`. Add `.env.example`; confirm `.env*` is gitignored.
5. UX: disable the submit button while `isSubmitting`; on success reset the form and fire the existing toast; on failure show a form-level error. Add a honeypot field against bots.
6. Delete `ToastButton`'s use as a fake submit. Keep the toast for genuine success feedback.

**Gate:** submit each form empty → every required field shows its message. Submit invalid phone → the format message. Submit valid → email arrives, form resets, toast fires. Disable JS → the page still renders (progressive enhancement is a bonus, not a blocker).
**Commit:** `feat(forms): real validation with zod + react-hook-form and email server actions`

---

### Phase 10 — Cleanup and verification

1. Delete: `app/globals.css` (if any remnant), `tailwind.config.ts`, unused components, the Phase-4 holding SCSS files, every now-unused CSS class.
2. Remove the CSS custom properties from `_base.scss` **only after** `grep -r "var(--" src/` returns nothing.
3. Re-enable the ESLint rules deferred in Phase 1. Fix the fallout.
4. Run the full verification checklist below.
5. Update `README.md` to describe the new architecture.

**Commit:** `chore(refactor): remove dead code, re-enable eslint rules, update docs`

---

## 6. Final verification checklist

**Structure**
- [ ] `src/app`, `src/components`, `src/data`, `src/styles` exist; no top-level `app/`, `components/`, `lib/`
- [ ] `(business)` route group wraps every business page; URLs unchanged
- [ ] `src/styles/components/**` mirrors `src/components/**` exactly
- [ ] No SCSS folder exists without a matching TSX folder

**Styles**
- [ ] `main.scss` is the only style import in the whole repo
- [ ] Every `_index.scss` forwards all its children (`grep -L "@forward" **/_index.scss` returns nothing)
- [ ] `_index.scss` files contain no style rules
- [ ] No `.css` file remains
- [ ] `grep -r "style={{" src/` returns only the documented dynamic-background exception
- [ ] `grep -r "var(--" src/` returns nothing
- [ ] Colours reference `globals/_color.scss`; no raw hex in partials
- [ ] All ten breakpoints still fire at the same widths

**Components**
- [ ] No raw `<h1>`–`<h6>`, `<p>`, `<span>`, `<label>` in `components/ui/**` or `app/**`
- [ ] No raw `<button>`, `<a>`, `<input>`, `<textarea>`, `<select>` outside `components/common/`
- [ ] No page-specific copy of a primitive
- [ ] Every `page.tsx` is composition only

**Data**
- [ ] No hardcoded copy in any section component
- [ ] Every content export uses `satisfies`
- [ ] Every `href` comes from `Routes`
- [ ] No logic or fetching in content files

**Routing**
- [ ] Zero `href="#"`
- [ ] All 7 section slugs render; `generateStaticParams` covers them
- [ ] `/links` → `/external-links` 308 redirect
- [ ] 404 page renders for an unknown URL and for an unknown section slug
- [ ] Every page exports `metadata`

**Forms**
- [ ] zod schema shared by client and server
- [ ] Inline error messages on every invalid field
- [ ] Server re-validates; email sends; toast fires; form resets

**Quality gates**
- [ ] `npx tsc --noEmit` clean
- [ ] `npm run lint` clean, with the two disabled rules re-enabled
- [ ] `npm run build` clean, no Sass warnings
- [ ] All 18 routes screenshot-match the Phase 0 baseline at 1440px and 390px

---

## 7. Standing rules for the agent

1. **One phase, one commit.** Never mix phases. In Phase 8, one *page* per commit.
2. **Never skip the gate.** A red build does not get committed.
3. **Behaviour-preserving until Phase 8.** Phases 1–7 must not change a single pixel. If a screenshot differs, you made a mistake — do not "fix" it by adjusting the baseline.
4. **When a new partial is created, register it in `_index.scss` immediately.** Unregistered partials fail silently.
5. **Reuse before you create.** Before writing a new section component, grep `components/ui/` for an existing one with the same shape. Two pages with a heading + card grid share one component.
6. **If this document conflicts with the original prompts, this document wins.** If it conflicts with the *code*, stop and ask.
7. **Do not consolidate the ten breakpoints, do not replace emoji icons with SVGs, do not redesign anything.** Those are separate tasks. Scope discipline is what makes this land.

---

## 8. Commit sequence

```
chore(refactor): baseline screenshots and refactor branch
build(refactor): replace tailwind with sass, port preflight into base reset
refactor(structure): move to src/, add (business) route group, fix routes and 404
refactor(assets): reorganise public/ into common/ and per-page folders
refactor(styles): migrate globals.css to modular scss architecture
feat(ui): add typography, button, box, container, grid and form primitives
refactor(features): rebuild header, footer, page-head and shared widgets on ui primitives
feat(data): add shared section types and split legacy data.ts
refactor(home): extract content, build ui sections, slim page to orchestrator
refactor(contact): …                     ← one commit per page, 16 more
…
feat(forms): real validation with zod + react-hook-form and email server actions
chore(refactor): remove dead code, re-enable eslint rules, update docs
```
