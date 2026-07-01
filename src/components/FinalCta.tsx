import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl } from "@/lib/maps";
import Dust from "@/components/Dust";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="photo-placeholder relative overflow-hidden py-32 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_50%,transparent_30%,rgba(11,9,6,0.8)_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/10 animate-breathe" />
        <div className="absolute inset-0 grain-overlay" />
        <Dust />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <h2
            id="final-cta-heading"
            className="font-display text-warm-glow text-4xl font-medium text-parchment sm:text-5xl"
          >
            Experience the <span className="italic text-brass-bright">Difference</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-xl text-lg text-stone">
            Visit Smoke Machine Express and discover Paarl&apos;s premium
            vape destination.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brass px-9 py-3.5 text-xs font-semibold tracking-[0.18em] text-ink transition-colors duration-500 hover:bg-brass-bright"
            >
              VISIT TODAY
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-sm border border-hairline px-9 py-3.5 text-xs font-semibold tracking-[0.18em] text-parchment transition-colors duration-500 hover:border-brass hover:text-brass"
            >
              CONTACT US
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
