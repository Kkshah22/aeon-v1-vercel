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
  const categoryCards = [
    {
      slug: "ready-to-wear",
      name: "Ready to Wear",
      img: hero,
      copy: "Tailored coats, silk pieces, and precise everyday layers.",
    },
    {
      slug: "bags",
      name: "Bags",
      img: catBags,
      copy: "Structured leather objects made for daily use.",
    },
    {
      slug: "knitwear",
      name: "Knitwear",
      img: catKnit,
      copy: "Soft cashmere and permanent wardrobe foundations.",
    },
    {
      slug: "shoes",
      name: "Shoes",
      img: catShoes,
      copy: "Polished essentials finished with quiet restraint.",
    },
  ];
  const trustPillars = [
    {
      title: "Complimentary shipping",
      copy: "On orders over INR 15,000 across India.",
    },
    {
      title: "Small-batch production",
      copy: "Limited runs from long-standing specialist workshops.",
    },
    {
      title: "Lifetime restoration",
      copy: "Pieces can return to our atelier for considered repair.",
    },
    {
      title: "Client care",
      copy: "Sizing, styling, and order support six days a week.",
    },
  ];

  return (
    <>
      <section className="relative min-h-[calc(100svh-4rem)] w-full overflow-hidden lg:min-h-[calc(100svh-5rem)]">
        <img
          src={hero}
          alt="AEON Summer collection"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/45" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1600px] flex-col justify-end px-6 pb-10 pt-28 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-12 lg:pt-32">
          <div className="max-w-2xl text-paper fade-in-up">
            <p className="eyebrow mb-6">Summer MMXXVI</p>

            <h1 className="font-display mb-6 max-w-3xl text-5xl leading-[0.95] md:text-6xl lg:text-8xl">
              Luxury essentials for the permanent wardrobe.
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-paper/82 lg:text-lg">
              New-season ready-to-wear, bags, shoes, and knitwear made with
              thoughtful materials, precise construction, and lasting restraint.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/shop" className="hero-cta">
                SHOP THE COLLECTION
              </Link>

              <Link
                to="/shop"
                search={{ sort: "newest" } as never}
                className="editorial-link eyebrow w-fit text-paper"
              >
                New arrivals
              </Link>
            </div>
          </div>

          <div className="mt-16 grid border-t border-paper/30 pt-6 text-paper/80 sm:grid-cols-3 lg:mt-24">
            {["Ready to wear", "Bags", "Knitwear"].map((item) => (
              <Link
                key={item}
                to="/shop"
                className="eyebrow py-2 text-paper/80 transition-colors hover:text-paper"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Just In</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              New Arrivals
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              The latest additions to the AEON wardrobe: precise silhouettes,
              natural fibres, and considered objects for daily use.
            </p>
          </div>

          <Link
            to="/shop"
            search={{ sort: "newest" } as never}
            className="editorial-link eyebrow hidden sm:inline-block"
          >
            Shop new
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {newArrivals.map((p, index) => (
            <ProductCard key={p.slug} product={p} eager={index < 2} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mb-10 flex flex-col gap-4 lg:mb-14">
          <p className="eyebrow text-muted-foreground">Shop by Category</p>
          <h2 className="font-display max-w-2xl text-4xl lg:text-5xl">
            Enter the collection through the pieces you reach for first.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categoryCards.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug } as never}
              className="group relative block aspect-[4/5] overflow-hidden bg-secondary"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/45 transition-colors group-hover:via-black/10 group-hover:to-black/55" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-paper lg:p-8">
                <p className="eyebrow mb-2 text-paper/70">Shop</p>
                <h3 className="font-display text-4xl">{c.name}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/75">
                  {c.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
          <img
            src={atelier}
            alt="The AEON atelier"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />

          <div className="max-w-xl">
            <p className="eyebrow mb-4 text-muted-foreground">The House</p>

            <h2 className="font-display mb-8 text-4xl leading-tight lg:text-5xl">
              Fewer pieces. Better chosen. Made exceptionally well.
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

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">The AEON Edit</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Signature pieces
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              A concise selection of coats, leather goods, knitwear, and
              accessories chosen for their permanence.
            </p>
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

      <section className="mx-auto max-w-[1600px] border-y border-border px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((item) => (
            <div key={item.title}>
              <h3 className="eyebrow mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Always</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Best Sellers
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
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
