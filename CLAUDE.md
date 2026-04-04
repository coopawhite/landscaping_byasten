# Landscapes By Asten — Project Context

## What This Is

Static single-page marketing website for **Landscapes By Asten**, a landscaping business operating in the Shire & Illawarra regions of NSW, Australia. Built with Astro and Tailwind CSS, deployed to GitHub Pages.

Live site: https://coopawhite.github.io/landscaping_byasten

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro 4 (static output, no SSR) |
| Styling | Tailwind CSS 3 via `@astrojs/tailwind` |
| Contact form | Formspree (endpoint: `https://formspree.io/f/maqlpvlo`) |
| Fonts | Google Fonts — Inter (body), Playfair Display (headings) |
| Hosting | GitHub Pages, deployed via GitHub Actions on push to `main` |
| Node | v20 (Astro 4 constraint — do not upgrade to Astro 5 without upgrading Node to v22+) |

## Project Structure

```
src/
  layouts/
    Base.astro        # HTML shell, Google Fonts, sticky nav, mobile hamburger, footer
  pages/
    index.astro       # Single page — imports and orders all section components
  components/
    Hero.astro        # Split diagonal hero: dark green left panel, photo right
    Services.astro    # 4-tile strip: Lawn Care, Garden Design, Paving, Maintenance
    Gallery.astro     # 6-image responsive grid
    Contact.astro     # Formspree contact form (Name, Email, Phone, Message)
  styles/
    global.css        # Tailwind directives (@tailwind base/components/utilities)
public/
  images/
    hero.jpg          # Hero background photo (replace with real photo, 1920×1080px)
    gallery-1.jpg     # Gallery photos (replace with real photos, 800×800px square)
    gallery-2.jpg
    gallery-3.jpg
    gallery-4.jpg
    gallery-5.jpg
    gallery-6.jpg
.github/
  workflows/
    deploy.yml        # Build + deploy to gh-pages branch on push to main
```

## Colour Palette

| Role | Tailwind class | Hex |
|---|---|---|
| Hero dark panel | custom (`bg-[#1a2e1a]`) | `#1a2e1a` |
| Dark backgrounds | `stone-900` / `stone-950` | `#1c1917` / `#0c0a09` |
| Light section backgrounds | `stone-100` | `#f5f5f4` |
| Primary accent (buttons, borders) | `green-600` | `#16a34a` |
| Highlight labels | `green-400` | `#4ade80` |

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
```

Open http://localhost:4321/landscaping_byasten in your browser.

The `/landscaping_byasten` path prefix comes from the `base` setting in `astro.config.mjs` and mirrors the GitHub Pages URL structure. Do not change this.

```bash
# Build for production
npm run build

# Preview the production build locally (mirrors GitHub Pages exactly)
npm run preview
```

## Making Changes

### Updating content

**Business name / tagline:** Edit `src/layouts/Base.astro` (nav logo) and `src/components/Hero.astro`.

**Service tiles:** Edit the `services` array at the top of `src/components/Services.astro`. Each entry has `icon` (emoji), `name`, and `description`.

**Gallery images:** Replace files in `public/images/gallery-1.jpg` through `gallery-6.jpg`. Keep them square (800×800px recommended). Alt text is in the `images` array in `src/components/Gallery.astro`.

**Hero photo:** Replace `public/images/hero.jpg` (1920×1080px recommended).

**Contact form:** The Formspree endpoint is `https://formspree.io/f/maqlpvlo`. To change it, update `formspreeEndpoint` in `src/components/Contact.astro`. Enable auto-reply to submitters in the Formspree dashboard under Settings → Notifications.

**Footer copyright year:** `src/layouts/Base.astro`, bottom of file.

### Adding a new section

1. Create `src/components/MySection.astro`
2. Give it a unique `id` attribute on the outer `<section>` (e.g., `id="testimonials"`)
3. Import and add `<MySection />` to `src/pages/index.astro` in the correct position
4. Add a nav link in `src/layouts/Base.astro` if needed (both desktop and mobile drawers)

### Styling conventions

- Use Tailwind utility classes only — no custom CSS unless strictly necessary
- Dark sections use `bg-stone-900` or `bg-stone-950`; light sections use `bg-stone-100`
- Green accents: `green-600` for interactive elements, `green-400` for labels/highlights
- Headings use `font-serif` (Playfair Display); body copy uses `font-sans` (Inter)
- Follow the mobile-first responsive pattern: base styles for mobile, `sm:` / `md:` / `lg:` for larger screens

### No JavaScript

This site uses no JavaScript frameworks. All interactivity (mobile nav toggle) is pure CSS using the Tailwind `peer` / `peer-checked:` pattern. Do not add JS frameworks or JS-dependent libraries.

## Deploying

Push to `main` — GitHub Actions builds and deploys automatically. The workflow is at `.github/workflows/deploy.yml`. No manual steps required.

To trigger a deploy without a code change: go to the repo → Actions → "Deploy to GitHub Pages" → Run workflow.
