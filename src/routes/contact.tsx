import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { EMAIL_HREF, WHATSAPP_URL } from "@/lib/contact";

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

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-12">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Let's talk</h1>
          <p className="font-personal mt-2 text-muted-foreground">
            Tell me about your Shopify store — I'll write back personally.
          </p>
        </header>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1DBF73] px-6 py-3 text-sm font-semibold text-white"
          >
            <i className="ri-whatsapp-line text-base" aria-hidden />
            WhatsApp
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
          >
            <i className="ri-mail-line text-base" aria-hidden />
            Email
          </a>
        </div>
        <p className="mt-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground">
          <i className="ri-time-line" aria-hidden />
          Usually replies in under an hour
        </p>

        <ul className="mt-10 mb-4 space-y-3 text-sm">
          <li>
            <span className="block text-[12px] text-muted-foreground">Email</span>
            <a href={EMAIL_HREF} className="inline-flex items-center gap-1.5 text-foreground hover:underline">
              <i className="ri-mail-line" aria-hidden />
              contact@eldev.digital
            </a>
          </li>
          <li>
            <span className="block text-[12px] text-muted-foreground">Site</span>
            <a
              href="https://eldev.digital"
              className="inline-flex items-center gap-1.5 text-foreground hover:underline"
            >
              <i className="ri-global-line" aria-hidden />
              eldev.digital
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
