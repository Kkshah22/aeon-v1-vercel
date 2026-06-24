import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products, formatPrice } from "@/lib/products";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { Heart, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product: product! };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — AEON` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — AEON` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.images[0] },
        ]
      : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <>
      <div className="py-32 text-center">
        <p className="font-display text-4xl mb-4">Not found.</p>
        <Link to="/shop" className="editorial-link eyebrow">Back to shop</Link>
      </div>
    </>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: import("@/lib/types").Product };
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  const wished = has(product.slug);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const addToCart = () => {
    add({
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      priceCents: product.priceCents,
      size,
      quantity: qty,
    });
    toast.success("Added to bag");
  };

  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-10 pb-24">
        <nav className="eyebrow text-muted-foreground mb-10">
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" search={{ category: product.category } as never} className="hover:text-ink">
            {product.categoryName}
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Images */}
          <div className="flex gap-4">
            <div className="hidden lg:flex flex-col gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-24 overflow-hidden border ${i === activeImg ? "border-ink" : "border-transparent"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div
              className="flex-1 product-image-wrap aspect-[4/5] cursor-zoom-in"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
              }}
              onMouseLeave={() => setZoom(null)}
            >
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300"
                style={zoom ? { transform: "scale(1.8)", transformOrigin: `${zoom.x}% ${zoom.y}%` } : {}}
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-muted-foreground mb-3">{product.categoryName}</p>
            <h1 className="font-display text-4xl lg:text-5xl mb-4">{product.name}</h1>
            <p className="text-xl mb-8">{formatPrice(product.priceCents)}</p>

            <p className="text-muted-foreground leading-relaxed mb-10">{product.description}</p>

            <div className="mb-8">
              <div className="flex justify-between eyebrow mb-3">
                <span>Size</span>
                <span className="text-muted-foreground normal-case tracking-normal">Size guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[3.5rem] h-12 px-4 text-xs uppercase tracking-[0.18em] border ${size === s ? "border-ink bg-ink text-paper" : "border-border hover:border-ink"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="eyebrow mb-3">Quantity</div>
              <div className="inline-flex items-center border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="size-12 inline-flex items-center justify-center" aria-label="Decrease">
                  <Minus className="size-4" />
                </button>
                <span className="w-12 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="size-12 inline-flex items-center justify-center" aria-label="Increase">
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <button onClick={addToCart} className="btn-ink w-full">Add to Bag</button>
              <button
                onClick={() => toggle(product.slug)}
                className="btn-ghost w-full inline-flex items-center justify-center gap-2"
              >
                <Heart className={`size-4 ${wished ? "fill-ink" : ""}`} />
                {wished ? "In wishlist" : "Add to wishlist"}
              </button>
            </div>

            <div className="border-t border-border divide-y divide-border">
              <Accordion title="Materials">
                <ul className="list-disc pl-5 space-y-1">
                  {product.materials.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </Accordion>
              <Accordion title="Care">
                <ul className="list-disc pl-5 space-y-1">
                  {product.care.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free shipping across India on orders over ₹15,000. Returns accepted within 7 days, unworn, with original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-32">
            <h2 className="font-display text-3xl lg:text-4xl mb-10">You may also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 eyebrow">
        {title}
        <span className="text-xl font-light">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="pb-5 text-sm text-muted-foreground leading-relaxed">{children}</div>}
    </div>
  );
}
