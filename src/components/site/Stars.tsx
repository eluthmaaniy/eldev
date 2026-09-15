export function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const cls = size === "xs" ? "text-xs" : "text-sm";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`ri-star-fill ${cls}`}
          style={{ color: i < rating ? "#F5C452" : "var(--color-border)" }}
        />
      ))}
    </div>
  );
}
