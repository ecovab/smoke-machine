const PARTICLES = [
  { left: "8%", size: 3, delay: "0s", duration: "16s" },
  { left: "18%", size: 2, delay: "3s", duration: "20s" },
  { left: "27%", size: 4, delay: "1.5s", duration: "18s" },
  { left: "39%", size: 2, delay: "6s", duration: "22s" },
  { left: "48%", size: 3, delay: "2s", duration: "17s" },
  { left: "58%", size: 2, delay: "8s", duration: "24s" },
  { left: "67%", size: 4, delay: "4.5s", duration: "19s" },
  { left: "76%", size: 2, delay: "0.5s", duration: "21s" },
  { left: "85%", size: 3, delay: "5.5s", duration: "16s" },
  { left: "93%", size: 2, delay: "9s", duration: "23s" },
];

export default function Dust({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-brass/40 animate-dust-drift"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
