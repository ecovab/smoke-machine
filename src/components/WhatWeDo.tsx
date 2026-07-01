import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    number: "01",
    title: "Premium Vape Devices",
    description: "The latest devices from trusted global brands.",
  },
  {
    number: "02",
    title: "Quality E-Liquids",
    description: "A wide selection of premium e-liquid options.",
  },
  {
    number: "03",
    title: "Accessories & Coils",
    description:
      "Everything needed to keep your device performing at its best.",
  },
  {
    number: "04",
    title: "Expert Advice",
    description: "Helping customers choose the right setup for their needs.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="craft"
      aria-labelledby="craft-heading"
      className="relative bg-charcoal py-28 sm:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <p className="mb-5 text-xs font-medium tracking-[0.4em] text-ice">
            OUR EXPERTISE
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="craft-heading"
            className="font-display text-4xl font-medium text-platinum sm:text-5xl"
          >
            What We Do
          </h2>
        </Reveal>

        <ul className="mt-16 border-t border-hairline">
          {ITEMS.map((item, i) => (
            <Reveal key={item.number} as="li" delay={i * 0.12}>
              <div className="group flex flex-col gap-2 border-b border-hairline py-8 sm:flex-row sm:items-baseline sm:gap-8 sm:py-10">
                <span className="font-display text-sm text-stone-dim transition-colors duration-500 group-hover:text-ice sm:w-12 sm:flex-none">
                  {item.number}
                </span>
                <h3 className="font-display flex-none text-2xl font-medium text-platinum sm:w-80">
                  {item.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-stone">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
