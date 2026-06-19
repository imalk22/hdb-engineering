# HDB Engineering Lanka — Website Design Spec
**Date:** 2026-06-02  
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS v3 · next-intl  
**Replaces:** https://hdb.lk (Wix)

---

## 1. Architecture

### Framework
Next.js 14 App Router with React Server Components. Static generation (SSG) for all pages. Client Components only where interactivity is required (carousel, FAQ accordion, sticky bar).

### Bilingual Routing
`next-intl` with locale-prefixed routing:
- `/si/...` — Sinhala (default, primary)
- `/en/...` — English

Locale switcher in top nav. All Sinhala text stored in `messages/si.json`, English in `messages/en.json`.

### Directory Structure
```
app/
  [locale]/
    layout.tsx              # locale wrapper, sticky bar, fonts
    page.tsx                # Home page
    liquid-machine/
      page.tsx              # Flagship landing page (8 sections)
    machines/
      page.tsx              # All categories grid
      [category]/
        page.tsx            # Category product listing
        [slug]/
          page.tsx          # Product detail template
    contact/
      page.tsx
    about/
      page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
    StickyMobileBar.tsx     # WhatsApp + Call (hidden lg+)
  sections/                 # One file per landing page section
    HeroSection.tsx
    SocialProofSection.tsx
    IndustryAppsSection.tsx
    ROISection.tsx
    TechSpecsSection.tsx
    FAQSection.tsx
    WhyHDBSection.tsx
    FinalOfferSection.tsx
  home/
    CategoryGrid.tsx
    BestSellersStrip.tsx
    TrustStrip.tsx
    ContactForm.tsx
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    PriceTag.tsx
    VideoCard.tsx
    AccordionItem.tsx

lib/
  constants.ts              # phone, address, social URLs
  products.ts               # static product data

messages/
  si.json
  en.json

public/
  fonts/                    # ← user drops .ttf/.otf files here
    YaldeviColombo-Regular.ttf
    WijeSameThicknessTallRound.ttf
    FMShandyhane.ttf
  images/                   # ← placeholder; real images added later
```

---

## 2. Brand & Design Tokens

### Colors (Tailwind `tailwind.config.ts`)
| Token | Hex | Usage |
|---|---|---|
| `navy` | `#0A2540` | Headers, nav bg, trust strip, section titles |
| `ice` | `#F4F8FA` | Page background |
| `whatsapp` | `#25D366` | WhatsApp CTA buttons |
| `orange` | `#FF6B00` | Call Now + primary CTA |
| `white` | `#FFFFFF` | Cards, modal bg |
| `red-price` | `#DC2626` | Discounted price highlight |
| `amber-warn` | `#FEF3C7` | Negative filter warning box bg |

### Typography
- **English body:** Inter (Google Fonts via `next/font/google`)
- **Sinhala body:** YaldeviColombo Regular → CSS var `--font-sinhala-body`
- **Sinhala display headings:** Wije Same Thickness Tall Round → CSS var `--font-sinhala-display`
- **Sinhala decorative:** FM Shandyhane → CSS var `--font-sinhala-decorative`

Font files placed in `public/fonts/`. Declared via `next/font/local` in `lib/fonts.ts`. Applied as Tailwind utility classes: `font-sinhala-body`, `font-sinhala-display`, `font-sinhala-decorative`.

**Sinhala render test string** (must display correctly before shipping):  
`ස්වයංක්‍රීයව ඇසුරුම් — conjunct: ක්‍ · vowel: ිී`

### Spacing & Radius
- Section padding: `py-16 px-4` mobile → `py-24 px-8` desktop
- Card radius: `rounded-2xl` (20px)
- Button radius: `rounded-full` for CTA pills, `rounded-xl` for wide buttons

---

## 3. Global Components

