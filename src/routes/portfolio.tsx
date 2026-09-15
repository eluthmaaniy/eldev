import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { projects, featuredImages, allCategories, type ProjectCategory } from "@/data/portfolio-projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Uthman Eldev (Digital)" },
      {
        name: "description",
        content:
          "Browse Uthman Eldev's Shopify portfolio — 48+ stores across fashion, beauty, jewelry, watches, food, and more.",
      },
      { property: "og:title", content: "Portfolio — Uthman Eldev (Digital)" },
      { property: "og:description", content: "48+ Shopify projects across every niche." },
      { property: "og:image", content: featuredImages[0] },
      { name: "twitter:image", content: featuredImages[0] },
    ],
    links: [{ rel: "canonical", href: "https://eldev.digital/portfolio" }],
  }),
  component: PortfolioPage,
});

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...allCategories];

function AutoCarousel({ images, interval = 3500 }: { images: string[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIdx((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-secondary"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Featured Shopify project ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <button
        type="button"
        aria-label="Previous"
        onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => setIdx((i) => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>
    </div>
  );
}

function FilterRow({
  value,
  onChange,
  options,
}: {
  value: Filter;
  onChange: (next: Filter) => void;
  options: Filter[];
}) {
  return (
    <div className="-mx-6 overflow-x-auto no-scrollbar">
      <div className="flex gap-4 px-6">
        {options.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`whitespace-nowrap pb-1 text-sm ${
              value === c
                ? "border-b border-foreground font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects.slice(0, 12) : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Work</h1>
          <p className="font-personal mt-2 text-sm text-muted-foreground">
            48+ Shopify stores · designed, redesigned and shipped
          </p>
        </header>

        <div className="mt-8">
          <AutoCarousel images={featuredImages} />
        </div>

        <div className="mt-8">
          <FilterRow value={filter} onChange={setFilter} options={filters} />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.title + p.img}>
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-2.5">
                <h3 className="truncate text-[15px] font-medium text-foreground">{p.title}</h3>
                <p className="mt-0.5 text-[12px] text-muted-foreground">{p.category}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 mb-4">
          <Link
            to="/full-portfolio"
            className="inline-flex items-center gap-0.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            View all {projects.length} projects
            <i className="ri-arrow-right-s-line" aria-hidden />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
