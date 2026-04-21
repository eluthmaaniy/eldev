import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Uthman Eldev (Digital)" },
      {
        name: "description",
        content:
          "Get in touch with Uthman Eldev — Shopify expert. Reach out via WhatsApp (UK or NG) or email contact@eldev.digital. Average response under one hour.",
      },
      { property: "og:title", content: "Contact — Uthman Eldev (Digital)" },
      { property: "og:description", content: "WhatsApp UK/NG or email contact@eldev.digital." },
    ],
  }),
  component: ContactPage,
});

const PREFILL = encodeURIComponent("Hello, Eldev, I'm from your portfolio site");

const channels = [
  {
    label: "WhatsApp · Nigeria",
    value: "+234 902 679 9223",
    icon: "ri-whatsapp-line",
    href: `https://wa.me/2349026799223?text=${PREFILL}`,
    cta: "Chat on WhatsApp",
  },
  {
    label: "WhatsApp · United Kingdom",
    value: "+44 7951 525266",
    icon: "ri-whatsapp-line",
    href: `https://wa.me/447951525266?text=${PREFILL}`,
    cta: "Chat on WhatsApp",
  },
  {
    label: "Email",
    value: "contact@eldev.digital",
    icon: "ri-mail-line",
    href: "mailto:contact@eldev.digital?subject=Project%20enquiry",
    cta: "Send email",
  },
  {
    label: "Website",
    value: "eldev.digital",
    icon: "ri-global-line",
    href: "https://eldev.digital",
    cta: "Open site",
  },
];

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
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
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1DBF73]/10">
                <i className={`${c.icon} text-2xl text-[#1DBF73]`} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">{c.label}</span>
                <span className="block truncate text-sm text-muted-foreground">{c.value}</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#222325] px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-[#1DBF73]">
                {c.cta} <i className="ri-arrow-right-up-line" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
