// LANDING V1 — "Editorial Daily"
// Premium restrained serif. Newspaper-feel manifesto on the left,
// big "M" ink portrait on the right, ticker tape across the bottom of the hero.

function LandingV1(){
  return (
    <div className="m-frame" style={{minHeight:'100%'}}>
      <MNav current="home" />

      {/* HERO */}
      <section style={{padding:'56px 32px 0', borderBottom:'1px solid var(--rule)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.15fr 1fr', gap:48, alignItems:'flex-start'}}>
          <div>
            <div className="m-mono" style={{color:'var(--mute)', display:'flex', alignItems:'center', gap:8, marginBottom:24}}>
              <PulseDot /> <span>Vol. 26 · Issue 04 · Search Visibility Studio</span>
            </div>
            <h1 className="m-serif" style={{
              fontSize:128, lineHeight:0.92, margin:'0 0 24px', letterSpacing:'-0.025em',
              fontWeight:400,
            }}>
              Most brands<br/>
              are <span style={{fontStyle:'italic', color:'var(--orange)'}}>invisible</span><br/>
              to the<br/>
              machines.
            </h1>
            <p style={{
              fontSize:20, lineHeight:1.45, maxWidth:520, margin:'0 0 36px',
              color:'var(--ink)', opacity:0.78,
            }}>
              AI search is quietly replacing Google&rsquo;s ten blue links. ChatGPT, Perplexity, Gemini and friends already answer
              <em className="m-serif" style={{fontStyle:'italic', color:'var(--orange)', fontSize:22}}> &nbsp;before they cite</em>. We make sure they cite you.
            </p>
            <div style={{display:'flex', gap:12, alignItems:'center', marginBottom:48}}>
              <a className="m-btn m-btn-orange" href="#form">
                <span>Start a visibility audit</span><Arrow />
              </a>
              <a className="m-btn m-btn-ghost" href="#work">
                <span>See the receipts</span><Arrow />
              </a>
            </div>
          </div>

          {/* Big orange M portrait — uses the brand mark as art */}
          <div style={{position:'relative'}}>
            <div style={{
              background:'var(--ink)', borderRadius:4, aspectRatio:'4/5',
              display:'flex', alignItems:'center', justifyContent:'center',
              position:'relative', overflow:'hidden',
            }}>
              <svg viewBox="0 0 100 100" width="78%" height="78%" style={{display:'block'}}>
                <path d="M10 92 V14 H26 L50 56 L74 14 H90 V92 H74 V40 L56 70 H44 L26 40 V92 Z" fill="var(--orange)"/>
              </svg>
              <div className="m-mono" style={{position:'absolute', top:18, left:18, color:'var(--cream)', opacity:0.7}}>FIG.01 / THE MARK</div>
              <div className="m-mono" style={{position:'absolute', bottom:18, right:18, color:'var(--cream)', opacity:0.7}}>masterful.studio</div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:16}}>
              <Stat n="312%" label="Avg. AI citation lift, 90d" />
              <Stat n="14" label="Studios, agencies, & DTC brands shipping" />
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div style={{margin:'56px -32px 0', borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)', padding:'16px 0', overflow:'hidden'}}>
          <div className="m-marquee-track m-mono" style={{color:'var(--ink)'}}>
            {[...Array(2)].map((_,k)=>(
              <React.Fragment key={k}>
                <span>● Live: ChatGPT cites a Masterful client every 4.2 min</span>
                <span>· Perplexity index growing 11.4% wk/wk</span>
                <span>· Gemini SGE rollout 100% US</span>
                <span>· 67% of B2B research starts in AI</span>
                <span>· Your competitors are already on the answer list</span>
                <span>· Updated 04:12 EST</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* THREE-COLUMN SERVICES */}
      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:24}}>§ 01 — What we do</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, borderTop:'1px solid var(--rule)'}}>
          {[
            ['SEO', 'Search Engine Optimization', 'Old Google still pays the rent. We win the queries that still convert and ladder them up into AI citations.', '01'],
            ['AEO', 'Answer Engine Optimization', 'We engineer your content so ChatGPT, Perplexity & Claude lift it verbatim — with your brand attached.', '02'],
            ['GEO', 'Generative Engine Optimization', 'Structured authority across every model surface — citations, knowledge graph, agentic browse.', '03'],
          ].map(([abbr, title, desc, num], i, arr)=>(
            <div key={abbr} style={{
              padding:'32px 28px 36px',
              borderRight: i<arr.length-1 ? '1px solid var(--rule)' : 'none',
            }}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:36}}>{num}</div>
              <div className="m-serif" style={{fontSize:84, lineHeight:1, color:'var(--orange)', marginBottom:24, letterSpacing:'-0.04em'}}>{abbr}</div>
              <div style={{fontSize:13, fontWeight:500, marginBottom:8}}>{title}</div>
              <p style={{fontSize:14, lineHeight:1.55, color:'var(--mute)', margin:'0 0 28px', maxWidth:320}}>{desc}</p>
              <a className="m-link m-mono" href="#" style={{color:'var(--ink)'}}>Read the method →</a>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)', background:'var(--cream)'}}>
        <div style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:48}}>
          <div className="m-mono" style={{color:'var(--mute)'}}>§ 02 — A note from the desk</div>
          <p className="m-serif" style={{fontSize:54, lineHeight:1.1, margin:0, maxWidth:1000, fontWeight:400}}>
            Your customers stopped scrolling. They&rsquo;re asking the model &ldquo;<em style={{color:'var(--orange)'}}>who&rsquo;s the best at this?</em>&rdquo; — and the model is choosing. We make sure it chooses you, in the words you&rsquo;d use, on a page that converts. No keyword bingo. No 4,000-word filler. Just the work.
          </p>
        </div>
      </section>

      {/* WORK GRID */}
      <section style={{padding:'80px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:32}}>
          <div>
            <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>§ 03 — Selected work</div>
            <h2 className="m-serif" style={{fontSize:52, margin:0, fontWeight:400, letterSpacing:'-0.02em'}}>Receipts, not promises.</h2>
          </div>
          <a className="m-link m-mono" href="#work">All case studies →</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gridTemplateRows:'auto auto', gap:24}}>
          <WorkCard tall label="client logo · feature" tag="SAAS · 11 mo" title="From page 4 to the answer box." kpi="+418% AI citations" />
          <WorkCard label="case study image" tag="DTC · 6 mo" title="Owned the bedtime tea answer." kpi="+212% organic" />
          <WorkCard label="case study image" tag="LOCAL · 4 mo" title="Booked out, two states over." kpi="+96 leads/mo" />
          <WorkCard label="client logo" tag="B2B · 9 mo" title="The Perplexity default for hiring tools." kpi="#1 in 38 prompts" />
          <WorkCard label="client logo" tag="FINTECH · 7 mo" title="When ChatGPT got asked, it said their name." kpi="+$1.4M ARR sourced" />
        </div>
      </section>

      {/* PROCESS */}
      <section style={{padding:'100px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:24}}>§ 04 — The Masterful method</div>
        <h2 className="m-serif" style={{fontSize:64, margin:'0 0 48px', fontWeight:400, letterSpacing:'-0.025em', maxWidth:1100}}>
          A four-step retainer engineered for how machines actually <em style={{color:'var(--orange)'}}>read, retrieve, and recommend</em>.
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, borderTop:'1px solid var(--rule)'}}>
          {[
            ['Audit', 'Where you show up. Where you don\u2019t. Why.'],
            ['Architect', 'Topical maps, schema, entity graph. Built for crawl & retrieval.'],
            ['Author', 'Content that AI lifts verbatim — and humans want to read.'],
            ['Amplify', 'Citations, mentions, and the boring backlinks that still move models.'],
          ].map(([t, d], i)=>(
            <div key={t} style={{padding:'28px 24px 36px', borderRight: i<3?'1px solid var(--rule)':'none'}}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:18}}>0{i+1}</div>
              <div className="m-serif" style={{fontSize:36, marginBottom:10, lineHeight:1}}>{t}</div>
              <p style={{fontSize:14, lineHeight:1.55, color:'var(--mute)', margin:0}}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'120px 32px', background:'var(--ink)', color:'var(--cream)'}} className="m-dark-section">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'flex-end'}}>
          <h2 className="m-serif" style={{fontSize:96, margin:0, lineHeight:0.95, fontWeight:400, letterSpacing:'-0.025em', color:'var(--cream)'}}>
            Become the<br/>answer.
          </h2>
          <div>
            <p style={{fontSize:18, lineHeight:1.5, color:'var(--mute-on-dark)', maxWidth:480, marginTop:0}}>
              Six quick questions and we&rsquo;ll send back a free visibility report — what models say about you today, what we&rsquo;d change first, and what it&rsquo;d be worth.
            </p>
            <a href="#form" className="m-btn m-btn-orange" style={{padding:'18px 28px', fontSize:14}}>
              <span>Start the 6-question audit</span><Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'40px 32px', background:'var(--ink)', color:'var(--cream)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <MLockup color="var(--cream)" size={13}/>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>© 2026 · MASTERFUL STUDIO · BROOKLYN / REMOTE</div>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>hello@masterful.studio</div>
      </footer>
    </div>
  );
}

function Stat({n, label}){
  return (
    <div style={{border:'1px solid var(--rule)', borderRadius:2, padding:'20px 18px', background:'rgba(0,0,0,0.02)'}}>
      <div className="m-serif" style={{fontSize:48, lineHeight:1, color:'var(--orange)', letterSpacing:'-0.03em'}}>{n}</div>
      <div className="m-mono" style={{color:'var(--mute)', marginTop:10, fontSize:10}}>{label}</div>
    </div>
  );
}

function WorkCard({label, tag, title, kpi, tall=false}){
  return (
    <div style={{display:'flex', flexDirection:'column', gap:14, gridRow: tall?'span 2':'auto'}}>
      <ImgPh label={label} height={tall?440:200}/>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span className="m-mono" style={{color:'var(--mute)'}}>{tag}</span>
        <span className="m-mono" style={{color:'var(--orange)'}}>{kpi}</span>
      </div>
      <div className="m-serif" style={{fontSize:tall?34:22, lineHeight:1.15, letterSpacing:'-0.01em'}}>{title}</div>
    </div>
  );
}

Object.assign(window, { LandingV1 });
