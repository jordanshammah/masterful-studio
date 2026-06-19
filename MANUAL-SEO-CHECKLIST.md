# Manual SEO checklist (June 2026 audit)

Actions that cannot be done in this repository. They depend on Cloudflare,
Google Search Console, Ahrefs, Semrush, or Google Ads. Do these after the
`seo/technical-fixes-2026-06` changes deploy.

## Cloudflare

- [ ] Disable the "Block AI Scrapers and Crawlers" setting (AI Audit /
      managed robots.txt) so the new `public/robots.txt` takes effect. The
      repo file now allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot,
      ClaudeBot, Google-Extended and CCBot, but a host-managed `Disallow: /`
      will override it until this is turned off.
- [ ] Confirm "Always Use HTTPS" is on and that the http to https hop plus the
      trailing-slash 301 do not stack into a chain longer than one redirect for
      indexed (https) URLs. The repo now pins a single 301 per naked URL via
      `public/_redirects`; the http to https hop is a Cloudflare zone setting,
      not a repo setting.

## Search Console

- [ ] Delete the 4 stale sitemaps so only `sitemap-index.xml` remains:
      `/sitemap.xml`, `/sitemap`, `/sitemap/`, `/services/sitemap.xml`.
      (These are old submissions; the current build emits only
      `sitemap-index.xml` and `sitemap-0.xml`.)
- [ ] After deploy, run `curl -sIL` on the 10 naked URLs (see PR) to confirm a
      single 301 to the https trailing-slash URL, then click "Validate Fix" on
      the Redirect error issue.
- [ ] Re-test the structured data in the Rich Results Test for `/audit/`, the
      home page, journal posts, and an interior page, then click "Validate Fix"
      on the structured-data issues.
- [ ] Finish `seo/disavow.txt` (see Ahrefs below) and upload it in the
      Disavow Links tool. Do not upload the empty template.

## Ahrefs

- [ ] Export referring domains for masterful-app.com, identify spam domains,
      and complete `seo/disavow.txt` (one `domain:example.com` per line).

## Semrush

- [ ] Repoint the Position Tracking project off Brazil / Portuguese and onto
      the real target market (US, UK, Kenya per the site's `areaServed`).

## Google Ads

- [ ] Pause or fix the campaign showing 3 sessions at 0% engagement.

## Content follow-ups (not code-fixable without real material)

These thin pages were flagged (see PR for word counts). Do not pad with filler.
Expand with genuine material or consolidate where a page duplicates another.

- [ ] Expand the sector spokes with real, sector-specific material:
      `/sectors/saas/`, `/sectors/law-firms/`, `/sectors/nairobi-businesses/`
      (each ~75 words today). Keep `/sectors/saas/` live; it is a target page.
- [ ] Expand the service spokes: `/services/seo/seo-audit/`,
      `/services/seo/technical-seo/`, `/services/web-design/`,
      `/services/seo/local-seo-nairobi/`, and `/about/`.
- [ ] Hub pages (`/sectors/`, `/work/`, `/sitemap/`) are intentionally short
      navigational indexes; expand only if you want them to rank.
- [ ] Publish a second verified case study in `/work/` so the work index is not
      a single-study page.
