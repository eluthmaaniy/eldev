import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { ProfileCard } from "./ProfileCard";
import { PartnerMarquee } from "./PartnerMarquee";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 pb-nav pt-0">
        <ProfileCard />
        <PartnerMarquee />
        {children}
      </main>
      <footer className="pb-nav">
        <div className="mx-auto max-w-2xl px-6 pb-6 pt-4 text-center text-xs text-muted-foreground">
          © 2026 Eldev Digital. All rights reserved.
        </div>
      </footer>
      <BottomNav />
    </div>
  );
}