### Navbar
- **Mobile:** HDB logo left, hamburger right. Slide-out drawer with full category links.
- **Desktop:** HDB logo, nav links (Home · Machines ▾ · About · Contact), "Visit Our Showroom — Homagama" pill (navy bg, white text) on far right.
- Machines dropdown: Liquid Machine · Dehydrators · Grinding Mills · Band Sealers · Vacuum Sealers · Rice Mills · Slicers · Chuff Cutters · Wood Chippers · Feed Pellet · Budget Packs
- Sticky on scroll (`position: sticky; top: 0; z-index: 40`).

### Sticky Mobile Bottom Bar
- Fixed to `bottom: 0`, full width, `z-index: 50`.
- Hidden on `lg:` and above.
- Left 50%: WhatsApp green `#25D366` button → `https://wa.me/94760360560`
- Right 50%: Orange `#FF6B00` button → `tel:+94760450451`
- Labels: "WhatsApp Pre-Order" (with WhatsApp icon) · "Call Now — 076 0 450 451" (with phone icon)
- Body gets `pb-16` on mobile to prevent content overlap.

### Footer
- Logo + tagline "Smart Machines · Smart Business"
- Column 1: Nav links (Home, Machines, About, Contact, FAQ, Shipping Policy, Terms)
- Column 2: Categories (Liquid Machine, Dehydrators, Grinding Mills, Band Sealers, Vacuum Sealers, Slicers)
- Column 3: Contact (No.218 Kurunegala Road, Dambulla · 076 0 450 451 · 076 0 360 560 · hdbengineeringlanka@gmail.com)
- Social icons: Facebook · YouTube · TikTok · Instagram
- Bottom bar: © 2026 HDB Engineering Lanka (Pvt) Ltd

---

## 4. Home Page

Sections in order:
1. **Hero Teaser** — H1 bilingual ("Smart Industrial Machines / ස්මාර්ට් කාර්මික යන්ත්‍ර"), sub-headline about Sri Lanka's #1 source, CTA to flagship landing page
2. **Category Grid** — 10 category cards in 2-col mobile / 5-col desktop grid, each with icon/image placeholder, category name (bilingual), "View All →" link
3. **Best Sellers Strip** — Horizontal scroll of 4-6 product cards with image placeholder, name, price
4. **Trust Strip** — 4 pillars: 500+ Machines Installed · Island-wide Delivery · 1 Year Warranty · After-Sales Support
5. **Contact Form** — Name, phone, message, WhatsApp submit
6. **Footer**

---

## 5. Product Catalog (from hdb.lk)

### Categories & Navigation Labels
| Slug | Display Name (EN) | Display Name (SI) |
|---|---|---|
| `liquid-machine` | Liquid Machine | ද්‍රව පිරවීම් යන්ත්‍ර |
| `dehydrators` | Dehydrate Machines | විජලනය යන්ත්‍ර |
| `grinding-mills` | Grinding Mills | ඇඹරීම් යන්ත්‍ර |
| `band-sealers` | Band Sealers | බෑන්ඩ් සීල් යන්ත්‍ර |
| `vacuum-sealers` | Vacuum Sealers | රික්ත සීල් යන්ත්‍ර |
| `rice-mills` | Rice Mills | සහල් කෝල් යන්ත්‍ර |
| `slicers` | Slicer Machines | පෙති කොටන යන්ත්‍ර |
| `chuff-cutters` | Chuff Cutters | කොළ කොටන යන්ත්‍ර |
| `wood-chippers` | Wood Chippers | ලී කොටන යන්ත්‍ර |
| `feed-pellet` | Feed Pellet Machines | ගොරෝසු ඇට යන්ත්‍ර |
| `budget-packs` | Budget Packs | ලාභදායී පැකේජ |

### Known Products with Prices

**Liquid / Filling & Packing:**
- Automatic Liquid Filling & Packing Machine (flagship): LKR 460,000 (pre-order) / LKR 575,000 (regular)
- Y-200S 18cm Electric Liquid Packing Machine Three Side: LKR 435,000
- 999G Filling & Packing Machine: price TBD (user to confirm)
- JD Filling & Packing Solution: price TBD

