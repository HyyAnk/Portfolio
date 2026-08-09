import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight, Browser, CheckCircle,
  Code, Cube, CursorClick, Devices, Fingerprint,
  FlowArrow, FrameCorners, LinkSimple,
  PlugsConnected,
  Scissors, SlidersHorizontal, SpeakerHigh,
  TerminalWindow, TextAa, TextAlignCenter, TextAlignLeft, Wallet, Warning,
  WarningCircle, Waveform, XCircle,
} from '@phosphor-icons/react';

import videoSequence from './assets/skills/video-sequence.webp';
import graphicKeyVisual from './assets/skills/graphic-keyvisual.webp';
import videoKeyVisual from './assets/skills/video-keyvisual.webp';
import webKeyVisual from './assets/skills/web-keyvisual.webp';
import automationKeyVisual from './assets/skills/automation-keyvisual.webp';
import automationWorkflowVisual from './assets/generated/work-automation.webp';
import vunPackaging from './assets/case-studies/vun-packaging.webp';
import vunSpace from './assets/case-studies/vun-space.webp';
import vunDigital from './assets/case-studies/vun-digital.webp';
import dauCover from './assets/case-studies/dau-cover.webp';
import dauScreens from './assets/case-studies/dau-screens.webp';
import dauScan from './assets/case-studies/dau-scan.webp';
import dauDesktop from './assets/case-studies/dau-desktop.webp';
import dauStates from './assets/case-studies/dau-states.webp';
import dauMuseum from './assets/case-studies/dau-museum.webp';
import hxsContents from './assets/case-studies/hxs-02.webp';
import hxsProduct from './assets/case-studies/hxs-05.webp';
import hxsEngineering from './assets/case-studies/hxs-07.webp';
import hxsProjects from './assets/case-studies/hxs-12.webp';
import attestCover from './assets/case-studies/attest-cover.webp';
import attestKit from './assets/case-studies/attest-kit.webp';
import attestMaker from './assets/case-studies/attest-maker.webp';
import attestScan from './assets/case-studies/attest-scan.webp';
import attestTransfer from './assets/case-studies/attest-transfer.webp';
import { withoutTrailingPeriod } from './text.js';
import './skill-showcase.css';
import './ui-showcase-v2.css';
import './automation-showcase-v2.css';
import './blockchain-showcase-v2.css';

function ArrowLink({ children, to = '#contact' }) {
  return <a className="arrow-link" href={to}>{children}<ArrowUpRight size={17} /></a>;
}

const graphicIdentityEvidenceV2 = [
  { image: vunSpace, alt: 'VỤN identity applied to a material exhibition, product plinths and wayfinding', context: 'Spatial', outcome: 'Gallery and wayfinding', rule: 'V fragment, vermilion path and material display', className: 'is-wide' },
  { image: vunPackaging, alt: 'VỤN identity applied to product packaging, tags and recovered-material objects', context: 'Physical', outcome: 'Packaging and object tags', rule: 'Four colours, fitted structures and numbered samples' },
  { image: vunDigital, alt: 'VỤN catalogue across laptop, tablet and mobile', context: 'Digital', outcome: 'Responsive catalogue', rule: 'Product view, material filter and circularity trace' },
];

const evidenceSpecimens = {
  display: { label: 'Cover', text: 'HUAXINSHENG', size: 'clamp(2.4rem, 6.4vw, 6.8rem)', width: '12ch', role: 'Primary identification', setting: 'Inter 800 / 64 to 104 px' },
  editorial: { label: 'Section', text: 'Lưới thép hàn', size: 'clamp(2.25rem, 5vw, 5.2rem)', width: '13ch', role: 'Product chapter', setting: 'Inter 700 / 36 to 64 px' },
};

const graphicProductionEvidenceV2 = [
  { image: hxsProduct, alt: 'HUAXINSHENG production and welded mesh product spread', title: 'Product chapter', copy: 'Production line, quality control and construction' },
  { image: hxsEngineering, alt: 'HUAXINSHENG engineering detail and standards spread', title: 'Engineering detail', copy: 'Slab reinforcement and standard compliance' },
  { image: hxsProjects, alt: 'HUAXINSHENG featured industrial projects spread', title: 'Project evidence', copy: 'Factory, logistics and infrastructure applications' },
];

function GraphicHeroV2({ Reveal }) {
  return <section className="gd-hero gd-hero-v2"><div className="page-shell gd-hero-grid"><Reveal className="gd-hero-copy"><span className="gd-kicker">Graphic design</span><h1>Identity + editorial</h1><p>Brand systems made tangible across material, print, space and screen</p><ArrowLink to="#identity-evidence">View the work</ArrowLink></Reveal><Reveal className="gd-hero-art gd-hero-evidence" delay={0.08}><figure><img src={graphicKeyVisual} alt="VỤN material identity and HUAXINSHENG catalogue arranged as an editorial studio still life" /></figure></Reveal></div></section>;
}

function GraphicSystemV2({ Reveal }) {
  return <section id="identity-evidence" className="gd-section gd-system-section"><div className="page-shell"><Reveal className="gd-heading"><h2>VỤN across three formats</h2><p>One fragment system for product, space and catalogue</p></Reveal><div className="gd-evidence-grid">{graphicIdentityEvidenceV2.map((item, index) => <Reveal className={`gd-evidence-card ${item.className || ''}`} key={item.context} delay={index * .05}><Link to="/work/portfolio-3" aria-label={`View VỤN case study from ${item.context}`}><figure><img src={item.image} alt={item.alt} loading="lazy" /><figcaption><span>{item.context}</span><strong>{item.outcome}</strong><ArrowUpRight size={17} aria-hidden="true" /></figcaption></figure></Link></Reveal>)}</div></div></section>;
}

function GraphicInformationV2({ Reveal }) {
  return <section className="gd-section gd-information-section"><div className="page-shell"><Reveal className="gd-heading"><h2>HUAXINSHENG catalogue</h2><p>Company, production, engineering and application across 24 pages</p></Reveal><div className="gd-information-layout"><Reveal className="gd-information-main"><figure><img src={hxsContents} alt="HUAXINSHENG contents and product ecosystem spread" loading="lazy" /><figcaption>Contents + product ecosystem</figcaption></figure></Reveal><div className="gd-information-side"><Reveal><figure><img src={hxsProduct} alt="HUAXINSHENG production and product construction spread" loading="lazy" /><figcaption>Production + product proof</figcaption></figure></Reveal><Reveal delay={0.06}><figure><img src={hxsProjects} alt="HUAXINSHENG featured project spread" loading="lazy" /><figcaption>Application + project evidence</figcaption></figure></Reveal></div></div><Reveal className="gd-information-link"><Link to="/work/portfolio-4">View the complete catalogue <ArrowUpRight size={17} /></Link></Reveal></div></section>;
}

function GraphicTypeLabV2({ Reveal }) {
  const [scale, setScale] = useState('display');
  const [alignment, setAlignment] = useState('left');
  const reduceMotion = useReducedMotion();
  const specimen = evidenceSpecimens[scale];
  return <section className="gd-section gd-type-section"><div className="page-shell gd-type-layout"><Reveal className="gd-type-copy"><TextAa size={34} weight="duotone" aria-hidden="true" /><h2>Typography in use</h2><p>Switch between the cover voice and the product chapter hierarchy</p><div className="gd-type-controls" aria-label="Typography specimen controls"><fieldset><legend>Hierarchy</legend>{Object.entries(evidenceSpecimens).map(([key, value]) => <button key={key} type="button" aria-pressed={scale === key} onClick={() => setScale(key)}>{value.label}</button>)}</fieldset><fieldset><legend>Alignment</legend><button type="button" aria-label="Align specimen left" aria-pressed={alignment === 'left'} onClick={() => setAlignment('left')}><TextAlignLeft size={18} /></button><button type="button" aria-label="Center specimen" aria-pressed={alignment === 'center'} onClick={() => setAlignment('center')}><TextAlignCenter size={18} /></button></fieldset></div></Reveal><Reveal className="gd-type-stage" delay={0.08}><div className="gd-type-grid" aria-hidden="true" /><motion.p key={`${scale}-${alignment}`} className={`gd-type-specimen is-${alignment}`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .35, ease: [0.16, 1, 0.3, 1] }} style={{ '--specimen-size': specimen.size, '--specimen-width': specimen.width }}>{specimen.text}</motion.p><dl className="gd-type-metrics"><div><dt>Typeface</dt><dd>Inter Variable</dd></div><div><dt>Setting</dt><dd>{specimen.setting}</dd></div><div><dt>Grid</dt><dd>7 columns / 12 mm</dd></div></dl><div className="gd-type-palette" aria-label="HUAXINSHENG colour palette"><span style={{ '--swatch': '#0b4b83' }}>#0B4B83</span><span style={{ '--swatch': '#168bc5' }}>#168BC5</span><span style={{ '--swatch': '#dceaf3' }}>#DCEAF3</span><span style={{ '--swatch': '#f7f9fa' }}>#F7F9FA</span></div></Reveal></div></section>;
}

