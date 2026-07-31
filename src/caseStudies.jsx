import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CaretRight, Check } from '@phosphor-icons/react';

import matRouteFlow from './assets/case-studies/mat-route-flow.svg';
import kitepayStateFlow from './assets/case-studies/kitepay-state-flow.svg';

const matModes = {
  cool: { label: 'Coolest', time: '32 min', shade: '71%', heat: '2.8 / 5', distance: '2.4 km', note: 'More shade, two refill points', path: 'M62 292C136 290 146 222 218 218s90-82 164-68 96-64 166-72 94-48 158-78' },
  balanced: { label: 'Balanced', time: '26 min', shade: '54%', heat: '3.3 / 5', distance: '2.1 km', note: 'A practical everyday trade-off', path: 'M62 292c91-12 118-53 186-58s93-37 153-47 98-15 151-58 103-50 154-70' },
  fast: { label: 'Fastest', time: '20 min', shade: '29%', heat: '4.2 / 5', distance: '1.8 km', note: 'Shorter, but exposed at midday', path: 'M62 292c96-40 152-24 211-66s108-32 175-73 151-54 258-94' },
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
    <div><CaseEyebrow>{eyebrow}</CaseEyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
  </header>;
}

function CaseHero({ work, theme, label, summary, facts, demoLabel }) {
  return <section className={`deep-case-hero case-theme-${theme}`}>
    <div className="page-shell">
      <Link className="deep-case-back" to="/#selected-works"><ArrowLeft size={16} /> Selected work</Link>
      <div className="deep-case-heading">
        <div>
          <CaseEyebrow>{label}</CaseEyebrow>
          <h1>{work.title}</h1>
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
    <h3>{item.title}</h3>
    <p>{item.copy}</p>
  </article>)}</div>;
}

function MatRouteDemo() {
  const [mode, setMode] = useState('cool');
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const route = matModes[mode];
  return <div className="mat-live-demo" aria-label="Interactive MÁT route comparison prototype">
    <div className="mat-demo-toolbar">
      <div><span className="mat-mark">MÁT</span><span className="demo-caption">Nguyen Hue → Thao Cam Vien</span></div>
      <div className="mat-mode-switch" role="group" aria-label="Route strategy">
        {Object.entries(matModes).map(([key, value]) => <button key={key} type="button" aria-pressed={mode === key} onClick={() => setMode(key)}>{value.label}</button>)}
      </div>
    </div>
    <div className="mat-demo-grid">
      <div className="mat-map" aria-hidden="true">
        <svg viewBox="0 0 760 360">
          <g className="mat-map-roads"><path d="M0 72h760M0 154h760M0 245h760M105 0v360M238 0v360M376 0v360M526 0v360M664 0v360"/><path d="M-20 328C118 252 156 282 270 221S485 62 790 112"/></g>
          <g className="mat-map-blocks"><rect x="28" y="24" width="58" height="32" rx="7"/><rect x="132" y="91" width="78" height="40" rx="7"/><rect x="270" y="28" width="74" height="96" rx="7"/><rect x="407" y="96" width="90" height="39" rx="7"/><rect x="558" y="26" width="74" height="92" rx="7"/><rect x="46" y="178" width="88" height="43" rx="7"/><rect x="276" y="178" width="67" height="45" rx="7"/><rect x="435" y="178" width="60" height="57" rx="7"/><rect x="578" y="173" width="90" height="48" rx="7"/><rect x="140" y="267" width="69" height="57" rx="7"/><rect x="310" y="270" width="96" height="49" rx="7"/><rect x="534" y="267" width="82" height="54" rx="7"/></g>
          <circle className="mat-heat-zone zone-one" cx="306" cy="144" r="82"/><circle className="mat-heat-zone zone-two" cx="595" cy="236" r="72"/>
          <path key={mode} className={`mat-demo-route route-${mode}`} d={route.path}/>
          <circle cx="62" cy="292" r="10" className="mat-route-point"/><circle cx="706" cy="59" r="10" className="mat-route-point"/>
        </svg>
        <span className="mat-map-legend"><i /> lower heat exposure</span>
      </div>
      <aside className="mat-route-panel" aria-live="polite">
        <CaseEyebrow>Recommended route</CaseEyebrow>
        <h3>{route.label}</h3>
        <p>{route.note}</p>
        <div className="mat-route-stats"><div><span>Time</span><strong>{route.time}</strong></div><div><span>Distance</span><strong>{route.distance}</strong></div><div><span>Shade</span><strong>{route.shade}</strong></div><div><span>Heat score</span><strong>{route.heat}</strong></div></div>
        {directionsOpen && <ol className="mat-directions-preview"><li><span>01</span>Walk toward Ton Duc Thang</li><li><span>02</span>Stay under the riverside canopy</li><li><span>03</span>Refill point in 1.1 km</li></ol>}
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
        <div className="mat-browser-map"><span className="mat-map-label label-one">71% shade</span><span className="mat-map-label label-two">refill</span><i className="mat-browser-path"/></div>
      </div>
    </div>
    <div className="mat-phone-mockup">
      <div className="phone-status"><span>9:41</span><span>•••</span></div>
      <div className="phone-map"><i/><span>12 min cooler</span></div>
      <div className="phone-sheet"><small>ON ROUTE</small><strong>Turn right in 80 m</strong><p>Shade continues for 420 m</p><span className="phone-route-cta">Route details</span></div>
    </div>
  </div>;
}

