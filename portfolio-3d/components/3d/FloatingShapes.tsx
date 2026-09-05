'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

interface ShapeProps {
  position: [number, number, number];
  color: string;
}

const FloatingSphere = ({ position, color }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingBox = ({ position, color }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </Box>
  );
};

const FloatingTorus = ({ position, color }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </Torus>
  );
};

const FloatingOctahedron = ({ position, color }: ShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.7;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.5) * 0.6;
    }
  });

  return (
    <Octahedron ref={meshRef} args={[1.2]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </Octahedron>
  );
};

const FloatingShapes = () => {
  return (
    <>
      <FloatingSphere position={[-4, 0, -5]} color="#00f5ff" />
      <FloatingBox position={[4, 2, -3]} color="#ff00ff" />
      <FloatingTorus position={[-3, -2, -4]} color="#00ff88" />
      <FloatingOctahedron position={[5, -1, -6]} color="#ffaa00" />
      <FloatingSphere position={[2, 3, -7]} color="#ff0080" />
      <FloatingBox position={[-5, 1, -8]} color="#00ffff" />
    </>
  );
};

export default FloatingShapes;
