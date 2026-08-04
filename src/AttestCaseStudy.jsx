import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowUpRight, ArrowsLeftRight, CheckCircle, Code, Copy,
  Cube, Fingerprint, FlowArrow, LinkSimple, LockKey, PlugsConnected,
  Scan, Wallet,
} from '@phosphor-icons/react';

import attestCover from './assets/case-studies/attest-cover.webp';
import attestKit from './assets/case-studies/attest-kit.webp';
import attestMaker from './assets/case-studies/attest-maker.webp';
import attestScan from './assets/case-studies/attest-scan.webp';
import attestTransfer from './assets/case-studies/attest-transfer.webp';
import './attest-case.css';

const chainLayers = [
  { icon: Scan, label: 'Physical anchor', value: 'NFC UID' },
  { icon: Fingerprint, label: 'Typed consent', value: 'EIP-712' },
  { icon: Cube, label: 'Ownership', value: 'ERC-721' },
  { icon: LinkSimple, label: 'Metadata', value: 'IPFS CID' },
  { icon: Wallet, label: 'Controller', value: 'Owner wallet' },
];

const transferStates = [
  {
    key: 'wallet',
    label: 'Wallet',
    icon: Wallet,
    title: 'Connect the current owner',
    copy: 'The demo wallet resolves the object owner before any signature request is created.',
    button: 'Connect wallet',
    fields: [['Network', 'Sepolia'], ['Owner', '0x71c4...9a20'], ['Token', '#204']],
  },
  {
    key: 'consent',
    label: 'Typed consent',
    icon: Fingerprint,
    title: 'Read before signing',
    copy: 'EIP-712 exposes the object, recipient, chain and verifying contract as structured data.',
    button: 'Sign transfer',
    fields: [['Object', 'ARC-01'], ['Recipient', '0xb842...13f1'], ['Chain ID', '11155111']],
  },
  {
    key: 'contract',
    label: 'Contract call',
    icon: Code,
    title: 'Submit one contract call',
    copy: 'The signed attestation authorizes transfer while the interface keeps RPC and gas state visible.',
    button: 'Submit call',
    fields: [['Method', 'safeTransferFrom'], ['Contract', '0xA77e...7210'], ['Estimate', 'Demo only']],
  },
  {
    key: 'receipt',
    label: 'Receipt',
    icon: CheckCircle,
    title: 'Ownership confirmed',
    copy: 'The product state resolves from the emitted Transfer event and the indexed transaction receipt.',
    button: 'Restart demo',
    fields: [['Event', 'Transfer'], ['Status', 'Confirmed'], ['Receipt', '0xa91f...0de4']],
  },
];

function AttestMark({ className = '' }) {
  return <span className={`attest-mark ${className}`} aria-hidden="true"><i /></span>;
}

