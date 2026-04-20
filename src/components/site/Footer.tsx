import { Link } from "@tanstack/react-router";
import { ShoppingBag, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
              <ShoppingBag className="h-5 w-5" />
            </span>
            Alex Morgan
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Shopify expert helping brands launch, scale, and convert. From custom themes to full
            store builds — done right, the first time.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@alexmorgan.dev</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Available worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Morgan — Shopify Expert. All rights reserved.
      </div>
    </footer>
  );
}
