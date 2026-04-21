import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import coverImg from "@/assets/eldev-cover.png";
import avatarImg from "@/assets/eldev-avatar.jpg";
import shopifyPlusBadge from "@/assets/shopify-plus-partner.png";

const STAR_GOLD = "#F5C452";

function useClock(timeZone: string) {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone,
        }).format(new Date()),
      );
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export function ProfileCard() {
  const ngTime = useClock("Africa/Lagos");
  const ukTime = useClock("Europe/London");

  return (
    <header className="w-full">
      {/* Cover — full width, edge to edge */}
      <div className="relative h-40 w-full overflow-hidden bg-secondary sm:h-56">
        <img
          src={coverImg}
          alt="Uthman Eldev cover"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Centered identity block */}
      <div className="mx-auto max-w-2xl px-5 sm:px-6">
        <div className="-mt-14 flex flex-col items-center text-center sm:-mt-16">
          <div className="relative">
            <img
              src={avatarImg}
              alt="Uthman Eldev"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full border-4 border-[#1DBF73] bg-white object-cover shadow-soft"
            />
            <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-soft">
              <span className="h-3 w-3 rounded-full bg-[#1DBF73]" />
            </span>
          </div>

          <h1 className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            <span>Uthman Eldev</span>
            <span className="text-muted-foreground font-normal">(Digital)</span>
            <i
              className="ri-verified-badge-fill text-[20px] text-[#1DA1F2]"
              aria-label="Verified"
              title="Verified"
            />
          </h1>

          {/* Username */}
          <a
            href="https://wa.me/447951525266"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm font-medium text-muted-foreground hover:text-[#1DBF73]"
          >
            @eldevdigital
          </a>

          <p className="mt-1.5 text-sm text-muted-foreground">
            I'll bring your ideas to life.
          </p>

          {/* Service Partner tag */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground/80 shadow-soft">
            <i className="ri-shield-star-fill text-[#1DBF73]" />
            <span className="font-semibold">Service Partner</span>
            <span className="h-3 w-px bg-border" />
            <span className="text-muted-foreground">Partner since 2024</span>
          </div>

          {/* Rating */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-sm">
            <i className="ri-star-fill" style={{ color: STAR_GOLD }} />
            <span className="font-semibold text-foreground">4.8</span>
            <Link
              to="/reviews"
              className="text-muted-foreground hover:text-[#1DBF73] hover:underline"
            >
              (239)
            </Link>
          </div>

          {/* Shopify Plus Partner badge */}
          <div className="mt-3">
            <img
              src={shopifyPlusBadge}
              alt="Shopify Plus Partner"
              className="h-8 w-auto sm:h-9"
              loading="eager"
            />
          </div>

          {/* Locations — flags removed */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-map-pin-2-fill text-[#1DBF73]" />
              <span className="font-medium text-foreground">Abuja, Nigeria</span>
            </span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <a
              href="https://wa.me/447951525266"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1DBF73]"
            >
              <i className="ri-map-pin-line" />
              <span>UK · +44 7951 525266</span>
            </a>
          </div>

          {/* Status pills — Online, NG time, UK time, Language */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73]/10 px-3 py-1 text-xs font-medium text-[#1DBF73]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DBF73] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DBF73]" />
              </span>
              Online
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80"
              suppressHydrationWarning
            >
              <i className="ri-time-line text-sm text-[#1DBF73]" />
              NG{ngTime ? ` · ${ngTime}` : ""}
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80"
              suppressHydrationWarning
            >
              <i className="ri-time-line text-sm text-[#1DBF73]" />
              UK{ukTime ? ` · ${ukTime}` : ""}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
              <i className="ri-translate-2 text-sm" /> English
            </span>
          </div>
        </div>

        {/* divider below the card */}
        <div className="mt-6 border-b border-border" />
      </div>
    </header>
  );
}
