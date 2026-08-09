import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import './case-studies.css';

import vietravelPortfolioCover from './assets/case-studies/vietravel-portfolio-cover.webp';
import vietravelSpreadMockup from './assets/case-studies/vietravel-spread-mockup.webp';
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
import { EchoCaseStudy } from './EchoCaseStudy.jsx';

const selectedFrames = [
  { src: vietravelCover, alt: 'Fictionalized Vietravel business report presentation cover' },
  { src: vietravelContents, alt: 'Contents slide for the fictionalized Vietravel business report' },
  { src: vietravelPerformance, alt: 'Fictionalized Vietravel performance comparison slide' },
  { src: vietravelVerticals, alt: 'Fictionalized revenue-by-industry presentation slide' },
  { src: vietravelGrowth, alt: 'Fictionalized industry growth presentation slide' },
  { src: vietravelDirection, alt: 'Vietravel strategic direction presentation slide using dummy data' },
  { src: vietravelGoals, alt: 'Vietravel goals presentation slide using dummy data' },
  { src: vietravelMonthlyPlan, alt: 'Fictionalized monthly business plan presentation slide' },
  { src: vietravelRoadmap, alt: 'Twelve-month fictionalized business roadmap slide' },
  { src: vietravelProductPlan, alt: 'Fictionalized FIT product plan slide' },
  { src: vietravelSalesModel, alt: 'FIT sales model presentation slide' },
  { src: vietravelGitPlan, alt: 'Fictionalized GIT target industry presentation slide' },
  { src: vietravelGitChannels, alt: 'GIT marketing channel presentation slide' },
  { src: vietravelChannelPrinciples, alt: 'Communication channel principles presentation slide' },
  { src: vietravelContentCalendar, alt: 'Fictionalized twelve-month content calendar slide' },
];

function VtSlide({ src, alt, className = '' }) {
  return <figure className={`vt-slide ${className}`}><img src={src} alt={alt} width="1920" height="1080" loading="lazy"/></figure>;
}

function VtMarker({ number, label }) {
  return <header className="vt-marker"><span>{number}</span><strong>{label}</strong></header>;
}

