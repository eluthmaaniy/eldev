

# Profile Row Reorder + Modern Certifications Timeline

## 1. Profile card — mobile triple row reorder + tighter gaps

**File:** `src/components/site/ProfileCard.tsx`

Currently the mobile row 2 reads: `[Online] [tagline] [4.8 ★]`. Swap the outer two so the rating sits left and the Online pill sits right:

- New mobile order: `[4.8 ★ (239)] · [I'll bring your ideas to life.] · [Online]`
- Reduce the row gap from `gap-2` to `gap-1.5` so items hug closer
- Remove `flex-1` stretching where it widens the tagline excessively — keep the tagline centered with `flex-1` but cap horizontal padding

**Desktop status row (row 5):** the Online · NG · UK pills currently use `gap-2`. Tighten to `gap-1.5` so the three pills sit closer. Same tightening for the language row (English · Arabic).

No other layout changes — just swap order and tighten gaps.

## 2. Certifications — vertical timeline (order-tracker style)

**File:** `src/routes/index.tsx`

Replace the current 5 stacked card design with a single **vertical timeline** rail, like an order/shipment tracker:

- One continuous vertical line on the left (1px, light gray, `#E5E7EB`)
- A solid filled green dot (`#1DBF73`, ~12px) on the line at each certification "checkpoint"
- Each row aligned to the right of the dot:
  - **Bold title** (cert name)
  - Subtle line below: `org · year`
- Spacing between checkpoints: ~24px vertical
- All dots filled green (all "completed" — like a delivered tracker)
- Sort certifications **descending by year** (2024 first, 2019 last) so the newest is at the top

Layout sketch:

```text
●───── Klaviyo Email Marketing Certification
│      Klaviyo Academy · 2024
│
●───── Google Ads Search Certification
│      Google Skillshop · 2024
│
●───── Facebook Marketing & Advertising
│      SkillUp · 2024
│
●───── Shopify Theme Development & Liquid
│      Shopify Partner Academy · 2023
│
●───── Shopify Website & Development
       Udemy · 2019
```

### Implementation

- Wrap list in a `relative` container with a `::before` pseudo-element OR an absolutely positioned `<span>` for the vertical line (left: `7px`, top: `8px`, bottom: `8px`, width: `2px`, `bg-border`)
- Each item: `flex items-start gap-4 relative pl-0`
- Dot: a 12px circle (`h-3 w-3 rounded-full bg-[#1DBF73] ring-4 ring-background`) — the ring on bg makes the dot "punch through" the rail cleanly
- Text block to the right: title in `font-semibold text-foreground`, sub in `text-sm text-muted-foreground mt-0.5`
- Sort in JS: `[...certifications].sort((a, b) => Number(b.year) - Number(a.year))`

## Technical notes

- No new files, no new dependencies.
- `ProfileCard.tsx` change is purely JSX reordering inside the existing `sm:hidden` row plus gap class swaps.
- `index.tsx` certifications block is a clean replacement of the current cards section — no other sections touched.

