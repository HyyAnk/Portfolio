import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CaretRight, Check, Pause, Play } from '@phosphor-icons/react';

import muonCover from './assets/case-studies/muon-cover.webp';
import muonSpace from './assets/case-studies/muon-space.webp';
import hopLuuCover from './assets/case-studies/hop-luu-cover.webp';
import hopLuuReview from './assets/case-studies/hop-luu-review.webp';

function ShowcaseEyebrow({ children }) {
  return <span className="showcase-eyebrow">{children}</span>;
}

function ShowcaseHero({ work, theme, label, summary, facts, image, imageAlt, demoLabel }) {
  return <section className={`showcase-hero showcase-theme-${theme}`}>
    <div className="page-shell">
      <Link className="showcase-back" to="/#selected-works"><ArrowLeft size={16}/> Selected work</Link>
      <div className="showcase-heading">
        <div><ShowcaseEyebrow>{label}</ShowcaseEyebrow><h1>{work.title}</h1></div>
        <div className="showcase-summary"><p>{summary}</p><a href="#live-demo">{demoLabel}<ArrowUpRight size={17}/></a></div>
      </div>
      <figure className="showcase-cover"><img src={image} alt={imageAlt}/></figure>
      <dl className="showcase-facts">{facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      <p className="showcase-disclosure"><strong>Project status:</strong> This is a self-initiated concept. The strategy, identity, applications and interactive prototype are original portfolio work. No client engagement or commercial result is implied.</p>
    </div>
  </section>;
}

function ShowcaseLead({ label, title, copy }) {
  return <header className="showcase-lead"><ShowcaseEyebrow>{label}</ShowcaseEyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
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
      <div className="muon-output-copy"><small>{item.code}</small><h3>{item.item}</h3><p>{item.time}</p></div>
      <div className="muon-output-action"><span>Borrow nearby</span><CaretRight size={18}/></div>
      <strong className="muon-output-symbol" aria-hidden="true">{item.symbol}</strong>
    </div>
  </div>;
}

function MuonMarkStudy() {
  return <div className="muon-mark-study" role="img" aria-label="Animated MƯỢN open bracket identity moving from storage to exchange">
    <div className="muon-mark-grid" aria-hidden="true">{Array.from({length:12},(_,i) => <i key={i}/>)}</div>
    <div className="muon-mark-sequence" aria-hidden="true"><span>[</span><span className="muon-object">●</span><span>]</span></div>
    <div className="muon-mark-caption"><span>Store</span><span>Pass</span><span>Return</span></div>
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
    <ShowcaseHero work={work} theme="muon" label="Brand identity · Community service · 2026" summary="A sharing identity that makes borrowing useful objects feel ordinary, local and worth repeating." facts={facts} image={muonCover} imageAlt="MƯỢN identity system applied to a tote, member card, object tags, booklet and mobile borrowing interface" demoLabel="Build an identity signal"/>

    <section className="showcase-section muon-brief"><div className="page-shell">
      <ShowcaseLead label="The brief" title="Useful things should spend less time sitting still." copy="MƯỢN is a proposed neighborhood network for borrowing tools, kitchen equipment and event supplies. The identity must make shared ownership feel dependable rather than improvised."/>
      <div className="muon-tension-grid">
        <article><strong>Accessible</strong><span>not disposable</span></article><article><strong>Practical</strong><span>not institutional</span></article><article><strong>Local</strong><span>not nostalgic</span></article><article><strong>Shared</strong><span>not anonymous</span></article>
      </div>
    </div></section>

    <section className="showcase-section muon-strategy"><div className="page-shell">
      <ShowcaseLead label="Strategy" title="Borrowing should feel normal, not charitable." copy="The system removes the social friction around asking. Every touchpoint answers three questions quickly: what is it, where is it and when does it return?"/>
      <div className="muon-principles"><article><span>Recognition</span><h3>One bracket holds the system.</h3><p>The open mark frames objects without pretending to own them.</p></article><article><span>Clarity</span><h3>Object language stays concrete.</h3><p>Names, condition and availability lead before any brand message.</p></article><article><span>Movement</span><h3>The object always travels forward.</h3><p>Motion shows storage, handoff and return as one continuous loop.</p></article></div>
    </div></section>

    <section className="showcase-section muon-identity"><div className="page-shell">
      <ShowcaseLead label="Identity system" title="An open bracket becomes a place for exchange." copy="The mark expands, narrows and hands objects across formats. Coral identifies the active action; smoke blue carries the durable infrastructure around it."/>
      <div className="muon-identity-layout"><MuonMarkStudy/><div className="muon-type-panel"><div><small>Display</small><strong>MƯỢN</strong><p>Manrope Variable · 760</p></div><div className="muon-palette"><i/><i/><i/><i/></div><p>Vietnamese diacritics remain part of the primary wordmark at every supported size.</p></div></div>
    </div></section>

    <section id="live-demo" className="showcase-section muon-demo-section"><div className="page-shell">
      <ShowcaseLead label="Live identity composer" title="Change the object. Keep the rule." copy="Switch the inventory family and format. The mark, hierarchy and motion adapt without turning every application into a new identity."/>
      <MuonComposer/>
    </div></section>

    <section className="showcase-section muon-space"><div className="page-shell">
      <ShowcaseLead label="Space and service" title="A brand people can use without instruction." copy="The bracket shifts from symbol to navigation device across lockers, pickup screens, bags and object labels."/>
      <figure className="showcase-wide-image"><img src={muonSpace} alt="MƯỢN community lending lockers, kiosk, signage and reusable bags in a neighborhood pickup space" loading="lazy"/></figure>
      <div className="muon-service-strip"><span>Choose an object</span><CaretRight/><span>Scan membership</span><CaretRight/><span>Collect locally</span><CaretRight/><span>Return visibly</span></div>
    </div></section>

    <section className="showcase-section muon-digital"><div className="page-shell">
      <ShowcaseLead label="Digital behavior" title="The interface follows the same borrowing grammar." copy="Availability, condition and return timing stay visible before a request is sent. The brand signal only appears where an action changes state."/>
      <div className="muon-device-stage">
        <div className="muon-web-preview"><header><strong>MƯỢN</strong><span>Objects near you</span></header><div className="muon-web-grid"><article><b>Drill</b><small>Available today</small></article><article><b>Stockpot</b><small>Returns Friday</small></article><article><b>Projector</b><small>2 available</small></article></div></div>
        <div className="muon-phone-preview"><span className="muon-phone-notch"/><small>T-0087</small><h3>Cordless drill</h3><p>Available at Bình Thạnh locker</p><div><span>Condition</span><strong>Ready</strong></div><button type="button">Request to borrow</button></div>
      </div>
    </div></section>

    <section className="showcase-section muon-validation"><div className="page-shell">
      <ShowcaseLead label="Prototype checks" title="A distinct identity with practical limits." copy="The concept was checked across print, space and responsive formats. Business outcomes remain design targets until tested with a real operating network."/>
      <div className="showcase-check-grid"><article><Check/><strong>Responsive composer</strong><p>Poster, tag and pass retain the same information hierarchy.</p></article><article><Check/><strong>Keyboard controls</strong><p>Every identity state is reachable without pointer input.</p></article><article><Check/><strong>Reduced motion</strong><p>The final exchange state remains understandable without animation.</p></article><article><Check/><strong>Next evidence</strong><p>Object-label durability, locker-distance legibility and moderated borrowing sessions.</p></article></div>
    </div></section>
  </article>;
}

const readerPaths = {
  qualify: { label: 'Company qualification', vi: ['Phạm vi năng lực', 'Hồ sơ pháp lý và kiểm soát tài liệu', 'Kinh nghiệm theo ngành'], en: ['Capability scope', 'Legal and document control', 'Industry experience'] },
  approach: { label: 'Engineering approach', vi: ['Khảo sát và lấy mẫu', 'Thiết kế và tích hợp', 'Chạy thử và bàn giao'], en: ['Audit and sampling', 'Design and integration', 'Commissioning and handover'] },
  evidence: { label: 'Project evidence', vi: ['Bối cảnh vận hành', 'Phạm vi trách nhiệm', 'Hồ sơ có thể kiểm tra'], en: ['Operating context', 'Responsibility scope', 'Available evidence'] },
};

function HopLuuReader() {
  const [path, setPath] = useState('qualify');
  const [language, setLanguage] = useState('vi');
  const [layer, setLayer] = useState('system');
  const content = readerPaths[path];
  return <div className="hop-reader" aria-label="Interactive HỢP LƯU capability profile reader">
    <header><strong>HỢP LƯU</strong><div role="group" aria-label="Document language"><button type="button" aria-pressed={language === 'vi'} onClick={() => setLanguage('vi')}>VI</button><button type="button" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button></div></header>
    <div className="hop-reader-layout">
      <nav aria-label="Reader purpose">{Object.entries(readerPaths).map(([key,value]) => <button type="button" key={key} aria-current={path === key ? 'page' : undefined} onClick={() => setPath(key)}><span>{value.label}</span><CaretRight/></button>)}</nav>
      <section className="hop-reader-page" aria-live="polite">
        <div className="hop-page-heading"><small>{language === 'vi' ? 'LỘ TRÌNH ĐỌC' : 'READER PATH'}</small><h3>{content[language][0]}</h3><p>{language === 'vi' ? 'Nội dung được sắp theo điều cần kiểm tra, không buộc người đọc đi từ trang đầu.' : 'Content follows the decision to verify, without forcing a page-one reading order.'}</p></div>
        <div className="hop-layer-switch" role="group" aria-label="Process diagram layer">{['system','delivery','evidence'].map((value) => <button type="button" key={value} aria-pressed={layer === value} onClick={() => setLayer(value)}>{value[0].toUpperCase()+value.slice(1)}</button>)}</div>
        <div className={`hop-process hop-process-${layer}`} role="img" aria-label={`Process diagram showing ${layer} layer`}>
          {['Audit','Sample','Design','Integrate','Commission','Return'].map((step,index) => <React.Fragment key={step}><span><i>{index+1}</i>{step}</span>{index < 5 && <b/>}</React.Fragment>)}
        </div>
        <ol>{content[language].map((item,index) => <li key={item}><span>0{index+1}</span>{item}</li>)}</ol>
      </section>
    </div>
  </div>;
}

function HopLuuCaseStudy({ work }) {
  const facts = [
    { label: 'Project frame', value: 'Corporate profile concept' },
    { label: 'Role', value: 'Editorial direction · Information design' },
    { label: 'Deliverables', value: '48 pages · Deck · Project sheets' },
    { label: 'Prototype', value: 'Bilingual capability reader' },
  ];
  return <article className="showcase-case case-hop-luu">
    <ShowcaseHero work={work} theme="hop" label="Corporate profile · Industrial engineering · 2026" summary="A bilingual capability profile designed for procurement review, engineering discussion and project handover." facts={facts} image={hopLuuCover} imageAlt="HỢP LƯU corporate profile, technical project sheets and digital reader arranged at an industrial water facility" demoLabel="Open the capability reader"/>

    <section className="showcase-section hop-brief"><div className="page-shell">
      <ShowcaseLead label="Business context" title="Credibility was scattered across folders." copy="HỢP LƯU is a proposed process-water engineering company. Its useful evidence lives across tender files, certificates, drawings, site photographs and inconsistent sales decks."/>
      <div className="hop-archive"><article><span>Commercial</span><strong>Company overview</strong><p>Clear enough for an introductory meeting.</p></article><article><span>Engineering</span><strong>Scope and interfaces</strong><p>Detailed enough for a technical review.</p></article><article><span>Procurement</span><strong>Traceable evidence</strong><p>Structured for vendor assessment.</p></article><article><span>Operations</span><strong>Handover continuity</strong><p>Useful after the pitch is over.</p></article></div>
    </div></section>

    <section className="showcase-section hop-architecture"><div className="page-shell">
      <ShowcaseLead label="Information architecture" title="Readers do not enter through page one." copy="The publication is organized around decisions. Each audience can qualify the company, review an approach or inspect related work without losing the complete narrative."/>
      <div className="hop-chapter-map"><div><strong>Qualify</strong><span>Company · control · industries</span></div><i/><div><strong>Review</strong><span>Condition · response · scope</span></div><i/><div><strong>Inspect</strong><span>Context · evidence · handover</span></div></div>
    </div></section>

    <section className="showcase-section hop-proof"><div className="page-shell">
      <ShowcaseLead label="Content model" title="Every claim needs a source." copy="Marketing language becomes credible only when it connects to responsibility, evidence and a named content owner."/>
      <div className="hop-proof-chain"><article><span>Claim</span><strong>Design and integration capability</strong></article><CaretRight/><article><span>Scope</span><strong>Process, mechanical and controls interfaces</strong></article><CaretRight/><article><span>Evidence</span><strong>Approved drawing · handover record · site image</strong></article><CaretRight/><article><span>Owner</span><strong>Engineering lead · document control</strong></article></div>
    </div></section>

    <section className="showcase-section hop-editorial"><div className="page-shell">
      <ShowcaseLead label="Editorial system" title="One line carries the story." copy="A vermilion flow-line links chapters, process diagrams and evidence references. Vietnamese leads while English receives equal functional hierarchy."/>
      <div className="hop-spread-stage"><div className="hop-spread-page"><small>02 / CAPABILITY</small><h3>Năng lực kỹ thuật</h3><p>Technical capabilities</p><div className="hop-spread-diagram"><i/><i/><i/><i/></div></div><div className="hop-spread-page"><small>03 / SCOPE</small><h3>Phạm vi công việc</h3><p>Scope of work</p><div className="hop-spread-photo"><span>Project context</span><span>Responsibility</span></div></div></div>
    </div></section>

    <section id="live-demo" className="showcase-section hop-demo-section"><div className="page-shell">
      <ShowcaseLead label="Live document reader" title="Choose what you need to verify." copy="The prototype turns one publication into guided reading paths while keeping the complete profile available in Vietnamese and English."/>
      <HopLuuReader/>
    </div></section>

    <section className="showcase-section hop-use"><div className="page-shell">
      <ShowcaseLead label="Document in use" title="Technical without becoming opaque." copy="The profile supports a conversation at the table, then continues as a searchable mobile credential after the meeting."/>
      <figure className="showcase-wide-image showcase-square-image"><img src={hopLuuReview} alt="Engineers reviewing the HỢP LƯU bilingual process-water profile and digital reader in a plant control room" loading="lazy"/></figure>
    </div></section>

    <section className="showcase-section hop-delivery"><div className="page-shell">
      <ShowcaseLead label="Production and handoff" title="Built for print, email and future evidence." copy="The working system separates print production, accessible digital delivery and reusable content ownership instead of treating one PDF as every final format."/>
      <div className="hop-delivery-grid"><article><span>Print master</span><h3>A4 · 48 pages</h3><p>CMYK package, bleed, font embedding and office-proof version.</p></article><article><span>Digital PDF</span><h3>Tagged · searchable</h3><p>Bookmarks, reading order, selectable text and descriptive images.</p></article><article><span>Content kit</span><h3>Project sheets</h3><p>Source register, named owners and replaceable evidence fields.</p></article></div>
      <div className="hop-next-evidence"><ShowcaseEyebrow>Prototype validation</ShowcaseEyebrow><ul><li><Check/>Bilingual templates stress-tested with long and short copy</li><li><Check/>Keyboard, mobile and reduced-motion states verified</li><li><Check/>Print and grayscale proof checks documented</li><li><CaretRight/>Next: real procurement comprehension sessions and production press proof</li></ul></div>
    </div></section>
  </article>;
}

export function ShowcaseCaseStudy({ work }) {
  if (work.slug === 'folded-matter') return <MuonCaseStudy work={work}/>;
  if (work.slug === 'still-moving') return <HopLuuCaseStudy work={work}/>;
  return null;
}

