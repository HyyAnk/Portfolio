import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight, ArrowLeft, ArrowUpRight, CaretDown, Check,
  Copy, EnvelopeSimple, GithubLogo, Moon, Sun, TelegramLogo, XLogo,
} from '@phosphor-icons/react';
import {
  siBlender, siCss, siEthereum, siFigma, siGithubactions, siHtml5,
  siJavascript, siOkx, siPython, siReact, siSelenium, siSolana,
  siSolidity, siUnrealengine, siWalletconnect,
} from 'simple-icons';

import uiImage from './assets/generated/work-ui.webp';
import graphicImage from './assets/generated/work-graphic.webp';
import videoImage from './assets/generated/work-video.webp';
import automationImage from './assets/generated/work-automation.webp';
import blockchainImage from './assets/generated/work-blockchain.webp';
import mergeboardShowcase from './assets/experiments/mergeboard.webp';
import photoIdShowcase from './assets/experiments/photo-id-studio.webp';
import pdfBusinessCardShowcase from './assets/experiments/pdf-business-card.webp';
import aiMediaStudioShowcase from './assets/experiments/ai-media-studio.webp';
import portraitImage from './assets/generated/portrait.webp';
import matCover from './assets/case-studies/mat-cover.webp';
import kitepayCover from './assets/case-studies/kitepay-cover.webp';
import muonCover from './assets/case-studies/muon-cover.webp';
import hopLuuCover from './assets/case-studies/hop-luu-cover.webp';
import { notFoundSeo, seoByPath, siteIdentity } from './seo.js';
import { withoutTrailingPeriod } from './text.js';

const DeepCaseStudy = lazy(() => import('./caseStudies.jsx').then((module) => ({ default: module.DeepCaseStudy })));
const ShowcaseCaseStudy = lazy(() => import('./showcaseCases.jsx?rev=hop-luu-v3').then((module) => ({ default: module.ShowcaseCaseStudy })));
const SkillPageContent = lazy(() => import('./SkillPageContent.jsx'));

const person = siteIdentity.name;
const fullName = siteIdentity.fullName;
const email = siteIdentity.email;
const skillFlowNodes = [
  { word: 'Design', caption: 'Make it clear', t: .12, offset: -.05 },
  { word: 'Develop', caption: 'Make it work', t: .5, offset: .06 },
  { word: 'Deliver', caption: 'Make it matter', t: .88, offset: -.03 },
];

function BrandIcon({ name }) {
  if (name === 'gmail') return <svg className="brand-icon brand-icon-gmail" viewBox="0 0 256 193" aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M58.182 192.05V93.521L27.513 65.444 0 49.959v124.619c0 9.667 7.836 17.472 17.455 17.472h40.727Z" />
    <path fill="#34A853" d="M197.818 192.05h40.727c9.647 0 17.455-7.833 17.455-17.472V49.959l-27.543 15.485-30.639 28.077v98.529Z" />
    <path fill="#FBBC04" d="M197.818 17.922v75.599l30.639-28.077L256 49.959V26.657c0-21.622-24.677-33.933-41.891-20.996l-16.291 12.261Z" />
    <path fill="#EA4335" d="M58.182 93.521V17.922L128 70.312l69.818-52.39v75.599L128 145.912 58.182 93.521Z" />
    <path fill="#C5221F" d="M0 26.657v23.302l27.513 15.485 30.669 28.077V17.922L41.891 5.661C24.647-7.276 0 5.035 0 26.657Z" />
  </svg>;

  const paths = {
    telegram: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z',
    x: 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993l-9.508-13.838Zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182l-6.327-9.05Z',
    zalo: 'M12.49 10.272v-.449h1.347v6.321h-.771a.576.576 0 0 1-.576-.573 3.273 3.273 0 0 1-1.938.633 3.283 3.283 0 1 1 1.938-5.932ZM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034c-.054.062-.181.206-.242.284L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.444.11-.642.25-.848L4.858 9.23H.192V7.79h6.727Zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354H15.47ZM20.693 9.6A3.305 3.305 0 1 1 20.69 16.21 3.305 3.305 0 0 1 20.693 9.6Zm-10.141 5.253a1.931 1.931 0 1 0 0-3.861 1.931 1.931 0 0 0 0 3.861Zm10.141-.003a1.945 1.945 0 1 0 0-3.889 1.945 1.945 0 0 0 0 3.889Z',
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z',
  };
  const fills = { telegram: '#26A5E4', x: '#000000', zalo: '#0068FF', github: '#181717' };

  return <svg className={`brand-icon brand-icon-${name}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill={fills[name]} d={paths[name]} /></svg>;
}

function ExperimentMark({ slug }) {
  if (slug === 'mergeboard') return <svg className="experiment-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect x="2" y="3" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="20" y="3" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="11" y="20" width="10" height="10" rx="2" fill="currentColor" />
    <line x1="12" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="13" x2="16" y2="20" stroke="currentColor" strokeWidth="2" />
  </svg>;

  if (slug === 'photo-id') return <svg className="experiment-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect x="4" y="2" width="24" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="11" r="4" fill="currentColor" />
    <ellipse cx="16" cy="22" rx="7" ry="4" fill="currentColor" />
    <line x1="1" y1="8" x2="7" y2="8" stroke="currentColor" strokeWidth="2" />
    <line x1="25" y1="24" x2="31" y2="24" stroke="currentColor" strokeWidth="2" />
  </svg>;

  if (slug === 'pdf-card') return <svg className="experiment-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect x="4" y="2" width="20" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="9" y="13" width="20" height="11" rx="2" fill="currentColor" />
    <rect x="13" y="17" width="8" height="2" rx="1" fill="var(--paper-elevated)" />
  </svg>;

  return <svg className="experiment-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect x="3" y="4" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="11" y="10" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="13" y="12" width="7" height="7" rx="1.5" fill="currentColor" />
  </svg>;
}

const contactLinks = [
  { key: 'telegram', label: 'Telegram', value: '@dungocminhhoang', href: 'https://t.me/dungocminhhoang', icon: TelegramLogo },
  { key: 'x', label: 'X', value: 'x.com/0x_HyyAnk', href: 'https://x.com/0x_HyyAnk', icon: XLogo },
  { key: 'gmail', label: 'Gmail', value: email, href: `mailto:${email}`, icon: EnvelopeSimple },
  { key: 'zalo', label: 'Zalo', value: 'zalo.me/0904002301', href: 'https://zalo.me/0904002301', icon: null },
  { key: 'github', label: 'GitHub', value: 'github.com/HyyAnk', href: 'https://github.com/HyyAnk', icon: GithubLogo },
];

const skills = [
  { slug: 'graphic-design', title: 'Graphic Design', short: 'Identity systems with a point of view', body: 'I build visual systems that make an idea legible before anyone reads the details', image: graphicImage, variant: 'graphic', tools: ['Art direction', 'Identity', 'Editorial'], details: ['Visual identity systems', 'Editorial layout direction', 'Typography and colour systems', 'Campaign art direction'] },
  { slug: 'video-editor', title: 'Video Editor', short: 'Motion with an honest rhythm', body: 'I shape footage, sound and type into clear stories that know when to pause', image: videoImage, variant: 'video', tools: ['Editing', 'Title design', 'Sound'], details: ['Advanced transitions', 'Professional SFX design', 'Special effects and motion effects', 'Cinematic storytelling'] },
  { slug: 'uiux-webdev', title: 'Web Design', short: 'Interfaces that feel considered', body: 'I design and code responsive experiences where the visual idea survives the interaction', image: uiImage, variant: 'ui', tools: ['Product design', 'React', 'Systems'], details: ['UX flows and product structure', 'Responsive design systems', 'React implementation', 'Interaction and interface motion'] },
  { slug: 'automation', title: 'Automation', short: 'The quiet work behind the work', body: 'I connect the small steps that slow a team down and turn them into a dependable flow', image: automationImage, variant: 'automation', tools: ['Workflows', 'APIs', 'Operations'], details: ['Workflow architecture', 'API and webhook orchestration', 'Content and task automation', 'Operational clarity'] },
  { slug: 'blockchain', title: 'Blockchain Integration', short: 'Trust made tangible', body: 'I help teams use decentralised technology where it creates real ownership, not extra noise', image: blockchainImage, variant: 'blockchain', tools: ['Wallets', 'Onchain UX', 'Contracts'], details: ['Wallet and onboarding UX', 'Smart contract integration', 'Onchain transaction states', 'Trust and ownership design'] },
];

const primarySkills = ['uiux-webdev', 'video-editor'].map((slug) => skills.find((skill) => skill.slug === slug));
const supportingSkills = ['graphic-design', 'automation', 'blockchain'].map((slug) => skills.find((skill) => skill.slug === slug));

const capCutIcon = {
  path: 'M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z',
};

function FigmaToolLogo() {
  return <svg className="skill-tool-figma-logo" viewBox="0 0 38 57" focusable="false">
    <path fill="#F24E1E" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0Z" />
    <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5Z" />
    <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5H19v-9.5Z" />
    <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
    <path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5Z" />
  </svg>;
}

const skillToolsets = {
  'graphic-design': {
    motion: 'graphic',
    label: 'Photoshop, Illustrator, InDesign and Figma',
    tools: [
      { name: 'Adobe Photoshop', label: 'Photoshop', mark: 'Ps', color: '#31A8FF' },
      { name: 'Adobe Illustrator', label: 'Illustrator', mark: 'Ai', color: '#FF9A00' },
      { name: 'Adobe InDesign', label: 'InDesign', mark: 'Id', color: '#FF3366' },
      { name: 'Figma', icon: siFigma, color: '#F24E1E' },
    ],
  },
  'video-editor': {
    motion: 'video',
    label: 'After Effects, Premiere Pro, CapCut, Blender and Unreal Engine',
    tools: [
      { name: 'Adobe After Effects', label: 'After Effects', mark: 'Ae', color: '#9999FF', markSize: '0.9rem' },
      { name: 'Adobe Premiere Pro', label: 'Premiere Pro', mark: 'Pr', color: '#9999FF', markSize: '0.9rem' },
      { name: 'CapCut', icon: capCutIcon, mono: true },
      { name: 'Blender', icon: siBlender, color: `#${siBlender.hex}` },
      { name: 'Unreal Engine', icon: siUnrealengine, mono: true, iconSize: 25, mobileIconSize: 23 },
    ],
  },
  'uiux-webdev': {
    motion: 'ui',
    label: 'Figma, React, JavaScript, HTML and CSS',
    tools: [
      { name: 'Figma', brandIcon: 'figma', color: `#${siFigma.hex}`, iconSize: 23, mobileIconSize: 21 },
      { name: 'React', icon: siReact, color: `#${siReact.hex}` },
      { name: 'JavaScript', icon: siJavascript, color: `#${siJavascript.hex}` },
      { name: 'HTML5', icon: siHtml5, color: `#${siHtml5.hex}` },
      { name: 'CSS', icon: siCss, color: `#${siCss.hex}` },
    ],
  },
  automation: {
    motion: 'automation',
    label: 'Python, EXE, Playwright, Selenium and GitHub Actions',
    tools: [
      { name: 'Python', icon: siPython, color: '#3776AB' },
      { name: 'EXE', mark: 'EXE', mono: true },
      { name: 'Playwright', mark: 'Pw', color: '#2EAD33' },
      { name: 'Selenium', icon: siSelenium, color: '#43B02A' },
      { name: 'GitHub Actions', icon: siGithubactions, color: '#2088FF' },
    ],
  },
  blockchain: {
    motion: 'blockchain',
    label: 'Ethereum, Solana, Solidity, OKX and WalletConnect',
    tools: [
      { name: 'Ethereum', icon: siEthereum, mono: true },
      { name: 'Solana', icon: siSolana, color: '#14F195' },
      { name: 'Solidity', icon: siSolidity, mono: true },
      { name: 'OKX', icon: siOkx, mono: true },
      { name: 'WalletConnect', icon: siWalletconnect, color: '#3B99FC' },
    ],
  },
};

