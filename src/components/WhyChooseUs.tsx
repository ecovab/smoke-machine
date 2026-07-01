import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

const ITEMS = [
  {
    title: "Prime Location",
    detail: "Centrepoint, Paarl",
    icon: (
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Open Daily",
    detail: siteConfig.business.hours.label,
    icon: (
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.2 2"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Trusted Products",
    detail: "Leading vape brands",
    icon: (
      <path
        d="m12 2 2.6 5.9 6.4.6-4.9 4.3L17.5 19 12 15.8 6.5 19l1.4-6.2L3 8.5l6.4-.6L12 2Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Premium Service",
    detail: "Local customer favourite",
    icon: (
      <path
        d="M12 20.6c-4-2.6-8-5.6-8-9.9A4.7 4.7 0 0 1 12 7.4a4.7 4.7 0 0 1 8 3.3c0 4.3-4 7.3-8 9.9Z"
        strokeWidth="1.5"
      />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative bg-graphite-950 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 font-mono text-xs tracking-[0.4em] text-neon-cyan/80">
              THE DIFFERENCE
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="why-choose-heading"
              className="font-display text-4xl font-bold text-fog sm:text-5xl"
            >
              Why Customers Choose Us
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.08}>
              <div className="glass-panel flex h-full flex-col items-center gap-4 rounded-2xl px-6 py-10 text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-9 w-9 text-neon-violet"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
                <h3 className="font-display text-lg font-semibold text-fog">
                  {item.title}
                </h3>
                <p className="text-sm text-mist">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
