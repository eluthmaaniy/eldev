export const navTabs = [
  { to: "/", label: "About", icon: "ri-user-line" },
  { to: "/portfolio", label: "Work", icon: "ri-layout-grid-line" },
  { to: "/reviews", label: "Reviews", icon: "ri-chat-3-line" },
  { to: "/contact", label: "Contact", icon: "ri-mail-line" },
] as const;

export type NavTab = (typeof navTabs)[number];
