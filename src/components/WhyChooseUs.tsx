import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

const ITEMS = [
  { title: "Prime Location", detail: "Centrepoint, Paarl" },
  { title: "Open Daily", detail: siteConfig.business.hours.label },
  { title: "Trusted Products", detail: "Leading vape brands" },
  { title: "Premium Service", detail: "Local customer favourite" },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative bg-charcoal py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-5 text-xs font-medium tracking-[0.4em] text-ice">
              THE DIFFERENCE
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="why-choose-heading"
              className="font-display text-4xl font-medium text-platinum sm:text-5xl"
            >
              Why Customers Choose Us
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.1}>
              <div
                className={`flex h-full flex-col gap-3 border-b border-hairline px-6 py-10 sm:border-b-0 ${
                  i === 0 ? "sm:border-l-0" : "sm:border-l"
                } sm:border-hairline`}
              >
                <span className="text-[11px] font-medium tracking-[0.25em] text-ice">
                  {item.title.toUpperCase()}
                </span>
                <span className="font-display text-xl text-platinum">
                  {item.detail}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
