import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Rocket, Zap, ShieldCheck, Star, TrendingUp, Users, Store } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero.jpg";
import fashionImg from "@/assets/project-fashion.jpg";
import electronicsImg from "@/assets/project-electronics.jpg";
import beautyImg from "@/assets/project-beauty.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Shopify Expert & Store Developer" },
      {
        name: "description",
        content:
          "I help brands launch and scale high-converting Shopify stores. Custom themes, speed optimization, migrations & more.",
      },
      { property: "og:title", content: "Alex Morgan — Shopify Expert" },
      {
        property: "og:description",
        content: "Shopify expert helping brands launch high-converting stores.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Stores Launched", value: "120+", icon: Store },
  { label: "Happy Clients", value: "85+", icon: Users },
  { label: "Years Experience", value: "6+", icon: Sparkles },
  { label: "Avg. Conversion Lift", value: "+38%", icon: TrendingUp },
];

const services = [
  { icon: Rocket, title: "Store Setup & Launch", desc: "End-to-end Shopify store builds — from theme to apps to launch day." },
  { icon: Sparkles, title: "Theme Customization", desc: "Pixel-perfect Liquid customization with your brand identity baked in." },
  { icon: Zap, title: "Speed Optimization", desc: "Faster load times, better Core Web Vitals, higher conversions." },
  { icon: ShieldCheck, title: "Migrations", desc: "Seamless WooCommerce, Magento, BigCommerce → Shopify migrations." },
];

const projects = [
  { img: fashionImg, title: "Luxe Fashion Studio", category: "Fashion & Apparel", result: "+42% conversion" },
  { img: electronicsImg, title: "Volt Electronics", category: "Consumer Electronics", result: "$1.2M / year" },
  { img: beautyImg, title: "Sereline Beauty", category: "Beauty & Skincare", result: "10× growth" },
];

const testimonials = [
  { name: "Sarah K.", role: "Founder, Luxe Studio", text: "Alex transformed our store. Sales doubled in 3 months." },
  { name: "Marcus T.", role: "CEO, Volt", text: "Best Shopify dev we've ever worked with. Period." },
  { name: "Priya R.", role: "Sereline Beauty", text: "Fast, professional, and the design is beautiful." },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center animate-fade-in-up">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Shopify Partner · Available for projects
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              I build <span className="text-primary">high-converting</span> Shopify stores
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Hi, I'm Alex — a Shopify expert with 6+ years of experience helping brands launch,
              scale, and convert with custom-built stores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                View my work
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span>5.0 from 85+ clients on Fiverr & Upwork</span>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Shopify store design showcase"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-3xl font-bold text-foreground">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I do best
            </h2>
            <p className="mt-4 text-muted-foreground">
              Full-stack Shopify expertise — from launch to scale.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured projects
              </h2>
              <p className="mt-3 text-muted-foreground">
                A few stores I've recently built and shipped.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{p.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by founders worldwide
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-foreground">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center shadow-elegant sm:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)] opacity-10" />
            <h2 className="relative font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to launch your Shopify store?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Let's chat about your project. Free 30-minute consultation, no strings attached.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-105"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