function MatCaseStudy({ work }) {
  const facts = [
    { label: 'Project frame', value: '6-week concept sprint' },
    { label: 'Role', value: 'Strategy · UX/UI · React' },
    { label: 'Platform', value: 'Responsive web · PWA' },
    { label: 'Prototype scope', value: 'Routing · conditions · offline states' },
  ];
  return <article className="deep-case case-mat">
    <CaseHero work={work} theme="mat" label="Web product · PWA · 2026" summary="A route planner that treats heat exposure as part of the journey—not an invisible cost paid after the shortest path is chosen." facts={facts} demoLabel="Try the route prototype" />

    <section className="case-section case-mat-premise"><div className="page-shell">
      <CaseLead index="01" eyebrow="The premise" title="The fastest route is not always the kindest one." copy="Most route planners optimize time and distance. MÁT adds shade, surface temperature, air quality and recovery points, then explains the trade-off in plain language." />
      <InsightList items={[
        { title: 'Comfort is contextual', copy: 'A ten-minute shortcut can feel worse when it removes tree cover at midday.' },
        { title: 'Scores need a reason', copy: 'People should see why a route is recommended, not trust an unexplained green badge.' },
        { title: 'Conditions keep moving', copy: 'Sun angle and air quality change during the trip, so route guidance must stay useful after departure.' },
      ]}/>
    </div></section>

    <section className="case-section mat-score-section"><div className="page-shell">
      <CaseLead index="02" eyebrow="Product logic" title="A route score people can inspect." copy="The prototype keeps the model legible. Each recommendation exposes the factors behind it and lets people choose their own balance." />
      <div className="mat-score-model">
        {[['35','Shade'],['30','Heat'],['20','Air'],['15','Surface']].map(([value,label]) => <div key={label}><strong>{value}<sup>%</sup></strong><span>{label}</span></div>)}
        <p>Weights shift by time of day and route mode. No factor is hidden behind a single opaque score.</p>
      </div>
    </div></section>

    <section id="live-demo" className="case-section case-live-section"><div className="page-shell">
      <CaseLead index="03" eyebrow="Live prototype" title="Compare the trade-off yourself." copy="Switch between the coolest, balanced and fastest strategy. The prototype recalculates the route story, not just the line on the map." />
      <MatRouteDemo />
    </div></section>

    <section className="case-section case-device-section"><div className="page-shell">
      <CaseLead index="04" eyebrow="Responsive system" title="Planning on desktop. Guidance in your hand." copy="Desktop favors comparison and context; the mobile state removes everything that does not help the next decision." />
      <MatDeviceStudy />
    </div></section>

    <section className="case-section case-motion-section"><div className="page-shell">
      <CaseLead index="05" eyebrow="Motion study" title="Let the recommendation reveal its reasoning." copy="The route draws first, then environmental evidence and the recommendation settle into place. Reduced-motion users receive the complete final state without animation." />
      <figure className="case-motion-frame mat-motion-frame"><img src={matRouteFlow} alt="Animated MÁT route comparison showing heat, shade and route selection" loading="lazy"/><figcaption>SVG prototype · route scoring and recommendation sequence</figcaption></figure>
    </div></section>

    <section className="case-section case-system-section"><div className="page-shell">
      <CaseLead index="06" eyebrow="Delivery thinking" title="Designed beyond the happy path." copy="The concept includes the operational states a production team would need before the interface can be trusted outdoors." />
      <div className="case-decision-grid">
        <article><span>01</span><h3>Data confidence</h3><p>Every condition carries a freshness timestamp and a fallback when a source becomes unavailable.</p></article>
        <article><span>02</span><h3>Offline continuity</h3><p>The active route, next turns and safety details remain available when the network drops.</p></article>
        <article><span>03</span><h3>Accessible contrast</h3><p>Heat is never communicated by color alone; patterns and labels preserve meaning.</p></article>
        <article><span>04</span><h3>Production path</h3><p>React, MapLibre, a route-scoring service and service-worker caching form the proposed architecture.</p></article>
      </div>
      <div className="case-outcome"><CaseEyebrow>Prototype definition</CaseEyebrow><div>{[['3','route strategies'],['6','environment inputs'],['4','resilient states'],['0','hidden criteria']].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p>Next validation: moderated route-comparison sessions, outdoor legibility checks and data-source reliability testing before any production claim.</p></div>
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
        <header><div><CaseEyebrow>Website delivery · milestone 02</CaseEyebrow><h3>{current.name}</h3><p aria-live="polite">{current.copy}</p></div><strong>250.00 <small>USDT</small></strong></header>
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
