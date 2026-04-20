import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import avatarImg from "@/assets/avatar.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Alex Morgan — Shopify Expert" },
      {
        name: "description",
        content:
          "6+ years of Shopify development experience. Skilled in Liquid, Shopify Plus, Klaviyo, and conversion optimization.",
      },
      { property: "og:title", content: "About Alex Morgan" },
      { property: "og:description", content: "Shopify expert with 6+ years of experience." },
    ],
  }),
  component: AboutPage,
});

const skills = ["Shopify Liquid", "Shopify Plus", "Theme Development", "Hydrogen / Headless", "Klaviyo Email", "Conversion Optimization", "Shopify Apps", "SEO & Analytics"];
const tools = ["Shopify CLI", "Liquid", "Tailwind", "Klaviyo", "GTM", "Figma", "GitHub", "Zapier"];

const process = [
  { step: "01", title: "Discovery", desc: "We talk through your goals, audience, and brand to define a plan." },
  { step: "02", title: "Design", desc: "I design a clean, on-brand experience built for conversions." },
  { step: "03", title: "Build", desc: "Pixel-perfect Liquid development with apps and integrations." },
  { step: "04", title: "Launch", desc: "QA, optimize, and go live — with ongoing support if you need it." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="bg-gradient-soft py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
            <img
              src={avatarImg}
              alt="Alex Morgan"
              width={768}
              height={768}
              className="relative rounded-3xl shadow-elegant"
            />
          </div>
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              About me
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Hi, I'm Alex — a Shopify expert obsessed with conversions.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              For the last 6+ years I've helped 85+ founders and brands launch and scale on Shopify.
              From DTC fashion labels to 7-figure electronics shops — my job is making sure your
              store looks beautiful, loads fast, and turns visitors into paying customers.
            </p>
            <p className="mt-4 text-muted-foreground">
              I work with founders directly. No middlemen, no junior devs, no surprises. Just
              clean, well-documented Shopify work delivered on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                Work with me <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                See services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills</h2>
              <p className="mt-3 text-muted-foreground">Where I can help your store grow.</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Tools I use</h2>
              <p className="mt-3 text-muted-foreground">My daily toolkit.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My process</h2>
            <p className="mt-4 text-muted-foreground">A clear, structured workflow from kickoff to launch.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-3xl font-bold text-primary/60">{p.step}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
