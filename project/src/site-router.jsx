// Site router — turns the design canvas into a navigable site.
// Pages are addressed via hash: #/home, #/services, #/services/seo, #/work,
// #/work/northpath, #/journal, #/journal/article, #/about, #/form
//
// Intercepts in-page anchor clicks and ALL hrefs like "#services" / "#form"
// from the existing components so you can click around like a real site.

function useHashRoute(){
  const [route, setRoute] = React.useState(() => normalize(window.location.hash));
  React.useEffect(()=>{
    const onHash = () => { setRoute(normalize(window.location.hash)); window.scrollTo({top:0, behavior:'instant'}); };
    window.addEventListener('hashchange', onHash);
    return ()=> window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

function normalize(h){
  let s = (h||'').replace(/^#\/?/, '').trim();
  if (!s) return ['home'];
  return s.split('/').filter(Boolean);
}

// Map legacy hrefs ("#form", "#services", "#service-seo", "#work", "#case-study", "#journal", "#article", "#about")
// into the new path schema, and rewrite all CSNav links / buttons accordingly.
const LEGACY_MAP = {
  'home':'/home',
  'form':'/form',
  'services':'/services',
  'service-seo':'/services/seo',
  'service-aeo':'/services/aeo',
  'service-geo':'/services/geo',
  'work':'/work',
  'case-study':'/work/northpath',
  'journal':'/journal',
  'article':'/journal/cite-perplexity',
  'about':'/about',
  'close':'/home',
};

function installLinkInterceptor(){
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const key = href.slice(1); // drop the #
    // Already in /path form
    if (key.startsWith('/')) return;
    // Step links like step-1
    if (/^step-\d+$/.test(key)) {
      e.preventDefault();
      const n = key.split('-')[1];
      window.location.hash = `#/form/${n}`;
      return;
    }
    if (key in LEGACY_MAP){
      e.preventDefault();
      window.location.hash = '#' + LEGACY_MAP[key];
    }
  });
}

// Studio top bar that appears on every page to make nav obvious + show progress
function StudioBar({ route }){
  const path = '/' + route.join('/');
  const labels = {
    '/home':'Index',
    '/services':'Services',
    '/services/seo':'Services / SEO',
    '/services/aeo':'Services / AEO',
    '/services/geo':'Services / GEO',
    '/work':'Selected Work',
    '/work/northpath':'Work / Northpath',
    '/journal':'Journal',
    '/journal/cite-perplexity':'Journal / Cite Perplexity',
    '/about':'About',
    '/form':'Audit Form',
  };
  let label = labels[path];
  if (!label && path.startsWith('/form/')) label = `Audit Form / Q${route[1]}`;
  return (
    <div style={{
      position:'fixed', top:12, left:12, zIndex:50,
      display:'flex', alignItems:'center', gap:8,
      background:'rgba(14,14,14,0.92)', color:'var(--cream)',
      backdropFilter:'blur(8px)',
      padding:'8px 10px 8px 14px', borderRadius:999, fontFamily:'var(--mono)',
      fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase',
      boxShadow:'0 6px 24px rgba(0,0,0,0.18)',
    }}>
      <span style={{color:'var(--orange)'}}>● LIVE PREVIEW</span>
      <span style={{opacity:0.4}}>·</span>
      <span>{label || path}</span>
      <span style={{opacity:0.4}}>·</span>
      <a href="#/home" style={{color:'var(--cream)', textDecoration:'none', opacity:0.85}}>Home</a>
      <span style={{opacity:0.4}}>·</span>
      <a href="index.html" style={{color:'var(--cream)', textDecoration:'none', opacity:0.85}}>Open canvas</a>
    </div>
  );
}

// Form page — sequences the 8 magazine subscriber-card steps
function FormPage({ step }){
  const n = parseInt(step, 10);
  const Step = [MFormStep0, MFormStep1, MFormStep2, MFormStep3, MFormStep4, MFormStep5, MFormStep6, MFormDone][isNaN(n)?0:n] || MFormStep0;
  const cur = isNaN(n)?0:n;
  const next = cur < 7 ? `#/form/${cur+1}` : `#/home`;
  const prev = cur > 0 ? `#/form/${cur-1}` : null;

  return (
    <div style={{minHeight:'100vh', background:'var(--cream)', display:'flex', alignItems:'center', justifyContent:'center', padding:'80px 24px'}}>
      <div style={{width:'min(1280px, 100%)', height:820, boxShadow:'0 24px 60px rgba(14,14,14,0.10)', borderRadius:6, overflow:'hidden', position:'relative'}}>
        <Step/>
        {/* Overlay nav over the form so the existing "Continue" buttons work too */}
        <div style={{position:'absolute', inset:0, pointerEvents:'none'}}>
          <a href={next} aria-label="Next" style={{position:'absolute', right:64, bottom:64, width:140, height:48, pointerEvents:'auto'}}/>
          {prev && (
            <a href={prev} aria-label="Back" style={{position:'absolute', left:64, bottom:64, width:140, height:48, pointerEvents:'auto'}}/>
          )}
        </div>
      </div>
    </div>
  );
}

function NotFound({ route }){
  return (
    <div style={{padding:'180px 32px', textAlign:'center', minHeight:'70vh'}}>
      <div className="m-mono" style={{color:'var(--orange)', marginBottom:16}}>§ 404</div>
      <h1 className="m-serif" style={{fontSize:120, lineHeight:0.95, margin:'0 0 24px', letterSpacing:'-0.035em'}}>
        Page <em style={{color:'var(--orange)'}}>not on the press</em>.
      </h1>
      <p style={{color:'var(--mute)', fontSize:18, maxWidth:560, margin:'0 auto 28px'}}>
        We couldn&rsquo;t find <code style={{background:'var(--cream-2)', padding:'2px 8px'}}>/{route.join('/')}</code>.
      </p>
      <a className="m-btn m-btn-orange" href="#/home"><span>Back to the front page</span><Arrow/></a>
    </div>
  );
}

function Router(){
  const route = useHashRoute();
  React.useEffect(installLinkInterceptor, []);

  let page;
  const [a, b] = route;
  if (a === 'home' || a === undefined) page = <CoverStoryB/>;
  else if (a === 'services' && !b) page = <ServicesIndex/>;
  else if (a === 'services' && ['seo','aeo','geo'].includes(b)) page = <ServiceDetail slug={b}/>;
  else if (a === 'work' && !b) page = <WorkIndex/>;
  else if (a === 'work' && b) page = <CaseStudyPage/>;
  else if (a === 'journal' && !b) page = <JournalIndexNews/>;
  else if (a === 'journal' && b) page = <ArticlePage/>;
  else if (a === 'about') page = <AboutPage/>;
  else if (a === 'form') page = <FormPage step={b}/>;
  else page = <NotFound route={route}/>;

  return (
    <React.Fragment>
      <StudioBar route={route}/>
      <div className="page-enter" key={route.join('/')}>{page}</div>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Router/>);
