# Garrison Academy Kharian Cantt

Official website for **Garrison Academy Kharian Cantt**, built with Next.js (App Router) + TypeScript.

## Stack

- **Next.js 15** (App Router, React Server Components) · React 19 · TypeScript (strict)
- **Sass** — modular SCSS, no CSS-in-JS, no utility framework
- **next/font** — Cinzel (inscriptional wordmark), Fraunces (display), Inter (body), Noto Naskh Arabic (motto)
- **zod** + **react-hook-form** for forms, **Resend** for transactional email

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Node.js 18.18+ required (Node 20+ recommended).

Copy `.env.example` to `.env.local` and fill it in before the contact forms can
send email. Without it the forms still validate; submission fails with a visible
error rather than silently dropping the message.

## Architecture

```
public/
├── common/            shared assets (logo.png)
└── home/hero/         per-page asset folders, created only when needed

src/
├── app/
│   ├── layout.tsx           root: <html>, fonts, the single main.scss import
│   ├── not-found.tsx        global 404 (outside the route group, brings its own chrome)
│   ├── icon.png             Next file conventions -- must stay in app/
│   └── (business)/
│       ├── layout.tsx       ToastProvider + Header + <main> + Footer
│       ├── page.tsx         /
│       ├── …/page.tsx       one folder per route
│       ├── */actions.ts     server actions (forms)
│       └── sections/[slug]/ 7 statically generated section pages
│
├── components/
│   ├── common/        UI primitives. Zero business knowledge.
│   │                  box · container · typography · button · grid
│   │                  field · input · textarea · select · checkbox · lines
│   ├── features/      composite, stateful, reusable
│   │                  header/{index,brand,utility-strip,mega-menu,mobile-drawer}
│   │                  footer · page-head · accordion · tabs · toast
│   │                  chatbot · dropdown · notification-ticker
│   └── ui/            page sections
│       ├── business/  shared across pages: card-grid, tile-grid, person-grid,
│       │              roster, table, prose, steps, stats, cta-band, note,
│       │              rich-text, section
│       └── {page}/    page-specific sections, named {page}.{section}.tsx
│
├── data/
│   ├── routes.ts      single source of truth for every URL
│   ├── assets.ts      single source of truth for every public/ path
│   ├── navigation.ts · sections.ts · faqs.ts · chatbot.ts · notifications.ts · site.ts
│   ├── types/         shared section prop types (type.business-*.ts)
│   ├── content/{page}/ every string a page renders (content.{page}-{section}.ts)
│   └── validation/    zod schemas, shared by client and server
│
├── hooks/             use-media-query
├── lib/               mail transport
└── styles/
    ├── main.scss      @forward only. The one style import in the repo.
    ├── globals/       tokens, emits no CSS: _color _breakPoint _typography _layout
    ├── utils/         _base (reset + preflight) _typography _utils _animation
    ├── components/    mirrors src/components/ exactly: common/ features/ ui/
    └── modules/       _notFound
```

### Rules

- **`src/styles/components/**` mirrors `src/components/**` exactly.** Never create
  an SCSS folder without a matching TSX folder.
- **Every new partial must be registered in its parent `_index.scss`.** An
  unregistered partial produces no CSS and no error.
- `_index.scss` files contain only `@forward`, never a style rule.
- `components/_index.scss` forwards `ui/` **last**, so page rules win ties.
- Never write a raw `<h1>`–`<h6>`, `<p>`, `<span>`, `<label>`, `<button>`, `<a>`,
  `<input>`, `<textarea>` or `<select>` outside `components/common/`. Use the
  primitive.
- Never write `style={{ … }}`. The single documented exception is the hero
  slider's `backgroundImage`, which is not known at build time.
- Never write a literal URL. Use `Routes` / `ExternalRoutes` / `Assets`.
- Content exports end in `satisfies TypeName`, never `: TypeName` — `satisfies`
  preserves literal types.
- Content files hold static data only: no functions with side effects, no fetch.
- Reuse before you create. Two pages with a heading and a card grid share one
  `BusinessCardGrid`; they do not each get their own.

### Breakpoints

Ten breakpoints, expressed as a map + `respond()` mixin in
`globals/_breakPoint.scss`. Consolidating them is a separate task — changing them
shifts layout at the edges.

```scss
@use "../../globals" as g;

.thing {
  @include g.respond(tab-port) { … }   // 860px
}
```

## Routes

`/` · `/about` · `/activities` · `/admissions` · `/alumni` · `/chatbot` ·
`/contact` · `/downloads` · `/external-links` · `/faqs` · `/feedback` · `/hr` ·
`/messages` · `/organogram` · `/quick-links` · `/scholarships` · `/uniform` ·
`/sections/{pre|junior|middle-girls|middle-boys|senior-girls|senior-boys|apsis}`

`/links` permanently redirects to `/external-links`.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel — framework auto-detected as Next.js.
3. Add the environment variables from `.env.example`.

## Next steps

- Section heads for the junior, middle and senior sections render a
  "To be announced" placeholder. Fill `head` in `src/data/sections.ts` when the
  appointments are published.
- The ~40 emoji "icons" in the content files are strings, not assets. Migrating
  them to real SVGs under `public/common/icons/` is a design task.
- Consolidate the ten breakpoints down to four.
- Replace the Contact map placeholder with a real Google Maps embed.
- The crest is a PNG. Swap for an SVG if a vector version exists.
