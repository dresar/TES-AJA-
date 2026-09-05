'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedTorus = () => {
  return (
    <Torus args={[2, 0.5, 16, 100]}>
      <meshStandardMaterial
        color="#00f5ff"
        emissive="#00f5ff"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Torus>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Hubungi Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Mari kita wujudkan ide Anda menjadi kenyataan!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nama
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pesan
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg glow hover:shadow-2xl transition-all"
            >
              Kirim Pesan
            </motion.button>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-6">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all"
                >
                  <span className="text-xl">🔗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[500px] glass-effect rounded-2xl overflow-hidden"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, -10]} color="#ff00ff" />
              <Suspense fallback={null}>
                <AnimatedTorus />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center text-gray-400"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
        <p className="text-sm">
          © 2024 Portfolio 3D. Dibuat dengan ❤️ menggunakan Next.js & Three.js
        </p>
      </motion.footer>
    </section>
  );
};

export default Contact;
