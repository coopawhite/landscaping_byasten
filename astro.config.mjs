// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: Replace these with your actual GitHub username and repo name.
// site: 'https://YOUR_USERNAME.github.io'
// base: '/YOUR_REPO_NAME'
// If this is a user/org site (repo named username.github.io), set base: '/'
export default defineConfig({
  output: 'static',
  site: 'https://YOUR_USERNAME.github.io',
  base: '/landscaping_byasten',
  integrations: [tailwind()],
});
