export default function AgeNotice() {
  return (
    <section
      aria-label="Age restriction notice"
      className="border-y border-line bg-mist"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-6 py-5 text-center sm:px-8">
        <p className="text-sm font-semibold text-ink">18+ Only</p>
        <p className="text-sm text-ink-soft">
          Vaping products are for adults 18 years and older. We sell and
          promote responsibly — please have valid ID ready in-store.
        </p>
      </div>
    </section>
  );
}
