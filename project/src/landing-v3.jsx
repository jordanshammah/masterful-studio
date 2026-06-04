// LANDING V3 — "Cover Story"
// Magazine cover energy. Cream background, asymmetric, generous whitespace.
// Big italic serif headline anchored bottom-left. A small column of dense
// editorial copy. Numbered footer index of services. Restrained motion.

function LandingV3(){
  return (
    <div className="m-frame" style={{minHeight:'100%'}}>
      <MNav current="home" />

      {/* COVER */}
      <section style={{padding:'32px 32px 0', position:'relative'}}>
        {/* meta strip */}
        <div className="m-mono" style={{
          display:'flex', justifyContent:'space-between',
          color:'var(--mute)', padding:'12px 0',
          borderBottom:'1px solid var(--rule)'
        }}>
          <span>Masterful Quarterly · Vol. XII</span>
          <span>The Visibility Issue · May 2026</span>
          <span>Limited print run · $0.00</span>
        </div>

        {/* HEADLINE — anchored low; pulled-quote column on the right */}
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 0.9fr', gap:64, minHeight:760, paddingTop:24, paddingBottom:48, position:'relative'}}>
          {/* big serif headline */}
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <div className="m-mono" style={{color:'var(--orange)'}}>FEATURE No. 01</div>
            <div>
              <h1 className="m-serif" style={{
                fontSize:172, lineHeight:0.86, margin:'0 0 18px',
                letterSpacing:'-0.035em', fontWeight:400,
              }}>
                The death of<br/>
                the <em style={{color:'var(--orange)'}}>blue link</em>,<br/>
                and what comes<br/>
                next for you.
              </h1>
              <div className="m-mono" style={{color:'var(--mute)'}}>
                By Masterful Studio · Filed under SEO · AEO · GEO
              </div>
            </div>
          </div>

          {/* editorial column */}
          <div style={{display:'flex', flexDirection:'column', gap:22, paddingTop:32, alignSelf:'stretch', justifyContent:'space-between'}}>
            {/* drop-cap intro */}
            <div style={{columnCount:1}}>
              <p style={{margin:0, fontSize:17, lineHeight:1.55, color:'var(--ink)'}}>
                <span className="m-serif" style={{
                  float:'left', fontSize:96, lineHeight:0.85, marginRight:10, marginTop:6, color:'var(--orange)'
                }}>A</span>
                I search is, very quietly, already the default. Sixty-seven percent of B2B buyers now begin a research session inside ChatGPT, Perplexity or Gemini. They never click. They never see your hero. They read what the model decided was true. <em className="m-serif" style={{fontStyle:'italic', fontSize:18}}>You either show up in that answer, or you do not exist.</em>
              </p>
              <p style={{marginTop:18, fontSize:17, lineHeight:1.55, color:'var(--ink)'}}>
                Masterful is a small visibility studio that fixes that &mdash; with the unglamorous work of SEO, the new work of AEO, and the strategic work of GEO. We take fourteen clients at a time and we don&rsquo;t do retainers under three months because the math doesn&rsquo;t work and we like sleeping.
              </p>
            </div>

            {/* CTA card */}
            <div style={{
              background:'var(--ink)', color:'var(--cream)',
              padding:24, borderRadius:4, display:'flex', flexDirection:'column', gap:14
            }}>
              <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>Start here</div>
              <div className="m-serif" style={{fontSize:34, lineHeight:1.05, color:'var(--cream)'}}>
                Six questions. One <em style={{color:'var(--orange)'}}>free</em> visibility report.
              </div>
              <a href="#form" className="m-btn m-btn-orange" style={{justifyContent:'space-between'}}>
                <span>Begin audit</span><Arrow/>
              </a>
            </div>
          </div>

          {/* tiny corner art — orange wedge of the M */}
          <svg viewBox="0 0 200 200" style={{
            position:'absolute', right:0, top:8, width:120, height:120, opacity:0.9
          }}>
            <path d="M10 190 V30 H45 L100 116 L155 30 H190 V190 H155 V80 L116 145 H84 L45 80 V190 Z" fill="var(--orange)"/>
          </svg>
        </div>

        {/* horizontal index — table of contents */}
        <div style={{
          borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)',
          display:'grid', gridTemplateColumns:'repeat(5, 1fr)',
          padding:'18px 0',
        }}>
          {[
            ['§ I', 'On invisibility'],
            ['§ II', 'A short history of SEO'],
            ['§ III', 'How AEO actually works'],
            ['§ IV', 'GEO, or the long game'],
            ['§ V', 'Talk to us'],
          ].map(([n,t])=>(
            <div key={n}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:6}}>{n}</div>
              <div style={{fontSize:13}}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE STUDIO — split typographic block */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'flex-start'}}>
          <div>
            <div className="m-mono" style={{color:'var(--mute)', marginBottom:16}}>§ II — The studio</div>
            <h2 className="m-serif" style={{fontSize:72, lineHeight:1.0, fontWeight:400, letterSpacing:'-0.025em', margin:'0 0 28px'}}>
              A small <em style={{color:'var(--orange)'}}>search visibility studio</em>, working with the brands their categories want to be.
            </h2>
            <div style={{display:'flex', gap:14, marginTop:32}}>
              <a className="m-btn" href="#work"><span>The work</span><Arrow/></a>
              <a className="m-btn m-btn-ghost" href="#journal"><span>The journal</span><Arrow/></a>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:18, paddingTop:16}}>
            <FactRow label="Founded" value="2021, Brooklyn"/>
            <FactRow label="Headcount" value="9 humans, no interns"/>
            <FactRow label="Roster" value="14 clients · always"/>
            <FactRow label="Languages" value="EN · ES · DE"/>
            <FactRow label="Engagements" value="3, 6, 12 month retainers"/>
            <FactRow label="Floor" value="$4,000 / month"/>
            <FactRow label="Sectors" value="SaaS · DTC · Fintech · Local services"/>
          </div>
        </div>
      </section>

      {/* SERVICES — quiet 3 column */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:32}}>§ III — What we make</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:48}}>
          {[
            ['SEO', 'Search', 'The boring engine that still pays for everything. Technical, content, links, monitoring. We do it like grown-ups.'],
            ['AEO', 'Answers', 'Pages structured to be lifted whole by ChatGPT, Perplexity, Claude and Gemini — with you cited.'],
            ['GEO', 'Generative', 'Your brand becomes an entity in the model\u2019s world. Knowledge graph, training surfaces, agentic browse.'],
          ].map(([abbr, kind, desc], i)=>(
            <div key={abbr} style={{display:'flex', flexDirection:'column', gap:10}}>
              <div className="m-mono" style={{color:'var(--mute)'}}>0{i+1} / {kind}</div>
              <div className="m-serif" style={{fontSize:120, lineHeight:0.85, color:'var(--orange)', letterSpacing:'-0.04em'}}>{abbr}</div>
              <hr className="m-rule"/>
              <p style={{fontSize:16, lineHeight:1.55, color:'var(--ink)', maxWidth:340, margin:0, opacity:0.85}}>{desc}</p>
              <a className="m-link m-mono" href="#services" style={{color:'var(--ink)', marginTop:6}}>Read more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE / TESTIMONIAL */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)', background:'var(--cream-2)'}}>
        <div style={{maxWidth:1200, margin:'0 auto'}}>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:24}}>§ IV — Said about us</div>
          <blockquote className="m-serif" style={{
            fontSize:60, lineHeight:1.05, margin:0, letterSpacing:'-0.02em', fontWeight:400,
          }}>
            &ldquo;Three months in, ChatGPT was recommending us by name when prospects asked it to compare. <em style={{color:'var(--orange)'}}>That had never happened.</em> We canceled two other agencies.&rdquo;
          </blockquote>
          <div style={{display:'flex', gap:16, alignItems:'center', marginTop:36}}>
            <div style={{width:48, height:48, borderRadius:'50%', background:'var(--ink)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--cream)', fontFamily:'var(--serif)', fontSize:22}}>J</div>
            <div>
              <div style={{fontSize:14, fontWeight:500}}>Jenna Olsen, Head of Growth</div>
              <div className="m-mono" style={{color:'var(--mute)'}}>Northpath · SaaS · client since &rsquo;24</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL preview */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:32}}>
          <div>
            <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>§ V — From the journal</div>
            <h2 className="m-serif" style={{fontSize:52, margin:0, fontWeight:400, letterSpacing:'-0.02em'}}>Field notes on getting cited.</h2>
          </div>
          <a href="#journal" className="m-link m-mono">Read all 41 →</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32, borderTop:'1px solid var(--rule)', paddingTop:32}}>
          {[
            ['MAY 14','How we got Perplexity to cite us in a category we don\u2019t rank for on Google.','8 min'],
            ['MAY 02','The actual schema you need for AEO, with the 9 properties most teams skip.','11 min'],
            ['APR 21','Reddit is the new authority signal. Here\u2019s how we seed without getting banned.','6 min'],
          ].map(([date, t, time])=>(
            <article key={t} style={{display:'flex', flexDirection:'column', gap:14}}>
              <ImgPh label="article hero" height={180}/>
              <div className="m-mono" style={{color:'var(--mute)', display:'flex', justifyContent:'space-between'}}>
                <span>{date}</span><span>{time} read</span>
              </div>
              <div className="m-serif" style={{fontSize:26, lineHeight:1.2, fontWeight:400}}>{t}</div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'140px 32px', borderBottom:'1px solid var(--rule)', textAlign:'center'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:24}}>§ VI — Take the next step</div>
        <h2 className="m-serif" style={{fontSize:140, margin:'0 0 32px', lineHeight:0.92, fontWeight:400, letterSpacing:'-0.035em'}}>
          Find out what the<br/>machines say about <em style={{color:'var(--orange)'}}>you</em>.
        </h2>
        <a href="#form" className="m-btn m-btn-orange" style={{padding:'18px 32px', fontSize:14}}>
          <span>Start the 6-question audit</span><Arrow/>
        </a>
        <div className="m-mono" style={{color:'var(--mute)', marginTop:20}}>Free · No call required · Results in 48 hours</div>
      </section>

      <footer style={{padding:'40px 32px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <MLockup size={13}/>
        <div className="m-mono" style={{color:'var(--mute)'}}>© 2026 · MASTERFUL · BROOKLYN, NY</div>
        <div className="m-mono" style={{color:'var(--mute)'}}>hello@masterful.studio</div>
      </footer>
    </div>
  );
}

function FactRow({label, value}){
  return (
    <div style={{display:'grid', gridTemplateColumns:'130px 1fr', gap:24, paddingBottom:14, borderBottom:'1px solid var(--rule)'}}>
      <span className="m-mono" style={{color:'var(--mute)'}}>{label}</span>
      <span className="m-serif" style={{fontSize:22, lineHeight:1.1}}>{value}</span>
    </div>
  );
}

Object.assign(window, { LandingV3 });
