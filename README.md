# Smoke Machine

Product catalogue / digital showroom website for Smoke Machine — a local vape shop at Centrepoint, Paarl, Western Cape. This is **not** an online store: no cart, checkout, payments, or ordering flow. It exists to help customers browse the range online and then visit, WhatsApp, or call the physical shop.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (subtle scroll-in fades only, respects `prefers-reduced-motion`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Notes

- **WhatsApp/phone numbers are not set yet.** `src/lib/site-config.ts` has `contact.whatsapp` and `contact.phone` as empty strings with a `TODO` comment. Until they're filled in, every "WhatsApp Us" / call CTA falls back to the in-page Visit Our Store section (`src/lib/contact.ts`) instead of shipping a broken or fake link. Fill these in before launch.
- Business details (name, address, hours, brands) live in `src/lib/site-config.ts`.
- Product/category data lives in `src/lib/products.ts` — the current entries are generic placeholders (neutral descriptions, no pricing) structured for easy editing once a real product list is available. Swap `ImagePlaceholder` usages for `next/image` once real product/category photos exist.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain before deploying — it feeds canonical URLs, Open Graph tags, and the sitemap/robots files.
- The Visit Our Store section embeds Google Maps via `output=embed` (no API key needed).
