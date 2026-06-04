---
title: "How we got Perplexity to cite us: Masterful Journal"
description: "A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. The prompt-map spreadsheet, the schema we shipped."
headline: "How we got Perplexity to cite us in a category we don't rank for on Google."
schemaDescription: "A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. Includes the prompt-map spreadsheet and the schema we shipped."
datePublished: "2026-05-14"
dateModified: "2026-05-14"
articleSection: "AEO"
about: ["Answer Engine Optimization","Perplexity","AI Citation"]
breadcrumbName: "How We Got Perplexity to Cite Us"
---
<header style="padding:64px 0 40px;border-bottom:1px solid var(--rule)" class="wrap">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
    <span class="tag tag-filled">● AEO</span>
    <span class="t-mono" style="font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute)">Entry No. 41</span>
    <span class="t-mono" style="font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute)">14 May 2026</span>
  </div>
  <h1 style="font-family:var(--serif);font-size:clamp(36px,5vw,68px);line-height:1.0;letter-spacing:-0.02em;margin-bottom:20px;max-width:800px">How we got Perplexity<br>to cite us in a category<br>we <em style="font-style:italic">don't rank for</em><br>on Google.</h1>
  <p style="font-size:16px;line-height:1.65;color:var(--mute);max-width:640px;margin-bottom:28px">A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. The prompt-map spreadsheet, the schema we shipped, and the boring habits that compounded.</p>
  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
    <div style="display:flex;gap:24px;flex-wrap:wrap">
      <span class="t-mono" style="font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute)">By Masterful</span>
      <span class="t-mono" style="font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute)">8 minute read</span>
    </div>
    <div style="display:flex;gap:16px">
      <a href="#" class="t-mono link-ul" style="font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:var(--orange)">↗ Share</a>
      <a href="#" class="t-mono link-ul" style="font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute)">● Save</a>
    </div>
  </div>
</header>

<div class="wrap">
  <div class="article-layout">
    <article>
      <div class="article-body">
        <h2 id="setup">§ I &nbsp; The setup</h2>
        <blockquote>
          We don't need to beat them on Google. We need to write a better lifted page. Same shape. Better answer.
          <cite>Internal Slack, day 3</cite>
        </blockquote>
        <p>The brief was simple. A mid-stage B2B SaaS client (we're not naming them) had a competitor who kept appearing in Perplexity answers for their core category. Our client didn't appear at all. They weren't even ranking well on Google for the category term. They brought us in mid-engagement to fix the AI side specifically.</p>
        <p>The category was niche enough that there were fewer than twenty pages on the internet that could even attempt to answer the prompt. That's the first thing you check. If there are a thousand good pages competing, you have a different problem. If there are twenty, you have an opportunity.</p>

        <h2 id="prompt-map">§ II &nbsp; The prompt map</h2>
        <p>We started with the prompt map. We pulled 180 prompts across the buyer journey (awareness, consideration, decision) and tested all 180 across six AI tools: ChatGPT 4o, Perplexity, Claude 3.5 Sonnet, Gemini 1.5, Llama 3.1 70B, and Grok 2.</p>
        <p>The heatmap was revealing. Our competitor was being cited consistently in one cluster: comparison queries ("X vs Y", "best tools for Z"). They had a single, well-structured comparison page that all six models loved to lift from. That was it. One page. That's their whole AEO strategy.</p>
        <p>Our client appeared in exactly zero prompts. Not because their product was worse. Because their pages didn't have the shape that models want to lift.</p>

        <h2 id="pages">§ III &nbsp; The pages</h2>
        <p>We shipped four pages in six weeks. Each one built around a specific prompt cluster. Each one with:</p>
        <p>A clear, definitive thesis in the first paragraph: the kind of sentence that a model can lift verbatim and attribute to you. A Q&amp;A structure in the middle, with headers that match the prompt language exactly. A comparison table (because models love tables). And a schema block with FAQ markup, Article markup, and the boring Organization properties that most teams skip.</p>
        <p>We also shipped llms.txt on day twelve. Basic stuff: the important pages, the canonical URLs, a brief description of what the brand does. Perplexity started fetching it by week two. We could see it in the server logs.</p>

        <h2 id="result">§ IV &nbsp; The result</h2>
        <p>First citation: day 24. Perplexity, consideration-stage query. The model lifted two sentences from our comparison table and attributed them correctly.</p>
        <p>By day 38, the client was cited in 14 of the 180 prompts we were tracking. Their competitor was still cited in 22. But the gap had closed significantly, and we'd only shipped four pages.</p>
        <p>By month three, the client was cited in 31 prompts. The competitor, still 22. The comparison page we built had become the more-cited page, even though our client still doesn't rank particularly well on Google for the category term.</p>

        <h2 id="differently">§ V &nbsp; What we'd do differently</h2>
        <p>Ship llms.txt on day one, not day twelve. The two-week delay probably cost us a week of citations.</p>
        <p>Build the prompt map before writing a single word. We had a rough version at the start but refined it after the first page draft. The refinement changed the structure of the second and third pages significantly. Should've done it upfront.</p>
        <p>Add original data to at least one page. The pages that get cited most consistently are the ones with a unique data point (a survey result, an analysis, a benchmark) that models can't find anywhere else. We didn't have time to run original research on this sprint. Next time, we'd budget for it.</p>
      </div>

      <!-- Filed tags -->
      <div class="filed-tags">
        <span class="t-mono" style="font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute);margin-right:8px">Filed under:</span>
        <span class="tag">AEO</span>
        <span class="tag">Perplexity</span>
        <span class="tag">Schema</span>
        <span class="tag">Case study</span>
        <span class="tag">Reddit</span>
      </div>

      <!-- Author -->
      <div class="author-block">
        <p class="ab-label">Written by</p>
        <p class="ab-name">Masterful</p>
      </div>

      <!-- Related -->
      <div style="padding:32px 0;border-top:1px solid var(--rule)">
        <p class="toc-label" style="font-family:var(--mono);font-size:10px;letter-spacing:0.06em;text-transform:uppercase;color:var(--mute);margin-bottom:16px">Related entries</p>
        <ul class="related-list">
          <li><a href="/journal/how-llms-decide-what-to-cite/">How LLMs decide what to cite. →</a></li>
          <li><a href="/journal/what-geo-actually-is/">GEO in plain language: what generative engine optimization actually involves. →</a></li>
          <li><a href="/journal/the-three-search-surfaces/">The three search surfaces: why SEO alone is not enough in 2026. →</a></li>
        </ul>
      </div>
    </article>

    <aside class="article-toc">
      <p class="toc-label">In this entry</p>
      <ul class="toc-list">
        <li><a href="#setup">§ I &nbsp; The setup</a></li>
        <li><a href="#prompt-map">§ II &nbsp; The prompt map</a></li>
        <li><a href="#pages">§ III &nbsp; The pages</a></li>
        <li><a href="#result">§ IV &nbsp; The result</a></li>
        <li><a href="#differently">§ V &nbsp; What we'd do differently</a></li>
      </ul>
      <div style="margin-top:32px;padding:24px;background:var(--cream-2)">
        <p class="toc-label">Get the free audit</p>
        <p style="font-size:13px;line-height:1.55;color:var(--mute);margin-bottom:16px">Find out how the machines see your brand. 18-page report, 48 hours, no sales calls.</p>
        <a href="/audit/" class="btn btn-orange" style="width:100%;justify-content:center">Start →</a>
      </div>
    </aside>
  </div>
</div>