const measuredToolTextWidths = {
  Figma: 33,
  React: 32,
  JavaScript: 57,
  HTML5: 37,
  CSS: 24,
  'After Effects': 68,
  'Premiere Pro': 70,
  CapCut: 42,
  Blender: 42,
  'Unreal Engine': 75,
};

function createRandomToolOrder(count) {
  const shuffled = Array.from({ length: count }, (_, index) => index);
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled.reduce((orderByTool, toolIndex, sequenceIndex) => {
    orderByTool[toolIndex] = sequenceIndex;
    return orderByTool;
  }, []);
}

function SkillToolIcon({ tool, index, order }) {
  const color = tool.mono ? 'var(--ink)' : (tool.color || 'currentColor');
  const label = tool.label || tool.name;
  const textWidth = measuredToolTextWidths[label] || Math.max(32, Math.ceil(label.length * 5.8));
  const expandedWidth = Math.min(128, Math.max(60, textWidth + 18));
  return <span className="skill-tool-slot" style={{
    '--tool-color': color,
    '--tool-index': index,
    '--tool-order': order,
    '--tool-chars': label.length,
    '--tool-expanded-width': `${expandedWidth}px`,
    '--tool-text-width': `${textWidth}px`,
    ...(tool.iconSize ? { '--tool-icon-size': `${tool.iconSize}px` } : {}),
    ...(tool.mobileIconSize ? { '--tool-icon-size-mobile': `${tool.mobileIconSize}px` } : {}),
    ...(tool.markSize ? { '--tool-mark-size': tool.markSize } : {}),
  }}>
    <span className={`skill-tool-icon ${tool.mono ? 'is-monochrome' : ''}`}>
      <span className="skill-tool-symbol" aria-hidden="true">
        {tool.brandIcon === 'figma'
          ? <FigmaToolLogo />
          : tool.icon
          ? <svg viewBox="0 0 24 24" focusable="false"><path d={tool.icon.path} /></svg>
          : <span className="skill-tool-mark">{tool.mark}</span>}
      </span>
      <span className="skill-tool-name" aria-hidden="true">{label}</span>
    </span>
  </span>;
}

function SkillToolMotion({ skill }) {
  const toolset = skillToolsets[skill.slug];
  const [toolOrder] = useState(() => createRandomToolOrder(toolset.tools.length));
  const [rowPhase] = useState(() => toolset.motion === 'video'
    ? `${-(1.55 + Math.random() * 1.2).toFixed(2)}s`
    : `${-(Math.random() * .35).toFixed(2)}s`);
  return <span className={`skill-tool-motion skill-tool-motion-${toolset.motion}`} role="img" aria-label={toolset.label} style={{ '--tool-row-phase': rowPhase }}>
    <span className="skill-tool-track" aria-hidden="true">
      {toolset.tools.map((tool, index) => <SkillToolIcon key={tool.name} tool={tool} index={index} order={toolOrder[index]} />)}
    </span>
  </span>;
}

