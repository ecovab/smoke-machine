"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl } from "@/lib/maps";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Smoke Machine Express — Paarl's Premium Vape Destination"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-0 top-2/3 h-[26rem] w-[26rem] rounded-full bg-neon-violet/20 blur-[110px] animate-smoke-drift" />
        <div className="absolute left-0 bottom-0 h-[22rem] w-[22rem] rounded-full bg-neon-magenta/10 blur-[100px] animate-smoke-drift-slow" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-mono text-xs tracking-[0.4em] text-neon-cyan/80"
          >
            CENTREPOINT · PAARL · WESTERN CAPE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-fog text-glow-cyan sm:text-6xl lg:text-7xl"
          >
            SMOKE MACHINE
            <br />
            EXPRESS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-md font-display text-xl text-mist lg:mx-0 sm:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-4 max-w-md text-base text-mist/80 lg:mx-0"
          >
            Leading brands. Expert advice. A premium experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row lg:mx-0"
          >
            <a
              href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neon-cyan px-8 py-3.5 text-sm font-semibold tracking-wide text-void shadow-[0_0_40px_rgba(46,230,255,0.35)] transition-transform hover:scale-[1.03]"
            >
              Visit Us Today
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-fog backdrop-blur transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              Find Our Store
            </a>
          </motion.div>
        </div>

        <div
          className="order-1 h-[380px] w-full sm:h-[460px] lg:order-2 lg:h-[620px]"
          aria-hidden="true"
        >
          {!prefersReducedMotion ? (
            <HeroScene />
          ) : (
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="h-56 w-32 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-graphite-800 to-graphite-950 shadow-[0_0_80px_rgba(46,230,255,0.25)]" />
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist/60 sm:flex">
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-neon-cyan to-transparent" />
      </div>
    </section>
  );
}
