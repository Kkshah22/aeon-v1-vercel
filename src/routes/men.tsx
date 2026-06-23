import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/men")({
  component: MenPage,
});

function MenPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Men
        </p>

        <h1 className="mb-8 font-display text-6xl">
          Men&apos;s Collection
        </h1>

        <p className="max-w-xl text-neutral-600">
          Refined everyday essentials designed with clean lines, quiet comfort,
          and timeless utility.
        </p>
      </div>
    </main>
  );
}