const works = [
  { slug: 'mat', title: 'MÁT', type: 'Web product · PWA', year: '2026', role: 'Product strategy · UX/UI · React', description: 'A heat-aware route planner that helps people choose a kinder path through hot, dense cities.', challenge: 'Most route planners optimize only time and distance, leaving heat exposure and recovery needs invisible.', outcome: 'A responsive routing concept that makes shade, heat, air quality and route trade-offs understandable.', tags: ['Product design', 'Web development'], image: matCover, deep: true },
  { slug: 'folded-matter', title: 'MƯỢN', type: 'Brand identity · Community service', year: '2026', role: 'Strategy · Naming · Identity · Motion', description: 'A sharing identity that makes borrowing useful objects feel ordinary, local and worth repeating.', challenge: 'Shared tools need trust, clarity and a recognizable handoff across labels, lockers, spaces and screens.', outcome: 'A practical identity system spanning naming, object tags, spatial service, digital borrowing and motion.', tags: ['Brand identity', 'Art direction'], image: muonCover, deep: true },
  { slug: 'still-moving', title: 'HỢP LƯU', type: 'Corporate profile · Editorial', year: '2026', role: 'Editorial direction · Information design', description: 'A bilingual capability profile that makes industrial water engineering clear, verifiable and ready for review.', challenge: 'Technical evidence was scattered across tender files, drawings, site photography and inconsistent sales decks.', outcome: 'A modular print and digital credential system organized around decisions, scope and proof.', tags: ['Editorial design', 'Information design'], image: hopLuuCover, deep: true },
  { slug: 'kitepay', title: 'KitePay', type: 'BSC application', year: '2026', role: 'Product design · Web3 integration', description: 'A milestone escrow that makes scope, payment state and on-chain evidence clear to both sides.', challenge: 'Freelancers and clients need a shared payment state without turning every agreement into a crypto puzzle.', outcome: 'A testnet-ready product concept pairing explicit escrow states with human-readable transaction receipts.', tags: ['Blockchain', 'React'], image: kitepayCover, deep: true },
];

const experiments = [
  {
    slug: 'mergeboard',
    title: 'MergeBoard',
    label: 'Visual workspace',
    description: 'Build reusable flows with text, media and generation nodes.',
    tech: ['React Flow', 'File System Access API', 'Local-first'],
    alt: 'Graphite modules, photographic fragments and orange cords arranged as a connected visual system',
    image: mergeboardShowcase,
    repo: 'https://github.com/HyyAnk/Merge-Board-Node',
    live: 'https://merge-board-node.vercel.app',
    featured: true,
  },
  {
    slug: 'photo-id',
    title: 'Photo ID Studio',
    label: 'Photo utility',
    description: 'Prepare print-ready ID photos from queued references.',
    tech: ['React', 'Express', 'Sharp'],
    alt: 'Portrait lightbox and identity photo frames arranged on a photographic studio table',
    image: photoIdShowcase,
    repo: 'https://github.com/HyyAnk/Photo-ID-Studio',
    live: 'https://photo-id-studio.vercel.app',
  },
  {
    slug: 'pdf-card',
    title: 'PDF Business Card',
    label: 'PDF utility',
    description: 'Stamp business cards and QR details onto PDF files.',
    tech: ['TypeScript', 'pdf-lib', 'QR tooling'],
    alt: 'Paper stack, black stamping block and embossed card arranged as a document production still life',
    image: pdfBusinessCardShowcase,
    repo: 'https://github.com/HyyAnk/Pdf-business-card-stamper',
    live: 'https://pdf-business-card-stamper.vercel.app',
  },
  {
    slug: 'ai-studio',
    title: 'AI Media Studio',
    label: 'Generative media',
    description: 'Generate and edit media with reference-driven AI tools.',
    tech: ['React', 'TypeScript', 'Google GenAI'],
    alt: 'Smoked glass, optical lens and film layers arranged as an experimental media workbench',
    image: aiMediaStudioShowcase,
    repo: 'https://github.com/HyyAnk/Image-video-Google-API---Aistudio',
    wide: true,
  },
];

const heroCarouselImages = [
  { image: matCover, alt: 'MÁT heat-aware route planning concept' },
  { image: muonCover, alt: 'MƯỢN community lending identity system' },
  { image: hopLuuCover, alt: 'HỢP LƯU corporate capability profile' },
  { image: kitepayCover, alt: 'KitePay BSC milestone escrow concept' },
  { image: uiImage, alt: 'Responsive interface design study' },
  { image: graphicImage, alt: 'Graphic identity system study' },
  { image: videoImage, alt: 'Video editing and title design study' },
];

const carouselFolderAssets = import.meta.glob('./assets/Carousel/*.{png,jpg,jpeg,jpb,gif,webp,avif,svg}', { eager: true, import: 'default', query: '?url' });
const customCarouselByIndex = Object.entries(carouselFolderAssets).reduce((result, [filePath, imageUrl]) => {
  const match = filePath.match(/(?:^|[\\/])([1-7])\.(?:png|jpe?g|jpb|gif|webp|avif|svg)$/i);
  if (match) result[Number(match[1])] = imageUrl;
  return result;
}, {});
const customCarouselAlts = [
  'Complete furniture ecommerce homepage with a lounge chair gallery, finish selector, price, specifications and product navigation',
  'Trang chủ năng lượng sạch bằng tiếng Việt với ảnh điện mặt trời kết hợp nông nghiệp, quy trình khảo sát, thiết kế và vận hành',
  'Trang chủ nhà đấu giá nghệ thuật đương đại Việt Nam bằng tiếng Việt với tác phẩm sơn mài đỏ, thông tin phiên và đăng ký hồ sơ',
  'Complete skincare product page with a serum gallery, purchase options, ingredients and clinical proof',
  'Complete electronic music festival homepage with ticket actions, preview player, stage schedule and pass availability',
  'Complete boutique hospitality booking homepage with retreat details, dates, guests, nightly price and availability',
  'Trang chủ phòng khám gia đình bằng tiếng Việt với ảnh bác sĩ tư vấn, form đặt lịch và các chuyên khoa nhi khoa, nội tổng quát, dinh dưỡng',
];
const configuredCarouselImages = Array.from({ length: 7 }, (_, index) => ({
  ...(heroCarouselImages[index]),
  image: customCarouselByIndex[index + 1] || heroCarouselImages[index].image,
  alt: customCarouselByIndex[index + 1] ? customCarouselAlts[index] : heroCarouselImages[index].alt,
}));

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
const revealTransition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] };

function usePageMeta(metadata) {
  useEffect(() => {
    if (!metadata) return;
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${metadata.path === '/' ? '/' : metadata.path}`;
    document.title = metadata.title;

    const upsertMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    };
    const upsertLink = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    };

    upsertMeta('meta[name="description"]', { name: 'description', content: metadata.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: metadata.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: metadata.kind === 'article' ? 'article' : metadata.kind === 'profile' ? 'profile' : 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: metadata.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: metadata.noindex ? 'noindex, follow' : 'index, follow' });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
  }, [metadata]);
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#111311' : '#f2f0ed');
    window.localStorage.setItem('theme', theme);
  }, [theme]);
  return [theme, setTheme];
}

function Nav() {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useTheme();
  const location = useLocation();
  const navRef = useRef(null);
  useEffect(() => {
    const sentinel = document.querySelector('[data-nav-sentinel]');
    if (!sentinel) return undefined;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [location.pathname]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape' || (event.type === 'pointerdown' && !navRef.current?.contains(event.target))) {
        setSkillsOpen(false); setContactOpen(false);
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', close);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close); };
  }, []);
  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} ref={navRef}>
    <div className="nav-inner">
      <Link className="wordmark" to="/" aria-label={`${person} | ${fullName}, back to home`} onClick={() => { setSkillsOpen(false); setContactOpen(false); }}><span className="wordmark-mark" aria-hidden="true"><img className="brand-logo-light" src="/deer-logo.svg" alt="" /><img className="brand-logo-dark" src="/deer-logo-white.svg" alt="" /></span><span className="wordmark-copy"><strong className="wordmark-alias">{person}</strong><span className="wordmark-divider" aria-hidden="true">|</span><span className="wordmark-fullname">{fullName}</span></span></Link>
      <div className="nav-actions">
        <a className="nav-link nav-link-simple" href="/#selected-works">Work</a>
        <a className="nav-link nav-link-simple" href="/#about">About</a>
        <div className="nav-menu-wrap">
          <button className="nav-link" type="button" aria-expanded={skillsOpen} onClick={() => { setSkillsOpen((value) => !value); setContactOpen(false); }}>Skills <CaretDown size={15} weight="bold" /></button>
          {skillsOpen && <nav className="dropdown skills-dropdown" aria-label="Skills navigation">{skills.map((skill) => <Link key={skill.slug} to={`/skills/${skill.slug}`} onClick={() => setSkillsOpen(false)}>{skill.title}</Link>)}</nav>}
        </div>
        <button className={`theme-toggle ${theme === 'dark' ? 'is-dark' : ''}`} type="button" role="switch" aria-checked={theme === 'dark'} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')}>
          <span className="theme-toggle-track" aria-hidden="true"><Sun size={12} weight="fill" /><Moon size={12} weight="fill" /><span className="theme-toggle-thumb">{theme === 'dark' ? <Moon size={11} weight="fill" /> : <Sun size={11} weight="fill" />}</span></span>
        </button>
        <div className="nav-menu-wrap">
          <button className="contact-trigger" type="button" aria-label="Open contact links" aria-expanded={contactOpen} onClick={() => { setContactOpen((value) => !value); setSkillsOpen(false); }}>
            <span className="contact-trigger-icons" aria-hidden="true">{contactLinks.map(({ key, icon: Icon }) => Icon ? <Icon key={key} size={14} weight="bold" /> : <span key={key} className="zalo-mark">Z</span>)}</span>
          </button>
          {contactOpen && <ContactDropdown />}
        </div>
      </div>
    </div>
  </header>;
}

function ContactDropdown() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return <div className="dropdown contact-dropdown" aria-label="Contact links">
    <span className="dropdown-label">Contact</span>
    {contactLinks.map(({ key, label, value, href, icon: Icon }) => {
      const content = <><span className={`contact-link-icon contact-link-icon-${key}`} aria-hidden="true">{Icon ? <Icon size={17} weight="bold" /> : <span className="zalo-mark">Z</span>}</span><span className="contact-link-copy"><span>{key === 'gmail' && copied ? 'Copied to clipboard' : value}</span></span></>;
      if (key === 'gmail') return <button key={key} className={`contact-dropdown-link ${copied ? 'is-copied' : ''}`} type="button" onClick={copyEmail} aria-label={`Copy ${label} ${email}`} aria-live="polite">{content}</button>;
      return <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}: ${value}`}>{content}</a>;
    })}
  </div>;
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={reveal} transition={{ ...revealTransition, delay }}>{children}</motion.div>;
}

