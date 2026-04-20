import { createFileRoute, Link } from "@tanstack/react-router";
import { Rocket, Sparkles, Zap, ShieldCheck, Plug, LifeBuoy, Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Shopify Services & Pricing — Alex Morgan" },
      {
        name: "description",
        content:
          "Shopify store setup, theme customization, speed optimization, migrations, app integrations, and ongoing support.",
      },
      { property: "og:title", content: "Shopify Services & Pricing" },
      {
        property: "og:description",
        content: "Store setup, theme customization, speed optimization, migrations & more.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Rocket, title: "Store Setup & Launch", desc: "Full Shopify store build, ready for launch day.", price: "from $899" },
  { icon: Sparkles, title: "Theme Customization", desc: "Custom Liquid, sections, and design tweaks.", price: "from $349" },
  { icon: Zap, title: "Speed Optimization", desc: "Faster load times & better Core Web Vitals.", price: "from $249" },
  { icon: ShieldCheck, title: "Platform Migration", desc: "Seamless migrations from Woo, Magento, BigCommerce.", price: "from $599" },
  { icon: Plug, title: "App Integrations", desc: "Klaviyo, ReCharge, Yotpo, Judge.me, custom apps.", price: "from $199" },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "Monthly retainer for updates, fixes, & growth.", price: "$499/mo" },
];

const tiers = [
  {
    name: "Starter",
    price: "$899",
    desc: "Perfect for new brands launching their first store.",
    features: ["Premium theme setup", "Up to 20 products", "Basic apps installed", "Mobile-optimized", "1 revision round", "5-day delivery"],
  },
  {
    name: "Growth",
    price: "$1,899",
    popular: true,
    desc: "For brands that want a fully custom, conversion-ready store.",
    features: ["Everything in Starter", "Custom theme sections", "Up to 100 products", "Klaviyo email setup", "Speed optimization", "3 revision rounds", "10-day delivery"],
  },
  {
    name: "Premium",
    price: "$3,499",
    desc: "For scaling brands needing a premium, conversion-tuned build.",
    features: ["Everything in Growth", "Custom Liquid development", "Unlimited products", "Advanced integrations", "A/B test setup", "Unlimited revisions", "30 days post-launch support"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="bg-gradient-soft py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Services
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need to grow on Shopify
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From a brand-new launch to scaling an existing store — pick the service that fits.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 text-sm font-semibold text-primary">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Project packages
            </h2>
            <p className="mt-4 text-muted-foreground">Pick a package or message me for a custom quote.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-3xl border bg-card p-8 shadow-card ${t.popular ? "border-primary shadow-elegant ring-1 ring-primary" : "border-border"}`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-foreground">{t.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{t.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${t.popular ? "bg-gradient-primary text-primary-foreground shadow-elegant" : "border border-border bg-background text-foreground hover:bg-accent"}`}
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
