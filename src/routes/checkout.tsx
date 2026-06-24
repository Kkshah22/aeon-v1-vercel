import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { useMemo, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — AEON" },
      { name: "description", content: "Place your AEON order through WhatsApp for launch." },
    ],
  }),
  component: Checkout,
});

type CheckoutForm = {
  email: string;
  phone: string;
  fullName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
};

// Replace this with your real WhatsApp number in international format, e.g. "919876543210".
const WHATSAPP_NUMBER = "918511788105";

function Checkout() {
  const { items, subtotalCents, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<CheckoutForm>({
    email: "",
    phone: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const shippingCents = subtotalCents >= 1500000 ? 0 : 25000;
  const totalCents = subtotalCents + shippingCents;

  const whatsappUrl = useMemo(() => {
    const lines = [
      "Hello AEON, I would like to place an order:",
      "",
      ...items.map((item) => `• ${item.name} | Size ${item.size} | Qty ${item.quantity} | ${formatPrice(item.priceCents * item.quantity)}`),
      "",
      `Subtotal: ${formatPrice(subtotalCents)}`,
      `Shipping: ${shippingCents === 0 ? "Free" : formatPrice(shippingCents)}`,
      `Total: ${formatPrice(totalCents)}`,
      "",
      "Customer details:",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Address: ${form.address1}${form.address2 ? `, ${form.address2}` : ""}, ${form.city}, ${form.state} - ${form.pincode}`,
    ];

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [form, items, shippingCents, subtotalCents, totalCents]);

  if (items.length === 0) {
    return (
      <>
        <div className="py-32 text-center">
          <p className="font-display text-3xl mb-4">Your bag is empty.</p>
          <Link to="/shop" className="btn-ink mt-4 inline-flex">Shop</Link>
        </div>
      </>
    );
  }

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (WHATSAPP_NUMBER === "910000000000") {
      toast.error("Please replace WHATSAPP_NUMBER in src/routes/checkout.tsx before accepting orders.");
      setSubmitting(false);
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Your WhatsApp order message is ready to send.");
    setSubmitting(false);
  };

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
        <h1 className="font-display text-4xl lg:text-6xl mb-12">Checkout</h1>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <form onSubmit={submit} className="space-y-10">
            <Section title="Contact">
              <Field label="Email" value={form.email} onChange={(v) => updateField("email", v)} type="email" required />
              <Field label="Phone" value={form.phone} onChange={(v) => updateField("phone", v)} type="tel" required />
            </Section>

            <Section title="Shipping address">
              <Field label="Full name" value={form.fullName} onChange={(v) => updateField("fullName", v)} required />
              <Field label="Address line 1" value={form.address1} onChange={(v) => updateField("address1", v)} required />
              <Field label="Address line 2" value={form.address2} onChange={(v) => updateField("address2", v)} />
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="City" value={form.city} onChange={(v) => updateField("city", v)} required />
                <Field label="State" value={form.state} onChange={(v) => updateField("state", v)} required />
                <Field label="PIN code" value={form.pincode} onChange={(v) => updateField("pincode", v)} required />
              </div>
            </Section>

            <button disabled={submitting} className="btn-ink w-full disabled:opacity-50">
              {submitting ? "Preparing WhatsApp order…" : "Place order via WhatsApp"}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              No payment gateway is connected yet. Orders are manually confirmed on WhatsApp for launch.
            </p>
            <button type="button" onClick={clear} className="btn-ghost w-full">
              Clear bag
            </button>
          </form>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border p-8 bg-secondary">
              <h2 className="eyebrow mb-6">Order Summary</h2>
              <div className="space-y-6 mb-6">
                {items.map((item) => (
                  <div key={item.slug + item.size} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-accent" />
                    <div className="flex-1 text-sm">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-muted-foreground mt-1">Size {item.size} · Qty {item.quantity}</p>
                    </div>
                    <p className="text-sm">{formatPrice(item.priceCents * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-border mb-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotalCents)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shippingCents === 0 ? "Free" : formatPrice(shippingCents)}</span></div>
                <div className="flex justify-between font-medium text-base pt-3"><span>Total</span><span>{formatPrice(totalCents)}</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground mb-1 block">{label}{required && " *"}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-border focus:border-ink outline-none px-4 py-3 text-sm"
      />
    </label>
  );
}
