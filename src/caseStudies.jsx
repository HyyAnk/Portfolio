import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowUpRight, ArrowsLeftRight, BookmarkSimple, CaretRight,
  Headphones, LinkSimple, MapPin, Needle, Recycle, Scan, ShieldCheck,
} from '@phosphor-icons/react';
import './case-studies.css';

import dauCover from './assets/case-studies/dau-cover.webp';
import dauScreens from './assets/case-studies/dau-screens.webp';
import dauScan from './assets/case-studies/dau-scan.webp';
import dauDesktop from './assets/case-studies/dau-desktop.webp';
import dauMuseum from './assets/case-studies/dau-museum.webp';
import dauStates from './assets/case-studies/dau-states.webp';
import vetCover from './assets/case-studies/vet-cover.webp';
import vetPhysical from './assets/case-studies/vet-physical.webp';
import vetMobile from './assets/case-studies/vet-mobile.webp';
import vetConsole from './assets/case-studies/vet-console.webp';
import vetScan from './assets/case-studies/vet-scan.webp';
import vetLifecycle from './assets/case-studies/vet-lifecycle.webp';
import { withoutTrailingPeriod } from './text.js';

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

function DauCaseStudy({ work }) {
  const facts = [['Role','Product strategy, UX/UI'],['Platform','Responsive web and mobile'],['Core flows','Explore, scan, listen, save'],['Prototype','Interactive archive finder']];
  return <article className="product-case case-dau">
    <ProductHero work={work} variant="dau" label="Cultural archive / web app / 2026" summary="Scan a craft motif, find its context, and keep the maker's voice attached" facts={facts} image={dauCover} imageAlt="DẤU cultural archive across laptop and phone beside lacquer, textile and ceramic objects" action="Try archive finder"/>

    <section className="product-section dau-screen-run"><div className="product-shell"><FlowHeading title="One archive across every visit" copy="Discovery, map, material filters, saved records and maker audio"/><ProductVisual src={dauScreens} alt="DẤU mobile and tablet screen family for discovery, map, filtering, collections, audio and artifact detail"/></div></section>

    <section id="live-demo" className="product-section dau-live"><div className="product-shell"><FlowHeading title="Explore the sample archive" copy="Switch material families and save a record"/><DauArchiveDemo/></div></section>

    <section className="product-section dau-scan-flow"><div className="product-shell"><FlowHeading title="Recognition stays connected to context"/><ProductVisual src={dauScan} alt="DẤU motif recognition on a lacquer cabinet with object story and maker audio on tablet"/></div></section>

    <section className="product-section dau-desktop-flow"><div className="product-shell"><FlowHeading title="Large collections remain visual"/><ProductVisual src={dauDesktop} alt="DẤU desktop archive grid and tablet artifact detail with zoom, provenance and audio"/></div></section>

    <section className="product-section dau-use"><div className="product-shell"><FlowHeading title="Designed for the gallery floor"/><div className="product-pair"><ProductVisual src={dauMuseum} alt="Visitors using DẤU scan, audio and archive map inside a craft exhibition" caption="Museum mode"/><ProductVisual src={dauStates} alt="DẤU permission, no-match, offline and accessibility interface states" caption="Product states"/></div></div></section>

    <section className="dau-close"><div className="product-shell"><strong>DẤU</strong><dl><div><dt>Discovery</dt><dd>Image archive, map and material filters</dd></div><div><dt>Visit</dt><dd>Motif scan, object context and maker audio</dd></div><div><dt>Access</dt><dd>Offline records, text scale and audio controls</dd></div></dl></div></section>
  </article>;
}

const passportEvents = [
  { key:'issued', label:'Issued', icon:ShieldCheck, event:'PassportIssued', actor:'Studio administrator', record:'Fiber declaration and maker certificate', result:'Passport active' },
  { key:'repair', label:'Repair', icon:Needle, event:'RepairAdded', actor:'Repair partner', record:'Work note and component update', result:'History updated' },
  { key:'transfer', label:'Transfer', icon:ArrowsLeftRight, event:'OwnershipTransferred', actor:'Current and next owner', record:'Signed transfer approval', result:'Ownership moved' },
  { key:'recover', label:'Recovery', icon:Recycle, event:'RecoveryRouteAdded', actor:'Material recovery partner', record:'End-of-life routing note', result:'Next use recorded' },
];

