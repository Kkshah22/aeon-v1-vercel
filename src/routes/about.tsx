import { createFileRoute, Link } from "@tanstack/react-router";
import atelier from "@/assets/story-atelier.jpg";
import hero from "@/assets/hero-coat.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AEON" },
      { name: "description", content: "AEON is a house of considered objects. A practice of restraint, made in Europe." },
      { property: "og:title", content: "About — AEON" },
      { property: "og:image", content: atelier },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={hero} alt="AEON" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full mx-auto max-w-[1600px] px-6 lg:px-10 flex flex-col justify-end pb-16">
          <p className="eyebrow text-paper/70 mb-4">The House</p>
          <h1 className="font-display text-paper text-6xl lg:text-8xl leading-[0.95] max-w-3xl">
            A practice of restraint.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <p className="font-display text-3xl lg:text-4xl leading-snug mb-12">
          AEON was founded on a single conviction — that what we own should last, and what we wear should age well.
        </p>
        <div className="prose prose-neutral max-w-none text-lg leading-[1.8] text-muted-foreground space-y-6">
          <p>
            The house was established as a quiet alternative to seasonal noise. We design slowly,
            and produce in small runs with workshops we have known for decades — wool from Biella,
            leather from Tuscany, knitwear from the highlands of Scotland and Inner Mongolia.
          </p>
          <p>
            Every piece is built around a question: will this still feel right in ten years?
            The answer shapes the cut, the cloth, the hardware, the lining.
          </p>
          <p>
            Our garments are made to be repaired, not replaced. We offer lifetime restoration
            on every piece we sell. We don't follow trends. We don't chase volume.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img src={atelier} alt="The atelier" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div>
            <p className="eyebrow text-muted-foreground mb-4">Mission</p>
            <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
              Fewer things. Better made.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe luxury is not extravagance — it is precision, patience, and time.
              The hours spent at a cutting table. The decade of a leather workshop's craft.
              The conversation between a designer and a knitter.
            </p>
            <Link to="/shop" className="btn-ghost mt-4">Explore the collection</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-3 gap-12">
        {[
          { n: "01", t: "Materials", d: "Natural fibres sourced from the same mills, season after season." },
          { n: "02", t: "Craft", d: "Made by hand in family-run workshops across Europe." },
          { n: "03", t: "Longevity", d: "Built to be lived with, repaired, and passed on." },
        ].map((v) => (
          <div key={v.n}>
            <p className="font-display text-5xl text-muted-foreground mb-6">{v.n}</p>
            <h3 className="font-display text-2xl mb-3">{v.t}</h3>
            <p className="text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
