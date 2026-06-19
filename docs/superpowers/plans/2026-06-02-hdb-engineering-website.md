# HDB Engineering Lanka Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (Sinhala/English) Next.js 14 website for HDB Engineering Lanka with flagship liquid machine landing page, product catalog, home page, and supporting pages.

**Architecture:** Next.js 14 App Router, locale-prefixed routing (`/si/`, `/en/`), all SSG, client components only for interactive elements. Product data as static TypeScript arrays.

**Tech Stack:** Next.js 14 · TypeScript · Tailwind CSS v3 · next-intl v3

**Spec:** `docs/superpowers/specs/2026-06-02-hdb-engineering-website-design.md`

---

### Task 1: Scaffold Next.js project

- [ ] Run in `c:\Users\imesh\Music\hdb`:
  ```
  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
  ```
  Accept all prompts with defaults (no to Turbopack if asked).
- [ ] Install additional deps:
  ```
  npm install next-intl
  npm install --save-dev @types/node
  ```
- [ ] Commit: `git init && git add . && git commit -m "chore: scaffold Next.js 14 project"`

---

### Task 2: Tailwind brand tokens

- [ ] Replace `tailwind.config.ts` content:
  ```ts
  import type { Config } from 'tailwindcss'
  const config: Config = {
    content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
    theme: {
      extend: {
        colors: {
          navy: '#0A2540',
          ice: '#F4F8FA',
          whatsapp: '#25D366',
          orange: '#FF6B00',
          'red-price': '#DC2626',
        },
        fontFamily: {
          'sinhala-body': ['var(--font-sinhala-body)','Noto Sans Sinhala','system-ui'],
          'sinhala-display': ['var(--font-sinhala-display)','Noto Sans Sinhala','system-ui'],
          'sinhala-decorative': ['var(--font-sinhala-decorative)','Noto Sans Sinhala','system-ui'],
        },
      },
    },
    plugins: [],
  }
  export default config
  ```
- [ ] Commit: `git add tailwind.config.ts && git commit -m "feat: add brand color tokens and Sinhala font families"`

---

### Task 3: Font setup + Sinhala fallback

- [ ] Create `public/fonts/.gitkeep` (directory for user's .ttf files)
- [ ] Create `lib/fonts.ts`:
  ```ts
  import localFont from 'next/font/local'
  import { Inter } from 'next/font/google'

  export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

  // These load only if font files exist in public/fonts/
  // Fallback chain: custom font → Noto Sans Sinhala → system-ui
  export const sinhalaBodyFont = localFont({
    src: '../public/fonts/YaldeviColombo-Regular.ttf',
    variable: '--font-sinhala-body',
    display: 'swap',
    fallback: ['Noto Sans Sinhala', 'system-ui'],
  })

  export const sinhalaDisplayFont = localFont({
    src: '../public/fonts/WijeSameThicknessTallRound.ttf',
    variable: '--font-sinhala-display',
    display: 'swap',
    fallback: ['Noto Sans Sinhala', 'system-ui'],
  })

  export const sinhalaDecorativeFont = localFont({
    src: '../public/fonts/FMShandyhane.ttf',
    variable: '--font-sinhala-decorative',
    display: 'swap',
    fallback: ['Noto Sans Sinhala', 'system-ui'],
  })
  ```
- [ ] Commit: `git add lib/fonts.ts public/fonts/ && git commit -m "feat: declare Sinhala self-hosted fonts with system fallback"`

---

### Task 4: Constants + product data

- [ ] Create `lib/constants.ts` — contact info, social URLs
- [ ] Create `lib/products.ts` — all product data as typed arrays
- [ ] Commit

---

### Task 5: next-intl setup

- [ ] Create `i18n.ts`, `middleware.ts`, `messages/si.json`, `messages/en.json`
- [ ] Commit

---

### Task 6: Root layout + global CSS

- [ ] Update `app/globals.css` with Noto Sans Sinhala import + base styles
- [ ] Create `app/[locale]/layout.tsx` with fonts applied, StickyMobileBar included
- [ ] Commit

---

### Task 7: UI primitives

- [ ] `components/ui/Button.tsx`
- [ ] `components/ui/Badge.tsx`
- [ ] `components/ui/PriceTag.tsx`
- [ ] `components/ui/AccordionItem.tsx`
- [ ] Commit

---

### Task 8: Layout components

- [ ] `components/layout/Navbar.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `components/layout/StickyMobileBar.tsx`
- [ ] Commit

---

### Task 9: Flagship landing page — S1 Hero

- [ ] `components/sections/HeroSection.tsx`
- [ ] Commit

---

### Task 10-16: Flagship sections S2–S8

- [ ] `components/sections/SocialProofSection.tsx` (S2)
- [ ] `components/sections/IndustryAppsSection.tsx` (S3)
- [ ] `components/sections/ROISection.tsx` (S4)
- [ ] `components/sections/TechSpecsSection.tsx` (S5)
- [ ] `components/sections/FAQSection.tsx` (S6 — client component, accordion)
- [ ] `components/sections/WhyHDBSection.tsx` (S7)
- [ ] `components/sections/FinalOfferSection.tsx` (S8)
- [ ] `app/[locale]/liquid-machine/page.tsx` (assembles S1–S8)
- [ ] Commit

---

### Task 17: Home page

- [ ] `components/home/CategoryGrid.tsx`
- [ ] `components/home/BestSellersStrip.tsx`
- [ ] `components/home/TrustStrip.tsx`
- [ ] `app/[locale]/page.tsx`
- [ ] Commit

---

### Task 18: Category + product pages

- [ ] `app/[locale]/machines/page.tsx`
- [ ] `app/[locale]/machines/[category]/page.tsx`
- [ ] `app/[locale]/machines/[category]/[slug]/page.tsx`
- [ ] Commit

---

### Task 19: Contact + About pages

- [ ] `app/[locale]/contact/page.tsx`
- [ ] `app/[locale]/about/page.tsx`
- [ ] Commit

---

### Task 20: Build verification

- [ ] `npm run build` — must pass with 0 errors
- [ ] `npm run dev` — visual check of Sinhala rendering
- [ ] Commit any fixes
