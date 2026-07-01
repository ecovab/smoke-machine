import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm tracking-widest2 uppercase text-white">{BRAND.shortName}</p>
          <p className="mt-1 text-xs text-smoke-400">
            {BRAND.location.city}, {BRAND.location.province}, {BRAND.location.country}
          </p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-widest2 text-smoke-400">
          <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-400">
            Instagram
          </a>
          <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-400">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
