import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eldev Digital" },
      {
        name: "description",
        content:
          "Get in touch with Eldev Digital — Shopify expert. Reach out via WhatsApp, email, or Fiverr. Average response under one hour.",
      },
      { property: "og:title", content: "Contact — Eldev Digital" },
      { property: "og:description", content: "Reach out via WhatsApp, email, or Fiverr." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "WhatsApp",
    value: "Chat instantly",
    icon: "ri-whatsapp-line",
    href: "https://wa.me/2340000000000",
    cta: "Open WhatsApp",
  },
  {
    label: "Email",
    value: "hello@eldevdigital.com",
    icon: "ri-mail-line",
    href: "mailto:hello@eldevdigital.com",
    cta: "Send email",
  },
  {
    label: "Fiverr",
    value: "View my profile",
    icon: "ri-store-2-line",
    href: "https://fiverr.com",
    cta: "Open Fiverr",
  },
];

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-14">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let's work together
          </h1>
          <p className="mt-2 text-muted-foreground">
            Whether you have a project in mind or just want to say hi — my inbox is always open.
          </p>
        </header>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1DBF73]/10 px-3 py-1.5 text-xs font-medium text-[#1DBF73]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DBF73] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DBF73]" />
          </span>
          Average response time: under 1 hour
        </div>

        <div className="mt-8 grid gap-4 mb-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1DBF73]/10">
                <i className={`${c.icon} text-2xl text-[#1DBF73]`} />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-foreground">{c.label}</span>
                <span className="block text-sm text-muted-foreground">{c.value}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-white">
                {c.cta} <i className="ri-arrow-right-up-line" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
