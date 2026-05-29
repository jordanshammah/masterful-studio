# SEO Audit Verification — masterful-app.com

Date: 2026-05-29
Branch: `claude/seo-audit-masterful-app-bYGgC`
Verification framework: `seo-mastery` + `stop-slop`.

## Method note

The execution environment's network policy blocks outbound requests to
masterful-app.com (HTTP 403, both `curl` and `WebFetch`), so the live site could
not be re-crawled. This is a no-build static site, so verification ran against
the source files and a local `python3 -m http.server` instead. Cloudflare's
extensionless URL rewriting is not reproduced locally; the local smoke test used
`.html` paths.

---

## 1. Per-page re-extraction (15 indexable pages)

Every indexable page now has exactly one H1, a title ≤60 chars, a meta
description ≤155 chars, a self-referencing canonical, a Twitter card, and (on
interior pages) a BreadcrumbList.

| Page | H1 | Title len | Desc len | Canonical | twitter:title | BreadcrumbList |
|---|---|---|---|---|---|---|
| index.html | 1 | 38 | 65 | yes | yes | n/a (root) |
| about/ | 1 | 17 | 88 | yes | yes | yes |
| audit/ | 1 | 22 | 123 | yes | yes | yes |
| process/ | 1 | 19 | 104 | yes | yes | yes |
| services/ | 1 | 20 | 80 | yes | yes | yes |
| services/seo | 1 | 15 | 95 | yes | yes | yes |
| services/aeo | 1 | 15 | 110 | yes | yes | yes |
| services/geo | 1 | 15 | 106 | yes | yes | yes |
| work/ | 1 | 16 | 142 | yes | yes | yes |
| journal/ | 1 | 18 | 135 | yes | yes | yes |
| journal/google-replaced-the-search-bar | 1 | 49 | 150 | yes | yes | yes |
| journal/how-llms-decide-what-to-cite | 1 | 47 | 135 | yes | yes | yes |
| journal/perplexity-citation | 1 | 51 | 129 | yes | yes | yes |
| journal/the-three-search-surfaces | 1 | 55 | 150 | yes | yes | yes |
| journal/what-geo-actually-is | 1 | 52 | 153 | yes | yes | yes |

The homepage intentionally carries WebSite + ProfessionalService instead of a
BreadcrumbList (it is the site root).

---

## 2. JSON-LD validation

All 26 `application/ld+json` blocks across the site parse as valid JSON
(`json.loads`, 0 failures). Required-property spot checks:

- `index.html`: WebSite + ProfessionalService present. [skill 5.2/5.6]
- All 5 journal articles: Article with `headline`, `datePublished`,
  `dateModified`, `author`, plus a BreadcrumbList. [skill 5.4]
- `services/aeo` (and seo/geo): Service + FAQPage + BreadcrumbList. [skill 5.2]
- `process/`: FAQPage + HowTo + BreadcrumbList. [skill 5.2]
- Structured-data prose was kept in sync with visible text after the em-dash
  rewrites. [skill 5.1]

---

## 3. robots.txt

Accessible, `User-agent: * / Allow: /`, and references the sitemap:
`Sitemap: https://masterful-app.com/sitemap.xml`. [skill 3.3]

---

## 4. sitemap.xml

Parses as valid XML. Lists 15 indexable URLs: home, audit, services (index +
seo + aeo + geo), about, process, work, journal index + 5 articles. The newest
journal entry (`google-replaced-the-search-bar`) was added. `northpath`, all
`/scan/*`, and `/project/*` are correctly excluded. `lastmod` set to
`2026-05-29`, reflecting this pass's real edits to every page. [skill 3.9/3.1]

---

## 5. noindex / removed pages

- `project/index.html` and `project/site.html`: `robots = noindex,nofollow`
  confirmed (empty React shells kept out of the index). [skill 6.4]
- `scan/*`: still `noindex, nofollow` (unchanged, correct). [skill 6.4]
- `work/northpath.html`: removed from the working tree. No `href` anywhere
  points to `/work/northpath`; the only remaining mention is the explanatory
  TODO comment in `work/index.html`. [skill 12.1]

---

## 6. Internal links

Programmatic crawl of every `href` in every page: no broken internal links.
Every indexable page is reachable within 2 clicks of the homepage through the
shared nav and footer (Services, Process, Work, Journal, About, Free audit).
[skill 3.1/4.4]

---

## 7. Local serve smoke test

`python3 -m http.server`, sampled routes:

