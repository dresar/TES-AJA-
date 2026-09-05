'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

const skills = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'Next.js', level: 90, color: '#000000' },
  { name: 'Three.js', level: 85, color: '#049EF4' },
  { name: 'TypeScript', level: 88, color: '#3178C6' },
  { name: 'Tailwind', level: 92, color: '#06B6D4' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'WebGL', level: 75, color: '#990000' },
  { name: 'Framer Motion', level: 85, color: '#0055FF' },
];

interface SkillSphereProps {
  position: [number, number, number];
  skill: typeof skills[0];
  index: number;
}

const SkillSphere = ({ position, skill, index }: SkillSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.3;
      meshRef.current.rotation.y = time * 0.5;
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  const scale = skill.level / 50;

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[scale, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <Text
        ref={textRef}
        position={[0, scale + 0.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
};

const Skills3D = () => {
  const positions: [number, number, number][] = [
    [0, 0, 0],
    [4, 2, -2],
    [-4, -1, -3],
    [3, -2, 2],
    [-3, 2, 1],
    [5, 0, -4],
    [-5, -2, 0],
    [2, 3, -1],
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
      {skills.map((skill, index) => (
        <SkillSphere
          key={skill.name}
          position={positions[index]}
          skill={skill}
          index={index}
        />
      ))}
    </>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Keahlian Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi modern
          </p>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[600px] glass-effect rounded-2xl overflow-hidden mb-12"
        >
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <Suspense fallback={null}>
              <Skills3D />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </motion.div>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-cyan-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, #ff00ff)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