function AttestHeading({ title, copy }) {
  return <header className="attest-heading"><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

function AttestHero({ work }) {
  const facts = [
    ['Role', 'Product strategy / UX UI / smart contracts'],
    ['Network', 'Local Sepolia simulation'],
    ['Standards', 'ERC-721 / EIP-712 / ERC-2981'],
    ['Metadata', 'IPFS CID / NFC anchor'],
  ];

  return <section className="attest-hero">
    <div className="attest-shell">
      <Link className="attest-back" to="/#portfolio"><ArrowLeft size={16} /> Portfolio</Link>
      <div className="attest-hero-grid">
        <header className="attest-hero-copy">
          <span>Blockchain integration / product passport / 2026</span>
          <h1>{work.title}</h1>
          <p>On-chain passports that keep a collectible object, its maker and its owner connected</p>
          <a href="#live-demo">Run ownership transfer <ArrowUpRight size={17} /></a>
        </header>
        <figure className="attest-hero-visual">
          <img src={attestCover} alt="ATTEST on-chain product passport shown through a chrome collectible chair, NFC plate and verification phone" />
        </figure>
      </div>
      <div className="attest-hero-facts">
        <dl>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p>Self-initiated integration prototype. No production deployment is implied.</p>
      </div>
    </div>
  </section>;
}

function AttestIdentity() {
  return <section className="attest-section attest-identity-section">
    <div className="attest-shell">
      <AttestHeading title="Identity for verified objects" copy="A cold material system connects physical authentication with precise on-chain records" />
      <div className="attest-identity-board">
        <div className="attest-wordmark"><AttestMark /><strong>ATTEST</strong><span>Object passport / ownership protocol</span></div>
        <div className="attest-palette" aria-label="ATTEST color palette">
          <span style={{ '--swatch': '#CDED3B' }}><b>Proof lime</b><small>#CDED3B</small></span>
          <span style={{ '--swatch': '#F0F1ED' }}><b>Ledger white</b><small>#F0F1ED</small></span>
          <span style={{ '--swatch': '#8E9490' }}><b>Alloy grey</b><small>#8E9490</small></span>
          <span style={{ '--swatch': '#111313' }}><b>Contract black</b><small>#111313</small></span>
        </div>
        <div className="attest-type">
          <span>Space Grotesk / system mono</span>
          <strong>Aa</strong>
          <p>ARC-01 / TOKEN 204</p>
          <small>500 / 600 / 700</small>
        </div>
      </div>
    </div>
  </section>;
}

function AttestAnchor() {
  return <section className="attest-section attest-anchor-section">
    <div className="attest-shell">
      <AttestHeading title="The object enters the ledger" copy="A maker binds one NFC anchor to one product record before the object leaves the studio" />
      <div className="attest-anchor-layout">
        <figure><img src={attestMaker} alt="Maker fastening the ATTEST NFC anchor to a collectible chrome chair beside the onboarding interface" loading="lazy" /></figure>
        <div className="attest-anchor-proof">
          <AttestMark />
          <strong>ARC-01 LOUNGE</strong>
          <dl>
            <div><dt>Anchor</dt><dd>04:A7:91:2C</dd></div>
            <div><dt>Token</dt><dd>#204</dd></div>
            <div><dt>Metadata</dt><dd>bafy...r7m</dd></div>
          </dl>
          <span><CheckCircle size={18} weight="fill" /> Physical anchor registered</span>
        </div>
      </div>
    </div>
  </section>;
}

function AttestArchitecture() {
  return <section className="attest-section attest-architecture-section">
    <div className="attest-shell">
      <AttestHeading title="Every layer stays visible" copy="The integration separates physical proof, signing, ownership and metadata into inspectable states" />
      <div className="attest-layer-rail" aria-label="ATTEST blockchain integration architecture">
        <i className="attest-layer-track" aria-hidden="true" />
        {chainLayers.map((layer) => { const Icon = layer.icon; return <article key={layer.label}><Icon size={28} weight="duotone" /><span>{layer.label}</span><strong>{layer.value}</strong></article>; })}
      </div>
      <div className="attest-contract-layout">
        <div className="attest-contract-code">
          <header><Code size={18} /><span>AttestPassport.sol</span><small>Reference architecture</small></header>
          <pre><code><span>contract</span> AttestPassport <i>is</i> ERC721, ERC2981 {'{'}{`\n`}  mapping(bytes32 =&gt; uint256) anchorToToken;{`\n\n`}  <span>function</span> transferWithAttestation({`\n`}    Attestation calldata proof{`\n`}  ) external {'{'}{`\n`}    verifyTypedData(proof);{`\n`}    _safeTransfer(proof.from, proof.to, proof.tokenId, "");{`\n`}  {'}'}{`\n`}{'}'}</code></pre>
        </div>
        <div className="attest-contract-receipt">
          <div><Fingerprint size={30} weight="duotone" /><span>EIP-712</span><strong>Readable signature</strong></div>
          <div><Cube size={30} weight="duotone" /><span>ERC-721</span><strong>Unique ownership</strong></div>
          <div><LinkSimple size={30} weight="duotone" /><span>IPFS</span><strong>Content-addressed metadata</strong></div>
          <div><ArrowsLeftRight size={30} weight="duotone" /><span>ERC-2981</span><strong>Royalty information</strong></div>
        </div>
      </div>
    </div>
  </section>;
}

function PassportObjectScreen() {
  return <div className="attest-passport-object">
    <figure><img src={attestCover} alt="ARC-01 chrome lounge chair" loading="lazy" /></figure>
    <span><CheckCircle size={14} weight="fill" /> Verified object</span>
    <strong>ARC-01 LOUNGE</strong>
    <dl><div><dt>Token</dt><dd>#204</dd></div><div><dt>Owner</dt><dd>0x71c4...9a20</dd></div></dl>
  </div>;
}

function PassportHistoryScreen() {
  const events = [['Minted', 'Maker wallet'], ['Anchor bound', 'NFC 04:A7'], ['Metadata pinned', 'IPFS CID'], ['Transferred', 'Collector wallet']];
  return <div className="attest-passport-history"><strong>Provenance</strong><div>{events.map(([event, detail], index) => <span key={event} className={index === events.length - 1 ? 'is-current' : ''}><i /><b>{event}</b><small>{detail}</small></span>)}</div></div>;
}

function PassportOwnerScreen() {
  return <div className="attest-passport-owner">
    <Wallet size={30} weight="duotone" />
    <span>Current controller</span>
    <strong>0x71c4...9a20</strong>
    <div><small>Contract</small><code>0xA77e...7210</code></div>
    <div><small>Metadata</small><code>ipfs://bafy...r7m</code></div>
    <button type="button">Prepare transfer <FlowArrow size={17} /></button>
  </div>;
}

function AttestPassports() {
  const screens = [<PassportHistoryScreen key="history" />, <PassportObjectScreen key="object" />, <PassportOwnerScreen key="owner" />];
  return <section className="attest-section attest-passport-section">
    <div className="attest-shell">
      <AttestHeading title="The passport reads like a product" copy="Object identity, provenance and wallet ownership resolve inside one mobile system" />
      <div className="attest-phone-stage">{screens.map((screen, index) => <article className={`attest-phone is-${index + 1}`} key={index}><header><AttestMark /><b>ATTEST</b><small>SEPOLIA</small></header>{screen}<footer><span>{['History', 'Object', 'Owner'][index]}</span><i /></footer></article>)}</div>
    </div>
  </section>;
}

function AttestKit() {
  return <section className="attest-section attest-kit-section"><div className="attest-shell"><AttestHeading title="Authentication becomes physical" /><figure><img src={attestKit} alt="ATTEST physical authentication kit with NFC plate, certificate, tamper labels, packaging and verification phone" loading="lazy" /></figure></div></section>;
}

function AttestTransferDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = transferStates[activeIndex];
  const ActiveIcon = active.icon;
  const confirmed = activeIndex === transferStates.length - 1;
  const advance = () => setActiveIndex((current) => current === transferStates.length - 1 ? 0 : current + 1);

  return <section id="live-demo" className="attest-section attest-demo-section">
    <div className="attest-shell">
      <AttestHeading title="Run an ownership transfer" copy="A local simulation exposes the wallet, typed signature, contract call and receipt" />
      <div className={`attest-transfer-demo is-${active.key}`}>
        <nav aria-label="Ownership transfer states">{transferStates.map((state, index) => { const Icon = state.icon; return <button type="button" key={state.key} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)}><Icon size={18} /><span>{state.label}</span><i className={index <= activeIndex ? 'is-active' : ''} /></button>; })}</nav>
        <div className="attest-demo-stage">
          <article className="attest-demo-action" key={active.key}>
            <ActiveIcon size={42} weight="duotone" />
            <span>Local integration prototype</span>
            <h3>{active.title}</h3>
            <p>{active.copy}</p>
            <dl>{active.fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <button type="button" onClick={advance}>{active.button} {confirmed ? <ArrowsLeftRight size={18} /> : <ArrowUpRight size={18} />}</button>
          </article>
          <aside className={`attest-demo-receipt ${confirmed ? 'is-confirmed' : ''}`}>
            <header><span>Transaction receipt</span>{confirmed ? <CheckCircle size={20} weight="fill" /> : <PlugsConnected size={20} />}</header>
            <div className="attest-receipt-mark"><AttestMark /><i /></div>
            <dl>
              <div><dt>Status</dt><dd>{confirmed ? 'Confirmed' : 'Waiting for receipt'}</dd></div>
              <div><dt>Method</dt><dd>safeTransferFrom</dd></div>
              <div><dt>Event</dt><dd>{confirmed ? 'Transfer' : 'Pending'}</dd></div>
              <div><dt>Hash</dt><dd>{confirmed ? '0xa91f...0de4' : 'Not submitted'}</dd></div>
            </dl>
            <small>Sample data / Sepolia simulation</small>
          </aside>
        </div>
      </div>
    </div>
  </section>;
}

