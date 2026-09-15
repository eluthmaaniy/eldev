import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import shopifyPlusBadge from "@/assets/shopify-plus-partner.png";
import { AVATAR_URL, COVER_URL } from "@/lib/contact";

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

  return (
    <header className="w-full">
      <div className="relative">
        <div className="h-36 w-full overflow-hidden bg-secondary sm:h-44">
          <img
            src={COVER_URL}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <img
          src={AVATAR_URL}
          alt="Uthman Eldev"
          width={112}
          height={112}
          className="absolute bottom-0 left-1/2 z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-background bg-white object-cover object-top"
        />
      </div>

      <div className="mx-auto max-w-2xl px-6 pt-16 pb-6 text-center sm:pt-[4.5rem]">
        <h1 className="inline-flex items-center justify-center gap-1.5 text-[26px] font-semibold tracking-tight text-foreground sm:text-[28px]">
          Uthman Eldev
          <i className="ri-verified-badge-fill text-[18px] text-[#1DA1F2]" aria-label="Verified" />
        </h1>
        <p className="font-personal mt-1.5 text-[16px] text-muted-foreground">
          I'll bring your ideas to life.
        </p>

        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <i className="ri-map-pin-2-line" aria-hidden />
            Nigeria
          </span>
          <Link to="/reviews" className="inline-flex items-center gap-1 hover:text-foreground">
            <i className="ri-star-fill text-[#F5C452]" aria-hidden />
            4.8 (239)
          </Link>
          <span className="inline-flex items-center gap-1.5">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#1DBF73]" />
            <span className="text-[#1DBF73]">Online</span>
          </span>
          {ngTime ? (
            <span className="inline-flex items-center gap-1" suppressHydrationWarning>
              <i className="ri-time-line" aria-hidden />
              {ngTime} local time
            </span>
          ) : null}
        </p>

        <img
          src={shopifyPlusBadge}
          alt="Shopify Plus Partner"
          className="mx-auto mt-3 h-6 w-auto opacity-80"
          loading="eager"
        />
      </div>
    </header>
  );
}
