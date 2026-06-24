import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AEON" },
      { name: "description", content: "Reach AEON client care. FAQs, returns, and bespoke enquiries." },
      { property: "og:title", content: "Contact — AEON" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(2000),
});

const faqs = [
  {
    q: "Where are AEON garments made?",
    a: "Each piece is produced in small, family-run European workshops. Tailoring in Portugal, leather in Tuscany, knitwear in Scotland and Inner Mongolia.",
  },
  {
    q: "How do I place an order?",
    a: "Orders are placed through the website and completed with an AEON client advisor on WhatsApp. Your advisor confirms availability, delivery details, and payment instructions before dispatch.",
  },
  {
    q: "What is your return policy?",
    a: "Returns are accepted within 7 days of delivery on unworn pieces in their original packaging. Final sale, altered, and personalized pieces are not eligible.",
  },
  {
    q: "Do you offer lifetime repairs?",
    a: "Yes. Every AEON piece can be returned to our atelier for restoration at any point in its life. Contact client care to begin.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "A client advisor shares secure payment instructions after your order details are confirmed on WhatsApp.",
  },
  {
    q: "How long does shipping take?",
    a: "Ready pieces are usually dispatched within 1–2 business days after confirmation. Shipping is complimentary across India on orders over ₹15,000; smaller orders ship for ₹250.",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details.");
      return;
    }
    setSubmitting(true);
    // Future: store in `contact_messages` table or send via edge function
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    toast.success("Thank you. We'll be in touch shortly.");
  };

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24">
          <p className="eyebrow text-muted-foreground mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl lg:text-7xl">Client Care</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div>
          <h2 className="font-display text-3xl mb-6">Speak with us</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            For sizing, styling, repair, or bespoke enquiries — our client advisors are
            available Monday to Saturday, 10:00 to 19:00 IST.
          </p>
          <div className="space-y-6 text-sm">
            <div>
              <p className="eyebrow text-muted-foreground mb-2">Client Care</p>
              <p>Use the form for sizing, styling, repair, and order support.</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground mb-2">WhatsApp Orders</p>
              <a href="https://wa.me/918511788105" className="editorial-link">+91 85117 88105</a>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground mb-2">Service Area</p>
              <p>Online client care and delivery across India.</p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-5">
          <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} required />
          <label className="block">
            <span className="text-xs text-muted-foreground mb-1 block">Message *</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border border-border focus:border-ink outline-none px-4 py-3 text-sm resize-none"
            />
          </label>
          <button type="submit" disabled={submitting} className="btn-ink disabled:opacity-50">
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="grid gap-10 border-y border-border py-12 md:grid-cols-3">
          <ServiceBlock
            id="shipping"
            title="Shipping"
            copy="Ready pieces are dispatched within 1–2 business days after order confirmation. Shipping is complimentary across India on orders over ₹15,000; smaller orders ship for ₹250."
          />
          <ServiceBlock
            id="returns"
            title="Returns"
            copy="Returns are accepted within 7 days of delivery on unworn pieces in original packaging. Final sale, altered, and personalized pieces are not eligible."
          />
          <ServiceBlock
            id="ordering"
            title="Ordering"
            copy="Checkout opens a WhatsApp order request with your bag and delivery details. An AEON client advisor confirms availability and payment instructions before dispatch."
          />
        </div>
      </section>

      <section id="faq" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-muted-foreground mb-4 text-center">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl text-center mb-14">Frequently asked</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({ id, title, copy }: { id: string; title: string; copy: string }) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="eyebrow mb-4">{title}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left">
        <span className="font-display text-xl pr-6">{q}</span>
        <span className="text-2xl font-light shrink-0">{open ? "–" : "+"}</span>
      </button>
      {open && <p className="pb-6 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}
