import { whatsappUrl } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Smoke Machine Vape Shop"
      className="relative overflow-hidden border-b border-line bg-mist"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Smoke Machine Vape Shop
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
          Explore vape devices, e-liquids &amp; accessories — available
          in-store.
        </p>

        <div className="mx-auto mt-9 flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#categories"
            className="inline-flex w-full items-center justify-center rounded-md bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark sm:w-auto"
          >
            Browse Range
          </a>
          <a
            href="#visit"
            className="inline-flex w-full items-center justify-center rounded-md border border-line bg-panel px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Find In Store
          </a>
          <a
            href={whatsappUrl()}
            target={whatsappUrl().startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md border border-line bg-panel px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
