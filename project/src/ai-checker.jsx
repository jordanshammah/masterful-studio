// AI Visibility Checker — live homepage widget.
// User enters a domain → we call window.claude.complete for a generated
// "visibility report": score + 3 findings + a recommendation. While the
// call is in flight, we show a faux-terminal stream so it feels alive.

function AIChecker(){
  const [domain, setDomain] = React.useState('');
  const [state, setState] = React.useState('idle'); // idle | running | done | error
  const [streamLines, setStreamLines] = React.useState([]);
  const [report, setReport] = React.useState(null); // { score, findings:[{model, cited, note}], summary, recommendation }
  const [animScore, setAnimScore] = React.useState(0);

  const start = async () => {
    if (!domain || state === 'running') return;
    setState('running');
    setReport(null);
    setStreamLines([]);

    // Roll a teletype while we wait
    const lines = [
      `› target: ${domain}`,
      `› spinning up agents for ChatGPT, Perplexity, Gemini, Claude, Copilot, Google AI…`,
      `› running 100 buyer-intent prompts per engine`,
      `› cross-referencing entity graph (sameAs, Wikipedia, Wikidata)`,
      `› auditing schema · llms.txt · crawl frequency`,
      `› ranking citations vs. competitor set`,
      `› drafting findings…`,
    ];
    let i = 0;
    const interval = setInterval(()=>{
      setStreamLines(prev => prev.length < lines.length ? [...prev, lines[prev.length]] : prev);
      if (i++ >= lines.length) clearInterval(interval);
    }, 380);

    try {
      const prompt = `You are an SEO/AEO/GEO analyst at Masterful, a small "search visibility studio." A prospect wants a free AI-visibility audit on the domain "${domain}". Generate a fictional-but-realistic report. Be witty and slightly irreverent (brez marketing energy). Return strict JSON only, no prose:
{
  "score": <integer 0-100, usually 18-65 for a typical SMB>,
  "tagline": "<one punchy sentence diagnosis, max 14 words>",
  "findings": [
    { "model": "ChatGPT 4o", "cited": <integer 0-10>, "note": "<short witty note>" },
    { "model": "Perplexity", "cited": <integer 0-10>, "note": "<short witty note>" },
    { "model": "Gemini 2.5", "cited": <integer 0-10>, "note": "<short witty note>" },
    { "model": "Claude 4.5", "cited": <integer 0-10>, "note": "<short witty note>" }
  ],
  "recommendation": "<one paragraph, 2-3 sentences, recommending a specific Masterful service path>",
  "competitor": "<plausible-sounding competitor name beating them>"
}`;
      const txt = await window.claude.complete(prompt);
      // Try to extract JSON
      let parsed = null;
      try { parsed = JSON.parse(txt); }
      catch {
        const m = txt.match(/\{[\s\S]*\}/);
        if (m) parsed = JSON.parse(m[0]);
      }
      if (!parsed) throw new Error('parse');
      clearInterval(interval);
      setStreamLines(prev => [...prev, '› done. composing report ↓']);
      setReport(parsed);
      setState('done');
    } catch(e) {
      clearInterval(interval);
      // Soft fallback — still produce a "report" so the design always shows
      setReport({
        score: 27,
        tagline: 'You exist on Google. You barely exist in the answer engines.',
        findings: [
          { model:'ChatGPT 4o', cited:1, note:'Mentioned once, no link, wrong tagline.' },
          { model:'Perplexity', cited:2, note:'Cited a competitor twice in your category.' },
          { model:'Gemini 2.5', cited:0, note:'Has never heard of you. Hard truth.' },
          { model:'Claude 4.5', cited:1, note:'Knows you exist. Won\u2019t recommend you yet.' },
        ],
        recommendation: 'A 6-week AEO sprint would close the entity gap, rebuild schema, and seed citations across Reddit and high-DA pubs. Score lifts to ~70 in 90 days.',
        competitor: 'thecategoryleader.io',
      });
      setState('done');
    }
  };

  // Animate the score counter when report arrives
  React.useEffect(()=>{
    if (!report) return;
    setAnimScore(0);
    const target = report.score ?? 27;
    let cur = 0;
    const id = setInterval(()=>{
      cur += Math.max(1, Math.round((target - cur)/8));
      if (cur >= target) { cur = target; clearInterval(id); }
      setAnimScore(cur);
    }, 28);
    return ()=> clearInterval(id);
  }, [report]);

  return (
    <div style={{
      background:'var(--ink)', color:'var(--cream)', borderRadius:6,
      padding:'40px 40px 36px', fontFamily:'var(--sans)', position:'relative', overflow:'hidden',
    }}>
      {/* Header */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24}}>
        <div className="m-mono" style={{color:'var(--orange)'}}>● LIVE WIDGET · FREE</div>
        <div className="m-mono" style={{color:'var(--mute-on-dark)'}}>masterful / visibility-check</div>
      </div>

      <h3 className="m-serif" style={{margin:'0 0 18px', fontSize:54, lineHeight:1.0, color:'var(--cream)', fontWeight:400, letterSpacing:'-0.02em'}}>
        Check your AI <em style={{color:'var(--orange)'}}>visibility</em> in 20 seconds.
      </h3>
      <p style={{margin:'0 0 24px', fontSize:15, color:'var(--mute-on-dark)', lineHeight:1.5, maxWidth:620}}>
        Drop your domain. We ping six AI models with the prompts your buyers actually ask, and grade how often they cite you.
      </p>

      {/* Input row */}
      <form onSubmit={e=>{ e.preventDefault(); start(); }} style={{display:'flex', gap:12, marginBottom:20}}>
        <div style={{display:'flex', flex:1, alignItems:'center', gap:10, background:'rgba(255,255,255,0.06)', borderRadius:6, border:'1.5px solid rgba(255,255,255,0.18)', padding:'0 18px'}}>
          <span className="m-mono" style={{color:'var(--orange)'}}>https://</span>
          <input
            value={domain} onChange={e=>setDomain(e.target.value)}
            placeholder="yourcompany.com"
            style={{
              flex:1, background:'transparent', border:0, outline:'none',
              color:'var(--cream)', fontFamily:'var(--serif)', fontSize:26, padding:'18px 0',
            }}
            spellCheck={false}
          />
        </div>
        <button type="submit" disabled={!domain || state==='running'} className="m-btn m-btn-orange"
          style={{padding:'18px 22px', fontSize:13, opacity: (!domain || state==='running') ? 0.7 : 1}}>
          <span>{state==='running' ? 'Scanning…' : 'Run audit'}</span><Arrow/>
        </button>
      </form>

      {/* Stream / idle hint */}
      {state==='idle' && (
        <div className="m-mono" style={{color:'var(--mute-on-dark)', fontSize:11}}>
          ↳ tip: try a real domain to see what your competitors don&rsquo;t want you to know.
        </div>
      )}

      {state!=='idle' && (
        <div style={{
          background:'rgba(0,0,0,0.35)', borderRadius:4, padding:'18px 20px',
          fontFamily:'var(--mono)', fontSize:12, color:'var(--mute-on-dark)',
          lineHeight:1.7, minHeight:140, maxHeight:200, overflow:'hidden',
          marginBottom: report ? 22 : 0,
        }}>
          {streamLines.map((l, i)=>(
            <div key={i} style={{color: l.includes('done.') ? 'var(--orange)' : 'var(--mute-on-dark)'}}>{l}</div>
          ))}
          {state==='running' && <div style={{color:'var(--orange)'}}><span className="m-caret"/></div>}
        </div>
      )}

      {/* Report */}
      {report && (
        <div style={{borderTop:'1px solid rgba(255,255,255,0.14)', paddingTop:24, display:'grid', gridTemplateColumns:'220px 1fr', gap:32, animation:'fadeIn .4s ease-out'}}>
          <div>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:8}}>VISIBILITY SCORE</div>
            <div className="m-serif" style={{fontSize:128, lineHeight:0.9, color:'var(--orange)', letterSpacing:'-0.04em'}}>
              {animScore}<span style={{color:'var(--mute-on-dark)', fontSize:36}}>/100</span>
            </div>
            <div style={{height:6, background:'rgba(255,255,255,0.1)', borderRadius:999, marginTop:14, overflow:'hidden'}}>
              <div style={{height:'100%', width:`${animScore}%`, background:'var(--orange)', transition:'width .4s'}}/>
            </div>
            <div className="m-serif" style={{fontSize:18, lineHeight:1.3, marginTop:18, color:'var(--cream)', fontStyle:'italic'}}>
              &ldquo;{report.tagline}&rdquo;
            </div>
          </div>
          <div>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginBottom:14}}>FINDINGS · cited in 10 high-intent prompts</div>
            {report.findings?.map(f=>(
              <div key={f.model} style={{display:'grid', gridTemplateColumns:'140px 50px 1fr', gap:14, padding:'12px 0', borderBottom:'1px dashed rgba(255,255,255,0.14)', alignItems:'center'}}>
                <span style={{fontSize:14, fontWeight:500}}>{f.model}</span>
                <span className="m-mono" style={{color:'var(--orange)'}}>{f.cited}/10</span>
                <span style={{fontSize:13, color:'var(--mute-on-dark)'}}>{f.note}</span>
              </div>
            ))}
            <div style={{marginTop:18, padding:'14px 16px', background:'rgba(196,80,26,0.1)', borderLeft:'2px solid var(--orange)', borderRadius:2}}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:6}}>WHAT WE&rsquo;D DO FIRST</div>
              <p style={{margin:0, fontSize:14, lineHeight:1.55, color:'var(--cream)'}}>{report.recommendation}</p>
            </div>
            <div className="m-mono" style={{color:'var(--mute-on-dark)', marginTop:16, fontSize:11}}>
              ⚠ Beating you in your category right now: <span style={{color:'var(--orange)'}}>{report.competitor}</span>
            </div>
            <div style={{marginTop:18}}>
              <a href="#form" className="m-btn m-btn-orange" style={{padding:'14px 20px', fontSize:12}}>
                <span>Get the full 18-page report (free)</span><Arrow/>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from{opacity:0; transform:translateY(8px)} to{opacity:1;transform:none} }
      `}</style>
    </div>
  );
}

Object.assign(window, { AIChecker });
