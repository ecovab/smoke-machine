import type { Metadata } from "next";
import "@/styles/globals.css";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name} | Premium Vapour, Paarl`,
  description:
    "The Smoke Machine Express is a premium vapour destination in Paarl, Western Cape — a trusted local name built on quality service and community presence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
