import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { useWishlist } from "@/lib/wishlist";
import { Heart } from "lucide-react";

export function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  const { toggle, has } = useWishlist();
  const wished = has(product.slug);

  return (
    <article className="group">
      <div className="product-image-wrap aspect-[4/5] mb-4 relative">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="block w-full h-full"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          )}
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(product.slug);
          }}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 size-9 inline-flex items-center justify-center bg-paper/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={`size-4 ${wished ? "fill-ink" : ""}`} />
        </button>
        {product.isNew && (
          <span className="absolute top-3 left-3 eyebrow text-[10px] bg-paper/90 px-2 py-1">New</span>
        )}
      </div>
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{formatPrice(product.priceCents)}</p>
      </Link>
    </article>
  );
}
