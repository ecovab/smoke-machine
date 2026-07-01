"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative overflow-hidden bg-charcoal-950 py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="Who We Are"
          title="A premium vapour destination, built on reputation."
          description="The Smoke Machine Express has become a trusted name in Paarl — known not for volume, but for the quality of every interaction."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-3"
        >
          {[
            {
              stat: "Local",
              label: "Rooted in the Paarl community, not a franchise formula.",
            },
            {
              stat: "Trusted",
              label: "A reputation built over years of consistent, honest service.",
            },
            {
              stat: "Considered",
              label: "A calm, modern space designed around the visitor, not the shelf.",
            },
          ].map((item) => (
            <motion.div key={item.stat} variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-2xl font-light text-amber-400">{item.stat}</span>
              <p className="text-sm leading-relaxed text-smoke-300">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
