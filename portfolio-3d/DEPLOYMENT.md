# Panduan Deployment Portfolio 3D

Panduan lengkap untuk deploy website portfolio 3D ke berbagai platform hosting.

## 🚀 Deploy ke Vercel (Recommended)

Vercel adalah pilihan terbaik untuk Next.js karena dibuat oleh tim yang sama.

### Langkah-langkah:

1. **Push code ke GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio 3D"
git branch -M main
git remote add origin https://github.com/username/portfolio-3d.git
git push -u origin main
```

2. **Deploy via Vercel Dashboard**
   - Kunjungi [vercel.com](https://vercel.com)
   - Klik "New Project"
   - Import repository dari GitHub
   - Vercel akan auto-detect Next.js
   - Klik "Deploy"

3. **Configure Environment Variables** (Optional)
   - Masuk ke Project Settings
   - Tambahkan environment variables:
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_GITHUB_URL`
     - dll (lihat `.env.example`)

4. **Custom Domain** (Optional)
   - Masuk ke Project Settings > Domains
   - Tambahkan custom domain
   - Update DNS records

### Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📦 Deploy ke Netlify

### Method 1: Netlify Dashboard

1. **Build Project**
```bash
npm run build
```

2. **Drag & Drop**
   - Kunjungi [netlify.com](https://netlify.com)
   - Drag folder `.next` ke dashboard

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### netlify.toml Configuration

Buat file `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🐳 Deploy dengan Docker

### Dockerfile

Buat file `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

Buat file `docker-compose.yml`:

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Commands

```bash
# Build image
docker build -t portfolio-3d .

# Run container
docker run -p 3000:3000 portfolio-3d

# Using docker-compose
docker-compose up -d
```

## ☁️ Deploy ke AWS

### AWS Amplify

1. **Push ke GitHub**
2. Kunjungi AWS Amplify Console
3. Klik "New App" > "Host web app"
4. Connect repository
5. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### AWS EC2

1. **Launch EC2 Instance** (Ubuntu)
2. **SSH ke server**
3. **Install dependencies**:
```bash
sudo apt update
sudo apt install nodejs npm nginx
```

4. **Clone & Setup**:
```bash
git clone <your-repo>
cd portfolio-3d
npm install
npm run build
```

5. **PM2 Process Manager**:
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

6. **Configure Nginx**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔷 Deploy ke Azure

### Azure Static Web Apps

1. Kunjungi Azure Portal
2. Create "Static Web App"
3. Connect GitHub repository
4. Configure build:
   - App location: `/`
   - API location: (kosongkan)
   - Output location: `.next`

## 📱 Deploy ke GitHub Pages

⚠️ **Note**: GitHub Pages tidak support SSR, gunakan static export

1. **Update next.config.ts**:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. **Build & Deploy**:
```bash
npm run build
npx gh-pages -d out
```

## 🌐 Custom Domain Setup

### Vercel
1. Project Settings > Domains
2. Add domain
3. Update DNS:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

### Netlify
1. Site Settings > Domain Management
2. Add custom domain
3. Update DNS:
   - Type: `CNAME`
   - Name: `www`
   - Value: `<your-site>.netlify.app`

## 🔒 SSL Certificate

Semua platform di atas provide SSL certificate gratis:
- Vercel: Otomatis
- Netlify: Otomatis
- AWS Amplify: Otomatis

Untuk manual setup (EC2):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## ⚙️ Environment Variables

Setiap platform punya cara berbeda:

### Vercel
```bash
vercel env add NEXT_PUBLIC_SITE_URL
```

### Netlify
```bash
netlify env:set NEXT_PUBLIC_SITE_URL https://yourdomain.com
```

### Docker
```bash
docker run -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com portfolio-3d
```

## 📊 Performance Optimization

Sebelum deploy:

1. **Optimize Images**
   - Compress images
   - Use WebP format
   - Responsive images

2. **Bundle Analysis**
```bash
npm install @next/bundle-analyzer
```

3. **Enable Caching**
   - Browser caching
   - CDN caching
   - Service worker

4. **Minification**
   - Already handled by Next.js

## 🔍 SEO Setup

1. **robots.txt**
```txt
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

2. **sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-11-17</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📈 Analytics Setup

### Google Analytics

1. Buat file `lib/gtag.ts`:
```typescript
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
```

2. Update `app/layout.tsx`

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### WebGL Errors
- Pastikan browser support WebGL 2.0
- Check device GPU compatibility

### Font Loading Issues
- Verify Google Fonts connectivity
- Use fallback fonts

## ✅ Pre-Deployment Checklist

- [ ] Test build locally
- [ ] Update environment variables
- [ ] Configure custom domain
- [ ] Setup SSL certificate
- [ ] Test on multiple devices
- [ ] Check performance metrics
- [ ] Verify SEO tags
- [ ] Setup analytics
- [ ] Test 3D animations
- [ ] Check responsive design

## 📞 Support

Jika ada masalah saat deployment:
1. Check platform documentation
2. Review error logs
3. Search common issues
4. Contact platform support

---

**Selamat Deploy! 🚀**

Website portfolio 3D Anda siap untuk dunia!
