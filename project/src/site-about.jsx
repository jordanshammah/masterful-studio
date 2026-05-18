// SITE — About / Studio page (Newspaper system)

function AboutPage(){
  const team = [
    ['Avery Chen','Founder · Head of Strategy','Was an in-house head of growth before this. Started Masterful in 2021 because the agencies kept getting the brief wrong. Writes the journal.'],
    ['Marco DeLuca','Head of SEO','Twelve years deep in technical SEO. Has opinions about canonical tags. Lives in Lisbon.'],
    ['Sasha Park','Head of AEO + GEO','Built the AEO playbook. Maintains the prompt-mapping spreadsheet. Once got a client into Wikipedia.'],
    ['Joel Vance','Editorial Director','Former newsroom editor. Writes the briefs your team will not embarrass themselves shipping.'],
    ['Nia Okonkwo','Content Lead','Has shipped 600+ pages across SaaS and DTC. Writes faster than you write briefs.'],
    ['Karim Idris','Engineering','Builds the internal monitoring stack. Makes the dashboards. Hates dashboards.'],
    ['Lex Bauer','Account Lead','Your single point of contact. Answers Slack within four hours, always.'],
    ['Priya Rao','Research','Runs the original-data work. Has a survey panel of 4,000 founders on retainer.'],
    ['Sam Olafsdóttir','Production','Keeps the studio running. Knows everyone\u2019s deadlines before they do.'],
  ];
  return (
    <div className="m-frame">
      <CSNav/>
      <PageMast
        section="§ ABOUT THE STUDIO"
        title={<>Nine humans.<br/><em style={{color:'var(--orange)'}}>Fourteen brands.</em></>}
        dek={<>A small search-visibility studio in Brooklyn (and a corner of Lisbon). We exist because the agencies kept getting the brief wrong.</>}
        lead={<><span>● Est. 2021</span><span>● 9 humans</span><span>● 14 clients</span><span>● No interns</span><span>● No paid media</span></>}
      />

      {/* MANIFESTO */}
      <section style={{padding:'120px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="I" label="Why We Exist"/>
        <div style={{display:'grid', gridTemplateColumns:'200px 1fr 200px', gap:48, marginTop:32, alignItems:'flex-start'}}>
          <div className="m-mono" style={{color:'var(--mute)'}}>A short manifesto, in three paragraphs.</div>
          <div style={{maxWidth:780}}>
            <p style={{fontSize:24, lineHeight:1.5, margin:0}}>
              <span className="m-serif" style={{float:'left', fontSize:120, lineHeight:0.82, marginRight:14, marginTop:6, color:'var(--orange)'}}>S</span>
              earch is being rewritten in front of us. Google&rsquo;s ten blue links are giving way to model answers, agentic browse, and conversation. The old SEO playbook still partly works. The new playbook is being written. Most agencies are still selling 2019.
            </p>
            <p className="m-serif" style={{fontSize:36, lineHeight:1.2, margin:'32px 0', letterSpacing:'-0.012em', fontWeight:400}}>
              We started Masterful because <em style={{color:'var(--orange)'}}>we couldn&rsquo;t find an agency we&rsquo;d hire</em> &mdash; one that understood the old work, did the new work, and didn&rsquo;t try to sell us a dashboard.
            </p>
            <p style={{fontSize:18, lineHeight:1.7, color:'var(--ink)', opacity:0.88, margin:0}}>
              So we built one. Nine people, fourteen brands at a time, a three-month minimum, a four-hour Slack SLA, and a quarterly report that&rsquo;s a write-up not a dashboard. We bill flat. We do not run ads. We do not lock you in. We answer the phone. If we&rsquo;re not the right fit, we&rsquo;ll say so on the first call and recommend someone better. That&rsquo;s the whole thing.
            </p>
          </div>
          <div className="m-mono" style={{color:'var(--mute)', textAlign:'right'}}>Filed for the record · May 2026 · Brooklyn, NY</div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{padding:'100px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="II" label="The House Rules"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:0, borderTop:'1px solid var(--rule)', marginTop:32}}>
          {[
            ['Fourteen clients, always.','We cap our roster so we can do real work. When someone leaves, we open one slot. We do not scale up to take you.'],
            ['Three-month minimums.','Anything shorter and we lose money. Anything shorter and you lose patience. The math just is what it is.'],
            ['Flat retainers.','We do not bill by impression or by post. We commit to outcomes and charge for the work, monthly.'],
            ['Four-hour Slack SLA.','During business hours, your Lead replies within four hours. After hours, we sleep. We sleep a lot.'],
            ['No automated drips.','Not from us to you. Not from you to us. Email is a person each time.'],
            ['Refer out, generously.','If we are not the right shop, we will say so on call one and introduce you to the right one.'],
          ].map(([t,d], i, a)=>(
            <div key={t} style={{
              padding:'32px 28px 36px',
              borderRight: (i%2)===0 ? '1px solid var(--rule)' : 'none',
              borderBottom: i<a.length-2 ? '1px solid var(--rule)' : 'none',
            }}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:14}}>RULE 0{i+1}</div>
              <div className="m-serif" style={{fontSize:36, marginBottom:10, lineHeight:1.05, letterSpacing:'-0.015em', fontWeight:400}}>{t}</div>
              <p style={{fontSize:15, lineHeight:1.6, color:'var(--mute)', margin:0}}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{padding:'100px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="III" label="The Roster — Nine Humans"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, marginTop:32, borderTop:'1px solid var(--rule)'}}>
          {team.map(([name, role, bio], i)=>(
            <div key={name} style={{
              padding:'32px 28px',
              borderRight: (i%3)<2 ? '1px solid var(--rule)' : 'none',
              borderBottom: i<team.length-3 ? '1px solid var(--rule)' : 'none',
            }}>
              <ImgPh label={`portrait · ${name.split(' ')[0].toLowerCase()}`} height={220} style={{marginBottom:18}}/>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:8}}>{role}</div>
              <div className="m-serif" style={{fontSize:30, marginBottom:10, lineHeight:1.05, letterSpacing:'-0.015em', fontWeight:400}}>{name}</div>
              <p style={{fontSize:14, lineHeight:1.6, color:'var(--mute)', margin:0}}>{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FACTS BLOCK */}
      <section style={{padding:'100px 32px', borderBottom:'1px solid var(--ink)', background:'var(--cream-2)'}}>
        <Folio n="IV" label="A Box of Facts"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, marginTop:32, borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--ink)'}}>
          {[
            ['Founded','2021'],
            ['Locations','Brooklyn, NY · Lisbon, PT'],
            ['Headcount','9 humans · 0 interns'],
            ['Roster cap','14 clients'],
            ['Floor','$4,000 / month'],
            ['Sectors','SaaS · DTC · Fintech · Local'],
            ['Languages','EN · ES · DE · PT'],
            ['Renewal rate','96%'],
          ].map(([k,v], i, a)=>(
            <div key={k} style={{
              padding:'32px 24px',
              borderRight: (i%4)<3 ? '1px solid var(--rule)' : 'none',
              borderBottom: i<a.length-4 ? '1px solid var(--rule)' : 'none',
            }}>
              <div className="m-mono" style={{color:'var(--mute)', marginBottom:8}}>{k}</div>
              <div className="m-serif" style={{fontSize:30, lineHeight:1.15, letterSpacing:'-0.015em'}}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS / RECOGNITION */}
      <section style={{padding:'90px 32px', borderBottom:'1px solid var(--ink)'}}>
        <Folio n="V" label="Said About Us — In the Press"/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32, marginTop:32}}>
          {[
            ['THE INFORMATION','&ldquo;One of the few studios that actually does AEO instead of just talking about it.&rdquo;', 'April 2026'],
            ['STRATECHERY','&ldquo;A masterclass in the new agency model: small, specialist, retainer, refer.&rdquo;', 'March 2026'],
            ['INDIE HACKERS','&ldquo;Quietly the most-recommended SEO/AEO agency in our community Slack.&rdquo;', 'February 2026'],
          ].map(([pub, q, date])=>(
            <div key={pub} style={{paddingTop:18, borderTop:'1px solid var(--ink)'}}>
              <div className="m-mono" style={{color:'var(--orange)', marginBottom:14}}>{pub}</div>
              <div className="m-serif" style={{fontSize:24, lineHeight:1.25, fontStyle:'italic', fontWeight:400}} dangerouslySetInnerHTML={{__html:q}}/>
              <div className="m-mono" style={{color:'var(--mute)', marginTop:14}}>{date}</div>
            </div>
          ))}
        </div>
      </section>

      <NewsCTA/>
      <NewsFooter/>
    </div>
  );
}

Object.assign(window, { AboutPage });
