export const siteConfig = {
  name: "Smoke Machine Express",
  shortName: "Smoke Machine Express",
  tagline: "Paarl's Premium Vape Destination",
  description:
    "Smoke Machine Express is Paarl's premium vape destination at Centrepoint, Western Cape. Leading brands including Airscream, OXVA and Vaporesso, expert advice, and a premium in-store experience. Open daily 09:00-22:00.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smokemachineexpress.co.za",
  locale: "en_ZA",

  business: {
    legalName: "Smoke Machine Express",
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
    mapsQuery: "Centrepoint, Paarl, Western Cape, South Africa",
  },

  brands: [
    { name: "Airscream" },
    { name: "OXVA" },
    { name: "Vaporesso" },
  ],

  keywords: [
    "Smoke Machine Express",
    "vape shop Paarl",
    "vape store Paarl",
    "vape shop near me",
    "vape shop Western Cape",
    "Centrepoint Paarl",
    "Vaporesso Paarl",
    "OXVA Paarl",
    "Airscream Paarl",
    "vape accessories Paarl",
    "premium vape devices Paarl",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
