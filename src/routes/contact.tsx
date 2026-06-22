import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
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
    q: "What is your return policy?",
    a: "We accept returns within 30 days of delivery, on unworn pieces in their original packaging. Final sale items are not eligible.",
  },
  {
    q: "Do you offer lifetime repairs?",
    a: "Yes. Every AEON piece can be returned to our atelier for restoration at any point in its life. Contact client care to begin.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "For launch, orders are placed through WhatsApp and confirmed manually. Online payments can be added later.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are confirmed manually and dispatched within 1–2 business days after confirmation. Shipping is free above ₹15,000.",
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
    <SiteLayout>
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
            available Monday to Saturday, 10:00 — 19:00 IST.
          </p>
          <div className="space-y-6 text-sm">
            <div>
              <p className="eyebrow text-muted-foreground mb-2">Email</p>
              <a href="mailto:hello@aeon.studio" className="editorial-link">hello@aeon.studio</a>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground mb-2">Telephone</p>
              <p>+91 00000 00000</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground mb-2">Atelier</p>
              <p>India launch studio<br />Address coming soon</p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground mb-2">Follow</p>
              <div className="flex gap-5">
                <a href="#" className="editorial-link">Instagram</a>
                <a href="#" className="editorial-link">Pinterest</a>
              </div>
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
    </SiteLayout>
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
