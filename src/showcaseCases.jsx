import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CaretRight, Check, Pause, Play } from '@phosphor-icons/react';
import './showcase-cases.css';

import muonCover from './assets/case-studies/muon-cover.webp';
import muonSpace from './assets/case-studies/muon-space.webp';
import muonPrintSystem from './assets/case-studies/muon-print-system.webp';
import muonObjectApplications from './assets/case-studies/muon-object-applications.webp';
import muonDigitalDevices from './assets/case-studies/muon-digital-devices.webp';
import muonStreetApplications from './assets/case-studies/muon-street-applications.webp';
import hopLuuCover from './assets/case-studies/hop-luu-cover.webp';
import hopLuuReview from './assets/case-studies/hop-luu-review.webp';
import hopLuuProfileSpreads from './assets/case-studies/hop-luu-profile-spreads.webp';
import hopLuuProjectSheets from './assets/case-studies/hop-luu-project-sheets.webp';
import hopLuuGovernanceKit from './assets/case-studies/hop-luu-governance-kit.webp';
import hopLuuDigitalReader from './assets/case-studies/hop-luu-digital-reader.webp';
import hopLuuCapabilitySpread from './assets/case-studies/hop-luu-capability-spread-v2.webp';
import hopLuuFieldHandover from './assets/case-studies/hop-luu-field-handover-v2.webp';
import hopLuuProductionDetail from './assets/case-studies/hop-luu-production-detail-v2.webp';
import { withoutTrailingPeriod } from './text.js';

function ShowcaseEyebrow({ children }) {
  return <span className="showcase-eyebrow">{children}</span>;
}

