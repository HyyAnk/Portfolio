import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowClockwise, ArrowsLeftRight, ArrowUpRight, Browser, CheckCircle,
  CirclesThreePlus, Code, Cpu, Cube, CursorClick, Devices, Fingerprint,
  FlowArrow, FrameCorners, Funnel, Gauge, GridFour, Lightning, LinkSimple,
  LockKey, Palette, PenNib, Play, PlugsConnected, Printer, Receipt,
  Scissors, SkipForward, SlidersHorizontal, SpeakerHigh, StopCircle,
  TerminalWindow, TextAa, TextAlignCenter, TextAlignLeft, Wallet, Warning,
  WarningCircle, Waveform, WifiSlash, XCircle,
} from '@phosphor-icons/react';

import graphicApplications from './assets/skills/graphic-applications.webp';
import graphicCover from './assets/generated/work-graphic.webp';
import videoCover from './assets/generated/work-video.webp';
import videoEditorGif from './assets/generated/gifs/video-editor.gif';
import uiWebGif from './assets/generated/gifs/uiux-webdev.gif';
import automationGif from './assets/generated/gifs/automation.gif';
import blockchainGif from './assets/generated/gifs/blockchain.gif';
import videoSequence from './assets/skills/video-sequence.webp';
import uiResponsiveProduct from './assets/skills/ui-responsive-product.webp';
import uiCover from './assets/generated/work-ui.webp';
import automationCover from './assets/generated/work-automation.webp';
import automationOrchestration from './assets/skills/automation-orchestration.webp';
import blockchainCover from './assets/generated/work-blockchain.webp';
import blockchainLifecycle from './assets/skills/blockchain-lifecycle.webp';
import muonCover from './assets/case-studies/muon-cover.webp';
import muonPrint from './assets/case-studies/muon-print-system.webp';
import muonObjects from './assets/case-studies/muon-object-applications.webp';
import muonStreet from './assets/case-studies/muon-street-applications.webp';
import muonDigital from './assets/case-studies/muon-digital-devices.webp';
import matCover from './assets/case-studies/mat-cover.webp';
import matRouteFlow from './assets/case-studies/mat-route-flow.svg';
import kitepayCover from './assets/case-studies/kitepay-cover.webp';
import kitepayStateFlow from './assets/case-studies/kitepay-state-flow.svg';
import hopLuuCover from './assets/case-studies/hop-luu-cover.webp';
import hopLuuSpread from './assets/case-studies/hop-luu-capability-spread-v2.webp';
import hopLuuDetail from './assets/case-studies/hop-luu-production-detail-v2.webp';
import { withoutTrailingPeriod } from './text.js';
import './skill-showcase.css';

function ArrowLink({ children, to = '#contact' }) {
  return <a className="arrow-link" href={to}>{children}<ArrowUpRight size={17} /></a>;
}

function GraphicHero({ Reveal }) {
  return <section className="gd-hero">
    <div className="page-shell gd-hero-grid">
      <Reveal className="gd-hero-copy">
        <span className="gd-kicker">Graphic design</span>
        <h1>Ideas made recognisable</h1>
        <p>Identity, editorial and campaign work built to stay coherent across every format</p>
        <ArrowLink to="#identity-system">See the system</ArrowLink>
      </Reveal>
      <Reveal className="gd-hero-art" delay={0.08}>
        <figure>
          <img src={graphicApplications} alt="Cobalt identity system applied across a poster, booklet, cards, packaging and fabric label" />
        </figure>
        <div className="gd-hero-crop gd-hero-crop-left" aria-hidden="true"><img src={graphicApplications} alt="" /></div>
        <div className="gd-hero-crop gd-hero-crop-right" aria-hidden="true"><img src={graphicApplications} alt="" /></div>
      </Reveal>
    </div>
  </section>;
}

function GraphicSystem({ Reveal }) {
  return <section id="identity-system" className="gd-section gd-system-section">
    <div className="page-shell">
      <Reveal className="gd-heading">
        <h2>One idea, many surfaces</h2>
        <p>A strong identity holds its character from the smallest mark to the largest application</p>
      </Reveal>
      <div className="gd-system-grid">
        <Reveal className="gd-system-tile gd-system-image gd-system-tile-cover">
          <figure><img src={muonCover} alt="Muon identity cover with a bold modular symbol" loading="lazy" /></figure>
          <span>Identity direction</span>
        </Reveal>
        <Reveal className="gd-system-tile gd-mark-lab" delay={0.05}>
          <div className="gd-mark-stage" aria-label="Animated modular mark study">
            <span className="gd-mark-bracket">[</span><span className="gd-mark-core">M</span><span className="gd-mark-bracket">]</span>
          </div>
          <span>Recognisable structure</span>
        </Reveal>
        <Reveal className="gd-system-tile gd-color-lab" delay={0.1}>
          <div className="gd-color-stack" aria-label="Cobalt, cyan, graphite and yellow color system">
            <i /><i /><i /><i />
          </div>
          <span>Controlled contrast</span>
        </Reveal>
        <Reveal className="gd-system-tile gd-system-image gd-system-tile-editorial" delay={0.15}>
          <figure><img src={hopLuuCover} alt="Technical corporate profile designed as a precise editorial system" loading="lazy" /></figure>
          <span>Editorial architecture</span>
        </Reveal>
      </div>
    </div>
  </section>;
}

const specimenScales = {
  display: { label: 'Display', size: 'clamp(3.3rem, 8vw, 8.4rem)', width: '9ch' },
  editorial: { label: 'Editorial', size: 'clamp(2.25rem, 5vw, 5.2rem)', width: '13ch' },
};

