import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import fashionImg from "@/assets/project-fashion.jpg";
import electronicsImg from "@/assets/project-electronics.jpg";
import beautyImg from "@/assets/project-beauty.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Eldev Digital" },
      {
        name: "description",
        content:
          "Selected Shopify projects by Eldev Digital — store design, redesign, dropshipping setup, and product listing optimization.",
      },
      { property: "og:title", content: "Portfolio — Eldev Digital" },
      { property: "og:description", content: "Selected Shopify projects by Eldev Digital." },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Store Design", "Store Redesign", "Dropshipping", "Product Listing"] as const;
type Category = (typeof categories)[number];

const projects: { title: string; desc: string; category: Exclude<Category, "All">; img: string }[] = [
  {
    title: "Luxe Fashion Studio",
    desc: "A premium DTC clothing storefront with custom lookbook and Klaviyo flows.",
    category: "Store Design",
    img: fashionImg,
  },
  {
    title: "Volt Electronics",
    desc: "Full Shopify rebuild — faster, cleaner, and conversion-focused.",
    category: "Store Redesign",
    img: electronicsImg,
  },
  {
    title: "Sereline Beauty",
    desc: "Soft, premium aesthetic with quiz-driven product discovery.",
    category: "Store Design",
    img: beautyImg,
  },
  {
    title: "TrendDrop General",
    desc: "Dropshipping store fully set up with winning products and apps.",
    category: "Dropshipping",
    img: fashionImg,
  },
  {
    title: "GadgetVault",
    desc: "Product catalog upload and SEO-optimized listings for 200+ items.",
    category: "Product Listing",
    img: electronicsImg,
  },
  {
    title: "Bloom Skincare",
    desc: "Refresh of an existing Shopify store with a new modern theme.",
    category: "Store Redesign",
    img: beautyImg,
  },
];

const videoTestimonials = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
];

function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Portfolio
          </h1>
          <p className="mt-2 text-muted-foreground">A few Shopify projects I've shipped.</p>
        </header>

        {/* Filter pills */}
        <div className="mt-6 -mx-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? "bg-[#1DBF73] text-white"
                    : "bg-secondary text-foreground/70 hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-[#1DBF73]/10 px-2.5 py-1 text-[11px] font-medium text-[#1DBF73]">
                  {p.category}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#1DBF73]"
                >
                  View Project <i className="ri-arrow-right-line" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/full-portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
          >
            View All Projects <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Video testimonials */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Video testimonials</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A few clients sharing their experience.
          </p>
          <div className="mt-5 -mx-6 overflow-x-auto no-scrollbar sm:mx-0 sm:overflow-visible">
            <div className="flex gap-4 px-6 sm:grid sm:grid-cols-3 sm:px-0">
              {videoTestimonials.map((src, i) => (
                <div
                  key={src}
                  className="aspect-[9/16] w-[220px] shrink-0 overflow-hidden rounded-2xl bg-black shadow-card sm:w-auto"
                >
                  <iframe
                    src={src}
                    title={`Client testimonial ${i + 1}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales proof */}
        <section className="mt-14 mb-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Sales proof</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Verified results from real client stores.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Q1 2025 Sales", "Q2 2025 Sales", "Q3 2025 Sales"].map((label) => (
              <a
                key={label}
                href="#"
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-card transition-colors hover:bg-secondary"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1DBF73]/10">
                    <i className="ri-google-drive-line text-lg text-[#1DBF73]" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </span>
                <i className="ri-arrow-right-up-line text-muted-foreground" />
              </a>
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}
