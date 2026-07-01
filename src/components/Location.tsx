import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/maps";
import { whatsappUrl } from "@/lib/contact";

export default function Location() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="scroll-mt-20 mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="visit-heading"
        className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        Visit Our Store
      </h2>
      <p className="mt-2 max-w-xl text-ink-soft">
        Come see the range in person — our team is happy to help you find the
        right fit.
      </p>

      <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-lg border border-line lg:grid-cols-2">
        <Reveal className="h-72 lg:h-auto">
          <iframe
            title={`Map showing ${siteConfig.name} at ${siteConfig.business.mapsQuery}`}
            src={mapsEmbedUrl(siteConfig.business.mapsQuery)}
            className="h-full w-full"
            style={{ border: 0, minHeight: "18rem" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-5 bg-panel p-8 sm:p-10">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                {siteConfig.name}
              </h3>
              <p className="mt-2 text-ink-soft">
                {siteConfig.business.streetAddress},{" "}
                {siteConfig.business.addressLocality},{" "}
                {siteConfig.business.addressRegion}
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-ink">Opening Hours</dt>
                <dd className="text-ink-soft">
                  {siteConfig.business.hours.label}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Parking</dt>
                <dd className="text-ink-soft">
                  {siteConfig.business.parkingNote}
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-3">
              <a
                href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Find Store
              </a>
              <a
                href={mapsDirectionsUrl(siteConfig.business.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-line px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get Directions
              </a>
              <a
                href={whatsappUrl()}
                target={whatsappUrl().startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-line px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
