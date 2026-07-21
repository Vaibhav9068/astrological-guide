# Pandit Sanjay Uniyal - Premium Astrology Consultation Website

A premium, modern, fully responsive React + Vite website designed for the classical Vedic astrology practice of **Pandit Sanjay Uniyal**. The application features high-end aesthetics, custom celestial illustrations, dynamic bilingual (English + Hindi) content switching, and smooth scroll animations.

Inspired by **Maa Baglamukhi** and classical Vedic aesthetics, the design uses a luxury color palette (cream, gold, maroon) and glassmorphic card layouts to present a premium and authentic digital experience.

---

## 🌐 Live Preview
- **Deployable Platform**: Vercel
- **Subpage Navigation**: Client-side hash-based routing (`#home`, `#about`, `#services`, `#pricing`, `#testimonials`, `#contact`, `#privacy`, `#terms`)

---

## ✨ Features
1. **Bilingual Translation System**: Instant dynamic toggle between English and Hindi. Preferences are saved in `localStorage` and automatically update HTML lang headers, document titles, and SEO meta descriptions without page reloads.
2. **Dynamic Typography**: Custom font integration mapping headings to *Cinzel* (English) / *Noto Serif Devanagari* (Hindi) and body copy to *Poppins* (English) / *Noto Sans Devanagari* (Hindi) with adjusted line-heights for optimal legibility.
3. **Interactive Cosmic Service Wheel**: An 8-node circular mandala interface mapping core Vedic consultations (Kundli, Vastu, Doshas, Marriage Milan, and Career guidance).
4. **GSAP Entrance & Scroll Animations**: Staggered scroll-triggered fade-ups and card pop-ins backed by `ScrollTrigger` and `@gsap/react`.
5. **Interactive Particle Canvas**: Floating golden spiritual dust particles animated using an HTML5 Canvas backdrop.
6. **Form-Free Consultation CTAs**: Calls-to-action specifically designed for scheduling sessions exclusively via WhatsApp chat templates and direct phone calls.
7. **Interactive FAQ Accordion**: Clean dropdowns answering common query categories.
8. **Interactive Testimonial Carousel**: Smooth client testimonial slideshow.
9. **Legal Standalone Subpages**: Dedicated *Privacy Policy* and *Terms & Conditions* views matching the luxury theme.

---

## 🛠️ Tech Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4 (Vanilla CSS Custom Variables)
- **Animations**: GSAP 3 (GreenSock Animation Platform) + `@gsap/react`
- **Icons**: Lucide React + React Icons

---

## 📁 Folder Structure
```
astrological-guide/
├── public/
│   └── favicon.svg       # Astrological Sun Emblem Favicon
├── images/
│   ├── astroimage.png    # portrait profile photo (dimmed contrast)
│   └── logo.png          # Circular brand mark logo
├── src/
│   ├── context/
│   │   └── LanguageContext.jsx # Bilingual state & t() engine
│   ├── locales/
│   │   ├── en.json       # English translations catalog
│   │   └── hi.json       # Hindi translations catalog
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── GoldDivider.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Counter.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── TermsConditions.jsx
│   ├── App.jsx           # Global routes, GSAP triggers, page layouts
│   ├── index.css         # Custom themes & Devanagari CSS overrides
│   └── main.jsx          # React DOM render entry
├── index.html            # Entry HTML document with SEO meta headers
├── vite.config.js        # Vite + Tailwind v4 build settings
├── vercel.json           # SPA rewrites config for Vercel
├── package.json
└── README.md
```

---

## 🚀 Installation & Local Development

### 1. Clone the repository and install dependencies
```bash
git clone https://github.com/Vaibhav9068/astrological-guide.git
cd astrological-guide
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Check for Lints
```bash
npm run lint
```

### 4. Create Production Build
```bash
npm run build
npm run preview
```

---

## ⚡ Deployment on Vercel

This project is configured and ready for **one-click deployment on Vercel**:

1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **New Project** and import the `astrological-guide` repository.
3. Vercel will automatically detect the **Vite** preset:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Vercel will build the project and serve it with SSL security instantly.

---

## 📸 Screenshots
*(Place screenshots of the desktop view and mobile responsive layout here)*
