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
        {/* Main body (mod) */}
        <RoundedBox args={[0.72, 1.7, 0.34]} radius={0.13} smoothness={6} position={[0, -0.55, 0]}>
          <meshPhysicalMaterial
            color="#15181d"
            metalness={0.75}
            roughness={0.4}
            clearcoat={0.6}
            clearcoatRoughness={0.3}
            reflectivity={0.5}
          />
        </RoundedBox>

        {/* Front panel inset */}
        <RoundedBox
          args={[0.5, 1.3, 0.02]}
          radius={0.08}
          smoothness={4}
          position={[0, -0.55, 0.175]}
        >
          <meshPhysicalMaterial color="#0a0c0f" metalness={0.3} roughness={0.55} />
        </RoundedBox>

        {/* OLED screen */}
        <mesh position={[0, -0.12, 0.19]}>
          <planeGeometry args={[0.36, 0.22]} />
          <meshStandardMaterial
            color="#08363f"
            emissive="#2ee6ff"
            emissiveIntensity={1.1}
            toneMapped={false}
          />
        </mesh>

        {/* Fire button */}
        <mesh position={[0, -0.55, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.03, 32]} />
          <meshStandardMaterial
            color="#a35bff"
            emissive="#a35bff"
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>

        {/* Adjustment buttons */}
        <mesh position={[0, -1.0, 0.185]}>
          <boxGeometry args={[0.1, 0.05, 0.02]} />
          <meshStandardMaterial color="#3a4048" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[0, -1.12, 0.185]}>
          <boxGeometry args={[0.1, 0.05, 0.02]} />
          <meshStandardMaterial color="#3a4048" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Vertical accent seam */}
        <mesh position={[0.355, -0.55, 0.06]}>
          <boxGeometry args={[0.015, 1.55, 0.015]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={2.6}
            toneMapped={false}
          />
        </mesh>

        {/* Collar connecting mod to pod */}
        <mesh position={[0, 0.32, 0]}>
          <cylinderGeometry args={[0.22, 0.26, 0.08, 32]} />
          <meshPhysicalMaterial color="#e8ecef" metalness={0.9} roughness={0.25} />
        </mesh>

        {/* Pod / cartridge — translucent, lighter than body */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.19, 0.21, 1.0, 32]} />
          <meshPhysicalMaterial
            color="#2b3038"
            metalness={0.2}
            roughness={0.15}
            transmission={0.55}
            thickness={0.4}
            ior={1.4}
            clearcoat={1}
          />
        </mesh>

        {/* E-liquid glow inside pod */}
        <mesh position={[0, 0.72, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.55, 24]} />
          <meshStandardMaterial
            color="#a35bff"
            emissive="#a35bff"
            emissiveIntensity={1.2}
            toneMapped={false}
            transparent
            opacity={0.75}
          />
        </mesh>

        {/* Drip tip */}
        <mesh position={[0, 1.42, 0]}>
          <cylinderGeometry args={[0.1, 0.17, 0.24, 24]} />
          <meshPhysicalMaterial color="#050607" metalness={0.4} roughness={0.5} />
        </mesh>
        <mesh position={[0, 1.56, 0]}>
          <cylinderGeometry args={[0.095, 0.1, 0.05, 24]} />
          <meshStandardMaterial
            color="#2ee6ff"
            emissive="#2ee6ff"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>

        {/* Base glow ring */}
        <mesh position={[0, -1.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.26, 0.36, 32]} />
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
        <ambientLight intensity={0.35} />
        <directionalLight position={[2.5, 4, 5]} intensity={1.4} color="#f5f9fa" />
        <pointLight position={[3, 3, 4]} intensity={40} color="#2ee6ff" />
        <pointLight position={[-3, -2, 3]} intensity={30} color="#a35bff" />
        <pointLight position={[0, -3, -2]} intensity={18} color="#ff4f9e" />
        <pointLight position={[-1.5, 1, 2.5]} intensity={12} color="#ffffff" />

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
