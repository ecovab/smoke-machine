import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 text-center sm:px-8">
        <p className="text-base font-semibold text-ink">Smoke Machine</p>
        <p className="text-sm text-ink-soft">
          {siteConfig.business.streetAddress},{" "}
          {siteConfig.business.addressLocality},{" "}
          {siteConfig.business.addressRegion} &middot; Open daily{" "}
          {siteConfig.business.hours.label.replace(" Daily", "")}
        </p>
        <p className="text-xs text-ink-faint">
          18+ only. Vaping products contain nicotine, an addictive chemical.
        </p>
        <p className="text-xs text-ink-faint">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
