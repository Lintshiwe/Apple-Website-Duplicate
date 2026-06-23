<div align="center">

#   Apple South Africa Website Recreation

### *A modern recreation of [apple.com/za](https://www.apple.com/za/) built with Next.js*

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

**🔗 [Live Site](https://reliable-biscuit-3fbc1e.netlify.app)**

---

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width="100" alt="Apple Logo" />

</div>

<br>

##  Disclaimer

> **This is an unofficial fan project and is NOT affiliated with, endorsed by, or connected to Apple Inc. in any way.**
>
> This repository was created **solely for educational and portfolio purposes**. It is a front-end recreation of the Apple South Africa website (`apple.com/za`). All product names, logos, trademarks, and registered trademarks are the property of their respective owners — including **Apple Inc.**
>
> - No copyright infringement is intended.
> - No Apple assets are redistributed for commercial use.
> - This project will **never** be used for profit, phishing, or any malicious purpose.
> - If Apple Inc. requests removal, this repository will be taken down immediately.
>
> **All Apple product images, logos, and brand materials belong to Apple Inc.**

<br>

---

##  About This Project

A full recreation of the Apple South Africa website, featuring:

| Page | Description |
|------|-------------|
|  **Home** | Hero banners with parallax scrolling, product promo cards |
|  **Mac** | Full Mac lineup with filter tabs, feature carousel, ecosystem section |
|  **iPad** | iPad lineup with features and ecosystem integration |
|  **iPhone** | iPhone models with innovation highlights |
|  **Watch** | Apple Watch lineup with health & fitness features |
|  **Support** | Apple Support page with search, quick links, service programmes |
|  **Where to Buy** | Reseller finder with product availability across categories |

### ✨ Key Features

- **Apple-accurate navigation** — Mega-menu dropdowns, sticky nav, mobile hamburger menu
- **Parallax hero images** — Smooth scroll-driven image movement on the homepage
- **Responsive design** — Fully responsive across mobile, tablet, and desktop
- **Product grids** — Color swatches, hover effects, and smooth transitions
- **Feature carousels** — Snap-scroll horizontal card carousels
- **Static export** — Deployed as fully static HTML for blazing-fast load times

<br>

---

##  Getting Started

### Prerequisites

- **Node.js** 20 or later
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Lintshiwe/apple-za.git

# Navigate into the project
cd apple-za

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

<br>

---

##  Building for Production

```bash
npm run build
```

The static export will be generated in the `out/` directory.

<br>

---

##  Deployment

This project is deployed on **Netlify** with automatic static file hosting.

**Live URL:** [https://reliable-biscuit-3fbc1e.netlify.app](https://reliable-biscuit-3fbc1e.netlify.app)

To deploy your own instance:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=out
```

<br>

---

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with static site generation |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | SVG icon library |
| **Netlify** | Hosting & deployment |

<br>

---

##  Project Structure

```
apple-za/
├── public/
│   └── images/          # All product & feature images
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── mac/page.tsx       # Mac lineup
│   │   ├── ipad/page.tsx      # iPad lineup
│   │   ├── iphone/page.tsx    # iPhone lineup
│   │   ├── watch/page.tsx     # Apple Watch lineup
│   │   ├── support/page.tsx   # Apple Support
│   │   └── where-to-buy/page.tsx  # Reseller finder
│   └── components/
│       ├── Navbar.tsx          # Global navigation
│       ├── Footer.tsx          # Global footer
│       ├── HeroBanner.tsx      # Parallax hero component
│       └── ScrollReveal.tsx    # Scroll animation wrapper
├── netlify.toml         # Netlify configuration
├── tailwind.config.ts   # Tailwind configuration
└── next.config.ts       # Next.js configuration
```

<br>

---

##  License

This project is for **educational purposes only**. It is not licensed for commercial use. All Apple intellectual property belongs to Apple Inc.

<br>

---

<div align="center">

**Built with  by [Lintshiwe](https://github.com/Lintshiwe)**

*This is a fan project. Apple, the Apple logo, iPhone, iPad, Mac, Apple Watch, and other Apple product names are trademarks of Apple Inc.*

</div>
