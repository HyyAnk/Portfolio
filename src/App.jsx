import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import * as THREE from 'three';
import {
  ArrowDownRight, ArrowLeft, ArrowUpRight, CaretDown, Check,
  Copy, EnvelopeSimple, GithubLogo, Moon, Sun, TelegramLogo, XLogo,
} from '@phosphor-icons/react';

import uiImage from './assets/generated/work-ui.webp';
import graphicImage from './assets/generated/work-graphic.webp';
import videoImage from './assets/generated/work-video.webp';
import automationImage from './assets/generated/work-automation.webp';
import blockchainImage from './assets/generated/work-blockchain.webp';
import portraitImage from './assets/generated/portrait.webp';
import playgroundLoop from './assets/generated/playground-loop.webp';
import playgroundType from './assets/generated/playground-type.webp';
import playgroundFins from './assets/generated/playground-fins.webp';
import foldedMatterImage from './assets/generated/case-folded-matter-v2.webp';
import stillMovingImage from './assets/generated/case-still-moving-v2.webp';
import matCover from './assets/case-studies/mat-cover.webp';
import kitepayCover from './assets/case-studies/kitepay-cover.webp';
import { DeepCaseStudy } from './caseStudies.jsx';

const person = 'HyyAnk';
const fullName = 'Dư Ngọc Minh Hoàng';
const email = 'dungocminhhoang@gmail.com';
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
  { slug: 'uiux-webdev', title: 'UI/UX and Web Dev', short: 'Interfaces that feel considered', body: 'I design and code responsive experiences where the visual idea survives the interaction', image: uiImage, variant: 'ui', tools: ['Product design', 'React', 'Systems'], details: ['UX flows and product structure', 'Responsive design systems', 'React implementation', 'Interaction and interface motion'] },
  { slug: 'automation', title: 'Automation', short: 'The quiet work behind the work', body: 'I connect the small steps that slow a team down and turn them into a dependable flow', image: automationImage, variant: 'automation', tools: ['Workflows', 'APIs', 'Operations'], details: ['Workflow architecture', 'API and webhook orchestration', 'Content and task automation', 'Operational clarity'] },
  { slug: 'blockchain', title: 'Blockchain Integration', short: 'Trust made tangible', body: 'I help teams use decentralised technology where it creates real ownership, not extra noise', image: blockchainImage, variant: 'blockchain', tools: ['Wallets', 'Onchain UX', 'Contracts'], details: ['Wallet and onboarding UX', 'Smart contract integration', 'Onchain transaction states', 'Trust and ownership design'] },
];

const works = [
  { slug: 'mat', title: 'MÁT', type: 'Web product · PWA', year: '2026', role: 'Product strategy · UX/UI · React', description: 'A heat-aware route planner that helps people choose a kinder path through hot, dense cities.', challenge: 'Most route planners optimize only time and distance, leaving heat exposure and recovery needs invisible.', outcome: 'A responsive routing concept that makes shade, heat, air quality and route trade-offs understandable.', tags: ['Product design', 'Web development'], image: matCover, deep: true },
  { slug: 'folded-matter', title: 'Folded Matter', type: 'Identity system', year: '2026', role: 'Art direction · Identity', description: 'A tactile identity for an exhibition exploring how material, place and memory shape one another.', challenge: 'The identity needed to hold together physical signage, editorial matter and digital announcements without losing its quiet character.', outcome: 'A modular system built from folds, circles and one warm signal colour, designed to change scale without changing voice.', tags: ['Art direction', 'Graphic design'], image: foldedMatterImage },
  { slug: 'still-moving', title: 'Still Moving', type: 'Title sequence', year: '2025', role: 'Editing · Motion direction', description: 'A restrained title language built from shadow, rhythm and a single line of moving light.', challenge: 'The sequence had to establish tension without competing with the film. Every transition needed to feel physical and intentional.', outcome: 'A modular motion grammar for titles, chapter cards and social cut-downs, paced around sound rather than spectacle.', tags: ['Editing', 'Motion design'], image: stillMovingImage },
  { slug: 'kitepay', title: 'KitePay', type: 'BSC application', year: '2026', role: 'Product design · Web3 integration', description: 'A milestone escrow that makes scope, payment state and on-chain evidence clear to both sides.', challenge: 'Freelancers and clients need a shared payment state without turning every agreement into a crypto puzzle.', outcome: 'A testnet-ready product concept pairing explicit escrow states with human-readable transaction receipts.', tags: ['Blockchain', 'React'], image: kitepayCover, deep: true },
];