function GraphicTypeLab({ Reveal }) {
  const [scale, setScale] = useState('display');
  const [alignment, setAlignment] = useState('left');
  const reduceMotion = useReducedMotion();
  const specimen = specimenScales[scale];

  return <section className="gd-section gd-type-section">
    <div className="page-shell gd-type-layout">
      <Reveal className="gd-type-copy">
        <TextAa size={34} weight="duotone" aria-hidden="true" />
        <h2>Type sets the voice</h2>
        <p>Scale, spacing and alignment decide whether information feels urgent, technical or calm</p>
        <div className="gd-type-controls" aria-label="Typography specimen controls">
          <fieldset>
            <legend>Scale</legend>
            {Object.entries(specimenScales).map(([key, value]) => <button key={key} type="button" aria-pressed={scale === key} onClick={() => setScale(key)}>{value.label}</button>)}
          </fieldset>
          <fieldset>
            <legend>Alignment</legend>
            <button type="button" aria-label="Align specimen left" aria-pressed={alignment === 'left'} onClick={() => setAlignment('left')}><TextAlignLeft size={18} /></button>
            <button type="button" aria-label="Center specimen" aria-pressed={alignment === 'center'} onClick={() => setAlignment('center')}><TextAlignCenter size={18} /></button>
          </fieldset>
        </div>
      </Reveal>
      <Reveal className="gd-type-stage" delay={0.08}>
        <div className="gd-type-grid" aria-hidden="true" />
        <motion.p
          key={`${scale}-${alignment}`}
          className={`gd-type-specimen is-${alignment}`}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ '--specimen-size': specimen.size, '--specimen-width': specimen.width }}
        >Ideas need a visible system</motion.p>
        <span className="gd-type-note">Variable scale specimen</span>
      </Reveal>
    </div>
  </section>;
}

const graphicApplicationsGallery = [
  { image: muonObjects, alt: 'Muon visual identity applied to object tags and sharing materials', title: 'Objects and service', className: 'gd-application-wide' },
  { image: hopLuuSpread, alt: 'Bilingual engineering capability profile spread with structured diagrams and photography', title: 'Complex information', className: 'gd-application-tall' },
  { image: muonPrint, alt: 'Muon print system with modular identity applications', title: 'Print system', className: '' },
  { image: muonStreet, alt: 'Muon identity applied to large outdoor and street formats', title: 'Public scale', className: '' },
  { image: graphicCover, alt: 'Red, black and paper-toned graphic identity study', title: 'Campaign language', className: 'gd-application-wide' },
];

function GraphicApplications({ Reveal }) {
  return <section className="gd-section gd-applications-section">
    <div className="page-shell">
      <Reveal className="gd-heading gd-heading-compact">
        <h2>Designed beyond the mockup</h2>
        <p>Each system is tested where people actually meet it</p>
      </Reveal>
      <div className="gd-applications-grid">
        {graphicApplicationsGallery.map((item, index) => <Reveal className={`gd-application ${item.className}`} key={item.title} delay={index * 0.04}>
          <figure>
            <div><img src={item.image} alt={item.alt} loading="lazy" /></div>
            <figcaption>{item.title}</figcaption>
          </figure>
        </Reveal>)}
      </div>
    </div>
  </section>;
}

const graphicProcess = [
  { icon: PenNib, title: 'Find the central idea', copy: 'Clarify the audience, context and one thought the system must carry', visual: 'brief' },
  { icon: GridFour, title: 'Build the structure', copy: 'Set the grid, type behavior and composition rules before adding volume', visual: 'grid' },
  { icon: Palette, title: 'Test the character', copy: 'Push contrast, imagery and color until the direction has a clear voice', visual: 'color' },
  { icon: Printer, title: 'Prepare the handoff', copy: 'Resolve formats, production detail and repeatable guidance for the team', visual: 'production' },
];

function ProcessVisual({ type }) {
  if (type === 'brief') return <div className="gd-process-visual gd-process-brief" aria-hidden="true"><span /><span /><span /></div>;
  if (type === 'grid') return <div className="gd-process-visual gd-process-grid" aria-hidden="true"><span /><span /><span /><span /></div>;
  if (type === 'color') return <div className="gd-process-visual gd-process-color" aria-hidden="true"><span /><span /><span /></div>;
  return <div className="gd-process-visual gd-process-production" aria-hidden="true"><span>CMYK</span><i /><i /><i /></div>;
}

function GraphicProcess({ Reveal }) {
  return <section className="gd-section gd-process-section">
    <div className="page-shell">
      <Reveal className="gd-heading"><h2>From direction to production</h2><p>The work stays visual at every stage, so decisions remain easy to evaluate</p></Reveal>
      <div className="gd-process-grid-list">
        {graphicProcess.map((item, index) => {
          const Icon = item.icon;
          return <Reveal className="gd-process-card" key={item.title} delay={index * 0.05}>
            <ProcessVisual type={item.visual} />
            <Icon size={23} weight="duotone" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </Reveal>;
        })}
      </div>
    </div>
  </section>;
}

function GraphicFinale({ Reveal }) {
  const tools = ['Photoshop', 'Illustrator', 'InDesign', 'Figma'];
  return <section className="gd-finale">
    <div className="page-shell gd-finale-layout">
      <Reveal className="gd-finale-image"><img src={hopLuuDetail} alt="Close production view of a printed editorial layout and binding detail" loading="lazy" /></Reveal>
      <Reveal className="gd-finale-copy" delay={0.08}>
        <CirclesThreePlus size={35} weight="duotone" aria-hidden="true" />
        <h2>Craft that survives delivery</h2>
        <p>The final files, production notes and reusable components are part of the design</p>
        <div className="gd-tool-list" aria-label="Graphic design tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        <a className="gd-contact-link" href="#contact">Discuss a design brief <ArrowUpRight size={18} /></a>
      </Reveal>
    </div>
  </section>;
}

function GraphicDesignShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-graphic">
    <GraphicHero Reveal={Reveal} />
    <GraphicSystem Reveal={Reveal} />
    <GraphicTypeLab Reveal={Reveal} />
    <GraphicApplications Reveal={Reveal} />
    <GraphicProcess Reveal={Reveal} />
    <GraphicFinale Reveal={Reveal} />
  </article>;
}

function VideoHero({ Reveal }) {
  return <section className="ve-hero">
    <div className="page-shell ve-hero-layout">
      <Reveal className="ve-hero-copy">
        <span className="ve-kicker">Video editor</span>
        <h1>Every cut matters</h1>
        <p>Picture, sound and type shaped into stories with a clear rhythm</p>
        <ArrowLink to="#edit-rhythm">Enter the timeline</ArrowLink>
      </Reveal>
      <Reveal className="ve-hero-screen" delay={0.08}>
        <figure><img src={videoSequence} alt="Four cinematic shots following a cyclist through a rain-darkened underpass" /></figure>
        <div className="ve-hero-monitor" aria-hidden="true">
          <span><Play size={15} weight="fill" /> Playing sequence</span>
          <b>00:00:12:18</b>
        </div>
        <div className="ve-frame-focus" aria-hidden="true"><i /><i /><i /><i /></div>
      </Reveal>
    </div>
  </section>;
}

const timelineClips = [
  { label: 'Establish', className: 'is-wide' },
  { label: 'Track', className: '' },
  { label: 'Detail', className: 'is-short' },
  { label: 'Resolve', className: 'is-wide' },
];

function VideoRhythm({ Reveal }) {
  return <section id="edit-rhythm" className="ve-section ve-rhythm-section">
    <div className="page-shell">
      <Reveal className="ve-heading"><Scissors size={30} weight="duotone" aria-hidden="true" /><h2>Rhythm is a decision</h2><p>Shot length follows attention, movement and the emotion that should land next</p></Reveal>
      <Reveal className="ve-timeline" delay={0.08}>
        <div className="ve-timeline-preview"><img src={videoEditorGif} alt="Animated editing timeline with footage frames, waveform and active cuts" loading="lazy" /></div>
        <div className="ve-timeline-ruler" aria-hidden="true">{Array.from({ length: 32 }, (_, index) => <i key={index} />)}</div>
        <div className="ve-timeline-track" aria-label="Four-shot edit sequence">
          {timelineClips.map((clip) => <span className={clip.className} key={clip.label}>{clip.label}</span>)}
        </div>
        <div className="ve-audio-track" aria-label="Audio waveform"><span /></div>
        <i className="ve-playhead" aria-hidden="true" />
      </Reveal>
    </div>
  </section>;
}

const sequenceNotes = [
  { title: 'Set the space', copy: 'A wide frame establishes direction and isolation' },
  { title: 'Stay with motion', copy: 'The medium shot carries speed into the cut' },
  { title: 'Cut on detail', copy: 'A wheel and water give the sequence texture' },
  { title: 'Release the tension', copy: 'The exit shot resolves the visual path' },
];

