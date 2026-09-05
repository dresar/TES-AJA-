'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'E-Commerce 3D',
    description: 'Platform e-commerce dengan visualisasi produk 3D interaktif menggunakan Three.js dan React',
    tags: ['Next.js', 'Three.js', 'TypeScript', 'Tailwind'],
    color: 'from-cyan-500 to-blue-600',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'Virtual Gallery',
    description: 'Galeri seni virtual dengan navigasi 3D dan pengalaman immersive',
    tags: ['React', 'Three.js', 'WebGL', 'Blender'],
    color: 'from-purple-500 to-pink-600',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'Portfolio Interaktif',
    description: 'Website portfolio dengan animasi 3D dan interaksi yang menarik',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'CSS3'],
    color: 'from-green-500 to-teal-600',
    icon: '💼',
  },
  {
    id: 4,
    title: 'Game Web 3D',
    description: 'Mini game berbasis web dengan physics engine dan grafis 3D',
    tags: ['Three.js', 'Cannon.js', 'React', 'WebGL'],
    color: 'from-orange-500 to-red-600',
    icon: '🎮',
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    description: 'Dashboard dengan visualisasi data 3D dan chart interaktif',
    tags: ['D3.js', 'Chart.js', 'React', 'Node.js'],
    color: 'from-indigo-500 to-purple-600',
    icon: '📊',
  },
  {
    id: 6,
    title: 'Landing Page Premium',
    description: 'Landing page dengan animasi smooth dan desain modern',
    tags: ['Next.js', 'GSAP', 'Tailwind', 'Framer Motion'],
    color: 'from-pink-500 to-rose-600',
    icon: '🚀',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Proyek Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan dengan teknologi modern dan desain yang menarik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Card Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  className="text-8xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