const heroCarouselImages = [
  { image: matCover, alt: 'MÁT heat-aware route planning concept' },
  { image: foldedMatterImage, alt: 'Folded Matter identity system arranged on paper' },
  { image: stillMovingImage, alt: 'Still Moving title sequence study' },
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
  'Animated motion path, shape morphing and layered composition',
  'Animated browser interaction with hover, settings and theme controls',
  'Animated terminal installing the HyyAnk design package',
  'Animated deployment pipeline progressing from source to live',
  'Animated wallet connection and blockchain transaction confirmation',
  'Animated cinematic editing timeline with colour grading controls',
  'Animated sound effects board with pads, waveform and mixer levels',
];
const configuredCarouselImages = Array.from({ length: 7 }, (_, index) => ({
  ...(heroCarouselImages[index]),
  image: customCarouselByIndex[index + 1] || heroCarouselImages[index].image,
  alt: customCarouselByIndex[index + 1] ? customCarouselAlts[index] : heroCarouselImages[index].alt,
}));

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
const revealTransition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] };

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
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
  const [brandOpen, setBrandOpen] = useState(false);
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
        setBrandOpen(false); setSkillsOpen(false); setContactOpen(false);
      }
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', close);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close); };
  }, []);
  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} ref={navRef}>
    <div className="nav-inner">
      <div className="wordmark-menu-wrap" onPointerEnter={() => setBrandOpen(true)} onPointerLeave={() => setBrandOpen(false)} onMouseEnter={() => setBrandOpen(true)} onMouseLeave={() => setBrandOpen(false)} onFocusCapture={() => setBrandOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setBrandOpen(false); }}>
        <Link className="wordmark" to="/" aria-label={person} aria-expanded={brandOpen} aria-haspopup="dialog" onClick={() => { setSkillsOpen(false); setContactOpen(false); }}><span className="wordmark-mark" aria-hidden="true"><img className="brand-logo-light" src="/deer-logo.svg" alt="" /><img className="brand-logo-dark" src="/deer-logo-white.svg" alt="" /></span><span>{person}</span></Link>
        <BrandDropdown />
      </div>
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