function VideoSequence({ Reveal }) {
  return <section className="ve-section ve-sequence-section">
    <div className="page-shell">
      <Reveal className="ve-heading ve-heading-wide"><h2>Continuity without repetition</h2><p>Each frame changes scale while preserving direction, weather and intent</p></Reveal>
      <div className="ve-sequence-grid">
        {sequenceNotes.map((item, index) => <Reveal className="ve-sequence-frame" key={item.title} delay={index * 0.05}>
          <figure><div className={`ve-sequence-crop ve-sequence-crop-${index + 1}`}><img src={videoSequence} alt={`${item.title}: cyclist sequence frame ${index + 1}`} loading="lazy" /></div><figcaption><strong>{item.title}</strong><span>{item.copy}</span></figcaption></figure>
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
          <button type="button" aria-pressed={grade === 'source'} onClick={() => setGrade('source')}>Source</button>
          <button type="button" aria-pressed={grade === 'final'} onClick={() => setGrade('final')}>Final grade</button>
        </div>
      </Reveal>
      <Reveal className="ve-grade-viewer" delay={0.08}>
        <motion.img
          key={grade}
          src={videoSequence}
          alt={grade === 'final' ? 'Final cool-blue and amber color grade on the cyclist sequence' : 'Flat low-contrast source look on the cyclist sequence'}
          className={grade === 'source' ? 'is-source' : 'is-final'}
          initial={reduceMotion ? false : { opacity: 0.35 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          loading="lazy"
        />
        <span>{grade === 'final' ? 'Final grade' : 'Source look'}</span>
      </Reveal>
    </div>
  </section>;
}

const soundLayers = [
  { name: 'Dialogue', level: 'voice' },
  { name: 'Atmosphere', level: 'atmosphere' },
  { name: 'Music', level: 'music' },
  { name: 'Impact', level: 'impact' },
];

function VideoSound({ Reveal }) {
  return <section className="ve-section ve-sound-section">
    <div className="page-shell ve-sound-layout">
      <Reveal className="ve-sound-copy">
        <SpeakerHigh size={32} weight="duotone" aria-hidden="true" />
        <h2>Sound creates the cut you feel</h2>
        <p>Dialogue stays intelligible while atmosphere, music and impact define pace and scale</p>
      </Reveal>
      <Reveal className="ve-sound-mixer" delay={0.08}>
        <div className="ve-waveform" aria-label="Animated sound waveform">{Array.from({ length: 54 }, (_, index) => <i key={index} style={{ '--bar': index }} />)}</div>
        <div className="ve-sound-layers">{soundLayers.map((layer) => <div key={layer.name}><span>{layer.name}</span><i className={`is-${layer.level}`} aria-hidden="true" /></div>)}</div>
      </Reveal>
    </div>
  </section>;
}

const deliveryFormats = [
  { title: 'Campaign film', ratio: '16:9', className: 'is-landscape' },
  { title: 'Social cut', ratio: '9:16', className: 'is-portrait' },
  { title: 'Square story', ratio: '1:1', className: 'is-square' },
];

function VideoDelivery({ Reveal }) {
  return <section className="ve-section ve-delivery-section">
    <div className="page-shell">
      <Reveal className="ve-heading"><FrameCorners size={32} weight="duotone" aria-hidden="true" /><h2>One story, every screen</h2><p>Framing and title-safe areas are rebuilt for the destination, not cropped as an afterthought</p></Reveal>
      <div className="ve-delivery-grid">
        {deliveryFormats.map((format, index) => <Reveal className={`ve-delivery-card ${format.className}`} key={format.title} delay={index * 0.06}>
          <div className="ve-delivery-frame"><img src={index === 0 ? videoSequence : videoCover} alt={`${format.title} preview in ${format.ratio} format`} loading="lazy" /><i aria-hidden="true" /></div>
          <div><strong>{format.title}</strong><span>{format.ratio}</span></div>
        </Reveal>)}
      </div>
      <Reveal className="ve-delivery-footer"><div className="ve-tool-line" aria-label="Video editing tools"><span>Premiere Pro</span><span>After Effects</span><span>DaVinci Resolve</span><span>Audition</span></div><a href="#contact">Shape the next cut <ArrowUpRight size={18} /></a></Reveal>
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
        <span className="ui-kicker">UI/UX and web development</span>
        <h1>Designed to ship</h1>
        <p>Clear user flows, responsive systems and production-ready React</p>
        <ArrowLink to="#product-thinking">Explore the product</ArrowLink>
      </Reveal>
      <Reveal className="ui-hero-media" delay={0.08}>
        <figure><img src={uiResponsiveProduct} alt="Responsive heat-aware route planner shown on desktop and mobile screens" /></figure>
        <div className="ui-breakpoint-readout" aria-label="Responsive viewport animation"><span>390</span><i /><span>1440</span></div>
      </Reveal>
    </div>
  </section>;
}

const productDecisions = [
  { icon: CursorClick, title: 'Choice before detail', copy: 'Show route trade-offs before asking for commitment', visual: 'choice' },
  { icon: Gauge, title: 'Risk people can read', copy: 'Turn heat and shade data into visible route context', visual: 'risk' },
  { icon: CheckCircle, title: 'A clear next state', copy: 'Confirm the selected route and preserve confidence', visual: 'confirm' },
];

function DecisionVisual({ type }) {
  if (type === 'choice') return <div className="ui-decision-visual ui-choice-visual" aria-hidden="true"><span /><span /></div>;
  if (type === 'risk') return <div className="ui-decision-visual ui-risk-visual" aria-hidden="true"><i /><i /><i /></div>;
  return <div className="ui-decision-visual ui-confirm-visual" aria-hidden="true"><span><CheckCircle size={34} weight="fill" /></span></div>;
}

function UiProductCase({ Reveal }) {
  return <section id="product-thinking" className="ui-section ui-product-section">
    <div className="page-shell">
      <Reveal className="ui-heading"><h2>Start with the decision</h2><p>MÁT reframes route planning around exposure, recovery and the trade-off a person can act on</p></Reveal>
      <Reveal className="ui-product-visual" delay={0.06}><img src={matCover} alt="MÁT heat-aware route planning concept mapped across a city" loading="lazy" /><a href="/work/mat">View MÁT case study <ArrowUpRight size={17} /></a></Reveal>
      <div className="ui-decision-grid">
        {productDecisions.map((item, index) => {
          const Icon = item.icon;
          return <Reveal className="ui-decision-card" key={item.title} delay={index * 0.05}>
            <DecisionVisual type={item.visual} />
            <Icon size={22} weight="duotone" aria-hidden="true" />
            <h3>{item.title}</h3><p>{item.copy}</p>
          </Reveal>;
        })}
      </div>
    </div>
  </section>;
}

function UiFlow({ Reveal }) {
  return <section className="ui-section ui-flow-section">
    <div className="page-shell ui-flow-layout">
      <Reveal className="ui-flow-copy"><FlowArrow size={32} weight="duotone" aria-hidden="true" /><h2>Make the task path visible</h2><p>Each screen answers one question, keeps progress clear and prepares the next action</p><div className="ui-flow-steps" aria-label="Route selection flow"><span>Set intent</span><span>Compare routes</span><span>Review exposure</span><span>Confirm journey</span></div></Reveal>
      <Reveal className="ui-flow-visual" delay={0.08}><img src={matRouteFlow} alt="User flow from route intent through comparison, exposure review and journey confirmation" loading="lazy" /></Reveal>
    </div>
  </section>;
}

function UiResponsive({ Reveal }) {
  return <section className="ui-section ui-responsive-section">
    <div className="page-shell">
      <Reveal className="ui-heading"><Devices size={32} weight="duotone" aria-hidden="true" /><h2>Priority shifts with space</h2><p>The same system changes hierarchy, controls and reading order as space changes</p></Reveal>
      <div className="ui-responsive-grid">
        <Reveal className="ui-responsive-photo"><img src={uiCover} alt="Laptop and phone showing one responsive interface system" loading="lazy" /></Reveal>
        <Reveal className="ui-responsive-motion" delay={0.08}><img src={uiWebGif} alt="Animated browser and phone layouts adapting a design system into responsive code" loading="lazy" /><div aria-hidden="true"><span>Desktop</span><i /><span>Mobile</span></div></Reveal>
      </div>
    </div>
  </section>;
}

const routeModes = {
  shade: { label: 'More shade', heading: 'Cooler route', copy: 'Prioritises shade and recovery points' },
  balanced: { label: 'Balanced', heading: 'Balanced route', copy: 'Balances walking time with exposure' },
  direct: { label: 'Most direct', heading: 'Direct route', copy: 'Prioritises the shortest practical path' },
};

function UiSandbox({ Reveal }) {
  const [mode, setMode] = useState('shade');
  const [selected, setSelected] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = routeModes[mode];
  return <section className="ui-section ui-sandbox-section">
    <div className="page-shell ui-sandbox-layout">
      <Reveal className="ui-sandbox-copy"><CursorClick size={32} weight="duotone" aria-hidden="true" /><h2>States explain change</h2><p>Try a route preference and watch the hierarchy, path and confirmation update together</p><div className="ui-mode-controls" role="group" aria-label="Route preference">{Object.entries(routeModes).map(([key, item]) => <button type="button" key={key} aria-pressed={mode === key} onClick={() => { setMode(key); setSelected(false); }}>{item.label}</button>)}</div></Reveal>
      <Reveal className="ui-sandbox" delay={0.08}>
        <div className="ui-sandbox-map"><img src={matCover} alt="City map used for the interactive route preference preview" loading="lazy" /><motion.i key={mode} className={`is-${mode}`} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, ease: [0.16,1,0.3,1] }} aria-hidden="true" /></div>
        <motion.div className="ui-sandbox-result" key={mode} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }} aria-live="polite"><span>{active.label}</span><strong>{active.heading}</strong><p>{active.copy}</p><button type="button" onClick={() => setSelected(true)}>{selected ? 'Route selected' : 'Select route'}</button></motion.div>
      </Reveal>
    </div>
  </section>;
}

