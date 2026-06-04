// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output preserves the current static-HTML SEO and speed advantage.
// trailingSlash: 'always' keeps every URL canonicalised to the slashed form,
// matching the <link rel="canonical"> tags and the _redirects 301s.
export default defineConfig({
  site: 'https://masterful-app.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // Emit /about/index.html etc. so the slashed URLs resolve as static files.
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Journal entries change more often than the rest of the site.
      serialize(item) {
        if (item.url.includes('/journal/')) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});
