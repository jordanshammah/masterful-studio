// LANDING V4 — "Visibility Terminal"
// Mono-heavy, status-dashboard energy. Live-feeling, irreverent.
// Cream base with charcoal data panels and orange signals.

function LandingV4(){
  const [tick, setTick] = React.useState(0);
  React.useEffect(()=>{ const i = setInterval(()=>setTick(t=>t+1), 1500); return ()=>clearInterval(i); }, []);

  return (
    <div className="m-frame" style={{minHeight:'100%'}}>
      {/* Sticky monobar */}
      <div className="m-mono" style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding:'10px 24px', borderBottom:'1px solid var(--rule)', background:'var(--ink)', color:'var(--cream)',
        fontSize:10,
      }}>
        <span><PulseDot />&nbsp;&nbsp; SYS · LIVE</span>
        <span>04:12:{(tick*7%60).toString().padStart(2,'0')} EST · NYC · 51°F · WED 14 MAY 2026</span>
        <span>BUILD 26.4.1 · OPERATORS ONLINE · 9/9</span>
      </div>
      <MNav current="home"/>

      {/* HERO — split status console */}
      <section style={{padding:'40px 32px 56px', display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:32, borderBottom:'1px solid var(--rule)'}}>
        <div>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:24, display:'flex', gap:14, alignItems:'center'}}>
            <span style={{color:'var(--orange)'}}>$</span> masterful --check yourself.com<span className="m-caret"/>
          </div>
          <h1 className="m-serif" style={{
            fontSize:128, margin:'0 0 24px', lineHeight:0.9, letterSpacing:'-0.03em', fontWeight:400,
          }}>
            Your AI <em style={{color:'var(--orange)'}}>visibility</em><br/>
            score is, uh,<br/>
            <span style={{color:'var(--orange)'}}>27</span>/100.
          </h1>
          <p style={{fontSize:20, lineHeight:1.5, color:'var(--mute)', maxWidth:580, margin:'0 0 28px'}}>
            That&rsquo;s how often ChatGPT, Perplexity, Gemini and Claude mention you when asked what you sell. We get it to 80+ in nine months, on average, or we don&rsquo;t charge for month ten.
          </p>
          <div style={{display:'flex', gap:12}}>
            <a href="#form" className="m-btn m-btn-orange"><span>Score my brand</span><Arrow/></a>
            <a href="#work" className="m-btn m-btn-ghost"><span>$ ls clients/</span><Arrow/></a>
          </div>
        </div>

        {/* Right: terminal */}
        <div style={{
          background:'var(--ink)', color:'var(--cream)', borderRadius:8,
          padding:24, fontFamily:'var(--mono)', fontSize:12, lineHeight:1.55,
          display:'flex', flexDirection:'column', gap:6,
          boxShadow:'0 24px 60px rgba(14,14,14,0.15)'
        }}>
          <div style={{display:'flex', alignItems:'center', gap:8, color:'var(--mute-on-dark)', marginBottom:8}}>
            <span style={{width:10, height:10, borderRadius:'50%', background:'#ff5f57'}}/>
            <span style={{width:10, height:10, borderRadius:'50%', background:'#febc2e'}}/>
            <span style={{width:10, height:10, borderRadius:'50%', background:'#28c840'}}/>
            <span style={{marginLeft:16}}>masterful@studio: ~/audit-report</span>
          </div>
          <div><span style={{color:'var(--orange)'}}>›</span> running query: <em style={{color:'var(--cream)'}}>"best [your industry] tool 2026"</em></div>
          <div style={{color:'var(--mute-on-dark)'}}>  [✓] querying ChatGPT 4o ............................. cited 0 / 10</div>
          <div style={{color:'var(--mute-on-dark)'}}>  [✓] querying Perplexity sonar-pro ................... cited 1 / 10</div>
          <div style={{color:'var(--mute-on-dark)'}}>  [✓] querying Gemini 2.5 ............................. cited 0 / 10</div>
          <div style={{color:'var(--mute-on-dark)'}}>  [✓] querying Claude Sonnet 4.5 ...................... cited 1 / 10</div>
          <div style={{color:'var(--mute-on-dark)'}}>  [✓] querying Google AI Overview ..................... cited 0 / 10</div>
          <div style={{color:'#ff7a59'}}>  [!] competitor "biggerlogo.io" cited in 38 / 50</div>
          <div style={{color:'#ff7a59'}}>  [!] schema score: 12 / 100 (missing 9 critical properties)</div>
          <div style={{color:'#ff7a59'}}>  [!] crawl freq: 1 every 47 days (target ≤ 7d)</div>
          <div style={{marginTop:8, color:'var(--orange)'}}>──── recommended fix path ────</div>
          <div style={{color:'var(--cream)'}}>  → AEO sprint, 6 wk. Entity work + schema + 14 anchor pages.</div>
          <div style={{color:'var(--cream)'}}>  → est. visibility score in 90 days: <span style={{color:'var(--orange)'}}>71 / 100</span></div>
          <div style={{color:'var(--mute-on-dark)', marginTop:8}}>$ <span className="m-caret"/></div>
        </div>
      </section>

      {/* KPI ROW */}
      <section style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', borderBottom:'1px solid var(--rule)'}}>
        {[
          ['+312%','Avg. AI citation lift, 9 mo'],
          ['14','Clients on roster · max'],
          ['$0','Cost of the 6-q audit'],
          ['48 h','Audit turnaround SLA'],
        ].map(([n,l], i, a)=>(
          <div key={l} style={{padding:'40px 28px', borderRight: i<a.length-1?'1px solid var(--rule)':'none'}}>
            <div className="m-serif" style={{fontSize:96, lineHeight:0.92, color:'var(--orange)', letterSpacing:'-0.04em'}}>{n}</div>
            <div className="m-mono" style={{color:'var(--mute)', marginTop:14}}>{l}</div>
          </div>
        ))}
      </section>

      {/* PROBLEM + 3-pillar grid */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:32}}>§ 01 — Diagnosis</div>
        <h2 className="m-serif" style={{fontSize:96, margin:'0 0 24px', lineHeight:0.95, fontWeight:400, letterSpacing:'-0.03em', maxWidth:1200}}>
          Three problems. One studio. <em style={{color:'var(--orange)'}}>No retainers under three months.</em>
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, marginTop:48}}>
          {[
            ['SEO','01','Google is bleeding clicks but still owns the wallet share. We fix the boring foundations first, because models read your site too.', ['Tech audit','Schema rebuild','Content velocity','Link earning']],
            ['AEO','02','LLMs cite the pages they can parse, source-prove, and trust. We rebuild yours so the answer engine lifts them whole.', ['Prompt-mapped briefs','Source citations','Entity disambiguation','LLM crawl ops']],
            ['GEO','03','Become a recognized entity in every model\u2019s world: knowledge graphs, training corpora, retrieval indexes, agentic browsing.', ['Brand entity work','Wiki & DBpedia','Reddit seeding','Agentic test suites']],
          ].map(([abbr, num, desc, items])=>(
            <div key={abbr} style={{
              border:'1px solid var(--rule)', borderRadius:4, padding:'28px 24px 24px',
              display:'flex', flexDirection:'column', gap:16, background:'rgba(0,0,0,0.02)'
            }}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="m-mono" style={{color:'var(--mute)'}}>{num}</span>
                <span className="m-mono" style={{color:'var(--orange)'}}>● PILLAR</span>
              </div>
              <div className="m-serif" style={{fontSize:96, lineHeight:0.9, color:'var(--ink)', letterSpacing:'-0.04em'}}>{abbr}</div>
              <p style={{fontSize:14, lineHeight:1.55, color:'var(--mute)', margin:'0 0 6px'}}>{desc}</p>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:6}}>
                {items.map(it=>(
                  <li key={it} className="m-mono" style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderTop:'1px solid var(--rule)', color:'var(--ink)'}}>
                    <span>{it}</span><span style={{color:'var(--orange)'}}>↗</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MODEL SCOREBOARD */}
      <section style={{padding:'100px 32px', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>§ 02 — Live citation index, our clients</div>
        <h2 className="m-serif" style={{fontSize:64, margin:'0 0 32px', fontWeight:400, letterSpacing:'-0.02em'}}>The scoreboard.</h2>
        <div style={{display:'grid', gridTemplateColumns:'180px 1fr 60px', gap:24, padding:'12px 0', borderBottom:'1px solid var(--rule)'}}>
          <span className="m-mono" style={{color:'var(--mute)'}}>Engine</span>
          <span className="m-mono" style={{color:'var(--mute)'}}>Citations / 100 prompts · pre → post</span>
          <span className="m-mono" style={{color:'var(--mute)', textAlign:'right'}}>Δ</span>
        </div>
        {[
          ['ChatGPT 4o', 11, 78],
          ['Perplexity Sonar', 18, 86],
          ['Gemini 2.5', 7, 64],
          ['Claude 4.5', 14, 71],
          ['Google AI Overview', 4, 52],
          ['Copilot', 9, 58],
        ].map(([name, a, b])=>(
          <div key={name} style={{display:'grid', gridTemplateColumns:'180px 1fr 60px', gap:24, padding:'18px 0', borderBottom:'1px solid var(--rule)', alignItems:'center'}}>
            <span style={{fontSize:14, fontWeight:500}}>{name}</span>
            <div style={{position:'relative', height:14, background:'rgba(0,0,0,0.05)', borderRadius:999}}>
              <div style={{position:'absolute', left:0, top:0, height:'100%', width:`${a}%`, background:'var(--mute)', borderRadius:999}}/>
              <div style={{position:'absolute', left:`${a}%`, top:0, height:'100%', width:`${b-a}%`, background:'var(--orange)', borderRadius:999}}/>
              <span className="m-mono" style={{position:'absolute', left:`${a}%`, top:-22, color:'var(--mute)'}}>{a}</span>
              <span className="m-mono" style={{position:'absolute', left:`${b}%`, top:-22, color:'var(--orange)'}}>{b}</span>
            </div>
            <span className="m-mono" style={{color:'var(--orange)', textAlign:'right'}}>+{b-a}</span>
          </div>
        ))}
      </section>

      {/* PROCESS LADDER */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--rule)', background:'var(--ink)', color:'var(--cream)'}}>
        <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:16}}>§ 03 — The 4A method</div>
        <h2 className="m-serif" style={{fontSize:88, margin:'0 0 48px', lineHeight:0.95, fontWeight:400, letterSpacing:'-0.025em', color:'var(--cream)'}}>
          Four moves.<br/><em style={{color:'var(--orange)'}}>No mystery.</em>
        </h2>
        <div style={{display:'grid', gridTemplateColumns:'80px 200px 1fr 200px', gap:24, color:'var(--cream)'}}>
          {[
            ['01','Audit','Models tested. Competitors mapped. Gaps quantified. You get the report whether you sign or not.','Wk 1–2'],
            ['02','Architect','Topical maps, schema, entity graph, content briefs. Built for crawl + retrieval + humans.','Wk 3–6'],
            ['03','Author','Pages that LLMs lift verbatim and humans read to the end. We write or we direct your team.','Wk 4–24'],
            ['04','Amplify','Citation engineering, Reddit, podcasts, the boring backlinks. Authority compounds.','Ongoing'],
          ].map(r=>(
            <React.Fragment key={r[0]}>
              <div className="m-mono" style={{color:'var(--orange)', padding:'24px 0', borderTop:'1px solid var(--rule-light)'}}>{r[0]}</div>
              <div className="m-serif" style={{fontSize:42, padding:'24px 0', borderTop:'1px solid var(--rule-light)'}}>{r[1]}</div>
              <div style={{fontSize:16, lineHeight:1.5, padding:'30px 0', borderTop:'1px solid var(--rule-light)', color:'var(--mute-on-dark)'}}>{r[2]}</div>
              <div className="m-mono" style={{color:'var(--mute-on-dark)', padding:'30px 0', borderTop:'1px solid var(--rule-light)'}}>{r[3]}</div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'120px 32px', textAlign:'center', borderBottom:'1px solid var(--rule)'}}>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:14}}>$ ./start-audit.sh</div>
        <h2 className="m-serif" style={{fontSize:120, margin:'0 0 24px', lineHeight:0.9, fontWeight:400, letterSpacing:'-0.03em'}}>
          What&rsquo;s your <em style={{color:'var(--orange)'}}>real</em> score?
        </h2>
        <p style={{fontSize:18, color:'var(--mute)', margin:'0 auto 32px', maxWidth:560, lineHeight:1.5}}>
          Six questions, ~90 seconds. We run your brand against the six biggest LLMs and send back a free report.
        </p>
        <a href="#form" className="m-btn m-btn-orange" style={{padding:'18px 32px'}}><span>Run the audit</span><Arrow/></a>
      </section>

      <footer style={{padding:'40px 32px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <MLockup size={13}/>
        <div className="m-mono" style={{color:'var(--mute)'}}>masterful.studio · v26.4.1 · all systems nominal</div>
        <div className="m-mono" style={{color:'var(--mute)'}}>hello@masterful.studio</div>
      </footer>
    </div>
  );
}

Object.assign(window, { LandingV4 });
