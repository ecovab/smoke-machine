"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";
import { CameraController } from "./CameraController";
import { SmokeParticles } from "./SmokeParticles";

type SceneProps = {
  progress: MotionValue<number>;
};

function FloatingForms({ progress }: SceneProps) {
  const group = useRef<THREE.Group>(null);
  const shapes = useMemo(
    () => [
      { position: [-3.2, 2.1, -3], scale: 1.1, speed: 0.18, kind: "icosahedron" as const },
      { position: [3.6, 1.2, -6], scale: 1.6, speed: 0.12, kind: "torus" as const },
      { position: [-1.6, 3.4, -8], scale: 0.9, speed: 0.22, kind: "octahedron" as const },
      { position: [2.2, 0.4, -2.5], scale: 0.7, speed: 0.26, kind: "icosahedron" as const },
      { position: [0.4, 2.8, -11], scale: 2.1, speed: 0.08, kind: "torus" as const },
    ],
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const p = progress.get();
    group.current.children.forEach((child, i) => {
      child.rotation.x += delta * 0.05 * (i % 2 === 0 ? 1 : -1);
      child.rotation.y += delta * 0.08;
      child.position.y += Math.sin(state.clock.elapsedTime * 0.3 + i) * delta * 0.02;
    });
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, p * 2, 0.02);
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position as [number, number, number]} scale={shape.scale}>
          {shape.kind === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
          {shape.kind === "torus" && <torusGeometry args={[1, 0.35, 16, 64]} />}
          {shape.kind === "octahedron" && <octahedronGeometry args={[1, 0]} />}
          <meshStandardMaterial
            color="#1a1a1f"
            emissive="#d68f3e"
            emissiveIntensity={0.06}
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function ReflectiveGround() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, -4]}>
      <planeGeometry args={[80, 80]} />
      <MeshReflectorMaterial
        blur={[400, 120]}
        resolution={512}
        mixBlur={1}
        mixStrength={35}
        roughness={1}
        depthScale={1.1}
        minDepthThreshold={0.85}
        color="#06060a"
        metalness={0.6}
        mirror={0}
      />
    </mesh>
  );
}

function VolumetricBeams({ progress }: SceneProps) {
  const beamsRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!beamsRef.current) return;
    const p = progress.get();
    const intensity = Math.max(0, Math.min(1, (p - 0.15) / 0.5));
    beamsRef.current.children.forEach((child) => {
      const mesh = child as THREE.Mesh;
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.02 + intensity * 0.08;
    });
  });

  return (
    <group ref={beamsRef}>
      {[-4, -1, 2.5, 5.5].map((x, i) => (
        <mesh key={i} position={[x, 4, -6 - i]} rotation={[0, 0, 0.05 * i]}>
          <coneGeometry args={[1.4, 12, 24, 1, true]} />
          <meshBasicMaterial
            color="#e8a35b"
            transparent
            opacity={0.03}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneFog({ progress }: SceneProps) {
  const fogRef = useRef<THREE.Fog>(null);
  useFrame(() => {
    if (!fogRef.current) return;
    const p = progress.get();
    if (p < 0.75) {
      const density = THREE.MathUtils.lerp(6, 16, Math.min(1, p / 0.75));
      fogRef.current.near = 1;
      fogRef.current.far = density + 14;
    } else {
      const dissolve = (p - 0.75) / 0.25;
      fogRef.current.near = THREE.MathUtils.lerp(1, -4, dissolve);
      fogRef.current.far = THREE.MathUtils.lerp(30, 6, dissolve);
    }
  });

  return <fog ref={fogRef} attach="fog" args={["#0a0a0d", 1, 30]} />;
}

export function SmokeScene({ progress }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 2.4, 24], fov: 30, near: 0.1, far: 60 }}
    >
      <color attach="background" args={["#07070a"]} />
      <SceneFog progress={progress} />
      <ambientLight intensity={0.18} />
      <directionalLight position={[6, 8, 4]} intensity={0.5} color="#e8dfd2" />
      <pointLight position={[-4, 3, -2]} intensity={12} color="#d68f3e" distance={14} decay={2} />
      <pointLight position={[3, 1, -8]} intensity={8} color="#8b8b94" distance={16} decay={2} />

      <Suspense fallback={null}>
        <FloatingForms progress={progress} />
        <VolumetricBeams progress={progress} />
        <SmokeParticles progress={progress} />
        <ReflectiveGround />
      </Suspense>

      <CameraController progress={progress} />
    </Canvas>
  );
}
