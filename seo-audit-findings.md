# SEO Audit Findings — masterful-app.com

Date: 2026-05-29
Auditor framework: `seo-mastery` skill (Google Search Central source of truth) +
`stop-slop` skill (prose quality). Every finding cites the skill section it
violates.

## Audit conditions

- **Site type:** hand-authored static HTML on Cloudflare Pages (extensionless
  URLs, `_redirects`, no build step). The served HTML equals the source files,
  so the source `.html` files were audited directly. This is equivalent to a
  raw-HTML crawl for a no-build static site (no SPA/SSR rendering gap exists for
  production pages).
- **Live crawl blocked:** the execution environment's network policy returns
  HTTP 403 ("Host not in allowlist") for masterful-app.com via both `curl` and
  `WebFetch`. The live site could not be fetched. Findings are from source.
- **Pages audited (31):** home; about; audit; process; services (index, seo,
  aeo, geo); work (index, northpath); journal (index + 5 articles); 12 `/scan/`
  private audit pages; 2 `/project/` design-canvas pages.

---

## P0 — Integrity & indexing

### P0-1 — Fabricated case study contradicts the site's own copy
- **Problem:** `/work/northpath.html` is a full case study naming a client
  "Northpath Labs" with specific results: +418% AI citation lift, 38 prompts
  ranked #1, $840K new ARR, 11-month engagement, "Case Study No. 14". It also
  names competitors, subreddits, podcasts, and newsletters. This directly
  contradicts `/work/index.html`, which states: "Masterful is in early
  engagements. The first published case study is coming… Case studies follow
  when they're earned. Verified numbers only." A published, numbered case study
  with invented metrics is exactly the fabricated-content pattern the audit
  guards against.
