import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served by GitHub Pages at the custom domain https://waffleparty.ai/ (set in the repo's Pages settings).
export default defineConfig({
  site: 'https://waffleparty.ai',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
