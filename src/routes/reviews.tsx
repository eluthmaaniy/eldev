import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { reviewsAll, ratingSummary, type Review } from "@/data/reviews-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews (4.7 ★ · 239) — Uthman Eldev (Digital)" },
      {
        name: "description",
        content: "Verified Fiverr & Shopify Partner reviews for Uthman Eldev — 4.7★ across 239 reviews.",
      },
      { property: "og:title", content: "Reviews — Uthman Eldev (Digital)" },
      { property: "og:description", content: "239 verified reviews · 4.7★ average" },
    ],
  }),
  component: ReviewsPage,
});

export function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const cls = size === "xs" ? "text-xs" : "text-sm";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`ri-star-fill ${cls} ${i < rating ? "text-[#B8860B]" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-3">
        <img
          src={r.avatar}
          alt={r.name}
          loading="lazy"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-foreground">{r.name}</span>
            {r.repeat && (
              <span className="rounded-full bg-[#1DBF73]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1DBF73]">
                Repeat client
              </span>
            )}
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
            <span>
              <span aria-hidden>{r.countryFlag}</span> {r.country}
            </span>
            <span>·</span>
            <span>{r.date}</span>
          </div>
          <div className="mt-2 grid gap-1 text-xs sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Quality of work</span>
              <Stars rating={r.rating} size="xs" />
              <span className="font-semibold text-foreground">{r.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Communication</span>
              <Stars rating={r.rating} size="xs" />
              <span className="font-semibold text-foreground">{r.rating}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">{r.text}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        Service reviewed: <span className="font-medium text-foreground">{r.service}</span>
      </p>
    </article>
  );
}

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = Math.max(2, Math.round((count / total) * 100));
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-16 shrink-0 items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`ri-star-fill text-xs ${i < stars ? "text-[#B8860B]" : "text-border"}`}
          />
        ))}
      </div>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-[#1DBF73]" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">({count})</span>
    </div>
  );
}

function ReviewsPage() {
  const preview = reviewsAll.slice(0, 8);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Reviews
          </h1>
          <p className="mt-2 text-muted-foreground">
            What clients say about working with me.
          </p>
        </header>

        {/* Summary */}
        <div className="mt-6 rounded-3xl border border-border bg-secondary p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-foreground">
                  {ratingSummary.average}
                </span>
                <Stars rating={5} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Based on {ratingSummary.total} verified reviews
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73] px-3 py-1.5 text-xs font-semibold text-white">
              <i className="ri-verified-badge-fill" /> Verified
            </span>
          </div>

          <div className="mt-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Overall rating summary
            </p>
            {([5, 4, 3, 2, 1] as const).map((s) => (
              <RatingBar
                key={s}
                stars={s}
                count={ratingSummary.breakdown[s]}
                total={ratingSummary.total}
              />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {preview.map((r, i) => (
            <ReviewCard key={r.name + i} r={r} />
          ))}
        </div>

        <div className="mt-8 mb-4 flex justify-center">
          <Link
            to="/full-reviews"
            className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
          >
            See all {ratingSummary.total} reviews <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
