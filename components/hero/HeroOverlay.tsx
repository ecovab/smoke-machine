"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { BRAND } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

type HeroOverlayProps = {
  progress: MotionValue<number>;
};

export function HeroOverlay({ progress }: HeroOverlayProps) {
  const contentOpacity = useTransform(progress, [0, 0.62, 0.8], [1, 1, 0]);
  const cueOpacity = useTransform(progress, [0, 0.06], [1, 0]);
  const vignette = useTransform(progress, [0, 0.5, 1], [0.55, 0.25, 0.75]);

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6">
      <motion.div
        style={{ opacity: vignette }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)]"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 flex max-w-2xl flex-col items-center gap-6 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="text-[11px] uppercase tracking-widest2 text-amber-400/80"
        >
          Paarl, Western Cape
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-balance text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {BRAND.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="max-w-md text-balance text-lg font-light leading-relaxed text-smoke-200 sm:text-xl"
        >
          A space built on trust, craft, and community.
        </motion.p>
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
