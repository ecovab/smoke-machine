import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { categories, productsByCategory } from "@/lib/products";

export default function ProductShowcase() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="bg-mist py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2
          id="products-heading"
          className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Browse Our Range
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          A look at what&apos;s on our shelves. Everything shown here is
          available to see and try in-store.
        </p>

        <div className="mt-10 flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category.slug} id={category.slug} className="scroll-mt-20">
              <h3 className="text-lg font-semibold text-ink">{category.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{category.description}</p>

              <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {productsByCategory(category.slug).map((product, i) => (
                  <Reveal key={product.id} as="li" delay={i * 0.05}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
