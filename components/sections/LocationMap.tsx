"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";

export function LocationMap() {
  return (
    <section id="location" className="relative bg-charcoal-950 py-32 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find us in the heart of Paarl."
          description="Step away from the screen and into the space. We're always happy to welcome you in person."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-3"
          >
            <iframe
              title="The Smoke Machine Express location"
              src={BRAND.location.mapEmbedSrc}
              className="h-[360px] w-full grayscale invert-[0.92] contrast-[1.1] sm:h-[440px] lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md lg:col-span-2"
          >
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest2 text-amber-400/80">Address</span>
                <p className="mt-2 text-lg text-white">{BRAND.location.addressLine}</p>
                <p className="text-sm text-smoke-400">
                  {BRAND.location.city}, {BRAND.location.province}, {BRAND.location.country}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest2 text-amber-400/80">Hours</span>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {BRAND.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm text-smoke-300">
                      <span>{h.day}</span>
                      <span className="text-smoke-200">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button href={BRAND.location.directionsUrl} target="_blank" rel="noopener noreferrer" variant="primary">
                Get Directions
              </Button>
              <div className="flex gap-3">
                <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="ghost" className="flex-1">
                  WhatsApp
                </Button>
                <Button href={BRAND.contact.phoneHref} variant="ghost" className="flex-1">
                  Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
