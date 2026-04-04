// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://coopawhite.github.io',
  base: '/landscaping_byasten',
  integrations: [tailwind()],
});
