import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <footer>
        <div className="mx-auto max-w-2xl px-6 py-10 text-center text-xs text-muted-foreground">
          © 2026 Eldev Digital
        </div>
      </footer>
    </div>
  );
}
