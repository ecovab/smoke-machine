"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { BRAND } from "@/lib/constants";

type HeroOverlayProps = {
  progress: MotionValue<number>;
};

export function HeroOverlay({ progress }: HeroOverlayProps) {
  const titleOpacity = useTransform(progress, [0, 0.32, 0.46], [1, 1, 0]);

  const midOpacity = useTransform(progress, [0.34, 0.48, 0.62, 0.74], [0, 1, 1, 0]);
  const midY = useTransform(progress, [0.34, 0.48], [24, 0]);

  const cueOpacity = useTransform(progress, [0, 0.06], [1, 0]);
  const vignette = useTransform(progress, [0, 0.5, 1], [0.55, 0.25, 0.75]);

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6">
      <motion.div
        style={{ opacity: vignette }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)]"
      />

      <motion.div style={{ opacity: titleOpacity }} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <span className="text-[11px] uppercase tracking-widest2 text-amber-400/80">
            Paarl, Western Cape
          </span>
          <h1 className="text-balance text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {BRAND.name}
          </h1>
          <p className="max-w-md text-balance text-sm text-smoke-300 sm:text-base">
            {BRAND.tagline}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: midOpacity, y: midY }}
        className="absolute z-10 flex max-w-xl flex-col items-center gap-4 px-6 text-center"
      >
        <h2 className="text-balance text-3xl font-light leading-tight text-white sm:text-5xl">
          A space built on trust, craft, and community.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-widest2 text-smoke-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-amber-400/70 to-transparent"
        />
      </motion.div>
    </div>
  );
}
