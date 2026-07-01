import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/maps";

export default function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative bg-ink py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-5 text-xs font-medium tracking-[0.4em] text-ice">
              FIND US
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="location-heading"
              className="font-display text-4xl font-medium text-platinum sm:text-5xl"
            >
              Visit Us in Paarl
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 overflow-hidden rounded-sm border border-hairline lg:grid-cols-2">
          <Reveal className="h-72 lg:h-auto">
            <iframe
              title={`Map showing ${siteConfig.name} at ${siteConfig.business.mapsQuery}`}
              src={mapsEmbedUrl(siteConfig.business.mapsQuery)}
              className="h-full w-full opacity-90 grayscale sepia hue-rotate-180 contrast-125"
              style={{ border: 0, minHeight: "18rem" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-panel flex h-full flex-col justify-center gap-7 p-8 sm:p-12">
              <div>
                <h3 className="font-display text-2xl font-medium text-platinum">
                  {siteConfig.name}
                </h3>
                <p className="mt-3 text-stone">
                  {siteConfig.business.streetAddress},{" "}
                  {siteConfig.business.addressLocality},{" "}
                  {siteConfig.business.addressRegion}
                </p>
              </div>

              <p className="text-sm tracking-wide text-stone-dim">
                Easy parking · Central location · Open daily{" "}
                {siteConfig.business.hours.label.replace(" Daily", "")}
              </p>

              <a
                href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-sm bg-ice px-7 py-3 text-xs font-semibold tracking-[0.18em] text-ink transition-colors duration-500 hover:bg-ice-bright"
              >
                GET DIRECTIONS
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
