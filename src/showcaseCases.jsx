import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Pause, Play } from '@phosphor-icons/react';
import './showcase-cases.css';

import vunCover from './assets/case-studies/vun-cover.webp';
import vunFoundations from './assets/case-studies/vun-foundations.webp';
import vunStationery from './assets/case-studies/vun-stationery.webp';
import vunPackaging from './assets/case-studies/vun-packaging.webp';
import vunSpace from './assets/case-studies/vun-space.webp';
import vunCampaign from './assets/case-studies/vun-campaign.webp';
import vunDigital from './assets/case-studies/vun-digital.webp';
import trucCover from './assets/case-studies/truc-cover.webp';
import trucOverview from './assets/case-studies/truc-overview.webp';
import trucProjects from './assets/case-studies/truc-projects.webp';
import trucGovernance from './assets/case-studies/truc-governance.webp';
import trucProduction from './assets/case-studies/truc-production.webp';
import trucDigital from './assets/case-studies/truc-digital.webp';
import trucReview from './assets/case-studies/truc-review.webp';
import { withoutTrailingPeriod } from './text.js';

function CaseHeader({ work, variant, kicker, intro, facts, image, imageAlt, action }) {
  return <section className={`flow-hero flow-hero-${variant}`}>
    <div className="flow-shell">
      <Link className="flow-back" to="/#portfolio"><ArrowLeft size={16}/> Portfolio</Link>
      <header className="flow-heading">
        <div><span>{kicker}</span><h1>{withoutTrailingPeriod(work.title)}</h1></div>
        <div className="flow-heading-side"><p>{intro}</p><a href="#live-demo">{action}<ArrowUpRight size={17}/></a></div>
      </header>
      <figure className="flow-cover"><img src={image} alt={imageAlt}/></figure>
      <div className="flow-meta">
        <dl>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p>Self-initiated fictional brief / original art direction, design system and prototype</p>
      </div>
    </div>
  </section>;
}

function FlowLabel({ number, children, tone = '' }) {
  return <div className={`flow-label ${tone}`}><span>{number}</span><strong>{children}</strong></div>;
}

function Visual({ src, alt, number, label, className = '' }) {
  return <figure className={`flow-visual ${className}`}>
    <img src={src} alt={alt} width="1536" height="1024" loading="lazy"/>
    {(number || label) && <figcaption><span>{number}</span><strong>{label}</strong></figcaption>}
  </figure>;
}

const materialModes = {
  aggregate: { label: 'Aggregate', base: '#f04b2f', accent: '#e9e0d2', texture: 'speckle', code: 'M-01' },
  paper: { label: 'Paper', base: '#e9e0d2', accent: '#171717', texture: 'fiber', code: 'M-02' },
  aluminium: { label: 'Aluminium', base: '#bfc2c4', accent: '#f04b2f', texture: 'line', code: 'M-03' },
};

function VunComposer() {
  const [material, setMaterial] = useState('aggregate');
  const [playing, setPlaying] = useState(true);
  const active = materialModes[material];
  return <div className={`vun-composer ${playing ? 'is-playing' : 'is-paused'}`} style={{ '--material-base': active.base, '--material-accent': active.accent }}>
    <div className="vun-composer-controls">
      <span>Material</span>
      <div role="group" aria-label="Material preview">{Object.entries(materialModes).map(([key, value]) => <button type="button" key={key} aria-pressed={material === key} onClick={() => setMaterial(key)}><i style={{ background: value.base }}/>{value.label}</button>)}</div>
      <button className="vun-play" type="button" aria-pressed={playing} onClick={() => setPlaying((value) => !value)}>{playing ? <Pause size={15}/> : <Play size={15}/>} {playing ? 'Pause' : 'Play'}</button>
    </div>
    <div className={`vun-composer-stage is-${active.texture}`} aria-live="polite">
      <svg viewBox="0 0 900 620" role="img" aria-label={`${active.label} fragments assembling into the VỤN symbol`}>
        <defs>
          <pattern id="speckle" width="28" height="28" patternUnits="userSpaceOnUse"><rect width="28" height="28" fill="var(--material-base)"/><circle cx="6" cy="8" r="2.5" fill="var(--material-accent)"/><circle cx="20" cy="19" r="4" fill="#72716f"/><circle cx="26" cy="4" r="1.6" fill="var(--material-accent)"/></pattern>
          <pattern id="fiber" width="36" height="36" patternUnits="userSpaceOnUse"><rect width="36" height="36" fill="var(--material-base)"/><path d="M2 7h15M22 25h11M7 34h21M25 9h8" stroke="#b8afa3" strokeWidth="1"/></pattern>
          <pattern id="line" width="18" height="18" patternUnits="userSpaceOnUse"><rect width="18" height="18" fill="var(--material-base)"/><path d="M0 4h18M0 13h18" stroke="#909598" strokeWidth=".8"/></pattern>
        </defs>
        <g className="vun-fragments" fill={`url(#${active.texture})`}>
          <path d="M118 92h214l76 148-100 200z"/>
          <path d="M568 92h214L592 440 492 240z"/>
          <path d="M354 202h192l-96 192z"/>
        </g>
        <path className="vun-axis" d="M90 510H810"/>
      </svg>
      <div className="vun-stage-mark"><span>{active.code}</span><strong>VỤN</strong><small>Recovered / remade</small></div>
    </div>
  </div>;
}

