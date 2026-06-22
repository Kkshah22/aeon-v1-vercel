import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero-coat.jpg";
import atelier from "@/assets/story-atelier.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catKnit from "@/assets/cat-knitwear.jpg";
import catShoes from "@/assets/cat-shoes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AEON India — Colour-Led Luxury" },
      {
        name: "description",
        content:
          "AEON India — expressive fashion, colour-led collections, and considered luxury.",
      },
      { property: "og:title", content: "AEON India — Colour-Led Luxury" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "preload", as: "image", href: hero, fetchpriority: "high" } as never],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#0b1f4d]">
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 opacity-80">
          {[
            "bg-blue-900", "bg-blue-700", "bg-cyan-600", "bg-teal-600",
            "bg-green-700", "bg-lime-600", "bg-yellow-400", "bg-orange-500",
            "bg-red-600", "bg-rose-700", "bg-purple-800", "bg-indigo-800",
          ].map((color, i) => (
            <div key={i} className={`${color} aspect-square mix-blend-screen`} />
          ))}
        </div>

        <img
          src={hero}
          alt="AEON India collection"
          className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-overlay"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1600px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-3xl text-paper fade-in-up">
            <p className="eyebrow mb-6">AEON India — Colour Study I</p>
            <h1 className="font-display text-5xl leading-[0.9] md:text-7xl lg:text-8xl">
              Fashion in colour, texture and motion.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/80">
              A new visual language inspired by art, architecture, landscape,
              craft and modern Indian dressing.
            </p>
            <Link
              to="/shop"
              className="btn-ink mt-10 inline-flex bg-paper text-ink border-paper hover:bg-transparent hover:text-paper"
            >
              Discover the Edit
            </Link>
          </div>
        </div>
      </section>

      {/* MOODBOARD STRIP */}
      <section className="bg-[#071a36] px-3 py-3">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {[catBags, catKnit, catShoes, atelier, hero, catBags, catKnit, catShoes].map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <img src={img} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-orange-500/30" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow text-muted-foreground mb-3">The Colour Edit</p>
          <h2 className="font-display text-4xl lg:text-6xl">
            Blue to green. Gold to red. A wardrobe with rhythm.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { slug: "bags", name: "Blue Objects", img: catBags, color: "from-blue-900/80" },
            { slug: "knitwear", name: "Green Texture", img: catKnit, color: "from-green-900/80" },
            { slug: "shoes", name: "Warm Accents", img: catShoes, color: "from-orange-800/80" },
          ].map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug } as never}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${c.color} via-transparent to-transparent`} />
              <div className="absolute inset-x-0 bottom-0 p-8 text-paper">
                <p className="eyebrow text-paper/70 mb-2">Shop</p>
                <h3 className="font-display text-4xl">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#e5c93f] py-24 text-[#241800] lg:py-32">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <img src={atelier} alt="The AEON atelier" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="max-w-xl">
            <p className="eyebrow mb-4 opacity-70">The House</p>
            <h2 className="font-display mb-8 text-4xl leading-tight lg:text-6xl">
              Considered luxury, now with a stronger visual pulse.
            </h2>
            <p className="mb-6 text-base leading-relaxed opacity-80">
              AEON moves through colour, form and craft — from cool architectural blues
              to deep greens, sunlit yellows and warm reds.
            </p>
            <Link to="/about" className="btn-ghost border-[#241800] text-[#241800]">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12">
          <p className="eyebrow text-muted-foreground mb-3">Always</p>
          <h2 className="font-display text-4xl lg:text-5xl">Best Sellers</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mb-12">
          <p className="eyebrow text-muted-foreground mb-3">Just In</p>
          <h2 className="font-display text-4xl lg:text-5xl">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
