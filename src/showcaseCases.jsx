import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AirplaneTilt, ArrowLeft, ArrowUpRight, Pause, Play } from '@phosphor-icons/react';
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
import hailongCover from './assets/case-studies/hailong-cover.webp';
import taiyoCover from './assets/case-studies/taiyo-cover.webp';
import taiyoHandover from './assets/case-studies/taiyo-handover.webp';
import taiyoArtboard01 from './assets/case-studies/taiyo-artboard-01.webp';
import taiyoArtboard02 from './assets/case-studies/taiyo-artboard-02.webp';
import taiyoArtboard03 from './assets/case-studies/taiyo-artboard-03.webp';
import taiyoPlaneDetail from './assets/case-studies/taiyo-plane-detail.webp';
import taiyoAddressDetail from './assets/case-studies/taiyo-address-detail.webp';
import taiyoWaveDetail from './assets/case-studies/taiyo-wave-detail.webp';
import { withoutTrailingPeriod } from './text.js';

const hailongSlideModules = import.meta.glob('./assets/case-studies/hailong-[0-9][0-9].webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const hailongSlides = Object.entries(hailongSlideModules)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([, source]) => source);

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

const hailongReaderViews = {
  credentials: { label: 'Credentials', slide: 7, note: 'Certificates and international standards' },
  capacity: { label: 'Capacity', slide: 18, note: 'People, machinery and factory scale' },
  production: { label: 'Production', slide: 22, note: 'Smart line and automated fabrication' },
  projects: { label: 'Projects', slide: 26, note: 'Industrial projects across Vietnam' },
  hse: { label: 'HSE', slide: 39, note: 'Safety training and site practice' },
};

function HailongReader() {
  const [view, setView] = useState('production');
  const active = hailongReaderViews[view];
  const pageNumber = String(active.slide + 1).padStart(2, '0');
  return <div className="hailong-reader">
    <nav aria-label="Hai Long presentation preview">{Object.entries(hailongReaderViews).map(([key, item]) => <button type="button" key={key} aria-pressed={view === key} onClick={() => setView(key)}><span>{item.label}</span><small>{String(item.slide + 1).padStart(2, '0')}</small></button>)}</nav>
    <div className="hailong-reader-stage" aria-live="polite">
      <img src={hailongSlides[active.slide]} alt={`Hai Long presentation slide ${pageNumber}, ${active.note}`}/>
      <div><span>{pageNumber} / 43</span><strong>{active.note}</strong></div>
    </div>
  </div>;
}

function HailongCaseStudy({ work }) {
  const facts = [['Role','Presentation design · Art direction'],['Format','43 slides · 16:9'],['Language','English'],['Type','SFU Futura · Inter · Oswald']];
  const chapterSlides = [1, 3, 10, 17, 25, 39];
  const capabilitySlides = [17, 19, 22, 24];
  const projectSlides = [26, 28, 31, 32, 35, 36];
  return <article className="flow-case case-hailong">
    <CaseHeader work={work} variant="hailong" kicker="Corporate presentation · Construction · 2026" intro="A 43-slide company presentation built to turn industrial scale into a clear business story" facts={facts} image={hailongCover} imageAlt="Hai Long Construction presentation displayed in a modern executive meeting room" action="Open presentation reader" note="Final presentation artwork shown from the original Hai Long Construction PDF"/>

    <section className="flow-section hailong-architecture"><div className="flow-shell">
      <FlowLabel number="01">Narrative architecture / 43 slides</FlowLabel>
      <div className="hailong-slide-flight" aria-label="Hai Long presentation cover, certification and production slides">
        {[0, 7, 22].map((index) => <figure key={index}><img src={hailongSlides[index]} alt={`Hai Long presentation slide ${String(index + 1).padStart(2, '0')}`}/></figure>)}
      </div>
      <ol>{[['Company','02-10'],['Services','11-16'],['Capability','17-25'],['Projects','26-39'],['HSE','40-42'],['Close','43']].map(([label, range], index) => <li key={label}><span>{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong><small>{range}</small></li>)}</ol>
    </div></section>

    <section className="flow-section hailong-sequence-intro"><div className="flow-shell">
      <FlowLabel number="02">Story rhythm</FlowLabel>
      <div className="hailong-chapter-strip">{chapterSlides.map((index, order) => <figure key={index}><img src={hailongSlides[index]} alt={`Hai Long chapter slide ${String(index + 1).padStart(2, '0')}`} loading="lazy"/><figcaption><span>{String(order + 1).padStart(2, '0')}</span><strong>{['Leadership','Journey','Services','People','Map','Safety'][order]}</strong></figcaption></figure>)}</div>
    </div></section>

    <section className="flow-section hailong-system"><div className="flow-shell">
      <FlowLabel number="03" tone="is-light">Colour + typography</FlowLabel>
      <div className="hailong-system-board">
        <div className="hailong-palette"><span style={{ '--swatch': '#074F9D' }}><b>Build blue</b><small>#074F9D</small></span><span style={{ '--swatch': '#1684DE' }}><b>Signal blue</b><small>#1684DE</small></span><span style={{ '--swatch': '#ED3B3F' }}><b>Safety red</b><small>#ED3B3F</small></span><span style={{ '--swatch': '#DCEBFA' }}><b>Ice blue</b><small>#DCEBFA</small></span><span style={{ '--swatch': '#F8FBFF' }}><b>Clear white</b><small>#F8FBFF</small></span></div>
        <div className="hailong-type">
          <span>Display / SFU Futura Bold</span><strong>BUILD TO LAST</strong>
          <p>Inter 400 · 500 · 700</p><b>OSWALD 600 / 1,300 TONS</b>
          <small>One condensed voice for scale, one neutral voice for evidence</small>
        </div>
      </div>
    </div></section>

    <section className="flow-section hailong-capability"><div className="flow-shell">
      <FlowLabel number="04">Capability at scale</FlowLabel>
      <div className="hailong-capability-grid">{capabilitySlides.map((index, order) => <Visual key={index} src={hailongSlides[index]} alt={`Hai Long capability slide ${String(index + 1).padStart(2, '0')}`} number={`04${String.fromCharCode(65 + order)}`} label={['Human resources','Factory volume','Smart production','Finishing system'][order]}/>)}</div>
    </div></section>

    <section id="live-demo" className="flow-section hailong-demo"><div className="flow-shell">
      <FlowLabel number="05" tone="is-light">Presentation reader</FlowLabel>
      <HailongReader/>
    </div></section>

    <section className="flow-section hailong-projects"><div className="flow-shell">
      <FlowLabel number="06">Built project library</FlowLabel>
      <div className="hailong-project-grid">{projectSlides.map((index) => <figure key={index}><img src={hailongSlides[index]} alt={`Hai Long completed project slide ${String(index + 1).padStart(2, '0')}`} loading="lazy"/><figcaption>{String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div>
    </div></section>

    <section className="flow-section hailong-complete"><div className="flow-shell">
      <FlowLabel number="07" tone="is-light">Complete presentation sequence</FlowLabel>
      <div className="hailong-page-grid">{hailongSlides.map((slide, index) => <figure key={slide}><img src={slide} alt={`Hai Long presentation slide ${String(index + 1).padStart(2, '0')}`} loading="lazy"/><figcaption>{String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div>
    </div></section>

    <section className="hailong-close"><img src={hailongSlides[42]} alt="Hai Long Construction closing presentation slide"/><div><span>43 slides / 16:9 / English</span><strong>HAI LONG</strong><small>Company · Capability · Production · Projects · HSE</small></div></section>
  </article>;
}

const taiyoFormats = {
  master: { label: 'Master artwork', image: taiyoArtboard01, note: 'Full envelope surface and hierarchy', code: '01' },
  wide: { label: 'Wide format', image: taiyoArtboard02, note: 'Landscape travel-document format', code: '02' },
  compact: { label: 'Compact format', image: taiyoArtboard03, note: 'Reduced counter handover format', code: '03' },
};

function TaiyoFormatPreview() {
  const [format, setFormat] = useState('wide');
  const active = taiyoFormats[format];
  return <div className="taiyo-format-preview">
    <nav aria-label="Taiyo Tourist envelope formats">{Object.entries(taiyoFormats).map(([key, item]) => <button type="button" key={key} aria-pressed={format === key} onClick={() => setFormat(key)}><span>{item.label}</span><small>{item.code}</small></button>)}</nav>
    <div className={`taiyo-format-stage is-${format}`} aria-live="polite">
      <figure><img src={active.image} alt={`${active.label}, ${active.note}`}/></figure>
      <div><span>{active.code} / 03</span><strong>{active.note}</strong></div>
    </div>
  </div>;
}

function TaiyoEnvelopeMotion() {
  return <div className="taiyo-route-reel" role="group" aria-label="Taiyo Tourist travel document route from confirmed itinerary to passenger handover">
    <div className="taiyo-route-heading">
      <span>Travel document journey</span>
      <strong>Ready for departure</strong>
    </div>

    <figure className="taiyo-route-handover" aria-hidden="true">
      <img src={taiyoHandover} alt=""/>
      <figcaption><span>Taiyo Tourist</span><b>Travel pack handover</b></figcaption>
    </figure>

    <svg className="taiyo-route-map is-desktop" viewBox="0 0 1400 720" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="taiyo-route-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#69c9ed"/>
          <stop offset="0.72" stopColor="#f8fbfd"/>
          <stop offset="1" stopColor="#f2c84b"/>
        </linearGradient>
        <path id="taiyo-flight-route" pathLength="1" d="M 105 520 C 275 558 328 424 456 397 C 592 368 632 463 724 425 C 858 370 874 274 1036 245 C 1156 223 1218 295 1314 202"/>
      </defs>

      <path className="taiyo-route-echo" d="M 52 575 C 240 610 332 494 468 466 C 612 437 665 526 780 474 C 914 414 950 332 1082 310"/>
      <use className="taiyo-route-guide" href="#taiyo-flight-route"/>
      <use className="taiyo-route-progress" href="#taiyo-flight-route" pathLength="1"/>
      <use className="taiyo-route-signal" href="#taiyo-flight-route" pathLength="1"/>

      <g className="taiyo-route-node is-booking" transform="translate(105 520)">
        <circle className="taiyo-route-node-ring" r="18"/>
        <circle className="taiyo-route-node-core" r="5"/>
      </g>
      <g className="taiyo-route-node is-documents" transform="translate(724 425)">
        <circle className="taiyo-route-node-ring" r="18"/>
        <circle className="taiyo-route-node-core" r="5"/>
      </g>
      <g className="taiyo-route-node is-handover" transform="translate(1314 202)">
        <circle className="taiyo-route-node-ring" r="20"/>
        <circle className="taiyo-route-node-core" r="6"/>
      </g>

      <g className="taiyo-route-aircraft">
        <circle className="taiyo-route-aircraft-halo" r="34"/>
        <foreignObject x="-27" y="-27" width="54" height="54">
          <AirplaneTilt className="taiyo-route-aircraft-icon" size={54} weight="fill"/>
        </foreignObject>
        <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;0.48;0.48;1;1" keyTimes="0;0.08;0.34;0.43;0.77;1" calcMode="linear">
          <mpath href="#taiyo-flight-route"/>
        </animateMotion>
      </g>
      <g className="taiyo-route-aircraft-static" transform="translate(1314 202) rotate(-16)">
        <foreignObject x="-24" y="-24" width="48" height="48">
          <AirplaneTilt size={48} weight="fill"/>
        </foreignObject>
      </g>
    </svg>

    <svg className="taiyo-route-map is-mobile" viewBox="0 0 420 720" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs><path id="taiyo-flight-route-mobile" pathLength="1" d="M 36 480 C 126 524 174 411 228 368 C 287 321 314 222 382 166"/></defs>
      <path className="taiyo-route-echo" d="M 12 536 C 122 570 185 474 246 428 C 306 384 347 292 410 244"/>
      <use className="taiyo-route-guide" href="#taiyo-flight-route-mobile"/>
      <use className="taiyo-route-progress" href="#taiyo-flight-route-mobile"/>
      <use className="taiyo-route-signal" href="#taiyo-flight-route-mobile"/>
      <g className="taiyo-route-node is-booking" transform="translate(36 480)"><circle className="taiyo-route-node-ring" r="15"/><circle className="taiyo-route-node-core" r="5"/></g>
      <g className="taiyo-route-node is-documents" transform="translate(228 368)"><circle className="taiyo-route-node-ring" r="15"/><circle className="taiyo-route-node-core" r="5"/></g>
      <g className="taiyo-route-node is-handover" transform="translate(382 166)"><circle className="taiyo-route-node-ring" r="17"/><circle className="taiyo-route-node-core" r="6"/></g>
      <g className="taiyo-route-aircraft">
        <circle className="taiyo-route-aircraft-halo" r="28"/>
        <foreignObject x="-23" y="-23" width="46" height="46"><AirplaneTilt className="taiyo-route-aircraft-icon" size={46} weight="fill"/></foreignObject>
        <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" keyPoints="0;0;0.55;0.55;1;1" keyTimes="0;0.08;0.34;0.43;0.77;1" calcMode="linear"><mpath href="#taiyo-flight-route-mobile"/></animateMotion>
      </g>
      <g className="taiyo-route-aircraft-static" transform="translate(382 166) rotate(-28)"><foreignObject x="-21" y="-21" width="42" height="42"><AirplaneTilt size={42} weight="fill"/></foreignObject></g>
    </svg>

    <div className="taiyo-route-stops">
      <article className="is-booking"><span>Booking</span><b>Itinerary confirmed</b></article>
      <article className="is-documents"><span>Travel documents</span><b>Ticket and passport packed</b></article>
      <article className="is-handover"><span>Departure</span><b>Envelope handed over</b></article>
    </div>

    <div className="taiyo-route-footer"><span>One journey</span><i/><span>One document system</span></div>
  </div>;
}

function TaiyoCaseStudy({ work }) {
  const facts = [['Role','Packaging design · Artwork'],['Application','Travel document envelope'],['System','3 artwork formats'],['Output','CMYK print-ready PDF']];
  const artboards = [taiyoArtboard01, taiyoArtboard02, taiyoArtboard03];
  return <article className="flow-case case-taiyo">
    <CaseHeader work={work} variant="taiyo" kicker="Brand application · Travel packaging · 2026" intro="A three-format envelope system for handing over itineraries, tickets and travel documents" facts={facts} image={taiyoCover} imageAlt="Taiyo Tourist branded envelope set arranged on an airport lounge concierge desk" action="Explore envelope formats" note="Final envelope artwork presented from the original Taiyo Tourist print PDF"/>

    <section className="flow-section taiyo-artwork"><div className="flow-shell">
      <FlowLabel number="01">Artwork system / 3 formats</FlowLabel>
      <div className="taiyo-artboard-stack">{artboards.map((image, index) => <figure key={image}><img src={image} alt={`Taiyo Tourist envelope artwork format ${index + 1}`}/><figcaption>{String(index + 1).padStart(2, '0')} / 03</figcaption></figure>)}</div>
    </div></section>

    <section className="flow-section taiyo-identity"><div className="flow-shell">
      <FlowLabel number="02" tone="is-light">Colour + type + graphic cues</FlowLabel>
      <div className="taiyo-identity-board">
        <div className="taiyo-palette"><span style={{ '--swatch': '#123B75' }}><b>Journey navy</b><small>#123B75</small></span><span style={{ '--swatch': '#155CAA' }}><b>Taiyo blue</b><small>#155CAA</small></span><span style={{ '--swatch': '#1DB4E6' }}><b>Sky cyan</b><small>#1DB4E6</small></span><span style={{ '--swatch': '#E51E2A' }}><b>Route red</b><small>#E51E2A</small></span><span style={{ '--swatch': '#FFD21A' }}><b>Sun yellow</b><small>#FFD21A</small></span></div>
        <div className="taiyo-type"><span>Logo / custom outlined lettering</span><strong>TAIYO<span>TOURIST</span></strong><p>Geometric sans / contact system</p><small>Uppercase structure with a calligraphic travel accent</small></div>
      </div>
      <div className="taiyo-detail-strip">
        <figure className="is-aircraft"><div className="taiyo-detail-media"><img src={taiyoPlaneDetail} alt="Taiyo Tourist aircraft and route-line graphic detail"/></div><figcaption>Aircraft / route motion</figcaption></figure>
        <figure className="is-recipient"><div className="taiyo-detail-media"><img src={taiyoAddressDetail} alt="Complete Taiyo Tourist recipient writing field"/></div><figcaption>Recipient / writing field</figcaption></figure>
        <figure className="is-contact"><div className="taiyo-detail-media"><img src={taiyoWaveDetail} alt="Complete Taiyo Tourist address and phone contact band"/></div><figcaption>Address / contact band</figcaption></figure>
      </div>
    </div></section>

    <section className="taiyo-handover"><figure><img src={taiyoHandover} alt="Taiyo Tourist envelope used as a travel document handover kit at a service counter"/></figure><div><span>03</span><strong>Travel document handover</strong><small>Envelope / passport / itinerary / voucher</small></div></section>

    <section id="live-demo" className="flow-section taiyo-format"><div className="flow-shell">
      <FlowLabel number="04">Format preview</FlowLabel>
      <TaiyoFormatPreview/>
    </div></section>

    <section className="flow-section taiyo-production"><div className="flow-shell">
      <FlowLabel number="05" tone="is-light">Print construction</FlowLabel>
      <div className="taiyo-production-board">
        <div className="taiyo-envelope-plan">
          <svg viewBox="0 0 760 460" role="img" aria-label="Envelope front, fold and flap construction diagram">
            <path className="taiyo-plan-cut" d="M78 118h604v265H78z"/>
            <path className="taiyo-plan-fold" d="M78 118 380 282l302-164M78 383l208-160M682 383 474 223"/>
            <path className="taiyo-plan-flap" d="M78 118 185 40h390l107 78"/>
            <circle cx="78" cy="118" r="5"/><circle cx="682" cy="118" r="5"/><circle cx="78" cy="383" r="5"/><circle cx="682" cy="383" r="5"/>
          </svg>
          <span>Cut line</span><span>Fold line</span><span>Glue flap</span>
        </div>
        <dl><div><dt>Colour</dt><dd>CMYK / process</dd></div><div><dt>Surface</dt><dd>Uncoated white stock</dd></div><div><dt>Finish</dt><dd>Scored / folded / glued</dd></div><div><dt>Artwork</dt><dd>Outlined vector PDF</dd></div></dl>
      </div>
    </div></section>

    <section className="flow-section taiyo-originals"><div className="flow-shell">
      <FlowLabel number="06">Original print artboards</FlowLabel>
      <div className="taiyo-original-grid">{artboards.map((image, index) => <figure key={image}><img src={image} alt={`Original Taiyo Tourist print artboard ${index + 1}`} loading="lazy"/><figcaption><span>{String(index + 1).padStart(2, '0')}</span><strong>{['Master surface','Wide envelope','Compact envelope'][index]}</strong></figcaption></figure>)}</div>
    </div></section>

    <section className="taiyo-close"><TaiyoEnvelopeMotion/><div className="flow-shell"><span>3 formats / print-ready / physical application</span><strong>TAIYO TOURIST</strong><small>Artwork · Packaging · Handover</small></div></section>
  </article>;
}

export function ShowcaseCaseStudy({ work }) {
  if (work.caseKey === 'folded-matter') return <VunCaseStudy work={work}/>;
  if (work.caseKey === 'still-moving') return <HxsCaseStudy work={work}/>;
  if (work.caseKey === 'hailong-presentation') return <HailongCaseStudy work={work}/>;
  if (work.caseKey === 'taiyo-envelope') return <TaiyoCaseStudy work={work}/>;
  return null;
}
