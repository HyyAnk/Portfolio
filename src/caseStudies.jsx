import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import './case-studies.css';

import vietravelCover from './assets/case-studies/vietravel-page-01.webp';
import vietravelContents from './assets/case-studies/vietravel-page-02.webp';
import vietravelPerformance from './assets/case-studies/vietravel-page-07.webp';
import vietravelVerticals from './assets/case-studies/vietravel-page-10.webp';
import vietravelGrowth from './assets/case-studies/vietravel-page-11.webp';
import vietravelDirection from './assets/case-studies/vietravel-page-18.webp';
import vietravelGoals from './assets/case-studies/vietravel-page-19.webp';
import vietravelMonthlyPlan from './assets/case-studies/vietravel-page-22.webp';
import vietravelRoadmap from './assets/case-studies/vietravel-page-24.webp';
import vietravelProductPlan from './assets/case-studies/vietravel-page-28.webp';
import vietravelSalesModel from './assets/case-studies/vietravel-page-32.webp';
import vietravelGitPlan from './assets/case-studies/vietravel-page-37.webp';
import vietravelGitChannels from './assets/case-studies/vietravel-page-41.webp';
import vietravelChannelPrinciples from './assets/case-studies/vietravel-page-49.webp';
import vietravelContentCalendar from './assets/case-studies/vietravel-page-53.webp';
import { withoutTrailingPeriod } from './text.js';
import { AttestCaseStudy } from './AttestCaseStudy.jsx';

