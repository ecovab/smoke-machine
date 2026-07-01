export const siteConfig = {
  name: "Smoke Machine",
  shortName: "Smoke Machine",
  tagline: "Vape Shop",
  subTagline: "Explore vape devices, e-liquids & accessories — available in-store.",
  description:
    "Smoke Machine is a local vape shop at Centrepoint, Paarl, Western Cape. Browse devices, e-liquids, pods, coils and accessories from Airscream, OXVA and Vaporesso, then visit us in-store. Open daily 09:00-22:00.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smokemachine.co.za",
  locale: "en_ZA",

  // TODO: WhatsApp and phone numbers have not been provided yet.
  // Fill these in before launch — CTAs fall back to the store location
  // section until real numbers are set.
  contact: {
    whatsapp: "", // digits only, with country code, e.g. "27821234567"
    whatsappMessage: "Hi! I'd like to ask about a product at Smoke Machine.",
    phone: "", // e.g. "+27 21 123 4567"
    instagram: "", // e.g. "https://instagram.com/smokemachine"
  },

  business: {
    legalName: "Smoke Machine",
    streetAddress: "Centrepoint",
    addressLocality: "Paarl",
    addressRegion: "Western Cape",
    postalCode: "7646",
    addressCountry: "ZA",
    areaServed: ["Paarl", "Western Cape", "Wellington", "Wellington Road", "Boland"],
    hours: {
      opens: "09:00",
      closes: "22:00",
      label: "09:00 – 22:00 Daily",
    },
    parkingNote: "Convenient on-site parking and easy street-level access at Centrepoint.",
    mapsQuery: "Centrepoint, Paarl, Western Cape, South Africa",
  },

  brands: [
    { name: "Airscream" },
    { name: "OXVA" },
    { name: "Vaporesso" },
  ],

  keywords: [
    "Smoke Machine",
    "vape shop near me",
    "vape store Paarl",
    "vape shop Paarl",
    "e-liquids Paarl",
    "vape shop Western Cape",
    "Centrepoint Paarl",
    "Vaporesso Paarl",
    "OXVA Paarl",
    "Airscream Paarl",
    "vape accessories Paarl",
    "vape devices Paarl",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
