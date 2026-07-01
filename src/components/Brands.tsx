import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Brands() {
  return (
    <section
      id="brands"
      aria-labelledby="brands-heading"
      className="relative bg-slate py-28 sm:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="mb-5 text-xs font-medium tracking-[0.4em] text-ice">
            CURATED SELECTION
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="brands-heading"
            className="font-display text-4xl font-medium text-platinum sm:text-5xl"
          >
            Trusted Brands
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone">
            We carry the industry&apos;s most respected names, so every
            device and e-liquid on our shelves meets a considered standard.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 border-y border-hairline py-10">
            {siteConfig.brands.map((brand) => (
              <span
                key={brand.name}
                className="font-display text-2xl tracking-wide text-platinum/90 transition-colors duration-500 hover:text-ice sm:text-3xl"
              >
                {brand.name}
              </span>
            ))}
            <span className="text-sm italic text-stone-dim">&amp; more</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
