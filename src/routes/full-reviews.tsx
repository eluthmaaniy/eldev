import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ReviewCard } from "./reviews";

export const Route = createFileRoute("/full-reviews")({
  head: () => ({
    meta: [
      { title: "All Reviews — Eldev Digital" },
      {
        name: "description",
        content:
          "Read all verified Fiverr reviews for Eldev Digital — Shopify expert with a perfect 5.0 rating from clients worldwide.",
      },
      { property: "og:title", content: "All Reviews — Eldev Digital" },
      { property: "og:description", content: "All verified Fiverr client reviews." },
    ],
  }),
  component: FullReviews,
});

const allReviews = [
  { name: "Sarah Mitchell", avatar: "https://randomuser.me/api/portraits/women/44.jpg", date: "March 2025", text: "Absolutely incredible work on my Shopify store. The design is sleek, the speed is amazing, and Eldev was so easy to communicate with. Will hire again for sure!" },
  { name: "James Okafor", avatar: "https://randomuser.me/api/portraits/men/32.jpg", date: "February 2025", text: "Delivered my dropshipping store ahead of schedule. Every detail was thought through — from product listings to checkout. Highly recommended." },
  { name: "Aisha Bello", avatar: "https://randomuser.me/api/portraits/women/68.jpg", date: "January 2025", text: "My old Shopify store felt outdated. Eldev redesigned it from the ground up and conversions jumped within the first two weeks. Brilliant work." },
  { name: "Tom Harrington", avatar: "https://randomuser.me/api/portraits/men/75.jpg", date: "December 2024", text: "Professional, fast, and patient with my endless revisions. The final store looks better than I imagined. Easy 5 stars." },
  { name: "Fatima Al-Rashid", avatar: "https://randomuser.me/api/portraits/women/52.jpg", date: "November 2024", text: "Eldev built my beauty store and helped me set up email flows. Sales started coming in days after launch. Worth every penny." },
  { name: "Kevin Mensah", avatar: "https://randomuser.me/api/portraits/men/14.jpg", date: "October 2024", text: "Smooth experience from start to finish. Communication was top-tier and the product listings he wrote actually convert. Will be back." },
  { name: "Emma Lawson", avatar: "https://randomuser.me/api/portraits/women/22.jpg", date: "September 2024", text: "Hands down the best Shopify expert I've worked with. He understood my brand instantly and the store looks like a million bucks." },
  { name: "Daniel Reyes", avatar: "https://randomuser.me/api/portraits/men/45.jpg", date: "August 2024", text: "Quick turnaround on my product listing optimization. SEO-friendly, well-written, and ready to convert." },
  { name: "Chloe Anderson", avatar: "https://randomuser.me/api/portraits/women/19.jpg", date: "July 2024", text: "Eldev rebuilt my entire Shopify theme from scratch. Mobile speed went from awful to lightning fast. So happy with the result." },
  { name: "Ibrahim Yusuf", avatar: "https://randomuser.me/api/portraits/men/63.jpg", date: "June 2024", text: "Honest, talented, and reliable. He set up my dropshipping store exactly as discussed and even threw in extras. 10/10." },
  { name: "Olivia Carter", avatar: "https://randomuser.me/api/portraits/women/31.jpg", date: "May 2024", text: "Great communication every step of the way. Delivered on time and the design feels premium. Will recommend to friends." },
  { name: "Marcus Hall", avatar: "https://randomuser.me/api/portraits/men/27.jpg", date: "April 2024", text: "Eldev redesigned my Shopify store and the conversion rate doubled within a month. Worth every dollar." },
  { name: "Priya Sharma", avatar: "https://randomuser.me/api/portraits/women/57.jpg", date: "March 2024", text: "Smart, talented, and easy to work with. He gave me real advice instead of just saying yes to everything. Loved that." },
  { name: "Noah Bennett", avatar: "https://randomuser.me/api/portraits/men/91.jpg", date: "February 2024", text: "Fast delivery, beautiful Shopify design, and great support after launch. Highly recommend Eldev." },
  { name: "Zara Ahmed", avatar: "https://randomuser.me/api/portraits/women/8.jpg", date: "January 2024", text: "I was nervous about hiring online but Eldev made the whole process effortless. My store is finally live and looks amazing." },
];

function FullReviews() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 pt-10 sm:pt-14">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <i className="ri-arrow-left-line" /> Back to Reviews
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          All Reviews
        </h1>
        <p className="mt-2 text-muted-foreground">Every verified Fiverr review, in one place.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 mb-4">
          {allReviews.map((r) => (
            <ReviewCard key={r.name + r.date} {...r} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