function HeroComposition() {
  const carouselRef = useRef(null);
  const reduce = useReducedMotion();
  const pointerRef = useRef({ progress: 0, startX: null, startY: null, dragging: false });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;
    const cards = Array.from(carousel.querySelectorAll('.hero-carousel-card'));

    const applyProgress = (progress) => {
      const count = cards.length;
      cards.forEach((card, index) => {
        const position = (index / count + progress) % 1;
        const visible = position > 0 && position < .72;
        const travel = visible ? position / .72 : 0;
        const opacityEnvelope = visible
          ? Math.min(Math.min(1, Math.max(0, travel / .06)), Math.min(1, Math.max(0, (1 - travel) / .08)))
          : 0;
        const phaseEnd = 280 + (Math.PI / 2 * 90) + 240;
        const firstPhase = 280 / phaseEnd;
        const secondPhase = (280 + (Math.PI / 2 * 90)) / phaseEnd;
        let x = 0;
        let y = 0;

        if (travel < firstPhase) {
          x = -10;
          y = -300 + (travel / firstPhase) * 280;
        } else if (travel < secondPhase) {
          const angle = (180 + ((travel - firstPhase) / (secondPhase - firstPhase)) * 90) * Math.PI / 180;
          x = 80 + 90 * Math.cos(angle);
          y = -20 - 90 * Math.sin(angle);
        } else {
          x = 80 + ((travel - secondPhase) / (1 - secondPhase)) * 240;
          y = 70;
        }

        const depth = visible ? Math.sin((travel < firstPhase
          ? travel / (2 * firstPhase)
          : .5 + (travel - firstPhase) / (2 * (1 - firstPhase))) * Math.PI) : 0;
        const opacity = opacityEnvelope * (.4 + .6 * depth);
        card.style.zIndex = String(Math.round(20 + 80 * depth));
        card.style.opacity = String(opacity);
        card.style.pointerEvents = depth > .72 ? 'auto' : 'none';
        card.style.transform = `translate3d(calc(-50% + ${x}%), calc(-50% + ${y}%), ${-1000 + 1280 * depth}px) rotateX(${4 - 2 * depth}deg) rotateY(${-3 + 6 * travel}deg) rotateZ(0deg) scale(${.44 + .74 * depth})`;
      });
    };

    applyProgress(pointerRef.current.progress);
    if (reduce) return undefined;

    let frameId;
    let previousTime = performance.now();
    const tick = (time) => {
      const elapsed = time - previousTime;
      previousTime = time;
      if (!pointerRef.current.dragging) pointerRef.current.progress = (pointerRef.current.progress + 31.5e-6 * elapsed) % 1;
      applyProgress(pointerRef.current.progress);
      frameId = window.requestAnimationFrame(tick);
    };
    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [reduce]);

  const startDrag = (event) => {
    pointerRef.current.startX = event.clientX;
    pointerRef.current.startY = event.clientY;
    pointerRef.current.dragging = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };
  const drag = (event) => {
    if (!pointerRef.current.dragging) return;
    const deltaX = event.clientX - pointerRef.current.startX;
    const deltaY = event.clientY - pointerRef.current.startY;
    pointerRef.current.progress = (pointerRef.current.progress + 8e-4 * (deltaY + .25 * deltaX) + 1) % 1;
    pointerRef.current.startX = event.clientX;
    pointerRef.current.startY = event.clientY;
  };
  const endDrag = (event) => {
    pointerRef.current.startX = null;
    pointerRef.current.startY = null;
    pointerRef.current.dragging = false;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return <div className="hero-composition" aria-label="A selection of recent portfolio work">
    <div className="hero-carousel-desktop" ref={carouselRef} onPointerDown={startDrag} onPointerMove={drag} onPointerUp={endDrag} onPointerCancel={endDrag}>
      <div className="hero-carousel-track">
        {configuredCarouselImages.map((item, index) => <figure className="hero-carousel-card" key={`${item.alt}-${index}`}>
          <img src={item.image} alt={item.alt} draggable="false" loading={index < 2 ? 'eager' : 'lazy'} />
        </figure>)}
      </div>
    </div>
    <div className="hero-carousel-mobile" aria-hidden="true">
      <div className="hero-mobile-flow">
        {[...configuredCarouselImages, ...configuredCarouselImages].map((item, index) => <figure className="hero-mobile-card" key={`mobile-${index}`}>
          <img src={item.image} alt="" draggable="false" loading="lazy" />
        </figure>)}
      </div>
    </div>
  </div>;
}

function ReadyProjectButton() {
  const [effectState, setEffectState] = useState('idle');
  const [effectCycle, setEffectCycle] = useState(0);
  const exitTimerRef = useRef(null);
  const activeSourcesRef = useRef({ pointer: false, focus: false });

  useEffect(() => () => window.clearTimeout(exitTimerRef.current), []);

  const setEffectSource = (source, active) => {
    const sources = activeSourcesRef.current;
    const wasActive = sources.pointer || sources.focus;
    sources[source] = active;
    const isActive = sources.pointer || sources.focus;
    window.clearTimeout(exitTimerRef.current);

    if (isActive) {
      if (!wasActive) setEffectCycle((cycle) => cycle + 1);
      setEffectState('active');
      return;
    }

    setEffectState('leaving');
    exitTimerRef.current = window.setTimeout(() => setEffectState('idle'), 760);
  };

  return <span
    className={`ready-cta-shell is-${effectState}`}
    onPointerEnter={() => setEffectSource('pointer', true)}
    onPointerLeave={() => setEffectSource('pointer', false)}
    onFocusCapture={() => setEffectSource('focus', true)}
    onBlurCapture={() => setEffectSource('focus', false)}
  >
    <a className="button ready-cta" href="#contact" aria-label="Ready to Deliver - go to contact options">
      <span className="ready-cta-label">Ready to Deliver</span>
      <span className="ready-type" aria-hidden="true"><span>_</span><span>_</span><span>_</span></span>
    </a>
    <span className="ready-fx" aria-hidden="true" key={effectCycle}>
      <span className="ready-particle ready-heart ready-heart-one">♥</span>
      <span className="ready-particle ready-heart ready-heart-two">♡</span>
      <span className="ready-particle ready-spark ready-spark-one">✦</span>
      <span className="ready-particle ready-spark ready-spark-two">✧</span>
      <span className="ready-particle ready-spark ready-spark-three">✦</span>
      <span className="ready-particle ready-dust ready-dust-one" />
      <span className="ready-particle ready-dust ready-dust-two" />
      <span className="ready-particle ready-dust ready-dust-three" />
      <span className="ready-particle ready-dust ready-dust-four" />
    </span>
  </span>;
}

