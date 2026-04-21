import { Link, useLocation } from "@tanstack/react-router";

const tabs = [
  { to: "/", label: "About", icon: "ri-user-3-line", iconActive: "ri-user-3-fill" },
  { to: "/portfolio", label: "Portfolio", icon: "ri-briefcase-line", iconActive: "ri-briefcase-fill" },
  { to: "/skills", label: "Skills", icon: "ri-sparkling-line", iconActive: "ri-sparkling-fill" },
  { to: "/reviews", label: "Reviews", icon: "ri-star-line", iconActive: "ri-star-fill" },
  { to: "/contact", label: "Contact", icon: "ri-mail-line", iconActive: "ri-mail-fill" },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/90 backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-2xl items-stretch justify-around px-2 pt-2 pb-2">
        {tabs.map((t) => {
          const isActive =
            t.to === "/" ? pathname === "/" : pathname === t.to || pathname.startsWith(`${t.to}/`);
          return (
            <Link
              key={t.to}
              to={t.to}
              className="group flex min-w-[56px] flex-1 flex-col items-center gap-1 rounded-xl py-1.5 transition-colors"
            >
              <i
                className={`${isActive ? t.iconActive : t.icon} text-[22px] leading-none transition-colors ${
                  isActive ? "text-[#1DBF73]" : "text-muted-foreground"
                }`}
                aria-hidden
              />
              <span
                className={`text-[10.5px] font-medium tracking-tight ${
                  isActive ? "text-[#1DBF73]" : "text-muted-foreground"
                }`}
              >
                {t.label}
              </span>
              <span
                className={`h-[3px] w-6 rounded-full transition-all ${
                  isActive ? "bg-[#1DBF73]" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
