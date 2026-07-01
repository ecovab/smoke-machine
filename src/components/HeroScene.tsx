"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Device() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
      <group ref={groupRef}>
        {/* Body */}
        <RoundedBox args={[0.85, 2.6, 0.42]} radius={0.16} smoothness={6}>
          <meshPhysicalMaterial
            color="#101317"
            metalness={0.85}
            roughness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.15}
            reflectivity={0.6}
          />
        </RoundedBox>

        {/* Accent strip */}
        <mesh position={[0, 0.15, 0.215]}>
          <boxGeometry args={[0.12, 1.9, 0.01]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={2.4}
            toneMapped={false}
          />
        </mesh>

        {/* Mouthpiece */}
        <mesh position={[0, 1.55, 0]}>
          <cylinderGeometry args={[0.16, 0.22, 0.5, 24]} />
          <meshPhysicalMaterial
            color="#0b0d0f"
            metalness={0.6}
            roughness={0.35}
          />
        </mesh>

        {/* Base glow ring */}
        <mesh position={[0, -1.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.32, 0.44, 32]} />
          <meshStandardMaterial
            color="#a35bff"
            emissive="#a35bff"
            emissiveIntensity={1.8}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 6.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <pointLight position={[3, 3, 4]} intensity={40} color="#2ee6ff" />
        <pointLight position={[-3, -2, 3]} intensity={30} color="#a35bff" />
        <pointLight position={[0, -3, -2]} intensity={18} color="#ff4f9e" />

        <Device />

        <Sparkles
          count={70}
          scale={[4, 5, 3]}
          size={2.4}
          speed={0.25}
          opacity={0.5}
          color="#8fb9c4"
        />
      </Suspense>
    </Canvas>
  );
}
