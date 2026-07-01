export const BRAND = {
  name: "The Smoke Machine Express",
  shortName: "Smoke Machine Express",
  tagline: "A premium vapour experience, rooted in Paarl.",
  location: {
    city: "Paarl",
    province: "Western Cape",
    country: "South Africa",
    addressLine: "Lady Grey Street, Paarl, 7646",
    mapEmbedSrc:
      "https://www.google.com/maps?q=Paarl,+Western+Cape,+South+Africa&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Paarl,+Western+Cape,+South+Africa",
  },
  contact: {
    whatsappNumber: "27000000000",
    whatsappMessage: "Hi, I'd like to know more about The Smoke Machine Express.",
    phoneDisplay: "+27 00 000 0000",
    phoneHref: "tel:+27000000000",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  hours: [
    { day: "Monday – Friday", time: "09:00 – 18:00" },
    { day: "Saturday", time: "09:00 – 15:00" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const WHATSAPP_URL = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
  BRAND.contact.whatsappMessage
)}`;

export const BRAND_VALUES = [
  {
    title: "Premium Service",
    description:
      "Every visit is treated as a personal consultation, not a transaction.",
  },
  {
    title: "Trust & Reliability",
    description:
      "A name the Paarl community has come to know and depend on.",
  },
  {
    title: "Local Presence",
    description:
      "Rooted in the community, part of the everyday rhythm of Paarl.",
  },
  {
    title: "Professional Retail",
    description:
      "A clean, considered space built around comfort and clarity.",
  },
  {
    title: "Customer-First",
    description:
      "Knowledgeable staff who listen first and guide with honesty.",
  },
] as const;

export const HERO_STAGES = {
  mystery: 0,
  emergence: 0.25,
  immersion: 0.5,
  dissolve: 0.75,
  end: 1,
} as const;
