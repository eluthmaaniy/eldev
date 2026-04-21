import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import avatar from "@/assets/eldev-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eldev Digital — Shopify Expert & Web Developer" },
      {
        name: "description",
        content:
          "I'm Eldev Digital, a Nigerian Shopify Partner and web developer. I bring your Shopify ideas to life with custom store design, redesign, and dropshipping setup.",
      },
      { property: "og:title", content: "Eldev Digital — Shopify Expert" },
      {
        property: "og:description",
        content: "I bring your Shopify ideas to life. Store design, redesign, dropshipping setup, and more.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "50+", label: "Projects" },
  { value: "3+", label: "Years" },
  { value: "100%", label: "Satisfaction" },
];

const certifications = [
  { title: "Shopify Website & Development", org: "Udemy", year: "2019" },
  { title: "Facebook Marketing & Advertising", org: "SkillUp", year: "2024" },
];

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-14">
        {/* Hero */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <div className="relative">
            <img
              src={avatar}
              alt="Eldev Digital"
              width={144}
              height={144}
              className="h-36 w-36 rounded-full object-cover shadow-soft ring-4 ring-white"
            />
            <span className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-soft">
              <span className="h-3 w-3 rounded-full bg-[#1DBF73]" />
            </span>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1DBF73]/10 px-3 py-1 text-xs font-medium text-[#1DBF73]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DBF73] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DBF73]" />
            </span>
            Available for work
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Eldev Digital
          </h1>
          <p className="mt-2 max-w-md text-balance text-base text-muted-foreground">
            I bring your Shopify ideas to life.
          </p>

          <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-map-pin-line text-base" /> Nigeria 🇳🇬
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-translate-2 text-base" /> English
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-10 rounded-3xl bg-secondary p-6">
          <p className="text-[15px] leading-relaxed text-foreground/80">
            I'm a Shopify Partner and web developer with hands-on experience helping store owners
            build, redesign, and scale their online presence. I built this site myself — because I
            build everything myself.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-semibold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Education
          </h2>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <i className="ri-graduation-cap-line text-xl text-foreground/70" />
              </div>
              <div>
                <div className="font-semibold text-foreground">University of Abuja</div>
                <div className="mt-0.5 text-sm text-muted-foreground">B.A. English · Graduated 2025</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Certifications
          </h2>
          <div className="mt-4 space-y-3">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1DBF73]/10">
                  <i className="ri-medal-line text-xl text-[#1DBF73]" />
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

        {/* CTA */}
        <div className="mt-12 mb-4 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-[#1DBF73] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
          >
            View My Work <i className="ri-arrow-right-line text-base" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
