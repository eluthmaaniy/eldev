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
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="-mt-14 flex flex-col items-center px-1 pb-5 pt-0 text-center sm:-mt-16 sm:px-5">
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

          {/* 1. Name + Verified */}
          <h1 className="mt-4 flex flex-nowrap items-center justify-center gap-x-1.5 whitespace-nowrap text-[22px] font-bold tracking-[-0.025em] text-foreground sm:text-[26px]">
            <span>Uthman Eldev</span>
            <span className="text-muted-foreground font-normal">(Digital)</span>
            <i
              className="ri-verified-badge-fill text-[18px] text-[#1DA1F2] sm:text-[20px]"
              aria-label="Verified"
              title="Verified"
            />
          </h1>

          {/* 2. Tagline */}
          <p className="mt-2 text-[14px] font-normal tracking-[-0.01em] text-muted-foreground">
            I'll bring your ideas to life.
          </p>

          {/* 3. Partner + Rating pills */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="glass-pill inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-foreground">
              <i className="ri-shield-check-fill text-[#1DBF73]" />
              <span className="whitespace-nowrap">Shopify Partner · Since 2024</span>
            </span>
            <Link
              to="/reviews"
              className="glass-pill inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-foreground hover:text-[#1DBF73]"
            >
              <i className="ri-star-fill" style={{ color: STAR_GOLD }} />
              <span>4.8</span>
              <span className="text-muted-foreground">(239)</span>
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

          {/* 4. Location + Phone — plain inline */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[13px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <i className="ri-map-pin-2-fill text-[#1DBF73]" />
              <span>Abuja, Nigeria</span>
            </span>
            <a
              href="https://wa.me/447951525266"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap hover:text-[#1DBF73]"
            >
              <i className="ri-phone-fill" />
              <span>+44 7951 525266</span>
            </a>
          </div>

          {/* 5. Status row — Online + NG + UK */}
          <div className="no-scrollbar mt-3 flex w-full max-w-full items-center justify-center gap-2 overflow-x-auto whitespace-nowrap px-1">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1DBF73]/12 px-3 py-1.5 text-[12px] font-medium text-[#1DBF73]">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#1DBF73]" />
              Online
            </span>
            <span
              className="glass-pill inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-foreground/80"
              suppressHydrationWarning
            >
              <i className="ri-time-line text-[#1DBF73]" />
              NG{ngTime ? ` · ${ngTime}` : ""}
            </span>
            <span
              className="glass-pill inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-foreground/80"
              suppressHydrationWarning
            >
              <i className="ri-time-line text-[#1DBF73]" />
              UK{ukTime ? ` · ${ukTime}` : ""}
            </span>
          </div>

          {/* 6. Language pill */}
          <div className="mt-3 flex justify-center">
            <span className="glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-foreground/70">
              <i className="ri-translate-2" /> English
            </span>
          </div>
        </div>

        {/* divider below the card */}
        <div className="mt-2 border-b border-border" />
      </div>
    </header>
  );
}
