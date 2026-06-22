export function Newsletter() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
          AEON Journal
        </p>

        <h2 className="font-display text-4xl lg:text-6xl leading-tight mb-6">
          Stay Connected
        </h2>

        <p className="mx-auto max-w-lg text-neutral-600 leading-relaxed mb-10">
          Subscribe for collection releases, editorial stories,
          and exclusive updates from AEON.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-border bg-transparent px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-4 uppercase tracking-[0.2em] text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
