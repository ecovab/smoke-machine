/**
 * Neutral stand-in for real product/category/interior photography.
 * Swap for a next/image once real photos exist — sizing/rounding is
 * already set up so it's a drop-in replacement.
 */
export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`image-placeholder ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        className="h-8 w-8 text-ink-faint/60"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m3 16 5-4 4 3 4-5 5 6" />
      </svg>
    </div>
  );
}
