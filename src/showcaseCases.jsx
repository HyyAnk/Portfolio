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
import hxs01 from './assets/case-studies/hxs-01.webp';
import hxs02 from './assets/case-studies/hxs-02.webp';
import hxs03 from './assets/case-studies/hxs-03.webp';
import hxs04 from './assets/case-studies/hxs-04.webp';
import hxs05 from './assets/case-studies/hxs-05.webp';
import hxs06 from './assets/case-studies/hxs-06.webp';
import hxs07 from './assets/case-studies/hxs-07.webp';
import hxs08 from './assets/case-studies/hxs-08.webp';
import hxs09 from './assets/case-studies/hxs-09.webp';
import hxs10 from './assets/case-studies/hxs-10.webp';
import hxs11 from './assets/case-studies/hxs-11.webp';
import hxs12 from './assets/case-studies/hxs-12.webp';
import { withoutTrailingPeriod } from './text.js';

function CaseHeader({ work, variant, kicker, intro, facts, image, imageAlt, action, note = 'Self-initiated fictional brief / original art direction, design system and prototype' }) {
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
        <p>{note}</p>
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
      <div className="vun-identity-spec" aria-label="VỤN color palette and typography">
        <div className="vun-palette"><span style={{ '--swatch': '#F04B2F' }}><b>Vermilion</b><small>#F04B2F</small></span><span style={{ '--swatch': '#B9A7FF' }}><b>Dusty lilac</b><small>#B9A7FF</small></span><span style={{ '--swatch': '#E9E0D2' }}><b>Rice paper</b><small>#E9E0D2</small></span><span style={{ '--swatch': '#171717' }}><b>Charcoal</b><small>#171717</small></span></div>
        <div className="vun-type"><span>Manrope Variable</span><strong>VỤN</strong><p>Aa 01 / 200 to 800</p><small>Fragments become structure</small></div>
      </div>
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

const hxsPages = [hxs01, hxs02, hxs03, hxs04, hxs05, hxs06, hxs07, hxs08, hxs09, hxs10, hxs11, hxs12];

const hxsReaderViews = {
  company: { label: 'Company', image: hxs03, page: '03', note: 'Vietnam operation and logistics network' },
  production: { label: 'Production', image: hxs05, page: '05', note: 'Factory, quality control and product construction' },
  standards: { label: 'Standards', image: hxs07, page: '07', note: 'Slab detailing and standard compliance' },
  specs: { label: 'Specifications', image: hxs10, page: '10', note: 'Material grades, dimensions and test references' },
};

function HxsReader() {
  const [view, setView] = useState('company');
  const active = hxsReaderViews[view];
  return <div className="hxs-reader">
    <nav aria-label="HUAXINSHENG catalogue preview">{Object.entries(hxsReaderViews).map(([key, item]) => <button type="button" key={key} aria-pressed={view === key} onClick={() => setView(key)}><span>{item.label}</span><small>{item.page}</small></button>)}</nav>
    <div className="hxs-reader-stage" aria-live="polite">
      <img src={active.image} alt={`HUAXINSHENG catalogue page ${active.page}, ${active.note}`}/>
      <div><span>{active.page} / 12</span><strong>{active.note}</strong></div>
    </div>
  </div>;
}

function HxsCaseStudy({ work }) {
  const facts = [['Role','Catalogue design · Art direction'],['Format','12 A3 spreads · 24 A4 pages'],['Language','Vietnamese'],['Typeface','Inter variable family']];
  return <article className="flow-case case-hxs">
    <CaseHeader work={work} variant="hxs" kicker="Company catalogue · Industrial materials · 2026" intro="A compact sales catalogue for welded steel mesh, from company capability to technical application" facts={facts} image={hxs01} imageAlt="HUAXINSHENG catalogue front and back cover in white and deep blue" action="Browse catalogue" note="Final artwork presented from the original HUAXINSHENG X24 PDF"/>

    <section className="flow-section hxs-architecture"><div className="flow-shell">
      <FlowLabel number="01">Catalogue architecture / 12 spreads</FlowLabel>
      <div className="hxs-spread-stack">
        <figure><img src={hxs02} alt="HUAXINSHENG contents and product ecosystem spread"/></figure>
        <figure><img src={hxs03} alt="HUAXINSHENG Vietnam company and logistics capability spread"/></figure>
      </div>
      <ol><li><span>01</span><strong>Company</strong><small>03 to 04</small></li><li><span>02</span><strong>Product</strong><small>05 to 07</small></li><li><span>03</span><strong>Applications</strong><small>08 to 10</small></li><li><span>04</span><strong>Partners</strong><small>11 to 12</small></li></ol>
    </div></section>

    <section className="flow-section hxs-system"><div className="flow-shell">
      <FlowLabel number="02" tone="is-light">Colour + typography</FlowLabel>
      <div className="hxs-system-board">
        <div className="hxs-palette"><span style={{ '--swatch': '#003A78' }}><b>Core navy</b><small>#003A78</small></span><span style={{ '--swatch': '#006DB6' }}><b>Industrial blue</b><small>#006DB6</small></span><span style={{ '--swatch': '#00A7D8' }}><b>Signal cyan</b><small>#00A7D8</small></span><span style={{ '--swatch': '#AFC2D1' }}><b>Steel</b><small>#AFC2D1</small></span><span style={{ '--swatch': '#F4F7F9' }}><b>Paper</b><small>#F4F7F9</small></span></div>
        <div className="hxs-type"><span>Inter / 400 · 600 · 800</span><strong>LƯỚI THÉP HÀN</strong><p>Huaxinsheng Việt Nam</p><small>0123456789 / CRB550 / A3 landscape</small></div>
      </div>
    </div></section>

    <section className="flow-section hxs-product"><div className="flow-shell">
      <FlowLabel number="03">Product proof</FlowLabel>
      <div className="flow-pair hxs-proof-grid"><Visual src={hxs05} alt="Production line and welded steel mesh construction diagrams" number="03A" label="Production + construction"/><Visual src={hxs06} alt="Four core advantages of welded steel mesh" number="03B" label="Core advantages"/></div>
    </div></section>

    <section id="live-demo" className="flow-section hxs-demo"><div className="flow-shell">
      <FlowLabel number="04" tone="is-light">Catalogue reader</FlowLabel>
      <HxsReader/>
    </div></section>

    <section className="flow-section hxs-engineering"><div className="flow-shell">
      <FlowLabel number="05">Engineering detail</FlowLabel>
      <div className="hxs-engineering-grid"><Visual src={hxs07} alt="HUAXINSHENG slab reinforcement details and compliance diagrams"/><Visual src={hxs10} alt="HUAXINSHENG welded mesh technical specification table"/></div>
    </div></section>

    <section className="flow-section hxs-applications"><div className="flow-shell">
      <FlowLabel number="06">Application library</FlowLabel>
      <div className="hxs-application-grid"><Visual src={hxs08} alt="Welded mesh applications for airport deck, refinery and port"/><Visual src={hxs09} alt="Welded mesh applications for tunnel, bridge and water infrastructure"/><Visual src={hxs12} alt="HUAXINSHENG featured industrial projects"/></div>
    </div></section>

    <section className="flow-section hxs-sequence"><div className="flow-shell">
      <FlowLabel number="07" tone="is-light">Complete page sequence</FlowLabel>
      <div className="hxs-page-grid">{hxsPages.map((page, index) => <figure key={page}><img src={page} alt={`HUAXINSHENG catalogue page ${String(index + 1).padStart(2, '0')}`} loading="lazy"/><figcaption>{String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div>
    </div></section>

    <section className="hxs-close"><div className="flow-shell"><span>12 A3 spreads / 24 A4 pages / Vietnamese</span><strong>HUAXINSHENG</strong><small>Company · Product · Application · Projects</small></div></section>
  </article>;
}

export function ShowcaseCaseStudy({ work }) {
  if (work.slug === 'folded-matter') return <VunCaseStudy work={work}/>;
  if (work.slug === 'still-moving') return <HxsCaseStudy work={work}/>;
  return null;
}