const identityTerminalCopy = {
  original: ['Artist mode installed', 'but Dư Ngọc Minh Hoàng is my true form....'],
  install: ['Npx HyyAnk package install', ''],
};

function TerminalHighlight({ text, target, highlight, className }) {
  const highlightStart = target.indexOf(highlight);
  const highlightEnd = highlightStart + highlight.length;

  if (highlightStart < 0 || text.length <= highlightStart) return text;

  return <>
    {text.slice(0, highlightStart)}
    <strong className={className}>{text.slice(highlightStart, Math.min(text.length, highlightEnd))}</strong>
    {text.length > highlightEnd ? text.slice(highlightEnd) : null}
  </>;
}

function IdentityTerminal() {
  const reduceMotion = useReducedMotion();
  const [replayKey, setReplayKey] = useState(0);
  const [variant, setVariant] = useState('original');
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [activeLine, setActiveLine] = useState(1);

  useEffect(() => {
    let cancelled = false;
    const timers = new Set();
    const pause = (duration) => new Promise((resolve) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        resolve();
      }, duration);
      timers.add(timer);
    });
    const typeLine = async (copy, update, line, speed = 42) => {
      setActiveLine(line);
      for (let index = 1; index <= copy.length; index += 1) {
        if (cancelled) return false;
        update(copy.slice(0, index));
        await pause(speed);
      }
      return !cancelled;
    };
    const eraseLine = async (copy, update, line) => {
      setActiveLine(line);
      for (let index = copy.length - 1; index >= 0; index -= 1) {
        if (cancelled) return false;
        update(copy.slice(0, index));
        await pause(22);
      }
      return !cancelled;
    };
    const progressCopy = (progress) => {
      const barSize = 14;
      const filled = Math.round((progress / 100) * barSize);
      return `[${'█'.repeat(filled)}${'░'.repeat(barSize - filled)}] ${String(progress).padStart(3, ' ')}%`;
    };

    const runLoop = async () => {
      setVariant('original');
      setLineOne('');
      setLineTwo('');

      if (!await typeLine(identityTerminalCopy.original[0], setLineOne, 1)) return;
      if (!await typeLine(identityTerminalCopy.original[1], setLineTwo, 2)) return;

      while (!cancelled) {
        setActiveLine(0);
        await pause(4000);
        if (cancelled || !await eraseLine(identityTerminalCopy.original[1], setLineTwo, 2)) return;
        if (!await eraseLine(identityTerminalCopy.original[0], setLineOne, 1)) return;

        setVariant('install');
        if (!await typeLine(identityTerminalCopy.install[0], setLineOne, 1)) return;
        setActiveLine(2);
        for (let progress = 0; progress <= 100; progress += 1) {
          if (cancelled) return;
          setLineTwo(progressCopy(progress));
          await pause(30);
        }

        setActiveLine(0);
        await pause(500);
        if (cancelled || !await eraseLine(progressCopy(100), setLineTwo, 2)) return;
        if (!await eraseLine(identityTerminalCopy.install[0], setLineOne, 1)) return;

        setVariant('original');
        if (!await typeLine(identityTerminalCopy.original[0], setLineOne, 1)) return;
        if (!await typeLine(identityTerminalCopy.original[1], setLineTwo, 2)) return;
      }
    };

    if (reduceMotion) {
      setVariant('original');
      setLineOne(identityTerminalCopy.original[0]);
      setLineTwo(identityTerminalCopy.original[1]);
      setActiveLine(0);
    } else {
      runLoop();
    }

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [reduceMotion, replayKey]);

  return <button
    className={`identity-terminal is-${variant}`}
    type="button"
    onClick={() => setReplayKey((key) => key + 1)}
    aria-label="Animated identity terminal alternating between artist mode and the HyyAnk package installation. Click to restart the animation."
  >
    <span className="identity-terminal-bar" aria-hidden="true">
      <span className="identity-terminal-dots"><i /><i /><i /></span>
      <span>~/identity</span>
      <span className="identity-terminal-replay">restart ↵</span>
    </span>
    <span className="identity-terminal-screen" aria-hidden="true">
      <span className={`identity-terminal-line identity-terminal-line-one ${activeLine === 1 ? 'is-active' : ''}`}>
        {variant === 'install'
          ? <TerminalHighlight text={lineOne} target={identityTerminalCopy.install[0]} highlight="HyyAnk" className="identity-terminal-package" />
          : lineOne}
      </span>
      <span className={`identity-terminal-line identity-terminal-line-two ${activeLine === 2 ? 'is-active' : ''} ${variant === 'install' ? 'is-progress' : ''}`}>
        {variant === 'original'
          ? <TerminalHighlight text={lineTwo} target={identityTerminalCopy.original[1]} highlight="Dư Ngọc Minh Hoàng" className="identity-terminal-name" />
          : lineTwo}
      </span>
    </span>
  </button>;
}

function Hero() {
  return <section className="hero section-pad">
    <div className="hero-sentinel" data-nav-sentinel="true" />
    <div className="page-shell hero-grid">
      <div className="hero-copy">
        <h1>{withoutTrailingPeriod(person)}</h1>
        <IdentityTerminal />
        <p className="hero-serif">Designer and developer for thoughtful digital work.</p>
        <p className="hero-accent">Clarity first. Character always.</p>
        <p className="hero-lede">I turn complex products, stories and workflows into clear experiences people can understand and use.</p>
        <div className="hero-actions"><a className="button button-dark" href="#selected-works">View selected work <ArrowDownRight size={18} /></a><ReadyProjectButton /></div>
      </div>
      <Reveal className="hero-composition-shell">
        <HeroComposition />
      </Reveal>
    </div>
  </section>;
}

function WorkCarousel() {
  return <section id="selected-works" className="section-pad works-section"><div className="page-shell"><Reveal><div className="section-heading section-heading-stacked"><h2>Selected work</h2><p>Four self-initiated case studies across product, identity, editorial and systems.</p></div></Reveal><div className="work-gallery">{works.map((work, index) => <Reveal className={`work-card work-card-${index + 1}`} key={work.slug} delay={index * .05}><Link to={`/work/${work.slug}`} className="work-card-link" aria-label={`View ${work.title} project`}><figure className="work-card-image"><img src={work.image} alt={`${work.title} project visual`} loading={index > 1 ? 'lazy' : 'eager'} decoding="async" /><figcaption>View project <ArrowUpRight size={16} /></figcaption></figure><div className="work-card-kicker"><span>{String(index + 1).padStart(2, '0')} / 04</span><span>{work.deep ? 'Full case study' : 'Project study'}</span></div><div className="work-card-copy"><div><h3>{withoutTrailingPeriod(work.title)}</h3><p>{work.description}</p></div><div className="work-card-meta"><span>{work.type}</span><span>{work.year}</span><ArrowUpRight size={20} /></div></div></Link></Reveal>)}</div></div></section>;
}