- **Skill section:** 12.1 (non-commodity, genuine content), 2.4 (Why = "to help
  people"; trust).
- **Decision (user):** Remove northpath only. The thematically overlapping
  `/journal/perplexity-citation.html` is kept untouched per user instruction.
- **Fix:** Delete `work/northpath.html`; remove it from `sitemap.xml`; remove
  the inbound link(s) to `/work/northpath`; leave a `TODO` in `work/index.html`
  for an authentic, verified replacement.

### P0-2 — Empty JavaScript shells are publicly indexable
- **Problem:** `/project/index.html` and `/project/site.html` are an internal
  design-canvas tool: raw HTML is `<div id="root"></div>` plus React +
  Babel-standalone loaded from unpkg with `.jsx` files. The raw response has no
  meaningful content, no meta description, no canonical, no H1, and **no
  noindex**. Google's renderer is not guaranteed to execute this, so if
  discovered the pages index as empty shells. They are orphaned and absent from
  the sitemap, but remain publicly crawlable at their URLs.
- **Skill section:** 1.2 (JS-heavy designs prevent indexing), 3.6 (pre-render
  better; meaningful content in initial response), 6.4 (use noindex to control
  inclusion).
- **Fix:** Add `<meta name="robots" content="noindex,nofollow">` to both pages.

---

## P1 — Significant technical / on-page

### P1-1 — Audit page has no H1
- **Problem:** `/audit/index.html` contains zero `<h1>` elements.
- **Skill section:** 4.3 (one H1 per page containing the primary topic).
- **Fix:** Add an H1 carrying the page topic ("Free AI visibility audit").

### P1-2 — Sitemap is incomplete
- **Problem:** The newest journal entry
  `/journal/google-replaced-the-search-bar` is live and linked from the homepage
  but is missing from `sitemap.xml`. Conversely `/work/northpath` is listed but
  is being removed (P0-1).
- **Skill section:** 3.9 (sitemap lists pages you want indexed), 3.1 (every
  important page discoverable).
- **Fix:** Add the google-replaced entry; remove northpath.

### P1-3 — Stale `lastmod` dates
- **Problem:** Most sitemap entries read `2026-05-19` despite later content
  edits (recent commits changed copy on six pages and service pages).
- **Skill section:** 3.1 / 12.4 (use `lastmod` only when content genuinely
  changes; do not fake freshness).
- **Fix:** Set `lastmod` to each page's real last-change date; journal entries
  use their `datePublished`.

---

## P2 — Quality / refinement

### P2-1 — Service-page H1s omit the primary keyword
- **Problem:** `services/seo` H1 = "The boring engine."; `aeo` = "The new
  playbook."; `geo` = "The long game."; `services/index` = "Three letters. One
  studio." None contains SEO, AEO, or GEO.
- **Skill section:** 4.3, 17 (H1 contains primary keyword).
- **Fix:** Fold the keyword into each H1 while preserving the design.

### P2-2 — Homepage H1 carries the brand, not the topic
- **Problem:** H1 = "The Masterful" (newspaper masthead); the topic line ("AI
  ate Google.") is an H2.
- **Skill section:** 4.1 (descriptive, not vague), 4.3.
- **Fix:** Give the H1 the topic without breaking the masthead design.

### P2-3 — Over-length title tags (>60 chars)
- **Problem:** `the-three-search-surfaces` title = 81 chars;
  `what-geo-actually-is` = 95 chars. Both truncate in SERPs.
- **Skill section:** 4.1 (aim 50-60 chars, keyword near front).
- **Fix:** Trim both.

### P2-4 — Over-length meta descriptions (>155 chars)
- **Problem:** `google-replaced` = 186 chars; `the-three-search-surfaces` = 181.
- **Skill section:** 4.2 (120-155 practical target).
- **Fix:** Trim to ≤155 while keeping specifics.

### P2-5 — BreadcrumbList missing on interior pages
- **Problem:** `BreadcrumbList` exists only on services/seo, aeo, geo. Missing
  on the 5 journal articles, journal index, work index, about, process, services
  index, audit.
- **Skill section:** 5.2 (BreadcrumbList for every site's interior pages).
- **Fix:** Add a per-page `BreadcrumbList` (Home → Section → Page), absolute
  extensionless URLs matching canonicals.

### P2-6 — Journal Article schema missing `dateModified`
- **Problem:** All 5 journal articles have `headline`, `datePublished`,
  `author`, but no `dateModified`.
- **Skill section:** 5.4 (provide datePublished and dateModified).
- **Fix:** Add `dateModified` to each article's Article JSON-LD.

### P2-7 — Em dashes in titles / OG / JSON-LD (stop-slop)
- **Problem:** Section-page titles and og:titles use " — " ("About — Masterful",
  "AEO — Masterful", etc.); the homepage org JSON-LD `description` uses "—".
  stop-slop forbids em dashes.
- **Skill section:** stop-slop core rule 6 / quick checks; seo-mastery 4.1
  permits hyphen/colon/pipe separators.
- **Fix:** Standardize title separators to " | "; rephrase the JSON-LD
  description without an em dash. Any description rewritten elsewhere also passes
  the stop-slop quick checks.

---

## P3 — Polish / informational

- **P3-1 Twitter cards:** only `twitter:card` is set. Adding `twitter:title`,
  `twitter:description`, `twitter:image` improves X previews (OG fallback works
  today). [skill 8]
- **P3-2 og:image metadata:** no width/height/alt. Adding them improves preview
  rendering. [skill 8.3]
- **P3-3 `llms.txt` present:** skill 6.3 states llms.txt is unnecessary for AI
  search ("NO llms.txt files… needed"). It is harmless and deliberate. **Left in
  place**; informational only.
- **P3-4 Favicon:** SVG, scalable, meets skill 5.5. No action.
- **No `<img>` elements** exist on the site (logos are inline SVG; one
  decorative `<video aria-hidden="true">`). skill 4.5 image-alt checks pass with
  nothing to fix.

---

## Passing checks (no action)

- HTTPS-only canonicals/OG/sitemap; consistent extensionless URL convention. [3.4, 3.2]
- robots.txt accessible, `Allow: /`, references sitemap. [3.3]
- Self-referencing canonical present on every indexable page. [3.4]
- WebSite + ProfessionalService JSON-LD on home; FAQPage + HowTo on process. [5.2]
- `/scan/*` (12) correctly `noindex,nofollow` and orphaned — private prospect
  audits. Left as-is per user. [6.4]
- Trailing-slash 301 normalization in `_redirects` for /journal, /work, /audit. [3.1]
- Mobile-responsive CSS, single shared stylesheet. [3.5]
