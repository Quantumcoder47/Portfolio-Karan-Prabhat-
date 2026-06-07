<div align="center">

# Karan Prabhat — Portfolio

### AI/ML Engineer · Data Scientist · Full-Stack Developer

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-C778DD?style=flat-square)](LICENSE)

**[portfolio-karan-prabhat.vercel.app](https://portfolio-karan-prabhat.vercel.app)** · [GitHub](https://github.com/Quantumcoder47) · [LinkedIn](https://www.linkedin.com/in/karan-prabhat-kp47/) · [Twitter](https://x.com/karanprabhat47)

</div>

---

## Overview

A professional developer portfolio built with **Next.js 14** and **Tailwind CSS**, representing the work and identity of **Karan Prabhat** — a Final Year B.Tech CSE (AI & ML) student at Sister Nivedita University, Kolkata.

The portfolio is designed to communicate Karan's expertise in machine learning, deep learning, data science, and full-stack development to recruiters, hiring managers, and collaborators. Every section is data-driven, pulling from a centralized database file, and the entire site is production-ready with SEO metadata, OpenGraph tags, responsive design, and smooth animations.

**Key Highlights:**
- End-to-end ML projects with measurable, real-world impact (211K+ records processed)
- Clean dark-themed UI with a custom `#C778DD` purple accent system
- Fully responsive across mobile, tablet, and desktop
- Contact form with email client integration and form validation
- Deployed at [portfolio-karan-prabhat.vercel.app](https://portfolio-karan-prabhat.vercel.app)

---

## Live Demo

**Production:** [https://portfolio-karan-prabhat.vercel.app/](https://portfolio-karan-prabhat.vercel.app/)

**Local:** `http://localhost:3000` (see [Running Locally](#running-locally))

---

## Portfolio Sections

| Section | Route | Description |
|---|---|---|
| **Hero** | `/` | Name, animated typed roles, summary, CTA buttons, social links |
| **Projects** | `/` + `/my-works` | Featured ML/data science projects with metrics and links |
| **Skills** | `/` | Skill categories displayed in bordered cards with a decorative code snippet |
| **Experience** | `/` | Timeline-style cards for roles and training programs |
| **About Me** | `/` + `/about-me` | Personal story, education history, quick facts panel |
| **Achievements** | `/` | Highlighted accomplishments with glow card design |
| **Certifications** | `/` | Certification cards with issuer, year, and emoji icons |
| **Contact** | `/#contact` | Two-column layout with contact form and social links |
| **Fun Facts** | `/about-me` | Personal fun-fact chips about ML and data interests |
| **Navigation** | All pages | Sticky top nav with desktop links and mobile hamburger drawer |
| **Footer** | All pages | Brand, navigation links, social icons, email, copyright |
| **Quote** | `/` | Inspirational quote block with decorative SVG quote marks |

---

## Features

- **Animated Hero** — Typed.js cycling through four role strings with colored highlights and a blinking cursor
- **Framer Motion animations** — Fade-in, slide-up, and scale-in entrance animations on every section and card, triggered on scroll (`whileInView`, `once: true`)
- **Project cards** — Category badge, tech stack tags, metric highlights, and action buttons (Live Demo + GitHub or GitHub Repository full-width)
- **Timeline Experience** — Vertical timeline with a primary-colored left border, dot indicator, and staggered card animations
- **Skills grid** — Six skill categories rendered from data, with a decorative inline code snippet panel on desktop
- **Achievements** — Glow-accented cards with a background radial accent and highlight badge
- **Certifications grid** — 3-column responsive grid with emoji icons and year badges
- **Contact form** — Yup-validated form fields (name, email, subject, message) that open the user's native email client via `mailto:`; toast feedback via `react-hot-toast`
- **Mobile drawer** — Full-screen slide-in navigation menu with staggered link animations and social icons
- **Fixed social sidebar** — GitHub, LinkedIn, Twitter, and email icons on a vertical rail (desktop only)
- **SEO metadata** — Per-page `title`, `description`, `keywords`, `canonical`, `openGraph`, and `twitter` card metadata via Next.js `generateMetadata`
- **Custom scrollbar** — Styled purple scrollbar with hover accent
- **Smooth scroll** — CSS `scroll-behavior: smooth` and programmatic `scrollIntoView` on `?action=contact` query param
- **Custom text selection** — Purple-tinted `::selection` highlight
- **Responsive container** — Fluid container with breakpoint-based max-widths (90% → 85% → 80% → 75%)
- **Decorative elements** — Subtle dot grids and corner border boxes at various sections
- **Resume download** — Direct link to PDF resume opening in a new tab

---

## Tech Stack

### Framework
- [Next.js 14](https://nextjs.org/) — App Router, file-based routing, per-page metadata, server components

### Frontend
- [React 18](https://react.dev/) — Client components, hooks (`useRef`, `useEffect`, `useState`, `useContext`)
- [Typed.js](https://mattboldt.com/demos/typed-js/) — Typewriter animation in the hero section
- [React Icons](https://react-icons.github.io/react-icons/) — GitHub, LinkedIn, Twitter, download, and other icons (Font Awesome 6 set)
- [Lucide React](https://lucide.dev/) — X (close) icon in the mobile drawer

### Styling
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS with a fully custom theme (colors, backgrounds, borders, animations)
- Custom global CSS (`app/globals.css`) — `.skill-tag`, `.metric-badge`, `.card-hover`, `.glow-primary`, `.gradient-text`, `.description`, custom scrollbar, `::selection`
- [Inter](https://fonts.google.com/specimen/Inter) — Google Font loaded via `next/font/google`

### Animation
- [Framer Motion 10](https://www.framer.com/motion/) — Scroll-triggered entrance animations, staggered delays, viewport detection

### Backend / Integrations
- [Firebase 10](https://firebase.google.com/) — Initialized and available for Realtime Database and Analytics (configured in `app/firebase.js`)
- [Yup](https://github.com/jquense/yup) — Contact form validation schema

### Notifications
- [React Hot Toast](https://react-hot-toast.com/) — Toast notifications for contact form feedback

### Development Tools
- [ESLint](https://eslint.org/) — `eslint-config-next` ruleset
- [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer)
- [jsconfig.json](jsconfig.json) — Path alias `@/` mapped to project root

---

## Screenshots

> _Screenshots can be added here once the site is captured._

| Page | Preview |
|---|---|
| Home — Hero | `public/Assets/heroImage.png` |
| Home — Projects | _(screenshot placeholder)_ |
| Home — Skills | _(screenshot placeholder)_ |
| About Me | _(screenshot placeholder)_ |
| My Works | _(screenshot placeholder)_ |

---

## Installation

**Prerequisites:** Node.js 18+ and npm 9+

```bash
# 1. Clone the repository
git clone https://github.com/Quantumcoder47/Portfolio-Karan-Prabhat-.git
cd Portfolio-Karan-Prabhat-

# 2. Install dependencies
npm install
```

---

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start

# Lint the codebase
npm run lint
```

---

## Folder Structure

```
Portfolio-Karan-Prabhat-/
├── app/
│   ├── about-me/
│   │   └── page.js              # /about-me route with metadata
│   ├── my-works/
│   │   └── page.js              # /my-works route with metadata
│   ├── favicon.ico
│   ├── firebase.js              # Firebase initialization
│   ├── globals.css              # Global styles, custom utility classes
│   ├── layout.js                # Root layout, SEO metadata, font, MenuProvider
│   └── page.js                  # Home page (/)
│
├── Components/
│   ├── About/
│   │   ├── index.jsx            # Full About page composition
│   │   └── TopContent.jsx       # About text + education + quick facts
│   ├── Achievements/
│   │   └── index.jsx            # Glow achievement cards
│   ├── Certifications/
│   │   └── index.jsx            # Certification cards grid
│   ├── Common/
│   │   └── index.jsx            # Logo, PrimaryButton, SectionHeading, ErrorMessage, CvButton
│   ├── Contact/
│   │   ├── ContactForm.jsx      # Yup-validated form with mailto integration
│   │   ├── index.jsx            # Contact section layout
│   │   ├── InputControl.jsx     # Reusable input component
│   │   ├── Message.jsx          # Contact info/social links panel
│   │   └── Support.jsx
│   ├── Context/
│   │   └── MenuContext.js       # Global mobile menu open/close context
│   ├── Experience/
│   │   └── index.jsx            # Timeline experience cards
│   ├── Footer/
│   │   └── Footer.jsx           # Footer with brand, nav, socials, copyright
│   ├── FunFact/
│   │   └── index.jsx            # Fun fact chips
│   ├── Headers/
│   │   └── NavigationBar.jsx    # Sticky top navigation bar
│   ├── Helpers/
│   │   ├── DropDownButton.jsx
│   │   ├── ProjectCard.jsx      # Reusable project card component
│   │   └── SmallProjectCard.jsx
│   ├── Home/
│   │   ├── Hero/
│   │   │   ├── HeroImage.jsx    # Hero section image
│   │   │   ├── index.jsx        # Hero section layout + animations
│   │   │   ├── LeftContent.jsx  # Name, typed roles, CTA, socials
│   │   │   ├── LeftSocial.jsx   # Fixed vertical social sidebar (desktop)
│   │   │   └── Quotes.jsx       # Inspirational quote block
│   │   ├── index.jsx            # Home page section composition
│   │   ├── Projects.jsx         # Featured projects (first 3)
│   │   └── Skills.jsx           # Skills grid with decorative code snippet
│   ├── Layouts/
│   │   └── PageLayout.jsx       # Shared layout wrapper (Navbar + Footer + Drawer)
│   ├── Mobile/
│   │   └── Drawer.jsx           # Full-screen mobile navigation drawer
│   └── Project/
│       ├── BigProjects.jsx      # All projects grid (/my-works)
│       ├── index.jsx            # AllProject page composition
│       └── SmallProjects.jsx    # Upcoming projects placeholder
│
├── db/
│   └── index.js                 # ⭐ Central data file — all projects, skills,
│                                #    experience, certifications, achievements,
│                                #    fun facts, navigation, social links
│
├── public/
│   └── Assets/
│       ├── hero.png
│       ├── heroImage.png
│       ├── heroImage.svg
│       ├── about.svg
│       ├── skilldesign.svg
│       ├── funFactDesign.svg
│       ├── Dots.png
│       ├── rgc.jpeg
│       ├── yellona.jpeg
│       └── Karan_Prabhat_Resume.pdf   # Downloadable CV
│
├── .eslintrc.json
├── .gitignore
├── jsconfig.json                # Path alias @/ → project root
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js           # Custom theme: colors, backgrounds, animations
```

---

## Customization Guide

All personal content lives in a single file. For most updates, you only need to edit **`db/index.js`**.

### Personal Info, Bio & Education
**File:** `Components/About/TopContent.jsx`
Update the paragraph text, education cards (university name, degree, dates), and quick facts grid.

### Projects
**File:** `db/index.js` → `projects` array

Each project supports:
```js
{
  id: "PRJ1",
  name: "Project Title",
  des: "Short description...",
  tech: ["Python", "TensorFlow"],   // rendered as skill tags
  liveURL: "https://...",           // shows Live Demo button; leave "" for GitHub-only
  github: "https://github.com/...", // shows GitHub Repository button
  metrics: [
    { label: "Accuracy", value: "99.8%" },
  ],
  category: "ML / Security",        // badge shown on the card
}
```

### Skills
**File:** `db/index.js` → `skills` array

```js
{ name: "Category Name", tech: ["Skill1", "Skill2"] }
```

### Experience
**File:** `db/index.js` → `experience` array

```js
{
  role: "Job Title",
  type: "Internship / Training",
  company: "Company Name",
  location: "City (Remote)",
  duration: "Month Year – Month Year",
  points: ["Bullet point 1", "Bullet point 2"],
}
```

### Certifications
**File:** `db/index.js` → `certifications` array

```js
{ name: "Cert Name", issuer: "Issuer", year: "2024", icon: "🤖" }
```

### Achievements
**File:** `db/index.js` → `achievements` array

### Fun Facts
**File:** `db/index.js` → `funFacts` array (plain strings)

### Social Links
**File:** `db/index.js` → `socialLink` array

```js
{ icon: <FaGithub />, url: "https://github.com/...", name: "GitHub" }
```

Social links appear in: the hero section, the fixed left sidebar, the footer, the mobile drawer, and the contact section.

### Resume / CV
**File:** Replace `public/Assets/Karan_Prabhat_Resume.pdf` with your updated PDF. The filename is referenced in `db/index.js` (navigation) and `Components/Home/Hero/LeftContent.jsx`.

### Profile Image
**File:** `public/Assets/heroImage.png` — replace with your own image (keep the same filename or update the reference in `Components/Home/Hero/HeroImage.jsx`).

### Inspirational Quote
**File:** `Components/Home/Hero/Quotes.jsx`
Update the quote text and author name directly in the JSX.

### Color Theme
**File:** `tailwind.config.js`
The primary accent color is `#C778DD`. To change it, update:
- `primary` in `theme.colors`
- `primary` in `theme.backgroundColor`
- `primary` in `theme.borderColor`
- Also update the hardcoded rgba values in `app/globals.css` (`.skill-tag`, `.metric-badge`, `.glow-primary`, `::selection`, scrollbar)

### Navigation Links
**File:** `db/index.js` → `navigationTab` array

### Site Metadata & SEO
**File:** `app/layout.js` — global metadata (title, description, keywords, OpenGraph, Twitter card, canonical URL)
**File:** `app/page.js`, `app/my-works/page.js`, `app/about-me/page.js` — per-page metadata overrides

---

## Performance & Optimization

- **`viewport={{ once: true }}`** on all Framer Motion animations — triggers only once, no re-animation on scroll-up
- **`next/font/google`** — Inter font loaded with zero layout shift via CSS variable
- **`next/link`** — Client-side prefetching on all internal navigation
- **`next/image`** — Available for image optimization (used in hero image component)
- **Server Components by default** — Only components requiring interactivity are marked `"use client"`
- **Centralized data** (`db/index.js`) — No redundant data definitions; single source of truth
- **Lazy section rendering** — Sections animate into view only when they enter the viewport
- **CSS `scroll-behavior: smooth`** — Native smooth scrolling without JavaScript overhead
- **Tailwind CSS purging** — Unused utility classes are removed at build time via `content` glob patterns

---

## Responsive Design

| Breakpoint | Behavior |
|---|---|
| **Mobile** (`< 640px`) | Single-column layout, hamburger menu, full-width buttons and cards |
| **Tablet** (`sm: 640px+`) | Two-column grids for hero, projects, certifications; desktop nav appears |
| **Desktop** (`lg: 1024px+`) | Three-column project grids, fixed social sidebar, decorative elements revealed |
| **Large Desktop** (`xl/2xl`) | Container max-width progressively narrows to 75% for readability |

The mobile navigation uses a full-screen drawer (`Components/Mobile/Drawer.jsx`) with staggered link animations, controlled by a global `MenuContext`.

---

## SEO & Accessibility

- **Per-page metadata** — Unique `<title>` and `<description>` on every route via Next.js App Router metadata API
- **OpenGraph tags** — `og:title`, `og:description`, `og:url`, `og:image` on all pages
- **Twitter Card** — `summary_large_image` card configured with creator handle
- **Canonical URL** — `<link rel="canonical">` set in the root layout
- **`robots`** — `index: true, follow: true` explicitly configured
- **Theme color** — `<meta name="theme-color" content="#C778DD">` for mobile browser chrome
- **`lang="en"`** — Set on the `<html>` element for screen readers
- **`aria-label`** — Applied to all icon-only buttons and links (GitHub, LinkedIn, social icons, nav logo, hamburger, close button)
- **`role="navigation"`** and `aria-label="Main navigation"` — On the `<nav>` element
- **`role="img"` + `aria-label`** — On emoji icons in certification and achievement cards
- **`aria-hidden="true"`** — On decorative SVG elements (quote marks)
- **Semantic HTML** — `<nav>`, `<footer>`, `<section>`, `<ul>`, `<li>`, `<h1>`–`<h4>` used appropriately

---

## Deployment

The site is deployed at **[portfolio-karan-prabhat.vercel.app](https://portfolio-karan-prabhat.vercel.app)** with the `metadataBase` set to `https://portfolio-karan-prabhat.vercel.app` in `app/layout.js`.

**Recommended: [Vercel](https://vercel.com/)** (zero-config for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Alternative platforms:** Netlify, Railway, or any Node.js-capable host.

For custom domains, update `metadataBase` and the `canonical` link in `app/layout.js` to match your domain.

---

## Author

**Karan Prabhat**
Final Year B.Tech CSE (AI & ML) · Sister Nivedita University, Kolkata, India

> Aspiring AI/ML Engineer building end-to-end data science pipelines and intelligent systems with measurable impact. Targeting high-impact engineering roles at top-tier tech companies.

| | |
|---|---|
| 🌐 Portfolio | [portfolio-karan-prabhat.vercel.app](https://portfolio-karan-prabhat.vercel.app) |
| 💻 GitHub | [@Quantumcoder47](https://github.com/Quantumcoder47) |
| 🔗 LinkedIn | [karan-prabhat-kp47](https://www.linkedin.com/in/karan-prabhat-kp47/) |
| 🐦 Twitter | [@karanprabhat47](https://x.com/karanprabhat47) |
| 📧 Email | [prabhatkaran47@gmail.com](mailto:prabhatkaran47@gmail.com) |
| 📍 Location | Kolkata, India |

---

## License

This project is licensed under the **MIT License**.

You are free to use this project as a reference or template for your own portfolio. If you do, a credit or star on the repository is appreciated but not required.

---

<div align="center">

Built with ❤️ by **Karan Prabhat** · © 2026

</div>
