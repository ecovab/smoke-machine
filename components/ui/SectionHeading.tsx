"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-5 ${alignment}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="text-xs uppercase tracking-widest2 text-amber-400/80"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-balance text-4xl font-medium leading-[1.1] text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-balance text-base leading-relaxed text-smoke-300 sm:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