const buildChecks = ['Semantic structure', 'Keyboard paths', 'Responsive states', 'Reduced motion'];

function UiBuildProof({ Reveal }) {
  return <section className="ui-section ui-build-section">
    <div className="page-shell ui-build-layout">
      <Reveal className="ui-build-media"><img src={muonDigital} alt="Responsive digital identity system displayed across desktop, tablet and mobile devices" loading="lazy" /></Reveal>
      <Reveal className="ui-build-copy" delay={0.08}><Code size={34} weight="duotone" aria-hidden="true" /><h2>Design and code stay connected</h2><p>Components carry the spacing, states and accessibility decisions made during design</p><div className="ui-check-grid">{buildChecks.map((item) => <span key={item}><CheckCircle size={17} weight="fill" />{item}</span>)}</div><div className="ui-tool-list" aria-label="Interface design and web development tools"><span>Figma</span><span>React</span><span>Vite</span><span>Motion</span><span>CSS</span></div><a href="#contact">Build a useful interface <ArrowUpRight size={18} /></a></Reveal>
    </div>
  </section>;
}

function UiWebShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-ui">
    <UiHero Reveal={Reveal} />
    <UiProductCase Reveal={Reveal} />
    <UiFlow Reveal={Reveal} />
    <UiResponsive Reveal={Reveal} />
    <UiSandbox Reveal={Reveal} />
    <UiBuildProof Reveal={Reveal} />
  </article>;
}

function AutomationHero({ Reveal }) {
  return <section className="au-hero">
    <div className="page-shell au-hero-layout">
      <Reveal className="au-hero-copy">
        <span className="au-kicker">Automation</span>
        <h1>Reliable automation</h1>
        <p>Observable workflows, safe retries and browser-protocol control</p>
        <ArrowLink to="#workflow-anatomy">Follow the workflow</ArrowLink>
      </Reveal>
      <Reveal className="au-hero-rig" delay={0.08}>
        <figure><img src={automationOrchestration} alt="Industrial orchestration rig with parallel workers, retry loop and verified output" /></figure>
        <div className="au-run-status" aria-label="Automation startup summary"><span>Mode</span><strong>Concurrent</strong><span>Profiles</span><strong>3</strong><span>Concurrency</span><strong>3</strong><span>Method</span><strong>CDP</strong><span>Config</span><strong>GPM API</strong></div>
      </Reveal>
    </div>
  </section>;
}

const workflowStages = [
  { icon: Lightning, title: 'Trigger', copy: 'Receive a schedule, event or explicit request', className: 'is-trigger' },
  { icon: Funnel, title: 'Validate', copy: 'Check profile, input and required state', className: 'is-validate' },
  { icon: Cpu, title: 'Execute', copy: 'Run the scoped browser or API action', className: 'is-execute' },
  { icon: CheckCircle, title: 'Report', copy: 'Record outcome, evidence and next action', className: 'is-report' },
];

