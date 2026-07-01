"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

function Device({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.4}
      rotationIntensity={reducedMotion ? 0 : 0.3}
      floatIntensity={reducedMotion ? 0 : 0.7}
    >
      <group ref={groupRef} rotation={[0, reducedMotion ? -0.5 : 0.15, 0]}>
        {/* Main body (mod) */}
        <RoundedBox
          args={[0.68, 1.68, 0.32]}
          radius={0.15}
          smoothness={8}
          position={[0, -0.55, 0]}
        >
          <meshPhysicalMaterial
            color="#1a1d22"
            metalness={0.55}
            roughness={0.32}
            clearcoat={0.4}
            clearcoatRoughness={0.35}
          />
        </RoundedBox>

        {/* Front panel inset (brushed, subtle contrast) */}
        <RoundedBox
          args={[0.46, 1.28, 0.015]}
          radius={0.09}
          smoothness={6}
          position={[0, -0.55, 0.165]}
        >
          <meshPhysicalMaterial
            color="#101318"
            metalness={0.4}
            roughness={0.5}
            clearcoat={0.2}
          />
        </RoundedBox>

        {/* OLED screen — dark glass with a thin dim UI, not a flat bright block */}
        <mesh position={[0, -0.1, 0.174]}>
          <planeGeometry args={[0.34, 0.2]} />
          <meshPhysicalMaterial
            color="#03080a"
            metalness={0.1}
            roughness={0.15}
            clearcoat={0.8}
          />
        </mesh>
        <mesh position={[0, -0.03, 0.176]}>
          <planeGeometry args={[0.22, 0.018]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, -0.09, 0.176]}>
          <planeGeometry args={[0.14, 0.012]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={0.9}
            toneMapped={false}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Fire button — machined disc with a thin backlit rim, not a flat sticker */}
        <mesh position={[0, -0.58, 0.176]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.012, 32]} />
          <meshPhysicalMaterial
            color="#25292f"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, -0.58, 0.176]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.076, 0.086, 40]} />
          <meshStandardMaterial
            color="#a35bff"
            emissive="#a35bff"
            emissiveIntensity={1.4}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Adjustment buttons */}
        {[-0.98, -1.1].map((y) => (
          <mesh key={y} position={[0, y, 0.172]}>
            <boxGeometry args={[0.09, 0.035, 0.01]} />
            <meshPhysicalMaterial
              color="#2b3038"
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>
        ))}

        {/* Thin edge seam light */}
        <mesh position={[0.335, -0.55, 0]}>
          <boxGeometry args={[0.008, 1.35, 0.008]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={1.8}
            toneMapped={false}
          />
        </mesh>

        {/* Collar connecting mod to pod */}
        <mesh position={[0, 0.32, 0]}>
          <cylinderGeometry args={[0.21, 0.25, 0.07, 40]} />
          <meshPhysicalMaterial
            color="#c7ccd1"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Pod / cartridge — frosted glass, lighter than body */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.18, 0.2, 1.0, 40]} />
          <meshPhysicalMaterial
            color="#3a4048"
            metalness={0.05}
            roughness={0.08}
            transmission={0.85}
            thickness={0.5}
            ior={1.45}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* E-liquid glow inside pod */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.115, 0.115, 0.5, 28]} />
          <meshStandardMaterial
            color="#a35bff"
            emissive="#a35bff"
            emissiveIntensity={0.7}
            toneMapped={false}
            transparent
            opacity={0.55}
          />
        </mesh>

        {/* Drip tip */}
        <mesh position={[0, 1.42, 0]}>
          <cylinderGeometry args={[0.095, 0.165, 0.24, 32]} />
          <meshPhysicalMaterial
            color="#08090a"
            metalness={0.3}
            roughness={0.4}
            clearcoat={0.5}
          />
        </mesh>
        <mesh position={[0, 1.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.085, 0.096, 40]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={1.6}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Base contact glow */}
        <mesh position={[0, -1.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.22, 0.3, 40]} />
          <meshStandardMaterial
            color="#a35bff"
            emissive="#a35bff"
            emissiveIntensity={1}
            toneMapped={false}
            side={THREE.DoubleSide}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

function StudioLighting() {
  return (
    <Environment resolution={128} frames={1}>
      <Lightformer
        intensity={2.2}
        color="#dff4ff"
        position={[2, 3, 4]}
        scale={[4, 4, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        intensity={3}
        color="#2ee6ff"
        position={[-3, 0.5, 2]}
        scale={[3, 5, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        intensity={2.4}
        color="#a35bff"
        position={[3, -2, -2]}
        scale={[3, 3, 1]}
        target={[0, 0, 0]}
      />
      <Lightformer
        intensity={0.8}
        color="#ffffff"
        position={[0, 4, -3]}
        scale={[6, 2, 1]}
        target={[0, 0, 0]}
      />
    </Environment>
  );
}

export default function HeroScene({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 6.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.18} />
        <directionalLight
          position={[2.5, 4, 5]}
          intensity={1.1}
          color="#f5f9fa"
        />
        <pointLight position={[-2.5, -1, 2]} intensity={6} color="#a35bff" />

        <StudioLighting />

        <Device reducedMotion={reducedMotion} />

        <Sparkles
          count={60}
          scale={[4, 5, 3]}
          size={2}
          speed={reducedMotion ? 0 : 0.22}
          opacity={0.4}
          color="#8fb9c4"
        />

        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.75}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
          <Vignette eskil={false} offset={0.15} darkness={0.6} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
