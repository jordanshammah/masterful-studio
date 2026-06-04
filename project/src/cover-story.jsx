// COVER STORY — refined primary + 2 hero variations (B, C).
// Magazine fidelity: drop caps, byline rules, marginalia, footnotes, folios.
// All three variants share the body sections — only the cover changes.

// ─────────────────────────────────────────────
// SHARED EDITORIAL ATOMS
// ─────────────────────────────────────────────
const CS_GRID = '32px';

function MastheadStrip(){
  return (
    <div className="m-mono" style={{
      display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:24,
      color:'var(--mute)', padding:'14px 0', borderBottom:'1px solid var(--rule)',
      fontSize:10,
    }}>
      <span>Masterful Quarterly · Vol. XII</span>
      <span>The Visibility Issue · May 2026</span>
      <span style={{textAlign:'center'}}>Subscribers: 14 brands · always</span>
      <span style={{textAlign:'right'}}>Limited print run · $0.00</span>
    </div>
  );
}

function Folio({ n, of = 'XII', label }){
  return (
    <div className="m-mono" style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      color:'var(--mute)', padding:'10px 0', borderTop:'1px solid var(--rule)',
      fontSize:10, letterSpacing:'0.18em',
    }}>
      <span>§ {n}</span>
      <span style={{flex:1, height:1, borderTop:'1px dashed var(--rule)', margin:'0 16px'}}/>
      <span>{label}</span>
      <span style={{flex:1, height:1, borderTop:'1px dashed var(--rule)', margin:'0 16px'}}/>
      <span>{n} / {of}</span>
    </div>
  );
}

