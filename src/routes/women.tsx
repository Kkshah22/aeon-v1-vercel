
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/women")({
  component: WomenPage,
});

function WomenPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-4">Women</p>

        <h1 className="font-display text-6xl mb-12">
          Designed for everyday wear.
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="border border-border p-8">
            <h2 className="text-2xl mb-3">Essential Tee</h2>
            <p className="text-muted-foreground">
              Clean lines. Everyday comfort.
            </p>
          </article>

          <article className="border border-border p-8">
            <h2 className="text-2xl mb-3">Oxford Shirt</h2>
            <p className="text-muted-foreground">
              Timeless wardrobe staple.
            </p>
          </article>

          <article className="border border-border p-8">
            <h2 className="text-2xl mb-3">Relaxed Trouser</h2>
            <p className="text-muted-foreground">
              Built for movement and longevity.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
