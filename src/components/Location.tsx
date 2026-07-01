import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/maps";

export default function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="relative bg-void py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 font-mono text-xs tracking-[0.4em] text-neon-cyan/80">
              FIND US
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="location-heading"
              className="font-display text-4xl font-bold text-fog sm:text-5xl"
            >
              Visit Us in Paarl
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-2">
          <Reveal className="h-72 lg:h-auto">
            <iframe
              title={`Map showing ${siteConfig.name} at ${siteConfig.business.mapsQuery}`}
              src={mapsEmbedUrl(siteConfig.business.mapsQuery)}
              className="h-full w-full grayscale-[35%] contrast-125"
              style={{ border: 0, minHeight: "18rem" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel flex h-full flex-col justify-center gap-6 p-8 sm:p-10">
              <div>
                <h3 className="font-display text-2xl font-semibold text-fog">
                  {siteConfig.name}
                </h3>
                <p className="mt-2 text-mist">
                  {siteConfig.business.streetAddress},{" "}
                  {siteConfig.business.addressLocality},{" "}
                  {siteConfig.business.addressRegion}
                </p>
              </div>

              <p className="text-sm tracking-wide text-neon-cyan">
                Easy parking &middot; Central location &middot; Open daily{" "}
                {siteConfig.business.hours.label.replace("Daily", "")}
              </p>

              <a
                href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-neon-cyan px-7 py-3 text-sm font-semibold text-void shadow-[0_0_30px_rgba(46,230,255,0.3)] transition-transform hover:scale-[1.03]"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
