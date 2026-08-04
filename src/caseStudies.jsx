import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowUpRight, BookmarkSimple,
  Headphones, LinkSimple, MapPin, Scan,
} from '@phosphor-icons/react';
import './case-studies.css';

import dauCover from './assets/case-studies/dau-cover.webp';
import dauScreens from './assets/case-studies/dau-screens.webp';
import dauScan from './assets/case-studies/dau-scan.webp';
import dauDesktop from './assets/case-studies/dau-desktop.webp';
import dauMuseum from './assets/case-studies/dau-museum.webp';
import dauStates from './assets/case-studies/dau-states.webp';
import { withoutTrailingPeriod } from './text.js';
import { AttestCaseStudy } from './AttestCaseStudy.jsx';

function ProductHero({ work, variant, label, summary, facts, image, imageAlt, action }) {
  return <section className={`product-hero product-hero-${variant}`}>
    <div className="product-shell">
      <Link className="product-back" to="/#portfolio"><ArrowLeft size={16}/> Portfolio</Link>
      <header className="product-heading">
        <span>{label}</span>
        <h1>{withoutTrailingPeriod(work.title)}</h1>
        <p>{summary}</p>
        <a href="#live-demo">{action}<ArrowUpRight size={17}/></a>
      </header>
      <figure className="product-cover"><img src={image} alt={imageAlt}/></figure>
      <div className="product-meta">
        <dl>{facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
        <p>Self-initiated fictional brief. Original product design, art direction and prototype.</p>
      </div>
    </div>
  </section>;
}

function FlowHeading({ title, copy }) {
  return <header className="product-section-heading"><h2>{withoutTrailingPeriod(title)}</h2>{copy && <p>{copy}</p>}</header>;
}

function ProductVisual({ src, alt, caption, className = '' }) {
  return <figure className={`product-visual ${className}`}><img src={src} alt={alt} width="1536" height="1024" loading="lazy"/>{caption && <figcaption>{caption}</figcaption>}</figure>;
}

const archiveRecords = {
  lacquer: {
    label: 'Sơn mài', title: 'Khảm hoa mai', region: 'Miền Bắc', material: 'Sơn ta và xà cừ', note: 'Motif record with macro detail and maker audio', variant: 'lacquer', code: 'HV-014', period: 'Early 20th century',
  },
  ceramic: {
    label: 'Gốm', title: 'Hoa lam', region: 'Đồng bằng Bắc Bộ', material: 'Đồ gốm tráng men', note: 'Object view with material and production context', variant: 'ceramic', code: 'GM-028', period: '15th century reference',
  },
  textile: {
    label: 'Dệt', title: 'Hình trám chàm', region: 'Trung du phía Bắc', material: 'Sợi bông và chàm', note: 'Pattern record with regional and technique links', variant: 'textile', code: 'DT-041', period: 'Contemporary field record',
  },
};

function DauArtifactVisual({ record, audioPlaying }) {
  return <div className={`dau-artifact is-${record.variant} ${audioPlaying ? 'is-audio-playing' : ''}`}>
    <svg viewBox="0 0 900 620" role="img" aria-label={`${record.title}, ${record.material}`}>
      {record.variant === 'lacquer' && <>
        <rect width="900" height="620" className="dau-artifact-ground"/>
        <path className="dau-branch" d="M-30 520C150 410 218 352 338 247S590 124 930 80"/>
        <path className="dau-branch is-thin" d="M228 350c-4-93 35-166 111-218M460 199c58 13 118 5 183-32M579 145c-5-58 15-101 63-134"/>
        {[[170,410],[260,319],[342,245],[447,204],[558,157],[676,118],[335,137],[638,35]].map(([cx,cy], index) => <g className="dau-pearl-flower" transform={`translate(${cx} ${cy}) rotate(${index * 19})`} key={`${cx}-${cy}`}><ellipse cx="0" cy="-26" rx="13" ry="28"/><ellipse cx="25" cy="-5" rx="13" ry="28" transform="rotate(72)"/><ellipse cx="15" cy="23" rx="13" ry="28" transform="rotate(144)"/><ellipse cx="-15" cy="23" rx="13" ry="28" transform="rotate(216)"/><ellipse cx="-25" cy="-5" rx="13" ry="28" transform="rotate(288)"/><circle r="8"/></g>)}
      </>}
      {record.variant === 'ceramic' && <>
        <rect width="900" height="620" className="dau-artifact-ground"/>
        <circle cx="450" cy="310" r="248" className="dau-ceramic-rim"/>
        <circle cx="450" cy="310" r="205" className="dau-ceramic-ring"/>
        <g className="dau-ceramic-flower" transform="translate(450 310)">{Array.from({ length: 8 }, (_, index) => <ellipse key={index} cx="0" cy="-82" rx="29" ry="88" transform={`rotate(${index * 45})`}/>)}</g>
        <circle cx="450" cy="310" r="38" className="dau-ceramic-core"/>
        <g className="dau-ceramic-leaves">{Array.from({ length: 12 }, (_, index) => <path key={index} d="M450 96c29 36 34 71 4 101-31-28-33-63-4-101Z" transform={`rotate(${index * 30} 450 310)`}/>)}</g>
      </>}
      {record.variant === 'textile' && <>
        <defs><pattern id="dau-weave" width="132" height="132" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="132" height="132" className="dau-artifact-ground"/><rect x="16" y="16" width="100" height="100" className="dau-textile-diamond"/><rect x="42" y="42" width="48" height="48" className="dau-textile-core"/><path d="M0 8h132M0 124h132M8 0v132M124 0v132" className="dau-textile-thread"/></pattern></defs>
        <rect width="900" height="620" fill="url(#dau-weave)"/>
        <path className="dau-textile-band" d="M0 220h900v180H0z"/>
        <path className="dau-textile-stitch" d="M0 310h900M64 220l90 90-90 90m180-180 90 90-90 90m180-180 90 90-90 90m180-180 90 90-90 90m180-180 90 90-90 90"/>
      </>}
    </svg>
    <div className="dau-artifact-index"><span>{record.code}</span><strong>{record.label}</strong><small>{record.period}</small></div>
    <div className="dau-artifact-wave" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index}/>)}</div>
  </div>;
}

