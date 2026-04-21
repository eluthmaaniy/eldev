import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eldev Digital — Top Rated Shopify Expert & Web Developer" },
      {
        name: "description",
        content:
          "Top Rated Shopify Expert & Shopify Partner. Custom Shopify store design, redesign, theme customization, dropshipping setup, Shopify SEO, Klaviyo email flows, and conversion optimization. Hire Uthman Eldev (Digital) — verified 4.8★ across 239 reviews.",
      },
      {
        name: "keywords",
        content:
          "Shopify expert, top rated Shopify expert, Shopify developer, Shopify Partner, hire Shopify expert, Shopify store design, Shopify redesign, Shopify theme customization, Shopify Plus partner, Shopify SEO, Shopify dropshipping expert, dropshipping setup, Klaviyo email marketing, Shopify Liquid developer, ecommerce developer, Shopify expert Nigeria, Shopify expert UK, Shopify expert Abuja, Shopify freelancer, Eldev Digital, Uthman Eldev",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: "Eldev Digital" },
      { name: "theme-color", content: "#1DBF73" },
      { property: "og:site_name", content: "Eldev Digital" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Eldev Digital — Top Rated Shopify Expert" },
      {
        property: "og:description",
        content: "Top Rated Shopify Expert & Partner — store design, redesign, dropshipping setup, Shopify SEO, and Klaviyo email flows. 4.8★ across 239 reviews.",
      },
      { property: "og:url", content: "https://eldev.digital/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eldev Digital — Top Rated Shopify Expert" },
      {
        name: "twitter:description",
        content: "Top Rated Shopify Expert & Partner. 4.8★ across 239 verified reviews.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
      { rel: "canonical", href: "https://eldev.digital/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://eldev.digital/#person",
              name: "Uthman Eldev",
              alternateName: ["Eldev Digital", "Uthman Eldev (Digital)"],
              url: "https://eldev.digital/",
              image: "https://eldev.digital/favicon.jpg",
              jobTitle: "Top Rated Shopify Expert & Shopify Partner",
              description:
                "Top Rated Shopify Expert and verified Shopify Partner specializing in store design, redesign, dropshipping setup, Shopify SEO, and Klaviyo email marketing.",
              email: "mailto:contact@eldev.digital",
              telephone: "+44 7951 525266",
              knowsLanguage: ["English", "Arabic"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abuja",
                addressCountry: "NG",
              },
              sameAs: ["https://eldev.digital/"],
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://eldev.digital/#business",
              name: "Eldev Digital",
              url: "https://eldev.digital/",
              image: "https://eldev.digital/favicon.jpg",
              priceRange: "$$",
              description:
                "Top Rated Shopify Expert offering Shopify store design, redesign, theme customization, dropshipping setup, Shopify SEO, and Klaviyo email flows.",
              areaServed: ["Worldwide"],
              founder: { "@id": "https://eldev.digital/#person" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "239",
                bestRating: "5",
                worstRating: "1",
              },
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Design" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Redesign" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Theme Customization" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Dropshipping Setup" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify SEO" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klaviyo Email Marketing" } },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://eldev.digital/#website",
              url: "https://eldev.digital/",
              name: "Eldev Digital",
              publisher: { "@id": "https://eldev.digital/#person" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