function AutomationAnatomy({ Reveal }) {
  return <section id="workflow-anatomy" className="au-section au-anatomy-section">
    <div className="page-shell">
      <Reveal className="au-heading"><h2>A workflow with visible state</h2><p>Every stage declares what entered, what changed and what should happen next</p></Reveal>
      <Reveal className="au-anatomy-visual" delay={0.06}><img src={automationGif} alt="Animated trigger, filter, action and output workflow" loading="lazy" /></Reveal>
      <div className="au-stage-grid">
        {workflowStages.map((stage, index) => {
          const Icon = stage.icon;
          return <Reveal className={`au-stage ${stage.className}`} key={stage.title} delay={index * 0.05}><div className="au-stage-signal" aria-hidden="true"><i /><i /><i /></div><Icon size={22} weight="duotone" aria-hidden="true" /><h3>{stage.title}</h3><p>{stage.copy}</p></Reveal>;
        })}
      </div>
    </div>
  </section>;
}

const workerRows = [
  { profile: 'Atlas 07', profileClass: 'is-cyan', wallet: '0x72A4...91C2', worker: 'worker-1', step: 'Connect CDP', status: 'Running', statusClass: 'is-running', retries: '0', elapsed: '00:18', message: 'Remote endpoint attached' },
  { profile: 'Cinder 12', profileClass: 'is-magenta', wallet: '0x18F9...4B70', worker: 'worker-2', step: 'Verify state', status: 'Retrying', statusClass: 'is-retrying', retries: '1', elapsed: '00:26', message: 'State not ready, retry queued' },
  { profile: 'Moss 03', profileClass: 'is-amber', wallet: '0xA631...0D55', worker: 'worker-3', step: 'Write report', status: 'Done', statusClass: 'is-done', retries: '0', elapsed: '00:14', message: 'Evidence saved' },
];

function AutomationOperations({ Reveal }) {
  return <section className="au-section au-operations-section">
    <div className="page-shell">
      <Reveal className="au-heading"><TerminalWindow size={32} weight="duotone" aria-hidden="true" /><h2>Concurrency without confusion</h2><p>Profiles keep a stable color while every event carries worker, wallet, step and status context</p></Reveal>
      <Reveal className="au-console" delay={0.08}>
        <header><div><i /><span>Example multi-profile run</span></div><strong>Automation method: GPM API + CDP</strong></header>
        <div className="au-table-wrap"><table><thead><tr><th>Profile</th><th>Wallet</th><th>Worker</th><th>Current step</th><th>Status</th><th>Retry</th><th>Elapsed</th><th>Last message</th></tr></thead><tbody>{workerRows.map((row) => <tr key={row.profile}><td><span className={`au-profile ${row.profileClass}`}>{row.profile}</span></td><td className="au-wallet">{row.wallet}</td><td>{row.worker}</td><td>{row.step}</td><td><span className={`au-status ${row.statusClass}`}>{row.status}</span></td><td>{row.retries}</td><td>{row.elapsed}</td><td>{row.message}</td></tr>)}</tbody></table></div>
        <div className="au-log-stream" aria-label="Structured automation log">
          <p><time>09:42:11</time><b className="is-info">[INFO]</b><span>[T:worker-1]</span><span className="is-cyan">[P:Atlas 07]</span><em>[W:0x72A4...91C2]</em><strong>[STEP:Connect CDP]</strong>Remote endpoint attached</p>
          <p><time>09:42:18</time><b className="is-warn">[WARN]</b><span>[T:worker-2]</span><span className="is-magenta">[P:Cinder 12]</span><em>[W:0x18F9...4B70]</em><strong>[STEP:Verify state]</strong>State not ready, retry queued</p>
          <p><time>09:42:24</time><b className="is-ok">[OK]</b><span>[T:worker-3]</span><span className="is-amber">[P:Moss 03]</span><em>[W:0xA631...0D55]</em><strong>[STEP:Write report]</strong>Evidence saved</p>
        </div>
        <footer><span>Total 3</span><span>Success 1</span><span>Failed 0</span><span>Running 1</span><span>Retries 1</span><span>Elapsed 00:26</span></footer>
      </Reveal>
    </div>
  </section>;
}

const recoveryModes = {
  retry: { label: 'Retry safely', icon: ArrowClockwise, heading: 'Retry only the failed step', copy: 'Keep completed work and preserve the same profile context' },
  skip: { label: 'Skip intentionally', icon: SkipForward, heading: 'Skip with a recorded reason', copy: 'Continue only when the missing step is explicitly non-blocking' },
  stop: { label: 'Stop clearly', icon: StopCircle, heading: 'Stop before state becomes unsafe', copy: 'Leave evidence and a concrete next action for the operator' },
};

function AutomationRecovery({ Reveal }) {
  const [mode, setMode] = useState('retry');
  const reduceMotion = useReducedMotion();
  const active = recoveryModes[mode];
  const ActiveIcon = active.icon;
  return <section className="au-section au-recovery-section">
    <div className="page-shell au-recovery-layout">
      <Reveal className="au-recovery-copy"><Warning size={32} weight="duotone" aria-hidden="true" /><h2>Failure is part of the design</h2><p>Recovery rules decide whether a workflow retries, skips or stops without hiding the reason</p><div className="au-recovery-controls" role="group" aria-label="Recovery strategy">{Object.entries(recoveryModes).map(([key, item]) => <button type="button" key={key} aria-pressed={mode === key} onClick={() => setMode(key)}>{item.label}</button>)}</div></Reveal>
      <Reveal className="au-recovery-visual" delay={0.08}>
        <div className="au-recovery-branch" aria-hidden="true"><span>Input</span><i /><span>Worker</span><i /><span className="is-gate">Gate</span><i /><span>Output</span></div>
        <motion.div className={`au-recovery-result is-${mode}`} key={mode} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} aria-live="polite"><ActiveIcon size={30} weight="duotone" /><span>{active.label}</span><strong>{active.heading}</strong><p>{active.copy}</p></motion.div>
      </Reveal>
    </div>
  </section>;
}

