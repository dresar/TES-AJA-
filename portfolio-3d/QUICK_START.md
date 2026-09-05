# 🚀 Quick Start - 5 Menit Jalan!

## Step 1: Masuk ke Folder
```bash
cd /workspace/portfolio-3d
```

## Step 2: Jalankan Development Server
```bash
npm run dev
```

## Step 3: Buka Browser
```
http://localhost:3000
```

## 🎯 Langsung Terlihat:
✅ Hero section dengan animasi 3D sphere
✅ Floating shapes yang berputar
✅ Navigation bar dengan glass effect
✅ Scroll untuk lihat semua section

---

## 🎨 Kustomisasi 3 Menit

### 1. Ubah Nama Anda (30 detik)
File: `components/sections/Hero.tsx` line 41-44
```typescript
<span className="text-gradient">Halo, Saya [NAMA ANDA]</span>
<br />
<span className="text-white">[PROFESI ANDA]</span>
```

### 2. Ubah Proyek (1 menit)
File: `components/sections/Projects.tsx` line 6
```typescript
const projects = [
  {
    id: 1,
    title: 'Proyek Anda',
    description: 'Deskripsi proyek...',
    tags: ['Tech1', 'Tech2'],
    color: 'from-cyan-500 to-blue-600',
    icon: '🚀',
  },
  // Tambah lebih banyak...
];
```

### 3. Ubah Skills (1 menit)
File: `components/sections/Skills.tsx` line 11
```typescript
const skills = [
  { name: 'Your Skill', level: 90, color: '#61DAFB' },
  // Tambah lebih banyak...
];
```

### 4. Ubah Warna Tema (30 detik)
File: `app/globals.css` line 16-18
```css
.text-gradient {
  background: linear-gradient(90deg, #00f5ff 0%, #ff00ff 50%, #00ff88 100%);
  /* ^ Ubah warna hex ini */
}
```

---

## 🚢 Deploy 2 Menit

### Option 1: Vercel (Tercepat)
```bash
npm i -g vercel
vercel login
vercel
```
✅ Done! URL langsung tersedia

### Option 2: Push ke GitHub + Vercel Dashboard
```bash
git init
git add .
git commit -m "My awesome 3D portfolio"
git push
```
Lalu import di vercel.com

---

## 📁 File Penting

| File | Isi |
|------|-----|
| `components/sections/Hero.tsx` | Hero section (halaman pertama) |
| `components/sections/About.tsx` | About section |
| `components/sections/Projects.tsx` | Portfolio projects |
| `components/sections/Skills.tsx` | Skills dengan 3D |
| `components/sections/Contact.tsx` | Contact form |
| `app/globals.css` | Warna & styling |
| `lib/constants.ts` | Data & konfigurasi |

---

## 🎮 Commands

```bash
npm run dev      # Development (localhost:3000)
npm run build    # Build production
npm start        # Run production
npm run lint     # Check code
```

---

## 💡 Tips Cepat

1. **Performa 3D terbaik**: Gunakan Chrome atau Firefox
2. **Edit real-time**: Save file, browser auto-reload
3. **Lihat errors**: Buka browser console (F12)
4. **Mobile view**: Gunakan browser dev tools (F12 > responsive)

---

## 🆘 Troubleshooting

### Port 3000 sudah dipakai?
```bash
PORT=3001 npm run dev
```

### Build error?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### 3D tidak muncul?
- Check browser support WebGL
- Try Chrome/Firefox
- Clear cache & refresh

---

## 📚 Dokumentasi Lengkap

- **Setup detail**: `GETTING_STARTED.md`
- **Semua fitur**: `FEATURES.md`  
- **Cara deploy**: `DEPLOYMENT.md`
- **Overview**: `README.md`

---

## ✨ Selamat Coding!

Website portfolio 3D Anda siap dalam 5 menit! 🚀

**Next Steps:**
1. Kustomisasi konten
2. Tambah foto/gambar
3. Deploy ke production
4. Share ke dunia! 🌍
