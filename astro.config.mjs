import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { affiliateLinks } from './src/lib/affiliate-links.mjs';

export default defineConfig({
  site: 'https://selbstgelernt.de',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [affiliateLinks],
  },
});