const browserMethods = ['Playwright', 'Selenium', 'WebDriver', 'Chrome DevTools Protocol', 'GPM remote debugging'];

function AutomationBoundary({ Reveal }) {
  return <section className="au-section au-boundary-section">
    <div className="page-shell au-boundary-layout">
      <Reveal className="au-boundary-visual"><img src={automationCover} alt="Physical workflow model showing connected automation branches" loading="lazy" /><div className="au-browser-window" aria-hidden="true"><Browser size={30} weight="duotone" /><span /><span /><i /></div></Reveal>
      <Reveal className="au-boundary-copy" delay={0.08}><Browser size={34} weight="duotone" aria-hidden="true" /><h2>Browser control stays inside the browser</h2><p>Protocol automation keeps the active desktop, focus and user input untouched</p><div className="au-method-grid">{browserMethods.map((method) => <span key={method}><CheckCircle size={16} weight="fill" />{method}</span>)}</div><div className="au-no-os"><Warning size={20} weight="fill" /><span><strong>No OS-level input control</strong>No mouse coordinates, keyboard takeover, clipboard driving or focus stealing</span></div></Reveal>
    </div>
  </section>;
}

function AutomationSummary({ Reveal }) {
  const outputs = ['Structured log', 'Evidence capture', 'Retry history', 'Final summary'];
  return <section className="au-section au-summary-section"><div className="page-shell au-summary-layout"><Reveal className="au-summary-copy"><CheckCircle size={34} weight="duotone" aria-hidden="true" /><h2>The run ends with evidence</h2><p>A useful automation reports what happened, what failed and what to do next</p><div className="au-output-grid">{outputs.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, '0')}</i>{item}</span>)}</div><a href="#contact">Plan an automation <ArrowUpRight size={18} /></a></Reveal><Reveal className="au-summary-image" delay={0.08}><img src={automationOrchestration} alt="Verified output module completing a parallel automation workflow" loading="lazy" /></Reveal></div></section>;
}

function AutomationShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-automation">
    <AutomationHero Reveal={Reveal} />
    <AutomationAnatomy Reveal={Reveal} />
    <AutomationOperations Reveal={Reveal} />
    <AutomationRecovery Reveal={Reveal} />
    <AutomationBoundary Reveal={Reveal} />
    <AutomationSummary Reveal={Reveal} />
  </article>;
}

function BlockchainHero({ Reveal }) {
  return <section className="bc-hero">
    <div className="page-shell bc-hero-layout">
      <Reveal className="bc-hero-copy"><span className="bc-kicker">Blockchain integration</span><h1>Trust made visible</h1><p>Wallet, contract and transaction feedback people can understand</p><ArrowLink to="#wallet-flow">Follow the transaction</ArrowLink></Reveal>
      <Reveal className="bc-hero-lifecycle" delay={0.08}><figure><img src={blockchainLifecycle} alt="Five physical modules showing transaction intent, signature, pending, confirmation and receipt" /></figure><div className="bc-lifecycle-strip" aria-label="Transaction lifecycle"><span>Intent</span><i /><span>Sign</span><i /><span>Pending</span><i /><span>Confirmed</span><i /><span>Receipt</span></div></Reveal>
    </div>
  </section>;
}

const walletStates = {
  connect: {
    label: 'Connection', icon: PlugsConnected, heading: 'Choose the right account',
    copy: 'Confirm account and network before requesting any permission', button: 'Review request', next: 'review',
    facts: [['Network', 'BSC Testnet'], ['Account', '0x72A4...91C2'], ['Access', 'View address only']],
  },
  review: {
    label: 'Permission', icon: Fingerprint, heading: 'Explain the signature scope',
    copy: 'One signature funds one milestone through the named escrow contract', button: 'Sign request', next: 'pending',
    facts: [['Action', 'Fund milestone 02'], ['Amount', '250 USDT'], ['Contract', '0x84C2...11F0']],
  },
  pending: {
    label: 'Transaction', icon: Cube, heading: 'Pending is not final',
    copy: 'Keep the intended action visible while confirmations accumulate', button: 'Show confirmation', next: 'confirmed',
    facts: [['Status', 'Accepted by network'], ['Finality', '2 of 12 confirmations'], ['Hash', '0x9F31...A8E4']],
  },
  confirmed: {
    label: 'Confirmed', icon: CheckCircle, heading: 'Return a readable receipt',
    copy: 'State what changed and keep the onchain reference available', button: 'Restart demo', next: 'connect',
    facts: [['Result', 'Milestone 02 funded'], ['Value', '250 USDT in escrow'], ['Receipt', '0x9F31...A8E4']],
  },
};

function BlockchainWalletFlow({ Reveal }) {
  const [state, setState] = useState('connect');
  const reduceMotion = useReducedMotion();
  const active = walletStates[state];
  const ActiveIcon = active.icon;
  return <section id="wallet-flow" className="bc-section bc-wallet-section">
    <div className="page-shell bc-wallet-layout">
      <Reveal className="bc-wallet-copy"><Wallet size={34} weight="duotone" aria-hidden="true" /><h2>Wallet onboarding without guesswork</h2><p>Connection, permission, pending and confirmation stay distinct from one another</p><div className="bc-wallet-steps" aria-label="Wallet flow steps">{Object.entries(walletStates).map(([key, item]) => <button type="button" key={key} aria-pressed={state === key} onClick={() => setState(key)}>{item.label}</button>)}</div></Reveal>
      <Reveal className="bc-wallet-demo" delay={0.08}>
        <div className="bc-wallet-motion"><img src={blockchainGif} alt="Animated blockchain nodes and transaction verification progress" loading="lazy" /></div>
        <motion.div className={`bc-wallet-card is-${state}`} key={state} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }} aria-live="polite"><ActiveIcon size={32} weight="duotone" /><span>{active.label}</span><strong>{active.heading}</strong><p>{active.copy}</p><dl className="bc-state-facts">{active.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><button type="button" onClick={() => setState(active.next)}>{active.button}</button></motion.div>
      </Reveal>
    </div>
  </section>;
}

