import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Eldev Digital" },
      {
        name: "description",
        content:
          "Technical skills, tools, and platforms Eldev Digital uses — Shopify, Liquid, React, Klaviyo, Meta Ads, and more.",
      },
      { property: "og:title", content: "Skills — Eldev Digital" },
      { property: "og:description", content: "Technical skills and tools I work with." },
    ],
  }),
  component: SkillsPage,
});

const technical = [
  { name: "Shopify", icon: "ri-shopping-bag-3-line" },
  { name: "Liquid", icon: "ri-code-s-slash-line" },
  { name: "HTML / CSS", icon: "ri-html5-line" },
  { name: "JavaScript", icon: "ri-javascript-line" },
  { name: "React", icon: "ri-reactjs-line" },
  { name: "Responsive Design", icon: "ri-smartphone-line" },
];

const tools = [
  { name: "Figma", icon: "ri-pen-nib-line" },
  { name: "Klaviyo", icon: "ri-mail-send-line" },
  { name: "Meta Ads Manager", icon: "ri-facebook-circle-line" },
  { name: "Google Analytics", icon: "ri-line-chart-line" },
  { name: "Canva", icon: "ri-palette-line" },
  { name: "Shopify Partners", icon: "ri-store-2-line" },
];

function Pill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5">
      <i className={`${icon} text-base text-[#1DBF73]`} />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

function SkillsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Skills</h1>
          <p className="mt-2 text-muted-foreground">What I work with day-to-day.</p>
        </header>

        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Technical Skills
          </h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {technical.map((s) => (
              <Pill key={s.name} {...s} />
            ))}
          </div>
        </section>

        <section className="mt-10 mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Tools & Platforms
          </h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {tools.map((s) => (
              <Pill key={s.name} {...s} />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}
