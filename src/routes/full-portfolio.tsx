import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { projects, allCategories, type ProjectCategory } from "@/data/portfolio-projects";

export const Route = createFileRoute("/full-portfolio")({
  head: () => ({
    meta: [
      { title: `Full Portfolio (${projects.length}+ Projects) — Uthman Eldev (Digital)` },
      {
        name: "description",
        content: `Browse all ${projects.length}+ Shopify projects by Uthman Eldev — store design, redesigns, dropshipping, and more.`,
      },
      { property: "og:title", content: "Full Portfolio — Uthman Eldev (Digital)" },
      { property: "og:description", content: `All ${projects.length}+ Shopify projects in one place.` },
      { property: "og:image", content: projects[0]?.img },
      { name: "twitter:image", content: projects[0]?.img },
    ],
    links: [{ rel: "canonical", href: "https://eldev.digital/full-portfolio" }],
  }),
  component: FullPortfolio,
});

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...allCategories];

function FullPortfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 pt-10 sm:pt-12">
        <Link to="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <i className="ri-arrow-left-s-line" aria-hidden />
          Work
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">All work</h1>
        <p className="mt-2 text-muted-foreground">All {projects.length} Shopify projects, in one place.</p>

        <div className="mt-6 -mx-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-6">
            {filters.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap pb-1 text-sm ${
                  filter === c
                    ? "border-b border-foreground font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title + p.img}>
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-2.5">
                <h3 className="text-[15px] font-medium text-foreground">{p.title}</h3>
                <p className="mt-0.5 text-[12px] text-muted-foreground">{p.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
