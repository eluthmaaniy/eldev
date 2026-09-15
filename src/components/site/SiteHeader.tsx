import { Link, useLocation } from "@tanstack/react-router";
import { navTabs } from "./nav-tabs";
import { AVATAR_URL, WHATSAPP_URL } from "@/lib/contact";

function isTabActive(to: string, pathname: string) {
  if (to === "/") return pathname === "/";
  if (to === "/portfolio") return pathname === "/portfolio" || pathname.startsWith("/full-portfolio");
  if (to === "/reviews") return pathname === "/reviews" || pathname.startsWith("/full-reviews");
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <img
              src={AVATAR_URL}
              alt=""
              width={36}
              height={36}
          className="h-9 w-9 rounded-full object-cover object-top"
            />
            <span className="min-w-0 leading-tight">
              <span className="block text-[15px] font-semibold tracking-tight text-foreground">
                Uthman
              </span>
              <span className="font-personal block text-[12px] text-muted-foreground">
                Shopify & e-commerce
              </span>
            </span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1DBF73] px-3.5 py-1.5 text-[13px] font-semibold text-white sm:hidden"
          >
            <i className="ri-whatsapp-line text-base" aria-hidden />
            WhatsApp
          </a>
        </div>

        <nav aria-label="Primary" className="flex items-center justify-between gap-1 sm:justify-end sm:gap-5">
          {navTabs.map((t) => {
            const isActive = isTabActive(t.to, pathname);
            return (
              <Link
                key={t.to}
                to={t.to}
                className={`inline-flex items-center gap-1 text-[13px] sm:gap-1.5 sm:text-sm ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <i className={`${t.icon} text-[15px] sm:text-base`} aria-hidden />
                {t.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-[#1DBF73] px-3.5 py-1.5 text-[13px] font-semibold text-white sm:inline-flex"
          >
            <i className="ri-whatsapp-line text-base" aria-hidden />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
