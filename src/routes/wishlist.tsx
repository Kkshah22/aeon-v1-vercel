import { createFileRoute, Link } from "@tanstack/react-router";
import { useWishlist } from "@/lib/wishlist";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — AEON" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  const { slugs } = useWishlist();
  const items = products.filter((p) => slugs.includes(p.slug));
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
        <h1 className="font-display text-4xl lg:text-5xl mb-10">Wishlist</h1>
        {items.length === 0 ? (
          <div className="border border-border p-12 text-center">
            <p className="font-display text-2xl mb-3">Your wishlist is empty.</p>
            <Link to="/shop" className="editorial-link eyebrow">Explore</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {items.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </div>
    </>
  );
}
