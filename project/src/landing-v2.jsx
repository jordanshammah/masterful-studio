// LANDING V2 — "Giant Wordmark"
// Dark mode. Massive MASTERFUL wordmark fills the page. Brez energy: a numbered
// running list of what we do, oversized marquee tagline, and a confident table layout.

function LandingV2(){
  return (
    <div className="m-frame m-dark" style={{minHeight:'100%'}}>
      <MNav dark current="home" />

      {/* HERO — wall of wordmark */}
      <section style={{padding:'40px 32px 24px', position:'relative'}}>
        <div className="m-mono" style={{color:'var(--mute-on-dark)', display:'flex', justifyContent:'space-between', marginBottom:24}}>
          <span><PulseDot /> &nbsp; Index updated 04:12 EST · No. 00126</span>
          <span>SEO &nbsp;·&nbsp; AEO &nbsp;·&nbsp; GEO</span>
        </div>

        {/* The wordmark, super tight */}
        <div style={{
          fontFamily:'var(--sans)', fontWeight:700, color:'var(--orange)',
          fontSize:'clamp(180px, 22vw, 320px)',
          lineHeight:0.82, letterSpacing:'-0.045em',
          textTransform:'uppercase', margin:'8px 0 0',
        }}>
          MASTER<span style={{color:'var(--cream)'}}>FUL</span>
        </div>

        {/* Sub-row: tagline + meta */}
        <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:32, marginTop:32, paddingTop:24, borderTop:'1px solid var(--rule-light)'}}>
          <h2 className="m-serif" style={{margin:0, fontSize:54, lineHeight:1.05, color:'var(--cream)', fontWeight:400, letterSpacing:'-0.02em'}}>
            AI is the new search bar.<br/>
            <em style={{color:'var(--orange)'}}>You&rsquo;re not in it yet.</em>
          </h2>
          <div>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:8}}>The Studio</div>
            <p style={{fontSize:15, lineHeight:1.5, margin:0, color:'var(--cream)', opacity:0.85}}>
              A small search-visibility studio. We work with 14 brands at a time, no more. We answer Slack in under 4 hours. We bill flat, not by impressions.
            </p>
          </div>
          <div>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:8}}>Take action</div>
            <div style={{display:'flex', flexDirection:'column', gap:8}}>
              <a href="#form" className="m-btn m-btn-orange" style={{justifyContent:'space-between'}}>
                <span>Start a 6-question audit</span><Arrow/>
              </a>
              <a href="#work" className="m-btn" style={{justifyContent:'space-between', background:'transparent', color:'var(--cream)', borderColor:'var(--cream)'}}>
                <span>See selected work</span><Arrow/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — numbered running list */}
      <section style={{padding:'96px 32px 0', borderTop:'1px solid var(--rule-light)', marginTop:48}}>
        <div style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:48, marginBottom:48}}>
          <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>§ Services / 2026</div>
          <div className="m-serif" style={{fontSize:32, lineHeight:1.25, color:'var(--cream)', maxWidth:780, fontWeight:400}}>
            Three letters that decide whether the machine recommends you, or someone less qualified with a better head start.
          </div>
        </div>
        <div>
          {[
            ['01', 'SEO', 'Search Engine Optimization', 'Technical foundations, content velocity, links that still count. Old Google is 4.8B searches a day and still pays the bills.', ['Site architecture', 'Programmatic SEO', 'Editorial calendar', 'Link earning']],
            ['02', 'AEO', 'Answer Engine Optimization', 'We rewrite, restructure, and source-prove your pages so LLMs lift them whole — with your name still attached.', ['Schema & entities', 'Citation engineering', 'Prompt-mapped briefs', 'LLM crawl ops']],
            ['03', 'GEO', 'Generative Engine Optimization', 'Authority across every model surface — knowledge graphs, training data, retrieval indexes, agentic browse paths.', ['Brand entity work', 'Wiki & DBpedia', 'Reddit & UGC seeding', 'Agentic test suites']],
          ].map(([num, abbr, full, desc, items])=>(
            <div key={abbr} style={{
              display:'grid', gridTemplateColumns:'80px 240px 1fr 280px',
              gap:24, padding:'40px 0', borderTop:'1px solid var(--rule-light)',
              alignItems:'flex-start',
            }} className="m-row-hover">
              <div className="m-mono" style={{color:'var(--mute-on-dark)', paddingTop:14}}>{num}</div>
              <div>
                <div className="m-serif" style={{fontSize:72, color:'var(--orange)', lineHeight:0.95, letterSpacing:'-0.03em'}}>{abbr}</div>
                <div className="m-mono" style={{color:'var(--mute-on-dark)', marginTop:6}}>{full}</div>
              </div>
              <p style={{fontSize:18, lineHeight:1.5, margin:0, color:'var(--cream)', maxWidth:540}}>{desc}</p>
              <ul style={{listStyle:'none', padding:0, margin:0, color:'var(--cream)'}}>
                {items.map(it=>(
                  <li key={it} className="m-mono" style={{padding:'7px 0', borderBottom:'1px dashed var(--rule-light)', display:'flex', justifyContent:'space-between'}}>
                    <span>{it}</span><span style={{color:'var(--orange)'}}>+</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div style={{borderTop:'1px solid var(--rule-light)', height:0}}/>
        </div>
      </section>

      {/* MARQUEE STATEMENT */}
      <section style={{padding:'120px 0 24px', overflow:'hidden'}}>
        <div className="m-marquee-track m-serif" style={{
          fontSize:160, lineHeight:1, color:'var(--cream)', whiteSpace:'nowrap',
          letterSpacing:'-0.03em', fontStyle:'italic', fontWeight:400,
        }}>
          {[...Array(2)].map((_,k)=>(
            <span key={k}>&nbsp;Become the answer&nbsp;<span style={{color:'var(--orange)', fontStyle:'normal', fontFamily:'var(--sans)', fontWeight:700, fontSize:120}}>●</span></span>
          ))}
        </div>
      </section>

      {/* WORK TABLE */}
      <section style={{padding:'80px 32px', borderTop:'1px solid var(--rule-light)'}}>
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:32}}>
          <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>§ Index — Selected work</div>
          <a className="m-link m-mono" href="#work" style={{color:'var(--cream)'}}>All 36 case studies →</a>
        </div>
        <div className="m-mono" style={{color:'var(--mute-on-dark)', display:'grid', gridTemplateColumns:'40px 1fr 1fr 200px 160px 40px', gap:24, padding:'12px 0', borderBottom:'1px solid var(--rule-light)'}}>
          <span>#</span><span>Client</span><span>Scope</span><span>Sector</span><span>Result</span><span/>
        </div>
        {[
          ['01','Northpath','SEO + AEO retainer','SaaS · 11 mo','+418% AI citations'],
          ['02','Kindling Tea','AEO + content','DTC · 6 mo','+212% organic'],
          ['03','Two Counties','Local SEO','Services · 4 mo','+96 leads/mo'],
          ['04','Tally Hire','GEO + Reddit','B2B · 9 mo','#1 in 38 prompts'],
          ['05','Veld Capital','AEO sprint','Fintech · 7 mo','$1.4M ARR sourced'],
          ['06','Lumen Foundry','SEO rebuild','Agency · 14 mo','+8.1k MRR'],
        ].map(r=>(
          <div key={r[0]} style={{display:'grid', gridTemplateColumns:'40px 1fr 1fr 200px 160px 40px', gap:24, padding:'20px 0', borderBottom:'1px solid var(--rule-light)', color:'var(--cream)', alignItems:'center'}}>
            <span className="m-mono" style={{color:'var(--mute-on-dark)'}}>{r[0]}</span>
            <span style={{fontSize:18}}>{r[1]}</span>
            <span style={{fontSize:14, color:'var(--mute-on-dark)'}}>{r[2]}</span>
            <span className="m-mono">{r[3]}</span>
            <span className="m-mono" style={{color:'var(--orange)'}}>{r[4]}</span>
            <Arrow color="var(--cream)"/>
          </div>
        ))}
      </section>

      {/* FAQ-style two col */}
      <section style={{padding:'120px 32px', borderTop:'1px solid var(--rule-light)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:64}}>
          <div>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:24}}>§ Frequently received DMs</div>
            <h3 className="m-serif" style={{fontSize:52, margin:0, lineHeight:1.05, color:'var(--cream)', fontWeight:400}}>
              The four questions we get every week, answered without a sales call.
            </h3>
          </div>
          <div>
            {[
              ['Is SEO dead?','No, but the playbook is. Google clicks are down ~30% on informational queries. The work now is making sure that when somebody asks the model, your brand is in the answer.'],
              ['How long until results?','First citations within 30–60 days. Compounding around month 4. Anything faster is being sold to you.'],
              ['Do you do paid?','No. We have studio friends we trust for that. We focus on owned and earned.'],
              ['What size brand do you take?','We take indie operators with traction and Series A+ teams. Our floor is $4k/mo; our ceiling is &ldquo;we already have an in-house team and you make them better.&rdquo;'],
            ].map(([q,a])=>(
              <details key={q} open style={{borderTop:'1px solid var(--rule-light)', padding:'24px 0', color:'var(--cream)'}}>
                <summary style={{display:'flex', justifyContent:'space-between', listStyle:'none', cursor:'pointer'}}>
                  <span className="m-serif" style={{fontSize:28, fontWeight:400}}>{q}</span>
                  <span className="m-mono" style={{color:'var(--orange)'}}>+</span>
                </summary>
                <p style={{fontSize:16, lineHeight:1.6, color:'var(--mute-on-dark)', maxWidth:600, marginTop:14, marginBottom:0}}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{padding:'56px 32px', borderTop:'1px solid var(--rule-light)', background:'var(--orange)', color:'var(--cream)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:24}}>
        <div className="m-serif" style={{fontSize:56, lineHeight:1, margin:0, fontWeight:400}}>
          Ready to be cited?
        </div>
        <a href="#form" className="m-btn" style={{background:'var(--ink)', color:'var(--cream)', borderColor:'var(--ink)', padding:'18px 28px'}}>
          <span>Start the audit · 90 seconds</span><Arrow/>
        </a>
      </section>

      <footer style={{padding:'40px 32px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <MLockup color="var(--cream)" size={13}/>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>© 2026 · MADE WITH UNCOMFORTABLE EYE-CONTACT</div>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>hello@masterful.studio</div>
      </footer>
    </div>
  );
}

Object.assign(window, { LandingV2 });
