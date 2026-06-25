# ICAACON Indore 2026 — Conference Website

A high-end, responsive marketing site for the **60th International Conference on
Allergy, Asthma & Immunology** — *ICAACON Indore 2026*. Built as a single-page
experience with genuine multi-page depth (About / Program / Register / Contact).

**Theme:** *Breathe Better, Live Better* · **Dates:** 24–27 September 2026 ·
**Venue:** Vivanta Hotel, Indore.

---

## Tech stack

| Tool | Role |
| --- | --- |
| React 18 + Vite | App framework + dev/build tooling |
| TypeScript (strict) | Type safety |
| Tailwind CSS | Styling / design tokens |
| Framer Motion | Scroll reveals, parallax, micro-interactions |
| React Router DOM | Multi-page routing |
| Lucide React | Icons |

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node 18+**.

---

## Folder structure

```
icaacon-indore-2026/
├── index.html                  # HTML shell + Google Fonts (Cinzel/Fraunces/Manrope)
├── package.json
├── vite.config.ts              # Vite + "@/" path alias
├── tailwind.config.js          # Design tokens (colors, fonts, animations)
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── favicon.svg             # Antibody "Y" mark
└── src/
    ├── main.tsx                # Entry point (wraps app in BrowserRouter)
    ├── App.tsx                 # Routes + persistent Navbar/Footer
    ├── index.css               # Tailwind layers + reusable component classes
    │
    ├── data/
    │   └── content.ts          # ⭐ SINGLE SOURCE OF TRUTH for all copy/data
    │
    ├── lib/
    │   └── motion.ts           # Shared Framer Motion variants
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       # Sticky, scroll-aware, mobile drawer
    │   │   ├── Footer.tsx       # Deep-teal footer + skyline motif
    │   │   └── ScrollToTop.tsx  # Resets scroll on route change
    │   ├── ui/
    │   │   ├── Container.tsx        # Max-width wrapper
    │   │   ├── Img.tsx              # Image with graceful gradient fallback
    │   │   ├── Logo.tsx             # ICAACON wordmark lock-up
    │   │   ├── SectionHeading.tsx   # Eyebrow + title + rule
    │   │   ├── PageHeader.tsx       # Inner-page banner
    │   │   └── TempleSkyline.tsx    # ⭐ Signature Indore skyline SVG motif
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── Countdown.tsx
    │       ├── About.tsx
    │       ├── FocusAreas.tsx
    │       ├── ImportantDates.tsx
    │       ├── Speakers.tsx
    │       ├── Venue.tsx
    │       ├── WhyAttend.tsx
    │       ├── Registration.tsx
    │       ├── Gallery.tsx
    │       ├── Sponsors.tsx
    │       └── CtaBand.tsx
    └── pages/
        ├── HomePage.tsx        # Stacks every section
        ├── AboutPage.tsx
        ├── ProgramPage.tsx     # Schedule + abstract submission + FAQ
        ├── RegisterPage.tsx    # Pricing tiers + working demo form
        └── ContactPage.tsx     # Details + message form + map
```

---

## Customizing the site

### 1. Content & data
Almost everything you'll want to change lives in **`src/data/content.ts`** —
event dates, venue, theme, focus areas, speakers, registration tiers, FAQs,
sponsors and navigation links. Edit values there and they update everywhere.

### 2. Colors, fonts & animation
Open **`tailwind.config.js`**. The palette is pulled straight from the poster:

```
teal   #0F6B6B   maroon #A41E34   gold #C2A14D
ivory  #F7F4ED   ink    #1E2A3A
```

Fonts are loaded in `index.html`: **Cinzel** (wordmark), **Fraunces** (display),
**Manrope** (body). Swap the `<link>` and the `fontFamily` keys to restyle.

### 3. Images
Photos use Unsplash placeholders, each documented with a comment describing the
intended subject (medical, conference, Indore landmarks). Replace the URLs in
`content.ts` / the section files with your own assets. The `<Img>` component
falls back to a teal→gold gradient if any image fails to load, so the layout
never breaks.

### 4. The signature element
`TempleSkyline.tsx` is a hand-built SVG silhouette of Indore's temple/heritage
skyline (echoing the official logo line-art). It recurs in the hero, page
headers and footer. Tint it with any palette colour via the `color` prop.

### 5. Forms & payments
The Register and Contact forms are **client-side demos** with validation and a
mocked async submit. Wire `handleSubmit` / `send` to your backend (e.g.
Node/Express + Razorpay) to take live registrations and payments.

---

## Accessibility & performance

- Mobile-first, responsive down to ~360px.
- Visible keyboard focus rings; `prefers-reduced-motion` respected (animations
  collapse for users who opt out).
- Lazy-loaded images, semantic landmarks, descriptive `alt` text.
- Production bundle ≈ 110 kB gzipped JS.

---

## Deploy

Static output in `dist/` after `npm run build` — deploy anywhere:

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist
```

For client-side routing on static hosts, add a catch-all rewrite to
`index.html` (Vercel/Netlify do this automatically for SPAs).

---

*Built with care for a healthier tomorrow. 🫁*
