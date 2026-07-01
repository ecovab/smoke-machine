import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/lib/products";

export default function Featured() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="featured-heading"
        className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        Popular In-Store
      </h2>
      <p className="mt-2 max-w-xl text-ink-soft">
        Commonly requested picks — a good starting point for what to ask our
        team about when you visit.
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product, i) => (
          <Reveal key={product.id} as="li" delay={i * 0.05}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
