// APP — design canvas root for the full Masterful site.

function App(){
  const LP_W = 1440;
  const FORM_W = 1280; const FORM_H = 820;

  return (
    <DesignCanvas>

      <DCSection
        id="home"
        title="01 — Home (Newspaper Front)"
        subtitle="The locked home page. Newspaper masthead, classified-style services sidebar, sample report spread, manifesto, roster, and journal preview.">
        <DCArtboard id="cs-b" label="Home · Newspaper Front" width={LP_W} height={4400}>
          <CoverStoryB/>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="services"
        title="02 — Services"
        subtitle="Index plus three deep pages (one per discipline). Each detail page has a hero, KPIs, six pillars, a four-phase timeline, a testimonial, and a cross-sell.">
        <DCArtboard id="services-index" label="Services · Index" width={LP_W} height={3000}>
          <ServicesIndex/>
        </DCArtboard>
        <DCArtboard id="service-seo" label="SEO · Detail" width={LP_W} height={3400}>
          <ServiceDetail slug="seo"/>
        </DCArtboard>
        <DCArtboard id="service-aeo" label="AEO · Detail" width={LP_W} height={3400}>
          <ServiceDetail slug="aeo"/>
        </DCArtboard>
        <DCArtboard id="service-geo" label="GEO · Detail" width={LP_W} height={3400}>
          <ServiceDetail slug="geo"/>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="work"
        title="03 — Work"
        subtitle="Selected work index + one sample case-study detail page (Northpath). The case-study template is reused for every study.">
        <DCArtboard id="work-index" label="Work · Index" width={LP_W} height={2800}>
          <WorkIndex/>
        </DCArtboard>
        <DCArtboard id="case-study" label="Case study · Northpath" width={LP_W} height={3600}>
          <CaseStudyPage/>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="journal"
        title="04 — Journal"
        subtitle="Field-notes index with newspaper-style featured lead, recent grid, and archive table. Plus one sample article in the magazine feature style.">
        <DCArtboard id="journal-index" label="Journal · Index" width={LP_W} height={2700}>
          <JournalIndexNews/>
        </DCArtboard>
        <DCArtboard id="article" label="Article · Long-form feature" width={LP_W} height={3800}>
          <ArticlePage/>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="about"
        title="05 — About"
        subtitle="The studio: manifesto, six house rules, nine-person team, facts box, press.">
        <DCArtboard id="about" label="About · The Studio" width={LP_W} height={3400}>
          <AboutPage/>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="mag-form"
        title="06 — Audit Form (Subscriber Card)"
        subtitle="The 6-question audit form, one question per page. Cream paper, italic serif questions, classified-card chrome, folio numbers.">
        <DCArtboard id="mf-0" label="00 · Card open" width={FORM_W} height={FORM_H}><MFormStep0/></DCArtboard>
        <DCArtboard id="mf-1" label="01 · Who" width={FORM_W} height={FORM_H}><MFormStep1/></DCArtboard>
        <DCArtboard id="mf-2" label="02 · Business" width={FORM_W} height={FORM_H}><MFormStep2/></DCArtboard>
        <DCArtboard id="mf-3" label="03 · Revenue" width={FORM_W} height={FORM_H}><MFormStep3/></DCArtboard>
        <DCArtboard id="mf-4" label="04 · Budget" width={FORM_W} height={FORM_H}><MFormStep4/></DCArtboard>
        <DCArtboard id="mf-5" label="05 · Goals" width={FORM_W} height={FORM_H}><MFormStep5/></DCArtboard>
        <DCArtboard id="mf-6" label="06 · Source" width={FORM_W} height={FORM_H}><MFormStep6/></DCArtboard>
        <DCArtboard id="mf-done" label="07 · Filed" width={FORM_W} height={FORM_H}><MFormDone/></DCArtboard>
      </DCSection>

      <DCSection
        id="other-directions"
        title="Other directions — for reference"
        subtitle="Round-one covers and variants kept around so we can pull moves from them.">
        <DCArtboard id="cs-a" label="Alt cover · Feature" width={LP_W} height={4400}>
          <CoverStoryA/>
        </DCArtboard>
        <DCArtboard id="cs-c" label="Alt cover · Open Letter" width={LP_W} height={4400}>
          <CoverStoryC/>
        </DCArtboard>
        <DCArtboard id="v1" label="V1 · Editorial Daily" width={LP_W} height={3800}>
          <LandingV1/>
        </DCArtboard>
        <DCArtboard id="v2" label="V2 · Giant Wordmark" width={LP_W} height={3900}>
          <LandingV2/>
        </DCArtboard>
        <DCArtboard id="v4" label="V4 · Visibility Terminal" width={LP_W} height={4000}>
          <LandingV4/>
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