function VunMotionBand() {
  return <div className="vun-motion-band" role="img" aria-label="Animated VỤN fragment system">
    {Array.from({ length: 9 }, (_, index) => <svg key={index} viewBox="0 0 80 70" aria-hidden="true"><path d="M8 8h24l8 17-12 35zM48 8h24L52 60 40 25z"/></svg>)}
  </div>;
}

function VunCaseStudy({ work }) {
  const facts = [['Role','Strategy · Identity · Art direction'],['Format','Physical · Spatial · Digital'],['System','4 colors · 3 material families'],['Duration','6-week concept sprint']];
  return <article className="flow-case case-vun">
    <CaseHeader work={work} variant="vun" kicker="Brand identity · Circular materials · 2026" intro="Identity for a studio that turns construction offcuts into useful objects" facts={facts} image={vunCover} imageAlt="VỤN circular-material identity across sculptural objects, material samples, packaging and tote in a workshop" action="Open material demo"/>

    <section className="flow-section vun-foundation"><div className="flow-shell">
      <FlowLabel number="01">Identity + material language</FlowLabel>
      <Visual src={vunFoundations} alt="VỤN wordmark, fragment symbol, four-color palette and recovered material specimens"/>
      <div className="vun-spec-strip" aria-label="VỤN identity specification"><span>Vermilion<br/><b>#F04B2F</b></span><span>Dusty lilac<br/><b>#B9A7FF</b></span><span>Rice paper<br/><b>#E9E0D2</b></span><span>Charcoal<br/><b>#171717</b></span><strong>V = fragment<br/>Grid = 8 × 8</strong></div>
    </div></section>

    <section className="flow-section vun-applications"><div className="flow-shell">
      <FlowLabel number="02">Working set</FlowLabel>
      <div className="flow-pair flow-pair-staggered">
        <Visual src={vunStationery} alt="VỤN stationery, sample case, numbered material tags, tapes, binder and tactile swatches" number="02A" label="Sample library"/>
        <Visual src={vunPackaging} alt="VỤN fitted packaging system for upcycled stool, tray and tile objects" number="02B" label="Product packaging"/>
      </div>
    </div></section>

    <section id="live-demo" className="flow-section vun-demo"><div className="flow-shell">
      <FlowLabel number="03" tone="is-light">Live material composer</FlowLabel>
      <VunComposer/>
    </div></section>

    <section className="vun-space-frame">
      <Visual src={vunSpace} alt="VỤN material exhibition with modular signage, product plinths and a vermilion visitor path"/>
      <div className="vun-space-caption"><span>04</span><strong>Temporary gallery</strong><small>Signage / display / wayfinding</small></div>
    </section>

    <section className="flow-section vun-campaign"><div className="flow-shell">
      <FlowLabel number="05">Campaign + catalogue</FlowLabel>
      <Visual src={vunCampaign} alt="VỤN campaign posters, street banner, catalogue and tote installed in an urban setting"/>
      <Visual src={vunDigital} alt="VỤN responsive product catalogue and circularity view across laptop, tablet and phone" className="vun-digital-visual"/>
    </div></section>

    <section className="vun-close"><VunMotionBand/><div className="flow-shell vun-close-copy"><strong>VỤN</strong><dl><div><dt>Identity</dt><dd>Mark / wordmark / palette / type</dd></div><div><dt>Applications</dt><dd>Samples / tags / packaging / space</dd></div><div><dt>Digital</dt><dd>Catalogue / material trace / mobile</dd></div></dl></div></section>
  </article>;
}

const profileChapters = [
  ['01','Company overview','04–15'],['02','Context + position','16–25'],['03','Capabilities','26–43'],['04','Sectors','44–53'],
  ['05','Delivery model','54–67'],['06','Project records','68–95'],['07','People + ESG + HSE','96–105'],['08','Governance + contact','106–112'],
];