function BrandDropdown() {
  return <div className="dropdown brand-dropdown" role="dialog" aria-label="About HyyAnk">
    <div className="brand-logo-panel" aria-hidden="true">
      <span className="brand-logo-orbit brand-logo-orbit-one" />
      <span className="brand-logo-orbit brand-logo-orbit-two" />
      <img className="brand-logo-light brand-dropdown-logo" src="/deer-logo.svg" alt="" />
      <img className="brand-logo-dark brand-dropdown-logo" src="/deer-logo-white.svg" alt="" />
    </div>
    <div className="brand-intro">
      <span className="brand-intro-kicker">HyyAnk</span>
      <div className="brand-typing" aria-label={`My name is ${fullName}`}>
        <span className="brand-typing-line brand-typing-greeting">My name is</span>
        <strong className="brand-typing-line brand-typing-name">{fullName}</strong>
      </div>
    </div>
  </div>;
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

function ArrowLink({ children, to = '#contact' }) {
  return <a className="arrow-link" href={to}>{children}<ArrowUpRight size={17} /></a>;
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
    <a className="button ready-cta" href="#contact" aria-label="Ready for yahh — go to contact options">
      <span className="ready-cta-label">Ready for yahh</span>
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

function Hero() {
  return <section className="hero section-pad">
    <div className="hero-sentinel" data-nav-sentinel="true" />
    <div className="page-shell hero-grid">
      <div className="hero-copy">
        <h1>{person}</h1>
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
  return <section id="selected-works" className="section-pad works-section"><div className="page-shell"><Reveal><div className="section-heading section-heading-stacked"><h2>Selected work</h2><p>Four self-initiated studies across product, identity, motion and systems.</p></div></Reveal><div className="work-gallery">{works.map((work, index) => <Reveal className={`work-card work-card-${index + 1}`} key={work.slug} delay={index * .05}><Link to={`/work/${work.slug}`} className="work-card-link" aria-label={`View ${work.title} project`}><figure className="work-card-image"><img src={work.image} alt={`${work.title} project visual`} loading={index > 1 ? 'lazy' : 'eager'} decoding="async" /><figcaption>View project <ArrowUpRight size={16} /></figcaption></figure><div className="work-card-kicker"><span>{String(index + 1).padStart(2, '0')} / 04</span><span>{work.deep ? 'Full case study' : 'Project study'}</span></div><div className="work-card-copy"><div><h3>{work.title}</h3><p>{work.description}</p></div><div className="work-card-meta"><span>{work.type}</span><span>{work.year}</span><ArrowUpRight size={20} /></div></div></Link></Reveal>)}</div></div></section>;
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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, .1, 100);
    camera.position.set(0, .15, 13.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

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

    return () => {
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
  }, [reduce]);

  return <div className="skill-flow-canvas" ref={containerRef} role="group" aria-label="Interactive 3D flow connecting Design, Develop and Deliver">
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
  return <section id="skills" className="section-pad skill-blocks"><div className="page-shell"><div className="skill-flow-layout"><Reveal className="skill-flow-copy"><div className="section-heading section-heading-stacked"><span className="skill-flow-eyebrow">The way I work</span><h2><span>Design</span><span>Develop</span><span>Deliver</span></h2><p>One connected flow from a sharp idea to a useful, finished experience.</p></div></Reveal><Reveal className="skill-flow-visual" delay={.08}><ThreeSkillFlow /></Reveal></div><div className="skills-index">{skills.map((skill, index) => <Reveal key={skill.slug} delay={index * .05}><Link className="skill-index-row" to={`/skills/${skill.slug}`}><span className="skill-index-title">{skill.title}</span><span className="skill-index-copy">{skill.short}</span><ArrowUpRight size={20} /></Link></Reveal>)}</div></div></section>;
}

function Playground() {
  const items = [{ image: playgroundLoop, title: 'Balance study', label: 'Form' }, { image: playgroundType, title: 'Letter as structure', label: 'Type' }, { image: playgroundFins, title: 'A quiet wave', label: 'Motion' }];
  return <section id="playground" className="section-pad playground-section"><div className="page-shell"><Reveal><div className="section-heading section-heading-stacked"><h2>Experiments</h2><p>Small studies in form, type and motion.</p></div></Reveal><div className="playground-grid">{items.map((item, index) => <Reveal className={`playground-item playground-${index + 1}`} key={item.title} delay={index * .08}><figure><div className="playground-image"><img src={item.image} alt={item.title} loading="lazy" /></div><figcaption><strong>{item.title}</strong><span>{item.label}</span></figcaption></figure></Reveal>)}</div></div></section>;
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
  return <footer className="site-footer"><div className="page-shell footer-inner"><span>{person}</span><span>Designing with care.</span><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to top <ArrowUpRight size={15} /></a></div></footer>;
}

function Home() {
  usePageMeta(`${person} - Designer and Developer`, `${person} (${fullName}) is a multidisciplinary designer and developer.`);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content"><div id="top"><Hero /></div><WorkCarousel /><About /><SkillBlocks /><Playground /><Contact /></main><Footer /></>;
}

function ProjectPage({ work }) {
  usePageMeta(`${work.title} - ${person}`, work.description);
  if (work.deep) return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className={`project-page-deep project-page-${work.slug}`}><DeepCaseStudy work={work} /><Contact /></main><Footer /></>;
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className="project-page">
    <section className="project-hero section-pad">
      <div className="page-shell"><Reveal><Link className="project-back" to="/#selected-works"><ArrowLeft size={16} /> Selected works</Link><div className="project-heading"><div><span className="eyebrow">{work.type} · {work.year}</span><h1>{work.title}</h1></div><p>{work.description}</p></div></Reveal><Reveal className="project-cover" delay={.08}><img src={work.image} alt={`${work.title} case study cover`} /></Reveal></div>
    </section>
    <section className="project-story section-pad"><div className="page-shell project-story-grid"><Reveal><span className="eyebrow">Role</span><p className="project-role">{work.role}</p><div className="tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></Reveal><Reveal className="project-narrative" delay={.08}><article><span className="eyebrow">The challenge</span><h2>{work.challenge.replace(/\.$/, '')}</h2></article><article><span className="eyebrow">The direction</span><p className="large-copy">{work.outcome}</p></article><p className="project-disclosure">This is a self-initiated portfolio study. The imagery was art-directed for this website to communicate the intended system and craft.</p></Reveal></div></section>
    <Contact />
  </main><Footer /></>;
}

function SkillPage({ skill }) {
  usePageMeta(`${skill.title} - ${person}`, skill.body);
  const related = works.filter((work) => work.tags.some((tag) => skill.tools.some((tool) => tag.toLowerCase().includes(tool.split(' ')[0].toLowerCase()))));
  const gallery = [skill.image, ...(related.length ? related.map((item) => item.image) : [uiImage, graphicImage])].slice(0, 3);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Nav /><main id="main-content" className="skill-page">
    <section className="skill-page-hero section-pad">
      <div className="page-shell skill-page-hero-grid">
        <Reveal><h1>{skill.title}</h1><p className="large-copy">{skill.short}</p><p>{skill.body}</p><ArrowLink to="#capabilities">Explore capabilities</ArrowLink></Reveal>
        <Reveal className="skill-page-hero-image" delay={.1}><img src={skill.image} alt={`${skill.title} practice visual`} /></Reveal>
      </div>
    </section>
    <section id="capabilities" className="section-pad capability-section">
      <div className="page-shell capability-layout"><Reveal><h2>What I bring</h2></Reveal><div className="capability-grid">{skill.details.map((detail, index) => <Reveal className="capability-item" key={detail} delay={index * .06}><span>{detail}</span></Reveal>)}</div></div>
    </section>
    <section id="skill-work" className="section-pad skill-work-section">
      <div className="page-shell"><Reveal><div className="section-heading"><h2>A closer look</h2><p>A few ways this practice becomes useful in the real world.</p></div></Reveal><div className="skill-gallery">{gallery.map((image, index) => <Reveal className={`gallery-item gallery-${index + 1}`} key={`${skill.slug}-${index}`} delay={index * .08}><figure><div className="skill-gallery-image"><img src={image} alt={`${skill.title} work sample ${index + 1}`} loading="lazy" /></div><figcaption>{['Primary direction', 'Process detail', 'Final expression'][index]}</figcaption></figure></Reveal>)}</div></div>
    </section>
    <section className="section-pad approach-section"><div className="page-shell approach-grid"><Reveal><h2>How I work</h2></Reveal><Reveal className="approach-copy" delay={.08}><p className="large-copy">Start with the question. Make the system visible. Then remove what does not help.</p><div className="approach-list"><span>Listen closely</span><span>Find the shape</span><span>Make it usable</span></div></Reveal></div></section>
    <section className="skill-tools-strip section-pad"><div className="page-shell"><Reveal><span className="tool-list-title">Tools in this practice</span><div className="tool-names large-tools">{skill.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></Reveal></div></section>
    <Contact />
  </main><Footer /></>;
}

function App() {
  return <><RouteScrollManager /><Routes><Route path="/" element={<Home />} />{works.map((work) => <Route key={work.slug} path={`/work/${work.slug}`} element={<ProjectPage work={work} />} />)}{skills.map((skill) => <Route key={skill.slug} path={`/skills/${skill.slug}`} element={<SkillPage skill={skill} />} />)}<Route path="*" element={<Home />} /></Routes></>;
}

export default App;
