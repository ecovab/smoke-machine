import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center sm:px-8">
        <p className="font-display text-sm tracking-[0.3em] text-platinum">
          SMOKE MACHINE <span className="italic text-ice">Express</span>
        </p>
        <p className="text-sm text-stone">
          {siteConfig.business.streetAddress},{" "}
          {siteConfig.business.addressLocality},{" "}
          {siteConfig.business.addressRegion} &middot; Open daily{" "}
          {siteConfig.business.hours.label.replace(" Daily", "")}
        </p>
        <p className="max-w-xl text-xs text-stone-dim">
          For adults 18+. Vaping products contain nicotine, an addictive
          chemical.
        </p>
        <p className="text-xs text-stone-dim/70">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
