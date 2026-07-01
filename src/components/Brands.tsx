import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Brands() {
  return (
    <section
      id="brands"
      aria-labelledby="brands-heading"
      className="relative overflow-hidden bg-void py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-neon-magenta/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.4em] text-neon-cyan/80">
            CURATED SELECTION
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="brands-heading"
            className="font-display text-4xl font-bold text-fog sm:text-5xl"
          >
            Trusted Brands
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mist">
            We carry the vape industry&apos;s most respected names, so every
            device and e-liquid on our shelves meets a premium standard.
          </p>
        </Reveal>

        <ul className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3">
          {siteConfig.brands.map((brand, i) => (
            <Reveal key={brand.name} as="li" delay={i * 0.1}>
              <div
                className="glass-panel flex h-32 items-center justify-center rounded-2xl px-4 animate-float sm:h-36"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <span className="font-display text-xl font-semibold tracking-wide text-fog sm:text-2xl">
                  {brand.name}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={siteConfig.brands.length * 0.1}>
            <div
              className="glass-panel flex h-32 items-center justify-center rounded-2xl px-4 animate-float sm:h-36"
              style={{ animationDelay: `${siteConfig.brands.length * 0.6}s` }}
            >
              <span className="font-display text-lg font-semibold tracking-wide text-mist sm:text-xl">
                &amp; more
              </span>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
