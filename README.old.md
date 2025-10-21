# TechVision - Next-Gen SaaS Platform Website

A stunning, modern SaaS platform website built with Next.js, featuring 3D effects, smooth animations, and a comprehensive service showcase.

## Features

- 🎨 Modern, attractive UI with glassmorphism effects
- ✨ Smooth animations using Framer Motion
- 🌊 Floating elements and particle effects
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🚀 Fast performance with Next.js 14
- 💫 Interactive 3D elements
- 🎉 Special Bharat Utsav Sale banner (Oct 2025 - Mar 2026)

## Pages

- **Home**: Hero section with particle effects, services preview, features, tech stack, and CTA
- **Services**: Complete service catalogue with detailed offerings
- **What We Do**: Company approach and expertise showcase
- **About Us**: Company story, values, and team statistics
- **Contact**: Contact form with validation
- **Privacy Policy**: Comprehensive privacy policy

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- React Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── services/            # Services page
│   ├── what-we-do/          # What We Do page
│   ├── about/               # About Us page
│   ├── contact/             # Contact page
│   └── privacy-policy/      # Privacy Policy page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── FloatingElements.tsx # Animated background elements
│   └── home/                # Homepage components
│       ├── SalesBanner.tsx
│       ├── HeroSection.tsx
│       ├── ServicesPreview.tsx
│       ├── FeaturesSection.tsx
│       ├── TechStack.tsx
│       └── CTASection.tsx
└── public/                  # Static assets

```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Content

Update the content in each page component to match your business needs.

### Services

Modify the services array in the respective components to showcase your offerings.

## License

MIT License - feel free to use this for your projects!

## Support

For support, email info@techvision.com


## env

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://visions.services/api
NEXT_PUBLIC_SITE_URL=https://visions.services
POSTGRES_HOST=visions.postgres.database.azure.com
POSTGRES_DATABASE=visions
POSTGRES_USER=Gagan
POSTGRES_PASSWORD=Services@1507
POSTGRES_PORT=5432
POSTGRES_SSL=true
JWT_SECRET=e2c6324c8caebd86af2391cdcbe1851877a48eca1d2361f86b07be5ae6f1ece7
ALLOWED_ORIGINS=https://visions.services,https://www.visions.services
ADMIN_SESSION_DURATION=86400
```