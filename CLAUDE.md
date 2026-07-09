# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies (Node 18+)
npm run dev        # start dev server at http://localhost:5173
npm run build       # tsc -b (type-check) then vite build -> dist/
npm run preview     # serve the production build locally
npm run lint        # eslint .
```

There is no test suite/framework configured in this repo.

## Architecture

This is a static marketing site (React 18 + Vite + TypeScript strict + Tailwind + Framer Motion + React Router) for the ICAAICON Indore 2026 conference. No backend — it's client-only, deployed as a static SPA (Vercel, per `vercel.json`).

**Content is centralized.** `src/data/content.ts` is the single source of truth for essentially all copy and structured data on the site — event facts, dates, venue, nav links, focus areas, speakers, registration tiers, FAQs, sponsors. Section and page components import from here rather than hardcoding text. When asked to change site copy/data, edit this file first and check whether components already consume it before hardcoding values elsewhere.

**Routing shell.** `src/App.tsx` defines all routes and wraps every page in a persistent `Navbar` + `Footer`, with `ScrollToTop` resetting scroll on navigation. The homepage (`HomePage`) stacks every section component for a single-page feel; other routes (About, Program, Sponsorship, Register, Contact, and six `/host-city/*` pages) give genuine multi-page depth. Unknown paths fall back to `HomePage`. New pages must be registered both as a route in `App.tsx` and typically linked from `NAV_LINKS` or `HOST_CITY_LINKS` in `content.ts`.

**Component layers** (`src/components/`):
- `layout/` — Navbar (sticky, scroll-aware, mobile drawer), Footer, ScrollToTop.
- `ui/` — small reusable primitives: `Container` (max-width wrapper), `Img` (graceful gradient fallback on load failure), `Logo`, `SectionHeading`, `PageHeader`, and `TempleSkyline` (the hand-built SVG Indore skyline motif used repeatedly in hero/headers/footer, tinted via a `color` prop).
- `sections/` — homepage building blocks (Hero, Countdown, About, FocusAreas, ImportantDates, Speakers, Venue, WhyAttend, Registration, Gallery, Sponsors, CtaBand), each pulling its data from `content.ts`.

**Animation.** `src/lib/motion.ts` centralizes shared Framer Motion variants (`fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `viewportOnce`). Reuse these instead of inlining new variants so timing/easing stays consistent across the site.

**Styling.** Design tokens (palette, fonts, shadows, keyframes) live in `tailwind.config.js`, derived from the event's poster: `teal #0F6B6B`, `maroon #A41E34`, `gold #C2A14D`, `ivory #F7F4ED`, `ink #1E2A3A`. Fonts: Cinzel (wordmark), Fraunces (display/headings), Manrope (body) — loaded via `<link>` in `index.html`.

**Path alias.** `@/*` resolves to `src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

**Forms.** Register and Contact page forms are client-side demos only (validation + mocked async submit) — no real backend/payment wiring exists yet.

**Images.** Currently Unsplash placeholder URLs, each with a comment noting the intended real subject. The `Img` component falls back to a teal→gold gradient on failure, so broken image URLs never break layout.