function About() {
  const flow = [
    { index: '01', title: 'Design', caption: 'Make it clear' },
    { index: '02', title: 'Develop', caption: 'Make it work' },
    { index: '03', title: 'Deliver', caption: 'Make it matter' },
  ];

  return <section id="about" className="section-pad about-section"><div className="page-shell about-grid"><Reveal className="about-title"><h2>About</h2></Reveal><Reveal className="about-image" delay={.06}><img src={portraitImage} alt={`Portrait of ${person}`} loading="lazy" /></Reveal><Reveal className="about-copy" delay={.12}><p className="large-copy">I am a designer and developer. I bridge strategy, design and code to make digital work feel alive.</p><p>I care about the details that shape clarity, usability and emotion. Good work should make the next step feel obvious.</p><a className="about-capability-flow" href="#skills" aria-label="Explore Design, Develop and Deliver capabilities"><span className="about-flow-heading"><span><small>How the work moves</small>Explore the flow</span><ArrowDownRight size={19} weight="bold" /></span><span className="about-flow-chain" aria-hidden="true">{flow.map((step) => <span className="about-flow-step" key={step.title}><span className="about-flow-index">{step.index}</span><strong>{step.title}</strong><span className="about-flow-caption">{step.caption}</span><span className="about-flow-node" /></span>)}</span></a></Reveal></div></section>;
}

function ThreeSkillFlow() {
  const containerRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let cancelled = false;
    let disposeThree = () => {};
    const startThree = async () => {
      container.dataset.threeState = 'loading';
      const THREE = await import('three');
      if (cancelled) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, .1, 100);
    camera.position.set(0, .15, 13.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    container.dataset.threeState = 'ready';

    const flow = new THREE.Group();
    scene.add(flow);
    const accent = new THREE.Color('#c9573e');
    const ink = new THREE.Color('#171816');
    const soft = new THREE.Color('#d9d5cc');
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.7, -.72, -.35),
      new THREE.Vector3(-3.25, .95, .3),
      new THREE.Vector3(-.45, -.15, -.15),
      new THREE.Vector3(2.6, -1.05, .25),
      new THREE.Vector3(5.7, .42, -.3),
    ]);

    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(path, 180, .028, 8, false),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: .6 })
    );
    flow.add(tube);

    let isDark = document.documentElement.dataset.theme === 'dark';
    const labelSprites = [];
    const createLabel = (text) => {
      const canvas = document.createElement('canvas');
      canvas.width = 520;
      canvas.height = 130;
      const context = canvas.getContext('2d');
      if (!context) return null;
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
      sprite.scale.set(2.25, .56, 1);
      sprite.userData.redraw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '700 70px Manrope, Arial, sans-serif';
        context.fillStyle = isDark ? '#f4f1e9' : '#171816';
        context.fillText(text, 24, 78);
        context.fillStyle = '#c9573e';
        context.fillRect(26, 105, 72, 4);
        texture.needsUpdate = true;
      };
      sprite.userData.redraw();
      labelSprites.push(sprite);
      return sprite;
    };

    const nodes = skillFlowNodes.map(({ word, t, offset }, index) => {
      const node = new THREE.Group();
      const point = path.getPointAt(t);
      node.position.copy(point);
      node.position.y += offset;
      node.userData = { baseY: node.position.y, phase: index * 1.75, index, active: false };

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(.39, 2),
        new THREE.MeshStandardMaterial({ color: index === 1 ? ink : accent, roughness: .3, metalness: .18, emissive: index === 1 ? ink : accent, emissiveIntensity: .2 })
      );
      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(.65, .018, 8, 64),
        new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: .62 })
      );
      halo.rotation.x = Math.PI / 2;
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(.87, .008, 6, 72),
        new THREE.MeshBasicMaterial({ color: soft, transparent: true, opacity: .65 })
      );
      orbit.rotation.set(.75, .25, index * .6);
      const label = createLabel(word);
      if (label) {
        label.position.set(0, 1.02, .08);
        node.add(label);
      }
      node.add(core, halo, orbit);
      core.userData.nodeIndex = index;
      node.userData.core = core;
      node.userData.halo = halo;
      node.userData.orbit = orbit;
      node.userData.label = label;
      flow.add(node);
      return node;
    });

    const particles = Array.from({ length: 22 }, (_, index) => {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(index % 4 === 0 ? .075 : .035, 8, 8),
        new THREE.MeshBasicMaterial({ color: index % 4 === 0 ? accent : ink, transparent: true, opacity: index % 4 === 0 ? .95 : .36 })
      );
      particle.userData = { t: index / 22, offset: index * .37 };
      flow.add(particle);
      return particle;
    });

    const themeObserver = new MutationObserver(() => {
      const nextTheme = document.documentElement.dataset.theme === 'dark';
      if (nextTheme === isDark) return;
      isDark = nextTheme;
      labelSprites.forEach((sprite) => sprite.userData.redraw());
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const ambient = new THREE.AmbientLight(0xffffff, 1.8);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 4, 6);
    scene.add(ambient, keyLight);

    let frameId;
    let pointerX = 0;
    let pointerY = 0;
    let previousTime;
    let elapsed = 0;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const hitTargets = nodes.map((node) => node.userData.core);
    const nodeButtons = Array.from(container.querySelectorAll('[data-skill-node]'));
    const nodeBubbles = Array.from(container.querySelectorAll('[data-skill-bubble]'));
    const projectedPosition = new THREE.Vector3();
    let hoveredIndex = -1;
    let selectedIndex = -1;

    const syncActiveNode = () => {
      const activeIndex = hoveredIndex >= 0 ? hoveredIndex : selectedIndex;
      nodes.forEach((node, index) => { node.userData.active = index === hoveredIndex || index === selectedIndex; });
      container.dataset.activeNode = activeIndex >= 0 ? String(activeIndex) : '';
      nodeButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === selectedIndex)));
    };

    const updateOverlayPositions = () => {
      const { width, height } = container.getBoundingClientRect();
      scene.updateMatrixWorld(true);
      camera.updateMatrixWorld(true);
      nodes.forEach((node, index) => {
        node.getWorldPosition(projectedPosition);
        projectedPosition.project(camera);
        const x = (projectedPosition.x * .5 + .5) * width;
        const y = (-projectedPosition.y * .5 + .5) * height;
        [nodeButtons[index], nodeBubbles[index]].forEach((element) => {
          if (!element) return;
          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
        });
      });
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const safeWidth = Math.max(width, 1);
      const safeHeight = Math.max(height, 1);
      const narrow = safeWidth < 600;
      camera.aspect = safeWidth / safeHeight;
      camera.position.z = narrow ? 14.3 : 13.5;
      flow.scale.x = narrow ? .78 : 1;
      camera.updateProjectionMatrix();
      renderer.setSize(safeWidth, safeHeight, false);
      updateOverlayPositions();
    };

    const render = (time) => {
      const delta = previousTime === undefined ? .016 : Math.min(Math.max((time - previousTime) / 1000, 0), .05);
      previousTime = time;
      elapsed += delta;
      flow.rotation.y = Math.sin(elapsed * .18) * .08;
      flow.rotation.x = THREE.MathUtils.lerp(flow.rotation.x, pointerY * .045, .04);
      flow.rotation.z = THREE.MathUtils.lerp(flow.rotation.z, pointerX * .025, .04);
      particles.forEach((particle) => {
        const particleT = Number.isFinite(particle.userData?.t) ? particle.userData.t : 0;
        const nextT = (particleT + elapsed * .035) % 1;
        const point = path.getPointAt(Math.min(.999999, Math.max(0, nextT)));
        particle.position.copy(point);
        particle.position.z += Math.sin(elapsed * 1.6 + particle.userData.offset) * .16;
        const pulse = .82 + Math.sin(elapsed * 3 + particle.userData.offset) * .18;
        particle.scale.setScalar(pulse);
      });
      nodes.forEach((node, index) => {
        const active = node.userData.active;
        const pulse = (1 + Math.sin(elapsed * 1.65 + node.userData.phase) * .055) * (active ? 1.34 : 1);
        node.scale.setScalar(pulse);
        node.position.y = node.userData.baseY + Math.sin(elapsed * 1.15 + node.userData.phase) * .08;
        node.rotation.y = elapsed * (.24 + index * .05) * (index % 2 ? -1 : 1);
        node.userData.halo.rotation.z += delta * (active ? .8 : .18);
        node.userData.orbit.rotation.z += delta * (active ? 1.1 : .26);
        node.userData.orbit.rotation.x += delta * (active ? .24 : .06);
        node.userData.halo.scale.setScalar(active ? 1.18 : 1);
        node.userData.orbit.material.opacity = active ? .95 : .65;
        node.userData.halo.material.opacity = active ? .95 : .62;
        node.userData.core.material.emissiveIntensity = active ? .75 : .2;
        const coreColor = index === 1 ? '#171816' : active ? '#df684c' : '#c9573e';
        node.userData.core.material.color.set(coreColor);
        node.userData.core.material.emissive.set(coreColor);
        if (node.userData.label) {
          node.userData.label.material.opacity = active ? 1 : .78;
          node.userData.label.material.color.set(active ? '#c9573e' : '#ffffff');
          node.userData.label.scale.set(active ? 2.5 : 2.25, active ? .62 : .56, 1);
        }
      });
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointerX * .25, .035);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, .15 + pointerY * .16, .035);
      camera.lookAt(0, 0, 0);
      updateOverlayPositions();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    const handlePointer = (event) => {
      const bounds = container.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - .5) * -2;
      pointer.set(pointerX, pointerY);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(hitTargets, false)[0];
      hoveredIndex = hit ? hit.object.userData.nodeIndex : -1;
      syncActiveNode();
      container.style.cursor = hoveredIndex >= 0 ? 'pointer' : 'default';
    };
    const handleClick = (event) => {
      const bounds = container.getBoundingClientRect();
      const clickX = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      const clickY = ((event.clientY - bounds.top) / bounds.height - .5) * -2;
      pointer.set(clickX, clickY);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(hitTargets, false)[0];
      hoveredIndex = hit ? hit.object.userData.nodeIndex : -1;
      if (hoveredIndex >= 0) selectedIndex = selectedIndex === hoveredIndex ? -1 : hoveredIndex;
      syncActiveNode();
    };
    const clearSelection = () => {
      selectedIndex = -1;
      hoveredIndex = -1;
      syncActiveNode();
      container.style.cursor = 'default';
    };
    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      hoveredIndex = -1;
      syncActiveNode();
      container.style.cursor = 'default';
    };
    const nodeButtonCleanups = nodeButtons.map((button, index) => {
      const activate = () => { hoveredIndex = index; syncActiveNode(); };
      const deactivate = () => { hoveredIndex = -1; syncActiveNode(); };
      const toggle = (event) => {
        event.stopPropagation();
        selectedIndex = selectedIndex === index ? -1 : index;
        hoveredIndex = index;
        syncActiveNode();
      };
      button.addEventListener('pointerenter', activate);
      button.addEventListener('pointerleave', deactivate);
      button.addEventListener('focus', activate);
      button.addEventListener('blur', deactivate);
      button.addEventListener('click', toggle);
      return () => {
        button.removeEventListener('pointerenter', activate);
        button.removeEventListener('pointerleave', deactivate);
        button.removeEventListener('focus', activate);
        button.removeEventListener('blur', deactivate);
        button.removeEventListener('click', toggle);
      };
    });
    const handleDocumentPointerDown = (event) => {
      if (!container.contains(event.target)) clearSelection();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    container.addEventListener('pointermove', handlePointer);
    container.addEventListener('click', handleClick);
    container.addEventListener('pointerleave', resetPointer);
    document.addEventListener('pointerdown', handleDocumentPointerDown);
    resize();
    if (reduce) {
      renderer.render(scene, camera);
    } else {
      frameId = window.requestAnimationFrame(render);
    }

    disposeThree = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointer);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('pointerleave', resetPointer);
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
      nodeButtonCleanups.forEach((cleanup) => cleanup());
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => { material.map?.dispose(); material.dispose(); });
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
    };

    const startWhenNear = () => {
      startThree().catch(() => {
        if (!cancelled) container.dataset.threeState = 'fallback';
      });
    };
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        startWhenNear();
      }, { rootMargin: '480px 0px' });
      observer.observe(container);
    } else {
      startWhenNear();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      disposeThree();
    };
  }, [reduce]);

  return <div className="skill-flow-canvas" ref={containerRef} role="group" aria-label="Interactive 3D flow connecting Design, Develop and Deliver" data-three-state="idle">
    {skillFlowNodes.map(({ word, caption }, index) => <React.Fragment key={word}>
      <button className="skill-flow-node-hit" data-skill-node={index} type="button" aria-label={`${word}: ${caption}`} aria-describedby={`skill-flow-bubble-${index}`} aria-pressed="false" />
      <span className="skill-flow-bubble" data-skill-bubble={index} data-node={index} id={`skill-flow-bubble-${index}`}>
        <span className="skill-flow-bubble-label">{word}</span>
        <span className="skill-flow-bubble-type">{caption}</span>
      </span>
    </React.Fragment>)}
    <span className="skill-flow-fallback">Design → Develop → Deliver</span>
  </div>;
}

