"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl } from "@/lib/maps";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#craft", label: "Craft" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled ? "glass-panel border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm tracking-[0.3em] text-platinum sm:text-base"
        >
          SMOKE MACHINE <span className="italic text-ice">Express</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] text-stone transition-colors duration-500 hover:text-ice"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm border border-hairline px-5 py-2 text-xs tracking-[0.15em] text-platinum transition-colors duration-500 hover:border-ice hover:text-ice md:inline-flex"
        >
          GET DIRECTIONS
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
            className={`h-px w-6 bg-platinum transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-platinum transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="glass-panel border-t border-hairline px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-[0.1em] text-platinum"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
            <li>
              <a
                href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm border border-hairline px-5 py-2 text-xs tracking-[0.15em] text-platinum"
              >
                GET DIRECTIONS
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
