

# Tighten Mobile Profile Row + Scroll-To-Next-Page Transition

## 1. Profile card — pull rating + Online closer to tagline (mobile)

**File:** `src/components/site/ProfileCard.tsx`

The mobile triple row currently uses `justify-between` with `flex-1` on the tagline, which pushes the rating pill and Online pill to the far edges of the screen — that's the wide margin you're seeing in the screenshot.

Change row 2 (the `sm:hidden` block) from edge-to-edge to **centered, hugging the tagline**:

- Replace `justify-between` with `justify-center`
- Remove `flex-1` and `truncate` from the tagline `<p>` so it sizes to its content
- Keep `gap-1.5` so the three items sit close together
- Tagline gets `whitespace-nowrap` to stay on one line next to the pills
- Reduce tagline font from `text-[13px]` to `text-[12.5px]` so the row fits comfortably at 580px viewport with both pills

Result on mobile: `[★ 4.8 (239)] [I'll bring your ideas to life.] [● Online]` all clustered together in the center, with normal page padding on either side.

No desktop changes — the desktop layout (where rating is part of row 3 and tagline is its own line) stays as-is.

## 2. Scroll-driven page transition on bottom nav

**Goal:** When the user reaches the bottom of a page and scrolls down *again*, smoothly transition to the next tab in the bottom nav. Not auto-advance — only on an additional intentional scroll gesture past the bottom.

**Files:**
- New: `src/hooks/use-scroll-to-next-page.ts`
- `src/components/site/Layout.tsx` (mount the hook + add page transition wrapper)
- `src/components/site/BottomNav.tsx` (export the tab order so the hook + layout share one source of truth)
- `src/styles.css` (add `.page-enter` fade/slide animation)

### Tab order (matches current BottomNav)

`/` → `/portfolio` → `/reviews` → `/contact` (and back to `/` after contact, or stop — see below).

I'll move the `tabs` array into a small shared module `src/components/site/nav-tabs.ts` so both `BottomNav` and the new hook import the same list. No behavior change to the nav itself.

### Hook behavior — `useScrollToNextPage()`

Mounted once in `Layout`. Logic:

1. Track `window.scrollY` and `window.innerHeight + scrollY >= document.documentElement.scrollHeight - 4` to detect "at bottom".
2. State machine:
   - `idle` — normal scrolling
   - `at-bottom` — user has reached the page bottom; show a subtle "Continue to {NextPage} ↓" hint pill above the bottom nav
   - `triggered` — within 600ms of being `at-bottom`, the user performs another downward gesture (wheel deltaY > 0, touchmove going up = swipe up, or another scroll event that would scroll further). Navigate to next route.
3. Listeners attached: `scroll` (passive), `wheel` (passive), `touchstart` + `touchmove` (passive). Touch detection compares `touchstart.clientY` to current `touchmove.clientY` — a negative delta (finger moves up = page wants to scroll down) past a 30px threshold while `at-bottom` triggers navigation.
4. After navigating, reset to `idle` and scroll the new page to top.
5. On the **last tab** (`/contact`), do NOT advance (no wrap-around). Just stay at `at-bottom` with no hint pill.
6. Cooldown of 800ms after navigation to prevent retriggering immediately on the new page.

### Visual hint pill

When `at-bottom` and not on the last tab, render a small floating pill above the bottom nav:

```
   ↓  Continue to Portfolio
```

- Position: `fixed`, centered horizontally, `bottom: calc(var(--nav-height) + 12px)`
- Style: glass pill (reuses `.glass-pill`), `12px` text, fades in via `opacity` transition (200ms)
- A subtle bouncing chevron (`ri-arrow-down-s-line`) using a CSS `@keyframes bounce-down` (translateY 0 → 4px → 0, 1.4s infinite)
- Disappears when user scrolls back up

### Page transition animation

Add a fade + slight upward slide when the next route mounts:

```css
@keyframes page-enter {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page-enter { animation: page-enter 320ms cubic-bezier(0.22, 1, 0.36, 1); }
```

Apply the class on the `<main>` wrapper in `Layout.tsx` keyed by `useLocation().pathname` so React remounts the wrapper on each route change and replays the animation.

### Why this design

- Native scroll stays untouched — no scroll-jacking before reaching the bottom.
- Triggers only on **explicit additional scroll past the bottom**, so it never surprises the user.
- The hint pill makes the gesture discoverable without being intrusive.
- Page-enter animation makes the transition feel like one continuous flow rather than a hard route switch.

## Technical notes

- All client-only — guarded with `typeof window !== "undefined"` and `useEffect`.
- No new dependencies.
- The hook respects `prefers-reduced-motion`: skips the page-enter animation and removes the hint pill bounce when `(prefers-reduced-motion: reduce)` matches.
- BottomNav itself stays visually unchanged; we just centralize the tabs list.

