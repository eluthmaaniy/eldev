import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { reviewsAll, ratingSummary } from "@/data/reviews-data";
import { ReviewCard } from "./reviews";
import { Stars } from "@/components/site/Stars";

export const Route = createFileRoute("/full-reviews")({
  head: () => ({
    meta: [
      { title: `All ${ratingSummary.total} Reviews — Uthman Eldev (Digital)` },
      {
        name: "description",
        content: `Read all ${ratingSummary.total} verified Shopify client reviews — ${ratingSummary.average}★ average across every project.`,
      },
      { property: "og:title", content: `All ${ratingSummary.total} Reviews — Uthman Eldev` },
      { property: "og:description", content: "Every verified review, in one place." },
    ],
    links: [{ rel: "canonical", href: "https://eldev.digital/full-reviews" }],
  }),
  component: FullReviews,
});

const PAGE_SIZE = 24;

function FullReviews() {
  const [count, setCount] = useState(PAGE_SIZE);
  const [filter, setFilter] = useState<"all" | "5" | "4" | "3" | "repeat">("all");

  const filtered = reviewsAll.filter((r) => {
    if (filter === "all") return true;
    if (filter === "repeat") return r.repeat;
    return String(r.rating) === filter;
  });
  const visible = filtered.slice(0, count);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-12">
        <Link to="/reviews" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <i className="ri-arrow-left-s-line" aria-hidden />
          Reviews
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">All reviews</h1>
        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
          <Stars rating={5} />
          <span className="font-medium text-foreground">{ratingSummary.average}</span>
          <span>({ratingSummary.total})</span>
        </div>

        <div className="mt-6 -mx-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-6">
            {(
              [
                ["all", "All"],
                ["5", "5 stars"],
                ["4", "4 stars"],
                ["3", "3 stars"],
                ["repeat", "Repeat"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  setFilter(k);
                  setCount(PAGE_SIZE);
                }}
                className={`whitespace-nowrap pb-1 text-sm ${
                  filter === k
                    ? "border-b border-foreground font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {visible.map((r, i) => (
            <ReviewCard key={r.name + i} r={r} />
          ))}
        </div>

        {count < filtered.length && (
          <div className="mt-10 mb-4">
            <button
              type="button"
              onClick={() => setCount((c) => c + PAGE_SIZE)}
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Load more
            </button>
          </div>
        )}
        {count >= filtered.length && (
          <p className="mt-10 mb-4 text-sm text-muted-foreground">{filtered.length} reviews shown</p>
        )}
      </section>
    </Layout>
  );
}
