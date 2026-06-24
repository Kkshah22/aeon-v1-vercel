import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — AEON" },
      { name: "description", content: "AEON notes on materials, care, and the permanent wardrobe." },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4 text-muted-foreground">Journal</p>
          <h1 className="font-display max-w-3xl text-5xl lg:text-7xl">
            Notes on material, care, and permanence.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Care for Wool",
              copy: "Brush lightly after wear, rest between uses, and store with room for the cloth to breathe.",
            },
            {
              title: "Leather Objects",
              copy: "Keep leather dry, condition sparingly, and allow natural marks to become part of the piece.",
            },
            {
              title: "Cashmere Storage",
              copy: "Fold knitwear rather than hanging it. Store clean, dry, and away from direct sun.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-border pt-6">
              <h2 className="font-display mb-4 text-2xl">{item.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </article>
          ))}
        </div>

        <Link to="/contact" className="btn-ghost mt-14">
          Ask Client Care
        </Link>
      </section>
    </>
  );
}