function DauArchiveDemo() {
  const [recordKey, setRecordKey] = useState('lacquer');
  const [saved, setSaved] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const record = archiveRecords[recordKey];
  const chooseRecord = (key) => { setRecordKey(key); setSaved(false); setAudioPlaying(false); };
  return <div className="dau-demo">
    <nav aria-label="Archive material sample">{Object.entries(archiveRecords).map(([key, item]) => <button key={key} type="button" aria-pressed={recordKey === key} onClick={() => chooseRecord(key)}>{item.label}</button>)}</nav>
    <div className="dau-demo-stage">
      <div className="dau-demo-art"><DauArtifactVisual record={record} audioPlaying={audioPlaying}/><span><Scan size={18}/> Recognition preview</span></div>
      <aside aria-live="polite">
        <span>Sample archive record</span>
        <h3>{record.title}</h3>
        <dl><div><dt><MapPin size={16}/> Region</dt><dd>{record.region}</dd></div><div><dt><LinkSimple size={16}/> Material</dt><dd>{record.material}</dd></div></dl>
        <p>{record.note}</p>
        <div className="dau-demo-actions"><button type="button" aria-pressed={audioPlaying} onClick={() => setAudioPlaying((value) => !value)}><Headphones size={17} weight={audioPlaying ? 'fill' : 'regular'}/>{audioPlaying ? 'Audio preview on' : 'Maker audio'}</button><button type="button" aria-pressed={saved} onClick={() => setSaved((value) => !value)}><BookmarkSimple size={17} weight={saved ? 'fill' : 'regular'}/>{saved ? 'Saved' : 'Save'}</button></div>
      </aside>
    </div>
  </div>;
}

function DauIdentityBoard() {
  return <div className="dau-identity-board" aria-label="DẤU color palette and typography">
    <div className="dau-palette"><span style={{ '--swatch': '#2545C6' }}><b>Cobalt</b><small>#2545C6</small></span><span style={{ '--swatch': '#16191C' }}><b>Archive ink</b><small>#16191C</small></span><span style={{ '--swatch': '#E6E7E4' }}><b>Museum grey</b><small>#E6E7E4</small></span><span style={{ '--swatch': '#D7CA9F' }}><b>Artifact gold</b><small>#D7CA9F</small></span></div>
    <div className="dau-type-specimen"><span>Playfair Display + Manrope</span><strong>Dấu tích</strong><p>Ă Â Ê Ô Ơ Ư Đ</p><small>Sơn mài · Gốm · Dệt</small></div>
  </div>;
}

function DauCaseStudy({ work }) {
  const facts = [['Role','Product strategy, UX/UI'],['Platform','Responsive web and mobile'],['Core flows','Explore, scan, listen, save'],['Prototype','Interactive archive finder']];
  return <article className="product-case case-dau">
    <ProductHero work={work} variant="dau" label="Cultural archive / web app / 2026" summary="Scan a craft motif, find its context, and keep the maker's voice attached" facts={facts} image={dauCover} imageAlt="DẤU cultural archive across laptop and phone beside lacquer, textile and ceramic objects" action="Try archive finder"/>

    <section className="product-section dau-system"><div className="product-shell"><FlowHeading title="Colour + typography"/><DauIdentityBoard/></div></section>

    <section className="product-section dau-screen-run"><div className="product-shell"><FlowHeading title="One archive across every visit" copy="Discovery, map, material filters, saved records and maker audio"/><ProductVisual src={dauScreens} alt="DẤU mobile and tablet screen family for discovery, map, filtering, collections, audio and artifact detail"/></div></section>

    <section id="live-demo" className="product-section dau-live"><div className="product-shell"><FlowHeading title="Explore the sample archive" copy="Switch material families and save a record"/><DauArchiveDemo/></div></section>

    <section className="product-section dau-scan-flow"><div className="product-shell"><FlowHeading title="Recognition stays connected to context"/><ProductVisual src={dauScan} alt="DẤU motif recognition on a lacquer cabinet with object story and maker audio on tablet"/></div></section>

    <section className="product-section dau-desktop-flow"><div className="product-shell"><FlowHeading title="Large collections remain visual"/><ProductVisual src={dauDesktop} alt="DẤU desktop archive grid and tablet artifact detail with zoom, provenance and audio"/></div></section>

    <section className="product-section dau-use"><div className="product-shell"><FlowHeading title="Designed for the gallery floor"/><div className="product-pair"><ProductVisual src={dauMuseum} alt="Visitors using DẤU scan, audio and archive map inside a craft exhibition" caption="Museum mode"/><ProductVisual src={dauStates} alt="DẤU permission, no-match, offline and accessibility interface states" caption="Product states"/></div></div></section>

    <section className="dau-close"><div className="product-shell"><strong>DẤU</strong><dl><div><dt>Discovery</dt><dd>Image archive, map and material filters</dd></div><div><dt>Visit</dt><dd>Motif scan, object context and maker audio</dd></div><div><dt>Access</dt><dd>Offline records, text scale and audio controls</dd></div></dl></div></section>
  </article>;
}

export function DeepCaseStudy({ work }) {
  if (work.caseKey === 'mat') return <DauCaseStudy work={work}/>;
  if (work.caseKey === 'attest') return <AttestCaseStudy work={work}/>;
  return null;
}
