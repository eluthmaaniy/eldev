import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Alex Morgan — Shopify Expert" },
      {
        name: "description",
        content: "Get in touch for Shopify store setup, customization, or optimization. Free 30-min consultation.",
      },
      { property: "og:title", content: "Contact Alex Morgan" },
      { property: "og:description", content: "Let's chat about your Shopify project." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@alexmorgan.dev", href: "mailto:hello@alexmorgan.dev" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 010-2025", href: "https://wa.me/15550102025" },
  { icon: Send, label: "Fiverr", value: "fiverr.com/alexmorgan", href: "https://fiverr.com" },
  { icon: Send, label: "Upwork", value: "upwork.com/alexmorgan", href: "https://upwork.com" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Contact form submission:", Object.fromEntries(data));
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <Layout>
      <section className="bg-gradient-soft py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let's build something great
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell me about your project — I'll reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields required.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" className="mt-2 h-11 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-2 h-11 rounded-xl" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Project type</Label>
                <Input id="subject" name="subject" required placeholder="e.g. New store launch" className="mt-2 h-11 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="mt-2 w-full rounded-xl border border-input bg-transparent px-3 py-2.5 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent!
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Other ways to reach me</h2>
            <p className="mt-2 text-sm text-muted-foreground">Pick whichever works best for you.</p>
            <ul className="mt-8 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-primary">{c.label}</div>
                      <div className="truncate font-semibold text-foreground group-hover:text-primary">{c.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="font-semibold text-foreground">Response time</div>
              <p className="mt-1 text-sm text-muted-foreground">
                I respond to all inquiries within 24 hours, Mon–Fri. Weekend messages get a reply
                first thing Monday.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