**Dehydrate Machines:**
- 8-Tray: LKR 89,500
- 10F-Trays: LKR 95,000
- 16A-Trays: LKR 195,000
- 18B-Trays: LKR 125,000
- 20J-Tray (Manual): LKR 225,000
- 24-Trays: LKR 245,000
- 24J-Trays: LKR 245,000
- 32-Tray: LKR 445,000
- 32J-Trays: LKR 445,000
- 40-Trays: LKR 445,000
- 48-Trays: LKR 495,000
- 80-Trays: LKR 795,000
- 96-Trays: LKR 895,000

**Grinding Mills:**
- 9FC Grinding Mill
- Fully SS Grinding Mill
- Ultrafine Grinding Mill
- 24K Disk Grinding Mill
- 9FC2021 Round Hopper DISC MILL
- KM20 Multi Spice Grinding Mill SS Half Body
- KM20 Multi Spice Grinding Mill SS Full Body
- KM20S Multi Spice Grinder
- KM20 Grinder with Cyclone Single Phase
- KM20 Grinder with Cyclone 4HP 3 Phase

**Band Sealers:** FR-545 · FR-770 · DBF-1000 · FR-770 Bag Sealer

**Vacuum Sealers:** DZ400-2D · DZ500-2D · DZ500-2R · SY260T · SY500T

**Slicers:** HD-300 · HD-400 · HD-500

**Chuff Cutters:** BBZ-1.5 · 9Z-1.5 · BB-CVT · 9ZT-6.0

**Rice Mills (named):** Lokka · Saviya · Ransahal (+ SY series)

**Budget Packs:** 4-in-1 Pack · 5-in-1 Pack

*Prices not yet captured for Grinding Mills, Band Sealers, Vacuum Sealers, Slicers, Chuff Cutters, Rice Mills — source from hdb.lk product pages or user will confirm. Product card shows "Contact for Price" as fallback.*

---

## 6. Flagship Landing Page — Liquid Filling & Packing Machine

URL: `/[locale]/liquid-machine`

Eight sections in order:

### S1 — Hero (Trust Repair + High Value Offer)
- **H1:** "Automatic Liquid Filling & Packing Machine"
- **Sinhala subtitle:** "අයිස් පොප්, ජූස්, පොල්තෙල්, සිරි වර්ග අතුළ ඔබේ නිෂ්පාදනය ස්වයංක්‍රීයව ඇසුරුම් කරන යන්ත්‍රය"  
  _(font: `--font-sinhala-body`)_
- **Hero media:** Autoplay muted 30s video (placeholder iframe until real video supplied). Desktop: right side. Mobile: below heading.
- **"30 Second Live Demo" badge** overlaid on video (navy bg, white text)
- **Anchor pricing block:**
  - ~~LKR 575,000~~ (strikethrough grey)
  - **LKR 460,000** (bold red, 2× size)
  - "රු. 115,000 ඉතිරි කරන්න" green badge
- **Delivery chip:** "ලංකාව පුරාම ගෙනවිත් ස්ථාපනය: දින 30–45"
- **Feature chips:** Free Delivery · Free Installation · Free Training
- **Sticky CTA bar (mobile):** WhatsApp Pre-Order (green) + Call Now 076 0 360 560 (orange)
- **Trust micro-strip:** 500+ Customers · Island-wide Delivery · 1 Year Warranty · After-Sales Support

### S2 — Social Proof (Video Testimonials)
- **Section badge:** "OUR HAPPY CUSTOMERS"
- **H2 Sinhala:** "HDB යන්ත්‍රෝපකරණ භාවිතයෙන් සාර්ථක වූණු ශ්‍රී ලාංකික ව්‍යාපාරිකයින්"  
  _(font: `--font-sinhala-display`)_
