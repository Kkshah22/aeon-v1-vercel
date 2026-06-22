import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/products";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Search } from "lucide-react";

const shopSearch = z.object({
  category: z.string().optional(),
  size: z.string().optional(),
  sort: z.enum(["featured", "price-asc", "price-desc", "newest"]).optional(),
  q: z.string().optional(),
  min: z.coerce.number().optional(),
  max: z.coerce.number().optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: shopSearch,
  head: () => ({
    meta: [
      { title: "Shop — AEON" },
      { name: "description", content: "Browse the AEON collection of ready to wear, bags, shoes, knitwear and accessories." },
      { property: "og:title", content: "Shop — AEON" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const [query, setQuery] = useState(search.q ?? "");

  const filtered = useMemo(() => {
    let list = [...products];
    if (search.category) list = list.filter((p) => p.category === search.category);
    if (search.size) list = list.filter((p) => p.sizes.includes(search.size!));
    if (search.q) {
      const q = search.q.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
      );
    }
    if (search.min) list = list.filter((p) => p.priceCents >= search.min! * 100);
    if (search.max) list = list.filter((p) => p.priceCents <= search.max! * 100);
    switch (search.sort) {
      case "price-asc":
        list.sort((a, b) => a.priceCents - b.priceCents);
        break;
      case "price-desc":
        list.sort((a, b) => b.priceCents - a.priceCents);
        break;
      case "newest":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        list.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
    }
    return list;
  }, [search]);

  const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)));

  const update = (patch: Partial<typeof search>) =>
    navigate({ search: (prev: typeof search) => ({ ...prev, ...patch }) as never });

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-16 lg:py-24">
          <p className="eyebrow text-muted-foreground mb-4">The Collection</p>
          <h1 className="font-display text-5xl lg:text-7xl">
            {search.category
              ? categories.find((c) => c.slug === search.category)?.name
              : "Shop All"}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 lg:px-10 py-10 lg:py-16">
        {/* Filters bar */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-10 lg:mb-14">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              update({ q: query || undefined });
            }}
            className="flex items-center gap-3 border-b border-border focus-within:border-ink py-2 flex-1 max-w-md"
          >
            <Search className="size-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search the collection"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
          </form>

          <div className="flex flex-wrap items-center gap-3 lg:gap-4 lg:ml-auto">
            <SelectChip
              label="Category"
              value={search.category ?? ""}
              onChange={(v) => update({ category: v || undefined })}
              options={[{ value: "", label: "All" }, ...categories.map((c) => ({ value: c.slug, label: c.name }))]}
            />
            <SelectChip
              label="Size"
              value={search.size ?? ""}
              onChange={(v) => update({ size: v || undefined })}
              options={[{ value: "", label: "All" }, ...allSizes.map((s) => ({ value: s, label: s }))]}
            />
            <SelectChip
              label="Sort"
              value={search.sort ?? "featured"}
              onChange={(v) => update({ sort: v as never })}
              options={[
                { value: "featured", label: "Featured" },
                { value: "newest", label: "Newest" },
                { value: "price-asc", label: "Price ↑" },
                { value: "price-desc", label: "Price ↓" },
              ]}
            />
          </div>
        </div>

        <p className="eyebrow text-muted-foreground mb-8">{filtered.length} pieces</p>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-3xl mb-2">Nothing matches.</p>
            <p className="text-muted-foreground">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}

function SelectChip({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
      <span className="text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-border focus:border-ink outline-none py-1 pr-4 cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
