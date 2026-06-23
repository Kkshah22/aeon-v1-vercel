import { createFileRoute, Link } from "@tanstack/react-router";
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
      { title: "AEON — Quiet Essentials" },
      {
        name: "description",
        content:
          "Premium essentials for men and women. Thoughtful materials, precise construction, and timeless silhouettes.",
      },
      { property: "og:title", content: "AEON — Quiet Essentials" },
      { property: "og:image", content: hero },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: hero,
        fetchpriority: "high",
      } as never,
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <>
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="AEON Summer collection"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />

        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-xl text-paper fade-in-up">
            <p className="eyebrow mb-6">Summer MMXXVI</p>

            <h1 className="font-display mb-6 text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
              A wardrobe reduced to what matters.
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-paper/80">
              Refined essentials for men and women. Thoughtful materials,
              precise construction, and timeless silhouettes.
            </p>

            <Link
              to="/shop"
              className="btn-ink bg-paper text-ink border-paper hover:bg-transparent hover:text-paper"
            >
              Discover
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 flex items-end justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">The Edit</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Featured Collection
            </h2>
          </div>

          <Link
            to="/shop"
            className="editorial-link eyebrow hidden sm:inline-block"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { slug: "bags", name: "Bags", img: catBags },
            { slug: "knitwear", name: "Knitwear", img: catKnit },
            { slug: "shoes", name: "Shoes", img: catShoes },
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

              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

              <div className="absolute inset-x-0 bottom-0 p-8 text-paper">
                <p className="eyebrow mb-2 text-paper/70">Shop</p>
                <h3 className="font-display text-4xl">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <img
            src={atelier}
            alt="The AEON atelier"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />

          <div className="max-w-xl">
            <p className="eyebrow mb-4 text-muted-foreground">The House</p>

            <h2 className="font-display mb-8 text-4xl leading-tight lg:text-5xl">
              Quiet essentials. Made exceptionally well.
            </h2>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              AEON is built around the pieces we return to every day: clean
              shirts, considered trousers, soft knits, and objects made to live
              with ease.
            </p>

            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              We design with restraint, choosing natural materials, precise
              proportions, and silhouettes that feel relevant beyond a single
              season.
            </p>

            <Link to="/about" className="btn-ghost">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 flex items-end justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Always</p>
            <h2 className="font-display text-4xl lg:text-5xl">Best Sellers</h2>
          </div>

          <Link
            to="/shop"
            className="editorial-link eyebrow hidden sm:inline-block"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mb-12 flex items-end justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Just In</p>
            <h2 className="font-display text-4xl lg:text-5xl">New Arrivals</h2>
          </div>

          <Link
            to="/shop"
            className="editorial-link eyebrow hidden sm:inline-block"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
