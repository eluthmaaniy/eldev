import { useEffect, useState } from "react";
import coverImg from "@/assets/eldev-cover.png";
import avatarImg from "@/assets/eldev-avatar.jpg";

export function ProfileCard() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-2xl px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        {/* Cover */}
        <div className="relative h-36 w-full overflow-hidden bg-secondary sm:h-44">
          <img
            src={coverImg}
            alt="Eldev Digital cover"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        {/* DP + Identity */}
        <div className="relative px-5 pb-5 pt-0 sm:px-6">
          <div className="-mt-12 flex items-end justify-between">
            <div className="relative">
              <img
                src={avatarImg}
                alt="Uthman Eldev"
                width={96}
                height={96}
                className="h-24 w-24 rounded-full border-4 border-[#1DBF73] bg-white object-cover shadow-soft"
              />
              <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-soft">
                <span className="h-3 w-3 rounded-full bg-[#1DBF73]" />
              </span>
            </div>
          </div>

          <div className="mt-3">
            <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Uthman Eldev <span className="text-muted-foreground font-normal">(Digital)</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              I'll bring your ideas to life.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73]/10 px-3 py-1 text-xs font-medium text-[#1DBF73]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DBF73] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DBF73]" />
                </span>
                <span suppressHydrationWarning>Online{time ? ` · ${time}` : ""}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
                <i className="ri-translate-2 text-sm" /> English
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
