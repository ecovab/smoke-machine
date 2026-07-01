import { siteConfig } from "@/lib/site-config";

export const hasWhatsapp = siteConfig.contact.whatsapp.length > 0;
export const hasPhone = siteConfig.contact.phone.length > 0;

/** Falls back to the in-page store location section until a real number is set. */
export function whatsappUrl(message: string = siteConfig.contact.whatsappMessage): string {
  if (!hasWhatsapp) return "#visit";
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Falls back to the in-page store location section until a real number is set. */
export function phoneUrl(): string {
  if (!hasPhone) return "#visit";
  return `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
}