function GraphicProductionV2({ Reveal }) {
  return <section className="gd-section gd-production-section"><div className="page-shell"><Reveal className="gd-heading"><h2>Production proof</h2><p>Product, engineering and project pages shown at final density</p></Reveal><div className="gd-production-grid">{graphicProductionEvidenceV2.map((item, index) => <Reveal className={`gd-production-card is-${index + 1}`} key={item.title} delay={index * .05}><figure><img src={item.image} alt={item.alt} loading="lazy" /><figcaption><strong>{item.title}</strong></figcaption></figure></Reveal>)}</div><Reveal className="gd-project-links"><Link to="/work/portfolio-3"><img src={vunPackaging} alt="VỤN packaging and recovered-material products" loading="lazy" /><span>VỤN identity <ArrowUpRight size={17} /></span></Link><Link to="/work/portfolio-4"><img src={hxsProjects} alt="HUAXINSHENG industrial project catalogue spread" loading="lazy" /><span>HUAXINSHENG catalogue <ArrowUpRight size={17} /></span></Link></Reveal></div></section>;
}

function GraphicDesignShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-graphic">
    <GraphicHeroV2 Reveal={Reveal} />
    <GraphicSystemV2 Reveal={Reveal} />
    <GraphicInformationV2 Reveal={Reveal} />
    <GraphicTypeLabV2 Reveal={Reveal} />
    <GraphicProductionV2 Reveal={Reveal} />
  </article>;
}

function VideoHero({ Reveal }) {
  return <section className="ve-hero">
    <div className="page-shell ve-hero-layout">
      <Reveal className="ve-hero-copy">
        <span className="ve-kicker">Video editor</span>
        <h1>Every cut matters</h1>
        <p>Picture, rhythm, colour and sound shaped into one cinematic sequence</p>
        <ArrowLink to="#edit-rhythm">Enter the timeline</ArrowLink>
      </Reveal>
      <Reveal className="ve-hero-screen" delay={0.08}>
        <figure><img src={videoKeyVisual} alt="Colour-grading studio showing four cinematic cyclist shots on a wide monitor" /></figure>
      </Reveal>
    </div>
  </section>;
}

const timelineClips = [
  { id: 'establish', label: 'Establish', time: '00:00-00:03.2', duration: '3.2 sec', frame: 'Wide / locked', cut: 'Environment to movement', audio: 'Rain bed enters first', purpose: 'Establish direction, weather and isolation before accelerating the sequence' },
  { id: 'track', label: 'Track', time: '00:03.2-00:06.0', duration: '2.8 sec', frame: 'Medium / follow', cut: 'Match on travel direction', audio: 'Chain and tyre rise', purpose: 'Stay with the cyclist long enough to carry speed into the close detail' },
  { id: 'detail', label: 'Detail', time: '00:06.0-00:07.4', duration: '1.4 sec', frame: 'Close / low angle', cut: 'Movement accent', audio: 'Water impact peaks', purpose: 'Compress time and add tactile texture without breaking screen direction' },
  { id: 'resolve', label: 'Resolve', time: '00:07.4-00:12.6', duration: '5.2 sec', frame: 'Wide / retreat', cut: 'Action to release', audio: 'Music opens, rain remains', purpose: 'Hold the exit longer so the visual path and sound bed can resolve' },
];

function VideoRhythm({ Reveal }) {
  const [activeClip, setActiveClip] = useState('establish');
  const reduceMotion = useReducedMotion();
  const active = timelineClips.find((clip) => clip.id === activeClip);
  const activeIndex = timelineClips.findIndex((clip) => clip.id === activeClip) + 1;
  return <section id="edit-rhythm" className="ve-section ve-rhythm-section">
    <div className="page-shell">
      <Reveal className="ve-heading"><Scissors size={30} weight="duotone" aria-hidden="true" /><h2>The cut has a reason</h2><p>Select a shot to inspect its duration, framing, transition, sound cue and narrative purpose</p></Reveal>
      <div className="ve-cut-layout">
        <Reveal className="ve-cut-viewer"><div className="ve-cut-frame"><div className={`ve-sequence-crop ve-sequence-crop-${activeIndex}`}><img src={videoSequence} alt={`${active.label} shot from the cyclist sequence`} loading="lazy" /></div><span>{active.time}</span></div><motion.dl key={active.id} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .28 }} aria-live="polite"><div><dt>Duration</dt><dd>{active.duration}</dd></div><div><dt>Frame</dt><dd>{active.frame}</dd></div><div><dt>Sound</dt><dd>{active.audio}</dd></div></motion.dl></Reveal>
        <Reveal className="ve-cut-list" delay={0.08} role="group" aria-label="Cut plan">{timelineClips.map((clip, index) => <button type="button" key={clip.id} aria-pressed={activeClip === clip.id} onClick={() => setActiveClip(clip.id)}><span>{String(index + 1).padStart(2, '0')} / {clip.label}</span><strong>{clip.duration}</strong><small>{clip.time}</small></button>)}</Reveal>
      </div>
    </div>
  </section>;
}

const sequenceNotes = [
  { title: 'Set the space', shot: 'Wide', duration: '3.2 sec', continuity: 'Travel left to right', copy: 'Establish direction, weather and isolation' },
  { title: 'Stay with motion', shot: 'Medium', duration: '2.8 sec', continuity: 'Match travel axis', copy: 'Carry speed and warm practical light into the cut' },
  { title: 'Cut on detail', shot: 'Close', duration: '1.4 sec', continuity: 'Wheel repeats direction', copy: 'Add texture without resetting geography' },
  { title: 'Release the tension', shot: 'Wide', duration: '5.2 sec', continuity: 'Exit on same axis', copy: 'Hold the final image long enough to resolve' },
];

function VideoSequence({ Reveal }) {
  return <section className="ve-section ve-sequence-section">
    <div className="page-shell">
      <Reveal className="ve-heading ve-heading-wide"><h2>Continuity without repetition</h2><p>Each frame changes scale while preserving direction, weather and intent</p></Reveal>
      <div className="ve-sequence-grid">
        {sequenceNotes.map((item, index) => <Reveal className="ve-sequence-frame" key={item.title} delay={index * 0.05}>
          <figure><div className={`ve-sequence-crop ve-sequence-crop-${index + 1}`}><img src={videoSequence} alt={`${item.title}: cyclist sequence frame ${index + 1}`} loading="lazy" /></div><figcaption><strong>{item.title}</strong><span>{item.duration} / {item.shot}</span></figcaption></figure>
        </Reveal>)}
      </div>
    </div>
  </section>;
}

function VideoGrade({ Reveal }) {
  const [grade, setGrade] = useState('final');
  const reduceMotion = useReducedMotion();
  return <section className="ve-section ve-grade-section">
    <div className="page-shell ve-grade-layout">
      <Reveal className="ve-grade-copy">
        <SlidersHorizontal size={32} weight="duotone" aria-hidden="true" />
        <h2>Color supports the story</h2>
        <p>The grade separates the cold environment from the warm practical light without crushing detail</p>
        <div className="ve-grade-controls" role="group" aria-label="Color grading view">
          <button type="button" aria-pressed={grade === 'source'} onClick={() => setGrade('source')}>Neutral pass</button>
          <button type="button" aria-pressed={grade === 'final'} onClick={() => setGrade('final')}>Story grade</button>
        </div>
      </Reveal>
      <Reveal className="ve-grade-viewer" delay={0.08}>
        <motion.img
          key={grade}
          src={videoSequence}
          alt={grade === 'final' ? 'Cool-blue and amber story grade on the cyclist sequence' : 'Neutral low-contrast color pass on the cyclist sequence'}
          className={grade === 'source' ? 'is-source' : 'is-final'}
          initial={reduceMotion ? false : { opacity: 0.35 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : .4 }}
          loading="lazy"
        />
        <span>{grade === 'final' ? 'Story grade' : 'Neutral pass'}</span>
      </Reveal>
    </div>
  </section>;
}

const soundCues = [
  { time: '00:00.0', source: 'Rain room tone', function: 'Continuity bed', mix: '-18 LUFS bed', width: '100%' },
  { time: '00:03.2', source: 'Chain + tyre', function: 'Motion handoff', mix: '-12 dB peak', width: '72%' },
  { time: '00:06.0', source: 'Water impact', function: 'Cut accent', mix: '-9 dB peak', width: '28%' },
  { time: '00:07.4', source: 'Music release', function: 'Resolve the exit', mix: '-16 LUFS bed', width: '58%' },
];

function VideoSound({ Reveal }) {
  return <section className="ve-section ve-sound-section">
    <div className="page-shell ve-sound-layout">
      <Reveal className="ve-sound-copy">
        <SpeakerHigh size={32} weight="duotone" aria-hidden="true" />
        <h2>Sound is mapped to picture</h2>
        <p>Atmosphere, motion and impact cues align directly with the cut</p>
      </Reveal>
      <Reveal className="ve-sound-stage" delay={0.08}><div className="ve-sound-picture"><img src={videoSequence} alt="Cyclist sequence aligned above four sound tracks" loading="lazy" /></div><div className="ve-wave-stack">{soundCues.map((cue, index) => <div className="ve-wave-track" key={cue.time} style={{ '--cue-width': cue.width, '--wave-offset': `${index * -14}px` }}><time>{cue.time}</time><strong>{cue.source}</strong><i aria-hidden="true" /></div>)}</div></Reveal>
    </div>
  </section>;
}

