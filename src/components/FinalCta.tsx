import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl } from "@/lib/maps";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-graphite-950 py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/15 blur-[150px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2
            id="final-cta-heading"
            className="font-display text-4xl font-bold text-fog text-glow-cyan sm:text-5xl"
          >
            Experience the Difference
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mist">
            Visit Smoke Machine Express and discover Paarl&apos;s premium
            vape destination.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neon-cyan px-8 py-3.5 text-sm font-semibold tracking-wide text-void shadow-[0_0_40px_rgba(46,230,255,0.35)] transition-transform hover:scale-[1.03]"
            >
              Visit Today
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-fog backdrop-blur transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