function VetPassportDemo() {
  const [activeKey, setActiveKey] = useState('issued');
  const [confirmed, setConfirmed] = useState(false);
  const active = passportEvents.find((item) => item.key === activeKey);
  const ActiveIcon = active.icon;
  const choose = (key) => { setActiveKey(key); setConfirmed(false); };
  return <div className="vet-demo">
    <header><strong>VẾT</strong><span>EVM testnet simulation</span></header>
    <div className="vet-demo-grid">
      <nav aria-label="Passport event preview">{passportEvents.map((item) => { const Icon = item.icon; return <button type="button" key={item.key} aria-pressed={activeKey === item.key} onClick={() => choose(item.key)}><Icon size={19}/><span>{item.label}</span></button>; })}</nav>
      <section aria-live="polite">
        <div className="vet-event-title"><ActiveIcon size={29}/><div><span>Contract event</span><h3>{active.event}</h3></div></div>
        <dl><div><dt>Actor</dt><dd>{active.actor}</dd></div><div><dt>Record</dt><dd>{active.record}</dd></div><div><dt>Result</dt><dd>{confirmed ? active.result : 'Ready to simulate'}</dd></div></dl>
        <button type="button" className="vet-confirm" onClick={() => setConfirmed(true)} disabled={confirmed}>{confirmed ? 'Event recorded' : 'Simulate event'}<CaretRight size={17}/></button>
      </section>
      <aside><span>Garment passport</span><strong>24-SS-B07-0007</strong><small>{confirmed ? active.result : 'Local prototype only'}</small><div className={`vet-passport-visual is-${activeKey} ${confirmed ? 'is-confirmed' : ''}`}>
        <svg viewBox="0 0 180 220" role="img" aria-label="Utility Jacket 07 passport preview"><path d="M62 25 33 48 18 102l27 10 8-31v117h74V81l8 31 27-10-15-54-29-23-15 15H77L62 25Z"/><path d="M76 40v30h28V40M54 91h28v38H54m44-38h28v38H98M90 70v128"/></svg>
        <div>{passportEvents.map((item) => <i className={item.key === activeKey ? 'is-current' : ''} key={item.key}/>)}</div>
        <b>{active.label}</b>
      </div></aside>
    </div>
  </div>;
}

function VetCaseStudy({ work }) {
  const facts = [['Role','Product strategy, UX/UI'],['System','Product passport and event registry'],['Interfaces','Brand console, item view, resale'],['Prototype','Local EVM event simulation']];
  return <article className="product-case case-vet">
    <ProductHero work={work} variant="vet" label="Blockchain product / digital passport / 2026" summary="A garment record for origin, repair and resale, with verification kept behind the interface" facts={facts} image={vetCover} imageAlt="VẾT garment passport across NFC tag, phone and batch console beside a black jacket" action="Try passport events"/>

    <section className="product-section vet-physical"><div className="product-shell"><FlowHeading title="The passport starts on the garment" copy="NFC label, serial tag, care card and repair sample"/><ProductVisual src={vetPhysical} alt="VẾT physical product passport kit with NFC labels, metal tags, care cards and repair samples"/></div></section>

    <section className="product-section vet-mobile"><div className="product-shell"><FlowHeading title="Product information before chain data"/><ProductVisual src={vetMobile} alt="VẾT mobile screens for garment overview, materials, batch, repair and ownership transfer"/></div></section>

    <section id="live-demo" className="product-section vet-live"><div className="product-shell"><FlowHeading title="Preview the event registry" copy="A local simulation of four lifecycle events"/><VetPassportDemo/></div></section>

    <section className="product-section vet-console"><div className="product-shell"><FlowHeading title="Brands register the batch once"/><ProductVisual src={vetConsole} alt="VẾT batch registration console and item verification tablet inside a fashion production studio"/></div></section>

    <section className="product-section vet-use"><div className="product-shell"><FlowHeading title="Verification works at the point of use"/><ProductVisual src={vetScan} alt="Customer scanning a VẾT NFC label and reviewing repair and ownership history in a boutique"/></div></section>

    <section className="product-section vet-lifecycle"><div className="product-shell"><FlowHeading title="History follows repair and resale"/><ProductVisual src={vetLifecycle} alt="VẾT ownership transfer, lifecycle events and verified resale listing across devices"/></div></section>

    <section className="vet-close"><div className="product-shell"><strong>VẾT</strong><div className="vet-event-rail">{passportEvents.map((item) => <span key={item.key}>{item.event}</span>)}</div><p>Interface prototype only. No production chain or commercial deployment is implied.</p></div></section>
  </article>;
}

export function DeepCaseStudy({ work }) {
  if (work.slug === 'mat') return <DauCaseStudy work={work}/>;
  if (work.slug === 'kitepay') return <VetCaseStudy work={work}/>;
  return null;
}