| Route | HTTP | Title | robots |
|---|---|---|---|
| / | 200 | Masterful \| A Search Visibility Studio | none |
| /audit/ | 200 | Free Audit \| Masterful | none |
| /services/seo.html | 200 | SEO \| Masterful | none |
| /journal/google-replaced-the-search-bar.html | 200 | Google Replaced the Search Bar: Masterful Journal | none |
| /project/ | 200 | Masterful \| Website Designs | noindex,nofollow |

All pages return 200 with meaningful HTML content in the initial response (no
empty shells among indexable pages). [skill 3.6]

---

## 8. stop-slop

No em dashes remain anywhere in the HTML (`grep` returns zero, including former
CSS comments). En dashes survive only in numeric ranges ($250k–1M, Weeks 1–2),
which is correct typography, not an AI tell. Titles and descriptions rewritten
in this pass use active voice and specific numbers (18-page report, 48 hours,
19 May 2026).

---

## 9. Findings resolution

| ID | Finding | Status |
|---|---|---|
| P0-1 | Fabricated northpath case study | Removed (file, sitemap, links); TODO left |
| P0-2 | Empty JS shells indexable (/project) | noindex,nofollow added |
| P1-1 | Audit page had no H1 | H1 added (1 H1) |
| P1-2 | Sitemap missing latest journal entry | Added; northpath removed |
| P1-3 | Stale sitemap lastmod | Refreshed to 2026-05-29 |
| P2-1 | Service H1s missing keyword | SEO/AEO/GEO front-loaded |
| P2-2 | Homepage H1 = brand, not topic | Topic line promoted to H1 |
| P2-3 | Over-length titles | Trimmed to ≤55 |
| P2-4 | Over-length descriptions | Trimmed to ≤153 |
| P2-5 | Breadcrumbs missing on interior pages | Added to all 6 remaining |
| P2-6 | Article schema missing dateModified | Added to all 5 articles |
| P2-7 | Em dashes (titles/OG/JSON-LD/prose) | All removed |
| P3-1 | Twitter cards incomplete | title/description/image added site-wide |
| P3-2 | og:image lacked dimensions/alt | width/height/alt added (2400x1260) |
| P3-3 | llms.txt unnecessary (skill 6.3) | Left in place (informational) |
| P3-4 | Favicon | SVG, compliant, no action |

---

## 10. Files changed this session (10 commits)

```
about/index.html                            |  20 ++-
audit/index.html                            |  26 ++-
index.html                                  |  16 +-
journal/google-replaced-the-search-bar.html |  22 ++-
journal/how-llms-decide-what-to-cite.html   |  18 ++
journal/index.html                          |  16 ++
journal/perplexity-citation.html            |  18 ++
journal/the-three-search-surfaces.html      |  26 ++-
journal/what-geo-actually-is.html           |  24 ++-
process/index.html                          |  22 ++-
project/index.html                          |   3 +-
project/site.html                           |   3 +-
seo-audit-findings.md                       | 163 ++++++++++++++++++
services/aeo.html                           |  16 +-
services/geo.html                           |  20 ++-
services/index.html                         |  22 ++-
services/seo.html                           |  12 +-
sitemap.xml                                 |  40 ++---
work/index.html                             |  45 ++++-
work/northpath.html                         | 254 ---------------------- (removed)
```

Commits:
1. `remove fabricated northpath case study + drop from sitemap [skill 12.1]`
2. `add noindex to /project design-canvas shells [skill 6.4]`
3. `content(work): remove 'early engagements / verified numbers only' copy [skill 12.1]`
4. `put primary keyword in H1s on home, services, audit pages [skill 4.3]`
5. `trim long journal titles/descriptions, add dateModified + BreadcrumbList [skill 4.1/4.2/5.2/5.4]`
6. `replace em-dash title separators with pipes [stop-slop]`
7. `add BreadcrumbList to remaining interior pages [skill 5.2]`
8. `remove em dashes from body and JSON-LD prose [stop-slop]`
9. `complete sitemap, add latest journal entry, refresh lastmod [skill 3.9/3.1]`
10. `complete Twitter cards and og:image metadata [skill 8]`

## Open items for the owner (not code-fixable)

- Write a real, verified case study for `/work/` (TODO left in the file), then
  re-add it to the sitemap and link to it.
- Verify the first-hand claims in `/journal/perplexity-citation` (kept per
  owner instruction).
- Verify `/scan/*` third-party claims before sharing each private report.
- Search Console actions outside the codebase: submit the sitemap, request
  indexing of the new journal entry, and monitor Core Web Vitals. [skill 10.1]