const deliveryFormats = [
  { title: 'Campaign master', ratio: '16:9', size: '3840 × 2160', crop: 'Full environment', output: 'ProRes master + H.264 review', className: 'is-landscape' },
  { title: 'Vertical social', ratio: '9:16', size: '1080 × 1920', crop: 'Cyclist held center', output: 'H.264 + caption file', className: 'is-portrait' },
  { title: 'Square feed', ratio: '1:1', size: '1080 × 1080', crop: 'Action weighted right', output: 'H.264 + thumbnail', className: 'is-square' },
];

function VideoDelivery({ Reveal }) {
  return <section className="ve-section ve-delivery-section">
    <div className="page-shell">
      <Reveal className="ve-heading"><FrameCorners size={32} weight="duotone" aria-hidden="true" /><h2>One story, every screen</h2><p>Framing and title-safe areas are rebuilt for the destination, not cropped as an afterthought</p></Reveal>
      <div className="ve-delivery-grid">
        {deliveryFormats.map((format, index) => <Reveal className={`ve-delivery-card ${format.className}`} key={format.title} delay={index * 0.06}>
          <div className="ve-delivery-frame"><img src={videoSequence} alt={`${format.title} preview of the cyclist story in ${format.ratio} format`} loading="lazy" /><i aria-hidden="true" /></div>
          <div className="ve-delivery-info"><strong>{format.title}</strong><span>{format.ratio}</span></div>
        </Reveal>)}
      </div>
      <Reveal className="ve-delivery-footer ve-delivery-action"><a href="#contact">Shape the next cut <ArrowUpRight size={18} /></a></Reveal>
    </div>
  </section>;
}

function VideoEditorShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-video">
    <VideoHero Reveal={Reveal} />
    <VideoRhythm Reveal={Reveal} />
    <VideoSequence Reveal={Reveal} />
    <VideoGrade Reveal={Reveal} />
    <VideoSound Reveal={Reveal} />
    <VideoDelivery Reveal={Reveal} />
  </article>;
}

function UiHero({ Reveal }) {
  return <section className="ui-hero">
    <div className="page-shell ui-hero-layout">
      <Reveal className="ui-hero-copy">
        <span className="ui-kicker">Web design</span>
        <h1>Decisions made visible</h1>
        <p>Product strategy, visual discovery and responsive implementation shown through one cultural archive</p>
        <ArrowLink to="#product-thinking">Inspect the product</ArrowLink>
        <dl className="ui-hero-facts"><div><dt>Case</dt><dd>DẤU cultural archive</dd></div><div><dt>Flows</dt><dd>Explore + scan + listen</dd></div><div><dt>Access</dt><dd>Responsive + offline</dd></div></dl>
      </Reveal>
      <Reveal className="ui-hero-media" delay={0.08}>
        <figure><img src={dauCover} alt="DẤU cultural archive across laptop and phone beside Vietnamese craft objects" /><figcaption><span>Prototype case</span><strong>Visual cultural archive</strong><p>Recognition, artifact context and maker voices stay connected in one visit</p></figcaption></figure>
      </Reveal>
    </div>
  </section>;
}

const productDecisions = [
  { title: 'Browse before searching', context: 'Discovery', question: 'What can I recognise visually', output: 'Object, motif, region and material remain visible together', visual: 'compare' },
  { title: 'Attach the context', context: 'Artifact record', question: 'Why does this motif matter', output: 'Technique, provenance and maker audio support the image', visual: 'evidence' },
  { title: 'Keep the visit available', context: 'Save and access', question: 'What remains after leaving', output: 'Saved records and audio remain available offline', visual: 'confirm' },
];

function DecisionVisual({ type }) {
  if (type === 'compare') return <div className="ui-decision-visual ui-compare-visual"><div><span>Material</span><strong>Sơn mài</strong><small>42 records</small></div><div className="is-selected"><span>Region</span><strong>Miền Bắc</strong><small>18 collections</small></div></div>;
  if (type === 'evidence') return <div className="ui-decision-visual ui-evidence-visual"><div><span>Image detail</span><strong>Macro</strong><i style={{ '--value': '82%' }} /></div><div><span>Provenance</span><strong>Linked</strong><i style={{ '--value': '68%' }} /></div><div><span>Maker audio</span><strong>Available</strong><i style={{ '--value': '74%' }} /></div></div>;
  return <div className="ui-decision-visual ui-confirm-visual"><CheckCircle size={22} weight="fill" aria-hidden="true" /><div><span>Record saved</span><strong>Khảm hoa mai</strong><small>Available offline</small></div></div>;
}

function UiProductCase({ Reveal }) {
  return <section id="product-thinking" className="ui-section ui-product-section">
    <div className="page-shell">
      <Reveal className="ui-heading"><h2>The object stays at the centre</h2><p>DẤU keeps the image, artifact record and maker context visible together</p></Reveal>
      <Reveal className="ui-product-visual" delay={0.06}>
        <div className="ui-product-map"><img src={dauDesktop} alt="DẤU desktop archive grid and tablet artifact record" loading="lazy" /></div>
        <aside className="ui-product-analysis"><span>Archive record</span><h3>Khảm hoa mai</h3><div className="ui-route-deltas" role="group" aria-label="Archive record summary"><div><span>Region</span><strong>01</strong><small>linked</small></div><div><span>Media</span><strong>04</strong><small>types</small></div></div><p>Macro image, material, maker story and audio remain in one record</p><dl><div><dt>Material</dt><dd><strong>Sơn ta</strong><span>Xà cừ</span></dd></div><div className="is-recommended"><dt>Access</dt><dd><strong>Saved</strong><span>Offline ready</span></dd></div></dl><a href="#task-flow">Review the interface study <ArrowUpRight size={17} /></a></aside>
      </Reveal>
      <div className="ui-decision-grid">
        {productDecisions.map((item, index) => <Reveal className="ui-decision-card" key={item.title} delay={index * 0.05}>
            <DecisionVisual type={item.visual} />
            <span>{item.context}</span><h3>{item.title}</h3><dl><div><dt>Question</dt><dd>{item.question}</dd></div><div><dt>Output</dt><dd>{item.output}</dd></div></dl>
          </Reveal>)}
      </div>
    </div>
  </section>;
}

const uiFlowSteps = [
  { index: '01', screen: 'Explore', question: 'What catches the eye', input: 'Image + region + material', output: 'A visual collection' },
  { index: '02', screen: 'Scan', question: 'Can this motif be recognised', input: 'Camera + crop + fallback code', output: 'A matched artifact or manual search' },
  { index: '03', screen: 'Understand', question: 'What is attached to the object', input: 'Story + provenance + audio', output: 'A contextual record' },
  { index: '04', screen: 'Keep', question: 'What remains available later', input: 'Save + download', output: 'An offline visit collection' },
];

function UiFlow({ Reveal }) {
  return <section id="task-flow" className="ui-section ui-flow-section">
    <div className="page-shell"><Reveal className="ui-heading"><FlowArrow size={32} weight="duotone" aria-hidden="true" /><h2>One question per state</h2><p>The flow stays legible from visual discovery to an offline collection</p></Reveal><div className="ui-flow-board" aria-label="DẤU archive journey">{uiFlowSteps.map((step, index) => <Reveal className="ui-flow-step" key={step.index} delay={index * .05}><header><span>{step.index}</span><strong>{step.screen}</strong></header><p>{step.question}</p><dl><div><dt>Input</dt><dd>{step.input}</dd></div><div><dt>Output</dt><dd>{step.output}</dd></div></dl></Reveal>)}</div></div>
  </section>;
}

function UiResponsive({ Reveal }) {
  return <section id="responsive-system" className="ui-section ui-responsive-section">
    <div className="page-shell">
      <Reveal className="ui-heading"><Devices size={32} weight="duotone" aria-hidden="true" /><h2>Responsive means reprioritised</h2><p>Collection density changes while the artifact remains visually recognisable</p></Reveal>
      <div className="ui-responsive-grid"><Reveal className="ui-desktop-proof"><header><span>DẤU</span><nav aria-label="Desktop product preview"><b>Archive</b><i>Map</i><i>Saved</i></nav><small>1440 px</small></header><div className="ui-desktop-body"><div className="ui-proof-map"><img src={dauDesktop} alt="DẤU desktop archive and tablet artifact view" loading="lazy" /></div><aside><span>Collection</span><strong>Sơn mài</strong><dl><div><dt>Records</dt><dd>42</dd></div><div><dt>Regions</dt><dd>6</dd></div><div><dt>Audio</dt><dd>18</dd></div></dl><button type="button" tabIndex="-1">Open collection</button></aside></div></Reveal><Reveal className="ui-mobile-proof" delay={0.06}><header><span>DẤU</span><small>390 px</small></header><div className="ui-proof-map"><img src={dauScreens} alt="DẤU mobile archive screen family" loading="lazy" /></div><div className="ui-mobile-result"><span>Saved record</span><strong>Khảm hoa mai</strong><p>Sơn mài · Miền Bắc</p><button type="button" tabIndex="-1">Open record</button></div><nav aria-label="Mobile product preview"><b>Explore</b><i>Scan</i><i>Saved</i></nav></Reveal></div>
      <Reveal className="ui-responsive-rules"><dl><div><dt>Navigation</dt><dd>Desktop archive tools become a focused bottom bar</dd></div><div><dt>Collection</dt><dd>Dense grids become swipeable visual groups</dd></div><div><dt>Context</dt><dd>Primary provenance stays visible, long records open on demand</dd></div><div><dt>Action</dt><dd>Scan and save stay within thumb reach</dd></div></dl></Reveal>
    </div>
  </section>;
}

