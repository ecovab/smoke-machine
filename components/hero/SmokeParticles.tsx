"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

type SmokeParticlesProps = {
  progress: MotionValue<number>;
  count?: number;
};

export function SmokeParticles({ progress, count = 900 }: SmokeParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const speeds = useRef<Float32Array>(new Float32Array(0));

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 12;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.random() * 9 - 1.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius - 5;
      spd[i] = 0.15 + Math.random() * 0.35;
    }
    speeds.current = spd;
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    const geometry = pointsRef.current?.geometry;
    if (!geometry) return;

    const posAttr = geometry.attributes.position as THREE.BufferAttribute;
    const spd = speeds.current;

    for (let i = 0; i < count; i++) {
      const y = posAttr.getY(i) + spd[i] * delta;
      posAttr.setY(i, y > 8 ? -2 : y);

      const x = posAttr.getX(i);
      const drift = Math.sin(state.clock.elapsedTime * 0.12 + i * 0.5) * delta * 0.08;
      posAttr.setX(i, x + drift);
    }
    posAttr.needsUpdate = true;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012;
    }

    if (materialRef.current) {
      const p = progress.get();
      const targetOpacity = 0.08 + Math.min(1, p * 1.6) * 0.32;
      materialRef.current.opacity += (targetOpacity - materialRef.current.opacity) * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.16}
        color="#d8d2c8"
        transparent
        opacity={0.08}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
