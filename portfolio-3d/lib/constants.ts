// Site Configuration
export const SITE_CONFIG = {
  name: 'Portfolio 3D',
  title: 'Portfolio 3D - Creative Developer',
  description: 'Website portfolio 3D interaktif dengan Next.js dan Three.js',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Your Name',
  email: 'your.email@example.com',
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com',
};

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

// Animation Variants
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_IN_DOWN = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const SLIDE_IN_LEFT = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const SLIDE_IN_RIGHT = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
