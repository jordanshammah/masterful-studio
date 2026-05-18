// Shared Masterful brand atoms — exposed on window for cross-file use.

const MLogo = ({ color = 'currentColor', size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Masterful">
    <path d="M5 35 V8 H12 L20 22 L28 8 H35 V35 H29 V18 L22 30 H18 L11 18 V35 Z" fill={color}/>
  </svg>
);

const MWordmark = ({ color = 'currentColor', size = 16, gap = 0.18 }) => (
  <span style={{
    fontFamily: 'var(--sans)', fontWeight: 700, fontSize: size,
    letterSpacing: `${gap}em`, color, textTransform: 'uppercase', display:'inline-block',
  }}>MASTERFUL</span>
);

const MLockup = ({ color = 'currentColor', size = 16 }) => (
  <span style={{display:'inline-flex', alignItems:'center', gap:8, color}}>
    <MLogo color={color} size={size + 4} />
    <MWordmark color={color} size={size} />
  </span>
);

const Arrow = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Dot = ({ color = 'currentColor', size = 4 }) => (
  <span style={{ display:'inline-block', width:size, height:size, borderRadius:'50%', background:color, verticalAlign:'middle' }}/>
);

// Top nav used on landing pages
function MNav({ dark = false, current = 'home' }) {
  const ink = dark ? 'var(--cream)' : 'var(--ink)';
  const items = [
    ['home','Index'],
    ['services','Services'],
    ['work','Work'],
    ['journal','Journal'],
  ];
  return (
    <nav style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'18px 32px', borderBottom:`1px solid ${dark?'var(--rule-light)':'var(--rule)'}`,
      color: ink,
    }}>
      <MLockup color={ink} size={13} />
      <div style={{display:'flex', gap:28, fontFamily:'var(--mono)', fontSize:11, textTransform:'uppercase', letterSpacing:'0.08em'}}>
        {items.map(([k,l]) => (
          <a key={k} className="m-link" href="#" style={{opacity: current===k?1:0.65, color:ink}}>
            <span style={{display:'inline-block', width:8, color:'var(--orange)', marginRight:6, opacity: current===k?1:0}}>●</span>{l}
          </a>
        ))}
      </div>
      <a href="#form" className="m-btn" style={{padding:'10px 16px', fontSize:11, background:dark?'var(--cream)':'var(--ink)', color:dark?'var(--ink)':'var(--cream)', borderColor:dark?'var(--cream)':'var(--ink)'}}>
        <span>Get an audit</span><Arrow color="currentColor" />
      </a>
    </nav>
  );
}

// Image placeholder with mono caption (no fake imagery — placeholder by design)
function ImgPh({ label = 'image', height = 200, style = {} }) {
  return (
    <div className="m-imgph" style={{ width:'100%', height, ...style }}>
      [ {label} ]
    </div>
  );
}

// little orange dot pulse
const PulseDot = () => (
  <span style={{
    display:'inline-block', width:8, height:8, borderRadius:'50%',
    background:'var(--orange)', boxShadow:'0 0 0 0 rgba(196,80,26,0.6)',
    animation:'m-pulse 1.6s ease-out infinite',
  }}/>
);

if (typeof document !== 'undefined' && !document.getElementById('m-shared-styles')) {
  const s = document.createElement('style'); s.id='m-shared-styles';
  s.textContent = `
    @keyframes m-pulse { 0%{box-shadow:0 0 0 0 rgba(196,80,26,0.55)} 100%{box-shadow:0 0 0 14px rgba(196,80,26,0)} }
    @keyframes m-blink { 50%{opacity:0} }
    .m-caret{ display:inline-block; width:0.55em; height:1em; background:var(--orange); vertical-align:-0.12em; margin-left:2px; animation:m-blink 1.1s steps(1) infinite;}
  `;
  document.head.appendChild(s);
}

Object.assign(window, { MLogo, MWordmark, MLockup, Arrow, Dot, MNav, ImgPh, PulseDot });
