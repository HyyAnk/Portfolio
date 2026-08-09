import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarBlank,
  CheckCircle,
  CoatHanger,
  Needle,
  Package,
  Scissors,
  Sparkle,
} from '@phosphor-icons/react';

import mendHero from './assets/case-studies/mend-hero.webp';
import mendReturnKit from './assets/case-studies/mend-return-kit.webp';
import mendSpace from './assets/case-studies/mend-space.webp';
import mendIntake from './assets/case-studies/mend-intake.webp';
import mendDetail from './assets/case-studies/mend-detail.webp';
import mendCampaign from './assets/case-studies/mend-campaign.webp';
import './mend-case.css';

const journeyStates = [
  {
    key: 'book',
    index: '01',
    label: 'Book',
    icon: CalendarBlank,
    title: 'Book the repair',
    copy: 'Choose the garment, show the wear and set the handover point',
    facts: [['Input', '3 guided photos'], ['Result', 'Clear repair brief']],
  },
  {
    key: 'bring',
    index: '02',
    label: 'Bring',
    icon: Package,
    title: 'Bring the garment',
    copy: 'One intake tag connects the physical piece to its digital record',
    facts: [['Intake', 'MEND 0241'], ['Promise', 'Keep what fits']],
  },
  {
    key: 'repair',
    index: '03',
    label: 'Repair',
    icon: Needle,
    title: 'Follow the work',
    copy: 'Progress stays visible without turning craft into a delivery tracker',
    facts: [['Update', 'Cuff rebuilt'], ['Next', 'Finish and press']],
  },
  {
    key: 'return',
    index: '04',
    label: 'Return',
    icon: CoatHanger,
    title: 'Wear it again',
    copy: 'The return kit closes the service with a useful care record',
    facts: [['Included', 'Care card'], ['Status', 'Ready to wear']],
  },
];

function withoutTrailingPeriod(value = '') {
  return value.replace(/[.!?]+$/u, '');
}

function MendMark({ className = '', title }) {
  return (
    <svg className={`mend-mark ${className}`} viewBox="0 0 100 100" role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'}>
      {title && <title>{title}</title>}
      <path className="mend-mark-path" pathLength="1" d="M14 82V18L50 57L86 18V82" />
      <path className="mend-mark-tie" d="M43 49L57 64M47 45L61 60" />
    </svg>
  );
}

function MendWordmark({ compact = false }) {
  return <span className={`mend-wordmark ${compact ? 'is-compact' : ''}`}><MendMark /><strong>MEND</strong></span>;
}

function VisualHeading({ index, title, copy, light = false }) {
  return (
    <header className={`mend-heading ${light ? 'is-light' : ''}`}>
      <span>{index}</span>
      <div>
        <h2>{withoutTrailingPeriod(title)}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </header>
  );
}

function MendHero({ work }) {
  return (
    <section className="mend-hero">
      <img src={mendHero} alt="Craftsperson repairing an oatmeal work jacket with a visible oxide-red seam inside the MEND atelier" />
      <div className="mend-hero-shade" aria-hidden="true" />
      <div className="mend-shell mend-hero-content">
        <Link className="mend-back" to="/#portfolio"><ArrowLeft size={16} /> Portfolio</Link>
        <header>
          <span>Brand identity / service design / 2026</span>
          <h1>{withoutTrailingPeriod(work.title)}</h1>
          <p>Repair made worth keeping</p>
          <a href="#mend-logo">See how the mark begins <ArrowUpRight size={17} /></a>
        </header>
        <dl className="mend-hero-meta">
          <div><dt>My role</dt><dd>Strategy / naming / identity / product</dd></div>
          <div><dt>Scope</dt><dd>Self-initiated service concept</dd></div>
          <div><dt>Focus</dt><dd>One journey across 09 touchpoints</dd></div>
        </dl>
      </div>
    </section>
  );
}

