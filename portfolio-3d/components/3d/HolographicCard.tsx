'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface HolographicCardProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

const HolographicCard = ({ position, rotation = [0, 0, 0] }: HolographicCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = rotation[0] + Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[3, 4, 0.2]}
      position={position}
      rotation={rotation}
      radius={0.1}
      smoothness={4}
    >
      <meshPhysicalMaterial
        color="#00f5ff"
        metalness={0.9}
        roughness={0.1}
        transmission={0.5}
        thickness={0.5}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </RoundedBox>
  );
};

export default HolographicCard;
