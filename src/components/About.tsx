export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="about-heading"
        className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        About Smoke Machine
      </h2>

      <div className="mt-5 space-y-4 text-ink-soft">
        <p>
          Smoke Machine is a local vape shop at Centrepoint in Paarl. We
          stock devices, e-liquids, pods and coils, and accessories from
          brands including Airscream, OXVA and Vaporesso.
        </p>
        <p>
          We&apos;re a small team that knows the products we sell. If
          you&apos;re not sure what you need, come in and talk to us —
          we&apos;d rather point you to the right device than the most
          expensive one.
        </p>
        <p>
          This site is here to help you see what we carry before you visit.
          Everything on it is available to view and buy in-store.
        </p>
      </div>
    </section>
  );
}
