import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    title: "Premium Vape Devices",
    description: "The latest devices from trusted global brands.",
    icon: (
      <path
        d="M9 2h6v3.2a3 3 0 0 1 1.5 2.6V20a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V7.8A3 3 0 0 1 9 5.2V2Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Quality E-Liquids",
    description: "A wide selection of premium e-liquid options.",
    icon: (
      <path
        d="M12 2c2.5 3.2 6 8 6 12a6 6 0 1 1-12 0c0-4 3.5-8.8 6-12Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Accessories & Coils",
    description: "Everything needed to keep your device performing at its best.",
    icon: (
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Expert Advice",
    description: "Helping customers choose the right setup for their needs.",
    icon: (
      <path
        d="M12 21c-4.97 0-9-3.36-9-7.5S7.03 6 12 6s9 3.36 9 7.5c0 1.4-.47 2.7-1.28 3.82.16.9.55 1.72 1.28 2.4-1.2.2-2.4-.04-3.4-.6A10.6 10.6 0 0 1 12 21Z"
        strokeWidth="1.5"
      />
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="relative bg-graphite-950 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 font-mono text-xs tracking-[0.4em] text-neon-cyan/80">
              OUR EXPERTISE
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="what-we-do-heading"
              className="font-display text-4xl font-bold text-fog sm:text-5xl"
            >
              What We Do
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.08}>
              <article className="group glass-panel relative h-full overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 sm:p-10">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon-cyan/0 blur-3xl transition-colors duration-500 group-hover:bg-neon-cyan/15"
                  aria-hidden="true"
                />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-10 w-10 text-neon-cyan"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
                <h3 className="mt-6 font-display text-xl font-semibold text-fog sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-mist">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
