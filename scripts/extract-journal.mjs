// One-shot migration helper: extract each legacy journal post's <main> HTML
// verbatim and emit a content-collection entry. Internal links are normalised
// to the trailing-slash canonical form (required by the migration brief);
// nothing else in the prose is touched.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SRC = '/tmp/journal';
const OUT = new URL('../src/content/journal/', import.meta.url);
mkdirSync(OUT, { recursive: true });

const META = {
  'google-replaced-the-search-bar': {
    title: 'Google Replaced the Search Bar: Masterful Journal',
    description: 'On 19 May 2026, Google swapped its search bar for a Gemini interface that holds context, runs agents, and cites brands by name. What it means for you.',
    headline: 'Google Replaced the Search Bar. Your Brand Either Gets Cited or Gets Skipped.',
    schemaDescription: 'On 19 May 2026, Google replaced the traditional search bar with a Gemini-powered interface that holds context, runs agents, and cites brands by name. What this means for visibility.',
    datePublished: '2026-05-25', dateModified: '2026-05-25',
    articleSection: 'AEO',
    about: ['Answer Engine Optimization', 'Google AI Mode', 'AI Citation', 'Search Visibility', 'Gemini'],
    breadcrumbName: 'Google Replaced the Search Bar',
  },
  'perplexity-citation': {
    title: 'How we got Perplexity to cite us: Masterful Journal',
    description: 'A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. The prompt-map spreadsheet, the schema we shipped.',
    headline: "How we got Perplexity to cite us in a category we don't rank for on Google.",
    schemaDescription: 'A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. Includes the prompt-map spreadsheet and the schema we shipped.',
    datePublished: '2026-05-14', dateModified: '2026-05-14',
    articleSection: 'AEO',
    about: ['Answer Engine Optimization', 'Perplexity', 'AI Citation'],
    breadcrumbName: 'How We Got Perplexity to Cite Us',
  },
  'how-llms-decide-what-to-cite': {
    title: 'How LLMs decide what to cite: Masterful Journal',
    description: "The retrieval mechanics behind ChatGPT, Perplexity, and Claude. Why some brands get cited and most don't. What to build to change that.",
    headline: 'How LLMs decide what to cite, and what your brand can do about it.',
    schemaDescription: "The retrieval mechanics behind ChatGPT, Perplexity, and Claude. Why some brands get cited and most don't.",
    datePublished: '2026-05-08', dateModified: '2026-05-08',
    articleSection: 'AEO',
    about: ['Answer Engine Optimization', 'LLM Retrieval', 'AI Citation'],
    breadcrumbName: 'How LLMs Decide What to Cite',
  },
  'what-geo-actually-is': {
    title: 'What GEO Actually Is: Generative Engine Optimization',
    description: "GEO is the practice of becoming a recognized entity that AI models draw on when answering questions in your category. Here's what that actually involves.",
    headline: 'GEO in plain language: what generative engine optimization actually involves.',
    schemaDescription: "Entity recognition, Wikipedia, Reddit, and training data: what GEO is, why it's slower than SEO, and why that's the point.",
    datePublished: '2026-04-28', dateModified: '2026-04-28',
    articleSection: 'GEO',
    about: ['Generative Engine Optimization', 'Wikipedia', 'Entity Recognition'],
    breadcrumbName: 'What GEO Actually Is',
  },
  'the-three-search-surfaces': {
    title: "The Three Search Surfaces: Why SEO Isn't Enough in 2026",
    description: 'Three search surfaces now exist: Google, AI answer engines, and the training-data layer. Most brands optimize for one. Here is how to cover all three.',
    headline: 'The three search surfaces: why SEO alone is not enough in 2026.',
    schemaDescription: 'Google, AI answer engines, and the training data layer. Why the search surface split, and what an integrated visibility strategy looks like.',
    datePublished: '2026-04-14', dateModified: '2026-04-14',
    articleSection: 'SEO',
    about: ['SEO', 'AEO', 'GEO', 'Search Visibility'],
    breadcrumbName: 'The Three Search Surfaces',
  },
};

// Add trailing slashes to internal links so no internal link triggers a redirect hop.
function normaliseLinks(html) {
  return html.replace(/href="(\/[^"#?]*)"/g, (m, p) => {
    if (p === '/') return m;
    const last = p.split('/').pop();
    if (last.includes('.')) return m;        // file (e.g. .css)
    if (p.endsWith('/')) return m;            // already slashed
    return `href="${p}/"`;
  });
}

for (const [slug, meta] of Object.entries(META)) {
  const raw = readFileSync(`${SRC}/${slug}.html`, 'utf8');
  const m = raw.match(/<main>([\s\S]*?)<\/main>/);
  if (!m) throw new Error('No <main> in ' + slug);
  const body = normaliseLinks(m[1]).trim();
  const fm = [
    '---',
    `title: ${JSON.stringify(meta.title)}`,
    `description: ${JSON.stringify(meta.description)}`,
    `headline: ${JSON.stringify(meta.headline)}`,
    `schemaDescription: ${JSON.stringify(meta.schemaDescription)}`,
    `datePublished: ${JSON.stringify(meta.datePublished)}`,
    `dateModified: ${JSON.stringify(meta.dateModified)}`,
    `articleSection: ${JSON.stringify(meta.articleSection)}`,
    `about: ${JSON.stringify(meta.about)}`,
    `breadcrumbName: ${JSON.stringify(meta.breadcrumbName)}`,
    '---',
    '',
  ].join('\n');
  writeFileSync(new URL(`${slug}.md`, OUT), fm + body + '\n');
  console.log('wrote', slug + '.md', `(${body.length} bytes body)`);
}
