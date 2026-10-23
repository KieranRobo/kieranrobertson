// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kieranrobertson.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Two themes so code blocks follow light/dark mode (see global.css)
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