- **Sub-heading Sinhala:** "අපගේ පාරිභෝගිකයින්ගේ සැබෑ කර්මාන්ශාලා වලින් ලබාගත් වීඩියෝ සහ අන්දලිස්"
- **Layout:** Desktop — 3 glassmorphic video cards side-by-side. Mobile — horizontal swipe carousel (one card full-width, edge of next card peeking 30px right).
- **Each card contains:**
  - Top badge: "📹 Customer Success Story #0X"
  - Video thumbnail (placeholder → grey box with play button)
  - Play button overlay (glassmorphic capsule: "▶ සම්පූර්ණ වීඩියෝ බලන්න")
  - Customer name + location in bold, industry in parentheses
  - 5 gold stars ★★★★★
  - Customer quote (italicised)
- **Cards:**
  1. වාමර – ගම්පහ (Ice Pop Manufacturing) · "Manual Packing නාවකාලා Production එක දෙගුණ වුණා."
  2. නිලූකා – කුරුණෑගල (Juices & Cordials) · "Machine එක ගත්තට පස්සේ Labour Cost එක ගොඩක් අඩු වුණා."
  3. සමාන් – මාතර (Coconut Oil Packing) · "Packing Quality එක නිසා අපේ Brand Value එක වැඩි වුණා."
- **Trust strip** (navy bg, white icons): 500+ Machines Installed · Islandwide Delivery · Spare Parts Available · Technical Support Team · HDB Engineering Lanka

### S3 — Industry Applications
- **Section badge:** "🏭 INDUSTRY APPLICATIONS"
- **H2 Sinhala:** "මෙම යන්ත්‍රය මගින් ඔබට පහසුවෙන් ඇසුරුම් කළ හැකි දෑ:"  
  _(font: `--font-sinhala-display`)_
- **Layout:** Desktop — 4 glassmorphic cards in a row with product photo + checkmark label. Mobile — 4 vertical list items.
- **Items:**
  1. ✅ අයිස් පොප් (Ice Pop / Ice Pail) නිෂ්පාදකයින්
  2. ✅ පළතුරු ජූස්, සිරප් සහ කොඩියල්
  3. ✅ පොල්තෙල් සහ ආහාරයට ගත හැකි වෙනත් තෙල් වර්ග
  4. ✅ කිරි පැකට් සහ යෝගට් දියර
- **Negative Filter Warning Box** (amber-red tinted bg `#FEF3C7`, `#DC2626` border, ⚠️ icon):
  > "ඔබේ නිෂ්පාදනය කුඩු වර්ගයක් (Powder) හෝ ඇට වර්ගයක් (Grains) නම්, මෙම යන්ත්‍රය ඔබට ගැලපෙන්නේ නැත. කරුණාකර අපගේ 999g Machine පිටුව බලන්න."

### S4 — ROI / Income Potential
- **H2 Sinhala:** "HDB ස්වයංක්‍රීය යන්ත්‍රයක් හරහා ඔබේ ව්‍යාපාරේ ආදායම් වැඩිකරන්නේ මෙහෙමයි:"  
  **Sub:** "(Income Potential)"
- **Calculation card** (light blue bg, soft shadow):
  - "📦 දිනකට පැකට් 2,000" → "× රු. 10 ලාභ" → "= රු. 20,000 ළෙදී"
  - **Hero stat:** "මාසික ගුළු ආදායම: **රු. 600,000.00** දක්වා!" (bold crimson)
  - ⚠️ disclaimer: "මෙය දළ විශ්ලේෂණයක් පමණක් වන අතර, ඔබේ නිෂ්පාදනය සහ වෙළඳපොළ අනූව ආදායම් තත්ත්වය වෙනස් විය හැක."
- **Bonus Strategy Box** (gold border, 💡 icon):
  > "ඔබේ වෙළඳපොළට ඔබතමා නූ නිෂ්පාදනයක් (Unique Product) හඳුන්වා දිය හැකිනම්, ඔවත් වඩා ඉහළ ලාභයක් ලෝවා හැකිය."
- **Bottom icon strip:** Production Cost ↓ · Labour Cost ↓ · Time Saving ↑ · Quality 100% · Profit ↑

