import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Eldev Digital" },
      {
        name: "description",
        content:
          "Verified Fiverr client reviews for Eldev Digital — Shopify expert with a 5.0 rating across hundreds of projects.",
      },
      { property: "og:title", content: "Reviews — Eldev Digital" },
      { property: "og:description", content: "Verified client reviews on Fiverr." },
    ],
  }),
  component: ReviewsPage,
});

export const reviews = [
  {
    name: "Sarah Mitchell",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "March 2025",
    text: "Absolutely incredible work on my Shopify store. The design is sleek, the speed is amazing, and Eldev was so easy to communicate with. Will hire again for sure!",
  },
  {
    name: "James Okafor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "February 2025",
    text: "Delivered my dropshipping store ahead of schedule. Every detail was thought through — from product listings to checkout. Highly recommended.",
  },
  {
    name: "Aisha Bello",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "January 2025",
    text: "My old Shopify store felt outdated. Eldev redesigned it from the ground up and conversions jumped within the first two weeks. Brilliant work.",
  },
  {
    name: "Tom Harrington",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    date: "December 2024",
    text: "Professional, fast, and patient with my endless revisions. The final store looks better than I imagined. Easy 5 stars.",
  },
  {
    name: "Fatima Al-Rashid",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    date: "November 2024",
    text: "Eldev built my beauty store and helped me set up email flows. Sales started coming in days after launch. Worth every penny.",
  },
  {
    name: "Kevin Mensah",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    date: "October 2024",
    text: "Smooth experience from start to finish. Communication was top-tier and the product listings he wrote actually convert. Will be back.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className="ri-star-fill text-sm text-[#1DBF73]" />
      ))}
    </div>
  );
}

export function ReviewCard({
  name,
  avatar,
  date,
  text,
}: {
  name: string;
  avatar: string;
  date: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt={name}
          loading="lazy"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-foreground">{name}</span>
            <span className="rounded-full bg-[#1DBF73]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1DBF73]">
              Fiverr
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <Stars />
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">{text}</p>
    </article>
  );
}

function ReviewsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Reviews
          </h1>
          <p className="mt-2 text-muted-foreground">What clients say about working with me.</p>
        </header>

        {/* Summary */}
        <div className="mt-6 rounded-3xl border border-border bg-secondary p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-foreground">5.0</span>
                <Stars />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Based on 200+ reviews</div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73] px-3 py-1.5 text-xs font-semibold text-white">
              <i className="ri-verified-badge-fill" /> Fiverr Verified
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        <div className="mt-8 mb-4 flex justify-center">
          <Link
            to="/full-reviews"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
          >
            See all reviews <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
