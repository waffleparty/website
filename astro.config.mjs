import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served by GitHub Pages at https://waffleparty.github.io/website/.
// With a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://waffleparty.github.io',
  base: '/website',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
