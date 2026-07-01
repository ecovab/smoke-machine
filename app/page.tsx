"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useScroll } from "framer-motion";
import { HeroOverlay } from "@/components/hero/HeroOverlay";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { BrandValues } from "@/components/sections/BrandValues";
import { LocationMap } from "@/components/sections/LocationMap";
import { VisitExperience } from "@/components/sections/VisitExperience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BRAND } from "@/lib/constants";

const SmokeScene = dynamic(
  () => import("@/components/hero/SmokeScene").then((mod) => mod.SmokeScene),
  { ssr: false }
);

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const sizeQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsDesktop(sizeQuery.matches && !motionQuery.matches);

    update();
    sizeQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      sizeQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return isDesktop;
}

function MobileHeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,143,62,0.16),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(139,139,148,0.1),transparent_55%)]" />
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="smoke-blob absolute rounded-full blur-3xl"
            style={{
              width: `${180 + i * 40}px`,
              height: `${180 + i * 40}px`,
              left: `${(i * 17) % 90}%`,
              top: `${(i * 23) % 80}%`,
              background: i % 2 === 0 ? "rgba(214,143,62,0.1)" : "rgba(199,199,205,0.07)",
              animationDuration: `${14 + i * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative bg-charcoal-950">
      <div ref={heroRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {isDesktop ? <SmokeScene progress={scrollYProgress} /> : <MobileHeroFallback />}
          <HeroOverlay progress={scrollYProgress} />
        </div>
      </div>

      <WhoWeAre />
      <BrandValues />
      <LocationMap />
      <VisitExperience />
      <Contact />
      <Footer />

      <span className="sr-only">{BRAND.name} — premium vapour experience in Paarl</span>
    </main>
  );
}
