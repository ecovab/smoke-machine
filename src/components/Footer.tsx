import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-void py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <p className="font-display text-sm font-semibold tracking-[0.28em] text-fog">
          SMOKE MACHINE <span className="text-neon-cyan">EXPRESS</span>
        </p>
        <p className="text-sm text-mist">
          {siteConfig.business.streetAddress},{" "}
          {siteConfig.business.addressLocality},{" "}
          {siteConfig.business.addressRegion} &middot; Open daily{" "}
          {siteConfig.business.hours.label.replace(" Daily", "")}
        </p>
        <p className="max-w-xl text-xs text-mist/60">
          For adults 18+. Vaping products contain nicotine, an addictive
          chemical.
        </p>
        <p className="text-xs text-mist/50">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
