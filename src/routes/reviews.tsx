import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Stars } from "@/components/site/Stars";
import {
  reviewsAll,
  ratingSummary,
  formatRelativeDate,
  formatExactDate,
  type Review,
} from "@/data/reviews-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews (4.8 ★ · 239) — Uthman Eldev (Digital)" },
      {
        name: "description",
        content: "Verified Shopify Partner reviews for Uthman Eldev — 4.8★ across 239 reviews.",
      },
      { property: "og:title", content: "Reviews — Uthman Eldev (Digital)" },
      { property: "og:description", content: "239 verified reviews · 4.8★ average" },
    ],
    links: [{ rel: "canonical", href: "https://eldev.digital/reviews" }],
  }),
  component: ReviewsPage,
});

function useLiveDate(ts: number) {
  const [label, setLabel] = useState<string>(() => formatExactDate(ts));
  useEffect(() => {
    const update = () => setLabel(`${formatRelativeDate(ts)} · ${formatExactDate(ts)}`);
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [ts]);
  return label;
}

export function ReviewCard({ r }: { r: Review }) {
  const dateLabel = useLiveDate(r.timestamp);
  return (
    <article>
      <div className="flex items-start gap-3">
        <img
          src={r.avatar}
          alt=""
          loading="lazy"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="font-medium text-foreground">{r.name}</span>
            {r.repeat && (
              <span className="inline-flex items-center gap-1 text-[12px] text-muted-foreground">
                <i className="ri-repeat-line" aria-hidden />
                Repeat client
              </span>
            )}
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[12px] text-muted-foreground">
            <span>
              <span aria-hidden>{r.countryFlag}</span> {r.country}
            </span>
            <span aria-hidden>·</span>
            <span suppressHydrationWarning>{dateLabel}</span>
          </div>
          <div className="mt-2">
            <Stars rating={r.rating} size="xs" />
          </div>
        </div>
      </div>
      <p className="font-personal mt-3 text-[15px] leading-relaxed text-foreground/80">{r.text}</p>
      <p className="mt-2 text-[12px] text-muted-foreground">{r.service}</p>
    </article>
  );
}

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = Math.max(2, Math.round((count / total) * 100));
  return (
    <div className="flex items-center gap-3">
      <span className="w-10 shrink-0 text-[12px] text-muted-foreground">{stars} star</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-foreground/70" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 shrink-0 text-right text-[12px] text-muted-foreground">({count})</span>
    </div>
  );
}

function ReviewsPage() {
  const preview = reviewsAll.slice(0, 8);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Reviews</h1>
          <p className="font-personal mt-2 text-muted-foreground">What clients say about working with me.</p>
        </header>

        <div className="mt-8">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight text-foreground">
              {ratingSummary.average}
            </span>
            <Stars rating={5} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {ratingSummary.total} verified reviews
          </p>
          <div className="mt-5 space-y-2">
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

        <div className="mt-10 space-y-8">
          {preview.map((r, i) => (
            <ReviewCard key={r.name + i} r={r} />
          ))}
        </div>

        <div className="mt-10 mb-4">
          <Link
            to="/full-reviews"
            className="inline-flex items-center gap-0.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            See all {ratingSummary.total} reviews
            <i className="ri-arrow-right-s-line" aria-hidden />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
