import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-hover overflow-hidden rounded-lg border border-line bg-panel">
      <ImagePlaceholder label={product.name} className="aspect-[4/3] w-full" />
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
          {product.brand}
        </p>
        <h3 className="mt-1 text-base font-medium text-ink">{product.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <p className="mt-3 text-xs font-medium text-accent">Available in-store</p>
      </div>
    </article>
  );
}
