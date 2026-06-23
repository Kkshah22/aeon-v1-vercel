import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
});

function JournalPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Journal
        </p>

        <h1 className="mb-8 font-display text-6xl">
          Notes on simplicity.
        </h1>

        <p className="max-w-xl text-neutral-600">
          Stories, materials, rituals, and design thoughts from AEON.
        </p>
      </div>
    </main>
  );
}