function SkillBlocks() {
  return <section id="skills" className="section-pad skill-blocks"><div className="page-shell">
    <div className="skill-flow-layout"><Reveal className="skill-flow-copy"><div className="section-heading section-heading-stacked"><span className="skill-flow-eyebrow">The way I work</span><h2><span>Design</span><span>Develop</span><span>Deliver</span></h2><p>One connected flow from a sharp idea to a useful, finished experience.</p></div></Reveal><Reveal className="skill-flow-visual" delay={.08}><ThreeSkillFlow /></Reveal></div>

    <Reveal className="skills-directory">
      <section className="skills-compact-board" aria-label="Skills">
        <div className="skills-compact-core">{primarySkills.map((skill) =>
          <Link className="skill-compact-core-link" key={skill.slug} to={`/skills/${skill.slug}`}>
            <div className="skill-compact-core-copy"><h4>{withoutTrailingPeriod(skill.title)}</h4><p>{skill.short}</p></div>
            <SkillToolMotion skill={skill} />
            <ArrowUpRight className="skill-compact-arrow" size={20} />
          </Link>
        )}</div>
        <div className="skills-compact-supporting">
          <span className="skills-compact-support-label">Supporting skills</span>
          <div className="skills-compact-support-list">{supportingSkills.map((skill) =>
            <Link className="skill-compact-support-link" key={skill.slug} to={`/skills/${skill.slug}`}>
              <h4>{withoutTrailingPeriod(skill.title)}</h4>
              <ArrowUpRight className="skill-compact-arrow" size={17} />
            </Link>
          )}</div>
        </div>
      </section>
    </Reveal>
  </div></section>;
}

