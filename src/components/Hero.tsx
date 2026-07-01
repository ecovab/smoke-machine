"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl } from "@/lib/maps";
import Dust from "@/components/Dust";

const LUXE_EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Smoke Machine Express — Paarl's Premium Vape Destination"
      className="photo-placeholder relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Vignette + atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_35%,rgba(6,8,10,0.78)_100%)]" />
        <div className="absolute left-1/4 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/10 animate-breathe-slow" />
        <div className="absolute inset-0 grain-overlay" />
        <Dust />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: LUXE_EASE }}
          className="mb-7 text-xs font-medium tracking-[0.42em] text-ice"
        >
          CENTREPOINT · PAARL · WESTERN CAPE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.25, ease: LUXE_EASE }}
          className="font-display text-glow text-5xl font-medium leading-[1.08] tracking-tight text-platinum sm:text-6xl lg:text-7xl"
        >
          Smoke Machine
          <br />
          <span className="italic text-ice-bright">Express</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease: LUXE_EASE }}
          className="font-display mx-auto mt-8 max-w-lg text-xl italic text-stone sm:text-2xl"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.75, ease: LUXE_EASE }}
          className="mx-auto mt-5 max-w-md text-base leading-relaxed text-stone-dim"
        >
          Leading brands, unhurried advice, and a space built for taking your
          time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.95, ease: LUXE_EASE }}
          className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-ice px-9 py-3.5 text-xs font-semibold tracking-[0.18em] text-ink transition-colors duration-500 hover:bg-ice-bright"
          >
            VISIT US TODAY
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center rounded-sm border border-hairline px-9 py-3.5 text-xs font-semibold tracking-[0.18em] text-platinum transition-colors duration-500 hover:border-ice hover:text-ice"
          >
            FIND OUR STORE
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-stone-dim sm:flex"
      >
        <span className="text-[10px] tracking-[0.35em]">SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-ice/70 to-transparent" />
      </motion.div>
    </section>
  );
}
