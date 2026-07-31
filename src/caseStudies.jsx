import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CaretRight, Check } from '@phosphor-icons/react';
import './case-studies.css';

import kitepayStateFlow from './assets/case-studies/kitepay-state-flow.svg';
import { withoutTrailingPeriod } from './text.js';

const matRoadEdges = {
  riverStart: 'M72 306C105 300 135 288 165 278C205 266 232 238 270 224C310 209 350 216 390 205',
  riverEnd: 'C432 194 455 169 500 155C545 141 570 137 610 125C642 115 663 82 688 58',
  canopyStart: 'M72 306C58 298 48 291 45 280C38 245 39 213 45 185C68 170 100 161 130 155C165 143 195 148 230 140C265 132 280 110 315 100C355 88 390 112 430 105',
  canopyEnd: 'C470 98 505 82 550 70C605 55 650 70 688 58',
  centralLink: 'C398 165 410 130 430 105',
};

const matPrimaryPaths = {
  fast: `${matRoadEdges.riverStart}${matRoadEdges.riverEnd}`,
  cool: `${matRoadEdges.canopyStart}${matRoadEdges.canopyEnd}`,
  balanced: `${matRoadEdges.riverStart}${matRoadEdges.centralLink}${matRoadEdges.canopyEnd}`,
  connector: `M390 205${matRoadEdges.centralLink}`,
};

const matFullRoads = {
  riverWalk: `M-80 343C-12 336 38 317 72 306${matPrimaryPaths.fast.replace('M72 306', '')}C724 43 780 15 840 -18`,
  canopyWay: `M-80 365C-10 347 38 318 72 306${matPrimaryPaths.cool.replace('M72 306', '')}C728 47 782 31 840 18`,
  centralAvenue: `M350 460C367 355 378 265 390 205${matRoadEdges.centralLink}C452 70 483 5 520 -100`,
};

const matSecondaryRoads = 'M-80 264C35 254 88 245 130 238C220 224 295 224 390 205C485 185 612 137 840 78 M128 460C145 370 158 311 165 278C175 230 185 185 195 148C200 99 210 20 228 -100 M575 460C590 345 584 235 590 175C596 150 603 135 610 125C640 72 674 -8 716 -100 M748 460C715 348 704 252 720 184C741 92 780 4 824 -80 M-80 379C65 348 187 361 292 315C390 286 472 286 555 260C652 232 748 193 840 145 M-80 38C76 48 155 34 228 12C333 -18 425 -16 520 8C635 38 738 42 840 20';

const matMapPaths = {
  ...matPrimaryPaths,
  primaryNetwork: `${matFullRoads.riverWalk} ${matFullRoads.canopyWay}`,
  secondaryNetwork: `${matFullRoads.centralAvenue} ${matSecondaryRoads}`,
  network: `${matFullRoads.riverWalk} ${matFullRoads.canopyWay} ${matFullRoads.centralAvenue} ${matSecondaryRoads}`,
};

const matModes = {
  cool: { label: 'Coolest', time: '32 min', shade: '71%', heat: '2.8 / 5', distance: '2.4 km', note: 'More shade, two refill points', path: matMapPaths.cool, directions: ['Follow the riverside shade north', 'Pass two refill points on Canopy Way', 'Continue east to Hill Garden'] },
  balanced: { label: 'Balanced', time: '26 min', shade: '54%', heat: '3.3 / 5', distance: '2.1 km', note: 'A practical everyday trade-off', path: matMapPaths.balanced, directions: ['Follow River Walk to Central Junction', 'Turn north onto Central Avenue', 'Join Canopy Way at Garden Junction'] },
  fast: { label: 'Fastest', time: '20 min', shade: '29%', heat: '4.2 / 5', distance: '1.8 km', note: 'Shorter, but exposed at midday', path: matMapPaths.fast, directions: ['Follow River Walk east', 'Keep right through Cedar Junction', 'Exit at Hill Garden east gate'] },
};

const kiteSteps = [
  { name: 'Draft', copy: 'Milestone terms are agreed off-chain.' },
  { name: 'Funded', copy: 'Client deposits 250 USDT into escrow.' },
  { name: 'Submitted', copy: 'Freelancer attaches delivery proof.' },
  { name: 'Review', copy: 'A 24-hour review window begins.' },
  { name: 'Released', copy: 'Contract releases funds to the freelancer.' },
];