const dauModes = {
  browse: { label: 'Browse', heading: 'Visual archive', note: 'Move through objects by material and region', confirmed: 'Collection saved for offline use', image: dauScreens, facts: [['Records','128'],['Regions','09'],['Audio','42'],['Offline','Ready']] },
  scan: { label: 'Scan', heading: 'Motif recognition', note: 'Match a detail, then keep the original object in view', confirmed: 'Artifact record added to the visit', image: dauScan, facts: [['Input','Camera'],['Fallback','Code'],['Match','Visual'],['Context','Linked']] },
  access: { label: 'Access', heading: 'Inclusive states', note: 'Permissions, no-match, contrast and offline states remain explicit', confirmed: 'Accessible mode applied', image: dauStates, facts: [['Text','Large'],['Contrast','High'],['Audio','On'],['Offline','Ready']] },
};

function UiSandbox({ Reveal }) {
  const [mode, setMode] = useState('browse');
  const [selected, setSelected] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = dauModes[mode];
  return <section id="state-prototype" className="ui-section ui-sandbox-section">
    <div className="page-shell ui-sandbox-layout">
      <Reveal className="ui-sandbox-copy"><CursorClick size={32} weight="duotone" aria-hidden="true" /><h2>State changes stay inspectable</h2><p>Switch between discovery, recognition and access states</p><div className="ui-mode-controls" role="group" aria-label="Archive preview mode">{Object.entries(dauModes).map(([key, item]) => <button type="button" key={key} aria-pressed={mode === key} onClick={() => { setMode(key); setSelected(false); }}>{item.label}</button>)}</div><dl className="ui-sandbox-boundary"><div><dt>Status</dt><dd>Interactive concept</dd></div><div><dt>Not claimed</dt><dd>Production archive</dd></div><div><dt>Next validation</dt><dd>Museum visits + recognition accuracy</dd></div></dl></Reveal>
      <Reveal className="ui-sandbox" delay={0.08}>
        <div className="ui-sandbox-map"><img src={active.image} alt={`${active.heading} preview in DẤU`} /><span className="ui-map-key"><i /> Artifact and interface evidence</span></div>
        <motion.div className={`ui-sandbox-result ${selected ? 'is-selected' : ''}`} key={`${mode}-${selected}`} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }} aria-live="polite"><span>{selected && <CheckCircle size={15} weight="fill" aria-hidden="true" />}{selected ? 'State confirmed' : 'Product state'}</span><strong>{active.heading}</strong><p>{selected ? active.confirmed : active.note}</p><dl>{active.facts.map(([term,value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><button type="button" aria-pressed={selected} onClick={() => setSelected((value) => !value)}>{selected ? 'Reset state' : 'Confirm state'}</button></motion.div>
      </Reveal>
    </div>
  </section>;
}

const buildChecks = [
  { check: 'Semantic outline', method: 'Landmarks + one H1 + ordered sections', result: 'Pass' },
  { check: 'Keyboard path', method: 'Native controls + visible focus', result: 'Pass' },
  { check: 'State feedback', method: 'aria-pressed + aria-live', result: 'Pass' },
  { check: 'Reduced motion', method: 'Complete state without animation', result: 'Pass' },
  { check: 'Responsive layout', method: '390 + 768 + 1440 px inspection', result: 'Pass' },
];

function UiBuildProof({ Reveal }) {
  return <section id="build-proof" className="ui-section ui-build-section">
    <div className="page-shell"><Reveal className="ui-heading"><Code size={34} weight="duotone" aria-hidden="true" /><h2>Implementation keeps the archive intact</h2><p>The handoff connects media records, recognition, component state and accessible feedback</p></Reveal><div className="ui-build-layout"><Reveal className="ui-build-pipeline"><div><span>01</span><strong>Archive query</strong><small>Image + region + material</small></div><i aria-hidden="true" /><div><span>02</span><strong>Record model</strong><small>Object + maker + provenance</small></div><i aria-hidden="true" /><div><span>03</span><strong>UI state</strong><small>Explore + scan + save</small></div><i aria-hidden="true" /><div><span>04</span><strong>User feedback</strong><small>Match + fallback + offline</small></div></Reveal><Reveal className="ui-build-report" delay={0.08}><header><span>Verification report</span><strong>5 / 5 passed</strong></header><div>{buildChecks.map((item) => <article key={item.check}><CheckCircle size={17} weight="fill" aria-hidden="true" /><strong>{item.check}</strong><span>{item.method}</span><b>{item.result}</b></article>)}</div><footer><WarningCircle size={18} weight="fill" aria-hidden="true" /><p><strong>Prototype boundary</strong>Production still requires archive partnerships, recognition validation and museum testing</p></footer></Reveal></div><Reveal className="ui-build-actions"><a href="#responsive-system">Review the interface system <ArrowUpRight size={18} /></a><a href="#contact">Build a useful interface <ArrowUpRight size={18} /></a></Reveal></div>
  </section>;
}

function UiHeroV3({ Reveal }) {
  return <section className="ui3-hero">
    <div className="page-shell ui3-hero-layout">
      <Reveal className="ui3-hero-copy">
        <span className="ui3-kicker">Web design</span>
        <h1>From object to interface</h1>
        <p>Product thinking, interaction and responsive craft through one cultural archive</p>
        <ArrowLink to="#ui3-journey">Enter DẤU</ArrowLink>
      </Reveal>
      <Reveal className="ui3-hero-visual" delay={0.08}>
        <figure><img src={webKeyVisual} alt="DẤU cultural archive interface system across desktop, tablet and phone with lacquer artifact and design documentation" /></figure>
      </Reveal>
    </div>
  </section>;
}

const uiJourneyEvidenceV3 = [
  { image: dauDesktop, label: '01 / Discover', title: 'Browse the archive', alt: 'DẤU desktop archive and tablet artifact detail', className: 'is-primary' },
  { image: dauScan, label: '02 / Recognise', title: 'Scan to context', alt: 'DẤU motif recognition and artifact story across phone and tablet' },
  { image: dauStates, label: '03 / Continue', title: 'Fallback, access + offline', alt: 'DẤU permission, no-match, accessibility and offline states' },
];

function UiJourneyV3({ Reveal }) {
  return <section id="ui3-journey" className="ui3-section ui3-journey">
    <div className="page-shell">
      <Reveal className="ui3-heading"><h2>The visit becomes a product flow</h2><p>Browse, recognise, listen and keep the record</p></Reveal>
      <div className="ui3-journey-grid">
        {uiJourneyEvidenceV3.map((item, index) => <Reveal className={`ui3-journey-card ${item.className || ''}`} key={item.label} delay={index * 0.05}>
          <figure><img src={item.image} alt={item.alt} loading="lazy" /><figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption></figure>
        </Reveal>)}
      </div>
    </div>
  </section>;
}

function UiSystemV3({ Reveal }) {
  return <section className="ui3-section ui3-system">
    <div className="page-shell">
      <Reveal className="ui3-heading ui3-heading-light"><h2>A quiet system for dense content</h2><p>One archive across discovery, map, filter, collection and audio</p></Reveal>
      <Reveal className="ui3-screen-wall" delay={0.06}><figure><img src={dauScreens} alt="DẤU mobile and tablet screen family for archive discovery, map, filters, collections, audio and artifact detail" loading="lazy" /></figure></Reveal>
      <Reveal className="ui3-identity-board" delay={0.08}>
        <div className="ui3-palette" aria-label="DẤU colour palette">
          <span style={{ '--swatch': '#2545C6' }}><b>Cobalt</b><small>#2545C6</small></span>
          <span style={{ '--swatch': '#16191C' }}><b>Archive ink</b><small>#16191C</small></span>
          <span style={{ '--swatch': '#E6E7E4' }}><b>Museum grey</b><small>#E6E7E4</small></span>
          <span style={{ '--swatch': '#D7CA9F' }}><b>Artifact gold</b><small>#D7CA9F</small></span>
        </div>
        <div className="ui3-type-specimen"><span>Playfair Display + Manrope</span><strong>Dấu tích</strong><p>Ă Â Ê Ô Ơ Ư Đ</p><small>Sơn mài · Gốm · Dệt</small></div>
      </Reveal>
    </div>
  </section>;
}

const uiModesV3 = {
  browse: { label: 'Browse', title: 'Visual discovery', meta: 'Material · region · collection', image: dauScreens, alt: 'DẤU archive browsing screens' },
  scan: { label: 'Scan', title: 'Motif recognition', meta: 'Camera · match · maker audio', image: dauScan, alt: 'DẤU motif recognition flow' },
  access: { label: 'Access', title: 'Inclusive states', meta: 'Fallback · offline · accessibility', image: dauStates, alt: 'DẤU access and offline states' },
};

function UiPrototypeV3({ Reveal }) {
  const [mode, setMode] = useState('scan');
  const reduceMotion = useReducedMotion();
  const active = uiModesV3[mode];
  return <section className="ui3-section ui3-prototype">
    <div className="page-shell ui3-prototype-layout">
      <Reveal className="ui3-prototype-copy"><CursorClick size={32} weight="duotone" aria-hidden="true" /><h2>Three states, one product</h2><p>Switch between the visual proof</p><div className="ui3-mode-controls" role="group" aria-label="DẤU product state preview">{Object.entries(uiModesV3).map(([key, item]) => <button type="button" key={key} aria-pressed={mode === key} onClick={() => setMode(key)}>{item.label}</button>)}</div></Reveal>
      <Reveal className="ui3-prototype-stage" delay={0.08}>
        <motion.figure key={mode} initial={reduceMotion ? false : { opacity: 0.25, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}><img src={active.image} alt={active.alt} /><figcaption><strong>{active.title}</strong><span>{active.meta}</span></figcaption></motion.figure>
      </Reveal>
    </div>
  </section>;
}

function UiFieldV3({ Reveal }) {
  return <section className="ui3-section ui3-field">
    <div className="page-shell">
      <Reveal className="ui3-heading ui3-heading-light"><h2>Designed for the gallery floor</h2><p>Scan, map and maker audio in the place they are used</p></Reveal>
      <Reveal className="ui3-field-visual" delay={0.06}><figure><img src={dauMuseum} alt="Visitors using DẤU scan, map and maker audio inside a Vietnamese craft exhibition" loading="lazy" /><figcaption><span>Field encounter</span><a href="#ui3-journey">Return to the product journey <ArrowUpRight size={18} /></a></figcaption></figure></Reveal>
    </div>
  </section>;
}

function UiWebShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-ui">
    <UiHeroV3 Reveal={Reveal} />
    <UiJourneyV3 Reveal={Reveal} />
    <UiSystemV3 Reveal={Reveal} />
    <UiPrototypeV3 Reveal={Reveal} />
    <UiFieldV3 Reveal={Reveal} />
  </article>;
}

function AutomationHero({ Reveal }) {
  return <section className="au-hero">
    <div className="page-shell au-hero-layout">
      <Reveal className="au-hero-copy">
        <span className="au-kicker">Automation</span>
        <h1>Every run leaves evidence</h1>
        <p>Multi-profile browser work with explicit inputs, protocol-only control, safe recovery and structured results</p>
        <ArrowLink to="#workflow-anatomy">Follow the workflow</ArrowLink>
      </Reveal>
      <Reveal className="au-hero-console" delay={0.08}>
        <header><span><i />RUN ops-2408</span><strong>Protocol automation</strong></header>
        <dl className="au-startup-summary"><div><dt>Mode</dt><dd>concurrent</dd></div><div><dt>Profiles</dt><dd>3</dd></div><div><dt>Workers</dt><dd>3</dd></div><div><dt>Profile API</dt><dd>GPM v3</dd></div><div><dt>Browser</dt><dd>Chromium CDP</dd></div><div><dt>Artifacts</dt><dd>DOM + screenshot + JSON</dd></div></dl>
        <ol className="au-hero-pipeline"><li className="is-done"><span>01</span><div><strong>Config validated</strong><small>3 profiles · 3 wallets · schema pass</small></div><b>OK</b></li><li className="is-done"><span>02</span><div><strong>Profiles started</strong><small>debuggerAddress received from GPM API</small></div><b>OK</b></li><li className="is-running"><span>03</span><div><strong>CDP sessions attached</strong><small>worker-1 running · worker-2 retry queued</small></div><b>LIVE</b></li><li><span>04</span><div><strong>Evidence and summary</strong><small>result.json waits for all terminal states</small></div><b>WAIT</b></li></ol>
        <footer><span>Total 3</span><span>Success 1</span><span>Running 1</span><span>Retrying 1</span><span>Failed 0</span></footer>
      </Reveal>
    </div>
  </section>;
}

const workflowStages = [
  { id: 'trigger', index: '01', title: 'Trigger', input: 'schedule 09:42', method: 'Create run_id ops-2408', output: 'Immutable run context', guard: 'Reject duplicate run_id' },
  { id: 'validate', index: '02', title: 'Validate', input: 'profiles.json + wallets.csv', method: 'Schema and ownership checks', output: '3 runnable profile jobs', guard: 'Stop before browser launch' },
  { id: 'profile', index: '03', title: 'Start profile', input: 'gpm_profile_id', method: 'GPM Login API v3', output: 'debuggerAddress', guard: 'Bounded startup timeout' },
  { id: 'attach', index: '04', title: 'Attach browser', input: 'debuggerAddress', method: 'Playwright connectOverCDP', output: 'Isolated browser session', guard: 'No OS input dependency' },
  { id: 'action', index: '05', title: 'Execute action', input: 'scoped selector + expected state', method: 'DOM read, click and response check', output: 'Verified state change', guard: 'Assert before mutation' },
  { id: 'artifact', index: '06', title: 'Capture evidence', input: 'browser state + response data', method: 'Screenshot, DOM excerpt and JSON', output: 'Per-profile artifact bundle', guard: 'Redact sensitive fields' },
  { id: 'summary', index: '07', title: 'Write summary', input: 'all terminal job results', method: 'Aggregate status and retries', output: 'Machine and human report', guard: 'Never hide skipped work' },
];

function AutomationAnatomy({ Reveal }) {
  const [stageId, setStageId] = useState('attach');
  const reduceMotion = useReducedMotion();
  const active = workflowStages.find((stage) => stage.id === stageId);
  return <section id="workflow-anatomy" className="au-section au-anatomy-section">
    <div className="page-shell">
      <Reveal className="au-heading"><h2>The executable path is inspectable</h2><p>Select a stage to see its input, method, output and safety boundary</p></Reveal>
      <div className="au-anatomy-layout"><Reveal className="au-stage-list" role="group" aria-label="Automation execution stages">{workflowStages.map((stage) => <button type="button" key={stage.id} aria-pressed={stageId === stage.id} onClick={() => setStageId(stage.id)}><span>{stage.index}</span><strong>{stage.title}</strong><small>{stage.output}</small></button>)}</Reveal><Reveal className="au-stage-inspector" delay={0.08}><motion.div key={active.id} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .28 }} aria-live="polite"><header><span>STEP {active.index}</span><strong>{active.title}</strong></header><dl><div><dt>Input</dt><dd>{active.input}</dd></div><div><dt>Method</dt><dd>{active.method}</dd></div><div><dt>Output</dt><dd>{active.output}</dd></div><div><dt>Safety boundary</dt><dd>{active.guard}</dd></div></dl><footer><CheckCircle size={18} weight="fill" aria-hidden="true" />A stage advances only after its output is verified</footer></motion.div></Reveal></div>
    </div>
  </section>;
}

const workerRows = [
  { profile: 'Atlas 07', profileClass: 'is-cyan', wallet: '0x72A4...91C2', worker: 'worker-1', step: 'Connect CDP', status: 'Running', statusClass: 'is-running', retries: '0', elapsed: '00:18', message: 'Remote endpoint attached' },
  { profile: 'Cinder 12', profileClass: 'is-magenta', wallet: '0x18F9...4B70', worker: 'worker-2', step: 'Verify state', status: 'Retrying', statusClass: 'is-retrying', retries: '1', elapsed: '00:26', message: 'State not ready, retry queued' },
  { profile: 'Moss 03', profileClass: 'is-amber', wallet: '0xA631...0D55', worker: 'worker-3', step: 'Write report', status: 'Done', statusClass: 'is-done', retries: '0', elapsed: '00:14', message: 'Evidence saved' },
];

function AutomationOperations({ Reveal }) {
  return <section id="operations-console" className="au-section au-operations-section">
    <div className="page-shell">
      <Reveal className="au-heading"><TerminalWindow size={32} weight="duotone" aria-hidden="true" /><h2>Concurrency without confusion</h2><p>Profiles keep a stable color while every event carries worker, wallet, step and status context</p></Reveal>
      <Reveal className="au-console" delay={0.08}>
        <header><div><i /><span>Example multi-profile run</span></div><strong>Automation method: GPM API + CDP</strong></header>
        <div className="au-table-wrap" role="region" aria-label="Multi-profile operation table" tabIndex="0"><table><thead><tr><th>Profile</th><th>Wallet</th><th>Worker</th><th>Current step</th><th>Status</th><th>Retry</th><th>Elapsed</th><th>Last message</th></tr></thead><tbody>{workerRows.map((row) => <tr key={row.profile}><td><span className={`au-profile ${row.profileClass}`}>{row.profile}</span></td><td className="au-wallet">{row.wallet}</td><td>{row.worker}</td><td>{row.step}</td><td><span className={`au-status ${row.statusClass}`}>{row.status}</span></td><td>{row.retries}</td><td>{row.elapsed}</td><td>{row.message}</td></tr>)}</tbody></table></div>
        <div className="au-log-stream" role="region" aria-label="Structured automation log" tabIndex="0">
          <p><time>09:42:11</time><b className="is-info">[INFO]</b><span>[T:worker-1]</span><span className="is-cyan">[P:Atlas 07]</span><em>[W:0x72A4...91C2]</em><strong>[STEP:Connect CDP]</strong>Remote endpoint attached</p>
          <p><time>09:42:18</time><b className="is-warn">[WARN]</b><span>[T:worker-2]</span><span className="is-magenta">[P:Cinder 12]</span><em>[W:0x18F9...4B70]</em><strong>[STEP:Verify state]</strong>State not ready, retry queued</p>
          <p><time>09:42:24</time><b className="is-ok">[OK]</b><span>[T:worker-3]</span><span className="is-amber">[P:Moss 03]</span><em>[W:0xA631...0D55]</em><strong>[STEP:Write report]</strong>Evidence saved</p>
        </div>
        <footer aria-label="Run summary" tabIndex="0"><span>Total 3</span><span>Success 1</span><span>Failed 0</span><span>Skipped 0</span><span>Running 1</span><span>Retries 1</span><span>Elapsed 00:26</span></footer>
      </Reveal>
    </div>
  </section>;
}

const recoveryModes = {
  retry: { label: 'State not ready', decision: 'Retry', retryable: 'Yes', safe: 'Yes', limit: '3 attempts', next: 'Back off 2, 4 and 8 seconds, then retry only Verify state', reason: 'The failed step is read-only and completed work remains valid' },
  skip: { label: 'Optional screenshot missing', decision: 'Skip', retryable: 'No', safe: 'Yes', limit: 'Configured exception', next: 'Record skipped artifact and continue to summary', reason: 'The primary result and DOM evidence already exist' },
  stop: { label: 'Wallet does not match profile', decision: 'Stop', retryable: 'No', safe: 'No', limit: 'Immediate stop', next: 'Close the session and request operator review', reason: 'Continuing could mutate the wrong account state' },
};

function AutomationRecovery({ Reveal }) {
  const [mode, setMode] = useState('retry');
  const reduceMotion = useReducedMotion();
  const active = recoveryModes[mode];
  return <section id="recovery-matrix" className="au-section au-recovery-section">
    <div className="page-shell au-recovery-layout">
      <Reveal className="au-recovery-copy"><Warning size={32} weight="duotone" aria-hidden="true" /><h2>Recovery is a decision table</h2><p>Retry, skip and stop depend on retryability and whether the current state is safe</p><div className="au-recovery-controls" role="group" aria-label="Recovery case">{Object.entries(recoveryModes).map(([key, item]) => <button className={`is-${key}`} type="button" key={key} aria-pressed={mode === key} onClick={() => setMode(key)}>{item.label}</button>)}</div></Reveal>
      <Reveal className="au-recovery-visual" delay={0.08}><div className="au-decision-table" role="table" aria-label="Recovery decision matrix"><div role="row" className="is-head"><span role="columnheader">Signal</span><span role="columnheader">Retryable</span><span role="columnheader">State safe</span><span role="columnheader">Decision</span></div>{Object.entries(recoveryModes).map(([key, item]) => <button type="button" role="row" key={key} className={`is-${key}`} aria-pressed={mode === key} onClick={() => setMode(key)}><span role="cell">{item.label}</span><span role="cell">{item.retryable}</span><span role="cell">{item.safe}</span><strong role="cell">{item.decision}</strong></button>)}</div><motion.div className={`au-recovery-result is-${mode}`} key={mode} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .3 }} aria-live="polite"><span>{active.decision}</span><strong>{active.next}</strong><p>{active.reason}</p><dl><div><dt>Limit</dt><dd>{active.limit}</dd></div><div><dt>Evidence</dt><dd>Error + step + profile + wallet + worker</dd></div></dl></motion.div></Reveal>
    </div>
  </section>;
}

