// SITE — Work index + case study detail page (Newspaper system)

function WorkIndex(){
  const studies = [
    {slug:'northpath', client:'Northpath Labs', tag:'SaaS · 11 mo', title:'From page 4 to the answer box.', kpi:'+418% AI citations', sector:'AI Sales · B2B', span:2, desc:'A coaching SaaS that climbed from zero LLM presence to default citation in 38 high-intent buyer prompts. AEO sprint into long-term retainer.'},
    {slug:'kindling', client:'Kindling Tea', tag:'DTC · 6 mo', title:'Owned the bedtime tea answer.', kpi:'+212% organic', sector:'Wellness · DTC', desc:'Sleepytime category. Content engine rebuild + structured data dominated long-tail "tea for X" queries.'},
    {slug:'twocounties', client:'Two Counties', tag:'Local · 4 mo', title:'Booked out, two states over.', kpi:'+96 leads/mo', sector:'Plumbing · Local', desc:'Family plumbing co. went from 4 monthly leads to 100, with one location.'},
    {slug:'tally', client:'Tally Hire', tag:'B2B · 9 mo', title:'The Perplexity default in ATS shopping.', kpi:'#1 in 38 prompts', sector:'HR Tech · B2B', desc:'ATS vendor became the unprompted recommendation in Perplexity comparison queries.'},
    {slug:'veld', client:'Veld Capital', tag:'Fintech · 7 mo', title:'When ChatGPT got asked, it said their name.', kpi:'$1.4M ARR sourced', sector:'Wealth · Fintech', desc:'AEO sprint delivered branded LLM citations traceable to closed-won revenue.'},
    {slug:'lumen', client:'Lumen Foundry', tag:'Agency · 14 mo', title:'A creative agency that ranks like a SaaS.', kpi:'+8.1k MRR sourced', sector:'Design · Agency', desc:'Design studio rebuilt around topical authority and structured case studies.'},
  ];

  return (
    <div className="m-frame">
      <CSNav/>
      <PageMast
        section="§ SELECTED WORK · 2024–26"
        title={<>Receipts,<br/>not <em style={{color:'var(--orange)'}}>promises.</em></>}
        dek={<>Thirty-six brands across SaaS, DTC, fintech and local services. These are the six we&rsquo;re allowed to publish.</>}
        lead={<><span>● 36 engagements</span><span>● 6 publishable</span><span>● Industries: 11</span><span>● Avg. tenure: 14 mo</span></>}
      />

      {/* GRID */}
      <section style={{padding:'56px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="I" label="The Front Page · Featured Studies"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridAutoRows:'auto', gap:40, marginTop:32}}>
          {studies.map((s)=>(
            <a key={s.slug} href="#case-study" style={{gridColumn: s.span?`span ${s.span}`:'span 1', display:'flex', flexDirection:'column', gap:16, color:'var(--ink)', textDecoration:'none'}}>
              <ImgPh label={`${s.client.toLowerCase()} · hero shot`} height={s.span===2?460:300}/>
              <div className="m-mono" style={{display:'flex', justifyContent:'space-between'}}>
                <span style={{color:'var(--orange)'}}>● {s.sector}</span>
                <span style={{color:'var(--mute)'}}>{s.tag}</span>
              </div>
              <div className="m-serif" style={{fontSize:s.span===2?48:30, lineHeight:1.08, letterSpacing:'-0.018em', fontWeight:400}}>{s.title}</div>
              <p style={{fontSize:14, lineHeight:1.6, color:'var(--mute)', margin:0, maxWidth:480}}>{s.desc}</p>
              <div className="m-mono" style={{display:'flex', justifyContent:'space-between', paddingTop:10, borderTop:'1px solid var(--rule)'}}>
                <span style={{color:'var(--ink)'}}>{s.client}</span>
                <span style={{color:'var(--orange)'}}>{s.kpi} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* INDUSTRY SUMMARY TABLE */}
      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="II" label="By the Numbers · Across the Roster"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', borderTop:'1px solid var(--ink)', marginTop:32}}>
          {[
            ['+312%','Avg. organic traffic, 9 mo'],
            ['+286%','Avg. AI citation lift'],
            ['$8.4M','Pipeline sourced 2025'],
            ['96%','Client renewal rate'],
          ].map(([n,l], i, a)=>(
            <div key={l} style={{padding:'40px 28px', borderRight: i<a.length-1?'1px solid var(--rule)':'none'}}>
              <div className="m-serif" style={{fontSize:84, lineHeight:0.92, color:'var(--orange)', letterSpacing:'-0.035em'}}>{n}</div>
              <div className="m-mono" style={{color:'var(--mute)', marginTop:14}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT WALL */}
      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="III" label="The Wider Roster"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:0, marginTop:32, borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
          {Array.from({length:18}).map((_,i)=>(
            <div key={i} style={{padding:'44px 16px', borderRight: (i%6)<5?'1px solid var(--rule)':'none', borderBottom: i<12?'1px solid var(--rule)':'none', textAlign:'center'}}>
              <span className="m-mono" style={{color:'var(--mute)'}}>[ logo {String(i+1).padStart(2,'0')} ]</span>
            </div>
          ))}
        </div>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

// ───────── CASE STUDY DETAIL (Northpath as the sample) ─────────
function CaseStudyPage(){
  return (
    <div className="m-frame">
      <CSNav/>

      {/* Article masthead */}
      <section style={{padding:'32px 32px 0'}}>
        <MastheadStrip/>
        <div className="m-mono" style={{color:'var(--orange)', marginTop:32, marginBottom:18, display:'flex', gap:18}}>
          <span>CASE STUDY · No. 14</span><span>·</span><span>AI SALES · B2B</span><span>·</span><span>11-MONTH ENGAGEMENT</span>
        </div>
        <h1 className="m-serif" style={{fontSize:180, margin:0, lineHeight:0.84, letterSpacing:'-0.038em', fontWeight:400}}>
          From page four<br/>to the <em style={{color:'var(--orange)'}}>answer&nbsp;box.</em>
        </h1>
        <p className="m-serif" style={{fontSize:32, lineHeight:1.2, color:'var(--ink)', maxWidth:1100, margin:'32px 0 24px', fontStyle:'italic', fontWeight:400}}>
          How Northpath Labs, a four-person AI sales coaching startup, went from zero LLM citations to the default Perplexity recommendation in 38 high-intent prompts &mdash; in eleven months.
        </p>
        <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:24, padding:'14px 0', borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
          <span>By Avery Chen, Strategy</span>
          <span>·</span>
          <span>12 minutes</span>
          <span>·</span>
          <span>Filed 14 May 2026</span>
          <span style={{flex:1}}/>
          <span>Share ↗</span>
        </div>
      </section>

      {/* Hero image */}
      <section style={{padding:'48px 32px 0'}}>
        <ImgPh label="northpath case study · hero photograph" height={520}/>
      </section>

      {/* AT-A-GLANCE bar */}
      <section style={{padding:'48px 32px 0'}}>
        <Folio n="I" label="At a Glance"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)', marginTop:24}}>
          {[
            ['+418%','AI citation lift'],
            ['38','Prompts ranked #1'],
            ['$840K','New ARR sourced'],
            ['11 mo','Engagement length'],
          ].map(([n,l], i, a)=>(
            <div key={l} style={{padding:'36px 28px', borderRight: i<a.length-1?'1px solid var(--rule)':'none'}}>
              <div className="m-serif" style={{fontSize:84, lineHeight:0.92, color:'var(--orange)', letterSpacing:'-0.035em'}}>{n}</div>
              <div className="m-mono" style={{color:'var(--mute)', marginTop:12}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BODY — multi-column article */}
      <section style={{padding:'80px 32px 80px'}}>
        <div style={{display:'grid', gridTemplateColumns:'240px 1fr 240px', gap:48, alignItems:'flex-start'}}>
          {/* left margin: contents */}
          <aside style={{position:'sticky', top:32, paddingTop:8}}>
            <div className="m-mono" style={{color:'var(--orange)', marginBottom:16}}>IN THIS ENTRY</div>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
              {['§ I  The setup','§ II  The audit','§ III  The work','§ IV  The compound','§ V  What\u2019s next'].map(t=>(
                <li key={t} className="m-mono" style={{color:'var(--mute)', borderTop:'1px solid var(--rule)', paddingTop:8}}>{t}</li>
              ))}
            </ul>
            <hr className="m-rule" style={{margin:'24px 0'}}/>
            <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>RELATED</div>
            <a href="#case-study" className="m-serif" style={{display:'block', fontSize:18, lineHeight:1.2, color:'var(--ink)', textDecoration:'none', marginBottom:6}}>Kindling Tea: the bedtime answer →</a>
            <a href="#case-study" className="m-serif" style={{display:'block', fontSize:18, lineHeight:1.2, color:'var(--ink)', textDecoration:'none'}}>Tally Hire: ATS, defaulted →</a>
          </aside>

          {/* article body */}
          <article style={{maxWidth:680}}>
            <h2 className="m-serif" style={{fontSize:42, lineHeight:1.05, margin:'0 0 18px', fontWeight:400, letterSpacing:'-0.018em'}}>§ I &nbsp; The setup</h2>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:0}}>
              <span className="m-serif" style={{float:'left', fontSize:84, lineHeight:0.82, marginRight:10, marginTop:4, color:'var(--orange)'}}>N</span>
              orthpath came to us in mid-2025 with the kind of problem we love: forty thousand monthly Google visitors, a clear product, and total absence from LLM answers. ChatGPT had heard of two of their competitors. Perplexity had heard of none of them. Their pipeline, which they could trace cleanly, was already 28% &ldquo;AI sent.&rdquo; They wanted that number to be sixty.
            </p>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:18}}>
              We started with what we always start with: a five-page write-up of who you are, what you sell, who buys it, and where the buyers are looking. It&rsquo;s the document everyone says they have and almost no one actually has.
            </p>

            <PullQuote attribution="Internal kickoff memo, Aug 2025">
              The category is so new there&rsquo;s no consensus answer. Whoever earns the first model citation owns the category for the next 18 months.
            </PullQuote>

            <h2 className="m-serif" style={{fontSize:42, lineHeight:1.05, margin:'40px 0 18px', fontWeight:400, letterSpacing:'-0.018em'}}>§ II &nbsp; The audit</h2>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:0}}>
              We mapped two hundred and forty buyer-intent prompts across six frontier models. Of those, Northpath ranked nowhere on a hundred and ninety. The pages we did have were thin, the schema was generic, and the brand wasn&rsquo;t an entity anywhere &mdash; no Wikidata, no Crunchbase profile, a sparse G2 listing. Twelve weeks of work, mapped to twelve specific gaps.
            </p>

            <h2 className="m-serif" style={{fontSize:42, lineHeight:1.05, margin:'40px 0 18px', fontWeight:400, letterSpacing:'-0.018em'}}>§ III &nbsp; The work</h2>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:0}}>
              Two tracks ran in parallel. Track one: an AEO sprint to rebuild eight anchor pages with source-engineered structure, full schema, and original supporting data. Track two: a GEO seed plan &mdash; Wikidata, Crunchbase, a Wikipedia draft, six podcast appearances, and a sustained, on-brand presence in three subreddits.
            </p>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:18}}>
              We do not write content under a brand without the founder approving the voice. Northpath&rsquo;s CEO sat in on every editorial review for the first two months. After month two she stopped showing up &mdash; her words.
            </p>

            <ImgPh label="figure 1 · citation index over 11 months" height={320} style={{margin:'40px 0'}}/>

            <h2 className="m-serif" style={{fontSize:42, lineHeight:1.05, margin:'40px 0 18px', fontWeight:400, letterSpacing:'-0.018em'}}>§ IV &nbsp; The compound</h2>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:0}}>
              First citation arrived in week four (Perplexity, branded comparison query). By month three, Northpath was cited in 12 of 50 prompts. Month seven, 28. Month eleven, 38 &mdash; and number one in 18 of those. Their attributed AI-sourced pipeline crossed 50% of inbound in month nine and has stayed there.
            </p>

            <h2 className="m-serif" style={{fontSize:42, lineHeight:1.05, margin:'40px 0 18px', fontWeight:400, letterSpacing:'-0.018em'}}>§ V &nbsp; What&rsquo;s next</h2>
            <p style={{fontSize:18, lineHeight:1.7, marginTop:0}}>
              We&rsquo;re shifting from sprint into a long-term GEO + content retainer. The next twelve months are about defending position, expanding to two adjacent prompt clusters, and starting to write Northpath into the training corpora that will define how models think about the category in 2027.
            </p>
          </article>

          {/* right margin: stats */}
          <aside style={{paddingTop:8, display:'flex', flexDirection:'column', gap:24}}>
            <div style={{padding:'18px 18px', background:'var(--cream-2)', borderTop:'2px solid var(--orange)'}}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:8}}>FIG. 1</div>
              <div className="m-serif" style={{fontSize:84, lineHeight:0.9, color:'var(--orange)', letterSpacing:'-0.04em'}}>+418%</div>
              <div className="m-mono" style={{color:'var(--mute)', marginTop:8}}>AI citation lift, 11 months</div>
            </div>
            <div style={{padding:'18px 0', borderTop:'1px solid var(--rule)'}}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>CITED IN</div>
              <div className="m-serif" style={{fontSize:18, lineHeight:1.3}}>ChatGPT 4o, Perplexity Sonar, Claude 4.5, Gemini 2.5, Copilot, Google AI Overview</div>
            </div>
            <div style={{padding:'18px 0', borderTop:'1px solid var(--rule)'}}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>SERVICES USED</div>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                {['SEO','AEO','GEO'].map(t=>(
                  <span key={t} className="m-mono" style={{padding:'5px 10px', border:'1px solid var(--ink)', color:'var(--ink)', fontSize:10}}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{padding:'18px 0', borderTop:'1px solid var(--rule)'}}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>STACK</div>
              <div className="m-mono" style={{lineHeight:1.7, color:'var(--ink)'}}>Webflow · Ahrefs · Surfer · Custom AEO suite</div>
            </div>
          </aside>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section style={{borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)', display:'grid', gridTemplateColumns:'1fr 1fr'}}>
        <a href="#case-study" style={{padding:'40px 32px', borderRight:'1px solid var(--rule)', textDecoration:'none', color:'var(--ink)'}}>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>← PREVIOUS STUDY</div>
          <div className="m-serif" style={{fontSize:32, lineHeight:1.1, fontWeight:400}}>Kindling Tea — bedtime, defaulted.</div>
        </a>
        <a href="#case-study" style={{padding:'40px 32px', textDecoration:'none', color:'var(--ink)', textAlign:'right'}}>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>NEXT STUDY →</div>
          <div className="m-serif" style={{fontSize:32, lineHeight:1.1, fontWeight:400}}>Tally Hire — the Perplexity default.</div>
        </a>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

Object.assign(window, { WorkIndex, CaseStudyPage });
