// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Build a map of /journal/<slug>/ -> dateModified, read straight from the
// markdown frontmatter. lastmod is emitted only for these entries, where a
// real edit date exists; the rest of the site carries no lastmod so we never
// fake freshness.
const journalDir = fileURLToPath(new URL('./src/content/journal', import.meta.url));
const journalLastmod = {};
try {
  for (const file of readdirSync(journalDir)) {
    if (!file.endsWith('.md')) continue;
    const fm = readFileSync(`${journalDir}/${file}`, 'utf8');
    const m = fm.match(/^dateModified:\s*"?([0-9-]+)"?/m);
    if (m) journalLastmod[`/journal/${file.replace(/\.md$/, '')}/`] = m[1];
  }
} catch {
  // No journal content is non-fatal; sitemap simply omits lastmod.
}

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
      // Keep the XML sitemap to canonical content URLs only. The human-facing
      // /sitemap/ HTML index is a navigational page, not a machine sitemap, so
      // it is excluded here to avoid the /sitemap vs sitemap-index confusion
      // flagged in the audit.
      filter: (page) => page !== 'https://masterful-app.com/sitemap/',
      // Journal entries change more often than the rest of the site; stamp the
      // real edit date and a monthly changefreq.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path.startsWith('/journal/') && path !== '/journal/') {
          item.changefreq = 'monthly';
          item.priority = 0.7;
          if (journalLastmod[path]) item.lastmod = journalLastmod[path];
        }
        return item;
      },
    }),
  ],
});
