'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 5000;
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3));
    return geometry;
  }, [particlesPosition]);

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.1}
        color="#00f5ff"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
