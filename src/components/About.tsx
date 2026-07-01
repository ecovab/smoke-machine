import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-void py-28 sm:py-36"
    >
      <div
        className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-neon-violet/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.4em] text-neon-cyan/80">
            OUR STORY
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="about-heading"
            className="font-display text-4xl font-bold text-fog sm:text-5xl"
          >
            About Smoke Machine Express
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist">
            Nestled in Centrepoint, Paarl, Smoke Machine Express has become a
            trusted name among vaping enthusiasts across the Western Cape.
            What started as a passion for quality vapour has grown into a
            destination built on knowledgeable staff, genuine care, and an
            uncompromising standard for the products we carry.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Every device, e-liquid, and accessory on our shelves is chosen
            for quality and performance. Our team takes the time to
            understand what each customer needs, offering honest, expert
            advice rather than a sales pitch. It&apos;s this combination of
            premium brands, real expertise, and friendly service — in a
            convenient, central location — that keeps Paarl coming back.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