function VietravelCaseStudy() {
  return <article className="vt-case">
    <section className="vt-hero">
      <div className="vt-shell">
        <Link className="vt-back" to="/#portfolio"><ArrowLeft size={16}/> Portfolio</Link>
        <header className="vt-hero-copy">
          <span>Presentation design · 54 slides · 16:9</span>
          <h1>Vietravel</h1>
          <p>Business report / 2022-2023</p>
        </header>
        <aside className="vt-confidential" aria-label="Lưu ý bảo mật">
          <strong>Dummy data</strong>
          <span>Toàn bộ số liệu được giả định nhằm mục đích bảo mật.</span>
        </aside>
        <figure className="vt-hero-visual"><img src={vietravelPortfolioCover} alt="Art-directed Vietravel presentation deck mockup for a design portfolio" width="1536" height="1024"/></figure>
      </div>
    </section>

    <section className="vt-foundations">
      <div className="vt-shell">
        <VtMarker number="01" label="Visual system"/>
        <div className="vt-foundation-grid">
          <div className="vt-type-specimen">
            <span>Typography</span>
            <strong>Montserrat</strong>
            <em>ExtraBold / 800</em>
            <b>Aa&nbsp; 01-54</b>
            <p>Segoe UI <small>Regular · Semibold · Bold</small></p>
          </div>
          <div className="vt-palette" aria-label="Vietravel presentation colour palette">
            <span style={{ '--swatch': '#0038A0' }}><b>Cobalt</b><small>#0038A0</small></span>
            <span style={{ '--swatch': '#E81828' }}><b>Signal red</b><small>#E81828</small></span>
            <span style={{ '--swatch': '#204070' }}><b>Deep blue</b><small>#204070</small></span>
            <span style={{ '--swatch': '#C0D0E0' }}><b>Mist</b><small>#C0D0E0</small></span>
            <span style={{ '--swatch': '#F4F6F8' }}><b>Paper</b><small>#F4F6F8</small></span>
          </div>
        </div>
      </div>
    </section>

    <section className="vt-opening">
      <div className="vt-shell">
        <VtMarker number="02" label="Report language"/>
        <div className="vt-opening-grid">
          <VtSlide src={vietravelContents} alt="Contents slide for the fictionalized Vietravel business report" className="is-contents"/>
          <VtSlide src={vietravelPerformance} alt="Fictionalized Vietravel performance comparison slide" className="is-performance"/>
          <VtSlide src={vietravelVerticals} alt="Fictionalized revenue-by-industry presentation slide" className="is-verticals"/>
          <VtSlide src={vietravelGrowth} alt="Fictionalized industry growth presentation slide" className="is-growth"/>
        </div>
      </div>
    </section>

    <section className="vt-mockup-band">
      <img src={vietravelSpreadMockup} alt="Three physical Vietravel presentation boards arranged as an editorial portfolio spread" width="1536" height="1024" loading="lazy"/>
    </section>

    <section className="vt-strategy">
      <div className="vt-shell">
        <VtMarker number="03" label="Direction / targets"/>
        <div className="vt-strategy-stage">
          <VtSlide src={vietravelDirection} alt="Vietravel strategic direction presentation slide using dummy data" className="is-direction"/>
          <VtSlide src={vietravelGoals} alt="Vietravel goals presentation slide using dummy data" className="is-goals"/>
          <span className="vt-stage-number">03</span>
        </div>
      </div>
    </section>

    <section className="vt-timeline">
      <div className="vt-shell">
        <VtMarker number="04" label="12-month cadence"/>
        <div className="vt-timeline-stage">
          <VtSlide src={vietravelMonthlyPlan} alt="Fictionalized monthly business plan presentation slide" className="is-monthly"/>
          <VtSlide src={vietravelRoadmap} alt="Twelve-month fictionalized business roadmap slide" className="is-roadmap"/>
          <VtSlide src={vietravelProductPlan} alt="Fictionalized FIT product plan slide" className="is-product"/>
        </div>
      </div>
    </section>

    <section className="vt-sales">
      <div className="vt-shell">
        <VtMarker number="05" label="FIT / GIT"/>
        <div className="vt-sales-wall">
          <VtSlide src={vietravelSalesModel} alt="FIT sales model presentation slide" className="is-fit"/>
          <VtSlide src={vietravelGitPlan} alt="Fictionalized GIT target industry presentation slide" className="is-git"/>
          <VtSlide src={vietravelGitChannels} alt="GIT marketing channel presentation slide" className="is-channel"/>
        </div>
      </div>
    </section>

    <section className="vt-communication">
      <div className="vt-shell">
        <VtMarker number="06" label="Communication"/>
        <div className="vt-communication-grid">
          <VtSlide src={vietravelChannelPrinciples} alt="Communication channel principles presentation slide"/>
          <VtSlide src={vietravelContentCalendar} alt="Fictionalized twelve-month content calendar slide"/>
        </div>
      </div>
    </section>

    <section className="vt-contact-sheet" aria-label="Selected presentation frames">
      <div className="vt-contact-track">{selectedFrames.map((frame, index) => <figure key={frame.src} style={{ '--frame-index': index }}><img src={frame.src} alt={frame.alt} width="1920" height="1080" loading="lazy"/></figure>)}</div>
    </section>

    <section className="vt-close">
      <div className="vt-shell">
        <span>Business report · Hải Phòng</span>
        <div><strong>54</strong><h2>slides</h2></div>
        <p>Dữ liệu giả định nhằm bảo mật · Không phản ánh kết quả kinh doanh thực tế của Vietravel.</p>
      </div>
    </section>
  </article>;
}

export function DeepCaseStudy({ work }) {
  if (work.caseKey === 'vietravel-report') return <VietravelCaseStudy/>;
  if (work.caseKey === 'echo') return <EchoCaseStudy work={work}/>;
  return null;
}
