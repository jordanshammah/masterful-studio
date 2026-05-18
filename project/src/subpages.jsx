// SUB-PAGES — Services detail, Case studies index, Journal index

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
function ServicesPage(){
  return (
    <div className="m-frame">
      <MNav current="services"/>
      <section style={{padding:'80px 32px 56px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--orange)', marginBottom:24}}>§ SERVICES INDEX</div>
        <h1 className="m-serif" style={{fontSize:140, margin:'0 0 24px', lineHeight:0.9, fontWeight:400, letterSpacing:'-0.035em', maxWidth:1300}}>
          Three letters that decide whether the machine <em style={{color:'var(--orange)'}}>recommends you</em> or someone else.
        </h1>
        <p style={{fontSize:20, color:'var(--mute)', maxWidth:760, lineHeight:1.5}}>
          We split the work the way the world has split: classical search, answer engines, and the wider generative web. Same studio. Same team. One retainer.
        </p>
      </section>

      {[
        {abbr:'SEO', full:'Search Engine Optimization', tag:'The boring engine', no:'01',
          desc:'Google still drives the majority of high-intent traffic to most businesses. We treat it like infrastructure — quiet, reliable, compounding.',
          items:[
            ['Technical audit & roadmap','We crawl, profile, and triage every issue blocking growth. From core web vitals to canonical hell.'],
            ['Programmatic SEO','Templates, structured data, and scaled landing pages that capture the long tail without sounding like a robot wrote them.'],
            ['Content engine','An editorial calendar your team can actually keep. We write, you ship; or we direct and you write.'],
            ['Link earning','Real backlinks from real publications. Digital PR, HARO replies that get picked up, original data.'],
          ]},
        {abbr:'AEO', full:'Answer Engine Optimization', tag:'The new playbook', no:'02',
          desc:'When ChatGPT, Perplexity, Claude or Gemini cite an answer, what shows up? The page formatted to be lifted. The brand with the right entity. The site with the cleaner schema. We make that page yours.',
          items:[
            ['Prompt mapping','We crawl LLMs for the 200–800 prompts your buyers actually ask. We rank you against the current answer set.'],
            ['Source-engineered briefs','Briefs designed to be ingested — clear citations, definitive claims, structured Q&A, the right headings.'],
            ['Schema & entities','Schema.org, knowledge graph hooks, sameAs, and the boring properties that make models trust you.'],
            ['LLM crawl ops','llms.txt, retrieval-friendly site architecture, monitoring of which models actually fetch you.'],
          ]},
        {abbr:'GEO', full:'Generative Engine Optimization', tag:'The long game', no:'03',
          desc:'Beyond any one model — the brand becomes a recognized entity across the generative web. Training corpora. Knowledge graphs. Reddit. UGC. Agentic browsing surfaces.',
          items:[
            ['Brand entity work','Wikipedia, Wikidata, DBpedia, Crunchbase, G2. Where the models look for facts, we put facts.'],
            ['Reddit & UGC','Sustained, non-spammy presence in the subreddits your buyers actually trust. (Yes, this one is an art.)'],
            ['Podcast & cite-bait','Original research, opinionated takes, and named frameworks designed to be quoted by other writers.'],
            ['Agentic test suites','We script agents that act like real buyers and grade your visibility across the journey, weekly.'],
          ]},
      ].map((s)=> (
        <section key={s.abbr} style={{padding:'96px 32px', borderBottom:'1px solid var(--rule)'}}>
          <div style={{display:'grid', gridTemplateColumns:'320px 1fr', gap:48}}>
            <div>
              <div className="m-mono" style={{color:'var(--mute)'}}>{s.no} · {s.tag}</div>
              <div className="m-serif" style={{fontSize:200, lineHeight:0.85, color:'var(--orange)', letterSpacing:'-0.05em', margin:'12px 0 16px'}}>{s.abbr}</div>
              <div className="m-mono" style={{color:'var(--mute)'}}>{s.full}</div>
            </div>
            <div>
              <p className="m-serif" style={{fontSize:36, lineHeight:1.2, margin:'0 0 40px', fontWeight:400, letterSpacing:'-0.015em'}}>{s.desc}</p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, borderTop:'1px solid var(--rule)'}}>
                {s.items.map(([t,d], i, a)=>(
                  <div key={t} style={{
                    padding:'24px 24px 28px',
                    borderRight: i%2===0 ? '1px solid var(--rule)' : 'none',
                    borderBottom: i<a.length-2 ? '1px solid var(--rule)' : 'none',
                  }}>
                    <div className="m-mono" style={{color:'var(--orange)', marginBottom:10}}>0{i+1}</div>
                    <div className="m-serif" style={{fontSize:28, marginBottom:8, lineHeight:1.1}}>{t}</div>
                    <p style={{fontSize:14, lineHeight:1.55, color:'var(--mute)', margin:0}}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section style={{padding:'120px 32px', background:'var(--ink)', color:'var(--cream)', textAlign:'center'}}>
        <h2 className="m-serif" style={{fontSize:112, margin:'0 0 32px', lineHeight:0.95, fontWeight:400, letterSpacing:'-0.03em'}}>
          Want all three? <em style={{color:'var(--orange)'}}>Yes.</em>
        </h2>
        <a href="#form" className="m-btn m-btn-orange" style={{padding:'18px 32px'}}>
          <span>Start a free audit</span><Arrow/>
        </a>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────
// CASE STUDIES INDEX
// ─────────────────────────────────────────────
function WorkPage(){
  const studies = [
    {client:'Northpath Labs', tag:'SaaS · 11 mo', title:'From page 4 to the answer box.', kpi:'+418% AI citations', desc:'AI sales coaching brand. Climbed from zero LLM presence to default cite in 38 high-intent prompts.', span:2},
    {client:'Kindling Tea', tag:'DTC · 6 mo', title:'Owned the bedtime tea answer.', kpi:'+212% organic', desc:'Sleepytime category. We rebuilt the content engine and dominated long-tail "tea for X" queries.'},
    {client:'Two Counties Plumbing', tag:'Local · 4 mo', title:'Booked out, two states over.', kpi:'+96 leads/mo', desc:'Plumbing co. went from 4 monthly leads to 100, with one location.'},
    {client:'Tally Hire', tag:'B2B · 9 mo', title:'The Perplexity default for ATS shopping.', kpi:'#1 in 38 prompts', desc:'ATS vendor became the unprompted recommendation in Perplexity comparison queries.'},
    {client:'Veld Capital', tag:'Fintech · 7 mo', title:'When ChatGPT got asked, it said their name.', kpi:'$1.4M ARR sourced', desc:'Wealth platform. AEO sprint delivered branded LLM cites traceable to closed-won.'},
    {client:'Lumen Foundry', tag:'Agency · 14 mo', title:'A creative agency that ranks like a SaaS.', kpi:'+8.1k MRR sourced', desc:'Design studio rebuilt around topical authority and structured case studies.'},
  ];
  return (
    <div className="m-frame">
      <MNav current="work"/>
      <section style={{padding:'80px 32px 56px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--orange)', marginBottom:24}}>§ SELECTED WORK · 2024–26</div>
        <h1 className="m-serif" style={{fontSize:140, margin:'0 0 24px', lineHeight:0.9, fontWeight:400, letterSpacing:'-0.035em'}}>
          Receipts, not <em style={{color:'var(--orange)'}}>promises.</em>
        </h1>
        <p style={{fontSize:20, color:'var(--mute)', maxWidth:680, lineHeight:1.5}}>
          We&rsquo;ve worked with 36 brands across SaaS, DTC, fintech and local services. Here are six we&rsquo;re allowed to show.
        </p>
      </section>

      <section style={{padding:'56px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridAutoRows:'auto', gap:32}}>
          {studies.map((s, i)=>(
            <article key={s.client} style={{gridColumn: s.span?`span ${s.span}`:'span 1', display:'flex', flexDirection:'column', gap:16}}>
              <ImgPh label={`${s.client.toLowerCase()} · hero shot`} height={s.span===2?460:300}/>
              <div className="m-mono" style={{display:'flex', justifyContent:'space-between'}}>
                <span style={{color:'var(--mute)'}}>{s.tag}</span>
                <span style={{color:'var(--orange)'}}>{s.kpi}</span>
              </div>
              <div className="m-serif" style={{fontSize:s.span===2?42:30, lineHeight:1.1, letterSpacing:'-0.015em'}}>{s.title}</div>
              <p style={{fontSize:14, lineHeight:1.55, color:'var(--mute)', margin:0, maxWidth:480}}>{s.desc}</p>
              <a className="m-link m-mono" href="#" style={{color:'var(--ink)', marginTop:4}}>Read full study →</a>
            </article>
          ))}
        </div>
      </section>

      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:18}}>Clients we&rsquo;ve worked with</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:0, borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)'}}>
          {Array.from({length:12}).map((_,i)=>(
            <div key={i} style={{padding:'40px 16px', borderRight: (i%6)<5?'1px solid var(--rule)':'none', borderBottom: i<6?'1px solid var(--rule)':'none', textAlign:'center'}}>
              <span className="m-mono" style={{color:'var(--mute)'}}>[ logo {String(i+1).padStart(2,'0')} ]</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'120px 32px', background:'var(--ink)', color:'var(--cream)', textAlign:'center'}}>
        <h2 className="m-serif" style={{fontSize:96, margin:'0 0 24px', lineHeight:0.95, fontWeight:400, letterSpacing:'-0.025em'}}>
          Could be your <em style={{color:'var(--orange)'}}>case study</em> next.
        </h2>
        <a href="#form" className="m-btn m-btn-orange" style={{padding:'18px 32px'}}><span>Start a free audit</span><Arrow/></a>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────
// JOURNAL INDEX
// ─────────────────────────────────────────────
function JournalPage(){
  const posts = [
    {date:'MAY 14, 2026', cat:'AEO', title:'How we got Perplexity to cite us in a category we don\u2019t rank for on Google.', time:'8 min', author:'Avery Chen', desc:'A play-by-play of an AEO sprint that pulled citations from nothing in 38 days.'},
    {date:'MAY 02, 2026', cat:'Schema', title:'The actual schema you need for AEO, with the 9 properties most teams skip.', time:'11 min', author:'Marco DeLuca', desc:'JSON-LD beyond the basics. The properties that move retrieval, not just rich snippets.'},
    {date:'APR 21, 2026', cat:'GEO', title:'Reddit is the new authority signal. Here\u2019s how we seed without getting banned.', time:'6 min', author:'Sasha Park', desc:'On being useful in a community, paying down karma debt, and the long arc of UGC authority.'},
    {date:'APR 09, 2026', cat:'Field note', title:'We surveyed 412 founders. Most still think SEO is "blogging."', time:'4 min', author:'Editorial', desc:'A short post with one big bar chart and a few cranky observations.'},
    {date:'MAR 27, 2026', cat:'Method', title:'Our prompt-mapping spreadsheet, free.', time:'3 min', author:'Avery Chen', desc:'The template we use for every AEO engagement. Make a copy. Ship.'},
    {date:'MAR 14, 2026', cat:'SEO', title:'Programmatic SEO didn\u2019t die. The bad versions of it did.', time:'9 min', author:'Marco DeLuca', desc:'Three teardowns of pSEO sites that still work in 2026 and what they got right.'},
  ];
  return (
    <div className="m-frame">
      <MNav current="journal"/>
      <section style={{padding:'80px 32px 56px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--orange)', marginBottom:24}}>§ JOURNAL · FIELD NOTES ON GETTING CITED</div>
        <div style={{display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:64, alignItems:'flex-end'}}>
          <h1 className="m-serif" style={{fontSize:140, margin:0, lineHeight:0.9, fontWeight:400, letterSpacing:'-0.035em'}}>
            Field notes,<br/><em style={{color:'var(--orange)'}}>filed in public.</em>
          </h1>
          <div>
            <p style={{fontSize:18, color:'var(--mute)', lineHeight:1.5, marginTop:0}}>
              We write down what worked, what didn&rsquo;t, and what we&rsquo;d charge for elsewhere. Posted when we have something to say. Not weekly. Not on a cadence.
            </p>
            <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:16, marginTop:14}}>
              <span>● Latest May 14</span><span>● 41 entries</span><span>● No newsletter</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{padding:'72px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:24}}>FEATURED</div>
        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:48, alignItems:'stretch'}}>
          <ImgPh label="featured article art" height={420}/>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'8px 0'}}>
            <div>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:16, display:'flex', gap:16}}>
                <span>● {posts[0].cat}</span><span>{posts[0].date}</span><span>{posts[0].time} read</span>
              </div>
              <h2 className="m-serif" style={{fontSize:64, margin:'0 0 24px', lineHeight:1.0, letterSpacing:'-0.02em', fontWeight:400}}>{posts[0].title}</h2>
              <p style={{fontSize:18, lineHeight:1.55, color:'var(--mute)', maxWidth:520}}>{posts[0].desc}</p>
            </div>
            <div className="m-mono" style={{display:'flex', justifyContent:'space-between', marginTop:32}}>
              <span style={{color:'var(--ink)'}}>By {posts[0].author}</span>
              <a className="m-link" href="#">Read the entry →</a>
            </div>
          </div>
        </div>
      </section>

      {/* index */}
      <section style={{padding:'40px 32px 80px'}}>
        <div className="m-mono" style={{color:'var(--mute)', display:'grid', gridTemplateColumns:'90px 100px 1fr 160px 100px 40px', gap:24, padding:'14px 0', borderBottom:'1px solid var(--rule)'}}>
          <span>Date</span><span>Category</span><span>Title</span><span>Author</span><span>Read</span><span/>
        </div>
        {posts.slice(1).map((p,i)=>(
          <div key={p.title} style={{display:'grid', gridTemplateColumns:'90px 100px 1fr 160px 100px 40px', gap:24, padding:'22px 0', borderBottom:'1px solid var(--rule)', alignItems:'center'}}>
            <span className="m-mono" style={{color:'var(--mute)'}}>{p.date.split(',')[0]}</span>
            <span className="m-mono" style={{color:'var(--orange)'}}>{p.cat}</span>
            <span className="m-serif" style={{fontSize:24, lineHeight:1.2}}>{p.title}</span>
            <span style={{fontSize:13}}>{p.author}</span>
            <span className="m-mono" style={{color:'var(--mute)'}}>{p.time}</span>
            <Arrow/>
          </div>
        ))}
        <div style={{textAlign:'center', marginTop:48}}>
          <a className="m-btn m-btn-ghost" href="#"><span>Load 35 older entries</span><Arrow/></a>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesPage, WorkPage, JournalPage });
