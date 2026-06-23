import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/essentials")({
  component: EssentialsPage,
});

function EssentialsPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-4">Essentials</p>

        <h1 className="font-display text-6xl mb-12">
          The foundation of a permanent wardrobe.
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="border border-border p-8">
            <h2 className="text-2xl mb-3">Heavyweight Tee</h2>
            <p className="text-muted-foreground">
              Everyday comfort. Built to last.
            </p>
          </article>

          <article className="border border-border p-8">
            <h2 className="text-2xl mb-3">Oxford Shirt</h2>
            <p className="text-muted-foreground">
              Clean lines. Timeless versatility.
            </p>
          </article>

          <article className="border border-border p-8">
            <h2 className="text-2xl mb-3">Relaxed Trouser</h2>
            <p className="text-muted-foreground">
              Designed for everyday movement.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
