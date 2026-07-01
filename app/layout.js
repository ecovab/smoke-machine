import "./globals.css";

export const metadata = {
  title: "Smoke Machine — Premium Vape & Airscream Showcase",
  description:
    "Curated hardware, e-liquids and the exclusive Airscream collection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
