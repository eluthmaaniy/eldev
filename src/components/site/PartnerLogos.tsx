import googleShopify from "@/assets/partner-google-shopify.png";
import googlePartner from "@/assets/partner-google.png";
import shopifyPartner from "@/assets/partner-shopify.png";
import upwork from "@/assets/partner-upwork.png";
import shopifyPlus from "@/assets/shopify-plus-partner.png";

const logos = [
  { src: shopifyPartner, alt: "Shopify Partner" },
  { src: shopifyPlus, alt: "Shopify Plus Partner" },
  { src: googlePartner, alt: "Google Partner" },
  { src: upwork, alt: "Upwork" },
  { src: googleShopify, alt: "Google & Shopify" },
];

export function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {logos.map((l) => (
        <img
          key={l.alt}
          src={l.src}
          alt={l.alt}
          loading="lazy"
          className="h-7 w-auto object-contain opacity-60 sm:h-8"
        />
      ))}
    </div>
  );
}