function CaseEyebrow({ children }) {
  return <span className="case-eyebrow">{children}</span>;
}

function CaseLead({ index, eyebrow, title, copy }) {
  return <header className="case-section-lead">
    <span className="case-section-index">{index}</span>
    <div><CaseEyebrow>{eyebrow}</CaseEyebrow><h2>{withoutTrailingPeriod(title)}</h2>{copy && <p>{copy}</p>}</div>
  </header>;
}

function CaseHero({ work, theme, label, summary, facts, demoLabel }) {
  return <section className={`deep-case-hero case-theme-${theme}`}>
    <div className="page-shell">
      <Link className="deep-case-back" to="/#selected-works"><ArrowLeft size={16} /> Selected work</Link>
      <div className="deep-case-heading">
        <div>
          <CaseEyebrow>{label}</CaseEyebrow>
          <h1>{withoutTrailingPeriod(work.title)}</h1>
        </div>
        <div className="deep-case-summary">
          <p>{summary}</p>
          <a className="case-jump-link" href="#live-demo">{demoLabel}<ArrowUpRight size={17} /></a>
        </div>
      </div>
      <figure className="deep-case-cover">
        <img src={work.image} alt={`${work.title} project art direction`} />
        <figcaption><span>Self-initiated concept</span><span>Art direction + product prototype</span></figcaption>
      </figure>
      <dl className="case-facts">
        {facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
      </dl>
      <p className="case-honesty-note"><strong>Project status:</strong> This is a self-initiated concept case study. The interface, architecture and interactive prototype were created for demonstration; no client engagement or production deployment is implied.</p>
    </div>
  </section>;
}

function InsightList({ items }) {
  return <div className="case-insight-list">{items.map((item, index) => <article key={item.title}>
    <span>{String(index + 1).padStart(2, '0')}</span>
    <h3>{withoutTrailingPeriod(item.title)}</h3>
    <p>{item.copy}</p>
  </article>)}</div>;
}

function MatMapBase({ buildingMaskId, motion = false }) {
  const tileClipId = `${buildingMaskId}-tile`;
  return <>
    <defs>
      <clipPath id={tileClipId} clipPathUnits="userSpaceOnUse"><rect x="0" y="-60" width="760" height="480"/></clipPath>
      <mask id={buildingMaskId} maskUnits="userSpaceOnUse" x="0" y="-60" width="760" height="480">
        <rect x="0" y="-60" width="760" height="480" fill="#fff"/>
        <path d={matMapPaths.network} fill="none" stroke="#000" strokeWidth="42" strokeLinecap="butt" strokeLinejoin="round"/>
      </mask>
    </defs>
    <rect x="0" y="-60" width="760" height="480" fill="#e6ebf1"/>
    <g clipPath={`url(#${tileClipId})`}>
      <path className="mat-product-river" d="M0 -60H38C48 -42 52 -20 43 0C58 55 26 104 48 159C66 206 28 248 43 302C49 326 45 345 35 360C30 382 24 402 18 420H0Z"/>
      <path className="mat-product-park" d="M38 -60H111C98 -36 102 -16 105 0C91 48 102 91 79 134C58 174 83 215 62 259C48 289 60 330 48 360C45 382 45 401 54 420H18C24 402 30 382 35 360C45 345 49 326 43 302C28 248 66 206 48 159C26 104 58 55 43 0C52 -20 48 -42 38 -60Z"/>
      <g className="mat-product-streets mat-product-streets-secondary">
        <path className="mat-product-street-edge-secondary" d={matMapPaths.secondaryNetwork}/><path className="mat-product-street-surface-secondary" d={matMapPaths.secondaryNetwork}/><path className="mat-product-street-center-secondary" d={matMapPaths.secondaryNetwork}/>
      </g>
      <g className="mat-product-streets mat-product-streets-primary">
        <path className="mat-product-street-edge" d={matMapPaths.primaryNetwork}/><path className="mat-product-street-surface" d={matMapPaths.primaryNetwork}/><path className="mat-product-street-center" d={matMapPaths.primaryNetwork}/>
      </g>
      <g className="mat-product-buildings" mask={`url(#${buildingMaskId})`}>
        <path d="M75 -48L151 -43L158 -12L91 -8Z"/><path d="M262 -51L333 -46L327 -13L270 -10Z"/><path d="M385 -46L460 -49L469 -16L393 -10Z"/><path d="M552 -48L628 -42L619 -9L550 -13Z"/><path d="M688 -46L749 -51L746 -12L700 -9Z"/>
        <path d="M79 55L139 42L157 82L108 107L78 94Z"/><path d="M237 44L298 35L305 68L255 85L230 69Z"/><path d="M366 35L433 31L425 65L372 68Z"/><path d="M518 29L583 29L565 45L522 50Z"/><path d="M644 28L706 24L688 42L649 45Z"/>
        <path d="M160 175L211 170L228 197L181 212L157 197Z"/><path d="M255 151L291 140L293 168L274 188L254 179Z"/><path d="M343 138L383 139L373 168L339 168Z"/><path d="M457 120L488 111L478 135L450 145Z"/><path d="M564 94L597 87L592 105L559 114Z"/>
        <path d="M105 323L142 310L144 339L105 344Z"/><path d="M202 301L260 282L270 319L212 334Z"/><path d="M317 258L359 248L359 307L316 318Z"/><path d="M429 233L477 214L486 281L439 299Z"/><path d="M538 193L569 180L571 239L539 253Z"/><path d="M651 158L706 136L712 199L666 226Z"/>
        <path d="M82 383L145 373L151 412L91 417Z"/><path d="M216 374L297 361L308 407L231 416Z"/><path d="M401 367L494 354L503 405L415 416Z"/><path d="M613 363L696 348L710 400L628 415Z"/>
      </g>
      <g className="mat-product-canopy"><circle cx="52" cy="267" r="14"/><circle cx="44" cy="225" r="15"/><circle cx="50" cy="184" r="13"/><circle cx="91" cy="164" r="14"/><circle cx="130" cy="155" r="13"/><circle cx="178" cy="145" r="14"/><circle cx="230" cy="140" r="13"/><circle cx="275" cy="120" r="12"/><circle cx="315" cy="100" r="14"/><circle cx="373" cy="100" r="13"/><circle cx="430" cy="105" r="14"/><circle cx="490" cy="87" r="13"/><circle cx="550" cy="70" r="14"/><circle cx="612" cy="63" r="12"/></g>
      <path className={motion ? 'mat-motion-heat-corridor' : 'mat-product-heat-corridor'} d={matMapPaths.fast}/>
      <g className="mat-product-junctions"><circle cx="165" cy="278" r="3.5"/><circle cx="270" cy="224" r="3.5"/><circle cx="315" cy="100" r="3.5"/><circle cx="390" cy="205" r="3.5"/><circle cx="430" cy="105" r="3.5"/><circle cx="500" cy="155" r="3.5"/><circle cx="550" cy="70" r="3.5"/><circle cx="610" cy="125" r="3.5"/></g>
      <g className="mat-product-labels"><text x="310" y="87" transform="rotate(-8 310 87)">CANOPY WAY</text><text x="356" y="224" transform="rotate(-13 356 224)">RIVER WALK</text><text x="405" y="158" transform="rotate(-72 405 158)">CENTRAL AVE</text><text x="585" y="55" transform="rotate(-12 585 55)">GARDEN LOOP</text></g>
    </g>
  </>;
}

function MatStreetMap({ mode = 'cool', fit = 'slice' }) {
  const route = matModes[mode];
  const buildingMaskId = useId().replace(/:/g, '');
  return <svg className="mat-product-map" viewBox="0 -60 760 480" preserveAspectRatio={`xMidYMid ${fit}`}>
    <MatMapBase buildingMaskId={buildingMaskId}/>
    <path key={mode} className={`mat-demo-route mat-product-route route-${mode}`} d={route.path}/>
    {mode === 'cool' && <g className="mat-product-refills"><circle cx="230" cy="140" r="5"/><circle cx="550" cy="70" r="5"/></g>}
    {mode === 'balanced' && <g className="mat-product-refills"><circle cx="550" cy="70" r="5"/></g>}
    {mode === 'balanced' && <g className="mat-route-junctions" aria-hidden="true"><circle cx="390" cy="205" r="5"/><circle cx="430" cy="105" r="5"/></g>}
    <circle cx="72" cy="306" r="9" className="mat-route-point"/><circle cx="688" cy="58" r="9" className="mat-route-point"/>
  </svg>;
}

function MatRouteDemo() {
  const [mode, setMode] = useState('cool');
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const route = matModes[mode];
  return <div className="mat-live-demo" aria-label="Interactive MÁT route comparison prototype">
    <div className="mat-demo-toolbar">
      <div><span className="mat-mark">MÁT</span><span className="demo-caption">Riverside Market → Hill Garden</span></div>
      <div className="mat-mode-switch" role="group" aria-label="Route strategy">
        {Object.entries(matModes).map(([key, value]) => <button key={key} type="button" aria-pressed={mode === key} onClick={() => setMode(key)}>{value.label}</button>)}
      </div>
    </div>
    <div className="mat-demo-grid">
      <div className="mat-map" aria-hidden="true">
        <MatStreetMap mode={mode} fit="slice"/>
        <span className="mat-map-legend"><i /> shaded streets</span>
      </div>
      <aside className="mat-route-panel" aria-live="polite">
        <CaseEyebrow>Recommended route</CaseEyebrow>
        <h3>{withoutTrailingPeriod(route.label)}</h3>
        <p>{route.note}</p>
        <div className="mat-route-stats"><div><span>Time</span><strong>{route.time}</strong></div><div><span>Distance</span><strong>{route.distance}</strong></div><div><span>Shade</span><strong>{route.shade}</strong></div><div><span>Heat score</span><strong>{route.heat}</strong></div></div>
        {directionsOpen && <ol className="mat-directions-preview">{route.directions.map((direction, index) => <li key={direction}><span>{String(index + 1).padStart(2, '0')}</span>{direction}</li>)}</ol>}
        <button className="mat-route-action" type="button" aria-expanded={directionsOpen} onClick={() => setDirectionsOpen((value) => !value)}>{directionsOpen ? 'Hide directions' : 'Preview directions'} <CaretRight size={16} /></button>
      </aside>
    </div>
  </div>;
}

function MatDeviceStudy() {
  return <div className="mat-device-stage">
    <div className="mat-browser-mockup">
      <div className="mockup-browser-bar"><span/><span/><span/><small>mat.city/route</small></div>
      <div className="mat-browser-content">
        <aside><strong>MÁT</strong><span>Plan a route</span><span>Saved places</span><span>Live conditions</span><div className="mat-weather-chip">32° · AQI 74</div></aside>
        <div className="mat-browser-map"><MatStreetMap mode="cool"/><span className="mat-map-label label-one">71% shade</span><span className="mat-map-label label-two">refill</span></div>
      </div>
    </div>
    <div className="mat-phone-mockup">
      <div className="phone-status"><span>9:41</span><span>•••</span></div>
      <div className="phone-map"><MatStreetMap mode="cool"/><span>12 min cooler</span></div>
      <div className="phone-sheet"><small>ON ROUTE</small><strong>Turn right in 80 m</strong><p>Shade continues for 420 m</p><span className="phone-route-cta">Route details</span></div>
    </div>
  </div>;
}

function MatMotionStudy() {
  const buildingMaskId = useId().replace(/:/g, '');
  return <figure className="case-motion-frame mat-motion-frame">
    <div id="motion-map-board" className="mat-motion-board" role="img" aria-label="Animated MÁT route comparison showing route candidates, environmental evidence and the cooler recommendation">
      <div className="mat-motion-stage" aria-hidden="true">
        <span className="mat-motion-phase"><b>01</b> Compare routes</span>
        <svg viewBox="0 -60 760 480" preserveAspectRatio="xMidYMid slice">
          <MatMapBase buildingMaskId={buildingMaskId} motion/>
          <path className="mat-motion-route mat-motion-route-fast" d={matMapPaths.fast}/>
          <path className="mat-motion-route mat-motion-route-cool" d={matMapPaths.cool}/>
          <circle className="mat-motion-traveler" r="8"><animateMotion dur="7s" begin="1.15s" repeatCount="indefinite" path={matMapPaths.cool}/></circle>
          <g className="mat-motion-intersections"><circle cx="45" cy="280" r="4"/><circle cx="45" cy="185" r="4"/><circle cx="130" cy="155" r="4"/><circle cx="230" cy="140" r="4"/><circle cx="315" cy="100" r="4"/><circle cx="430" cy="105" r="4"/><circle cx="550" cy="70" r="4"/></g>
          <circle className="mat-motion-point" cx="72" cy="306" r="11"/><circle className="mat-motion-point" cx="688" cy="58" r="11"/>
        </svg>
        <span className="mat-motion-map-key"><i/> shaded streets</span>
        <span className="mat-motion-route-legend"><b><i/> Cooler</b><b><i/> Faster</b></span>
      </div>
      <aside className="mat-motion-analysis">
        <span className="mat-motion-phase mat-motion-phase-light"><b>02</b> Explain evidence</span>
        <div className="mat-motion-analysis-head"><small>Route comparison</small><strong>Why this route?</strong><p>Live conditions are translated into visible trade-offs.</p></div>
        <div className="mat-motion-score-list">
          <div className="mat-motion-score mat-motion-score-shade"><span>Shade coverage</span><i/><strong>71%</strong></div>
          <div className="mat-motion-score mat-motion-score-heat"><span>Heat exposure</span><i/><strong>2.8 / 5</strong></div>
          <div className="mat-motion-score mat-motion-score-air"><span>Air quality</span><i/><strong>Moderate</strong></div>
        </div>
        <div className="mat-motion-result"><small>03 · Recommendation</small><strong>Cooler route</strong><p>12 minutes longer · two refill points</p><span><Check size={17} weight="bold"/> Route ready</span></div>
      </aside>
    </div>
    <figcaption><span>Motion prototype · route → evidence → recommendation</span><span>7 second sequence · loops</span></figcaption>
  </figure>;
}

function MatScenarioStudy() {
  const buildingMaskId = useId().replace(/:/g, '');
  return <div className="mat-scenario-study">
    <figure className="mat-scenario-visual">
      <header><span><i/>12:40 PM · Riverside Market</span><strong>33°C</strong></header>
      <div className="mat-scenario-map" aria-label="Fastest and cooler route comparison on the same street network">
        <svg viewBox="0 -60 760 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <MatMapBase buildingMaskId={buildingMaskId}/>
          <path className="mat-scenario-route mat-scenario-route-fast" d={matMapPaths.fast}/>
          <path className="mat-scenario-route mat-scenario-route-cool" d={matMapPaths.cool}/>
          <circle className="mat-scenario-point" cx="72" cy="306" r="9"/><circle className="mat-scenario-point" cx="688" cy="58" r="9"/>
        </svg>
        <span className="mat-scenario-heat">High solar exposure</span>
      </div>
      <figcaption className="mat-scenario-compare">
        <div><span><i/>Fastest</span><strong>20 min</strong><small>29% shade</small></div>
        <div className="is-recommended"><span><i/>MÁT recommends</span><strong>32 min</strong><small>71% shade</small></div>
      </figcaption>
    </figure>
    <aside className="mat-scenario-notes">
      <CaseEyebrow>Decision in context</CaseEyebrow>
      <h3>12 minutes buys 42% more shade</h3>
      <p>The product makes that trade-off visible before the walk begins—not after the user is already exposed.</p>
      <div className="mat-scenario-evidence">
        <article><i className="evidence-sun"/><div><strong>Midday changes the answer</strong><span>Sun angle increases exposure on River Walk.</span></div></article>
        <article><i className="evidence-tree"/><div><strong>Comfort becomes measurable</strong><span>Canopy coverage and refill access explain the detour.</span></div></article>
        <article><i className="evidence-signal"/><div><strong>Conditions remain visible</strong><span>Freshness and confidence travel with every score.</span></div></article>
      </div>
    </aside>
  </div>;
}

function MatScoreStudio() {
  const factors = [
    { label: 'Shade coverage', value: '35%', className: 'factor-shade' },
    { label: 'Heat exposure', value: '30%', className: 'factor-heat' },
    { label: 'Air quality', value: '20%', className: 'factor-air' },
    { label: 'Surface temperature', value: '15%', className: 'factor-surface' },
  ];
  return <div className="mat-score-studio">
    <div className="mat-score-dial-panel">
      <header><span>Walking · hot midday</span><strong>Balanced mode</strong></header>
      <div className="mat-score-dial">
        <svg viewBox="0 0 220 220" aria-hidden="true">
          <circle className="mat-score-ring-track" cx="110" cy="110" r="84"/>
          <circle className="mat-score-ring-value" cx="110" cy="110" r="84"/>
          <circle className="mat-score-ring-marker" cx="110" cy="26" r="7"/>
        </svg>
        <div><small>Comfort score</small><strong>82</strong><span>/ 100</span></div>
      </div>
      <div className="mat-score-verdict"><span>Recommended</span><strong>Cooler by design</strong><small>High confidence · updated 2 min ago</small></div>
    </div>
    <div className="mat-score-factors">
      <header><span>Score composition</span><strong>Every factor stays inspectable</strong></header>
      <div className="mat-factor-list">
        {factors.map((factor) => <div className={`mat-factor-row ${factor.className}`} key={factor.label}>
          <span>{factor.label}</span><strong>{factor.value}</strong><i><b/></i>
        </div>)}
      </div>
      <p><strong>Prototype weighting.</strong> Values respond to route mode, departure time and data confidence; they are not presented as validated production weights.</p>
    </div>
  </div>;
}

function MatResilienceStudy() {
  return <>
    <div className="mat-resilience-study">
      <div className="mat-resilience-product">
        <header><span>MÁT · Active route</span><strong>14:24</strong></header>
        <div className="mat-resilience-map"><MatStreetMap mode="cool"/><span><i/>Connection lost</span></div>
        <div className="mat-resilience-guidance"><small>NEXT TURN · 80 M</small><strong>Continue along Canopy Way</strong><p>Route geometry and the next three instructions are available offline.</p></div>
      </div>
      <div className="mat-resilience-states">
        <header><CaseEyebrow>Live system state</CaseEyebrow><h3>Degrade clearly, never silently</h3></header>
        <article className="state-warning"><i/><div><strong>Environment feed</strong><p>Keep the last reading and show its age.</p></div><span>7 min old</span></article>
        <article className="state-ready"><i/><div><strong>Route geometry</strong><p>Cache the active path and safety details.</p></div><span>Available</span></article>
        <article className="state-ready"><i/><div><strong>Turn guidance</strong><p>Preserve the immediate decision offline.</p></div><span>Available</span></article>
        <article className="state-contrast"><i/><div><strong>Accessible meaning</strong><p>Pair every color with labels and patterns.</p></div><span>AA target</span></article>
        <footer><span>Proposed production path</span><strong>React · MapLibre · scoring service · service-worker cache</strong></footer>
      </div>
    </div>
    <p className="mat-validation-note"><strong>Next validation:</strong> moderated route comparisons, outdoor legibility checks and data-source reliability testing before any production claim.</p>
  </>;
}

function MatCaseStudy({ work }) {
  const facts = [
    { label: 'Project frame', value: '6-week concept sprint' },
    { label: 'Role', value: 'Strategy · UX/UI · React' },
    { label: 'Platform', value: 'Responsive web · PWA' },
    { label: 'Prototype scope', value: 'Routing · conditions · offline states' },
  ];
  return <article className="deep-case case-mat">
    <CaseHero work={work} theme="mat" label="Web product · PWA · 2026" summary="A route planner that treats heat exposure as part of the journey, not a cost discovered after choosing the shortest path." facts={facts} demoLabel="Try the route prototype" />

    <section id="mat-premise" className="case-section case-mat-premise"><div className="page-shell">
      <CaseLead index="01" eyebrow="Route in context" title="A cooler route earns its extra twelve minutes." copy="The decision is shown on the street network, with the environmental cost attached to each option." />
      <MatScenarioStudy />
    </div></section>

    <section id="route-model" className="case-section mat-score-section"><div className="page-shell">
      <CaseLead index="02" eyebrow="Scoring engine" title="The recommendation shows its work." copy="A single score summarizes the route; its contributing signals remain visible and comparable." />
      <MatScoreStudio />
    </div></section>

    <section id="live-demo" className="case-section case-live-section"><div className="page-shell">
      <CaseLead index="03" eyebrow="Live prototype" title="Compare the trade-off yourself." copy="Switch between the coolest, balanced and fastest strategy. The prototype recalculates the route story, not just the line on the map." />
      <MatRouteDemo />
    </div></section>

    <section id="responsive-system" className="case-section case-device-section"><div className="page-shell">
      <CaseLead index="04" eyebrow="Responsive system" title="Planning on desktop. Guidance in your hand." copy="Desktop favors comparison and context; the mobile state removes everything that does not help the next decision." />
      <MatDeviceStudy />
    </div></section>

    <section id="motion-study" className="case-section case-motion-section"><div className="page-shell">
      <CaseLead index="05" eyebrow="Motion study" title="Let the recommendation reveal its reasoning." copy="The route draws first, then environmental evidence and the recommendation settle into place. Reduced-motion users receive the complete final state without animation." />
      <MatMotionStudy />
    </div></section>

    <section id="delivery-thinking" className="case-section case-system-section"><div className="page-shell">
      <CaseLead index="06" eyebrow="Resilient states" title="The route stays useful when live data does not." copy="The interface exposes stale inputs, preserves the active journey and keeps immediate guidance available offline." />
      <MatResilienceStudy />
    </div></section>
  </article>;
}

function KitePayDemo() {
  const [active, setActive] = useState(0);
  const current = kiteSteps[active];
  const advance = () => setActive((value) => Math.min(value + 1, kiteSteps.length - 1));
  const reset = () => setActive(0);
  return <div className="kite-live-demo" aria-label="Interactive KitePay escrow state prototype">
    <div className="kite-demo-topbar"><div><span className="kite-wordmark">KITE/PAY</span><span className="kite-network"><i/> BSC simulation</span></div><span className="kite-wallet">0x71A9…A92f</span></div>
    <div className="kite-demo-layout">
      <aside className="kite-demo-sidebar"><span>Overview</span><span className="is-active">Milestones</span><span>Activity</span><span>Contract</span><small>Prototype only<br/>No wallet connection</small></aside>
      <div className="kite-demo-main">
        <header><div><CaseEyebrow>Website delivery · milestone 02</CaseEyebrow><h3>{withoutTrailingPeriod(current.name)}</h3><p aria-live="polite">{current.copy}</p></div><strong>250.00 <small>USDT</small></strong></header>
        <ol className="kite-state-track">{kiteSteps.map((step,index) => <li key={step.name} className={index < active ? 'is-done' : index === active ? 'is-current' : ''}><i>{index < active ? <Check size={13} weight="bold"/> : index + 1}</i><span>{step.name}</span></li>)}</ol>
        <div className="kite-demo-cards">
          <article><span>Recipient</span><strong>hyank.studio</strong><code>0x71A9…A92f</code></article>
          <article><span>Review window</span><strong>24 hours</strong><small>Release requires client confirmation</small></article>
          <article><span>Escrow balance</span><strong>{active === 4 ? '0.00' : active === 0 ? '—' : '250.00'} USDT</strong><small>{active === 4 ? 'Released to recipient' : 'Held by milestone contract'}</small></article>
        </div>
        <div className="kite-demo-actions"><button type="button" onClick={reset} disabled={active === 0}>Reset</button><button type="button" onClick={advance} disabled={active === kiteSteps.length - 1}>{active === kiteSteps.length - 1 ? 'Flow complete' : `Simulate ${kiteSteps[active + 1].name}`} <CaretRight size={16}/></button></div>
      </div>
    </div>
  </div>;
}

function KiteArchitecture() {
  return <div className="kite-architecture" aria-label="KitePay proposed smart contract architecture">
    <div className="kite-actor actor-client"><small>ROLE</small><strong>Client</strong><span>Funds · reviews</span></div>
    <div className="kite-contract-core"><small>FACTORY → ESCROW</small><strong>MilestoneEscrow</strong><code>SafeERC20 · roles · events</code><span>One agreement, isolated balance</span></div>
    <div className="kite-actor actor-maker"><small>ROLE</small><strong>Freelancer</strong><span>Submits · receives</span></div>
    <div className="kite-actor actor-arbiter"><small>OPTIONAL</small><strong>Arbiter</strong><span>Resolves disputes</span></div>
    <i className="architecture-line line-one"/><i className="architecture-line line-two"/><i className="architecture-line line-three"/>
  </div>;
}

function KitePayCaseStudy({ work }) {
  const facts = [
    { label: 'Project frame', value: '5-week product + protocol sprint' },
    { label: 'Role', value: 'Product design · Web3 integration' },
    { label: 'Network', value: 'BSC · BEP-20 escrow' },
    { label: 'Prototype scope', value: 'Milestones · receipts · disputes' },
  ];
  return <article className="deep-case case-kite">
    <CaseHero work={work} theme="kite" label="BSC application · Escrow UX · 2026" summary="A milestone escrow that gives clients and independent teams one shared source of truth—from agreed scope to on-chain release." facts={facts} demoLabel="Run the escrow simulation" />

    <section className="case-section kite-premise"><div className="page-shell">
      <CaseLead index="01" eyebrow="The trust gap" title="Payment uncertainty is a product problem before it is a contract problem." copy="Freelancers worry about getting paid. Clients worry about releasing funds too early. KitePay turns the agreement into explicit states that both sides can read before they sign." />
      <InsightList items={[
        { title: 'A signature needs context', copy: 'The interface names the action, amount, recipient and consequence before the wallet opens.' },
        { title: 'On-chain does not mean understandable', copy: 'Transaction hashes become receipts with human-readable events and recovery guidance.' },
        { title: 'Disputes are part of the system', copy: 'Review windows, deadlines and an optional arbiter are visible before funds are deposited.' },
      ]}/>
    </div></section>

    <section className="case-section kite-architecture-section"><div className="page-shell">
      <CaseLead index="02" eyebrow="Contract architecture" title="Isolate value. Make every transition observable." copy="A factory creates one escrow per agreement. Roles, deadlines and token addresses are immutable for that escrow; every meaningful transition emits an event the interface can explain." />
      <KiteArchitecture />
      <p className="kite-architecture-note"><strong>Technical status:</strong> architecture proposal for a BSC testnet implementation. The contract is not presented as audited or deployed.</p>
    </div></section>

    <section id="live-demo" className="case-section kite-demo-section"><div className="page-shell">
      <CaseLead index="03" eyebrow="Live prototype" title="Follow a milestone from draft to release." copy="The demo simulates product states without connecting a wallet or submitting a transaction. It is intentionally safe to explore inside the portfolio." />
      <KitePayDemo />
    </div></section>

    <section className="case-section kite-motion-section"><div className="page-shell">
      <CaseLead index="04" eyebrow="Transaction narrative" title="Show state, proof and consequence in one motion system." copy="The value packet moves only after the corresponding state is confirmed. Event receipts appear at release, preserving the chain of evidence." />
      <figure className="case-motion-frame kite-motion-frame"><img src={kitepayStateFlow} alt="Animated KitePay milestone moving through funded, submitted, review and released states" loading="lazy"/><figcaption>SVG state machine · milestone 02 · 250 USDT</figcaption></figure>
    </div></section>

    <section className="case-section kite-risk-section"><div className="page-shell">
      <CaseLead index="05" eyebrow="Failure-first UX" title="The transaction is not the only thing that can fail." copy="Wallet and contract states are translated into next actions instead of generic red banners." />
      <div className="kite-risk-list">
        <article><span>Wrong network</span><strong>Switch to BSC before continuing</strong><p>The CTA explains the network change before requesting it.</p></article>
        <article><span>Allowance required</span><strong>Two signatures, clearly separated</strong><p>Approval and funding never masquerade as a single action.</p></article>
        <article><span>Signature rejected</span><strong>No funds moved</strong><p>The state stays intact and the user can retry without rebuilding terms.</p></article>
        <article><span>Dispute opened</span><strong>Release is paused</strong><p>Evidence, deadline and arbiter status become the primary interface.</p></article>
      </div>
    </div></section>

    <section className="case-section kite-system-section"><div className="page-shell">
      <CaseLead index="06" eyebrow="Production checklist" title="A credible Web3 interface starts with what it refuses to hide." copy="The product specification pairs interface decisions with contract and infrastructure requirements." />
      <div className="kite-spec-table">
        <div><span>Token handling</span><strong>SafeERC20 · decimal-safe amounts · explicit address</strong></div>
        <div><span>Contract safety</span><strong>Checks-effects-interactions · reentrancy guard · role checks</strong></div>
        <div><span>Indexing</span><strong>Event-based activity feed with RPC fallback</strong></div>
        <div><span>Wallet UX</span><strong>Chain guard · simulation copy · pending and replaced transactions</strong></div>
        <div><span>Disputes</span><strong>Deadline rules · evidence URI · optional arbiter role</strong></div>
        <div><span>Before mainnet</span><strong>Unit tests · fork tests · external audit · monitored pause plan</strong></div>
      </div>
      <div className="case-outcome kite-outcome"><CaseEyebrow>Prototype definition</CaseEyebrow><div>{[['5','contract states'],['4','failure flows'],['3','explicit roles'],['1','shared receipt']].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p>Next validation: testnet contract implementation, adversarial contract tests and moderated wallet-signing sessions before any production deployment.</p></div>
    </div></section>
  </article>;
}

export function DeepCaseStudy({ work }) {
  if (work.slug === 'mat') return <MatCaseStudy work={work} />;
  if (work.slug === 'kitepay') return <KitePayCaseStudy work={work} />;
  return null;
}
