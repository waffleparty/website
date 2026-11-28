import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served by GitHub Pages at the custom domain https://waffleparty.ai/ (set in the repo's Pages settings).
export default defineConfig({
  site: 'https://waffleparty.ai',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Inline the CSS in each page. GitHub Pages lets browsers cache HTML for 10 minutes, and each
  // deploy removes the previous build's hashed CSS file, so a cached page would load unstyled.
  build: { format: 'directory', inlineStylesheets: 'always' },
});
