import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import avatarImg from "@/assets/eldev-avatar.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Uthman Eldev (Digital)" },
      {
        name: "description",
        content:
          "Get in touch with Uthman Eldev — Shopify expert. Reach out via WhatsApp or email contact@eldev.digital. Average response under one hour.",
      },
      { property: "og:title", content: "Contact — Uthman Eldev (Digital)" },
      { property: "og:description", content: "WhatsApp or email contact@eldev.digital." },
    ],
    links: [{ rel: "canonical", href: "https://eldev.digital/contact" }],
  }),
  component: ContactPage,
});

const PREFILL = encodeURIComponent("Hello, Eldev, I'm from your portfolio site");

const WHATSAPP_NG = `https://wa.me/2349026799223?text=${PREFILL}`;
const EMAIL_HREF = "mailto:contact@eldev.digital?subject=Project%20enquiry";

const quietChannels = [
  {
    label: "Website",
    value: "eldev.digital",
    icon: "ri-global-line",
    href: "https://eldev.digital",
  },
  {
    label: "Email",
    value: "contact@eldev.digital",
    icon: "ri-mail-line",
    href: EMAIL_HREF,
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

        {/* Zone A — Hero contact card */}
        <div className="mt-6 rounded-3xl border border-border bg-card p-6 text-center shadow-card sm:p-8">
          <div className="flex justify-center">
            <img
              src={avatarImg}
              alt="Uthman Eldev"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full border-2 border-[#1DBF73] object-cover"
            />
          </div>
          <h2 className="mt-3 inline-flex items-center justify-center gap-1.5 text-lg font-semibold text-foreground">
            Uthman Eldev
            <i className="ri-verified-badge-fill text-[#1DA1F2]" aria-label="Verified" />
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#1DBF73]/10 px-3 py-1.5 text-xs font-medium text-[#1DBF73]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#1DBF73]" />
            Average response under 1 hour
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={WHATSAPP_NG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1DBF73] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.01]"
            >
              <i className="ri-whatsapp-line text-base" />
              Chat on WhatsApp
            </a>
            <a
              href={EMAIL_HREF}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <i className="ri-mail-line text-base" />
              Send email
            </a>
          </div>
        </div>

        {/* Zone B — Quiet directory list */}
        <div className="mt-8 mb-4">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Other channels
          </p>
          <ul className="mt-2 divide-y divide-border">
            {quietChannels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-1 py-3.5 transition-colors hover:text-[#1DBF73]"
                >
                  <i className={`${c.icon} text-lg text-[#1DBF73]`} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-foreground">{c.label}</span>
                    <span className="block truncate text-xs text-muted-foreground">{c.value}</span>
                  </span>
                  <i className="ri-arrow-right-up-line text-base text-muted-foreground transition-colors group-hover:text-[#1DBF73]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
