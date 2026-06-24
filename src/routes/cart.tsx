import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Minus, Plus, X } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Bag — AEON" },
      { name: "description", content: "Review the pieces in your bag." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, subtotalCents } = useCart();
  const shippingCents = subtotalCents >= 1500000 ? 0 : 25000;
  const totalCents = subtotalCents + shippingCents;

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
        <h1 className="font-display text-4xl lg:text-6xl mb-12">Your Bag</h1>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-3xl mb-4">Your bag is empty.</p>
            <Link to="/shop" className="btn-ink mt-4 inline-flex">Discover the collection</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            <div className="divide-y divide-border border-y border-border">
              {items.map((item) => (
                <div key={item.slug + item.size} className="py-8 flex gap-6">
                  <Link to="/product/$slug" params={{ slug: item.slug }} className="shrink-0">
                    <img src={item.image} alt={item.name} className="w-28 h-36 lg:w-36 lg:h-44 object-cover bg-accent" />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link to="/product/$slug" params={{ slug: item.slug }} className="font-medium hover:underline">{item.name}</Link>
                        <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                      </div>
                      <button onClick={() => remove(item.slug, item.size)} aria-label="Remove" className="p-2 -mr-2 text-muted-foreground hover:text-ink">
                        <X className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="inline-flex items-center border border-border">
                        <button onClick={() => setQty(item.slug, item.size, item.quantity - 1)} className="size-10 inline-flex items-center justify-center" aria-label="Decrease">
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => setQty(item.slug, item.size, item.quantity + 1)} className="size-10 inline-flex items-center justify-center" aria-label="Increase">
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <p className="font-medium">{formatPrice(item.priceCents * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-border p-8">
                <h2 className="eyebrow mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <Row label="Subtotal" value={formatPrice(subtotalCents)} />
                  <Row label="Shipping" value={shippingCents === 0 ? "Complimentary" : formatPrice(shippingCents)} />
                  <Row label="GST" value="Included where applicable" muted />
                </div>
                <div className="h-px bg-border my-6" />
                <Row label="Total" value={formatPrice(totalCents)} bold />
                <Link to="/checkout" className="btn-ink w-full mt-8">Checkout</Link>
                <Link to="/shop" className="block text-center mt-4 editorial-link eyebrow">Continue shopping</Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Free shipping on orders over ₹15,000.
              </p>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}

function Row({ label, value, bold, muted }: { label: string; value: string; bold?: boolean; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={muted ? "text-muted-foreground" : ""}>{label}</span>
      <span className={bold ? "font-medium text-base" : muted ? "text-muted-foreground" : ""}>{value}</span>
    </div>
  );
}
