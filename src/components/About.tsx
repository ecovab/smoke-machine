import Reveal from "@/components/Reveal";
import PhotoPanel from "@/components/PhotoPanel";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 -mt-16 rounded-t-[2.5rem] bg-slate pb-28 pt-24 sm:-mt-20 sm:rounded-t-[3.5rem] sm:pb-36 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <Reveal>
            <p className="mb-5 text-xs font-medium tracking-[0.4em] text-ice">
              OUR STORY
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="about-heading"
              className="font-display text-4xl font-medium leading-tight text-platinum sm:text-5xl"
            >
              A trusted room in the heart of Paarl.
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone">
              Nestled in Centrepoint, Smoke Machine Express has become a
              quiet fixture for vaping enthusiasts across the Western Cape —
              built not on volume, but on care: knowledgeable staff, a
              carefully chosen selection, and the patience to help you find
              what actually suits you.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">
              Every device, e-liquid, and accessory on our shelves earns its
              place. Our team takes the time to understand what you need,
              offering honest guidance rather than a sales pitch — the kind
              of service that turns a first visit into a standing habit.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <PhotoPanel
            className="aspect-[4/5] w-full"
            label="INTERIOR — CENTREPOINT, PAARL"
          />
        </Reveal>
      </div>
    </section>
  );
}
