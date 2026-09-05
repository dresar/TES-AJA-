# Portfolio 3D Website

Website portfolio modern dengan animasi 3D interaktif menggunakan Next.js, Three.js, dan berbagai library modern lainnya.

## 🚀 Fitur

- ✨ Hero section dengan animasi 3D interaktif
- 🎨 About section dengan visualisasi 3D
- 💼 Portfolio/Projects showcase dengan card 3D
- 🛠️ Skills visualization dalam 3D
- 📧 Contact form dengan desain modern
- 🌈 Gradient effects dan glass morphism
- 🎭 Smooth animations menggunakan Framer Motion
- 📱 Fully responsive design
- ⚡ Fast performance dengan Next.js 15

## 🛠️ Teknologi

- **Next.js 15** - React framework untuk production
- **TypeScript** - Type safety
- **Three.js** - Library 3D untuk web
- **React Three Fiber** - React renderer untuk Three.js
- **@react-three/drei** - Helper components untuk R3F
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library

## 📦 Instalasi

1. Clone repository ini
```bash
git clone <repository-url>
cd portfolio-3d
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:3000`

## 🏗️ Struktur Proyek

```
portfolio-3d/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── 3d/                 # Komponen 3D
│   │   ├── AnimatedSphere.tsx
│   │   ├── FloatingShapes.tsx
│   │   ├── ParticleField.tsx
│   │   └── HolographicCard.tsx
│   ├── sections/           # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/                 # UI components
│       └── Navbar.tsx
└── lib/                    # Utilities & helpers
```

## 🎨 Customization

### Mengubah Warna Tema

Edit file `app/globals.css` untuk mengubah color scheme:

```css
:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
  --background-end-rgb: 10, 10, 30;
}
```

### Menambah/Edit Proyek

Edit array `projects` di `components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description',
    tags: ['Tech1', 'Tech2'],
    color: 'from-cyan-500 to-blue-600',
    icon: '🚀',
  },
  // ... tambah proyek lainnya
];
```

### Menambah/Edit Skills

Edit array `skills` di `components/sections/Skills.tsx`:

```typescript
const skills = [
  { name: 'React', level: 95, color: '#61DAFB' },
  // ... tambah skill lainnya
];
```

## 📱 Responsive Design

Website ini fully responsive dan telah dioptimasi untuk:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## ⚡ Performance

- Lazy loading untuk komponen 3D
- Code splitting otomatis oleh Next.js
- Optimized bundle size
- Fast page transitions
- Smooth 60fps animations

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy dengan satu klik!

### Build untuk Production

```bash
npm run build
npm start
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Dibuat dengan ❤️ menggunakan Next.js dan Three.js

## 📸 Screenshots

Kunjungi website untuk melihat animasi 3D yang menakjubkan!

---

**Happy Coding! 🚀**
