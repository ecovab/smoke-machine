import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { categories } from "@/lib/products";

export default function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20"
    >
      <h2
        id="categories-heading"
        className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        Categories
      </h2>
      <p className="mt-2 max-w-xl text-ink-soft">
        Browse what we carry, then visit us in-store to see it in person.
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {categories.map((category, i) => (
          <Reveal key={category.slug} as="li" delay={i * 0.05}>
            <a
              href={`#${category.slug}`}
              className="card-hover block overflow-hidden rounded-lg border border-line bg-panel"
            >
              <ParallaxImage
                label={`${category.name} category`}
                className="aspect-square w-full"
              />
              <div className="p-4">
                <span className="text-base font-medium text-ink">
                  {category.name}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
