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
import lamCover from './assets/case-studies/lam-cover.webp';
import lamOverview from './assets/case-studies/lam-overview.webp';
import lamScience from './assets/case-studies/lam-science.webp';
import lamMaterials from './assets/case-studies/lam-materials.webp';
import lamImpact from './assets/case-studies/lam-impact.webp';
import lamDigital from './assets/case-studies/lam-digital.webp';
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

const lamChapters = [
  ['01','Origin','04-11'],['02','Cultivation','12-25'],['03','Science','26-43'],['04','Materials','44-63'],
  ['05','Applications','64-77'],['06','Impact','78-89'],['07','Partners','90-99'],['08','Data room','100-104'],
];

const lamReaderViews = {
  company: { label: 'Company', image: lamOverview, pages: '04-25', facts: ['Coastal origin','Cultivation network','Company model'] },
  science: { label: 'Science', image: lamScience, pages: '26-43', facts: ['Biopolymer extraction','Barrier testing','Pilot protocols'] },
  materials: { label: 'Materials', image: lamMaterials, pages: '44-77', facts: ['Film','Molded form','Coating'] },
  field: { label: 'Field data', image: lamDigital, pages: 'Live', facts: ['Farm map','Batch records','Material library'] },
};

function LamReader() {
  const [view, setView] = useState('company');
  const active = lamReaderViews[view];
  return <div className="lam-reader">
    <nav aria-label="LAM profile preview">{Object.entries(lamReaderViews).map(([key, item]) => <button type="button" key={key} aria-pressed={view === key} onClick={() => setView(key)}><span>{item.label}</span><small>{item.pages}</small></button>)}</nav>
    <div className="lam-reader-stage" aria-live="polite">
      <img src={active.image} alt={`LAM ${active.label.toLowerCase()} profile preview`}/>
      <div><span>{active.pages}</span>{active.facts.map((fact) => <strong key={fact}>{fact}</strong>)}</div>
    </div>
  </div>;
}

function LamCells() {
  return <div className="lam-cells" role="img" aria-label="Animated seaweed cell pattern">
    {Array.from({ length: 8 }, (_, index) => <svg key={index} viewBox="0 0 120 120" aria-hidden="true"><path d="M15 66C32 20 53 25 60 57c7 31 27 36 45-3M17 84c24-17 36-13 46 4 9 16 23 14 40-8"/></svg>)}
  </div>;
}

function LamCaseStudy({ work }) {
  const facts = [['Role','Editorial direction · Information design'],['Format','104 pages · VI / EN'],['Outputs','Profile · samples · data room'],['Duration','8-week concept sprint']];
  return <article className="flow-case case-lam">
    <CaseHeader work={work} variant="lam" kicker="Corporate profile · Marine biomaterials · 2026" intro="Company profile for a coastal lab growing seaweed into next-generation materials" facts={facts} image={lamCover} imageAlt="LAM marine biomaterials profile, seaweed samples and translucent material sheets in a coastal laboratory" action="Open profile reader"/>

    <section className="flow-section lam-architecture"><div className="flow-shell">
      <FlowLabel number="01">Profile system / 104 pages</FlowLabel>
      <Visual src={lamOverview} alt="LAM company profile cover, contents, company story and cultivation network spreads"/>
      <ol>{lamChapters.map(([number, title, pages]) => <li key={number}><span>{number}</span><strong>{title}</strong><small>{pages}</small></li>)}</ol>
    </div></section>

    <section className="lam-science-frame">
      <Visual src={lamScience} alt="LAM science chapter showing seaweed microscopy, extraction stages and barrier testing"/>
      <div className="lam-science-tag"><span>02</span><strong>Science library</strong><small>Species / process / performance</small></div>
    </section>

    <section id="live-demo" className="flow-section lam-demo"><div className="flow-shell">
      <FlowLabel number="03" tone="is-light">Profile reader</FlowLabel>
      <LamReader/>
    </div></section>

    <section className="flow-section lam-materials"><div className="flow-shell">
      <FlowLabel number="04">Material portfolio</FlowLabel>
      <div className="flow-pair lam-material-grid">
        <Visual src={lamMaterials} alt="LAM seaweed films, molded trays, coated papers and agricultural material samples" number="04A" label="Material families"/>
        <Visual src={lamImpact} alt="LAM impact report spreads with farm data, lifecycle diagrams and coastal field documentation" number="04B" label="Impact record"/>
      </div>
    </div></section>

    <section className="flow-section lam-handover"><div className="flow-shell">
      <FlowLabel number="05" tone="is-light">Lab to partner</FlowLabel>
      <Visual src={lamDigital} alt="LAM printed profile, material samples, cultivation map and responsive digital library in a coastal lab"/>
      <dl className="lam-manifest"><div><dt>Profile</dt><dd>104 pp / VI + EN</dd></div><div><dt>Material library</dt><dd>12 sample records</dd></div><div><dt>Impact data</dt><dd>Farm to end use</dd></div><div><dt>Digital room</dt><dd>Map / batches / tests</dd></div></dl>
    </div></section>

    <section className="lam-close"><LamCells/><div className="flow-shell"><span>Marine material lab / Vietnam</span><strong>LAM</strong><small>Seaweed / science / scale</small></div></section>
  </article>;
}

export function ShowcaseCaseStudy({ work }) {
  if (work.slug === 'folded-matter') return <VunCaseStudy work={work}/>;
  if (work.slug === 'still-moving') return <LamCaseStudy work={work}/>;
  return null;
}
