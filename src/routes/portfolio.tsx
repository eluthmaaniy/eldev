import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import fashionImg from "@/assets/project-fashion.jpg";
import electronicsImg from "@/assets/project-electronics.jpg";
import beautyImg from "@/assets/project-beauty.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Shopify Stores by Alex Morgan" },
      {
        name: "description",
        content:
          "Featured Shopify projects: fashion, electronics, and beauty stores I've designed and built.",
      },
      { property: "og:title", content: "Shopify Portfolio — Alex Morgan" },
      { property: "og:description", content: "Featured Shopify stores I've launched and scaled." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    img: fashionImg,
    title: "Luxe Fashion Studio",
    category: "Fashion & Apparel",
    desc: "Premium DTC clothing brand. Built a custom theme with a curated lookbook, advanced filtering, and Klaviyo flows.",
    results: ["+42% conversion rate", "3× returning customers", "1.8s LCP score"],
    tags: ["Custom Theme", "Klaviyo", "Liquid"],
  },
  {
    img: electronicsImg,
    title: "Volt Electronics",
    category: "Consumer Electronics",
    desc: "Migrated from WooCommerce to Shopify Plus. Custom product configurator, B2B portal, and ReCharge subscriptions.",
    results: ["$1.2M annual revenue", "6× faster checkout", "Zero downtime migration"],
    tags: ["Shopify Plus", "Migration", "B2B"],
  },
  {
    img: beautyImg,
    title: "Sereline Beauty",
    category: "Beauty & Skincare",
    desc: "Luxury skincare brand. Designed a soft, premium aesthetic with quiz-driven product discovery and loyalty.",
    results: ["10× revenue in 12 months", "55% email-driven sales", "Featured in Vogue"],
    tags: ["Brand Design", "Loyalty", "Quiz Funnel"],
  },
];

function PortfolioPage() {
  return (
    <Layout>
      <section className="bg-gradient-soft py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Portfolio
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Stores I've built. Results I've delivered.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A selection of my favorite Shopify projects across different industries.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="relative rounded-3xl shadow-elegant"
                />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{p.title}</h2>
                <p className="mt-4 text-muted-foreground">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {p.results.map((r) => (
                    <div key={r} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <div className="mt-2 text-sm font-semibold text-foreground">{r}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center shadow-elegant sm:p-16">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Want results like these?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Let's build your next Shopify store together.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-105"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