### S5 — Technical Specifications
- **H2 Sinhala:** "තාක්ෂණික විස්තර සහ වශීමි සහකිය"  
  **Sub:** "(Technical Specifications)"  
  _(font: `--font-sinhala-display`)_
- **Specs table** (Sinhala labels + English/number values, alternating row shading):

| Sinhala Label | Value |
|---|---|
| ද්‍රව්‍ය (Material) | Food-Grade Stainless Steel |
| ශීඝ්‍රතාවය (Speed) | 10–25 packets/min · 10–18 bags/hour |
| බල සැපයුම (Power) | 220V / 570W |
| විද්‍යුත් සැපයුම (Supply) | 220V / 50Hz |
| පටල පළල (Film Width) | 5–20 cm |
| බෑග් දිග (Bag Length) | 3–16 cm |
| සම්පූර්ණ බෑග් පළල (Finished Bag Width) | 2.5–10 cm |
| ප්‍රවාහන පරාසය (Filling Range) | 3–200 ml · up to 1000ml/999g |
| නිරවද්‍යතාවය (Accuracy) | ±1 ml |
| හේතාමර (Formers) | 60 mm and 86 mm |
| ශුද්ධ බර (Net Weight) | 36 kg |
| මානයන් (Dimensions) | 48 × 45 × 145 cm |
| අතිරේක ප්‍රමාණ (Custom Sizes) | 5cm(2")–18cm(7") · 2.5cm(1") / 3cm(1¼") / 4cm(1½") |

- **Smart Technology box** (navy accent, icon grid):
  - 4-Line Date Coding Machine (BATCH/EXP/MFD/PRICE)
  - Color Mark Sensor
- **Warranty cards** (premium shield icons):
  - "🛡 යන්ත්‍රයේ බඳ සඳහා වශීමිය: **මාස 12 ක්**"
  - "⚡ විද්‍යුත් උපාංග සඳහා වශීමිය: **මාස 6 ක්**"

### S6 — FAQ (Doubt Killer)
- **H2 Sinhala:** "නිතර අසන ප්‍රශ්ණ (FAQ)"  
  _(font: `--font-sinhala-display`)_
- Accordion: only one item open at a time. Toggle arrow icon rotates 180° on open.
- **Q1:** "ප්‍රී-ඕඩර් එකක් ස්ථිර කරන්නේ කොහොමද?"  
  **A:** Showroom visit/Rs.100,000 advance → legal agreement → 10–15 day production → batch shipping 10/20/30 units. 🎁 Bonus: "විශේෂ දිමතවා: යන්ත්‍රය ගිය දින සිට පළමු 03 අවුළුකේ Free Service Visit 01ක් සම්පූර්ණයෙන් නොමිලේ!"
- **Q2:** "Warranty සහ After-Sales සේවාව ලබෙන්නේ කොහොමද?"  
  **A:** Island-wide service team, full warranty period coverage. 🎁 Bonus same as above.
- **Mini trust icons strip:** Legal Agreement · Showroom Demo · Islandwide Delivery · Technical Support
- **Bottom CTA:** "තවත් ප්‍රශ්ණ තිබෙනවාද?" → WhatsApp (green) + Call Now (orange) buttons

### S7 — Why HDB / Trust & Safety
- **H2 Sinhala:** "ඇයි HDB Engineering Lanka තෝරාගත යුත්තේ?"  
  _(font: `--font-sinhala-display`)_
- **Sub-badge:** "🔒 ඔබේ මුදල 100%ක් ආරක්ෂිතයි"
- **3×2 grid** of trust cards (each: numbered badge + icon + Sinhala label + 1-line description):
  1. නිල ලියාපදිංචි ආයතනය — Official Company Registration
  2. නිල නීතිමය ගිවිසුමක් — Legal Agreement Issued
  3. තොමාගම Showroom — Physical Showroom in Homagama, Live Demo
  4. ආරක්ෂිත බැංකු ගෙවීම් — Secure Bank Payments
  5. මාස 12ක වශීමිය — 12-Month Warranty Support
  6. දිවිසය පුරා සේවා කණ්ඩායම — Island-wide Expert Service Team

### S8 — Final Pre-Order Offer
- **Glassmorphic container** (soft blue tint background `#EFF6FF`, subtle glow border)
- **Section badge:** "08 — විශේෂ ප්‍රී-ඕඩර් මිල"
- **Price:** 🔥 "LKR **460,000**" (massive bold red)
- **Savings badge:** "රු. 115,000 ඉතිරි කරන්න" (green pill)
- **Checklist:**
  - ✅ නිල නීතිමය ගිවිසුමක් (Legal Agreement) ලබා දේ
  - ✅ Showroom හිදී සජීවී නිරූපණය (Demo) ලබාගත හැක
  - Free Delivery · Free Installation · Free Training
- **Two CTA buttons (full width, stacked mobile / side-by-side desktop):**
  - WhatsApp Pre-Order → `https://wa.me/94760360560` (green `#25D366`)
  - Call Now: 076 0 360 560 → `tel:+94760360560` (orange `#FF6B00`)
- **Warning strip:** "⚠️ සීමිත මාසේ Shipping Batch පමණක් සිදු කරනු ලැබේ." · "⚠️ සීමිත යන්ත්‍ර ප්‍රමාණයක් පමණක් Order කර ගත හැකිය."

---

## 7. Category Page Template

URL: `/[locale]/machines/[category]`

- **H1:** Category name (bilingual)
- **Filter bar:** Sort by price (low/high), tray count, etc. (client component)
- **Product grid:** 2-col mobile, 3-col desktop. Each card:
  - Image placeholder (grey box, 4:3 ratio)
  - Product name (bilingual)
  - Price (LKR formatted, "Contact for Price" if unknown)
  - "View Details →" button
- **Pagination / Load More** (start with "Load More" button for simplicity)

---

## 8. Product Detail Template

URL: `/[locale]/machines/[category]/[slug]`

- **Gallery:** Main image + 3 thumbnail strip (placeholder boxes)
- **Product title** (bilingual, H1)
- **Price** (prominent, with "Contact for Price" fallback)
- **Short description** (bilingual)
- **Key features list** (bullet points)
- **Specs table** (same style as flagship S5)
- **CTA block:** WhatsApp enquiry (green) + Call Now (orange)
- **Related Products strip** (horizontal scroll, 4 cards)

---

## 9. Contact Page

URL: `/[locale]/contact`

- **H1 bilingual:** "Contact Us / අප හා සම්බන්ධ වන්න"
- **Address block:** No.218 Kurunegala Road, Dambulla
- **Map embed:** Google Maps iframe (placeholder div until embed added)
- **Phone numbers:** 076 0 450 451 · 076 0 360 560 (click-to-call)
- **Email:** hdbengineeringlanka@gmail.com
- **Social links:** Facebook · YouTube · TikTok · Instagram (icon buttons)
- **Contact form:** Name · Phone · Message · Submit (WhatsApp deep-link or mailto fallback)
- **Showroom hours** (placeholder: "Mon–Sat 8am–6pm")

---

## 10. About Page

URL: `/[locale]/about`

- Company story (paragraph placeholder — user to provide final copy)
- Mission statement
- "500+ machines installed island-wide" stats strip
- Team / Showroom photo placeholder

---

## 11. Font Implementation

### File Placement
User drops font files into `public/fonts/`:
- `YaldeviColombo-Regular.ttf`
- `WijeSameThicknessTallRound.ttf`  
  _(or whatever the exact filename is)_
- `FMShandyhane.ttf`

### Declaration (`lib/fonts.ts`)
```ts
import localFont from 'next/font/local'

export const sinhalaBodyFont = localFont({
  src: '../public/fonts/YaldeviColombo-Regular.ttf',
  variable: '--font-sinhala-body',
  display: 'swap',
})

export const sinhalaDisplayFont = localFont({
  src: '../public/fonts/WijeSameThicknessTallRound.ttf',
  variable: '--font-sinhala-display',
  display: 'swap',
})

export const sinhalaDecorativeFont = localFont({
  src: '../public/fonts/FMShandyhane.ttf',
  variable: '--font-sinhala-decorative',
  display: 'swap',
})
```

### Tailwind Utilities (`tailwind.config.ts`)
```ts
fontFamily: {
  'sinhala-body': ['var(--font-sinhala-body)', 'Noto Sans Sinhala', 'system-ui'],
  'sinhala-display': ['var(--font-sinhala-display)', 'Noto Sans Sinhala', 'system-ui'],
  'sinhala-decorative': ['var(--font-sinhala-decorative)', 'Noto Sans Sinhala', 'system-ui'],
}
```

**Fallback chain:** If font files are not yet placed, Noto Sans Sinhala (Google Fonts) acts as fallback so Sinhala text is never broken/boxes. This ensures the site works during development before real fonts arrive.

### Sinhala Render Test
A dedicated test component `components/SinhalaFontTest.tsx` renders:
- Conjuncts: ක්‍ · ශ්‍ · ත්‍ · ද්‍ · ව්‍
- Vowel signs: කා · කි · කී · කු · කූ · කෙ · කො
- Full sentence: "ස්වයංක්‍රීයව ඇසුරුම් කරන යන්ත්‍රය"

This component is included in the root layout during development and removed before production deploy.

---

## 12. Data Strategy

All product data is stored as a static TypeScript array in `lib/products.ts`. No database, no CMS. Structure:

```ts
type Product = {
  slug: string
  category: string
  nameEn: string
  nameSi: string
  price: number | null        // null → "Contact for Price"
  descEn: string
  descSi: string
  specs: { labelSi: string; value: string }[]
  imagePlaceholder: true      // images added in Phase 2
}
```

---

## 13. Performance & SEO

- All static sections are React Server Components — zero JS hydration cost.
- Phase 1 image placeholders are CSS grey divs with fixed aspect ratios (no real files needed). `next/image` is wired up in Phase 2 when real images are provided.
- Metadata API: each page has `generateMetadata()` returning bilingual title, description, OG tags.
- `robots.txt` and `sitemap.xml` auto-generated via Next.js.
- Core Web Vitals target: LCP < 2.5s on 4G mobile (critical for Sri Lanka market).

---

## 14. Contact Constants (`lib/constants.ts`)

```ts
export const CONTACT = {
  phone1: '+94760450451',
  phone1Display: '076 0 450 451',
  phone2: '+94760360560',
  phone2Display: '076 0 360 560',
  email: 'hdbengineeringlanka@gmail.com',
  address: 'No.218 Kurunegala Road, Dambulla',
  whatsapp: 'https://wa.me/94760360560',
  facebook: '#',   // user to confirm URL
  youtube: '#',
  tiktok: '#',
  instagram: '#',
}
```

---

## 15. Out of Scope (Phase 1)

- Real product images (added by user in Phase 2)
- Customer video uploads (placeholders in Phase 1)
- E-commerce / cart / checkout (Wix handles this; Phase 2 decision)
- Admin CMS panel
- Blog / news section
- Multi-currency pricing
- Google Analytics / Meta Pixel (can be added as 3-line snippet later)

---

## 16. Open Items (need user input before/during build)

1. **Font files** — drop `.ttf`/`.otf` into `public/fonts/` using exact filenames above
2. **Social media URLs** — Facebook, YouTube, TikTok, Instagram page links
3. **Showroom address & hours** — confirm Homagama showroom hours
4. **999G machine price** — not captured from hdb.lk
5. **Rice mill prices** — not visible on hdb.lk (may be contact-for-price)
6. **Hero video** — placeholder div in Phase 1; user supplies video URL/file later
7. **Customer photos/videos** — placeholder thumbnails in Phase 1
