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
      { title: "AEON — Clarity is Luxury" },
      {
        name: "description",
        content:
          "AEON helps you build a simpler, more intentional wardrobe through refined pieces for work, travel, weekend, and evening.",
      },
      { property: "og:title", content: "AEON — Clarity is Luxury" },
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
  const wardrobePathways = [
    {
      slug: "ready-to-wear",
      name: "Work",
      img: hero,
      copy: "Precise layers, clean shirts, and grounded pieces for focused days.",
    },
    {
      slug: "bags",
      name: "Travel",
      img: catBags,
      copy: "Compact systems, soft layers, and objects that move without friction.",
    },
    {
      slug: "knitwear",
      name: "Weekend",
      img: catKnit,
      copy: "Ease without drift: knitwear, relaxed structure, and daily polish.",
    },
    {
      slug: "shoes",
      name: "Evening",
      img: catShoes,
      copy: "Sharper silhouettes and finishing pieces for intentional presence.",
    },
  ];
  const wardrobeSteps = [
    {
      title: "Define your rhythm",
      copy: "Begin with where your clothes need to carry you: work, travel, weekend, and evening.",
    },
    {
      title: "Choose fewer, better pieces",
      copy: "Build from foundations that repeat beautifully instead of chasing one-off outfits.",
    },
    {
      title: "Add only what clarifies",
      copy: "Every layer, bag, shoe, and accessory should make dressing simpler.",
    },
  ];
  const trustPillars = [
    {
      title: "Wardrobe guidance",
      copy: "Sizing, styling, and pathway support from AEON client care.",
    },
    {
      title: "Intentional production",
      copy: "Small runs designed around permanence, not seasonal excess.",
    },
    {
      title: "Considered delivery",
      copy: "Complimentary shipping on orders over INR 15,000 across India.",
    },
    {
      title: "Long-term care",
      copy: "Repair guidance and thoughtful aftercare for pieces made to stay.",
    },
  ];
  const heroQuickLinks = [
    { label: "Work", category: "ready-to-wear" },
    { label: "Travel", category: "bags" },
    { label: "Weekend", category: "knitwear" },
    { label: "Evening", category: "shoes" },
  ] as const;

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
            <p className="eyebrow mb-6">Clarity is luxury</p>

            <h1 className="font-display mb-6 max-w-3xl text-5xl leading-[1.08] md:text-6xl lg:text-[5.25rem] lg:leading-[1.06]">
              Build a wardrobe with intention.
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-paper/82 lg:text-lg">
              AEON helps you dress with less noise and more purpose: refined
              pieces organized around work, travel, weekend, and evening.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/shop" search={{ sort: "featured" } as never} className="hero-cta">
                BUILD YOUR WARDROBE
              </Link>

              <Link
                to="/shop"
                search={{ category: "ready-to-wear" } as never}
                className="editorial-link eyebrow w-fit text-paper"
              >
                Start with work
              </Link>
            </div>
          </div>

          <div className="mt-16 grid border-t border-paper/30 pt-6 text-paper/80 sm:grid-cols-4 lg:mt-24">
            {heroQuickLinks.map((item) => (
              <Link
                key={item.category}
                to="/shop"
                search={{ category: item.category } as never}
                className="eyebrow py-2 text-paper/80 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Start Here</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              New clarity for the wardrobe
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              Recent pieces chosen because they solve something: a cleaner
              work uniform, a lighter travel system, or a better everyday layer.
            </p>
          </div>

          <Link
            to="/shop"
            search={{ sort: "newest" } as never}
            className="editorial-link eyebrow hidden sm:inline-block"
          >
            Shop new pieces
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
          <p className="eyebrow text-muted-foreground">Shop by Intention</p>
          <h2 className="font-display max-w-2xl text-4xl lg:text-5xl">
            Four pathways for a simpler life in clothes.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {wardrobePathways.map((c) => (
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
                <p className="eyebrow mb-2 text-paper/70">Pathway</p>
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
            <p className="eyebrow mb-4 text-muted-foreground">The Philosophy</p>

            <h2 className="font-display mb-8 text-4xl leading-tight lg:text-5xl">
              Clarity is not minimalism. It is knowing what belongs.
            </h2>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              AEON is built for people who want their wardrobes to feel edited,
              intelligent, and alive. The goal is not to own less for its own
              sake. The goal is to own what makes the day easier.
            </p>

            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Each piece is considered for how it works across real moments:
              the meeting, the flight, the slow weekend, the evening that asks
              for presence without performance.
            </p>

            <Link to="/about" className="btn-ghost">
              The AEON Philosophy
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-4 text-muted-foreground">Build Your Wardrobe</p>
            <h2 className="font-display text-4xl leading-tight lg:text-5xl">
              A calmer way to decide what to wear.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Start with the life you actually live. AEON turns shopping into a
              sequence of useful decisions, so every purchase has a role.
            </p>
            <Link to="/shop" search={{ sort: "featured" } as never} className="btn-ink mt-10">
              Build Your Wardrobe
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {wardrobeSteps.map((step, index) => (
              <div key={step.title} className="border-t border-border pt-6">
                <p className="eyebrow mb-8 text-muted-foreground">0{index + 1}</p>
                <h3 className="font-display mb-4 text-2xl leading-snug">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Foundations</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Pieces that reduce decision fatigue
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              A concise selection of coats, leather goods, knitwear, and
              accessories chosen for clarity, repetition, and range.
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
            <p className="eyebrow mb-3 text-muted-foreground">Proven</p>
            <h2 className="font-display text-4xl lg:text-5xl">
              Most useful now
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