function AttestScan() {
  return <section className="attest-section attest-scan-section"><div className="attest-shell"><AttestHeading title="Proof at the point of contact" /><figure><img src={attestScan} alt="Visitor scanning the ATTEST NFC anchor beside a collectible chair in a contemporary gallery" loading="lazy" /></figure></div></section>;
}

function AttestLedger() {
  const transactionHash = '0xa91f72c8b48ad5e2f12b8c9010de4';
  const [copied, setCopied] = useState(false);
  const events = [
    ['Transfer', '0x71c4...9a20', '0xb842...13f1'],
    ['MetadataUpdate', 'token #204', 'bafy...r7m'],
    ['RoyaltyInfo', 'creator 0x41d...', '5% reference'],
  ];
  const copyHash = async () => {
    try {
      await navigator.clipboard.writeText(transactionHash);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return <section className="attest-section attest-ledger-section">
    <div className="attest-shell">
      <AttestHeading title="The handover leaves a receipt" copy="The collector sees the object; the integration records the ownership event" />
      <div className="attest-ledger-layout">
        <figure><img src={attestTransfer} alt="ATTEST product passport ownership transfer for a collectible chrome lamp at an auction preview" loading="lazy" /></figure>
        <div className="attest-explorer">
          <header><div><AttestMark /><strong>ATTEST EXPLORER</strong></div><span>Sample transaction</span></header>
          <div className="attest-explorer-summary"><CheckCircle size={25} weight="fill" /><span>Transaction confirmed</span><code>0xa91f72c8...0de4</code><button type="button" aria-label={copied ? 'Sample transaction hash copied' : 'Copy sample transaction hash'} onClick={copyHash}>{copied ? <CheckCircle size={16} weight="fill" /> : <Copy size={16} />}</button></div>
          <dl><div><dt>Network</dt><dd>Sepolia</dd></div><div><dt>Contract</dt><dd>0xA77e...7210</dd></div><div><dt>Token</dt><dd>#204</dd></div></dl>
          <div className="attest-explorer-events">{events.map(([event, from, to]) => <article key={event}><Cube size={18} weight="duotone" /><strong>{event}</strong><code>{from}</code><FlowArrow size={15} /><code>{to}</code></article>)}</div>
        </div>
      </div>
    </div>
  </section>;
}

function AttestClose() {
  return <section className="attest-close"><div className="attest-shell"><AttestMark /><strong>ATTEST</strong><div><span>Physical anchor</span><span>Typed signature</span><span>Smart contract</span><span>Transaction receipt</span></div><p>Self-initiated product and integration prototype</p></div></section>;
}

export function AttestCaseStudy({ work }) {
  return <article className="case-attest">
    <AttestHero work={work} />
    <AttestIdentity />
    <AttestAnchor />
    <AttestArchitecture />
    <AttestPassports />
    <AttestKit />
    <AttestTransferDemo />
    <AttestScan />
    <AttestLedger />
    <AttestClose />
  </article>;
}