function ProductHero({ work, variant, label, summary, facts, image, imageAlt, action, actionHref = '#story-system', notice, disclosure }) {
  return <section className={`product-hero product-hero-${variant}`}>
    <div className="product-shell">
      <Link className="product-back" to="/#portfolio"><ArrowLeft size={16}/> Portfolio</Link>
      <header className="product-heading">
        <span>{label}</span>
        <h1>{withoutTrailingPeriod(work.title)}</h1>
        <p>{summary}</p>
        <a href={actionHref}>{action}<ArrowUpRight size={17}/></a>
      </header>
      {notice && <aside className="product-data-notice" aria-label={notice.title}>
        <strong>{notice.title}</strong>
        <p>{notice.copy}</p>
      </aside>}
      <figure className="product-cover"><img src={image} alt={imageAlt}/></figure>
      <div className="product-meta">
        <dl>{facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
        <p>{disclosure}</p>
      </div>
    </div>
  </section>;
}

function FlowHeading({ eyebrow, title, copy }) {
  return <header className="product-section-heading">{eyebrow && <span>{eyebrow}</span>}<h2>{withoutTrailingPeriod(title)}</h2>{copy && <p>{copy}</p>}</header>;
}

function ProductVisual({ src, alt, caption, className = '' }) {
  return <figure className={`product-visual ${className}`}><img src={src} alt={alt} width="1920" height="1080" loading="lazy"/>{caption && <figcaption>{caption}</figcaption>}</figure>;
}

const storySteps = [
  ['01', 'Review', 'What changed, and where did performance concentrate?'],
  ['02', 'Interpret', 'Which routes, customer groups and conditions matter next?'],
  ['03', 'Decide', 'What does profitable, controlled growth mean for the branch?'],
  ['04', 'Activate', 'Who does what, through which channel, and in which month?'],
];

function VietravelCaseStudy({ work }) {
  const facts = [
    ['Role', 'Information design, art direction'],
    ['Format', '16:9 business presentation'],
    ['Scope', '54 slides, 8 chapters'],
    ['Data policy', 'Fictionalized for confidentiality'],
  ];

  return <article className="product-case case-vietravel">
    <ProductHero
      work={work}
      variant="vietravel"
      label="Business report / presentation / dummy data"
      summary="A dense annual review becomes a decision-ready story: evidence first, direction second, action last"
      facts={facts}
      image={vietravelCover}
      imageAlt="Vietravel Hải Phòng business report cover for a fictionalized 2022 review and 2023 action plan"
      action="See the story system"
      notice={{
        title: 'Lưu ý bảo mật · Dữ liệu giả định',
        copy: 'Toàn bộ số liệu, KPI, mục tiêu và chi tiết vận hành trong bài thuyết trình được giả định nhằm mục đích bảo mật. Nội dung không phản ánh kết quả kinh doanh thực tế của Vietravel.',
      }}
      disclosure="Independent presentation-design case study. Vietravel is referenced only as the subject of the supplied dummy-data brief; no confidential company data is presented."
    />

    <section id="story-system" className="product-section vietravel-story"><div className="product-shell">
      <div className="vietravel-story-grid">
        <div>
          <FlowHeading eyebrow="Narrative architecture" title="From report inventory to decision sequence" copy="The deck moves from operating context to performance, interpretation, direction and a month-by-month plan. Each chapter answers one management question before the next begins."/>
          <ol className="vietravel-story-index">{storySteps.map(([index, title, copy]) => <li key={index}><span>{index}</span><div><strong>{title}</strong><p>{copy}</p></div></li>)}</ol>
        </div>
        <ProductVisual src={vietravelContents} alt="Eight-part contents slide organizing the fictionalized Vietravel business report" caption="Eight chapters · one controlled narrative"/>
      </div>
    </div></section>

    <section className="product-section vietravel-evidence"><div className="product-shell">
      <FlowHeading eyebrow="01 / Review" title="Make the business question visible before the chart" copy="The performance chapter pairs a compact scorecard with a comparison view and a short interpretation, so the audience knows what to read and why it matters."/>
      <ProductVisual src={vietravelPerformance} alt="Fictionalized Vietravel performance comparison slide with customer, revenue and gross-profit measures" caption="Dummy-data performance snapshot · not actual Vietravel results"/>
      <aside className="vietravel-inline-disclaimer"><strong>Dummy data, clearly marked</strong><p>Every commercial figure shown in this case is illustrative. It exists to demonstrate information hierarchy and presentation design while protecting operational confidentiality.</p></aside>
    </div></section>

    <section className="product-section vietravel-analysis"><div className="product-shell">
      <FlowHeading eyebrow="02 / Interpret" title="Keep dense tables comparable" copy="A shared header, fixed table logic and restrained colour coding let the audience compare category contribution with year-on-year movement without relearning the page."/>
      <div className="product-pair vietravel-data-pair">
        <ProductVisual src={vietravelVerticals} alt="Fictionalized revenue-by-industry slide with table and contribution chart" caption="Contribution by industry · dummy data"/>
        <ProductVisual src={vietravelGrowth} alt="Fictionalized industry growth slide with aligned table and bar chart" caption="Growth by industry · dummy data"/>
      </div>
    </div></section>

    <section className="product-section vietravel-strategy"><div className="product-shell">
      <FlowHeading eyebrow="03 / Decide" title="Turn analysis into an operating stance" copy="The strategic transition reduces the visual density, gives the core principle room to land, then reconnects it to measurable goals and guardrails."/>
      <div className="vietravel-strategy-grid">
        <ProductVisual src={vietravelDirection} alt="Vietravel strategic direction slide focused on stable, efficient and sustainable fictionalized growth" caption="Strategic stance"/>
        <ProductVisual src={vietravelGoals} alt="Vietravel goals slide organizing fictionalized commercial, financial and team objectives" caption="Goals and guardrails · dummy data"/>
      </div>
    </div></section>

    <section className="product-section vietravel-cadence"><div className="product-shell">
      <FlowHeading eyebrow="04 / Activate" title="Connect the annual target to a working calendar" copy="Monthly seasonality and the quarterly roadmap share one left-to-right reading direction. Targets become moments for selling, review, training and financial control."/>
      <ProductVisual src={vietravelMonthlyPlan} alt="Fictionalized monthly customer, revenue and gross-profit plan for the Vietravel presentation" caption="Monthly phasing · dummy data"/>
      <ProductVisual src={vietravelRoadmap} alt="Twelve-month quarterly action roadmap for the fictionalized Vietravel business plan" caption="Quarterly operating cadence" className="vietravel-roadmap-visual"/>
    </div></section>

    <section className="product-section vietravel-streams"><div className="product-shell">
      <FlowHeading eyebrow="FIT + GIT" title="Give each revenue stream its own logic" copy="FIT is framed around product seasonality and sales models; GIT is framed around industry concentration, account value and direct relationship channels."/>
      <div className="vietravel-stream-grid">
        <article><header><span>FIT</span><h3>Product-led selling</h3><p>Package the offer by trip type, season and buying behaviour.</p></header><ProductVisual src={vietravelProductPlan} alt="Fictionalized Vietravel FIT departure product plan" caption="Product architecture"/><ProductVisual src={vietravelSalesModel} alt="Three fictionalized FIT sales models for mass, seasonal and premium travel" caption="Sales model"/></article>
        <article><header><span>GIT</span><h3>Account-led growth</h3><p>Prioritize sectors, protect margin and build trust through direct channels.</p></header><ProductVisual src={vietravelGitPlan} alt="Fictionalized Vietravel GIT target industries and revenue plan" caption="Priority account groups · dummy data"/><ProductVisual src={vietravelGitChannels} alt="Direct and supporting channels for the fictionalized Vietravel GIT plan" caption="Channel architecture"/></article>
      </div>
    </div></section>

    <section className="product-section vietravel-channels"><div className="product-shell">
      <FlowHeading eyebrow="Communication system" title="Make marketing accountable to the plan" copy="Channel principles define the role of online and offline activity; the 12-month calendar then ties each message to a season, audience and selling moment."/>
      <ProductVisual src={vietravelChannelPrinciples} alt="Vietravel communication channel principles based on fictionalized planning inputs" caption="Channel principles"/>
      <ProductVisual src={vietravelContentCalendar} alt="Twelve-month fictionalized communication calendar for Vietravel Hải Phòng" caption="Content calendar · dummy planning data" className="vietravel-calendar-visual"/>
    </div></section>

    <section className="vietravel-close"><div className="product-shell">
      <div className="vietravel-close-heading"><span>Outcome</span><strong>54</strong><h2>slides shaped as one management conversation</h2></div>
      <dl><div><dt>Structure</dt><dd>8 chapters from evidence to action</dd></div><div><dt>Business streams</dt><dd>FIT and GIT with distinct selling logic</dd></div><div><dt>Cadence</dt><dd>12 months connected to quarterly priorities</dd></div></dl>
      <aside><strong>Lưu ý bảo mật</strong><p>Toàn bộ dữ liệu trong case study là dữ liệu giả định nhằm bảo mật và chỉ dùng để minh họa năng lực thiết kế thuyết trình. Không sử dụng các con số này như thông tin kinh doanh chính thức của Vietravel.</p></aside>
    </div></section>
  </article>;
}

export function DeepCaseStudy({ work }) {
  if (work.caseKey === 'vietravel-report') return <VietravelCaseStudy work={work}/>;
  if (work.caseKey === 'attest') return <AttestCaseStudy work={work}/>;
  return null;
}