function Experiments() {
  const [activeExperiment, setActiveExperiment] = useState(0);
  const [autoPaused, setAutoPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeProject = experiments[activeExperiment];

  useEffect(() => {
    if (reduceMotion || autoPaused) return undefined;
    const timer = window.setTimeout(() => {
      setActiveExperiment((current) => (current + 1) % experiments.length);
    }, 6800);
    return () => window.clearTimeout(timer);
  }, [activeExperiment, autoPaused, reduceMotion]);

  return <section id="experiments" className="section-pad experiments-section"><div className="page-shell">
    <Reveal><header className="experiments-heading"><div><h2>Experiments</h2><p>Small tools, tested in real workflows.</p></div><a className="experiments-github" href="https://github.com/HyyAnk" target="_blank" rel="noreferrer">View GitHub</a></header></Reveal>
    <div className={`experiments-stage ${autoPaused ? 'is-paused' : ''}`}>
      <div className="experiments-grid" role="list" aria-label="Experiment projects">{experiments.map((project, index) => <Reveal className="experiment-card" key={project.slug} delay={index * .045}>
        <button className={`experiment-selector ${activeExperiment === index ? 'is-active' : ''}`} type="button" aria-pressed={activeExperiment === index} onClick={() => setActiveExperiment(index)} onMouseEnter={() => setAutoPaused(true)} onMouseLeave={() => setAutoPaused(false)} onFocus={() => { setActiveExperiment(index); setAutoPaused(true); }} onBlur={() => setAutoPaused(false)}>
          <span className="experiment-card-head"><ExperimentMark slug={project.slug} /><span className="experiment-card-label">{project.label}</span></span>
          <h3>{withoutTrailingPeriod(project.title)}</h3>
          <p>{project.description}</p>
        </button>
      </Reveal>)}</div>
      <Reveal className="experiments-preview-wrap" delay={.1}>
        <a className="experiments-preview" href={activeProject.live || activeProject.repo} target="_blank" rel="noreferrer" aria-label={`Open ${activeProject.title} ${activeProject.live ? 'live demo' : 'source code'}`} onMouseEnter={() => setAutoPaused(true)} onMouseLeave={() => setAutoPaused(false)} onFocus={() => setAutoPaused(true)} onBlur={() => setAutoPaused(false)}>
          <div className="experiments-stack" aria-hidden="true">{experiments.map((project, index) => {
            const position = (index - activeExperiment + experiments.length) % experiments.length;
            return <figure className={`experiment-preview-frame is-position-${position}`} key={project.slug}><img className="experiment-preview-image" src={project.image} alt="" /></figure>;
          })}</div>
          <span className={`experiments-preview-caption is-${activeProject.slug}`} key={activeProject.slug}>
            <span className="experiments-preview-progress" aria-hidden="true" />
            <span className="experiments-preview-identity"><ExperimentMark slug={activeProject.slug} /><span className="experiments-preview-copy"><strong>{activeProject.title}</strong><small>{activeProject.live ? 'Open live project' : 'View source code'}</small></span></span>
            <span className="experiments-preview-percent" aria-hidden="true" />
          </span>
        </a>
      </Reveal>
    </div>
  </div></section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const orderedContacts = ['gmail', 'telegram', 'x', 'zalo', 'github'].map((key) => contactLinks.find((item) => item.key === key));
  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const contactContent = ({ key, label, value }) => <>
    <span className="contact-channel-top">
      <span className={`contact-channel-icon contact-channel-icon-${key}`} aria-hidden="true"><BrandIcon name={key} /></span>
      <span className={`contact-channel-meta ${key === 'gmail' ? 'contact-channel-copy-label' : ''}`}>{key === 'gmail' ? (copied ? 'Copied' : 'Copy') : value}</span>
    </span>
    <span className="contact-channel-copy"><strong>{label}</strong>{key === 'gmail' && <span>{copied ? 'Copied to clipboard' : value}</span>}</span>
  </>;

  return <section id="contact" className="contact-section section-pad"><div className="page-shell contact-grid"><Reveal className="contact-intro"><span className="contact-kicker">Start a conversation</span><h2>Bring me the complicated part</h2><p className="large-copy"><span>Tell me what needs to become clearer.</span>{' '}<span>I usually reply within two working days.</span></p></Reveal><Reveal className="contact-side" delay={.08}><div className="contact-directory" role="group" aria-label="Contact HyyAnk">{orderedContacts.map((contact) => {
    if (contact.key === 'gmail') return <button className={`contact-channel contact-channel-${contact.key} contact-channel-primary ${copied ? 'is-copied' : ''}`} key={contact.key} type="button" onClick={copyEmail} aria-label={copied ? `Copied ${email} to clipboard` : `Copy ${email}`} aria-live="polite">{contactContent(contact)}</button>;
    return <a className={`contact-channel contact-channel-${contact.key}`} key={contact.key} href={contact.href} target="_blank" rel="noreferrer" aria-label={`Open ${contact.label}: ${contact.value}`}>{contactContent(contact)}</a>;
  })}</div></Reveal></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="page-shell footer-inner"><span>{person} - {fullName}</span><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to top <ArrowUpRight size={15} /></a></div></footer>;
}

function RouteLoading({ label = 'Loading page' }) {
  return <section className="route-loading section-pad" role="status" aria-live="polite"><div className="page-shell route-loading-inner"><span className="eyebrow">{label}</span><span className="route-loading-line" /><span className="route-loading-line route-loading-line-short" /></div></section>;
}

function Home() {
  usePageMeta(seoByPath['/']);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content"><div id="top"><Hero /></div><WorkCarousel /><About /><SkillBlocks /><Experiments /><Contact /></main><Footer /></>;
}

function ProjectPage({ work }) {
  usePageMeta(seoByPath[`/work/${work.slug}`]);
  if (work.deep) {
    const isShowcaseCase = work.slug === 'folded-matter' || work.slug === 'still-moving';
    return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className={`project-page-deep project-page-${work.slug}`}><Suspense fallback={<RouteLoading label={`Loading ${work.title}`} />}>{isShowcaseCase ? <ShowcaseCaseStudy work={work}/> : <DeepCaseStudy work={work} />}</Suspense><Contact /></main><Footer /></>;
  }
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className="project-page">
    <section className="project-hero section-pad">
      <div className="page-shell"><Reveal><Link className="project-back" to="/#selected-works"><ArrowLeft size={16} /> Selected works</Link><div className="project-heading"><div><span className="eyebrow">{work.type} · {work.year}</span><h1>{withoutTrailingPeriod(work.title)}</h1></div><p>{work.description}</p></div></Reveal><Reveal className="project-cover" delay={.08}><img src={work.image} alt={`${work.title} case study cover`} /></Reveal></div>
    </section>
    <section className="project-story section-pad"><div className="page-shell project-story-grid"><Reveal><span className="eyebrow">Role</span><p className="project-role">{work.role}</p><div className="tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></Reveal><Reveal className="project-narrative" delay={.08}><article><span className="eyebrow">The challenge</span><h2>{withoutTrailingPeriod(work.challenge)}</h2></article><article><span className="eyebrow">The direction</span><p className="large-copy">{work.outcome}</p></article><p className="project-disclosure">This is a self-initiated portfolio study. The imagery was art-directed for this website to communicate the intended system and craft.</p></Reveal></div></section>
    <Contact />
  </main><Footer /></>;
}

function SkillPage({ skill }) {
  usePageMeta(seoByPath[`/skills/${skill.slug}`]);
  const related = works.filter((work) => work.tags.some((tag) => skill.tools.some((tool) => tag.toLowerCase().includes(tool.split(' ')[0].toLowerCase()))));
  const gallery = [skill.image, ...(related.length ? related.map((item) => item.image) : [uiImage, graphicImage])].slice(0, 3);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className={`skill-page skill-page-${skill.slug}`}><Suspense fallback={<RouteLoading label={`Loading ${skill.title}`} />}><SkillPageContent skill={skill} gallery={gallery} Reveal={Reveal} /></Suspense><Contact /></main><Footer /></>;
}

function NotFound() {
  const location = useLocation();
  usePageMeta({ ...notFoundSeo, path: location.pathname });
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className="not-found-page"><section className="not-found section-pad"><div className="page-shell not-found-grid"><div><span className="eyebrow">Error / 404</span><h1>Lost path</h1></div><div className="not-found-copy"><p className="large-copy">This page is not part of the current portfolio. The selected work is still close by.</p><Link className="button button-dark" to="/#selected-works">Return to selected work <ArrowUpRight size={18} /></Link></div></div></section></main><Footer /></>;
}

function App() {
  return <><RouteScrollManager /><Routes><Route path="/" element={<Home />} />{works.map((work) => <Route key={work.slug} path={`/work/${work.slug}`} element={<ProjectPage work={work} />} />)}{skills.map((skill) => <Route key={skill.slug} path={`/skills/${skill.slug}`} element={<SkillPage skill={skill} />} />)}<Route path="*" element={<NotFound />} /></Routes></>;
}

export default App;
