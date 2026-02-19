# Bytcra Website

## Tech Stack
- **Framework:** Astro (static output)
- **Styling:** Plain CSS (no Tailwind, no CSS frameworks)
- **JavaScript:** Vanilla JS (no TypeScript)
- **Hosting:** Vercel
- **Analytics:** Google Analytics (G-DKJBFPY8PQ)
- **Contact Form:** EmailJS

## Multi-Site Setup
This repo serves two sites from one codebase:

| Domain | Page | Description |
|---|---|---|
| `bytcra.com` | `src/pages/index.astro` | Main agency site |
| `project-k95.bytcra.com` | `src/pages/k95/index.astro` | K95 product landing page |

Subdomain routing is handled by **Vercel Edge Middleware** (`middleware.js` at project root) using `@vercel/functions`. The middleware rewrites `project-k95.bytcra.com` requests to the `/k95/` path.

## Project Structure
```
src/
  components/    → Shared components (Navbar.astro, Footer.astro)
  layouts/       → Page templates (BaseLayout.astro — includes head, nav, footer, shared JS)
  pages/         → Each file = a URL route
    index.astro  → bytcra.com homepage
    k95/         → K95 product site
  styles/        → CSS files (style.css, responsive.css)
public/          → Static assets served as-is
  images/        → All images (referenced as /images/...)
  js/            → Vanilla JS files (nav.js, scrollAnimation.js, etc.)
middleware.js    → Vercel Edge Middleware for subdomain routing
vercel.json      → Vercel project config
```

## Key Conventions
- Images are in `public/images/` and referenced with absolute paths (`/images/...`)
- CSS `url()` paths use absolute paths (`/images/...`) not relative
- Page-specific scripts (EmailJS, analytics events) go on the page, not in the layout
- Shared scripts (nav, scroll animations) are in the BaseLayout
- External libraries loaded via CDN: Font Awesome, EmailJS, Google Analytics

## Commands
- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Build to dist/
- `npm run preview` — Preview built site
- `vercel --prod` — Deploy to production via CLI

## Deployment
- **Vercel project:** bytcras-projects/bytcra-website
- **Git branch:** tasks/astro-migration
- **DNS:** Cloudflare (bytcra.com) — subdomain A record points to 76.76.21.21