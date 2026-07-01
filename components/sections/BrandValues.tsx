"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { BRAND_VALUES } from "@/lib/constants";

export function BrandValues() {
  return (
    <section id="values" className="relative bg-charcoal-900 py-32 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          align="center"
          eyebrow="What We Stand For"
          title="Values that shape every visit."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BRAND_VALUES.map((value) => (
            <GlassCard key={value.title}>
              <h3 className="mb-3 text-lg font-medium text-white">{value.title}</h3>
              <p className="text-sm leading-relaxed text-smoke-300">{value.description}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