const browserMethods = [
  { name: 'GPM Login API', purpose: 'Start and stop the named profile', boundary: 'Returns remote debugging address' },
  { name: 'Playwright + CDP', purpose: 'Read DOM, navigate, click and capture', boundary: 'Runs inside the browser session' },
  { name: 'Selenium + WebDriver', purpose: 'Alternative browser session control', boundary: 'Uses driver or debugging endpoint' },
];

function AutomationBoundary({ Reveal }) {
  return <section id="browser-boundary" className="au-section au-boundary-section">
    <div className="page-shell au-boundary-layout">
      <Reveal className="au-boundary-visual"><div className="au-protocol-path" aria-label="Browser protocol architecture"><div><span>01</span><strong>GPM API</strong><small>profile_id → debuggerAddress</small></div><i /><div><span>02</span><strong>CDP or WebDriver</strong><small>isolated browser session</small></div><i /><div><span>03</span><strong>Page protocol</strong><small>DOM + network + download</small></div><i /><div><span>04</span><strong>Artifacts</strong><small>screenshot + result.json</small></div></div><div className="au-boundary-state"><Browser size={26} weight="duotone" aria-hidden="true" /><div><span>Active desktop</span><strong>Mouse, keyboard, clipboard and focus remain untouched</strong></div><CheckCircle size={22} weight="fill" aria-hidden="true" /></div></Reveal>
      <Reveal className="au-boundary-copy" delay={0.08}><Browser size={34} weight="duotone" aria-hidden="true" /><h2>Browser control stays inside the browser</h2><p>Each allowed method has a defined scope and endpoint</p><div className="au-method-grid">{browserMethods.map((method) => <article key={method.name}><CheckCircle size={16} weight="fill" aria-hidden="true" /><strong>{method.name}</strong><span>{method.purpose}</span><small>{method.boundary}</small></article>)}</div><div className="au-no-os"><XCircle size={20} weight="fill" /><span><strong>OS-level input is prohibited</strong>No coordinates, desktop keystrokes, clipboard driving, image clicking or focus stealing</span></div></Reveal>
    </div>
  </section>;
}

