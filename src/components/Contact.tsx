import { siteConfig } from "@/lib/site-config";
import { hasPhone, phoneUrl, whatsappUrl } from "@/lib/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-y border-line bg-mist"
    >
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 sm:py-20">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Get In Touch
        </h2>
        <p className="mt-2 text-ink-soft">
          The fastest way to reach us — message or call and we&apos;ll help
          you out.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl()}
            target={whatsappUrl().startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark sm:w-auto"
          >
            WhatsApp Us
          </a>
          <a
            href={phoneUrl()}
            className="inline-flex w-full items-center justify-center rounded-md border border-line bg-panel px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            {hasPhone ? `Call ${siteConfig.contact.phone}` : "Call Us"}
          </a>
          {siteConfig.contact.instagram && (
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md border border-line bg-panel px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
