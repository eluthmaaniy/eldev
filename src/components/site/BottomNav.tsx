import { Link, useLocation } from "@tanstack/react-router";

const tabs = [
  { to: "/", label: "About", icon: "ri-user-line" },
  { to: "/portfolio", label: "Portfolio", icon: "ri-layout-grid-line" },
  { to: "/reviews", label: "Reviews", icon: "ri-chat-3-line" },
  { to: "/contact", label: "Contact", icon: "ri-mail-line" },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Primary" className="floating-nav">
      {tabs.map((t) => {
        const isActive =
          t.to === "/" ? pathname === "/" : pathname === t.to || pathname.startsWith(`${t.to}/`);
        return (
          <Link
            key={t.to}
            to={t.to}
            className={`nav-tab ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <i className={t.icon} aria-hidden />
            <span className="nav-label">{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
