# Army Public School & College — GAK Campus, Kharian Cantt

Official website for **APS&C GAK Campus, Kharian Cantt**, built with Next.js (App Router) + TypeScript.
Converted from the approved single-file HTML prototype — the design system is preserved 1:1.

## Stack
- **Next.js 15** (App Router, React Server Components) · React 19 · TypeScript
- **Tailwind CSS 3** (brand tokens in `tailwind.config.ts`)
- **next/font** — Cinzel (inscriptional wordmark), Fraunces (display), Inter (body), Noto Naskh Arabic (motto)
- Design system lives in `app/globals.css` (CSS variables + component classes)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```
> Node.js 18.18+ required (Node 20+ recommended).

## Project structure
```
app/
  layout.tsx            # fonts, header, footer, toast provider, metadata
  globals.css           # full design system
  page.tsx              # home
  <section>/page.tsx    # one route per parameter (messages, about, admissions, …)
  sections/[slug]/      # Pre / Middle / Senior / APSIS (dynamic, statically generated)
components/              # Header, Footer, Hero, Tabs, Accordion, Chatbot, Toast, …
lib/data.ts             # nav, section data, FAQ, chatbot Q&A (CMS-ready)
public/logo.png         # school crest
```

## Routes
`/` · `/messages` · `/about` · `/organogram` · `/quick-links` · `/sections/{pre|middle|senior|apsis}` ·
`/scholarships` · `/uniform` · `/alumni` · `/activities` · `/admissions` · `/hr` · `/links` ·
`/faqs` · `/chatbot` · `/contact` · `/downloads` · `/feedback`

## Deploy (Vercel)
1. Push to GitHub.
2. Import the repo in Vercel — framework auto-detected as Next.js.
3. Deploy. No env vars required for the static front-end.

## Notes / next steps for production
- **Content** in `lib/data.ts` and the page files is realistic placeholder — wire to a CMS/admin or DB.
- Forms (`/admissions`, `/feedback`) and external links currently show a confirmation toast. Connect to a backend API / Google Form / email service.
- Replace masked phone/email values and the Contact map placeholder with the real Google Maps embed.
- Logo is in `public/logo.png` — swap for an SVG if a vector version is available.
- To upgrade to **Next.js 16**: `npm i next@16 react@19 react-dom@19` then `npx @next/codemod@canary upgrade latest`.
