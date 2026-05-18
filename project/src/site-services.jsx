// SITE — Services index + 3 detail pages (SEO / AEO / GEO)
// Newspaper system — masthead nav, classified tone, folios, footnotes.

// Shared CTA strip used at the bottom of every page
function NewsCTA(){
  return (
    <section style={{padding:'120px 32px 100px', background:'var(--ink)', color:'var(--cream)', textAlign:'center'}}>
      <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:24, letterSpacing:'0.18em'}}>BACK COVER · TAKE ACTION</div>
      <h2 className="m-serif" style={{fontSize:140, margin:'0 0 32px', lineHeight:0.9, fontWeight:400, letterSpacing:'-0.035em'}}>
        Get on the<br/><em style={{color:'var(--orange)'}}>shortlist</em>.
      </h2>
      <a href="#form" className="m-btn m-btn-orange" style={{padding:'20px 36px', fontSize:14}}>
        <span>Start the 6-question audit</span><Arrow/>
      </a>
      <div className="m-mono" style={{color:'var(--mute-on-dark)', marginTop:24}}>Free · No call required · Human reply within 48 hours</div>
    </section>
  );
}

function NewsFooter(){
  return (
    <footer style={{padding:'24px 32px', background:'var(--ink)', color:'var(--cream)', borderTop:'1px solid var(--rule-light)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <MLockup color="var(--cream)" size={13}/>
      <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>© 2026 · MASTERFUL · BROOKLYN, NY · LISBON, PT</div>
      <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>hello@masterful.studio</div>
    </footer>
  );
}

// Section banner — used as a page title row in newspaper style
function PageMast({ section, title, dek, lead }){
  return (
    <section style={{padding:'32px 32px 24px', borderBottom:'2px solid var(--ink)'}}>
      <MastheadStrip/>
      <div style={{padding:'40px 0 16px'}}>
        <div className="m-mono" style={{color:'var(--orange)', marginBottom:16}}>{section}</div>
        <h1 className="m-serif" style={{fontSize:160, margin:0, lineHeight:0.86, letterSpacing:'-0.038em', fontWeight:400}}>{title}</h1>
        {dek && (
          <p className="m-serif" style={{fontSize:32, lineHeight:1.18, color:'var(--ink)', maxWidth:1100, margin:'24px 0 0', fontStyle:'italic', fontWeight:400}}>
            {dek}
          </p>
        )}
        {lead && (
          <div className="m-mono" style={{color:'var(--mute)', marginTop:28, display:'flex', gap:16, alignItems:'center'}}>
            {lead}
          </div>
        )}
      </div>
    </section>
  );
}

// ───────── SERVICES INDEX ─────────
function ServicesIndex(){
  const items = [
    {abbr:'SEO', full:'Search Engine Optimization', tag:'The boring engine', dek:'Old Google is 4.8 billion daily queries and still pays the bills. We treat it like infrastructure.'},
    {abbr:'AEO', full:'Answer Engine Optimization', tag:'The new playbook', dek:'Pages structured so ChatGPT, Perplexity, Claude & Gemini cite them whole — with you credited.'},
    {abbr:'GEO', full:'Generative Engine Optimization', tag:'The long game', dek:'Your brand becomes a recognized entity across the generative web. Knowledge graph. Reddit. Training data.'},
  ];
  return (
    <div className="m-frame">
      <CSNav/>
      <PageMast
        section="§ SERVICES INDEX"
        title={<>Three letters.<br/><em style={{color:'var(--orange)'}}>One studio.</em></>}
        dek={<>The work we do, broken into the three disciplines the world has split into — same studio, same team, one retainer.</>}
        lead={<><span>● 3 disciplines</span><span>● 14 active engagements</span><span>● Min. 3-month contracts</span><span>● $4k/mo floor</span></>}
      />

      {/* Big SEO / AEO / GEO rows — each links to its own page */}
      {items.map((it, i)=>(
        <section key={it.abbr} style={{padding:'80px 32px 90px', borderBottom:'1px solid var(--ink)'}}>
          <Folio n={['I','II','III'][i]} label={`${it.abbr} · ${it.full}`}/>
          <div style={{display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:64, marginTop:40, alignItems:'flex-end'}}>
            <div>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:18}}>{it.tag}</div>
              <div className="m-serif" style={{fontSize:340, lineHeight:0.78, color:'var(--orange)', letterSpacing:'-0.06em', marginBottom:8}}>{it.abbr}</div>
            </div>
            <div>
              <p className="m-serif" style={{fontSize:32, lineHeight:1.18, margin:'0 0 24px', fontWeight:400, letterSpacing:'-0.012em'}}>
                {it.dek}
              </p>
              <a href={`#service-${it.abbr.toLowerCase()}`} className="m-btn m-btn-orange">
                <span>Read the {it.abbr} method →</span><Arrow/>
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* CLASSIFIED — "what we don't do" */}
      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="IV" label="A Note on What We Don't Do"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24, marginTop:32}}>
          {[
            ['Paid','We have studio friends we trust for ads. Ask, we\u2019ll intro.'],
            ['CRO','Same. We focus on the parts upstream of the funnel.'],
            ['Brand identity','We\u2019re great editors of brand voice. We don\u2019t design wordmarks.'],
            ['Lock-in','3-month minimums. No cancellation games. Month-to-month after.'],
          ].map(([t,d])=>(
            <div key={t} style={{borderTop:'1px solid var(--ink)', paddingTop:14}}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:8}}>NOT FOR HIRE</div>
              <div className="m-serif" style={{fontSize:28, lineHeight:1.1, marginBottom:8, fontWeight:400}}>{t}</div>
              <p style={{fontSize:13, lineHeight:1.55, color:'var(--mute)', margin:0}}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

// ───────── SERVICE DETAIL — one page; the props are the service ─────────
const SERVICE_DATA = {
  seo: {
    abbr:'SEO', no:'I',
    full:'Search Engine Optimization',
    headline: <>Old Google is <em style={{color:'var(--orange)'}}>boring</em>, and still pays for everything.</>,
    intro: 'Forty-three percent of buyers still start at google.com. We treat classic SEO as infrastructure — quiet, reliable, compounding — so we can take the bolder swings in AEO and GEO without losing the floor.',
    pillars: [
      ['Technical audit','We crawl, profile, and triage every issue blocking growth — from core web vitals to canonical hell to robots.txt misconfigurations.'],
      ['Topical architecture','Hub-and-spoke maps designed for crawl, ranking, and retrieval. Internal linking that signals real authority.'],
      ['Programmatic at scale','Templates and structured data that capture the long tail without sounding like a robot wrote them.'],
      ['Editorial calendar','Briefs your team can ship, or we ship for you. SEO content that doesn\u2019t embarrass your brand.'],
      ['Link earning','HARO replies that get picked up. Digital PR. Original data. Real backlinks from real publications.'],
      ['Monitoring','Weekly dashboards. Alerts when something breaks. Quarterly strategic reviews with the actual team.'],
    ],
    kpis: [
      ['+312%','Avg. organic traffic, 9 mo'],
      ['#1 ','Median primary-keyword rank'],
      ['180','Median ranking pages, 6 mo'],
      ['$1.4M','Pipeline sourced, top client'],
    ],
    timeline: [
      ['Wk 01–02','Audit · benchmark · roadmap'],
      ['Wk 03–06','Tech fixes · architecture · briefs'],
      ['Wk 07–24','Content velocity · links · iteration'],
      ['Wk 24+','Compounding · monitoring · refinement'],
    ],
  },
  aeo: {
    abbr:'AEO', no:'II',
    full:'Answer Engine Optimization',
    headline: <>The new playbook. <em style={{color:'var(--orange)'}}>Be the answer</em>, not a link.</>,
    intro: 'When ChatGPT, Perplexity, Claude or Gemini answer a question, they pull from a short list of pages they trust. We engineer your content to be on that list — structured to be lifted whole, sourced to be cited, written to be remembered.',
    pillars: [
      ['Prompt mapping','We test 200–800 prompts your buyers actually ask. Rank you against the current answer set. Find the gaps.'],
      ['Source-engineered briefs','Briefs designed to be ingested: clear citations, definitive claims, structured Q&A, the right headings.'],
      ['Schema & entities','Schema.org, knowledge graph hooks, sameAs, and the boring properties that make models trust you.'],
      ['LLM crawl ops','llms.txt, retrieval-friendly site architecture, monitoring of which models actually fetch you.'],
      ['Citation engineering','Original research, named frameworks, opinionated takes — the things models actually want to quote.'],
      ['Model benchmarking','Weekly tests across 6 frontier models. Citation count tracked like a stock price.'],
    ],
    kpis: [
      ['+418%','AI citation lift, 9 mo'],
      ['86%','Top client share-of-voice, Perplexity'],
      ['38','Prompts where clients rank #1'],
      ['~30d','Time to first citation'],
    ],
    timeline: [
      ['Wk 01–02','Prompt audit · model benchmark · gap map'],
      ['Wk 03–04','Schema · entities · llms.txt · crawl ops'],
      ['Wk 05–10','Source-engineered pages · citation work'],
      ['Wk 10+','Weekly tests · iteration · expansion'],
    ],
  },
  geo: {
    abbr:'GEO', no:'III',
    full:'Generative Engine Optimization',
    headline: <>The <em style={{color:'var(--orange)'}}>long game</em>. Beyond any one model.</>,
    intro: 'Models change weekly. Authority doesn\u2019t. GEO is the work of making your brand a recognised entity across the entire generative web — knowledge graphs, training corpora, retrieval indexes, agentic browsing paths — so wherever the model surface goes, you go with it.',
    pillars: [
      ['Brand entity work','Wikipedia, Wikidata, DBpedia, Crunchbase, G2. Where the models look for facts, we put facts.'],
      ['Reddit & UGC','Sustained, non-spammy presence in the subreddits your buyers actually trust. (This one is an art.)'],
      ['Podcast & cite-bait','Original research, opinionated takes, and named frameworks designed to be quoted by other writers.'],
      ['Agentic test suites','We script agents that act like real buyers and grade your visibility across the journey, weekly.'],
      ['Training-data plays','Long-form on the right surfaces, syndication that gets ingested, the rare commercial-crawl agreements.'],
      ['Entity disambiguation','Make sure the models know which brand you are — and that confusion isn\u2019t costing you citations.'],
    ],
    kpis: [
      ['+96%','Wikipedia & DBpedia coverage growth'],
      ['41','Subreddits with active brand presence'],
      ['12mo','Typical GEO compounding window'],
      ['8/10','Agent buying-journey citations, top client'],
    ],
    timeline: [
      ['Wk 01–04','Entity audit · gap map · seed plan'],
      ['Wk 05–12','Wiki · Wikidata · Crunchbase · UGC seeding'],
      ['Wk 13–26','Original research · podcast · cite-bait'],
      ['Wk 26+','Compounding · model monitoring · iteration'],
    ],
  },
};

function ServiceDetail({ slug }){
  const s = SERVICE_DATA[slug];
  const otherSlugs = ['seo','aeo','geo'].filter(x=>x!==slug);
  return (
    <div className="m-frame">
      <CSNav/>

      {/* Hero — big abbr, headline, lead column */}
      <section style={{padding:'32px 32px 0'}}>
        <MastheadStrip/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, padding:'48px 0 56px'}}>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:16}}>SERVICE No. {s.no} · {s.full}</div>
              <div className="m-serif" style={{fontSize:380, lineHeight:0.82, color:'var(--orange)', letterSpacing:'-0.06em', marginBottom:0}}>{s.abbr}</div>
            </div>
            <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:14, paddingTop:12, borderTop:'1px solid var(--rule)'}}>
              <span>Minimum 3 months</span><span>·</span><span>From $4k / month</span><span>·</span><span>Flat retainer</span>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:24}}>
            <h1 className="m-serif" style={{fontSize:88, margin:0, lineHeight:0.96, letterSpacing:'-0.028em', fontWeight:400}}>
              {s.headline}
            </h1>
            <p style={{fontSize:18, lineHeight:1.6, color:'var(--ink)', maxWidth:520, margin:0, opacity:0.88}}>
              <span className="m-serif" style={{float:'left', fontSize:64, lineHeight:0.85, marginRight:10, color:'var(--orange)'}}>{s.intro[0]}</span>
              {s.intro.slice(1)}
            </p>
            <div>
              <a href="#form" className="m-btn m-btn-orange"><span>Start an audit</span><Arrow/></a>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section style={{display:'grid', gridTemplateColumns:`repeat(${s.kpis.length}, 1fr)`, borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)'}}>
        {s.kpis.map(([n,l], i, a)=>(
          <div key={l} style={{padding:'32px 28px', borderRight: i<a.length-1?'1px solid var(--rule)':'none'}}>
            <div className="m-serif" style={{fontSize:84, lineHeight:0.95, color:'var(--orange)', letterSpacing:'-0.035em'}}>{n}</div>
            <div className="m-mono" style={{color:'var(--mute)', marginTop:12}}>{l}</div>
          </div>
        ))}
      </section>

      {/* PILLARS — 6 things we do */}
      <section style={{padding:'90px 32px', borderBottom:'1px solid var(--rule)'}}>
        <Folio n={s.no} label={`What ${s.abbr} Actually Means at Masterful`}/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, borderTop:'1px solid var(--rule)', marginTop:32}}>
          {s.pillars.map(([t,d], i, a)=>(
            <div key={t} style={{
              padding:'28px 28px 36px',
              borderRight: (i%3)<2?'1px solid var(--rule)':'none',
              borderBottom: i<a.length-3?'1px solid var(--rule)':'none',
            }}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:14}}>0{i+1}</div>
              <div className="m-serif" style={{fontSize:34, marginBottom:12, lineHeight:1.08, fontWeight:400}}>{t}</div>
              <p style={{fontSize:15, lineHeight:1.6, color:'var(--mute)', margin:0}}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{padding:'90px 32px', borderBottom:'1px solid var(--rule)'}}>
        <Folio n="IV" label="A Typical Engagement"/>
        <div style={{display:'grid', gridTemplateColumns:'180px 1fr', gap:48, marginTop:32}}>
          <div className="m-mono" style={{color:'var(--mute)'}}>FOUR PHASES</div>
          <div>
            {s.timeline.map(([wk, what], i)=>(
              <div key={wk} style={{display:'grid', gridTemplateColumns:'160px 60px 1fr', gap:24, padding:'22px 0', borderTop:'1px solid var(--rule)', alignItems:'baseline'}}>
                <span className="m-mono" style={{color:'var(--orange)'}}>{wk}</span>
                <span className="m-mono" style={{color:'var(--mute)'}}>0{i+1}</span>
                <span className="m-serif" style={{fontSize:26, lineHeight:1.2, fontWeight:400}}>{what}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{padding:'90px 32px', borderBottom:'1px solid var(--rule)', background:'var(--cream-2)'}}>
        <Folio n="V" label={`What Clients Say About Our ${s.abbr} Work`}/>
        <div style={{maxWidth:1100, margin:'24px auto 0'}}>
          <PullQuote attribution={`Avery Chen, ${slug==='seo'?'CMO at Kindling Tea':slug==='aeo'?'Head of Growth at Northpath':'Founder at Veld Capital'}`}>
            {slug==='seo' && 'We had four agencies before. Masterful is the first that treats SEO like an engineering discipline, not a content factory.'}
            {slug==='aeo' && 'Three months in, ChatGPT was recommending us by name when prospects asked it to compare. That had never happened.'}
            {slug==='geo' && 'A year in, we\u2019re the brand Perplexity reaches for unprompted in our category. Knowledge-graph work that nobody else was doing.'}
          </PullQuote>
        </div>
      </section>

      {/* CROSS-SELL — to the other 2 services */}
      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--rule)'}}>
        <Folio n="VI" label="Continued On — Other Services"/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:32}}>
          {otherSlugs.map(o=>{
            const x = SERVICE_DATA[o];
            return (
              <a key={o} href={`#service-${o}`} style={{textDecoration:'none', color:'var(--ink)', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'40px 32px', border:'1px solid var(--ink)', borderRadius:4, transition:'background .15s'}}
                onMouseOver={e=>e.currentTarget.style.background='var(--cream-2)'}
                onMouseOut={e=>e.currentTarget.style.background='transparent'}>
                <div>
                  <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>Continued · {x.full}</div>
                  <div className="m-serif" style={{fontSize:54, color:'var(--orange)', letterSpacing:'-0.03em', lineHeight:1}}>{x.abbr}</div>
                </div>
                <Arrow size={20}/>
              </a>
            );
          })}
        </div>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

Object.assign(window, { ServicesIndex, ServiceDetail, NewsCTA, NewsFooter, PageMast });
