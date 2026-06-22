import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/products";
import hero from "@/assets/hero-coat.jpg";
import atelier from "@/assets/story-atelier.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catKnit from "@/assets/cat-knitwear.jpg";
import catShoes from "@/assets/cat-shoes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AEON — Considered Luxury" },
      {
        name: "description",
        content:
          "A house of considered objects. Tailored ready to wear, leather goods, and knitwear. Made in Europe.",
      },
      { property: "og:title", content: "AEON — Considered Luxury" },
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
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="AEON Autumn collection — wool overcoat"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
        <div className="relative h-full mx-auto max-w-[1600px] px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-24">
          <div className="max-w-xl text-paper fade-in-up">
            <p className="eyebrow mb-6">Autumn — Winter MMXXVI</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
              Built to outlast the season.
            </h1>
            <Link to="/shop" className="btn-ink bg-paper text-ink border-paper hover:bg-transparent hover:text-paper">
              Discover
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow text-muted-foreground mb-3">The Edit</p>
            <h2 className="font-display text-4xl lg:text-5xl">Featured Collection</h2>
          </div>
          <Link to="/shop" className="editorial-link eyebrow hidden sm:inline-block">View all</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { slug: "bags", name: "Bags", img: catBags },
            { slug: "knitwear", name: "Knitwear", img: catKnit },
            { slug: "shoes", name: "Shoes", img: catShoes },
          ].map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug } as never}
              className="group block relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-paper">
                <p className="eyebrow text-paper/70 mb-2">Shop</p>
                <h3 className="font-display text-4xl">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img src={atelier} alt="The AEON atelier" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div className="max-w-xl">
            <p className="eyebrow text-muted-foreground mb-4">The House</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              A practice of restraint.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              AEON began with a single question: what survives the season?
              Every garment, every object is made to be lived with —
              tailored from natural fibres in small European workshops,
              built to be repaired rather than replaced.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-10">
              We design without trend. We work with the same hands, the same mills,
              the same tanneries, year after year.
            </p>
            <Link to="/about" className="btn-ghost">Our Story</Link>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow text-muted-foreground mb-3">Always</p>
            <h2 className="font-display text-4xl lg:text-5xl">Best Sellers</h2>
          </div>
          <Link to="/shop" className="editorial-link eyebrow hidden sm:inline-block">View all</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow text-muted-foreground mb-3">Just In</p>
            <h2 className="font-display text-4xl lg:text-5xl">New Arrivals</h2>
          </div>
          <Link to="/shop" className="editorial-link eyebrow hidden sm:inline-block">View all</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