function BlockchainEscrow({ Reveal }) {
  return <section className="bc-section bc-escrow-section"><div className="page-shell"><Reveal className="bc-heading"><h2>Escrow state both sides can read</h2><p>KitePay keeps scope, funding, approval and release explicit throughout a milestone</p></Reveal><div className="bc-escrow-grid"><Reveal className="bc-escrow-cover"><img src={kitepayCover} alt="KitePay milestone escrow product concept" loading="lazy" /><a href="/work/kitepay">View KitePay case study <ArrowUpRight size={17} /></a></Reveal><Reveal className="bc-escrow-flow" delay={0.08}><img src={kitepayStateFlow} alt="KitePay escrow flow from agreement and funding to approval and release" loading="lazy" /></Reveal></div></div></section>;
}

const eventMappings = [
  { event: 'Wallet connected', feedback: 'Show account and network', icon: PlugsConnected },
  { event: 'Signature requested', feedback: 'Explain permission and scope', icon: Fingerprint },
  { event: 'Transaction submitted', feedback: 'Preserve pending progress', icon: Cube },
  { event: 'Contract confirmed', feedback: 'Return receipt and new state', icon: Receipt },
];

function BlockchainMapping({ Reveal }) {
  return <section className="bc-section bc-mapping-section"><div className="page-shell"><Reveal className="bc-heading"><LinkSimple size={32} weight="duotone" aria-hidden="true" /><h2>Contract events become human feedback</h2><p>Technical state matters only when the interface turns it into a clear next step</p></Reveal><div className="bc-mapping-grid">{eventMappings.map((item, index) => { const Icon = item.icon; return <Reveal className="bc-mapping-card" key={item.event} delay={index * .05}><div className="bc-event-visual" aria-hidden="true"><span /><i /><span /></div><Icon size={23} weight="duotone" aria-hidden="true" /><h3>{item.event}</h3><p>{item.feedback}</p></Reveal>; })}</div></div></section>;
}

const trustStates = [
  { title: 'Wrong network', copy: 'Connected to BSC Mainnet. This action expects BSC Testnet', action: 'Switch network', icon: WifiSlash, className: 'is-warning' },
  { title: 'Request rejected', copy: 'No signature was sent. Keep the funded amount unchanged', action: 'Review request', icon: XCircle, className: 'is-error' },
  { title: 'Transaction failed', copy: 'The contract reverted before state changed. Surface the decoded reason', action: 'Review reason', icon: WarningCircle, className: 'is-error' },
  { title: 'Transaction confirmed', copy: 'Milestone 02 now holds 250 USDT with a verifiable receipt', action: 'Open receipt', icon: CheckCircle, className: 'is-success' },
];

function BlockchainTrustStates({ Reveal }) {
  return <section className="bc-section bc-trust-section"><div className="page-shell"><Reveal className="bc-heading"><LockKey size={32} weight="duotone" aria-hidden="true" /><h2>Trust includes the difficult states</h2><p>Rejection, network mismatch and failure deserve the same care as success</p></Reveal><div className="bc-trust-grid">{trustStates.map((item, index) => { const Icon = item.icon; return <Reveal className={`bc-trust-card ${item.className}`} key={item.title} delay={index * .05}><div className="bc-trust-icon"><Icon size={34} weight="duotone" /></div><h3>{item.title}</h3><p>{item.copy}</p><span>{item.action}</span></Reveal>; })}</div></div></section>;
}

function BlockchainTools({ Reveal }) {
  const tools = ['Ethereum', 'Solana', 'Solidity', 'WalletConnect', 'viem', 'ethers'];
  return <section className="bc-section bc-tools-section"><div className="page-shell bc-tools-layout"><Reveal className="bc-tools-image"><img src={blockchainCover} alt="Physical network model with one highlighted transaction node" loading="lazy" /></Reveal><Reveal className="bc-tools-copy" delay={0.08}><ArrowsLeftRight size={34} weight="duotone" aria-hidden="true" /><h2>Integration from contract to interface</h2><p>Network tooling, readable state and frontend delivery stay part of one product system</p><div className="bc-tool-list" aria-label="Blockchain integration tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div><div className="bc-delivery-checks"><span><CheckCircle size={17} weight="fill" />Network-aware onboarding</span><span><CheckCircle size={17} weight="fill" />Transaction lifecycle</span><span><CheckCircle size={17} weight="fill" />Readable receipts</span></div><a href="#contact">Plan an integration <ArrowUpRight size={18} /></a></Reveal></div></section>;
}

function BlockchainShowcase({ Reveal }) {
  return <article className="skill-showcase skill-showcase-blockchain">
    <BlockchainHero Reveal={Reveal} />
    <BlockchainWalletFlow Reveal={Reveal} />
    <BlockchainEscrow Reveal={Reveal} />
    <BlockchainMapping Reveal={Reveal} />
    <BlockchainTrustStates Reveal={Reveal} />
    <BlockchainTools Reveal={Reveal} />
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
