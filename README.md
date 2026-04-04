# Landscapes By Asten

Static marketing website for Landscapes By Asten, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Deployed to GitHub Pages.

## Setup

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Before Going Live

### 1. Update GitHub Pages config

In `astro.config.mjs`, replace:
- `site`: your GitHub Pages URL, e.g. `https://yourname.github.io`
- `base`: your repo name, e.g. `/landscaping_byasten`

### 2. Set up Formspree

1. Create a free account at [formspree.io](https://formspree.io)
2. Click **New Form**, give it a name, copy the form ID from the endpoint URL
3. In `src/components/Contact.astro`, replace `YOUR_FORM_ID` with your actual form ID:
   ```
   const formspreeEndpoint = 'https://formspree.io/f/abcd1234';
   ```
4. In your Formspree dashboard → **Settings** → **Notifications**, enable **Send auto-reply to submitter**

### 3. Enable GitHub Pages

1. Push your code to the `main` branch — GitHub Actions will build and deploy automatically
2. Go to your repo → **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `gh-pages`, folder: `/ (root)`
5. Click **Save** — your site will be live at `https://yourname.github.io/landscaping_byasten`

### 4. Replace placeholder images

- `public/images/hero.jpg` — replace with a real landscaping photo (recommended: 1920×1080px)
- `public/images/gallery-1.jpg` … `gallery-6.jpg` — replace with project photos (recommended: 800×800px square)
