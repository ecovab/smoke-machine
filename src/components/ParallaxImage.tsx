import ImagePlaceholder from "@/components/ImagePlaceholder";
import Parallax from "@/components/Parallax";

export default function ParallaxImage({
  label,
  className = "",
  speed = 0.15,
}: {
  label: string;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Parallax speed={speed} className="absolute inset-x-0 -top-[12%] h-[124%]">
        <ImagePlaceholder label={label} className="h-full w-full" />
      </Parallax>
    </div>
  );
}
