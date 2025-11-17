# Getting Started - Portfolio 3D

Panduan lengkap untuk menjalankan dan mengkustomisasi website portfolio 3D ini.

## 📋 Prasyarat

Pastikan Anda sudah menginstall:
- **Node.js** versi 18.x atau lebih baru
- **npm** atau **yarn** atau **pnpm**
- Browser modern (Chrome, Firefox, Safari, Edge)

## 🚀 Instalasi & Menjalankan Proyek

### 1. Install Dependencies

```bash
cd portfolio-3d
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses: `http://localhost:3000`

### 3. Build untuk Production

```bash
npm run build
npm start
```

## 🎨 Kustomisasi

### Mengubah Informasi Personal

#### 1. Update Data di `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: 'Portfolio 3D',
  title: 'Nama Anda - Creative Developer',
  description: 'Deskripsi Anda',
  author: 'Nama Anda',
  email: 'email.anda@example.com',
};
```

#### 2. Update Social Media Links

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/username-anda',
  linkedin: 'https://linkedin.com/in/username-anda',
  twitter: 'https://twitter.com/username-anda',
  instagram: 'https://instagram.com/username-anda',
};
```

### Mengubah Hero Section

Edit file `components/sections/Hero.tsx`:

```typescript
<h1>
  <span className="text-gradient">Halo, Saya [Nama Anda]</span>
  <br />
  <span className="text-white">[Profesi Anda]</span>
</h1>
```

### Menambah/Edit Proyek

Edit file `components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Judul Proyek',
    description: 'Deskripsi singkat proyek',
    tags: ['React', 'Next.js', 'TypeScript'],
    color: 'from-cyan-500 to-blue-600',
    icon: '🚀',
  },
  // Tambahkan proyek lainnya...
];
```

### Menambah/Edit Skills

Edit file `components/sections/Skills.tsx`:

```typescript
const skills = [
  { name: 'Nama Skill', level: 90, color: '#hexcolor' },
  // Tambahkan skill lainnya...
];
```

### Mengubah Warna Tema

Edit file `app/globals.css`:

```css
:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
  --background-end-rgb: 10, 10, 30;
}

/* Gradient colors di text-gradient class */
.text-gradient {
  background: linear-gradient(90deg, #00f5ff 0%, #ff00ff 50%, #00ff88 100%);
  /* Ubah warna sesuai keinginan */
}
```

## 🎭 Komponen 3D

### Komponen yang Tersedia

1. **AnimatedSphere** - Bola 3D dengan distorsi
2. **FloatingShapes** - Berbagai bentuk 3D yang melayang
3. **ParticleField** - Lapangan partikel
4. **HolographicCard** - Card dengan efek hologram

### Menambah Komponen 3D Baru

Buat file baru di `components/3d/`:

```typescript
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MyNew3DComponent = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Animasi
      meshRef.current.rotation.y = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00f5ff" />
    </mesh>
  );
};

export default MyNew3DComponent;
```

## 📱 Responsive Design

Website ini sudah fully responsive untuk:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Untuk mengubah breakpoints, edit file Tailwind di `tailwind.config.ts`.

## 🔧 Scripts yang Tersedia

```bash
# Development
npm run dev

# Build Production
npm run build

# Start Production Server
npm start

# Lint Code
npm run lint
```

## 🐛 Troubleshooting

### Error: Module not found

```bash
# Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Error

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Port sudah digunakan

```bash
# Gunakan port lain
PORT=3001 npm run dev
```

## 📦 Deploy

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Kunjungi [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

### Deploy ke Netlify

1. Build project: `npm run build`
2. Upload folder `out` ke Netlify
3. Configure settings

## 🔐 Environment Variables

Buat file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/username
```

## 💡 Tips & Best Practices

1. **Performance**: Gunakan lazy loading untuk komponen 3D
2. **SEO**: Update metadata di `app/layout.tsx`
3. **Images**: Gunakan Next.js Image component untuk optimasi
4. **Accessibility**: Tambahkan alt text dan ARIA labels
5. **Testing**: Test di berbagai browser dan device

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Support

Jika ada pertanyaan atau issue:
1. Check dokumentasi
2. Search di GitHub Issues
3. Create new issue dengan detail lengkap

## 📄 License

MIT License - silakan gunakan untuk portfolio pribadi Anda!

---

**Selamat mengkustomisasi portfolio 3D Anda! 🚀**
