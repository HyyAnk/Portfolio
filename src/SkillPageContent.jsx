import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

import { withoutTrailingPeriod } from './text.js';

function ArrowLink({ children, to = '#contact' }) {
  return <a className="arrow-link" href={to}>{children}<ArrowUpRight size={17} /></a>;
}

export default function SkillPageContent({ skill, gallery, Reveal }) {
  return <>
    <section className="skill-page-hero section-pad">
      <div className="page-shell skill-page-hero-grid">
        <Reveal><h1>{withoutTrailingPeriod(skill.title)}</h1><p className="large-copy">{skill.short}</p><p>{skill.body}</p><ArrowLink to="#capabilities">Explore capabilities</ArrowLink></Reveal>
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
  </>;
}
