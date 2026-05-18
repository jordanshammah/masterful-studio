// MULTI-STEP FORM — one question per page, brez-style.
// Each step is its own artboard. Real interactive state: user can type and
// click "Continue" to advance within a single artboard (since each artboard
// shows ALL the chrome, the focused one is interactive end-to-end as a mini
// prototype). We also render the static screens for canvas presentation.

const FORM_TOTAL = 6;

function FormShell({ step, total = FORM_TOTAL, kicker, question, sub, children, ctaLabel = 'Continue', onBack, onNext, hint, complete = false }){
  const pct = complete ? 100 : Math.round((step / total) * 100);
  return (
    <div className="m-frame" style={{display:'flex', flexDirection:'column', height:'100%'}}>
      {/* Top bar: logo + step indicator + close */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'20px 32px', borderBottom:'1px solid var(--rule)',
      }}>
        <MLockup size={13}/>
        <div className="m-mono" style={{color:'var(--mute)'}}>
          {complete ? 'Complete' : `Question ${step} of ${total}`}
        </div>
        <a href="#close" className="m-mono m-link" style={{color:'var(--ink)'}}>Close ✕</a>
      </div>
      {/* Progress bar */}
      <div style={{height:3, background:'var(--cream-2)'}}>
        <div style={{width:`${pct}%`, height:'100%', background:'var(--orange)', transition:'width .5s cubic-bezier(.6,.1,.3,1)'}}/>
      </div>

      {/* Body */}
      <div style={{
        flex:1, display:'grid', gridTemplateColumns:'1fr 1fr',
        position:'relative', overflow:'hidden',
      }}>
        {/* Big serif "M" art on the left, very faint, decorative */}
        <div style={{position:'relative', padding:'56px 48px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRight:'1px solid var(--rule)'}}>
          <div>
            <div className="m-mono" style={{color:'var(--orange)', marginBottom:10}}>{kicker || 'AUDIT · STEP ' + String(step).padStart(2,'0')}</div>
            <div className="m-mono" style={{color:'var(--mute)'}}>{complete ? 'You\u2019re done.' : 'A six question intake.'}</div>
          </div>

          <svg viewBox="0 0 100 100" style={{width:'80%', alignSelf:'center', opacity:0.94}}>
            <path d="M10 92 V14 H26 L50 56 L74 14 H90 V92 H74 V40 L56 70 H44 L26 40 V92 Z" fill="var(--orange)"/>
          </svg>

          <div className="m-mono" style={{color:'var(--mute)', display:'flex', justifyContent:'space-between'}}>
            <span>Avg. completion · 94 seconds</span>
            <span>Reply within 48 hrs</span>
          </div>
        </div>

        {/* Right: the actual question */}
        <div style={{padding:'56px 64px', display:'flex', flexDirection:'column', justifyContent:'center', gap:32, maxWidth:680}}>
          <div className="m-mono" style={{color:'var(--mute)'}}>{complete ? '✓ SUBMITTED' : `0${step} / 0${total}`}</div>
          <h2 className="m-serif" style={{fontSize:64, lineHeight:1.02, margin:0, letterSpacing:'-0.025em', fontWeight:400}}>
            {question}
          </h2>
          {sub && <p style={{fontSize:17, lineHeight:1.5, color:'var(--mute)', margin:0, maxWidth:560}}>{sub}</p>}
          <div style={{display:'flex', flexDirection:'column', gap:16}}>
            {children}
          </div>
          <div style={{display:'flex', alignItems:'center', gap:20, marginTop:8}}>
            {onBack && (
              <button onClick={onBack} className="m-mono m-link" style={{background:'none', border:0, color:'var(--ink)', cursor:'pointer', padding:0}}>← Back</button>
            )}
            <button onClick={onNext} className="m-btn m-btn-orange" style={{padding:'16px 24px', fontSize:13}}>
              <span>{ctaLabel}</span><Arrow/>
            </button>
            <span className="m-mono" style={{color:'var(--mute)'}}>{hint || 'press ↵ Enter'}</span>
          </div>
        </div>
      </div>

      <footer style={{padding:'14px 32px', borderTop:'1px solid var(--rule)', display:'flex', justifyContent:'space-between'}} className="m-mono">
        <span style={{color:'var(--mute)'}}>masterful.studio / audit</span>
        <span style={{color:'var(--mute)'}}>Replies in &lt; 48 hrs · No sales calls unless you ask</span>
      </footer>
    </div>
  );
}

// Input atoms
function TextInput({ placeholder, defaultValue='' }){
  const [v, setV] = React.useState(defaultValue);
  return (
    <input
      value={v} onChange={e=>setV(e.target.value)} placeholder={placeholder}
      className="m-serif"
      style={{
        fontSize:34, fontFamily:'var(--serif)', fontWeight:400,
        background:'transparent', border:0, borderBottom:'1.5px solid var(--ink)',
        padding:'10px 0', outline:'none', color:'var(--ink)', width:'100%',
        letterSpacing:'-0.01em',
      }}
    />
  );
}

function ChoiceList({ options, multi = false }){
  const [sel, setSel] = React.useState(new Set([options[1] || options[0]]));
  const toggle = (o) => {
    setSel(prev => {
      const next = new Set(multi ? prev : []);
      if (prev.has(o)) next.delete(o); else next.add(o);
      return next;
    });
  };
  return (
    <div style={{display:'flex', flexDirection:'column', gap:8}}>
      {options.map((o, i)=> {
        const isOn = sel.has(o);
        return (
          <button key={o} onClick={()=>toggle(o)} style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding:'18px 22px', borderRadius:6,
            border:`1.5px solid ${isOn ? 'var(--orange)' : 'var(--rule)'}`,
            background: isOn ? 'rgba(196,80,26,0.06)' : 'transparent',
            cursor:'pointer', font:'500 17px/1.2 var(--sans)', color:'var(--ink)',
            textAlign:'left', transition:'all .15s'
          }}>
            <span style={{display:'flex', gap:14, alignItems:'center'}}>
              <span className="m-mono" style={{color:'var(--mute)'}}>{String.fromCharCode(65+i)}</span>
              <span>{o}</span>
            </span>
            <span className="m-mono" style={{color: isOn ? 'var(--orange)' : 'var(--mute)'}}>
              {isOn ? '● SELECTED' : '○'}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Each step as a stand-alone screen
function FormStep0(){
  return (
    <div className="m-frame" style={{display:'flex', flexDirection:'column', height:'100%'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 32px', borderBottom:'1px solid var(--rule)'}}>
        <MLockup size={13}/>
        <div className="m-mono" style={{color:'var(--mute)'}}>Free visibility audit</div>
        <a href="#close" className="m-mono m-link" style={{color:'var(--ink)'}}>Close ✕</a>
      </div>
      <div style={{height:3, background:'var(--cream-2)'}}/>
      <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'64px 32px', position:'relative', textAlign:'center'}}>
        <svg viewBox="0 0 100 100" width="120" height="120" style={{marginBottom:24}}>
          <path d="M10 92 V14 H26 L50 56 L74 14 H90 V92 H74 V40 L56 70 H44 L26 40 V92 Z" fill="var(--orange)"/>
        </svg>
        <div className="m-mono" style={{color:'var(--orange)', marginBottom:18}}>FREE · 6 QUESTIONS · ~90 SECONDS</div>
        <h1 className="m-serif" style={{fontSize:104, lineHeight:0.95, margin:'0 0 24px', letterSpacing:'-0.03em', fontWeight:400, maxWidth:1100}}>
          Find out what the<br/>machines say about <em style={{color:'var(--orange)'}}>you</em>.
        </h1>
        <p style={{fontSize:19, lineHeight:1.5, color:'var(--mute)', maxWidth:600, margin:'0 0 36px'}}>
          Six quick questions and we&rsquo;ll send back a free report — what models say about your brand today, what we&rsquo;d change first, and what we think it&rsquo;d be worth.
        </p>
        <div style={{display:'flex', gap:14, alignItems:'center'}}>
          <a href="#step-1" className="m-btn m-btn-orange" style={{padding:'18px 28px'}}>
            <span>Let&rsquo;s begin</span><Arrow/>
          </a>
          <span className="m-mono" style={{color:'var(--mute)'}}>or press ↵ Enter</span>
        </div>
      </div>
      <footer style={{padding:'14px 32px', borderTop:'1px solid var(--rule)', display:'flex', justifyContent:'space-between'}} className="m-mono">
        <span style={{color:'var(--mute)'}}>masterful.studio / audit</span>
        <span style={{color:'var(--mute)'}}>Replies in &lt; 48 hrs</span>
      </footer>
    </div>
  );
}

function FormStep1(){
  return (
    <FormShell step={1} kicker="ABOUT YOU · STEP 01"
      question={<>First, who are <em style={{color:'var(--orange)'}}>we talking to?</em></>}
      sub="We promise we won't send you 14 follow-ups. One reply, from a human, within 48 hours.">
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <div>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Full name</div>
          <TextInput placeholder="Avery Chen" defaultValue=""/>
        </div>
        <div>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Role</div>
          <TextInput placeholder="Founder / Head of Growth" defaultValue=""/>
        </div>
        <div>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Email</div>
          <TextInput placeholder="avery@brand.com"/>
        </div>
        <div>
          <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Phone (optional)</div>
          <TextInput placeholder="+1 (000) 000-0000"/>
        </div>
      </div>
    </FormShell>
  );
}

function FormStep2(){
  return (
    <FormShell step={2} kicker="THE BUSINESS · STEP 02"
      question={<>What do you <em style={{color:'var(--orange)'}}>actually do?</em></>}
      sub="One line is fine. We just want enough to spin up the audit before we talk.">
      <div>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Business / brand name</div>
        <TextInput placeholder="Northpath Labs" defaultValue="Northpath Labs"/>
      </div>
      <div>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Website URL</div>
        <TextInput placeholder="https://northpath.io" defaultValue="https://northpath.io"/>
      </div>
      <div>
        <div className="m-mono" style={{color:'var(--mute)', marginBottom:6}}>Niche / category</div>
        <TextInput placeholder="AI sales coaching for B2B teams" />
      </div>
    </FormShell>
  );
}

function FormStep3(){
  return (
    <FormShell step={3} kicker="THE NUMBERS · STEP 03"
      question={<>How much revenue is the business <em style={{color:'var(--orange)'}}>doing right now?</em></>}
      sub="Approximate is fine. We don't share this. We ask because the playbook for $20k/mo is very different from the playbook for $2M/mo.">
      <ChoiceList options={[
        'Pre-revenue / just launching',
        '$0–10k / month',
        '$10k–50k / month',
        '$50k–250k / month',
        '$250k–1M / month',
        '$1M+ / month',
      ]}/>
    </FormShell>
  );
}

function FormStep4(){
  return (
    <FormShell step={4} kicker="THE BUDGET · STEP 04"
      question={<>What&rsquo;s the budget you can put toward visibility, <em style={{color:'var(--orange)'}}>monthly?</em></>}
      sub="Our floor is $4k/mo so we can do real work. If you're below that, we'll happily send a self-serve checklist instead — no shame.">
      <ChoiceList options={[
        'Under $4k — send me the checklist',
        '$4k–8k / month',
        '$8k–15k / month',
        '$15k–30k / month',
        '$30k+ / month',
        'Project-based, let\u2019s talk',
      ]}/>
    </FormShell>
  );
}

function FormStep5(){
  return (
    <FormShell step={5} kicker="GOALS · STEP 05"
      question={<>What does <em style={{color:'var(--orange)'}}>winning</em> look like in 6 months?</>}
      sub="Pick everything that applies. We'll prioritize accordingly.">
      <ChoiceList multi options={[
        'Show up in ChatGPT & Perplexity answers',
        'Rank #1 on Google for our core terms',
        'More qualified pipeline from organic',
        'Become the default brand in our category',
        'Recover from a Google algorithm hit',
        'Other — I\u2019ll tell you on a call',
      ]}/>
    </FormShell>
  );
}

function FormStep6(){
  return (
    <FormShell step={6} kicker="LAST ONE · STEP 06"
      question={<>How did you <em style={{color:'var(--orange)'}}>find us?</em></>}
      sub="Genuinely curious. Helps us spend time on the channels that work."
      ctaLabel="Submit audit request">
      <ChoiceList options={[
        'A friend / colleague',
        'Twitter / X',
        'LinkedIn',
        'Podcast or YouTube',
        'Our journal / blog post',
        'ChatGPT or Perplexity told you',
        'Google search',
        'Don\u2019t remember',
      ]}/>
    </FormShell>
  );
}

function FormDone(){
  return (
    <FormShell step={FORM_TOTAL} complete
      kicker="✓ SUBMITTED"
      question={<>Got it. We&rsquo;re <em style={{color:'var(--orange)'}}>on it.</em></>}
      sub="A human (one of nine) will reply within 48 hours with your visibility report and what we'd do first. No automated drips. No 'just bumping this.'"
      ctaLabel="Back to homepage"
      hint="or close this tab">
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16, marginTop:8}}>
        {[
          ['1.', 'We score you in 6 LLMs'],
          ['2.', 'We map your top 50 prompts'],
          ['3.', 'We send a free report + plan'],
        ].map(([n,t])=>(
          <div key={n} style={{border:'1px solid var(--rule)', borderRadius:6, padding:'18px 16px'}}>
            <div className="m-mono" style={{color:'var(--orange)', marginBottom:8}}>{n}</div>
            <div style={{fontSize:14, lineHeight:1.4}}>{t}</div>
          </div>
        ))}
      </div>
    </FormShell>
  );
}

Object.assign(window, { FormStep0, FormStep1, FormStep2, FormStep3, FormStep4, FormStep5, FormStep6, FormDone });