function PullQuote({ children, attribution }){
  return (
    <aside style={{margin:'40px 0', padding:'28px 0', borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)', position:'relative'}}>
      <div className="m-serif" style={{fontStyle:'italic', fontSize:48, lineHeight:1.08, letterSpacing:'-0.02em', fontWeight:400}}>
        &ldquo;{children}&rdquo;
      </div>
      {attribution && (
        <div className="m-mono" style={{color:'var(--mute)', marginTop:14}}>— {attribution}</div>
      )}
    </aside>
  );
}

// Top navbar styled like a periodical's masthead
function CSNav(){
  return (
    <nav style={{display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:32, alignItems:'center', padding:'24px 32px', borderBottom:'1px solid var(--ink)'}}>
      <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:14}}>
        <span>Est. 2021</span><span>·</span><span>Brooklyn, NY</span>
      </div>
      <a href="#" style={{textDecoration:'none'}}>
        <div className="m-serif" style={{fontSize:42, lineHeight:1, color:'var(--ink)', letterSpacing:'-0.02em', textAlign:'center', fontWeight:400, fontStyle:'italic'}}>
          Masterful
        </div>
        <div className="m-mono" style={{color:'var(--mute)', textAlign:'center', marginTop:4, fontSize:9, letterSpacing:'0.3em'}}>SEO &nbsp;·&nbsp; AEO &nbsp;·&nbsp; GEO</div>
      </a>
      <div style={{display:'flex', justifyContent:'flex-end', gap:24, alignItems:'center'}}>
        <a className="m-mono m-link" style={{color:'var(--ink)'}} href="#services">Services</a>
        <a className="m-mono m-link" style={{color:'var(--ink)'}} href="#work">Work</a>
        <a className="m-mono m-link" style={{color:'var(--ink)'}} href="#journal">Journal</a>
        <a className="m-mono m-link" style={{color:'var(--ink)'}} href="#about">About</a>
        <a href="#form" className="m-btn m-btn-orange" style={{padding:'10px 16px', fontSize:11}}>
          <span>Free audit</span><Arrow/>
        </a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// HERO A — the refined original "feature cover"
// ─────────────────────────────────────────────
function HeroA(){
  return (
    <section style={{padding:'32px 32px 0', position:'relative'}}>
      <MastheadStrip/>

      <div style={{display:'grid', gridTemplateColumns:'1.45fr 0.95fr', gap:56, paddingTop:32, paddingBottom:32, position:'relative'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:680}}>
          <div className="m-mono" style={{color:'var(--orange)'}}>FEATURE No. 01 · COVER STORY</div>
          <div>
            <h1 className="m-serif" style={{
              fontSize:200, lineHeight:0.84, margin:'0 0 22px',
              letterSpacing:'-0.04em', fontWeight:400,
            }}>
              The death of<br/>
              the <em style={{color:'var(--orange)'}}>blue link</em>,<br/>
              and what comes<br/>
              next for you.
            </h1>
            <div style={{display:'flex', alignItems:'center', gap:14, paddingTop:14, borderTop:'1px solid var(--ink)'}}>
              <div className="m-mono" style={{color:'var(--mute)'}}>By Masterful Studio</div>
              <span className="m-mono" style={{color:'var(--mute)'}}>·</span>
              <div className="m-mono" style={{color:'var(--mute)'}}>Filed under SEO · AEO · GEO</div>
              <div style={{flex:1}}/>
              <div className="m-mono" style={{color:'var(--mute)'}}>8 min read</div>
            </div>
          </div>
        </div>

        {/* editorial column with drop cap */}
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', paddingTop:28, gap:24}}>
          <div>
            <p style={{margin:0, fontSize:17, lineHeight:1.6, color:'var(--ink)'}}>
              <span className="m-serif" style={{float:'left', fontSize:108, lineHeight:0.82, marginRight:12, marginTop:4, color:'var(--orange)'}}>A</span>
              I search is, very quietly, already the default. Sixty-seven percent of B2B buyers now begin a research session inside ChatGPT, Perplexity or Gemini.<sup style={{color:'var(--orange)', fontSize:11}}>1</sup> They never click. They never see your hero. They read what the model decided was true. <em className="m-serif" style={{fontStyle:'italic', fontSize:18}}>You either show up in that answer, or you do not exist.</em>
            </p>
            <p style={{marginTop:18, fontSize:17, lineHeight:1.6, color:'var(--ink)'}}>
              Masterful is a small visibility studio that fixes that &mdash; with the unglamorous work of SEO, the new work of AEO, and the strategic work of GEO. We take fourteen clients at a time. We bill flat. We sleep at night.
            </p>
          </div>

          <div style={{background:'var(--ink)', color:'var(--cream)', padding:24, borderRadius:4}}>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:8}}>Start here</div>
            <div className="m-serif" style={{fontSize:34, lineHeight:1.05, color:'var(--cream)', marginBottom:14}}>
              Six questions.<br/>One <em style={{color:'var(--orange)'}}>free</em> visibility report.
            </div>
            <a href="#form" className="m-btn m-btn-orange" style={{justifyContent:'space-between', width:'100%'}}>
              <span>Begin audit</span><Arrow/>
            </a>
          </div>
        </div>

        {/* big orange M wedge — subtle corner art */}
        <svg viewBox="0 0 200 200" style={{position:'absolute', right:-12, top:60, width:130, height:130, opacity:0.95}}>
          <path d="M10 190 V30 H45 L100 116 L155 30 H190 V190 H155 V80 L116 145 H84 L45 80 V190 Z" fill="var(--orange)"/>
        </svg>
      </div>

      {/* footnote bar */}
      <div className="m-mono" style={{color:'var(--mute)', padding:'12px 0', borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)', display:'flex', justifyContent:'space-between'}}>
        <span><sup style={{color:'var(--orange)'}}>1</sup>&nbsp; Gartner B2B Buying Tech Behavior, Q1 2026 (n=2,400)</span>
        <span>Cover photography: not pictured · the absence is the point</span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HERO B — "Newspaper front" with masthead serif logo
// Bigger masthead, classified-style sidebar of services
// ─────────────────────────────────────────────
function HeroB(){
  return (
    <section style={{padding:'24px 32px 0'}}>
      {/* huge italic masthead */}
      <div style={{textAlign:'center', padding:'16px 0 24px', borderBottom:'2px solid var(--ink)'}}>
        <div className="m-serif" style={{fontSize:180, lineHeight:0.9, letterSpacing:'-0.045em', color:'var(--ink)', fontStyle:'italic', fontWeight:400}}>
          <span>The Masterful</span>
        </div>
        <div className="m-mono" style={{color:'var(--mute)', marginTop:6, display:'flex', justifyContent:'space-between'}}>
          <span>EST. 2021</span>
          <span>“BECOME THE ANSWER”</span>
          <span>VOL. XII · No. 04</span>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'2.4fr 1fr', gap:48, padding:'40px 0', borderBottom:'1px solid var(--ink)'}}>
        {/* lead story */}
        <div style={{borderRight:'1px solid var(--rule)', paddingRight:48}}>
          <div className="m-mono" style={{color:'var(--orange)', marginBottom:14}}>LEAD STORY · NEW YORK</div>
          <h1 className="m-serif" style={{fontSize:120, lineHeight:0.92, margin:'0 0 16px', letterSpacing:'-0.03em', fontWeight:400}}>
            AI ate Google. <em style={{color:'var(--orange)'}}>You&rsquo;re next on the menu</em>, or the plate.
          </h1>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:24}}>
            By a small studio that&rsquo;s been quietly winning · 8 min read
          </div>
          <div style={{columns:2, columnGap:32}}>
            <p style={{margin:'0 0 14px', fontSize:15, lineHeight:1.6}}>
              <span className="m-serif" style={{float:'left', fontSize:72, lineHeight:0.85, marginRight:8, marginTop:4, color:'var(--orange)'}}>I</span>
              n 2024, the average B2B buyer asked Google. In 2026 they ask ChatGPT, and they don&rsquo;t click. Sixty-seven percent of research sessions now start in an AI model. The model picks the winner before the prospect ever sees a hero.
            </p>
            <p style={{margin:'0 0 14px', fontSize:15, lineHeight:1.6}}>
              Masterful is a fourteen-client visibility studio. We do the old work of SEO, the new work of AEO, and the long work of GEO. We take three months minimum. We bill flat. We do not run ads.
            </p>
            <p style={{margin:'0 0 14px', fontSize:15, lineHeight:1.6}}>
              This cover story is, more or less, what we tell every prospect on the first call. We figured you&rsquo;d like to skip that step and we&rsquo;d rather skip it too.
            </p>
          </div>
          <div style={{display:'flex', gap:12, marginTop:24}}>
            <a href="#form" className="m-btn m-btn-orange"><span>Run a free audit</span><Arrow/></a>
            <a href="#work" className="m-btn m-btn-ghost"><span>See our receipts</span><Arrow/></a>
          </div>
        </div>

        {/* classifieds sidebar */}
        <div style={{display:'flex', flexDirection:'column', gap:14}}>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:4}}>CLASSIFIEDS · SERVICES</div>
          {[
            ['WANTED','Pages that LLMs cite verbatim. Apply within.','AEO'],
            ['HELP OFFERED','Topical maps, schema, 14-page anchor sets.','SEO'],
            ['NOTICE','Your brand can be a Wikipedia entity by Q3.','GEO'],
            ['LOST','Click-through rates ↘. See: AI Overview.','SEO'],
            ['FOUND','Your competitor on Perplexity, page one.','AEO'],
          ].map((c,i)=>(
            <div key={i} style={{borderBottom:'1px dashed var(--rule)', paddingBottom:10}}>
              <div className="m-mono" style={{color:'var(--orange)', display:'flex', justifyContent:'space-between'}}>
                <span>{c[0]}</span><span>{c[2]}</span>
              </div>
              <div className="m-serif" style={{fontSize:18, lineHeight:1.2, marginTop:4}}>{c[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HERO C — full-bleed serif statement, paper-feel, minimal
// ─────────────────────────────────────────────
function HeroC(){
  return (
    <section style={{padding:0, position:'relative', background:'var(--cream)', borderBottom:'1px solid var(--rule)'}}>
      <div style={{padding:'32px 32px 0'}}><MastheadStrip/></div>

      <div style={{
        padding:'120px 32px 80px', display:'grid',
        gridTemplateColumns:'200px 1fr 200px', gap:32, alignItems:'flex-start',
      }}>
        <div className="m-mono" style={{color:'var(--mute)', writingMode:'vertical-rl', transform:'rotate(180deg)'}}>
          §&nbsp; FEATURE 01 · THE VISIBILITY ISSUE · MAY MMXXVI
        </div>

        <div style={{textAlign:'center'}}>
          <div className="m-mono" style={{color:'var(--orange)', marginBottom:36}}>An open letter to brands that still rank for everything except their name.</div>
          <h1 className="m-serif" style={{
            fontSize:140, lineHeight:0.92, margin:'0 0 36px',
            letterSpacing:'-0.03em', fontWeight:400, textWrap:'balance',
          }}>
            <em style={{color:'var(--orange)'}}>Dear search</em>,<br/>
            we need to talk<br/>
            about who you&rsquo;re<br/>
            recommending now.
          </h1>
          <p style={{fontSize:20, lineHeight:1.5, color:'var(--mute)', maxWidth:680, margin:'0 auto 36px'}}>
            Spoiler: it&rsquo;s not you. ChatGPT, Perplexity, Gemini, and Claude have already chosen the brands they trust. We&rsquo;re the studio that gets you on that shortlist.
          </p>
          <div style={{display:'inline-flex', gap:12, alignItems:'center'}}>
            <a href="#form" className="m-btn m-btn-orange" style={{padding:'18px 28px'}}><span>Get on the shortlist</span><Arrow/></a>
            <a href="#work" className="m-link m-mono" style={{color:'var(--ink)'}}>or read the work →</a>
          </div>
        </div>

        <div className="m-mono" style={{color:'var(--mute)', writingMode:'vertical-rl', textAlign:'right'}}>
          SEO &nbsp;·&nbsp; AEO &nbsp;·&nbsp; GEO &nbsp;·&nbsp; A SEARCH VISIBILITY STUDIO
        </div>
      </div>

      <div className="m-mono" style={{color:'var(--mute)', padding:'14px 32px', borderTop:'1px solid var(--rule)', display:'flex', justifyContent:'space-between'}}>
        <span>Continue reading ↓</span>
        <span>p. 01 of 12</span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SHARED BODY — used by all three variants
// ─────────────────────────────────────────────
function CSBody(){
  return (
    <React.Fragment>

      {/* SAMPLE REPORT — replaces the live checker for now */}
      <section style={{padding:'96px 32px', borderBottom:'1px solid var(--rule)', position:'relative'}}>
        <Folio n="II" label="A Peek at the Report — What You'll Get Back"/>
        <div style={{display:'grid', gridTemplateColumns:'0.95fr 1.4fr', gap:56, marginTop:32, alignItems:'flex-start'}}>
          <div>
            <h2 className="m-serif" style={{fontSize:68, lineHeight:0.96, margin:'0 0 20px', fontWeight:400, letterSpacing:'-0.025em'}}>
              An 18-page<br/>visibility <em style={{color:'var(--orange)'}}>autopsy</em>.
            </h2>
            <p style={{fontSize:16, lineHeight:1.6, color:'var(--ink)', maxWidth:460, margin:'0 0 18px', opacity:0.85}}>
              Finish the form and within 48 hours a human sends back a written report. No dashboard login. No drip campaign. Just a PDF, a short Loom, and the truth about how the machines see you.
            </p>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:6, fontFamily:'var(--mono)', fontSize:11, color:'var(--mute)'}}>
              <li>● Citation index across 6 frontier models</li>
              <li>● Top 50 prompts your buyers actually ask</li>
              <li>● Entity graph + schema teardown</li>
              <li>● Competitor citation map</li>
              <li>● 90-day plan, prioritised</li>
            </ul>
            <div style={{marginTop:32}}>
              <a href="#form" className="m-btn m-btn-orange" style={{padding:'16px 24px', fontSize:13}}>
                <span>Request the report</span><Arrow/>
              </a>
            </div>
          </div>

          {/* Sample report spread */}
          <div style={{
            background:'var(--ink)', color:'var(--cream)', borderRadius:6,
            padding:'32px 36px', boxShadow:'0 24px 60px rgba(14,14,14,0.12)',
            position:'relative', overflow:'hidden',
          }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18}}>
              <div className="m-mono" style={{color:'var(--orange)'}}>SAMPLE · NORTHPATH LABS · PG. 04</div>
              <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>masterful / audit 2026.05</div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'220px 1fr', gap:32, paddingTop:14, borderTop:'1px solid rgba(255,255,255,0.14)'}}>
              <div>
                <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:8}}>VISIBILITY SCORE</div>
                <div className="m-serif" style={{fontSize:128, lineHeight:0.9, color:'var(--orange)', letterSpacing:'-0.04em'}}>
                  27<span style={{color:'var(--mute-on-dark)', fontSize:36}}>/100</span>
                </div>
                <div style={{height:6, background:'rgba(255,255,255,0.1)', borderRadius:999, marginTop:14, overflow:'hidden'}}>
                  <div style={{height:'100%', width:'27%', background:'var(--orange)'}}/>
                </div>
                <div className="m-serif" style={{fontSize:18, lineHeight:1.3, marginTop:18, color:'var(--cream)', fontStyle:'italic'}}>
                  &ldquo;Exists on Google. Barely exists in the answer engines.&rdquo;
                </div>
              </div>
              <div>
                <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:14}}>FINDINGS · cited in 10 high-intent prompts</div>
                {[
                  ['ChatGPT 4o', 1, 'Mentioned once, no link, wrong tagline.'],
                  ['Perplexity', 2, 'Cited a competitor twice in your category.'],
                  ['Gemini 2.5', 0, 'Has never heard of you. Hard truth.'],
                  ['Claude 4.5', 1, 'Knows you exist. Won\u2019t recommend you yet.'],
                ].map(([model, cited, note])=>(
                  <div key={model} style={{display:'grid', gridTemplateColumns:'130px 50px 1fr', gap:14, padding:'12px 0', borderBottom:'1px dashed rgba(255,255,255,0.14)', alignItems:'center'}}>
                    <span style={{fontSize:14, fontWeight:500}}>{model}</span>
                    <span className="m-mono" style={{color:'var(--orange)'}}>{cited}/10</span>
                    <span style={{fontSize:13, color:'var(--mute-on-dark)'}}>{note}</span>
                  </div>
                ))}
                <div style={{marginTop:18, padding:'14px 16px', background:'rgba(196,80,26,0.1)', borderLeft:'2px solid var(--orange)', borderRadius:2}}>
                  <div className="m-mono" style={{color:'var(--orange)', marginBottom:6}}>WHAT WE&rsquo;D DO FIRST</div>
                  <p style={{margin:0, fontSize:14, lineHeight:1.55, color:'var(--cream)'}}>
                    A 6-week AEO sprint to close the entity gap, rebuild schema, and seed citations across Reddit and high-DA pubs. Projected score in 90 days: <span style={{color:'var(--orange)'}}>71/100</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-LETTER SPREAD */}
      <section style={{padding:'120px 32px 100px', borderBottom:'1px solid var(--rule)'}}>
        <Folio n="III" label="What We Make — Three Disciplines"/>
        <h2 className="m-serif" style={{fontSize:108, lineHeight:0.92, margin:'40px 0 56px', fontWeight:400, letterSpacing:'-0.03em', maxWidth:1200}}>
          Three letters. <em style={{color:'var(--orange)'}}>One studio.</em> No retainers under three months.
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:48}}>
          {[
            ['SEO', 'Search', '01', 'The boring engine that still pays for everything. Technical, content, links, monitoring. Like grown-ups.', ['Site architecture & speed','Programmatic at scale','Editorial calendar','HARO & digital PR']],
            ['AEO', 'Answers', '02', 'Pages structured to be lifted whole by ChatGPT, Perplexity, Claude and Gemini — with you cited.', ['Prompt mapping','Source-engineered briefs','Schema & entities','LLM crawl ops']],
            ['GEO', 'Generative', '03', 'Your brand becomes an entity in the model\u2019s world. Knowledge graph, training corpora, retrieval.', ['Wiki & Wikidata','Reddit & UGC seeding','Podcast & cite-bait','Agentic test suites']],
          ].map(([abbr, kind, num, desc, items])=>(
            <div key={abbr} style={{display:'flex', flexDirection:'column', gap:14}}>
              <div className="m-mono" style={{color:'var(--mute)', display:'flex', justifyContent:'space-between'}}>
                <span>{num} / {kind}</span><span>↓</span>
              </div>
              <div className="m-serif" style={{fontSize:160, lineHeight:0.78, color:'var(--orange)', letterSpacing:'-0.05em', marginTop:-4}}>{abbr}</div>
              <hr className="m-rule"/>
              <p style={{fontSize:16, lineHeight:1.55, color:'var(--ink)', margin:0, opacity:0.88}}>{desc}</p>
              <ul style={{listStyle:'none', padding:0, margin:'12px 0 0'}}>
                {items.map(it=>(
                  <li key={it} className="m-mono" style={{display:'flex', justifyContent:'space-between', padding:'7px 0', borderTop:'1px dashed var(--rule)'}}>
                    <span>{it}</span><span style={{color:'var(--orange)'}}>+</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL — pull quote */}
      <section style={{padding:'100px 32px', borderBottom:'1px solid var(--rule)', background:'var(--cream-2)'}}>
        <Folio n="IV" label="Said About Us — Letters to the Editor"/>
        <div style={{maxWidth:1200, margin:'40px auto 0'}}>
          <PullQuote attribution="Jenna Olsen, Head of Growth, Northpath — client since '24">
            Three months in, ChatGPT was recommending us by name when prospects asked it to compare. <em style={{color:'var(--orange)'}}>That had never happened.</em> We canceled two other agencies.
          </PullQuote>
          <div className="m-mono" style={{color:'var(--mute)', textAlign:'center', marginTop:18}}>
            Three more like this — Tally Hire · Veld Capital · Lumen Foundry — on page 9.
          </div>
        </div>
      </section>

      {/* THE STUDIO — facts */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)'}}>
        <Folio n="V" label="The Studio — A Box of Facts"/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:64, marginTop:40, alignItems:'flex-start'}}>
          <div>
            <h2 className="m-serif" style={{fontSize:80, lineHeight:0.98, fontWeight:400, letterSpacing:'-0.025em', margin:'0 0 28px'}}>
              A small <em style={{color:'var(--orange)'}}>search visibility studio</em>, working with the brands their categories want to be.
            </h2>
            <p style={{fontSize:17, lineHeight:1.55, color:'var(--mute)', maxWidth:480, margin:0}}>
              We&rsquo;re nine people in Brooklyn (and occasionally Lisbon). We take on fourteen clients at a time so we can do real work, in public, in plain English.
            </p>
            <div style={{display:'flex', gap:14, marginTop:32}}>
              <a className="m-btn" href="#work"><span>The work</span><Arrow/></a>
              <a className="m-btn m-btn-ghost" href="#journal"><span>The journal</span><Arrow/></a>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:0, paddingTop:12}}>
            {[
              ['Founded','2021, Brooklyn'],
              ['Headcount','9 humans, no interns'],
              ['Roster','14 clients · always'],
              ['Languages','EN · ES · DE'],
              ['Engagements','3, 6, 12 month retainers'],
              ['Floor','$4,000 / month'],
              ['Sectors','SaaS · DTC · Fintech · Local services'],
              ['What we don\u2019t do','Paid · CRO · brand identity'],
            ].map(([k,v])=>(
              <div key={k} style={{display:'grid', gridTemplateColumns:'160px 1fr', padding:'18px 0', borderBottom:'1px solid var(--rule)', alignItems:'baseline'}}>
                <span className="m-mono" style={{color:'var(--mute)'}}>{k}</span>
                <span className="m-serif" style={{fontSize:24, lineHeight:1.2}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL preview */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)'}}>
        <Folio n="VI" label="From the Journal — Field Notes"/>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:24, marginBottom:32}}>
          <h2 className="m-serif" style={{fontSize:64, margin:0, fontWeight:400, letterSpacing:'-0.02em'}}>
            Notes from the desk.
          </h2>
          <a href="#journal" className="m-link m-mono">Read all 41 →</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32, borderTop:'1px solid var(--rule)', paddingTop:32}}>
          {[
            ['MAY 14','AEO','How we got Perplexity to cite us in a category we don\u2019t rank for on Google.','8 min'],
            ['MAY 02','Schema','The actual schema you need for AEO, with the 9 properties most teams skip.','11 min'],
            ['APR 21','GEO','Reddit is the new authority signal. Here\u2019s how we seed without getting banned.','6 min'],
          ].map(([date, cat, t, time])=>(
            <article key={t} style={{display:'flex', flexDirection:'column', gap:12}}>
              <ImgPh label="article hero" height={200}/>
              <div className="m-mono" style={{display:'flex', justifyContent:'space-between', color:'var(--mute)'}}>
                <span><span style={{color:'var(--orange)'}}>● {cat}</span> &nbsp; {date}</span>
                <span>{time} read</span>
              </div>
              <div className="m-serif" style={{fontSize:28, lineHeight:1.18, fontWeight:400}}>{t}</div>
              <a href="#" className="m-link m-mono" style={{color:'var(--ink)', alignSelf:'flex-start'}}>Read →</a>
            </article>
          ))}
        </div>
      </section>

      {/* BACK COVER — CTA */}
      <section style={{padding:'140px 32px 80px', textAlign:'center', background:'var(--ink)', color:'var(--cream)'}}>
        <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:24, letterSpacing:'0.18em'}}>BACK COVER · CONTINUED FROM PAGE ONE</div>
        <h2 className="m-serif" style={{fontSize:160, margin:'0 0 32px', lineHeight:0.88, fontWeight:400, letterSpacing:'-0.035em'}}>
          Find out what<br/>the machines<br/>say about <em style={{color:'var(--orange)'}}>you</em>.
        </h2>
        <a href="#form" className="m-btn m-btn-orange" style={{padding:'20px 36px', fontSize:14}}>
          <span>Start the 6-question audit</span><Arrow/>
        </a>
        <div className="m-mono" style={{color:'var(--mute-on-dark)', marginTop:24}}>Free · No call required · Human reply within 48 hours</div>
      </section>

      <footer style={{padding:'24px 32px', background:'var(--ink)', color:'var(--cream)', borderTop:'1px solid var(--rule-light)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <MLockup color="var(--cream)" size={13}/>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>© 2026 · MASTERFUL · BROOKLYN, NY · LISBON, PT</div>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>hello@masterful.studio</div>
      </footer>
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────
// THE THREE PAGES
// ─────────────────────────────────────────────
function CoverStoryA(){
  return (
    <div className="m-frame">
      <CSNav/>
      <HeroA/>
      <CSBody/>
    </div>
  );
}
function CoverStoryB(){
  return (
    <div className="m-frame">
      <CSNav/>
      <HeroB/>
      <CSBody/>
    </div>
  );
}
function CoverStoryC(){
  return (
    <div className="m-frame">
      <CSNav/>
      <HeroC/>
      <CSBody/>
    </div>
  );
}

Object.assign(window, { CoverStoryA, CoverStoryB, CoverStoryC, CSNav, MastheadStrip, Folio, PullQuote });
