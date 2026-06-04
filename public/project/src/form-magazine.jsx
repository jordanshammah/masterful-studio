// MAGAZINE-STYLED FORM — restyled to feel like a print subscription card.
// Cream paper feel, classified-ad mono labels, large italic serif questions,
// folio-style step indicator, footnote hints.

function MFormShell({ step, total = 6, kicker, question, sub, children, ctaLabel='Continue', complete=false }){
  const pct = complete ? 100 : Math.round((step/total)*100);
  return (
    <div className="m-frame" style={{display:'flex', flexDirection:'column', height:'100%', background:'var(--cream)', position:'relative'}}>
      {/* PAPER TEXTURE OVERLAY */}
      <div style={{position:'absolute', inset:0, pointerEvents:'none', opacity:0.5,
        backgroundImage:'radial-gradient(rgba(14,14,14,0.04) 1px, transparent 1px)',
        backgroundSize:'4px 4px'}}/>

      {/* MASTHEAD */}
      <header style={{padding:'18px 40px 14px', borderBottom:'2px solid var(--ink)', display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', gap:24, position:'relative'}}>
        <div className="m-mono" style={{color:'var(--mute)', fontSize:10}}>EST. 2021 · BROOKLYN</div>
        <div style={{textAlign:'center'}}>
          <div className="m-serif" style={{fontSize:36, lineHeight:1, fontStyle:'italic', letterSpacing:'-0.02em', fontWeight:400}}>Masterful</div>
          <div className="m-mono" style={{fontSize:9, letterSpacing:'0.3em', color:'var(--mute)', marginTop:2}}>THE SUBSCRIBER CARD</div>
        </div>
        <div className="m-mono" style={{color:'var(--mute)', fontSize:10, textAlign:'right'}}>FORM No. {String(step).padStart(2,'0')} / {String(total).padStart(2,'0')}</div>
      </header>

      {/* PROGRESS BAR */}
      <div style={{height:2, background:'var(--cream-2)'}}>
        <div style={{height:'100%', width:`${pct}%`, background:'var(--orange)', transition:'width .5s cubic-bezier(.6,.1,.3,1)'}}/>
      </div>

      {/* BODY — two pages of a magazine */}
      <div style={{flex:1, display:'grid', gridTemplateColumns:'0.85fr 1.4fr', position:'relative'}}>
        {/* LEFT PAGE — editorial column */}
        <aside style={{padding:'40px 36px', borderRight:'1px solid var(--ink)', display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative'}}>
          <div>
            <div className="m-mono" style={{color:'var(--orange)', marginBottom:14, fontSize:10}}>{kicker || `STEP ${String(step).padStart(2,'0')} OF 06`}</div>
            <div className="m-serif" style={{fontSize:30, lineHeight:1.12, letterSpacing:'-0.012em', marginBottom:18, fontWeight:400}}>
              {complete
                ? <>Thank you for <em style={{color:'var(--orange)'}}>subscribing</em> to honesty about your search visibility.</>
                : <>A six question intake, designed to be answered in <em style={{color:'var(--orange)'}}>ninety seconds</em>.</>}
            </div>
            <hr className="m-rule" style={{margin:'18px 0'}}/>
            <p style={{fontSize:13, lineHeight:1.55, color:'var(--mute)', margin:0}}>
              Filled out in good faith. Reviewed by a human. Replied to within 48 hours with a free 18-page report.
            </p>
          </div>

          {/* big serif folio number */}
          <div style={{textAlign:'right'}}>
            <div className="m-serif" style={{fontSize:260, lineHeight:0.78, color:'var(--orange)', letterSpacing:'-0.05em', fontStyle:'italic', fontWeight:400}}>
              {complete ? '✓' : String(step).padStart(2,'0')}
            </div>
            <div className="m-mono" style={{color:'var(--mute)', marginTop:2, fontSize:10}}>of {String(total).padStart(2,'0')}</div>
          </div>

          <div className="m-mono" style={{color:'var(--mute)', fontSize:10, display:'flex', justifyContent:'space-between', borderTop:'1px solid var(--rule)', paddingTop:12}}>
            <span>Avg. completion · 94s</span>
            <span>Reply ≤ 48hr</span>
          </div>
        </aside>

        {/* RIGHT PAGE — the question */}
        <main style={{padding:'56px 64px', display:'flex', flexDirection:'column', justifyContent:'center', gap:32, maxWidth:780, position:'relative'}}>
          <div className="m-mono" style={{color:'var(--mute)', display:'flex', gap:16, fontSize:10}}>
            <span>QUESTION No.{String(step).padStart(2,'0')}</span>
            <span style={{flex:1, borderTop:'1px dashed var(--rule)', height:1, marginTop:8}}/>
            <span>{complete ? 'submitted' : 'press ↵ to continue'}</span>
          </div>

          <h2 className="m-serif" style={{fontSize:68, lineHeight:0.98, margin:0, letterSpacing:'-0.028em', fontWeight:400, textWrap:'balance'}}>
            {question}
          </h2>

          {sub && (
            <p style={{fontSize:16, lineHeight:1.55, color:'var(--mute)', margin:0, maxWidth:600}}>
              <sup style={{color:'var(--orange)'}}>*</sup> &nbsp;{sub}
            </p>
          )}

          <div style={{display:'flex', flexDirection:'column', gap:14, marginTop:8}}>
            {children}
          </div>

          <div style={{display:'flex', alignItems:'center', gap:20, marginTop:18, paddingTop:18, borderTop:'1px solid var(--rule)'}}>
            {step > 1 && !complete && (
              <a href={`#step-${step-1}`} className="m-mono m-link" style={{color:'var(--ink)', fontSize:11}}>← Previous question</a>
            )}
            <div style={{flex:1}}/>
            <button className="m-btn m-btn-orange" style={{padding:'15px 22px', fontSize:12}}>
              <span>{ctaLabel}</span><Arrow/>
            </button>
          </div>
        </main>

        {/* center fold line */}
        <div style={{position:'absolute', left:'calc((0.85 / 2.25)*100%)', top:0, bottom:0, width:1, background:'rgba(0,0,0,0.08)', boxShadow:'1px 0 0 rgba(255,255,255,0.4)', pointerEvents:'none'}}/>
      </div>

      <footer style={{padding:'10px 40px', borderTop:'1px solid var(--ink)', display:'flex', justifyContent:'space-between'}} className="m-mono" >
        <span style={{color:'var(--mute)', fontSize:10}}>masterful.studio · the subscriber card</span>
        <span style={{color:'var(--mute)', fontSize:10}}>{complete ? 'card filed ✓' : `${pct}% complete`}</span>
        <span style={{color:'var(--mute)', fontSize:10}}>vol. xii · pp. {String(step).padStart(2,'0')}</span>
      </footer>
    </div>
  );
}

// Magazine-styled inputs ── thin rules under serif type
function MInput({ placeholder, defaultValue='' }){
  const [v, setV] = React.useState(defaultValue);
  return (
    <div style={{display:'flex', alignItems:'baseline', gap:14, borderBottom:'1.5px solid var(--ink)', paddingBottom:8}}>
      <input
        value={v} onChange={e=>setV(e.target.value)} placeholder={placeholder}
        style={{
          flex:1, background:'transparent', border:0, outline:'none',
          fontFamily:'var(--serif)', fontSize:32, fontWeight:400,
          color:'var(--ink)', padding:'8px 0', letterSpacing:'-0.01em',
        }}
      />
      <span className="m-mono" style={{color:'var(--mute)', fontSize:10}}>—</span>
    </div>
  );
}

function MLabel({ children }){
  return <div className="m-mono" style={{color:'var(--mute)', fontSize:10, marginBottom:2}}>{children}</div>;
}

function MChoiceList({ options, multi=false }){
  const [sel, setSel] = React.useState(new Set([options[1] || options[0]]));
  return (
    <div style={{display:'flex', flexDirection:'column', gap:0}}>
      {options.map((o, i)=>{
        const isOn = sel.has(o);
        return (
          <button key={o} onClick={()=> setSel(prev=>{
            const next = new Set(multi ? prev : []);
            if (prev.has(o)) next.delete(o); else next.add(o);
            return next;
          })} style={{
            display:'grid', gridTemplateColumns:'28px 1fr 80px', gap:16, alignItems:'center',
            padding:'16px 4px', borderTop:'1px solid var(--rule)',
            background:'transparent', border:0,
            borderBottom: i===options.length-1?'1px solid var(--rule)':'none',
            cursor:'pointer', textAlign:'left', color:'var(--ink)',
            fontFamily:'var(--serif)', fontSize:22, lineHeight:1.2, fontWeight:400,
          }}>
            <span className="m-mono" style={{color: isOn?'var(--orange)':'var(--mute)', fontSize:10}}>{String.fromCharCode(65+i)}.</span>
            <span style={{color: isOn?'var(--ink)':'var(--ink)', fontStyle: isOn?'italic':'normal'}}>{o}</span>
            <span className="m-mono" style={{color: isOn?'var(--orange)':'var(--mute)', textAlign:'right', fontSize:10}}>
              {isOn ? '◉ MARKED' : '○'}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Welcome
function MFormStep0(){
  return (
    <div className="m-frame" style={{display:'flex', flexDirection:'column', height:'100%', background:'var(--cream)', position:'relative'}}>
      <div style={{position:'absolute', inset:0, pointerEvents:'none', opacity:0.5,
        backgroundImage:'radial-gradient(rgba(14,14,14,0.04) 1px, transparent 1px)',
        backgroundSize:'4px 4px'}}/>
      <header style={{padding:'18px 40px 14px', borderBottom:'2px solid var(--ink)', display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', gap:24}}>
        <div className="m-mono" style={{color:'var(--mute)', fontSize:10}}>EST. 2021 · BROOKLYN</div>
        <div style={{textAlign:'center'}}>
          <div className="m-serif" style={{fontSize:36, lineHeight:1, fontStyle:'italic', fontWeight:400}}>Masterful</div>
          <div className="m-mono" style={{fontSize:9, letterSpacing:'0.3em', color:'var(--mute)', marginTop:2}}>THE SUBSCRIBER CARD</div>
        </div>
        <div className="m-mono" style={{color:'var(--mute)', fontSize:10, textAlign:'right'}}>FREE · 6 QUESTIONS</div>
      </header>

      <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'64px 32px', textAlign:'center', position:'relative'}}>
        <div className="m-mono" style={{color:'var(--orange)', marginBottom:18, letterSpacing:'0.22em', fontSize:11}}>YOU&rsquo;VE OPENED THE CARD.</div>
        <h1 className="m-serif" style={{fontSize:108, lineHeight:0.94, margin:'0 0 24px', letterSpacing:'-0.032em', fontWeight:400, maxWidth:1100}}>
          Find out what the<br/>machines say about <em style={{color:'var(--orange)'}}>you</em>.
        </h1>
        <p style={{fontSize:18, lineHeight:1.55, color:'var(--mute)', maxWidth:620, margin:'0 0 36px'}}>
          Six quick questions. <em className="m-serif" style={{fontStyle:'italic'}}>Ninety seconds.</em> A free 18-page report — what models say about your brand today, what we&rsquo;d change first, and what we think it&rsquo;d be worth.
        </p>
        <div style={{display:'flex', gap:14, alignItems:'center'}}>
          <a href="#step-1" className="m-btn m-btn-orange" style={{padding:'18px 28px'}}>
            <span>Let&rsquo;s begin</span><Arrow/>
          </a>
          <span className="m-mono" style={{color:'var(--mute)', fontSize:11}}>or press ↵ Enter</span>
        </div>
        <div style={{display:'flex', gap:32, marginTop:48}}>
          {['No login','No spam','No sales calls'].map(t=>(
            <span key={t} className="m-mono" style={{color:'var(--mute)', fontSize:10, display:'flex', gap:8, alignItems:'center'}}>
              <span style={{color:'var(--orange)'}}>●</span>{t}
            </span>
          ))}
        </div>
      </div>

      <footer style={{padding:'10px 40px', borderTop:'1px solid var(--ink)', display:'flex', justifyContent:'space-between'}} className="m-mono">
        <span style={{color:'var(--mute)', fontSize:10}}>masterful.studio · the subscriber card</span>
        <span style={{color:'var(--mute)', fontSize:10}}>vol. xii · cover</span>
      </footer>
    </div>
  );
}

function MFormStep1(){
  return (
    <MFormShell step={1} kicker="ABOUT YOU · STEP 01"
      question={<>First, who are <em style={{color:'var(--orange)'}}>we talking to?</em></>}
      sub="We promise we won't send fourteen follow-ups. One reply, from a human, within 48 hours.">
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:28}}>
        <div><MLabel>Full name</MLabel><MInput placeholder="Avery Chen"/></div>
        <div><MLabel>Role at the company</MLabel><MInput placeholder="Founder / Head of Growth"/></div>
        <div><MLabel>Email address</MLabel><MInput placeholder="avery@brand.com"/></div>
        <div><MLabel>Phone (optional)</MLabel><MInput placeholder="+1 (000) 000-0000"/></div>
      </div>
    </MFormShell>
  );
}

function MFormStep2(){
  return (
    <MFormShell step={2} kicker="THE BUSINESS · STEP 02"
      question={<>And what do you <em style={{color:'var(--orange)'}}>actually do?</em></>}
      sub="One line is fine. We just want enough to spin up the audit before we talk.">
      <div><MLabel>Business / brand name</MLabel><MInput placeholder="Northpath Labs" defaultValue="Northpath Labs"/></div>
      <div><MLabel>Website URL</MLabel><MInput placeholder="https://northpath.io" defaultValue="https://northpath.io"/></div>
      <div><MLabel>Niche / category</MLabel><MInput placeholder="AI sales coaching for B2B teams"/></div>
    </MFormShell>
  );
}

function MFormStep3(){
  return (
    <MFormShell step={3} kicker="THE NUMBERS · STEP 03"
      question={<>How much revenue is the business <em style={{color:'var(--orange)'}}>doing right now?</em></>}
      sub="Approximate is fine. We don't share this. The playbook for $20k/mo is very different from the playbook for $2M/mo.">
      <MChoiceList options={[
        'Pre-revenue / just launching',
        '$0–10k / month',
        '$10k–50k / month',
        '$50k–250k / month',
        '$250k–1M / month',
        '$1M+ / month',
      ]}/>
    </MFormShell>
  );
}

function MFormStep4(){
  return (
    <MFormShell step={4} kicker="THE BUDGET · STEP 04"
      question={<>What&rsquo;s the budget you can put toward visibility, <em style={{color:'var(--orange)'}}>monthly?</em></>}
      sub="Our floor is $4k/mo so we can do real work. If you're below, we'll happily send a self-serve checklist — no shame.">
      <MChoiceList options={[
        'Under $4k — send me the checklist',
        '$4k–8k / month',
        '$8k–15k / month',
        '$15k–30k / month',
        '$30k+ / month',
        'Project-based, let\u2019s talk',
      ]}/>
    </MFormShell>
  );
}

function MFormStep5(){
  return (
    <MFormShell step={5} kicker="GOALS · STEP 05"
      question={<>What does <em style={{color:'var(--orange)'}}>winning</em> look like in 6 months?</>}
      sub="Pick everything that applies. We'll prioritise accordingly.">
      <MChoiceList multi options={[
        'Show up in ChatGPT & Perplexity answers',
        'Rank #1 on Google for our core terms',
        'More qualified pipeline from organic',
        'Become the default brand in our category',
        'Recover from a Google algorithm hit',
        'Other — I\u2019ll tell you on a call',
      ]}/>
    </MFormShell>
  );
}

function MFormStep6(){
  return (
    <MFormShell step={6} kicker="LAST ONE · STEP 06"
      question={<>Last one — how did you <em style={{color:'var(--orange)'}}>find us?</em></>}
      sub="Genuinely curious. Helps us spend time on the channels that work."
      ctaLabel="Mail the card">
      <MChoiceList options={[
        'A friend / colleague',
        'Twitter / X',
        'LinkedIn',
        'Podcast or YouTube',
        'Our journal / blog post',
        'ChatGPT or Perplexity told you',
        'Google search',
        'Don\u2019t remember',
      ]}/>
    </MFormShell>
  );
}

function MFormDone(){
  return (
    <MFormShell step={6} complete kicker="✓ CARD FILED"
      question={<>Card filed. We&rsquo;re <em style={{color:'var(--orange)'}}>on it.</em></>}
      sub="Someone on the team will reply within 48 hours with your visibility report and what we'd do first. No automated drips."
      ctaLabel="Back to the homepage">
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, borderTop:'1px solid var(--rule)', marginTop:8}}>
        {[
          ['I.', 'We score you in 6 LLMs'],
          ['II.', 'We map your top 50 prompts'],
          ['III.', 'We send a free report + plan'],
        ].map(([n,t], i, a)=>(
          <div key={n} style={{padding:'18px 22px', borderRight: i<a.length-1?'1px solid var(--rule)':'none', borderBottom:'1px solid var(--rule)'}}>
            <div className="m-mono" style={{color:'var(--orange)', fontSize:11, marginBottom:6}}>STEP {n}</div>
            <div className="m-serif" style={{fontSize:20, lineHeight:1.2, fontWeight:400}}>{t}</div>
          </div>
        ))}
      </div>
    </MFormShell>
  );
}

Object.assign(window, {
  MFormStep0, MFormStep1, MFormStep2, MFormStep3, MFormStep4, MFormStep5, MFormStep6, MFormDone
});
