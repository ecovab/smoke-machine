"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl } from "@/lib/maps";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#brands", label: "Brands" },
  { href: "#location", label: "Location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass-panel border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.28em] text-fog sm:text-base"
        >
          SMOKE MACHINE <span className="text-neon-cyan">EXPRESS</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-mist transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-5 py-2 text-sm font-medium text-neon-cyan transition-colors hover:bg-neon-cyan/20 md:inline-flex"
        >
          Get Directions
        </a>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 p-2 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-fog transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-fog transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="glass-panel border-t border-white/10 px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-fog"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-5 py-2 text-sm font-medium text-neon-cyan"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