function MendLogoSection() {
  const stages = [
    ['01', 'Break'],
    ['02', 'Join'],
    ['03', 'Tension'],
    ['04', 'M mark'],
  ];

  return (
    <section id="mend-logo" className="mend-section mend-logo-section">
      <div className="mend-shell">
        <VisualHeading index="01 / Logo" title="A break becomes the mark" copy="The M is drawn as one repair line: separated, joined and held under tension" />
        <div className="mend-logo-board">
          <div className="mend-logo-construction">
            <div className="mend-grid" aria-hidden="true" />
            <span className="mend-axis is-x" aria-hidden="true" />
            <span className="mend-axis is-y" aria-hidden="true" />
            <MendMark className="is-construction" title="MEND continuous repair-line logo mark" />
            <span className="mend-measure is-top">1:1</span>
            <span className="mend-measure is-side">12° joint</span>
          </div>
          <div className="mend-logo-variants">
            <div className="mend-lockup is-primary"><MendWordmark /><small>Primary lockup</small></div>
            <div className="mend-lockup is-stamp"><MendMark /><small>Garment stamp</small></div>
            <div className="mend-lockup is-label"><MendWordmark compact /><small>12 mm label</small></div>
          </div>
          <div className="mend-logo-sequence" aria-label="Logo construction sequence">
            {stages.map(([number, label], index) => (
              <figure key={label} className={`is-${index + 1}`}>
                <div><i /><i /><MendMark /></div>
                <figcaption><span>{number}</span><strong>{label}</strong></figcaption>
              </figure>
            ))}
          </div>
          <aside className="mend-logo-ownership">
            <Sparkle size={21} weight="duotone" />
            <p><strong>I created</strong> the name, mark and responsive logo family</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MendIdentitySection() {
  return (
    <section className="mend-section mend-identity-section">
      <div className="mend-shell">
        <VisualHeading index="02 / System" title="One line across every surface" copy="Oxide red signals the act of repair while warm neutrals let material texture lead" />
        <div className="mend-identity-grid">
          <figure className="mend-kit-visual">
            <img src={mendReturnKit} alt="MEND garment return kit with repaired overshirt, reusable sleeve, care cards, tag, thread and tailoring tools" loading="lazy" />
            <figcaption><MendWordmark compact /><span>Return kit / application 01</span></figcaption>
          </figure>
          <div className="mend-brand-atlas">
            <div className="mend-type-card"><span>Editorial voice</span><strong>Aa</strong><p>Playfair Display<br /><b>Manrope</b></p></div>
            <div className="mend-palette" aria-label="MEND colour palette">
              <span style={{ '--swatch': '#A4332D' }}><b>Repair red</b><small>#A4332D</small></span>
              <span style={{ '--swatch': '#F2ECE2' }}><b>Warm paper</b><small>#F2ECE2</small></span>
              <span style={{ '--swatch': '#BDAE9D' }}><b>Unbleached</b><small>#BDAE9D</small></span>
              <span style={{ '--swatch': '#1C1A17' }}><b>Tailor ink</b><small>#1C1A17</small></span>
            </div>
            <div className="mend-label-card"><MendMark /><div><strong>MEND / 0241</strong><span>Repair / return / repeat</span></div><i /><i /><i /><i /></div>
            <div className="mend-pattern-card" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MendContributionSection() {
  const contributions = [
    {
      verb: 'Named',
      title: 'One clear promise',
      copy: 'Reframed repair as care, not damage control',
      visual: <div className="mend-note-visual"><span>KEEP</span><i /><span>WHAT FITS</span></div>,
    },
    {
      verb: 'Designed',
      title: 'Nine touchpoints',
      copy: 'Connected booking, intake, work and return',
      visual: <div className="mend-flow-visual"><i /><b /><i /><b /><i /><b /><i /></div>,
    },
    {
      verb: 'Prototyped',
      title: 'Twelve UI states',
      copy: 'Made the service legible from first photo to care record',
      visual: <div className="mend-screen-visual"><i /><span /><span /><b /></div>,
    },
  ];

  return (
    <section className="mend-section mend-contribution-section">
      <div className="mend-shell">
        <VisualHeading index="03 / Contribution" title="I shaped the service end to end" copy="Strategy, identity and interface were developed as one visible system" />
        <div className="mend-contribution-board">
          <div className="mend-board-thread" aria-hidden="true"><span /><span /><span /></div>
          {contributions.map((item, index) => (
            <article key={item.verb} className={`mend-contribution-card is-${index + 1}`}>
              <span>{item.verb}</span>
              {item.visual}
              <div><strong>{item.title}</strong><p>{item.copy}</p></div>
            </article>
          ))}
          <aside className="mend-scope-ticket"><MendMark /><span>My scope</span><strong>Naming / brand strategy / identity / UX UI / art direction</strong></aside>
        </div>
      </div>
    </section>
  );
}

function MendJourneySection() {
  const [activeKey, setActiveKey] = useState('bring');
  const active = journeyStates.find((item) => item.key === activeKey) || journeyStates[0];
  const ActiveIcon = active.icon;

  return (
    <section className="mend-section mend-journey-section">
      <div className="mend-shell">
        <VisualHeading index="04 / Journey" title="One journey from booking to return" copy="Every stage keeps the garment, the craft and the next action connected" />
        <div className="mend-journey-stage">
          <figure>
            <img src={mendIntake} alt="MEND craftsperson and customer reviewing a garment together during intake" loading="lazy" />
            <figcaption><MendMark /><span>Physical touchpoint</span><strong>Garment intake / MEND 0241</strong></figcaption>
          </figure>
          <div className="mend-journey-console">
            <nav aria-label="MEND service journey stages">
              {journeyStates.map((item) => {
                const Icon = item.icon;
                return (
                  <button type="button" key={item.key} aria-pressed={item.key === activeKey} onClick={() => setActiveKey(item.key)}>
                    <span>{item.index}</span><Icon size={18} /><strong>{item.label}</strong><i />
                  </button>
                );
              })}
            </nav>
            <article key={active.key} aria-live="polite">
              <header><ActiveIcon size={34} weight="duotone" /><span>Service stage {active.index}</span></header>
              <h3>{active.title}</h3>
              <p>{active.copy}</p>
              <dl>{active.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              <div className="mend-progress-line"><span style={{ '--progress': `${Number(active.index) * 25}%` }} /></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingScreen() {
  return <div className="mend-app-screen mend-book-screen"><span>New repair</span><h3>What needs care</h3><div className="mend-garment-choice"><i /><b>Charcoal jacket</b><small>Outerwear</small></div><div className="mend-repair-options"><span className="is-active">Cuff</span><span>Seam</span><span>Lining</span></div><button type="button">Add repair photos <ArrowUpRight size={15} /></button></div>;
}

function TrackingScreen() {
  return <div className="mend-app-screen mend-track-screen"><span>MEND / 0241</span><h3>In good hands</h3><div className="mend-garment-drawing"><i /><i /><i /></div><div className="mend-track-list"><span className="is-done"><CheckCircle size={15} weight="fill" />Intake checked</span><span className="is-done"><CheckCircle size={15} weight="fill" />Cuff rebuilt</span><span><i />Finish and press</span></div></div>;
}

function ReturnScreen() {
  return <div className="mend-app-screen mend-return-screen"><CheckCircle size={30} weight="fill" /><span>Ready to wear</span><h3>Your jacket is back</h3><div className="mend-care-record"><small>Care record</small><strong>Rebuilt cuff / reinforced seam</strong><p>Brush clean and air between wears</p></div><button type="button">View handover details <ArrowUpRight size={15} /></button></div>;
}

function PhoneFrame({ children, className = '' }) {
  return <article className={`mend-phone ${className}`}><header><MendMark /><b>MEND</b><span>•••</span></header>{children}<footer><i /></footer></article>;
}

function MendProductSection() {
  return (
    <section className="mend-section mend-product-section">
      <div className="mend-shell">
        <VisualHeading index="05 / Product" title="The thread continues on screen" copy="Twelve interface states turn a fragmented repair process into one calm flow" light />
        <div className="mend-product-stage">
          <div className="mend-product-thread" aria-hidden="true"><i /><i /><i /></div>
          <PhoneFrame className="is-book"><BookingScreen /></PhoneFrame>
          <PhoneFrame className="is-track"><TrackingScreen /></PhoneFrame>
          <PhoneFrame className="is-return"><ReturnScreen /></PhoneFrame>
          <aside className="mend-ui-proof"><span>I designed</span><strong>Book / track / collect</strong><small>12 responsive states / 03 core moments</small></aside>
        </div>
      </div>
    </section>
  );
}

function MendSpaceSection() {
  return (
    <section className="mend-space-section">
      <figure>
        <img src={mendSpace} alt="MEND garment repair atelier storefront with the oxide-red line extending from sign to workshop" loading="lazy" />
        <figcaption>
          <span>06 / Environment</span>
          <h2>The identity reaches the street</h2>
          <p>The repair line scales from a 12 mm label to the full workshop facade</p>
        </figcaption>
      </figure>
    </section>
  );
}

function MendCampaignSection() {
  return (
    <section className="mend-section mend-campaign-section">
      <div className="mend-shell">
        <VisualHeading index="07 / Campaign" title="The repair becomes the message" copy="Close craft details pair with direct language instead of sustainability claims" />
        <div className="mend-campaign-wall">
          <figure className="mend-detail-visual"><img src={mendDetail} alt="Close view of oxide-red visible mending stitches being finished on charcoal wool" loading="lazy" /><figcaption>Visible repair / detail 04</figcaption></figure>
          <article className="mend-poster is-keep"><MendWordmark compact /><strong>KEEP<br />WHAT<br />FITS</strong><span>Repair / return / repeat</span></article>
          <article className="mend-poster is-notice"><span>MEND / 0241</span><MendMark /><strong>WORN<br />IS NOT<br />DONE</strong><small>Garment care / city poster</small></article>
          <div className="mend-tag-strip" aria-hidden="true">{Array.from({ length: 7 }, (_, index) => <span key={index}><MendMark /><b>MEND</b></span>)}</div>
        </div>
      </div>
    </section>
  );
}

function MendImpactSection() {
  const outputs = [
    ['01', 'Service promise', 'Name and positioning'],
    ['04', 'Journey stages', 'Book to return'],
    ['12', 'Interface states', 'Responsive prototype'],
    ['09', 'Brand touchpoints', 'Physical and digital'],
  ];

  return (
    <section className="mend-section mend-impact-section">
      <div className="mend-shell">
        <VisualHeading index="08 / Impact" title="My impact is one coherent system" copy="The outcome is visible in completed, reviewable artifacts rather than invented business metrics" />
        <div className="mend-impact-map">
          <div className="mend-impact-center"><MendMark /><strong>MEND</strong><span>One repair line</span></div>
          <div className="mend-impact-thread" aria-hidden="true"><i /><i /><i /><i /></div>
          {outputs.map(([number, title, proof], index) => (
            <article key={title} className={`is-${index + 1}`}>
              <span>{number}</span><div><strong>{title}</strong><small>{proof}</small></div>
              <figure aria-hidden="true"><i /><i /><i /></figure>
            </article>
          ))}
          <aside><Scissors size={21} weight="duotone" /><p><strong>What changed</strong><span>Loose service moments now read as one designed journey</span></p></aside>
        </div>
      </div>
    </section>
  );
}

function MendClose() {
  return (
    <section className="mend-close">
      <img src={mendCampaign} alt="MEND customer wearing a repaired charcoal coat in a quiet city passage after rain" loading="lazy" />
      <div className="mend-close-shade" aria-hidden="true" />
      <div className="mend-shell">
        <span>Self-initiated brand and service concept</span>
        <MendWordmark />
        <h2>Keep what fits</h2>
        <div><span>Strategy</span><span>Identity</span><span>Product</span><span>Art direction</span></div>
      </div>
    </section>
  );
}

export function MendCaseStudy({ work }) {
  return (
    <article className="case-mend">
      <MendHero work={work} />
      <MendLogoSection />
      <MendIdentitySection />
      <MendContributionSection />
      <MendJourneySection />
      <MendProductSection />
      <MendSpaceSection />
      <MendCampaignSection />
      <MendImpactSection />
      <MendClose />
    </article>
  );
}
