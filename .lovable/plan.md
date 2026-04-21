

# Profile, Skills, Reviews, About & Contact Polish

## 1. Profile Card — Shopify Plus Partner placement + horizontal layout

**File:** `src/components/site/ProfileCard.tsx`

- Move the **Shopify Plus Partner** badge out of its standalone row (currently floating alone between rating pills and location). Place it inline **next to the rating pill** on row 3, so the row becomes: `[Shopify Partner pill] [4.8 ★ (239) pill] [Shopify Plus badge image]` — matches the IT-Geeks reference layout where the Plus Partner badge sits beside the rating/identity area.
- Combine the **Language** standalone row with the status row so nothing sits alone. Final row order:
  1. Name + verified tick
  2. Tagline
  3. Shopify Partner pill · Rating pill · **Shopify Plus Partner badge** (inline)
  4. Location · Phone (inline)
  5. Online · NG time · UK time (scrollable pill row)
  6. **English · Arabic** language pills (two pills inline, both using **`ri-global-line` globe icon** instead of translate icon)

## 2. Skills — Apple-style subtle gray glass pills

**File:** `src/routes/index.tsx` + `src/styles.css`

Replace the current `.skill-card` square grid with **rounded pill chips** matching the uploaded reference (light gray pill background, very subtle glass border, auto-fit flow):

- Container: `flex flex-wrap gap-2` (pills wrap naturally, not a rigid 2-col grid)
- Each chip: rounded-full, `background: rgba(245,245,247,0.7)` with `1px solid rgba(0,0,0,0.06)`, soft inner highlight, `padding: 8px 16px`, `font-size: 13.5px`, `font-weight: 500`
- Add new `.skill-chip` utility in `styles.css`

## 3. About me — remove CTA line

**File:** `src/routes/index.tsx`

Remove the line `"Contact Me now to get started."` from `FULL_BIO_REST` (the WhatsApp button below already serves that purpose).

## 4. Certifications — add 3 more

**File:** `src/routes/index.tsx`

Add to the existing `certifications` array (keeping the current 2):
- **Shopify Theme Development & Liquid** — Shopify Partner Academy · 2023
- **Google Ads Search Certification** — Google Skillshop · 2024
- **Klaviyo Email Marketing Certification** — Klaviyo Academy · 2024

## 5. Reviews — Featured auto-sliding carousel

**File:** `src/routes/reviews.tsx`

Add a new **"Featured reviews"** carousel section above the existing grid:

- Pick 5 highest-rated reviews (5★ + repeat client preferred) from `reviewsAll`
- Horizontal CSS-scroll carousel with auto-advance every 4s using `setInterval` + `scrollTo({ behavior: "smooth" })`
- Pause on hover/touch
- Snap scrolling (`scroll-snap-type: x mandatory`) so manual swipes feel native
- Dot indicators below
- Each slide reuses the existing `ReviewCard` component (no new card style needed)
- Section heading: "Featured reviews" with subtle "Auto-playing" label

The existing review grid + summary block stays unchanged below the carousel.

## 6. Contact page — minimal, breathable redesign

**File:** `src/routes/contact.tsx`

Replace the cluttered 4-card stack with a **two-zone Apple-style layout**:

**Zone A — Hero contact card (single glass card, centered):**
- Large avatar (reuse `eldev-avatar.jpg`, 64px)
- "Uthman Eldev" + verified tick
- Single "Average response under 1 hour" pill with pulsing green dot
- One **primary "Chat on WhatsApp" button** (uses UK number, full-width on mobile)
- One **secondary "Send email" outline button** below it

**Zone B — Quiet channel list (3 minimal rows, no cards):**
Below the hero, show the other channels as **simple inline rows with dividers** (no boxes, no buttons) — just icon + label + value, tap-to-open:
- WhatsApp · Nigeria → `+234 902 679 9223`
- Website → `eldev.digital`
- Email → `contact@eldev.digital`

Result: one strong CTA card + a quiet directory list. Removes the visual repetition of 4 nearly-identical cards.

## Technical notes

- All edits CSS + TSX only. No new dependencies.
- `.skill-chip` and featured-carousel styles added to `src/styles.css`.
- The auto-scroll carousel uses native browser scroll APIs — no JS animation libs.
- Arabic globe icon: `ri-global-line` (Remix) — already loaded site-wide.
- Layout stays mobile-first; everything scales cleanly on desktop.

