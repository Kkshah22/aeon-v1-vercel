import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      toast.success("Thank you. Newsletter signup will open soon.");
    }, 250);
  };

  return (
    <footer className="bg-ink text-paper mt-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-paper/15">
          <div>
            <p className="eyebrow text-paper/60 mb-4">The Letter</p>
            <h3 className="font-display text-4xl lg:text-5xl leading-tight">
              Considered correspondence,<br /> delivered seasonally.
            </h3>
          </div>
          <form onSubmit={subscribe} className="flex flex-col justify-end gap-4">
            <p className="text-paper/60 text-sm max-w-md">
              Newsletter capture is paused for launch. You can still collect interest here without a database dependency.
            </p>
            <div className="flex gap-0 border-b border-paper/30 focus-within:border-paper">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-3 outline-none placeholder:text-paper/40 text-paper"
              />
              <button
                type="submit"
                disabled={submitting}
                className="eyebrow text-paper px-4 disabled:opacity-50"
              >
                {submitting ? "..." : "Notify me"}
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          <div className="col-span-2">
            <div className="font-display text-3xl tracking-[0.4em] mb-6">AEON</div>
            <p className="text-paper/60 text-sm max-w-xs leading-relaxed">
              A house of considered objects. Designed without season, made to be worn for years.
            </p>
          </div>
          <FooterCol title="Shop">
            <Link to="/shop">All</Link>
            <Link to="/shop" search={{ category: "ready-to-wear" } as never}>Ready to Wear</Link>
            <Link to="/shop" search={{ category: "bags" } as never}>Bags</Link>
            <Link to="/shop" search={{ category: "shoes" } as never}>Shoes</Link>
            <Link to="/shop" search={{ category: "knitwear" } as never}>Knitwear</Link>
          </FooterCol>
          <FooterCol title="Maison">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact" hash="faq">FAQ</Link>
          </FooterCol>
          <FooterCol title="Services">
            <Link to="/contact">Client Care</Link>
            <Link to="/contact">Shipping & Returns</Link>
            <Link to="/wishlist">Wishlist</Link>
          </FooterCol>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between pt-10 border-t border-paper/15 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} AEON. All rights reserved.</span>
          <span className="tracking-[0.18em] uppercase">Launching in India</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-paper/60 mb-5">{title}</p>
      <ul className="flex flex-col gap-3 text-sm text-paper/85">
        {Array.isArray(children) ? children.map((c, i) => <li key={i}>{c}</li>) : <li>{children}</li>}
      </ul>
    </div>
  );
}
