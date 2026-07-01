# Smoke Machine Express

Cinematic brand website for Smoke Machine Express — a premium vape retailer at Centrepoint, Paarl, Western Cape. This is a brand/marketing site, not an online store: no prices, cart, or checkout.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, hero transitions)
- Three.js via `@react-three/fiber` / `@react-three/drei` (hero 3D device + particles)
- Lenis (smooth scrolling, disabled when `prefers-reduced-motion` is set)

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

- Business details (name, address, hours, brands) live in `src/lib/site-config.ts` — update there.
- No phone number or email was provided for the business, so contact CTAs currently link to Google Maps directions/the location section. Add real contact details to `site-config.ts` and the relevant components once available.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain before deploying — it feeds canonical URLs, Open Graph tags, and the sitemap/robots files.
- The location section embeds Google Maps via `output=embed` (no API key needed).