const readerViews = {
  overview: { label: 'Overview', image: trucOverview, pages: '04–43', facts: ['18-year timeline','4 capability groups','Market and company structure'] },
  projects: { label: 'Projects', image: trucProjects, pages: '68–95', facts: ['Flood control','Transit foundation','Water reuse'] },
  governance: { label: 'Governance', image: trucGovernance, pages: '96–105', facts: ['People and safety','Climate data','Responsibility map'] },
  digital: { label: 'Digital reader', image: trucDigital, pages: 'Responsive', facts: ['Search and bookmarks','Linked evidence','Field-ready views'] },
};

function TrucReader() {
  const [view, setView] = useState('overview');
  const active = readerViews[view];
  return <div className="truc-reader">
    <nav aria-label="TRỤC profile preview">{Object.entries(readerViews).map(([key, item]) => <button type="button" key={key} aria-pressed={view === key} onClick={() => setView(key)}><span>{item.label}</span><small>{item.pages}</small></button>)}</nav>
    <div className="truc-reader-stage" aria-live="polite">
      <img src={active.image} alt={`TRỤC ${active.label.toLowerCase()} profile preview`}/>
      <i aria-hidden="true"/>
      <div><span>{active.pages}</span>{active.facts.map((fact) => <strong key={fact}>{fact}</strong>)}</div>
    </div>
  </div>;
}

function TrucAxisBand() {
  return <div className="truc-axis-band" aria-hidden="true"><span/><span/><span/><span/><i/></div>;
}

function TrucCaseStudy({ work }) {
  const facts = [['Role','Editorial direction · Information design'],['Format','112 pages · VI / EN'],['Outputs','Book · project sheets · reader'],['Duration','8-week concept sprint']];
  return <article className="flow-case case-truc">
    <CaseHeader work={work} variant="truc" kicker="Corporate profile · Climate infrastructure · 2026" intro="A complete capability profile built around scope, evidence and field use" facts={facts} image={trucCover} imageAlt="TRỤC corporate profile, open project spread, digital map and field tools at a flood-control facility" action="Open profile reader"/>

    <section className="flow-section truc-architecture"><div className="flow-shell">
      <FlowLabel number="01" tone="is-light">Profile architecture / 112 pages</FlowLabel>
      <ol>{profileChapters.map(([number, title, pages]) => <li key={number}><span>{number}</span><strong>{title}</strong><small>{pages}</small></li>)}</ol>
      <Visual src={trucOverview} alt="TRỤC profile cover, contents, company overview, timeline and capability spreads"/>
    </div></section>

    <section id="live-demo" className="flow-section truc-demo"><div className="flow-shell">
      <FlowLabel number="02">Profile reader</FlowLabel>
      <TrucReader/>
    </div></section>

    <section className="truc-project-frame">
      <TrucAxisBand/>
      <div className="flow-shell"><FlowLabel number="03" tone="is-light">Project evidence</FlowLabel><Visual src={trucProjects} alt="TRỤC project record spreads for flood control, elevated transit and industrial water reuse"/></div>
    </section>

    <section className="flow-section truc-governance"><div className="flow-shell">
      <FlowLabel number="04">People + safety + climate governance</FlowLabel>
      <Visual src={trucGovernance} alt="TRỤC people, safety, climate governance and field-control chapter with removable documents"/>
      <div className="truc-evidence-strip"><span>LTIFR history</span><span>Carbon data</span><span>Safety controls</span><span>Team directory</span><span>Board oversight</span></div>
    </div></section>

    <section className="flow-section truc-production"><div className="flow-shell">
      <FlowLabel number="05">Production + handover</FlowLabel>
      <div className="flow-pair">
        <Visual src={trucProduction} alt="TRỤC navy cloth binding, orange foil, sewn spine, tabs, map overlay and paper details" number="05A" label="Print master"/>
        <Visual src={trucReview} alt="TRỤC profile and project sheets used by engineers during a bid review" number="05B" label="Review room"/>
      </div>
      <Visual src={trucDigital} alt="TRỤC responsive company profile reader on laptop, tablet and phone" className="truc-digital-visual"/>
      <dl className="truc-manifest"><div><dt>Print master</dt><dd>A4 / 112 pp / CMYK</dd></div><div><dt>Digital profile</dt><dd>Tagged PDF / responsive reader</dd></div><div><dt>Project records</dt><dd>12-page modular template</dd></div><div><dt>Handover</dt><dd>Sources / links / content register</dd></div></dl>
    </div></section>

    <section className="truc-close"><div className="flow-shell"><span>10.8231° N / 106.6297° E</span><strong>TRỤC</strong><i/></div></section>
  </article>;
}

export function ShowcaseCaseStudy({ work }) {
  if (work.slug === 'folded-matter') return <VunCaseStudy work={work}/>;
  if (work.slug === 'still-moving') return <TrucCaseStudy work={work}/>;
  return null;
}
