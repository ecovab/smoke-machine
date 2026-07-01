"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MOMENTS = [
  {
    title: "The Welcome",
    description:
      "Walk in and you're greeted, not sold to. A calm, considered space designed to put you at ease.",
  },
  {
    title: "The Conversation",
    description:
      "Our team listens first. Every recommendation comes from genuine knowledge, not a script.",
  },
  {
    title: "The Trust",
    description:
      "Leave knowing you were looked after by people who care about getting it right — every time.",
  },
];

export function VisitExperience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-charcoal-900 py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          align="center"
          eyebrow="The Visit"
          title="What it feels like to walk in."
          description="No pressure. No clutter. Just a premium, welcoming space run by people who know it well."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-12 sm:grid-cols-3"
        >
          {MOMENTS.map((moment, i) => (
            <motion.div key={moment.title} variants={fadeUp} className="flex flex-col gap-4">
              <span className="text-sm text-amber-400/80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-medium text-white">{moment.title}</h3>
              <p className="text-sm leading-relaxed text-smoke-300">{moment.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