function AutomationSummary({ Reveal }) {
  const outputs = [
    { file: 'run.log', source: 'central logger', purpose: 'Serialized worker events', status: 'written' },
    { file: 'profiles/atlas-07.png', source: 'worker-1', purpose: 'Verified browser state', status: 'written' },
    { file: 'profiles/cinder-12.error.json', source: 'worker-2', purpose: 'Retry context and next action', status: 'written' },
    { file: 'summary.json', source: 'orchestrator', purpose: 'Totals, retries and elapsed time', status: 'written' },
  ];
  return <section id="run-artifacts" className="au-section au-summary-section"><div className="page-shell"><Reveal className="au-heading"><CheckCircle size={34} weight="duotone" aria-hidden="true" /><h2>The run ends with evidence</h2><p>Artifacts make success, retry and failure independently reviewable</p></Reveal><div className="au-summary-layout"><Reveal className="au-artifact-manifest"><header><span>Artifact manifest</span><strong>4 files</strong></header><div className="au-artifact-head"><span>File</span><span>Produced by</span><span>Purpose</span><span>Status</span></div>{outputs.map((item) => <article key={item.file}><code>{item.file}</code><span>{item.source}</span><p>{item.purpose}</p><strong>{item.status}</strong></article>)}</Reveal><Reveal className="au-final-summary" delay={0.08}><header><TerminalWindow size={22} weight="duotone" aria-hidden="true" /><span>FINAL SUMMARY</span></header><dl><div><dt>Total</dt><dd>3</dd></div><div><dt>Success</dt><dd>2</dd></div><div><dt>Failed</dt><dd>0</dd></div><div><dt>Skipped</dt><dd>0</dd></div><div><dt>Retries</dt><dd>1</dd></div><div><dt>Elapsed</dt><dd>00:41</dd></div></dl><p><CheckCircle size={18} weight="fill" aria-hidden="true" />All terminal states recorded and no OS-level input used</p><a href="#contact">Plan an automation <ArrowUpRight size={18} /></a></Reveal></div></div></section>;
}

function AutomationHeroV3({ Reveal }) {
  return <section className="au3-hero">
    <div className="page-shell au3-hero-layout">
      <Reveal className="au3-hero-copy"><span className="au3-kicker">Automation</span><h1>Every run leaves evidence</h1><p>Concurrent browser work controlled through APIs and protocol sessions</p><ArrowLink to="#au3-pipeline">Inspect the run</ArrowLink></Reveal>
      <Reveal className="au3-hero-visual" delay={0.08}><figure><img src={automationKeyVisual} alt="Protocol automation control room with three colour-coded browser profiles, workers, wallets and evidence report" /></figure></Reveal>
    </div>
  </section>;
}

function AutomationPipelineV3({ Reveal }) {
  return <section id="au3-pipeline" className="au3-section au3-pipeline">
    <div className="page-shell">
      <Reveal className="au3-heading"><h2>Seven verified steps</h2><p>Config to evidence without desktop input</p></Reveal>
      <Reveal className="au3-pipeline-image" delay={0.05}><figure><img src={automationWorkflowVisual} alt="Physical branching workflow model showing validated automation paths and guarded decisions" loading="lazy" /></figure></Reveal>
      <div className="au3-stage-rail" aria-label="Protocol automation pipeline">{workflowStages.map((stage, index) => <Reveal className="au3-stage" key={stage.id} delay={index * 0.035}><span>{stage.index}</span><strong>{stage.title}</strong><small>{stage.output}</small></Reveal>)}</div>
    </div>
  </section>;
}

const operationProfilesV3 = [
  { profile: 'Atlas 07', wallet: '0x72A4...91C2', worker: 'worker-1', color: 'cyan', state: 'Running', steps: ['done', 'done', 'live', 'wait', 'wait'] },
  { profile: 'Cinder 12', wallet: '0x18F9...4B70', worker: 'worker-2', color: 'magenta', state: 'Retry 01', steps: ['done', 'done', 'done', 'retry', 'wait'] },
  { profile: 'Moss 03', wallet: '0xA631...0D55', worker: 'worker-3', color: 'amber', state: 'Done', steps: ['done', 'done', 'done', 'done', 'done'] },
];

const operationStepLabelsV3 = ['Config', 'GPM API', 'CDP', 'Action', 'Evidence'];

