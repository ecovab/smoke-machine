"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappHref = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi, my name is ${name || "..."}. ${message || "I'd like to know more about The Smoke Machine Express."}`
  )}`;

  return (
    <section id="contact" className="relative bg-charcoal-950 py-32 sm:py-40">
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6">
        <SectionHeading
          align="center"
          eyebrow="Get In Touch"
          title="Prefer to reach out first?"
          description="Send us a message on WhatsApp, or give us a call. We're happy to answer questions before your visit."
        />

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md sm:p-10"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-smoke-400">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-smoke-400/60 outline-none transition-colors focus:border-amber-400/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-smoke-400">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              rows={4}
              className="resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-smoke-400/60 outline-none transition-colors focus:border-amber-400/50"
            />
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary" className="flex-1">
              Send via WhatsApp
            </Button>
            <Button href={BRAND.contact.phoneHref} variant="ghost" className="flex-1">
              {BRAND.contact.phoneDisplay}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
