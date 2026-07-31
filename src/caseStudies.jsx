import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CaretRight, Check } from '@phosphor-icons/react';

import kitepayStateFlow from './assets/case-studies/kitepay-state-flow.svg';

const matModes = {
  cool: { label: 'Coolest', time: '32 min', shade: '71%', heat: '2.8 / 5', distance: '2.4 km', note: 'More shade, two refill points', path: 'M90 315V220H230V135H380V55H690', directions: ['North from Market St', 'Turn onto shaded Oak Walk', 'Continue via Pine St to Hill Garden'] },
  balanced: { label: 'Balanced', time: '26 min', shade: '54%', heat: '3.3 / 5', distance: '2.1 km', note: 'A practical everyday trade-off', path: 'M90 315H230V254.3L540 119.7V55H690', directions: ['East along Market St', 'Join Sunline Ave for 740 m', 'Exit north toward Hill Garden'] },
  fast: { label: 'Fastest', time: '20 min', shade: '29%', heat: '4.2 / 5', distance: '1.8 km', note: 'Shorter, but exposed at midday', path: 'M90 315L690 55', directions: ['Join Sunline Ave', 'Continue directly for 1.6 km', 'Arrive at Hill Garden east gate'] },
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

function MatStreetMap({ mode = 'cool' }) {
  const route = matModes[mode];
  const diagonalCutId = useId().replace(/:/g, '');
  return <svg className="mat-product-map" viewBox="0 0 760 360" preserveAspectRatio="xMidYMid slice">
    <defs><mask id={diagonalCutId} maskUnits="userSpaceOnUse" x="0" y="0" width="760" height="360"><rect width="760" height="360" fill="#fff"/><path d="M90 315L690 55" fill="none" stroke="#000" strokeWidth="38" strokeLinecap="round"/></mask></defs>
    <rect width="760" height="360" fill="#dbe5f3"/>
    <path className="mat-product-river" d="M0 0h52c-8 58 10 92-8 142s-20 103 0 145c9 20 9 44-3 73H0Z"/>
    <path className="mat-product-park" d="M48 0h72v360H38c24-55 5-93 22-137s1-80 13-122S52 43 48 0Z"/>
    <g><path className="mat-product-street-edge" d="M0 55H760M0 135H760M0 220H760M0 315H760M90 0V360M230 0V360M380 0V360M540 0V360M690 0V360"/><path className="mat-product-street-surface" d="M0 55H760M0 135H760M0 220H760M0 315H760M90 0V360M230 0V360M380 0V360M540 0V360M690 0V360"/><path className="mat-product-street-center" d="M0 55H760M0 135H760M0 220H760M0 315H760M90 0V360M230 0V360M380 0V360M540 0V360M690 0V360"/></g>
    <g mask={`url(#${diagonalCutId})`}><g className="mat-product-lots"><rect x="108" y="72" width="104" height="46" rx="7"/><rect x="248" y="72" width="114" height="46" rx="7"/><rect x="398" y="72" width="124" height="46" rx="7"/><rect x="558" y="72" width="114" height="46" rx="7"/><rect x="108" y="152" width="104" height="51" rx="7"/><rect x="248" y="152" width="114" height="51" rx="7"/><rect x="398" y="152" width="124" height="51" rx="7"/><rect x="558" y="152" width="114" height="51" rx="7"/><rect x="108" y="237" width="104" height="61" rx="7"/><rect x="248" y="237" width="114" height="61" rx="7"/><rect x="398" y="237" width="124" height="61" rx="7"/><rect x="558" y="237" width="114" height="61" rx="7"/></g>
    <g className="mat-product-buildings"><path d="M120 81h42v17h37v12h-79Z"/><rect x="260" y="81" width="38" height="28" rx="4"/><path d="M307 81h43v15h-18v13h-25Z"/><rect x="410" y="81" width="98" height="28" rx="4"/><rect x="570" y="81" width="88" height="28" rx="4"/><rect x="120" y="162" width="78" height="31" rx="4"/><path d="M260 162h46v12h44v19h-90Z"/><rect x="410" y="162" width="42" height="31" rx="4"/><rect x="462" y="162" width="46" height="20" rx="4"/><path d="M570 162h88v31h-34v-14h-54Z"/><rect x="120" y="248" width="35" height="40" rx="4"/><rect x="164" y="248" width="35" height="24" rx="4"/><path d="M260 248h90v40h-41v-17h-49Z"/><rect x="410" y="248" width="42" height="40" rx="4"/><rect x="462" y="248" width="46" height="24" rx="4"/><rect x="570" y="248" width="88" height="40" rx="4"/></g></g>
    <g><path className="mat-product-diagonal-edge" d="M90 315L690 55"/><path className="mat-product-diagonal-surface" d="M90 315L690 55"/><path className="mat-product-diagonal-center" d="M90 315L690 55"/></g>
    <g className="mat-product-canopy"><circle cx="90" cy="266" r="15"/><circle cx="150" cy="220" r="14"/><circle cx="205" cy="220" r="13"/><circle cx="230" cy="176" r="14"/><circle cx="286" cy="135" r="13"/><circle cx="344" cy="135" r="15"/><circle cx="380" cy="92" r="13"/><circle cx="444" cy="55" r="14"/><circle cx="506" cy="55" r="13"/></g>
    <path className="mat-product-heat-corridor" d="M90 315L690 55"/>
    <path key={mode} className={`mat-demo-route mat-product-route route-${mode}`} d={route.path}/>
    <g className="mat-product-labels"><text x="310" y="49">HILL ST</text><text x="310" y="129">PINE ST</text><text x="310" y="214">OAK WALK</text><text x="310" y="309">MARKET ST</text><text x="388" y="196" transform="rotate(-23 388 196)">SUNLINE AVE</text></g>
    <circle cx="90" cy="315" r="9" className="mat-route-point"/><circle cx="690" cy="55" r="9" className="mat-route-point"/>
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
        <MatStreetMap mode={mode}/>
        <span className="mat-map-legend"><i /> shaded streets</span>
      </div>
      <aside className="mat-route-panel" aria-live="polite">
        <CaseEyebrow>Recommended route</CaseEyebrow>
        <h3>{route.label}</h3>
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
  return <figure className="case-motion-frame mat-motion-frame">
    <div id="motion-map-board" className="mat-motion-board" role="img" aria-label="Animated MÁT route comparison showing route candidates, environmental evidence and the cooler recommendation">
      <div className="mat-motion-stage" aria-hidden="true">
        <span className="mat-motion-phase"><b>01</b> Compare routes</span>
        <svg viewBox="0 0 720 500" preserveAspectRatio="xMidYMid meet">
          <defs><mask id="mat-motion-diagonal-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="720" height="500"><rect width="720" height="500" fill="#fff"/><path d="M102 452L598 86" fill="none" stroke="#000" strokeWidth="50" strokeLinecap="round"/></mask></defs>
          <path className="mat-motion-river" d="M0 0H63C49 76 71 130 46 196S28 318 53 372 47 455 22 500H0Z"/>
          <path className="mat-motion-park" d="M55 0h68v500H40c34-68 6-121 27-181s3-112 17-172S57 62 55 0Z"/>
          <g className="mat-motion-streets">
            <path className="mat-motion-street-edge" d="M0 86H720M0 210H720M0 336H720M0 452H720M102 0V500M260 0V500M432 0V500M598 0V500"/>
            <path className="mat-motion-street-surface" d="M0 86H720M0 210H720M0 336H720M0 452H720M102 0V500M260 0V500M432 0V500M598 0V500"/>
            <path className="mat-motion-street-center" d="M0 86H720M0 210H720M0 336H720M0 452H720M102 0V500M260 0V500M432 0V500M598 0V500"/>
          </g>
          <g mask="url(#mat-motion-diagonal-cut)"><g className="mat-motion-lots"><rect x="122" y="106" width="118" height="84" rx="9"/><rect x="280" y="106" width="132" height="84" rx="9"/><rect x="452" y="106" width="126" height="84" rx="9"/><rect x="618" y="106" width="102" height="84" rx="9"/><rect x="122" y="230" width="118" height="86" rx="9"/><rect x="280" y="230" width="132" height="86" rx="9"/><rect x="452" y="230" width="126" height="86" rx="9"/><rect x="618" y="230" width="102" height="86" rx="9"/><rect x="122" y="356" width="118" height="76" rx="9"/><rect x="280" y="356" width="132" height="76" rx="9"/><rect x="452" y="356" width="126" height="76" rx="9"/><rect x="618" y="356" width="102" height="76" rx="9"/></g>
          <g className="mat-motion-buildings"><path d="M136 118h46v31h44v29h-90Z"/><rect x="294" y="119" width="48" height="59" rx="5"/><path d="M354 119h44v26h-18v33h-26Z"/><rect x="465" y="118" width="98" height="60" rx="5"/><rect x="631" y="118" width="74" height="60" rx="5"/><rect x="136" y="242" width="88" height="62" rx="5"/><path d="M294 242h54v22h48v40H294Z"/><rect x="466" y="242" width="42" height="62" rx="5"/><rect x="520" y="242" width="44" height="38" rx="5"/><path d="M632 242h72v62h-28v-25h-44Z"/><rect x="137" y="368" width="42" height="52" rx="5"/><rect x="188" y="368" width="38" height="31" rx="5"/><path d="M294 368h104v52h-47v-21h-57Z"/><rect x="466" y="368" width="44" height="52" rx="5"/><rect x="521" y="368" width="43" height="31" rx="5"/><rect x="632" y="368" width="72" height="52" rx="5"/></g></g>
          <g className="mat-motion-diagonal-street"><path className="mat-motion-diagonal-edge" d="M102 452L598 86"/><path className="mat-motion-diagonal-surface" d="M102 452L598 86"/><path className="mat-motion-diagonal-center" d="M102 452L598 86"/></g>
          <g className="mat-motion-canopy"><circle cx="102" cy="394" r="18"/><circle cx="164" cy="336" r="17"/><circle cx="224" cy="336" r="15"/><circle cx="260" cy="274" r="17"/><circle cx="318" cy="210" r="15"/><circle cx="382" cy="210" r="18"/><circle cx="432" cy="146" r="16"/><circle cx="492" cy="86" r="17"/><circle cx="548" cy="86" r="15"/></g>
          <path className="mat-motion-heat-corridor" d="M102 452L598 86"/>
          <path className="mat-motion-route mat-motion-route-fast" d="M102 452L598 86"/>
          <path className="mat-motion-route mat-motion-route-cool" d="M102 452V336H260V210H432V86H598"/>
          <circle className="mat-motion-traveler" r="8"><animateMotion dur="7s" begin="1.15s" repeatCount="indefinite" path="M102 452V336H260V210H432V86H598"/></circle>
          <g className="mat-motion-intersections"><circle cx="102" cy="336" r="4"/><circle cx="260" cy="336" r="4"/><circle cx="260" cy="210" r="4"/><circle cx="432" cy="210" r="4"/><circle cx="432" cy="86" r="4"/></g>
          <g className="mat-motion-labels"><text x="300" y="79">HILL ST</text><text x="300" y="203">PINE ST</text><text x="300" y="329">OAK WALK</text><text x="300" y="445">MARKET ST</text><text x="425" y="178" transform="rotate(-90 425 178)">2ND AVE</text><text x="69" y="270" transform="rotate(-90 69 270)">RIVER PARK</text><text x="346" y="270" transform="rotate(-36 346 270)">SUNLINE AVE</text></g>
          <circle className="mat-motion-point" cx="102" cy="452" r="11"/><circle className="mat-motion-point" cx="598" cy="86" r="11"/>
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
      <CaseLead index="01" eyebrow="The premise" title="The fastest route is not always the kindest one." copy="Most route planners optimize time and distance. MÁT adds shade, surface temperature, air quality and recovery points, then explains the trade-off in plain language." />
      <InsightList items={[
        { title: 'Comfort is contextual', copy: 'A ten-minute shortcut can feel worse when it removes tree cover at midday.' },
        { title: 'Scores need a reason', copy: 'People should see why a route is recommended, not trust an unexplained green badge.' },
        { title: 'Conditions keep moving', copy: 'Sun angle and air quality change during the trip, so route guidance must stay useful after departure.' },
      ]}/>
    </div></section>

    <section id="route-model" className="case-section mat-score-section"><div className="page-shell">
      <CaseLead index="02" eyebrow="Product logic" title="A route score people can inspect." copy="The prototype keeps the model legible. Each recommendation exposes the factors behind it and lets people choose their own balance." />
      <div className="mat-score-context"><span>Illustrative prototype weighting</span><strong>Walking · hot midday</strong><small>Values change by time, route mode and data confidence.</small></div>
      <div className="mat-score-model">
        {[['35','Shade'],['30','Heat'],['20','Air'],['15','Surface']].map(([value,label]) => <div key={label}><strong>{value}<sup>%</sup></strong><span>{label}</span></div>)}
        <p>These values demonstrate the scoring model; they are not presented as validated production weights.</p>
      </div>
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