function AutomationOperationsV3({ Reveal }) {
  return <section className="au3-section au3-operations">
    <div className="page-shell">
      <Reveal className="au3-heading au3-heading-light"><TerminalWindow size={32} weight="duotone" aria-hidden="true" /><h2>Three profiles, one readable run</h2><p>Colour stays attached to profile, wallet and worker</p></Reveal>
      <Reveal className="au3-ops-board" delay={0.06}>
        <header><span><i />RUN ops-2408</span><strong>GPM API + Chromium CDP</strong><b>3 profiles</b></header>
        <div className="au3-step-labels" aria-hidden="true"><span /><span />{operationStepLabelsV3.map((label) => <small key={label}>{label}</small>)}<span /></div>
        <div className="au3-profile-lanes">{operationProfilesV3.map((profile) => <article className={`is-${profile.color}`} key={profile.profile}><div className="au3-profile-id"><i /><strong>{profile.profile}</strong><span>{profile.wallet}</span></div><code>{profile.worker}</code><div className="au3-lane-steps">{profile.steps.map((state, index) => <i className={`is-${state}`} key={`${profile.profile}-${operationStepLabelsV3[index]}`} title={`${operationStepLabelsV3[index]}: ${state}`} />)}</div><b>{profile.state}</b></article>)}</div>
        <footer><span>Total 3</span><span>Success 1</span><span>Running 1</span><span>Retrying 1</span><span>Failed 0</span><span>Elapsed 00:26</span></footer>
      </Reveal>
    </div>
  </section>;
}

function AutomationRecoveryV3({ Reveal }) {
  const [mode, setMode] = useState('retry');
  const reduceMotion = useReducedMotion();
  const active = recoveryModes[mode];
  return <section className="au3-section au3-recovery">
    <div className="page-shell">
      <Reveal className="au3-heading"><Warning size={32} weight="duotone" aria-hidden="true" /><h2>Recovery has a visible rule</h2><p>Retry, skip or stop from the state that actually failed</p></Reveal>
      <div className="au3-recovery-grid" role="group" aria-label="Recovery decision cases">{Object.entries(recoveryModes).map(([key, item], index) => <Reveal key={key} delay={index * 0.05}><button className={`au3-recovery-card is-${key}`} type="button" aria-pressed={mode === key} onClick={() => setMode(key)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong><b>{item.decision}</b></button></Reveal>)}</div>
      <Reveal className="au3-recovery-detail-wrap" delay={0.08}><motion.div className={`au3-recovery-detail is-${mode}`} key={mode} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .28 }} aria-live="polite"><div><span>Signal</span><strong>{active.label}</strong></div><i aria-hidden="true" /><div><span>Safety check</span><strong>{active.safe === 'Yes' ? 'State safe' : 'Unsafe state'}</strong></div><i aria-hidden="true" /><div><span>Outcome</span><strong>{active.decision}</strong></div><footer><span>{active.limit}</span><p>{active.next}</p></footer></motion.div></Reveal>
    </div>
  </section>;
}

const protocolNodesV3 = [
  ['01', 'GPM API', 'profile_id → debuggerAddress'],
  ['02', 'CDP / WebDriver', 'isolated browser session'],
  ['03', 'Page protocol', 'DOM · network · download'],
  ['04', 'Evidence store', 'screenshot · JSON · log'],
];

function AutomationBoundaryV3({ Reveal }) {
  return <section className="au3-section au3-boundary">
    <div className="page-shell">
      <Reveal className="au3-heading au3-heading-light"><Browser size={34} weight="duotone" aria-hidden="true" /><h2>Control stays inside the browser</h2><p>A protocol path with a hard desktop boundary</p></Reveal>
      <Reveal className="au3-protocol-board" delay={0.06}><div className="au3-protocol-path">{protocolNodesV3.map(([index, title, detail], itemIndex) => <React.Fragment key={title}><article><span>{index}</span><strong>{title}</strong><small>{detail}</small></article>{itemIndex < protocolNodesV3.length - 1 && <i aria-hidden="true" />}</React.Fragment>)}</div><div className="au3-desktop-boundary"><XCircle size={24} weight="fill" aria-hidden="true" /><strong>No OS-level input</strong><span>Mouse</span><span>Keyboard</span><span>Clipboard</span><span>Focus</span></div></Reveal>
    </div>
  </section>;
}

const automationArtifactsV3 = [
  ['LOG', 'run.log', 'Serialized worker events'],
  ['PNG', 'atlas-07.png', 'Verified browser state'],
  ['JSON', 'cinder-12.error.json', 'Retry context'],
  ['JSON', 'summary.json', 'Totals and elapsed time'],
];

function AutomationEvidenceV3({ Reveal }) {
  return <section className="au3-section au3-evidence">
    <div className="page-shell">
      <Reveal className="au3-heading"><CheckCircle size={34} weight="duotone" aria-hidden="true" /><h2>The run ends as a reviewable package</h2><p>Success, retry and failure leave separate artifacts</p></Reveal>
      <div className="au3-evidence-grid">{automationArtifactsV3.map(([type, file, purpose], index) => <Reveal className="au3-artifact-card" key={file} delay={index * 0.05}><span>{type}</span><div className="au3-artifact-preview"><i /><i /><i /><i /><i /></div><code>{file}</code><small>{purpose}</small><b>Written</b></Reveal>)}</div>
      <Reveal className="au3-final" delay={0.08}><div><span>FINAL SUMMARY</span><strong>3 profiles / 1 retry / 00:41</strong></div><dl><div><dt>Success</dt><dd>2</dd></div><div><dt>Failed</dt><dd>0</dd></div><div><dt>Skipped</dt><dd>0</dd></div><div><dt>OS input</dt><dd>0</dd></div></dl><a href="#contact">Plan an automation <ArrowUpRight size={18} /></a></Reveal>
    </div>
  </section>;
}

function AutomationShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-automation">
    <AutomationHeroV3 Reveal={Reveal} />
    <AutomationPipelineV3 Reveal={Reveal} />
    <AutomationOperationsV3 Reveal={Reveal} />
    <AutomationRecoveryV3 Reveal={Reveal} />
    <AutomationBoundaryV3 Reveal={Reveal} />
    <AutomationEvidenceV3 Reveal={Reveal} />
  </article>;
}

const blockchainLayers = [
  { icon: Fingerprint, label: 'Physical anchor', value: 'NFC UID' },
  { icon: PlugsConnected, label: 'Typed consent', value: 'EIP-712' },
  { icon: Cube, label: 'Ownership', value: 'ERC-721' },
  { icon: LinkSimple, label: 'Metadata', value: 'IPFS CID' },
  { icon: Wallet, label: 'Controller', value: 'Owner wallet' },
];

const blockchainSurfaces = [
  { image: attestMaker, label: '01 / Bind', title: 'Object + NFC anchor', alt: 'Maker attaching an NFC anchor to a collectible chair in the studio', className: 'is-wide' },
  { image: attestKit, label: '02 / Carry', title: 'Authentication kit', alt: 'ATTEST authentication kit with NFC cards, packaging and a mobile device' },
  { image: attestScan, label: '03 / Verify', title: 'Tap at the object', alt: 'Collector scanning an NFC anchor beside a collectible chair in a gallery' },
];

const blockchainTransferStates = {
  connect: {
    label: 'Anchor',
    icon: Fingerprint,
    eyebrow: 'NFC read',
    heading: 'Resolve the object',
    action: 'Verify signature',
    next: 'sign',
    facts: [['UID', '04:A7:91:2C'], ['Token', '#204'], ['Status', 'Bound']],
  },
  sign: {
    label: 'Sign',
    icon: PlugsConnected,
    eyebrow: 'EIP-712',
    heading: 'Read the consent',
    action: 'Submit contract call',
    next: 'contract',
    facts: [['Domain', 'ATTEST'], ['Chain', 'Sepolia'], ['Intent', 'Transfer']],
  },
  contract: {
    label: 'Contract',
    icon: Cube,
    eyebrow: 'ERC-721',
    heading: 'Commit one state change',
    action: 'Index receipt',
    next: 'receipt',
    facts: [['Method', 'safeTransferFrom'], ['Simulation', 'Passed'], ['Event', 'Pending']],
  },
  receipt: {
    label: 'Receipt',
    icon: CheckCircle,
    eyebrow: 'Confirmed',
    heading: 'Return visible proof',
    action: 'Restart flow',
    next: 'connect',
    facts: [['Event', 'Transfer'], ['Block', '6,184,210'], ['Hash', '0xa91f...0de4']],
  },
};

const blockchainTransferOrder = ['connect', 'sign', 'contract', 'receipt'];

function BlockchainSkillHero({ Reveal }) {
  return <section className="bc4-hero">
    <div className="page-shell bc4-hero-grid">
      <Reveal className="bc4-hero-copy">
        <span className="bc4-kicker">Blockchain integration</span>
        <h1>Proof you can touch</h1>
        <p>Physical objects connected to signatures, ownership and on-chain receipts</p>
        <ArrowLink to="#bc4-bridge">See the integration</ArrowLink>
      </Reveal>
      <Reveal className="bc4-hero-visual" delay={0.08}>
        <figure>
          <img src={attestCover} alt="ATTEST collectible chair with an embedded NFC anchor and mobile product passport" />
          <div className="bc4-passport-chip"><Fingerprint size={24} weight="duotone" /><span>ARC-01</span><strong>Anchor verified</strong><small>Token #204</small></div>
        </figure>
      </Reveal>
    </div>
    <div className="bc4-hero-rail">{blockchainLayers.map((item) => <span key={item.label}><b>{item.value}</b>{item.label}</span>)}</div>
  </section>;
}

