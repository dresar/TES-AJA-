'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RotatingCube = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#00f5ff"
        emissive="#00f5ff"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] glass-effect rounded-2xl overflow-hidden"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <RotatingCube />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Passionate Developer & Creative Designer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Saya adalah seorang developer yang passionate dalam menciptakan pengalaman 
              digital yang unik dan menakjubkan. Dengan keahlian dalam pengembangan web 
              modern dan teknologi 3D, saya menghadirkan ide-ide kreatif menjadi kenyataan.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Spesialisasi saya meliputi React, Next.js, Three.js, dan berbagai framework 
              modern lainnya. Saya selalu bersemangat untuk belajar teknologi baru dan 
              menciptakan solusi inovatif.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h4 className="text-4xl font-bold text-gradient mb-2">50+</h4>
                <p className="text-gray-400">Proyek Selesai</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h4 className="text-4xl font-bold text-gradient mb-2">5+</h4>
                <p className="text-gray-400">Tahun Pengalaman</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