function ShowcaseHero({ work, theme, label, summary, facts, image, imageAlt, demoLabel, disclosure }) {
  return <section className={`showcase-hero showcase-theme-${theme}`}>
    <div className="page-shell">
      <Link className="showcase-back" to="/#selected-works"><ArrowLeft size={16}/> Selected work</Link>
      <div className="showcase-heading">
        <div><ShowcaseEyebrow>{label}</ShowcaseEyebrow><h1>{withoutTrailingPeriod(work.title)}</h1></div>
        <div className="showcase-summary"><p>{summary}</p><a href="#live-demo">{demoLabel}<ArrowUpRight size={17}/></a></div>
      </div>
      <figure className="showcase-cover"><img src={image} alt={imageAlt}/></figure>
      <dl className="showcase-facts">{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      <p className="showcase-disclosure">{disclosure || <><strong>Project status:</strong> This is a self-initiated concept. The strategy, identity, applications and interactive prototype are original portfolio work. No client engagement or commercial result is implied.</>}</p>
    </div>
  </section>;
}

function ShowcaseLead({ label, title, copy }) {
  return <header className="showcase-lead">{label && <ShowcaseEyebrow>{label}</ShowcaseEyebrow>}<h2>{withoutTrailingPeriod(title)}</h2>{copy && <p>{copy}</p>}</header>;
}

const muonModes = {
  tool: { label: 'Tools', item: 'Cordless drill', code: 'T-0087', time: 'Available today', color: '#f05a49', symbol: ']' },
  kitchen: { label: 'Kitchen', item: 'Large stockpot', code: 'K-0142', time: 'Returns Friday', color: '#f05a49', symbol: '[' },
  event: { label: 'Events', item: 'Folding table', code: 'E-0029', time: '2 available', color: '#f05a49', symbol: '][' },
};

function MuonComposer() {
  const [mode, setMode] = useState('tool');
  const [format, setFormat] = useState('poster');
  const [playing, setPlaying] = useState(true);
  const item = muonModes[mode];
  return <div className={`muon-composer muon-format-${format} ${playing ? 'is-playing' : 'is-paused'}`} aria-label="Interactive MƯỢN identity composer">
    <div className="muon-controls">
      <div><span>Object family</span><div role="group" aria-label="Object family">{Object.entries(muonModes).map(([key, value]) => <button type="button" key={key} aria-pressed={mode === key} onClick={() => setMode(key)}>{value.label}</button>)}</div></div>
      <div><span>Format</span><div role="group" aria-label="Format">{['poster','tag','pass'].map((value) => <button type="button" key={value} aria-pressed={format === value} onClick={() => setFormat(value)}>{value[0].toUpperCase() + value.slice(1)}</button>)}</div></div>
      <button className="muon-motion-toggle" type="button" aria-pressed={playing} onClick={() => setPlaying((value) => !value)}>{playing ? <Pause size={15}/> : <Play size={15}/>} {playing ? 'Pause motion' : 'Preview motion'}</button>
    </div>
    <div className="muon-output" aria-live="polite">
      <div className="muon-output-mark" aria-hidden="true"><i>[</i><i>]</i></div>
      <span className="muon-output-brand">MƯỢN</span>
      <div className="muon-output-copy"><small>{item.code}</small><h3>{withoutTrailingPeriod(item.item)}</h3><p>{item.time}</p></div>
      <div className="muon-output-action"><span>Borrow nearby</span><CaretRight size={18}/></div>
      <strong className="muon-output-symbol" aria-hidden="true">{item.symbol}</strong>
    </div>
  </div>;
}

function MuonMarkStudy() {
  return <div className="muon-mark-study" role="img" aria-label="Animated MƯỢN open bracket identity moving from storage to exchange">
    <div className="muon-mark-grid" aria-hidden="true">{Array.from({length:12},(_,i) => <i key={i}/>)}</div>
    <div className="muon-safe-zone" aria-hidden="true"><span>x</span><span>x</span><span>x</span><span>x</span></div>
    <div className="muon-mark-sequence" aria-hidden="true"><span>[</span><span className="muon-object">●</span><span>]</span></div>
    <div className="muon-mark-caption"><span>Clear space 1x</span><span>Minimum 18 mm</span></div>
  </div>;
}

function MuonMotionStudy() {
  return <div className="muon-motion-study" role="img" aria-label="MƯỢN motion sequence showing an object stored, passed and returned">
    <div className="muon-motion-track" aria-hidden="true">
      <div className="muon-motion-frame"><span>[</span><i>●</i><span>]</span><small>Store</small></div>
      <div className="muon-motion-frame"><span>[</span><i>●</i><span>]</span><small>Pass</small></div>
      <div className="muon-motion-frame"><span>[</span><i>●</i><span>]</span><small>Return</small></div>
    </div>
  </div>;
}

function MuonCaseStudy({ work }) {
  const facts = [
    { label: 'Project frame', value: '5-week identity sprint' },
    { label: 'Role', value: 'Strategy · Naming · Identity · Motion' },
    { label: 'Scope', value: 'Brand system · Space · Digital' },
    { label: 'Prototype', value: 'Identity composer · Borrowing flow' },
  ];
  return <article className="showcase-case case-muon">
    <ShowcaseHero work={work} theme="muon" label="Brand identity · Community service · 2026" summary="A neighborhood borrowing identity built to move from object to object." facts={facts} image={muonCover} imageAlt="MƯỢN identity system applied to a tote, member card, object tags, booklet and mobile borrowing interface" demoLabel="Try the identity system"/>

    <section className="showcase-section muon-foundations-section"><div className="page-shell">
      <ShowcaseLead title="A system for things that keep moving." copy="The open bracket holds each object long enough to name it, lend it and pass it on."/>
      <div className="muon-foundations">
        <MuonMarkStudy/>
        <div className="muon-foundation-specs">
          <div className="muon-wordmark-spec"><small>Primary wordmark</small><strong>MƯỢN</strong><span>Manrope Variable · 760</span></div>
          <div className="muon-type-spec"><small>Vietnamese type specimen</small><strong>Mượn để dùng.<br/>Trả để tiếp tục.</strong><span>Display 56/52 · Body 16/25</span></div>
          <dl className="muon-color-system">
            <div><dt>Infrastructure</dt><dd>#142536</dd></div>
            <div><dt>Action</dt><dd>#EF5848</dd></div>
            <div><dt>Field</dt><dd>#DCE2E6</dd></div>
            <div><dt>Information</dt><dd>#F4F6F6</dd></div>
          </dl>
        </div>
      </div>
    </div></section>

    <section className="showcase-section muon-applications"><div className="page-shell">
      <ShowcaseLead title="The identity earns trust on contact." copy="Paper, tags and working objects carry the same bracket, item code and return logic."/>
      <div className="muon-application-gallery">
        <figure><img src={muonPrintSystem} alt="MƯỢN poster series, program sheet, member cards, labels and inventory tags" width="1536" height="1024" loading="lazy"/><figcaption><strong>Print system</strong><span>Uncoated stock · coated tags · woven strap</span></figcaption></figure>
        <figure><img src={muonObjectApplications} alt="MƯỢN identity applied to a drill case, projector crate, stockpot, table strap and staff apron" width="1536" height="1024" loading="lazy"/><figcaption><strong>Object system</strong><span>Item code · condition · checkout label</span></figcaption></figure>
      </div>
    </div></section>

    <section id="live-demo" className="showcase-section muon-demo-section"><div className="page-shell">
      <ShowcaseLead label="Live identity composer" title="Change the object. Keep the rule." copy="Switch the family and format to test one identity across many shared things."/>
      <MuonComposer/>
    </div></section>

    <section className="showcase-section muon-environment"><div className="page-shell">
      <ShowcaseLead title="A neighborhood service, not a showroom." copy="The system moves from facade to locker to handoff without changing its visual grammar."/>
      <div className="muon-environment-gallery">
        <figure><img src={muonSpace} alt="MƯỢN community lending lockers, kiosk, signage and reusable bags in a neighborhood pickup space" width="1536" height="1024" loading="lazy"/><figcaption>Locker hub · Bình Thạnh</figcaption></figure>
        <figure><img src={muonStreetApplications} alt="MƯỢN street facade, blade sign, pickup window, wayfinding, return tote and staff apron" width="1536" height="1024" loading="lazy"/><figcaption>Street pickup · Ho Chi Minh City</figcaption></figure>
      </div>
    </div></section>

    <section className="showcase-section muon-digital"><div className="page-shell">
      <ShowcaseLead title="Availability before brand theatre." copy="Search, condition, pickup and return timing stay visible across every screen."/>
      <figure className="muon-digital-figure"><img src={muonDigitalDevices} alt="MƯỢN laptop search interface, tablet locker pickup flow and mobile membership pass" width="1536" height="1024" loading="lazy"/><figcaption><span>Responsive service UI</span><strong>Search · reserve · collect · return</strong></figcaption></figure>
    </div></section>

    <section className="showcase-section muon-motion"><div className="page-shell">
      <ShowcaseLead title="Store. Pass. Return." copy="Motion turns the bracket into a handoff, not a decorative flourish."/>
      <MuonMotionStudy/>
      <p className="muon-closing-note"><strong>Prototype boundary:</strong> print, responsive and reduced-motion states were checked. Service outcomes require a live borrowing network.</p>
    </div></section>
  </article>;
}

const readerPaths = {
  company: {
    label: 'Company profile',
    vi: { title: 'Hồ sơ doanh nghiệp', summary: 'Tổng quan pháp lý, phạm vi thị trường, cơ cấu đầu mối và nguyên tắc quản lý hồ sơ.', facts: [['Phạm vi','Nước cấp, nước thải, tái sử dụng'],['Vai trò','Tư vấn đến chạy thử'],['Thị trường','Nhà máy công nghiệp tại Việt Nam']], records: ['Thông tin doanh nghiệp và đầu mối liên hệ','Sơ đồ tổ chức theo trách nhiệm','Ngành phục vụ và phạm vi địa lý'] },
    en: { title: 'Company profile', summary: 'Legal overview, market scope, accountable contacts and document-control principles.', facts: [['Scope','Water, wastewater and reuse'],['Role','Consulting through commissioning'],['Market','Industrial facilities in Vietnam']], records: ['Company information and accountable contacts','Responsibility-led organization chart','Sector and geographic coverage'] },
  },
  capability: {
    label: 'Technical capability',
    vi: { title: 'Năng lực kỹ thuật', summary: 'Mỗi năng lực gắn với một bộ đầu ra có thể kiểm tra và người chịu trách nhiệm.', facts: [['Công nghệ','Khảo sát, cân bằng dòng, thiết kế cơ sở'],['Tích hợp','Cơ khí, điện và điều khiển'],['Bàn giao','FAT, SAT, đào tạo vận hành']], records: ['Cơ sở thiết kế, PFD và cân bằng vật chất','P&ID, danh mục thiết bị và triết lý điều khiển','Hồ sơ chạy thử, hướng dẫn và as-built'] },
    en: { title: 'Technical capability', summary: 'Each capability connects to a reviewable deliverable set and a named owner.', facts: [['Process','Audit, mass balance and design basis'],['Integration','Mechanical, electrical and controls'],['Handover','FAT, SAT and operator training']], records: ['Design basis, PFD and mass balance','P&ID, equipment schedule and control narrative','Commissioning records, manuals and as-built set'] },
  },
  projects: {
    label: 'Project evidence',
    vi: { title: 'Hồ sơ dự án', summary: 'Project sheet tách rõ bối cảnh, công suất, phạm vi HỢP LƯU và bằng chứng bàn giao.', facts: [['Bối cảnh','Điều kiện vận hành thực tế'],['Trách nhiệm','Ranh giới theo discipline'],['Bằng chứng','Bản vẽ, biên bản, nhật ký']], records: ['Mục tiêu và dữ liệu đầu vào','Phạm vi cung cấp và giao diện','Mốc nghiệm thu và tài liệu tham chiếu'] },
    en: { title: 'Project evidence', summary: 'Each project sheet separates context, capacity, responsibility and handover evidence.', facts: [['Context','Real operating conditions'],['Responsibility','Discipline boundaries'],['Evidence','Drawings, records and logs']], records: ['Objective and design inputs','Supply scope and interfaces','Acceptance milestones and references'] },
  },
  assurance: {
    label: 'QA, HSE and control',
    vi: { title: 'Bảo đảm thực hiện', summary: 'Chất lượng, an toàn và kiểm soát tài liệu được trình bày như một phần của năng lực.', facts: [['QA-QC','ITP, inspection và NCR'],['HSE','JSA, permit và toolbox talk'],['Tài liệu','Revision, transmittal và register']], records: ['Kế hoạch kiểm tra và nghiệm thu','Ma trận rủi ro và trách nhiệm an toàn','Quy tắc mã hóa, phát hành và lưu trữ'] },
    en: { title: 'Delivery assurance', summary: 'Quality, safety and document control are presented as operating capability.', facts: [['QA-QC','ITP, inspection and NCR'],['HSE','JSA, permits and toolbox talks'],['Documents','Revision, transmittal and register']], records: ['Inspection and acceptance plan','Risk matrix and safety responsibilities','Coding, issue and retention rules'] },
  },
};

const profileChapters = [
  ['01','Tổng quan doanh nghiệp','Company overview'],['02','Năng lực kỹ thuật','Technical capabilities'],['03','Ngành và ứng dụng','Sectors and applications'],['04','Quản lý thực hiện','Delivery management'],
  ['05','Dự án tiêu biểu','Representative projects'],['06','QA-QC và HSE','Quality and safety'],['07','Đối tác và chuỗi cung ứng','Partners and supply chain'],['08','Hồ sơ pháp lý','Legal and contact'],
];

const capabilityRows = [
  { code:'A', title:'Process', output:'Design basis / PFD / hydraulic profile' },
  { code:'B', title:'Mechanical', output:'P&ID / equipment list / I-O schedule' },
  { code:'C', title:'Supply', output:'Datasheets / FAT / material records' },
  { code:'D', title:'Commissioning', output:'SAT / manuals / as-built' },
];

const sectors = ['Food and beverage','Electronics','Textile and dyeing','Industrial parks','Water reuse','Utilities'];

const projectRecords = [
  { code:'HL-24-07', title:'Beverage rinse-water recovery', location:'Long An', year:'2024', capacity:'480 m³/day' },
  { code:'HL-23-11', title:'Electronics wastewater polishing', location:'Bắc Ninh', year:'2023', capacity:'315 m³/day' },
  { code:'HL-22-04', title:'Textile equalization upgrade', location:'Bình Dương', year:'2022', capacity:'620 m³/day' },
];

const assuranceAreas = [
  { title:'QA-QC', copy:'ITP / hold points / NCR' },
  { title:'HSE', copy:'JSA / permits / toolbox' },
  { title:'Document control', copy:'Revision / transmittal / register' },
];

function HopLuuReader() {
  const [path, setPath] = useState('company');
  const [language, setLanguage] = useState('vi');
  const [layer, setLayer] = useState('system');
  const content = readerPaths[path];
  return <div className="hop-reader" aria-label="Interactive HỢP LƯU capability profile reader">
    <header><strong>HỢP LƯU</strong><div role="group" aria-label="Document language"><button type="button" aria-pressed={language === 'vi'} onClick={() => setLanguage('vi')}>VI</button><button type="button" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button></div></header>
    <div className="hop-reader-layout">
      <nav aria-label="Reader purpose">{Object.entries(readerPaths).map(([key,value]) => <button type="button" key={key} aria-current={path === key ? 'page' : undefined} onClick={() => setPath(key)}><span>{value.label}</span><CaretRight/></button>)}</nav>
      <section className="hop-reader-page" aria-live="polite">
        <div className="hop-page-heading"><small>{language === 'vi' ? 'HỒ SƠ NĂNG LỰC' : 'CAPABILITY PROFILE'}</small><h3>{withoutTrailingPeriod(content[language].title)}</h3><p>{content[language].summary}</p></div>
        <dl className="hop-reader-facts">{content[language].facts.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <div className="hop-layer-switch" role="group" aria-label="Process diagram layer">{['system','delivery','evidence'].map((value) => <button type="button" key={value} aria-pressed={layer === value} onClick={() => setLayer(value)}>{value[0].toUpperCase()+value.slice(1)}</button>)}</div>
        <div className={`hop-process hop-process-${layer}`} role="img" aria-label={`Process diagram showing ${layer} layer`}>
          {['Audit','Sample','Design','Integrate','Commission','Return'].map((step,index) => <React.Fragment key={step}><span><i>{index+1}</i>{step}</span>{index < 5 && <b/>}</React.Fragment>)}
        </div>
        <ol>{content[language].records.map((item,index) => <li key={item}><span>0{index+1}</span>{item}</li>)}</ol>
      </section>
    </div>
  </div>;
}

function HopLuuCaseStudy({ work }) {
  const facts = [
    { label: 'Role', value: 'Editorial direction and information design' },
    { label: 'Format', value: '96 pages / VI-EN' },
    { label: 'System', value: 'Print / project sheets / reader' },
  ];
  return <article className="showcase-case case-hop-luu">
    <ShowcaseHero work={work} theme="hop" label="Corporate profile · Industrial engineering, 2026" summary="Bilingual corporate profile for industrial water engineering" facts={facts} image={hopLuuCover} imageAlt="HỢP LƯU corporate profile, technical project sheets and digital reader arranged at an industrial water facility" demoLabel="Open reader" disclosure={<><strong>Self-initiated concept</strong> / no client engagement implied</>}/>

    <section className="showcase-section hop-overview"><div className="page-shell">
      <h2 className="hop-section-title">Company profile</h2>
      <div className="hop-company-snapshot">
        <div className="hop-company-intro"><span>HỢP LƯU</span><h3>Industrial water systems</h3><p>Process design, equipment integration, commissioning and handover</p><dl><div><dt>Market</dt><dd>Industrial facilities</dd></div><div><dt>Delivery</dt><dd>Design to commissioning</dd></div><div><dt>Languages</dt><dd>Vietnamese / English</dd></div></dl></div>
        <ol className="hop-profile-index">{profileChapters.map(([number,vi,en]) => <li key={number}><span>{number}</span><strong>{vi}</strong><small>{en}</small></li>)}</ol>
      </div>
      <figure className="hop-visual-figure hop-overview-figure"><img src={hopLuuProfileSpreads} alt="HỢP LƯU profile cover, contents, company overview, capability matrix, scope and delivery-process spreads" width="1536" height="1024" loading="lazy"/></figure>
    </div></section>

    <section className="showcase-section hop-capabilities"><div className="page-shell">
      <h2 className="hop-section-title">Technical capability</h2>
      <figure className="hop-visual-figure"><img src={hopLuuCapabilitySpread} alt="Open HỢP LƯU profile showing the technical capability matrix and engineering scope spread" width="1536" height="1024" loading="lazy"/></figure>
      <div className="hop-capability-strip">{capabilityRows.map((item) => <article key={item.code}><b>{item.code}</b><h3>{withoutTrailingPeriod(item.title)}</h3><p>{item.output}</p></article>)}</div>
      <div className="hop-sector-band"><span>Sector coverage</span>{sectors.map((sector) => <strong key={sector}>{sector}</strong>)}</div>
    </div></section>

    <section id="live-demo" className="showcase-section hop-demo-section"><div className="page-shell">
      <h2 className="hop-section-title">Digital reader</h2>
      <HopLuuReader/>
      <figure className="hop-visual-figure hop-reader-device"><img src={hopLuuDigitalReader} alt="HỢP LƯU responsive profile reader on laptop, tablet and phone" width="1536" height="1024" loading="lazy"/></figure>
    </div></section>

    <section className="showcase-section hop-projects"><div className="page-shell">
      <h2 className="hop-section-title">Project sheets</h2>
      <div className="hop-project-gallery"><figure className="hop-visual-figure"><img src={hopLuuProjectSheets} alt="HỢP LƯU project sheets with process diagrams, scope matrices and commissioning evidence" width="1536" height="1024" loading="lazy"/></figure><figure className="hop-visual-figure"><img src={hopLuuFieldHandover} alt="Engineers using the HỢP LƯU profile, project binder and tablet during a site handover review" width="1536" height="1024" loading="lazy"/></figure></div>
      <div className="hop-project-index">{projectRecords.map((project) => <article key={project.code}><span>{project.code}</span><h3>{withoutTrailingPeriod(project.title)}</h3><dl><div><dt>Location</dt><dd>{project.location}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Capacity</dt><dd>{project.capacity}</dd></div></dl></article>)}</div>
    </div></section>

    <section className="showcase-section hop-assurance"><div className="page-shell">
      <h2 className="hop-section-title">QA-QC and HSE</h2>
      <div className="hop-assurance-layout"><div className="hop-assurance-list">{assuranceAreas.map((area) => <article key={area.title}><Check size={19}/><div><h3>{withoutTrailingPeriod(area.title)}</h3><p>{area.copy}</p></div></article>)}</div><div className="hop-responsibility-map"><span>Project director</span><i/><span>Project manager</span><div><strong>Process</strong><strong>Mechanical</strong><strong>Electrical</strong><strong>Commissioning</strong></div><i/><span>Document control</span></div></div>
      <figure className="hop-visual-figure hop-governance-figure"><img src={hopLuuGovernanceKit} alt="HỢP LƯU governance kit with QA-QC checklist, HSE plan, document register and approved drawing" width="1536" height="1024" loading="lazy"/></figure>
    </div></section>

    <section className="showcase-section hop-delivery"><div className="page-shell">
      <h2 className="hop-section-title">Production files</h2>
      <div className="hop-production-gallery"><figure className="hop-visual-figure"><img src={hopLuuProductionDetail} alt="HỢP LƯU hardbound profile, chapter tabs, paper stock and binding detail" width="1536" height="1024" loading="lazy"/></figure><figure className="hop-visual-figure"><img src={hopLuuReview} alt="Engineers reviewing the HỢP LƯU profile and digital reference in a plant control room" width="1536" height="1024" loading="lazy"/></figure></div>
      <dl className="hop-production-manifest"><div><dt>Print master</dt><dd>A4 / 96 pages / CMYK</dd></div><div><dt>Accessible PDF</dt><dd>Tagged / bookmarked / selectable</dd></div><div><dt>Project sheets</dt><dd>A3 / A4 / editable templates</dd></div><div><dt>Content register</dt><dd>Owner / revision / approval</dd></div></dl>
    </div></section>
  </article>;
}

export function ShowcaseCaseStudy({ work }) {
  if (work.slug === 'folded-matter') return <MuonCaseStudy work={work}/>;
  if (work.slug === 'still-moving') return <HopLuuCaseStudy work={work}/>;
  return null;
}
