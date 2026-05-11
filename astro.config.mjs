import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages deploy target. When you move to the real domain,
  // change `site` to https://www.lillicoart.com and remove `base`.
  site: 'https://chrisl2507.github.io',
  base: '/LillicoART-Testing',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
