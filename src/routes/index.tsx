import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uthman Eldev (Digital) — Shopify Expert" },
      {
        name: "description",
        content:
          "Uthman Eldev, aka Eldev Digital — a Shopify Partner expert helping store owners design, redesign, and scale profitable Shopify stores.",
      },
      { property: "og:title", content: "Uthman Eldev (Digital) — Shopify Expert" },
      {
        property: "og:description",
        content: "Shopify Partner expert. I'll bring your ideas to life.",
      },
    ],
  }),
  component: AboutPage,
});

const WHATSAPP_URL =
  "https://wa.me/2349026799223?text=" +
  encodeURIComponent("Hello, Eldev, I'm from your portfolio site");

// Skills — Shopify / e-commerce only. No Etsy, no headless commerce,
// no tautologies (each skill appears once and reads distinctly).
const SKILLS_GRID: { name: string; icon: string }[] = [
  { name: "Shopify Store Setup", icon: "ri-store-2-line" },
  { name: "Shopify Store Redesign", icon: "ri-palette-line" },
  { name: "Theme Customization", icon: "ri-brush-line" },
  { name: "Store Migration", icon: "ri-exchange-line" },
  { name: "Product & Collection Setup", icon: "ri-stack-line" },
  { name: "Store Settings Configuration", icon: "ri-settings-3-line" },
  { name: "POS Setup & Migration", icon: "ri-computer-line" },
  { name: "Website Audit & Optimization", icon: "ri-search-eye-line" },
  { name: "Ongoing Store Management", icon: "ri-tools-line" },
  { name: "Checkout Upgrade", icon: "ri-shopping-cart-2-line" },
  { name: "Conversion Rate Optimization", icon: "ri-line-chart-line" },
  { name: "Site Performance & Speed", icon: "ri-flashlight-line" },
  { name: "Shopify SEO", icon: "ri-search-line" },
  { name: "Dropshipping Setup", icon: "ri-truck-line" },
  { name: "Product Research", icon: "ri-bar-chart-box-line" },
  { name: "Product Listing Optimization", icon: "ri-price-tag-3-line" },
  { name: "Klaviyo Email Flows", icon: "ri-mail-send-line" },
  { name: "Email Marketing", icon: "ri-mail-star-line" },
  { name: "Facebook & Instagram Ads", icon: "ri-facebook-circle-line" },
  { name: "TikTok Ads", icon: "ri-tiktok-line" },
  { name: "Google Ads & Merchant Center", icon: "ri-google-line" },
];

const education = [
  {
    icon: "ri-school-line",
    school: "University of Abuja",
    course: "B.A. English",
    grad: "Graduated 2025",
  },
];

const certifications = [
  {
    title: "Shopify Website & Development",
    org: "Udemy",
    year: "2019",
  },
  {
    title: "Facebook Marketing & Advertising",
    org: "SkillUp",
    year: "2024",
  },
];

const SHORT_BIO =
  "Hi, I'm Uthman Eldev, aka Eldev Digital, a Shopify Partner expert with years of experience helping store owners achieve massive success. Whether you need a store redesign, or want to turn your Shopify store into a profitable asset, I'm here to help!";

const FULL_BIO_REST = `Why am I different?

When you work with me, you're not just getting a service, you're getting someone who is invested in your growth. I'd work on strategies that reflect your store's unique essence, bringing in more visitors, more conversions, and more profits. Your success is my priority!

Contact Me now to get started.`;

const SKILLS_PREVIEW_COUNT = 8;

function AboutPage() {
  const [bioOpen, setBioOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const visibleSkills = skillsOpen ? SKILLS_GRID : SKILLS_GRID.slice(0, SKILLS_PREVIEW_COUNT);
  const hiddenCount = SKILLS_GRID.length - SKILLS_PREVIEW_COUNT;

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        {/* About me */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">About me</h2>
          <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-foreground/80">
            {SHORT_BIO}
            {bioOpen && "\n\n" + FULL_BIO_REST}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setBioOpen((v) => !v)}
              className="text-sm font-semibold text-[#1DBF73] hover:underline"
            >
              {bioOpen ? "Show less" : "Read more"}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1DBF73] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
            >
              <i className="ri-whatsapp-line text-base" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Skills</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {visibleSkills.map((s) => (
              <div
                key={s.name}
                className="skill-card flex items-center justify-center px-2.5 py-2 text-center"
              >
                <span className="text-[12.5px] font-medium leading-tight text-foreground">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center">
            {!skillsOpen && hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setSkillsOpen(true)}
                className="rounded-full bg-[#222325] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
              >
                Show {hiddenCount} more
              </button>
            )}
            {skillsOpen && (
              <button
                type="button"
                onClick={() => setSkillsOpen(false)}
                className="rounded-full bg-[#222325] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
              >
                Show less
              </button>
            )}
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Education</h2>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            {education.map((e) => (
              <div key={e.school} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <i className={`${e.icon} text-xl text-foreground/70`} />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground">
                    <i className="ri-building-line text-base text-muted-foreground" />
                    <span className="font-semibold">{e.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="ri-book-open-line text-base" />
                    <span>{e.course}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="ri-graduation-cap-line text-base" />
                    <span>{e.grad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Certifications</h2>
          <div className="mt-4 space-y-3">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5C452]/15">
                  <i className="ri-medal-line text-xl text-[#F5C452]" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{c.title}</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">
                    {c.org} · {c.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-10 mb-4 rounded-3xl border border-border bg-secondary p-6 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-[#1DBF73]"
          >
            <i className="ri-whatsapp-line text-base" />
            Contact Me
          </a>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73]/10 px-3 py-1 text-xs font-medium text-[#1DBF73]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DBF73] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DBF73]" />
              </span>
              <LiveOnline />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground/70 border border-border">
              <i className="ri-time-line text-sm" /> Avg. response under 1 hour
            </span>
          </div>
        </section>
      </section>
    </Layout>
  );
}

function LiveOnline() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const id = setInterval(
      updateTime,
      1000 * 30
    );
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>Online{time ? ` · ${time}` : ""}</span>;
}
