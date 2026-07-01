"use client";

import { useEffect, useRef, useState } from "react";

const FLAVOURS = [
  {
    name: "Blue Razz Ice",
    color: "#29e0ff",
    notes: "Blue raspberry, arctic menthol, tangy citrus finish",
    price: "$24.99",
  },
  {
    name: "Mango Tango",
    color: "#ff9d2f",
    notes: "Sun-ripened mango, passionfruit, honeyed cream",
    price: "$24.99",
  },
  {
    name: "Watermelon Frost",
    color: "#ff4f7b",
    notes: "Juicy watermelon, cool frost, sugared rind",
    price: "$24.99",
  },
  {
    name: "Peach Bellini",
    color: "#ffcf6b",
    notes: "White peach, sparkling citrus, vanilla bean",
    price: "$26.99",
  },
  {
    name: "Grape Storm",
    color: "#a35bff",
    notes: "Concord grape, blackberry, subtle anise",
    price: "$24.99",
  },
  {
    name: "Kiwi Melon Chill",
    color: "#4dff9e",
    notes: "Kiwi, honeydew melon, cool spearmint",
    price: "$24.99",
  },
];

const DEFAULT_COLOR = { r: 217, g: 180, b: 106 };

function hexToRgb(hex) {
  const v = parseInt(hex.replace("#", ""), 16);
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}

export default function Page() {
  const canvasRef = useRef(null);
  const targetColorRef = useRef(DEFAULT_COLOR);
  const smokeLayerRefs = useRef([]);
  const smokeTimers = useRef({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const currentColor = { ...DEFAULT_COLOR };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function makeParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 0.6 + Math.random() * 1.8,
        vy: -(0.08 + Math.random() * 0.18),
        vx: (Math.random() - 0.5) * 0.12,
        alpha: 0.15 + Math.random() * 0.35,
      };
    }
    for (let i = 0; i < 90; i++) particles.push(makeParticle());

    const lerp = (a, b, t) => a + (b - a) * t;
    let frame;

    function tick() {
      const target = targetColorRef.current;
      currentColor.r = lerp(currentColor.r, target.r, 0.03);
      currentColor.g = lerp(currentColor.g, target.g, 0.03);
      currentColor.b = lerp(currentColor.b, target.b, 0.03);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${currentColor.r | 0}, ${currentColor.g | 0}, ${currentColor.b | 0}, ${p.alpha})`;
        ctx.fill();
      }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  function spawnPuff(layer) {
    const puff = document.createElement("span");
    puff.className = "puff";
    puff.style.setProperty("--drift", `${Math.random() * 40 - 20}px`);
    layer.appendChild(puff);
    puff.addEventListener("animationend", () => puff.remove());
  }

  function handleCapsuleEnter(index) {
    setHoveredIndex(index);
    targetColorRef.current = hexToRgb(FLAVOURS[index].color);
    const layer = smokeLayerRefs.current[index];
    if (layer) {
      smokeTimers.current[index] = setInterval(() => spawnPuff(layer), 220);
    }
  }

  function handleCapsuleLeave(index) {
    const timer = smokeTimers.current[index];
    if (timer) {
      clearInterval(timer);
      delete smokeTimers.current[index];
    }
  }

  function handleExperienceLeave() {
    setHoveredIndex(null);
    targetColorRef.current = DEFAULT_COLOR;
  }

  const active = hoveredIndex !== null;
  const hovered = active ? FLAVOURS[hoveredIndex] : null;

  return (
    <>
      <canvas id="ambient-canvas" ref={canvasRef} />

      <header className="site-header">
        <div className="logo">SMOKE&nbsp;MACHINE</div>
        <nav>
          <a href="#products">Products</a>
          <a href="#airscream-experience">Airscream Experience</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Premium Vapour. Uncompromising Craft.</h1>
        <p>Curated hardware, e-liquids and the exclusive Airscream collection.</p>
      </section>

      <section id="products" className="products">
        <h2>Products include</h2>
        <ul className="product-list">
          <li>Vaporesso</li>
          <li>OXVA</li>
          <li className="featured">Airscream</li>
          <li>Premium E-Liquids</li>
          <li>Disposable Vapes</li>
          <li>Pod Systems</li>
          <li>Replacement Coils</li>
          <li>Accessories</li>
        </ul>
        <p className="callout">
          The <strong>Airscream</strong> flavours are especially popular.
        </p>
      </section>

      <section
        id="airscream-experience"
        className={`experience${active ? " active" : ""}`}
        style={hovered ? { "--wash-color": hovered.color } : undefined}
        onMouseLeave={handleExperienceLeave}
      >
        <div className="wash" />
        <div className="experience-inner">
          <h2>AIRSCREAM EXPERIENCE</h2>
          <p className="experience-sub">
            An entire premium showcase dedicated to Airscream. Hover a capsule to begin.
          </p>

          <div className="capsule-grid">
            {FLAVOURS.map((flavour, index) => (
              <div
                key={flavour.name}
                className={`capsule${hoveredIndex === index ? " is-hovered" : ""}`}
                style={{ "--flavor-color": flavour.color }}
                onMouseEnter={() => handleCapsuleEnter(index)}
                onMouseLeave={() => handleCapsuleLeave(index)}
              >
                <div className="capsule-shell">
                  <div className="capsule-lid" />
                  <div className="capsule-glow" />
                  <div
                    className="smoke-layer"
                    ref={(el) => (smokeLayerRefs.current[index] = el)}
                  />
                </div>
                <span className="capsule-label">{flavour.name}</span>
              </div>
            ))}
          </div>

          <div className={`glass-panel${active ? " visible" : ""}`}>
            <h3 style={hovered ? { color: hovered.color } : undefined}>
              {hovered ? hovered.name : "Airscream"}
            </h3>
            <p className="panel-notes">
              {hovered ? hovered.notes : "Hover a capsule to reveal its flavour notes."}
            </p>
            <div className="panel-footer">
              <span>{hovered ? hovered.price : ""}</span>
              <span className="panel-tag">Airscream Collection</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>&copy; 2026 Smoke Machine. Airscream is our premium in-house collection.</p>
      </footer>
    </>
  );
}