function BlockchainBridge({ Reveal }) {
  return <section id="bc4-bridge" className="bc4-section bc4-bridge">
    <div className="page-shell">
      <Reveal className="bc4-heading"><h2>Physical proof enters the chain</h2><p>Five visible layers, one object record</p></Reveal>
      <div className="bc4-bridge-stage">
        <Reveal className="bc4-bridge-image"><figure><img src={attestMaker} alt="Maker binding a metal NFC anchor to the collectible object" loading="lazy" /><figcaption><span>Studio bind</span><strong>ARC-01 / TOKEN 204</strong></figcaption></figure></Reveal>
        <Reveal className="bc4-layer-stack" delay={0.08}>
          {blockchainLayers.map((item, index) => { const Icon = item.icon; return <article className={'bc4-layer-node is-' + (index + 1)} key={item.label}><Icon size={25} weight="duotone" aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong><code>{item.value}</code></article>; })}
        </Reveal>
      </div>
    </div>
  </section>;
}

function BlockchainSurfaces({ Reveal }) {
  return <section className="bc4-section bc4-surfaces">
    <div className="page-shell">
      <Reveal className="bc4-heading"><h2>One record, many surfaces</h2><p>Studio, packaging and point-of-contact proof</p></Reveal>
      <div className="bc4-surface-grid">
        {blockchainSurfaces.map((item, index) => <Reveal className={'bc4-surface-card ' + (item.className || '')} key={item.label} delay={index * 0.05}><figure><img src={item.image} alt={item.alt} loading="lazy" /><figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption></figure></Reveal>)}
      </div>
    </div>
  </section>;
}

function BlockchainTransferLab({ Reveal }) {
  const [state, setState] = useState('connect');
  const reduceMotion = useReducedMotion();
  const active = blockchainTransferStates[state];
  const ActiveIcon = active.icon;
  const activeIndex = blockchainTransferOrder.indexOf(state);
  return <section id="bc4-lab" className="bc4-section bc4-lab">
    <div className="page-shell">
      <Reveal className="bc4-heading bc4-heading-light"><h2>Run the ownership path</h2><p>Anchor, signature, contract and receipt stay separate</p></Reveal>
      <div className="bc4-lab-layout">
        <Reveal className="bc4-lab-image"><figure><img src={attestTransfer} alt="Two collectors completing an ATTEST ownership handover beside a collectible object" loading="lazy" /><figcaption><CheckCircle size={17} weight="fill" /><span>Object present</span><strong>Handover ready</strong></figcaption></figure></Reveal>
        <Reveal className="bc4-console" delay={0.08}>
          <nav aria-label="Ownership transfer states">{blockchainTransferOrder.map((key, index) => <button type="button" key={key} aria-pressed={state === key} onClick={() => setState(key)}><span>{String(index + 1).padStart(2, '0')}</span>{blockchainTransferStates[key].label}<i className={index <= activeIndex ? 'is-active' : ''} /></button>)}</nav>
          <motion.div className={'bc4-console-state is-' + state} key={state} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .3 }} aria-live="polite">
            <div className="bc4-state-copy"><ActiveIcon size={32} weight="duotone" /><span>{active.eyebrow}</span><h3>{active.heading}</h3><dl>{active.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><button type="button" onClick={() => setState(active.next)}>{active.action}<ArrowUpRight size={17} /></button></div>
            <div className="bc4-receipt-visual">
              <header><span>ATTEST / Sepolia</span><b>{state === 'receipt' ? 'CONFIRMED' : 'LIVE SIMULATION'}</b></header>
              <div className="bc4-receipt-mark"><i /><CheckCircle size={42} weight="fill" /></div>
              <dl><div><dt>Status</dt><dd>{state === 'receipt' ? 'Confirmed' : 'Awaiting receipt'}</dd></div><div><dt>Method</dt><dd>safeTransferFrom</dd></div><div><dt>Event</dt><dd>{state === 'receipt' ? 'Transfer' : 'Pending'}</dd></div><div><dt>Hash</dt><dd>{state === 'receipt' ? '0xa91f...0de4' : 'Not submitted'}</dd></div></dl>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  </section>;
}

function BlockchainReceipt({ Reveal }) {
  return <section className="bc4-section bc4-receipt">
    <div className="page-shell">
      <Reveal className="bc4-heading"><h2>Verification happens at the object</h2><p>A tap resolves provenance without hiding the chain</p></Reveal>
      <div className="bc4-receipt-stage">
        <Reveal className="bc4-receipt-image"><figure><img src={attestScan} alt="Collector scanning the ATTEST NFC anchor in a design gallery" loading="lazy" /><div className="bc4-scan-ring"><Fingerprint size={34} weight="duotone" /></div></figure></Reveal>
        <Reveal className="bc4-proof-panel" delay={0.08}>
          <header><span>ATTEST explorer</span><strong><CheckCircle size={16} weight="fill" />Verified</strong></header>
          <div className="bc4-proof-object"><span>ARC-01</span><strong>Lounge object</strong><small>On-chain product passport</small></div>
          <div className="bc4-proof-path"><article><Fingerprint size={20} /><span>NFC</span><strong>04:A7:91:2C</strong></article><i /><article><Cube size={20} /><span>ERC-721</span><strong>Token #204</strong></article><i /><article><LinkSimple size={20} /><span>IPFS</span><strong>bafy...r7m</strong></article></div>
          <a href="#contact">Plan an integration <ArrowUpRight size={18} /></a>
        </Reveal>
      </div>
    </div>
  </section>;
}

function BlockchainCaseLink({ Reveal }) {
  return <section className="bc4-case-link">
    <Reveal className="bc4-case-visual"><figure><img src={attestKit} alt="Complete ATTEST physical authentication kit and mobile passport" loading="lazy" /><figcaption><span>Integration prototype</span><h2>ATTEST</h2><a href="#bc4-lab">Replay the integration <ArrowUpRight size={20} /></a></figcaption></figure></Reveal>
  </section>;
}

function BlockchainShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-blockchain">
    <BlockchainSkillHero Reveal={Reveal} />
    <BlockchainBridge Reveal={Reveal} />
    <BlockchainSurfaces Reveal={Reveal} />
    <BlockchainTransferLab Reveal={Reveal} />
    <BlockchainReceipt Reveal={Reveal} />
    <BlockchainCaseLink Reveal={Reveal} />
  </article>;
}

function LegacySkillPage({ skill, gallery, Reveal }) {
  return <>
    <section className="skill-page-hero section-pad">
      <div className="page-shell skill-page-hero-grid">
        <Reveal><h1>{withoutTrailingPeriod(skill.title)}</h1><p className="large-copy">{skill.short}</p><p>{skill.body}</p><ArrowLink to="#capabilities">Explore capabilities</ArrowLink></Reveal>
        <Reveal className="skill-page-hero-image" delay={0.1}><img src={skill.image} alt={`${skill.title} practice visual`} /></Reveal>
      </div>
    </section>
    <section id="capabilities" className="section-pad capability-section">
      <div className="page-shell capability-layout"><Reveal><h2>What I bring</h2></Reveal><div className="capability-grid">{skill.details.map((detail, index) => <Reveal className="capability-item" key={detail} delay={index * 0.06}><span>{detail}</span></Reveal>)}</div></div>
    </section>
    <section id="skill-work" className="section-pad skill-work-section">
      <div className="page-shell"><Reveal><div className="section-heading"><h2>A closer look</h2><p>A few ways this practice becomes useful in the real world</p></div></Reveal><div className="skill-gallery">{gallery.map((image, index) => <Reveal className={`gallery-item gallery-${index + 1}`} key={`${skill.slug}-${index}`} delay={index * 0.08}><figure><div className="skill-gallery-image"><img src={image} alt={`${skill.title} work sample ${index + 1}`} loading="lazy" /></div><figcaption>{['Primary direction', 'Process detail', 'Final expression'][index]}</figcaption></figure></Reveal>)}</div></div>
    </section>
    <section className="section-pad approach-section"><div className="page-shell approach-grid"><Reveal><h2>How I work</h2></Reveal><Reveal className="approach-copy" delay={0.08}><p className="large-copy">Start with the question. Make the system visible. Then remove what does not help.</p><div className="approach-list"><span>Listen closely</span><span>Find the shape</span><span>Make it usable</span></div></Reveal></div></section>
    <section className="skill-tools-strip section-pad"><div className="page-shell"><Reveal><span className="tool-list-title">Tools in this practice</span><div className="tool-names large-tools">{skill.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></Reveal></div></section>
  </>;
}

export default function SkillPageContent({ skill, gallery, Reveal }) {
  if (skill.slug === 'graphic-design') return <GraphicDesignShowcase Reveal={Reveal} />;
  if (skill.slug === 'video-editor') return <VideoEditorShowcase Reveal={Reveal} />;
  if (skill.slug === 'uiux-webdev') return <UiWebShowcase Reveal={Reveal} />;
  if (skill.slug === 'automation') return <AutomationShowcase Reveal={Reveal} />;
  if (skill.slug === 'blockchain') return <BlockchainShowcase Reveal={Reveal} />;
  return <LegacySkillPage skill={skill} gallery={gallery} Reveal={Reveal} />;
}
