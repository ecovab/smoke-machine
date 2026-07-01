export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "devices",
    name: "Devices",
    description: "The latest vape devices and mods.",
  },
  {
    slug: "e-liquids",
    name: "E-Liquids",
    description: "A curated range of e-liquid flavours.",
  },
  {
    slug: "pods-coils",
    name: "Pods & Coils",
    description: "Replacement pods and coils to keep your setup running.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Chargers, cases, drip tips and more.",
  },
];

export const products: Product[] = [
  {
    id: "oxva-xlim-pro",
    name: "OXVA Xlim Pro Pod Kit",
    brand: "OXVA",
    category: "devices",
    description: "A compact pod mod kit suited to everyday use.",
    featured: true,
  },
  {
    id: "vaporesso-xros",
    name: "Vaporesso XROS Pod Kit",
    brand: "Vaporesso",
    category: "devices",
    description:
      "An easy-to-use pod system popular with newcomers and experienced vapers alike.",
  },
  {
    id: "airscream-airspro",
    name: "Airscream AirsPro Device",
    brand: "Airscream",
    category: "devices",
    description: "A straightforward device built around the Airscream pod range.",
  },
  {
    id: "fruit-blend-eliquid",
    name: "Fruit Blend E-Liquid",
    brand: "Assorted Brands",
    category: "e-liquids",
    description: "A selection of fruit-forward e-liquid flavours.",
    featured: true,
  },
  {
    id: "menthol-eliquid",
    name: "Menthol E-Liquid",
    brand: "Assorted Brands",
    category: "e-liquids",
    description: "Cool, refreshing menthol options in various strengths.",
  },
  {
    id: "dessert-blend-eliquid",
    name: "Dessert Blend E-Liquid",
    brand: "Assorted Brands",
    category: "e-liquids",
    description: "Sweet, dessert-inspired e-liquid flavours.",
  },
  {
    id: "oxva-pods",
    name: "OXVA Replacement Pods",
    brand: "OXVA",
    category: "pods-coils",
    description: "Replacement pods sized for OXVA device ranges.",
    featured: true,
  },
  {
    id: "vaporesso-coils",
    name: "Vaporesso Coil Heads",
    brand: "Vaporesso",
    category: "pods-coils",
    description: "Replacement coils for a range of Vaporesso devices.",
  },
  {
    id: "airscream-cartridges",
    name: "Airscream Pod Cartridges",
    brand: "Airscream",
    category: "pods-coils",
    description: "Pre-filled and refillable pod cartridges for Airscream devices.",
  },
  {
    id: "usb-c-cables",
    name: "USB-C Charging Cables",
    brand: "Assorted Brands",
    category: "accessories",
    description: "Replacement charging cables for common device types.",
    featured: true,
  },
  {
    id: "cases-lanyards",
    name: "Device Cases & Lanyards",
    brand: "Assorted Brands",
    category: "accessories",
    description: "Protective cases and carry lanyards for everyday use.",
  },
  {
    id: "drip-tips",
    name: "Drip Tips",
    brand: "Assorted Brands",
    category: "accessories",
    description: "A selection of replacement drip tips.",
  },
];

export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export const featuredProducts: Product[] = products.filter((p) => p.featured);
