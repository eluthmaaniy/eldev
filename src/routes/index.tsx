import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ProfileCard } from "@/components/site/ProfileCard";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { projects } from "@/data/portfolio-projects";
import { reviewsAll, ratingSummary } from "@/data/reviews-data";
import { Stars } from "@/components/site/Stars";
import { COVER_URL, WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uthman Eldev (Digital) — Top Rated Shopify Expert & Partner" },
      {
        name: "description",
        content:
          "Top Rated Shopify Expert & verified Shopify Partner. Hire Uthman Eldev (Eldev Digital) for Shopify store design, redesign, theme customization, dropshipping setup, Shopify SEO, and Klaviyo email flows. 4.8★ across 239 reviews.",
      },
      { property: "og:title", content: "Uthman Eldev (Digital) — Top Rated Shopify Expert" },
      {
        property: "og:description",
        content:
          "Top Rated Shopify Expert & Partner — store design, redesign, dropshipping, Shopify SEO, Klaviyo. 4.8★ · 239 reviews.",
      },
      { property: "og:image", content: COVER_URL },
      { name: "twitter:image", content: COVER_URL },
    ],
    links: [{ rel: "canonical", href: "https://eldev.digital/" }],
  }),
  component: AboutPage,
});

const SKILL_GROUPS: { title: string; icon: string; items: string[] }[] = [
  {
    title: "Stores",
    icon: "ri-store-2-line",
    items: [
      "Shopify Store Setup",
      "Shopify Store Redesign",
      "Theme Customization",
      "Store Migration",
      "Product & Collection Setup",
      "Store Settings Configuration",
      "POS Setup & Migration",
      "Ongoing Store Management",
    ],
  },
  {
    title: "Growth",
    icon: "ri-line-chart-line",
    items: [
      "Website Audit & Optimization",
      "Checkout Upgrade",
      "Conversion Rate Optimization",
      "Site Performance & Speed",
      "Shopify SEO",
    ],
  },
  {
    title: "Selling",
    icon: "ri-shopping-bag-3-line",
    items: ["Dropshipping Setup", "Product Research", "Product Listing Optimization"],
  },
  {
    title: "Marketing",
    icon: "ri-megaphone-line",
    items: [
      "Klaviyo Email Flows",
      "Email Marketing",
      "Facebook & Instagram Ads",
      "TikTok Ads",
      "Google Ads & Merchant Center",
    ],
  },
];

const PREVIEW_PER_GROUP = 3;

const education = {
  school: "University of Abuja",
  course: "B.A. English",
  grad: "Graduated 2025",
};

const certifications = [
  { title: "Shopify Website & Development", org: "Udemy", year: "2019" },
  { title: "Facebook Marketing & Advertising", org: "SkillUp", year: "2024" },
  { title: "Shopify Theme Development & Liquid", org: "Shopify Partner Academy", year: "2023" },
  { title: "Google Ads Search Certification", org: "Google Skillshop", year: "2024" },
  { title: "Klaviyo Email Marketing Certification", org: "Klaviyo Academy", year: "2024" },
];

const featuredStores = projects.slice(0, 3);
const featuredReviews = reviewsAll
  .slice()
  .sort((a, b) => Number(b.repeat ?? 0) - Number(a.repeat ?? 0) || b.rating - a.rating)
  .filter((r) => r.rating === 5)
  .slice(0, 3);

function AboutPage() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <Layout>
      <ProfileCard />

      <div className="mx-auto max-w-2xl px-6">
        <p className="font-personal whitespace-pre-line text-[16px] leading-relaxed text-foreground/80">
          Hi, I'm Uthman — I help Shopify and e-commerce store owners turn a store that isn't converting into one that looks right, loads fast, and actually sells.
          {"\n\n"}
          When you work with me, you're not buying a generic package. I'll work on the store in front of us — redesign, theme work, dropshipping setup, SEO, Klaviyo — whatever it takes to bring in more visitors, more conversions, and more profit. Your success is the brief.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            <i className="ri-tools-line mr-1.5 text-base text-muted-foreground" aria-hidden />
            What I do
          </h2>
          <div className="mt-5 grid gap-8 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => {
              const items = skillsOpen ? group.items : group.items.slice(0, PREVIEW_PER_GROUP);
              return (
                <div key={group.title}>
                  <h3 className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <i className={`${group.icon} text-base`} aria-hidden />
                    {group.title}
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-[15px] text-foreground/80">
                    {items.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setSkillsOpen((v) => !v)}
            className="mt-5 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {skillsOpen ? "Show less" : "Show all"}
          </button>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            <i className="ri-graduation-cap-line mr-1.5 text-base text-muted-foreground" aria-hidden />
            Background
          </h2>
          <p className="font-personal mt-3 text-[15px] text-foreground/80">
            <i className="ri-school-line mr-1 text-muted-foreground" aria-hidden />
            {education.course}, {education.school} · {education.grad}
          </p>
          <ul className="mt-4 space-y-2 text-[14px] text-muted-foreground">
            {[...certifications]
              .sort((a, b) => Number(b.year) - Number(a.year))
              .map((c) => (
                <li key={c.title} className="flex items-start gap-2">
                  <i className="ri-award-line mt-0.5 text-base" aria-hidden />
                  <span>
                    <span className="text-foreground/80">{c.title}</span>
                    <span>
                      {" "}
                      · {c.org}, {c.year}
                    </span>
                  </span>
                </li>
              ))}
          </ul>
        </section>

        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">A few stores</h2>
            <Link to="/portfolio" className="inline-flex items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground">
              All work <i className="ri-arrow-right-s-line" aria-hidden />
            </Link>
          </div>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {featuredStores.map((p) => (
              <article key={p.title + p.img}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-2.5 truncate text-[14px] font-medium text-foreground">{p.title}</h3>
                <p className="truncate text-[12px] text-muted-foreground">{p.category}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">What clients say</h2>
            <Link to="/reviews" className="inline-flex items-center gap-0.5 text-sm text-muted-foreground hover:text-foreground">
              All {ratingSummary.total} <i className="ri-arrow-right-s-line" aria-hidden />
            </Link>
          </div>
          <div className="mt-5 space-y-6">
            {featuredReviews.map((r, i) => (
              <blockquote key={r.name + i}>
                <Stars rating={r.rating} size="xs" />
                <p className="font-personal mt-2 text-[15px] leading-relaxed text-foreground/80">“{r.text}”</p>
                <footer className="mt-2 text-[13px] text-muted-foreground">
                  {r.name}
                  {r.repeat ? " · Repeat client" : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <PartnerLogos />
        </section>

        <section className="mt-14 mb-4 text-center">
          <p className="font-personal text-[15px] text-muted-foreground">Have a Shopify store that needs work?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1DBF73] px-6 py-3 text-sm font-semibold text-white"
          >
            <i className="ri-whatsapp-line text-base" aria-hidden />
            Message me on WhatsApp
          </a>
          <p className="mt-3 inline-flex items-center gap-1 text-[12px] text-muted-foreground">
            <i className="ri-time-line" aria-hidden />
            Usually replies in under an hour
          </p>
        </section>
      </div>
    </Layout>
  );
}
