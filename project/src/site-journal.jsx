// SITE — Journal index + single article page (Newspaper system)

function JournalIndexNews(){
  const posts = [
    {date:'MAY 14, 2026', cat:'AEO', title:'How we got Perplexity to cite us in a category we don\u2019t rank for on Google.', time:'8 min', author:'Avery Chen', dek:'A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. Includes the prompt-map spreadsheet and the schema we shipped.'},
    {date:'MAY 02, 2026', cat:'Schema', title:'The actual schema you need for AEO, with the 9 properties most teams skip.', time:'11 min', author:'Marco DeLuca', dek:'JSON-LD beyond the basics. The properties that move retrieval, not just rich snippets. With copy-pasteable templates.'},
    {date:'APR 21, 2026', cat:'GEO', title:'Reddit is the new authority signal. Here\u2019s how we seed without getting banned.', time:'6 min', author:'Sasha Park', dek:'On being useful in a community, paying down karma debt, and the long arc of UGC authority.'},
    {date:'APR 09, 2026', cat:'Field note', title:'We surveyed 412 founders. Most still think SEO is "blogging."', time:'4 min', author:'Editorial', dek:'A short post with one big bar chart, three cranky observations, and a free PDF.'},
    {date:'MAR 27, 2026', cat:'Method', title:'Our prompt-mapping spreadsheet, free.', time:'3 min', author:'Avery Chen', dek:'The template we use for every AEO engagement. Make a copy. Ship.'},
    {date:'MAR 14, 2026', cat:'SEO', title:'Programmatic SEO didn\u2019t die. The bad versions of it did.', time:'9 min', author:'Marco DeLuca', dek:'Three teardowns of pSEO sites that still work in 2026 and what they got right.'},
    {date:'MAR 02, 2026', cat:'GEO', title:'How we got a client a Wikipedia article (the boring way).', time:'14 min', author:'Sasha Park', dek:'An honest account of nine months of citation hunting, three rejections, and the final submission.'},
    {date:'FEB 20, 2026', cat:'AEO', title:'Why your perfect FAQ page isn\u2019t getting cited.', time:'7 min', author:'Avery Chen', dek:'Three patterns we see again and again, with rewrites you can ship today.'},
  ];

  const featured = posts[0];

  return (
    <div className="m-frame">
      <CSNav/>
      {/* Masthead */}
      <section style={{padding:'32px 32px 0'}}>
        <MastheadStrip/>
        <div style={{padding:'40px 0 16px'}}>
          <div className="m-mono" style={{color:'var(--orange)', marginBottom:16}}>§ JOURNAL · FIELD NOTES ON GETTING CITED</div>
          <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:64, alignItems:'flex-end'}}>
            <h1 className="m-serif" style={{fontSize:160, margin:0, lineHeight:0.86, letterSpacing:'-0.038em', fontWeight:400}}>
              Field notes,<br/><em style={{color:'var(--orange)'}}>filed in public.</em>
            </h1>
            <div>
              <p style={{fontSize:18, color:'var(--ink)', lineHeight:1.55, marginTop:0, opacity:0.85}}>
                We write down what worked, what didn&rsquo;t, and what we&rsquo;d charge for elsewhere. Posted when we have something to say. Not weekly. Not on a cadence. No newsletter.
              </p>
              <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:16, marginTop:14}}>
                <span>● 41 entries</span><span>● 6 contributors</span><span>● Updated May 14</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED (newspaper feature lead) */}
      <section style={{padding:'56px 32px 64px', borderTop:'2px solid var(--ink)', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="I" label="Lead Entry"/>
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:48, alignItems:'stretch', marginTop:24}}>
          <ImgPh label="featured article art" height={520}/>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'8px 0'}}>
            <div>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:14, display:'flex', gap:16}}>
                <span>● {featured.cat}</span><span>{featured.date}</span><span>{featured.time} read</span>
              </div>
              <h2 className="m-serif" style={{fontSize:80, margin:'0 0 22px', lineHeight:0.95, letterSpacing:'-0.025em', fontWeight:400}}>
                {featured.title}
              </h2>
              <p className="m-serif" style={{fontSize:24, lineHeight:1.35, color:'var(--ink)', maxWidth:540, fontStyle:'italic', fontWeight:400}}>
                {featured.dek}
              </p>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:32, paddingTop:18, borderTop:'1px solid var(--rule)'}}>
              <div className="m-mono" style={{color:'var(--ink)'}}>By {featured.author}</div>
              <a className="m-btn m-btn-orange" href="#article" style={{padding:'14px 22px', fontSize:12}}><span>Read the entry</span><Arrow/></a>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY — three column grid like a paper's section page */}
      <section style={{padding:'56px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="II" label="Recent Entries"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:40, marginTop:32, borderTop:'1px solid var(--rule)', paddingTop:32}}>
          {posts.slice(1,4).map(p=>(
            <article key={p.title} style={{display:'flex', flexDirection:'column', gap:12}}>
              <ImgPh label={`${p.cat.toLowerCase()} entry art`} height={220}/>
              <div className="m-mono" style={{display:'flex', justifyContent:'space-between', color:'var(--mute)'}}>
                <span><span style={{color:'var(--orange)'}}>● {p.cat}</span> &nbsp; {p.date}</span>
                <span>{p.time}</span>
              </div>
              <div className="m-serif" style={{fontSize:30, lineHeight:1.12, fontWeight:400, letterSpacing:'-0.012em'}}>{p.title}</div>
              <p style={{fontSize:14, lineHeight:1.6, color:'var(--mute)', margin:0, maxWidth:420}}>{p.dek}</p>
              <a href="#article" className="m-link m-mono" style={{color:'var(--ink)', alignSelf:'flex-start', marginTop:6}}>Read →</a>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHIVE TABLE */}
      <section style={{padding:'56px 32px 100px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="III" label="Archive"/>
        <div className="m-mono" style={{color:'var(--mute)', display:'grid', gridTemplateColumns:'110px 110px 1fr 180px 80px 40px', gap:24, padding:'14px 0', borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--rule)', marginTop:32}}>
          <span>Date</span><span>Category</span><span>Title</span><span>Author</span><span>Read</span><span/>
        </div>
        {posts.slice(4).map((p)=>(
          <a key={p.title} href="#article" style={{display:'grid', gridTemplateColumns:'110px 110px 1fr 180px 80px 40px', gap:24, padding:'22px 0', borderBottom:'1px solid var(--rule)', alignItems:'baseline', textDecoration:'none', color:'var(--ink)'}}>
            <span className="m-mono" style={{color:'var(--mute)'}}>{p.date.split(',')[0]}</span>
            <span className="m-mono" style={{color:'var(--orange)'}}>{p.cat}</span>
            <span className="m-serif" style={{fontSize:24, lineHeight:1.2, fontWeight:400}}>{p.title}</span>
            <span style={{fontSize:13}}>{p.author}</span>
            <span className="m-mono" style={{color:'var(--mute)'}}>{p.time}</span>
            <Arrow/>
          </a>
        ))}
        <div style={{textAlign:'center', marginTop:48}}>
          <a className="m-btn m-btn-ghost" href="#"><span>Load 33 older entries</span><Arrow/></a>
        </div>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

// ───────── ARTICLE DETAIL — long-form magazine article ─────────
function ArticlePage(){
  return (
    <div className="m-frame">
      <CSNav/>
      <section style={{padding:'32px 32px 0'}}>
        <MastheadStrip/>
        <div className="m-mono" style={{color:'var(--orange)', marginTop:32, marginBottom:14, display:'flex', gap:18}}>
          <span>● AEO</span><span>·</span><span>ENTRY No. 41</span><span>·</span><span>14 MAY 2026</span>
        </div>
        <h1 className="m-serif" style={{fontSize:160, margin:0, lineHeight:0.86, letterSpacing:'-0.038em', fontWeight:400}}>
          How we got Perplexity<br/>to cite us in a category<br/>we <em style={{color:'var(--orange)'}}>don&rsquo;t rank for</em> on Google.
        </h1>
        <p className="m-serif" style={{fontSize:32, lineHeight:1.2, color:'var(--ink)', maxWidth:1100, margin:'32px 0 24px', fontStyle:'italic', fontWeight:400}}>
          A play-by-play of an AEO sprint that pulled citations from nothing in 38 days. The prompt-map spreadsheet, the schema we shipped, and the boring habits that compounded.
        </p>
        <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:24, padding:'14px 0', borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
          <span>By Avery Chen, Head of Strategy</span><span>·</span><span>8 minute read</span>
          <span style={{flex:1}}/>
          <span>↗ Share</span><span>● Save</span>
        </div>
      </section>

      <section style={{padding:'48px 32px 0'}}>
        <ImgPh label="article hero photograph · 16:9" height={520}/>
        <div className="m-mono" style={{color:'var(--mute)', marginTop:10, textAlign:'center'}}>Fig 1. &nbsp; Perplexity citation graph, 38 days. Source: Masterful internal monitoring.</div>
      </section>

      {/* Body */}
      <section style={{padding:'80px 32px 80px'}}>
        <div style={{display:'grid', gridTemplateColumns:'220px 1fr 220px', gap:48, alignItems:'flex-start'}}>
          {/* TOC */}
          <aside style={{position:'sticky', top:32}}>
            <div className="m-mono" style={{color:'var(--orange)', marginBottom:14}}>IN THIS ENTRY</div>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
              {['§ I  The setup','§ II  The prompt map','§ III  The pages','§ IV  The result','§ V  What we\u2019d do differently'].map((t,i)=>(
                <li key={t} className="m-mono" style={{color: i===0 ? 'var(--orange)' : 'var(--mute)', borderTop:'1px solid var(--rule)', paddingTop:8}}>
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          {/* Article */}
          <article style={{maxWidth:720}}>
            <p style={{fontSize:19, lineHeight:1.7, margin:0}}>
              <span className="m-serif" style={{float:'left', fontSize:108, lineHeight:0.82, marginRight:12, marginTop:6, color:'var(--orange)'}}>L</span>
              ast quarter a client asked us a question that, at first, sounded impossible. They were a B2B brand in a young category &mdash; six players, no dominant winner &mdash; and they were nowhere on Google for the queries that mattered. They had eight backlinks. They had been writing thoughtful long-form content for two years and almost nobody read it.
            </p>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:18}}>
              The question: can you get us cited in Perplexity in the next thirty days, while we figure out Google? Yes. Probably. We&rsquo;d done it twice before. The play is, in short, to skip Google entirely and engineer the page so the answer engine has no reason to pick anyone else.
            </p>

            <h2 className="m-serif" style={{fontSize:46, lineHeight:1.05, margin:'48px 0 18px', fontWeight:400, letterSpacing:'-0.02em'}}>§ I &nbsp; The setup</h2>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:0}}>
              We started where we always do: by asking Perplexity, ChatGPT, Gemini and Claude the actual buyer-intent questions the client&rsquo;s prospects type. Forty queries. Six engines. Two-hundred and forty raw rankings. The client appeared in three.
            </p>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:18}}>
              The competitor with the highest LLM share-of-voice had a slightly thinner site than the client &mdash; but better structure, cleaner schema, and a single, narrowly-targeted &ldquo;ultimate guide&rdquo; page that all four engines were lifting verbatim. They&rsquo;d also seeded one strong Reddit thread that two of the engines were quietly citing as a source.
            </p>

            <PullQuote attribution="Internal Slack, day 3">
              We don&rsquo;t need to beat them on Google. We need to write a better lifted page. Same shape. Better answer.
            </PullQuote>

            <h2 className="m-serif" style={{fontSize:46, lineHeight:1.05, margin:'48px 0 18px', fontWeight:400, letterSpacing:'-0.02em'}}>§ II &nbsp; The prompt map</h2>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:0}}>
              We expanded the forty queries to two hundred and ninety, tagged by intent (compare, evaluate, recommend, define), and clustered them into eight prompt-themes. Five themes were already &ldquo;owned&rdquo; by an entrenched player. Two were genuinely contested. One &mdash; a specific buyer pain expressed in a particular phrase &mdash; had no consensus answer. That&rsquo;s the one we went after first.
            </p>

            <ImgPh label="figure 2 · prompt cluster heatmap" height={300} style={{margin:'40px 0'}}/>

            <h2 className="m-serif" style={{fontSize:46, lineHeight:1.05, margin:'48px 0 18px', fontWeight:400, letterSpacing:'-0.02em'}}>§ III &nbsp; The pages</h2>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:0}}>
              One anchor page per contested theme. Three thousand words each, but structured to be skimmed and to be lifted. Tight headings. Definitive opening claims, sourced. A side-by-side comparison table the models love. Schema for FAQPage, Article, Organization, and the boring sameAs links pointing to the client&rsquo;s Crunchbase, G2, and LinkedIn pages.
            </p>

            <h2 className="m-serif" style={{fontSize:46, lineHeight:1.05, margin:'48px 0 18px', fontWeight:400, letterSpacing:'-0.02em'}}>§ IV &nbsp; The result</h2>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:0}}>
              First citation, Perplexity, day eleven. By day thirty-eight: cited in 17 of 40 original queries, ranked top-three in seven. The same pages didn&rsquo;t move at all on Google &mdash; they&rsquo;re still climbing as I write this. We&rsquo;ll do a follow-up post in three months when the SEO numbers catch up. (They will.)
            </p>

            <h2 className="m-serif" style={{fontSize:46, lineHeight:1.05, margin:'48px 0 18px', fontWeight:400, letterSpacing:'-0.02em'}}>§ V &nbsp; What we&rsquo;d do differently</h2>
            <p style={{fontSize:19, lineHeight:1.7, marginTop:0}}>
              We&rsquo;d seed the Reddit thread sooner. We waited until week four because we wanted the page to be live first; in retrospect, two weeks of paid attention to one well-written Reddit thread, while the page baked, would have accelerated the model citations by another two weeks. The lesson, again: in AEO, authority signals matter as much as the page.
            </p>

            <hr className="m-rule" style={{margin:'48px 0'}}/>
            <div className="m-mono" style={{color:'var(--mute)', display:'flex', justifyContent:'space-between'}}>
              <span>Filed under: AEO · Perplexity · Case study</span>
              <span>Last revised: 14 May 2026</span>
            </div>
          </article>

          {/* right margin: author & related */}
          <aside style={{display:'flex', flexDirection:'column', gap:24}}>
            <div style={{padding:'18px 18px', background:'var(--cream-2)'}}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:8}}>WRITTEN BY</div>
              <div className="m-serif" style={{fontSize:22, lineHeight:1.2}}>Avery Chen</div>
              <div className="m-mono" style={{color:'var(--mute)', marginTop:4}}>Head of Strategy, Masterful</div>
            </div>
            <div style={{padding:'18px 0', borderTop:'1px solid var(--rule)'}}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>FILED UNDER</div>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                {['AEO','Perplexity','Schema','Case','Reddit'].map(t=>(
                  <span key={t} className="m-mono" style={{padding:'5px 10px', border:'1px solid var(--ink)', color:'var(--ink)', fontSize:10}}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{padding:'18px 0', borderTop:'1px solid var(--rule)'}}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:12}}>RELATED ENTRIES</div>
              {[
                'The actual schema you need for AEO.',
                'Why your FAQ page isn\u2019t getting cited.',
                'Reddit is the new authority signal.',
              ].map(t=>(
                <a key={t} className="m-serif" href="#article" style={{display:'block', fontSize:18, lineHeight:1.2, marginBottom:14, color:'var(--ink)', textDecoration:'none'}}>{t} →</a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

Object.assign(window, { JournalIndexNews, ArticlePage });
