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
      className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-secondary shadow-card"
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
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-soft transition-colors hover:bg-white"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => setIdx((i) => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-soft transition-colors hover:bg-white"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ManualSnapCarousel({ projects: items }: { projects: typeof projects }) {
  return (
    <div className="-mx-6 overflow-x-auto no-scrollbar">
      <div className="flex snap-x snap-mandatory gap-4 px-6">
        {items.map((p) => (
          <article
            key={p.title}
            className="group w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-card sm:w-[300px]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="inline-block rounded-full bg-[#1DBF73]/10 px-2.5 py-1 text-[11px] font-medium text-[#1DBF73]">
                {p.category}
              </span>
              <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects.slice(0, 12) : projects.filter((p) => p.category === filter);
  const recent = projects.slice(0, 8);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Portfolio
          </h1>
          <p className="mt-2 text-muted-foreground">
            48+ Shopify stores I've designed, redesigned and shipped.
          </p>
        </header>

        {/* Featured auto-slider */}
        <div className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Featured Showcase
          </h2>
          <AutoCarousel images={featuredImages} />
        </div>

        {/* Recent — manual snap carousel */}
        <div className="mt-10">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Recent Projects
            </h2>
            <span className="text-xs text-muted-foreground">Swipe →</span>
          </div>
          <ManualSnapCarousel projects={recent} />
        </div>

        {/* Filter pills */}
        <div className="mt-10 -mx-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-6">
            {filters.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? "bg-[#222325] text-white hover:bg-[#1DBF73]"
                    : "bg-secondary text-foreground/70 hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid listing */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.title + p.img}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-[#1DBF73]/10 px-2.5 py-1 text-[11px] font-medium text-[#1DBF73]">
                  {p.category}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Ordered by <span className="font-medium text-foreground">{p.client}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 mb-4 flex justify-center">
          <Link
            to="/full-portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
          >
            View All {projects.length} Projects <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
