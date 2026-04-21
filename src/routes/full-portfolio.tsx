import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import fashionImg from "@/assets/project-fashion.jpg";
import electronicsImg from "@/assets/project-electronics.jpg";
import beautyImg from "@/assets/project-beauty.jpg";

export const Route = createFileRoute("/full-portfolio")({
  head: () => ({
    meta: [
      { title: "Full Portfolio — Eldev Digital" },
      {
        name: "description",
        content:
          "Browse all Shopify projects by Eldev Digital — store design, redesigns, dropshipping setups, and product listing work.",
      },
      { property: "og:title", content: "Full Portfolio — Eldev Digital" },
      { property: "og:description", content: "All Shopify projects by Eldev Digital." },
    ],
  }),
  component: FullPortfolio,
});

const images = [fashionImg, electronicsImg, beautyImg];
const categories = ["Store Design", "Store Redesign", "Dropshipping", "Product Listing"] as const;

const all = Array.from({ length: 18 }).map((_, i) => ({
  title: `Project ${String(i + 1).padStart(2, "0")}`,
  desc:
    [
      "Custom Shopify storefront built from a Figma design.",
      "Full Shopify rebuild — faster, cleaner, conversion-focused.",
      "Dropshipping store fully set up with winning products.",
      "Product catalog upload and SEO-optimized listings.",
    ][i % 4],
  category: categories[i % categories.length],
  img: images[i % images.length],
}));

function FullPortfolio() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 pt-10 sm:pt-14">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <i className="ri-arrow-left-line" /> Back to Portfolio
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          All Projects
        </h1>
        <p className="mt-2 text-muted-foreground">Every Shopify project I've shipped, in one place.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
          {all.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-[#1DBF73]/10 px-2.5 py-1 text-[11px] font-medium text-[#1DBF73]">
                  {p.category}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
