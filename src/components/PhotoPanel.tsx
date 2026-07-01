import Parallax from "@/components/Parallax";

type PhotoPanelProps = {
  className?: string;
  speed?: number;
  label?: string;
};

/**
 * A photo-ready panel with a subtle parallax drift on the background layer.
 * Swap the inner div for a next/image once real interior/product photography
 * exists — the aspect ratio and overflow masking are already set up for it.
 */
export default function PhotoPanel({
  className = "",
  speed = 0.2,
  label,
}: PhotoPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-hairline shadow-[0_30px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      <Parallax speed={speed} className="absolute inset-x-0 -top-[12%] h-[124%]">
        <div className="photo-placeholder h-full w-full" />
      </Parallax>
      {label && (
        <span className="pointer-events-none absolute bottom-5 left-5 text-[10px] tracking-[0.3em] text-stone-dim/70">
          {label}
        </span>
      )}
    </div>
  );
}
