"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";
import { lerp, smoothstep } from "@/lib/animations";

type CameraControllerProps = {
  progress: MotionValue<number>;
};

type Waypoint = { x: number; y: number; z: number; fov: number; lookY: number };

const WAYPOINTS: Waypoint[] = [
  { x: 0, y: 2.4, z: 24, fov: 30, lookY: 1.2 },
  { x: 1.6, y: 1.8, z: 13, fov: 36, lookY: 1.5 },
  { x: -1.2, y: 1.3, z: 4.5, fov: 46, lookY: 1.7 },
  { x: 0, y: 0.9, z: 0.6, fov: 58, lookY: 1.9 },
];

export function CameraController({ progress }: CameraControllerProps) {
  const { camera } = useThree();
  const current = useRef<Waypoint>({ ...WAYPOINTS[0] });

  useFrame((_, delta) => {
    const p = THREE.MathUtils.clamp(progress.get(), 0, 1);
    const scaled = p * (WAYPOINTS.length - 1);
    const idx = Math.min(WAYPOINTS.length - 2, Math.floor(scaled));
    const localT = smoothstep(0, 1, scaled - idx);
    const a = WAYPOINTS[idx];
    const b = WAYPOINTS[idx + 1];

    const target: Waypoint = {
      x: lerp(a.x, b.x, localT),
      y: lerp(a.y, b.y, localT),
      z: lerp(a.z, b.z, localT),
      fov: lerp(a.fov, b.fov, localT),
      lookY: lerp(a.lookY, b.lookY, localT),
    };

    const smoothing = 1 - Math.pow(0.0025, delta);
    current.current.x = lerp(current.current.x, target.x, smoothing);
    current.current.y = lerp(current.current.y, target.y, smoothing);
    current.current.z = lerp(current.current.z, target.z, smoothing);
    current.current.fov = lerp(current.current.fov, target.fov, smoothing);
    current.current.lookY = lerp(current.current.lookY, target.lookY, smoothing);

    camera.position.set(current.current.x, current.current.y, current.current.z);

    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = current.current.fov;
      camera.updateProjectionMatrix();
    }

    camera.lookAt(0, current.current.lookY, 0);
  });

  return null;
}
