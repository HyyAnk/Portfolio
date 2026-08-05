export const siteIdentity = {
  name: 'HyyAnk',
  fullName: 'Dư Ngọc Minh Hoàng',
  defaultUrl: 'https://portfolio-navy-iota-86.vercel.app',
  email: 'dungocminhhoang@gmail.com',
  locale: 'en_US',
};

const route = (path, title, description, ogSource, kind = 'website', ogImage = {}) => ({
  path,
  title,
  description,
  ogSource,
  kind,
  ...ogImage,
});

export const seoRoutes = [
  route(
    '/',
    'HyyAnk - Graphic and Web Designer',
    'Graphic and web design by HyyAnk (Dư Ngọc Minh Hoàng), supported by video editing, automation and blockchain integration.',
    'public/og-home-20260805.png',
    'profile',
    {
      ogAlt: 'Screenshot of the HyyAnk portfolio homepage',
      ogWidth: 1200,
      ogHeight: 630,
      ogMimeType: 'image/png',
    },
  ),
  route('/work/portfolio-1', 'HAI LONG Presentation - HyyAnk', 'A 43-slide English corporate construction presentation covering company credentials, production capability, completed projects and HSE.', 'src/assets/case-studies/hailong-cover.webp', 'article'),
  route('/work/portfolio-2', 'Vietravel Business Report - HyyAnk', 'A visual-first 54-slide presentation design case study built with fictionalized business data for confidentiality.', 'src/assets/case-studies/vietravel-portfolio-cover.webp', 'article'),
  route('/work/portfolio-3', 'VỤN - HyyAnk', 'An original identity system for a circular-material studio, spanning samples, packaging, space and digital catalogue.', 'src/assets/case-studies/vun-cover.webp', 'article'),
  route('/work/portfolio-4', 'HUAXINSHENG - HyyAnk', 'A 24-page Vietnamese company catalogue for welded steel mesh, covering company capability, production, engineering standards, applications and projects.', 'src/assets/case-studies/hxs-home-cover.webp', 'article'),
  route('/work/portfolio-5', 'TAIYO TOURIST Envelope - HyyAnk', 'A three-format branded envelope and travel-document handover system for Taiyo Tourist, including artwork, print construction and physical mockups.', 'src/assets/case-studies/taiyo-cover.webp', 'article'),
  route('/work/portfolio-6', 'ATTEST Product Passport - HyyAnk', 'An on-chain product passport for collectible design objects, connecting NFC anchors, typed signatures, ERC-721 ownership, IPFS metadata and transaction receipts.', 'src/assets/case-studies/attest-cover.webp', 'article'),
  route('/skills/graphic-design', 'Graphic Design - HyyAnk', 'Identity, editorial and campaign systems that make an idea legible before anyone reads the details.', 'src/assets/generated/work-graphic.webp'),
  route('/skills/uiux-webdev', 'Web Design - HyyAnk', 'Responsive product design and React implementation where the visual idea survives the interaction.', 'src/assets/generated/work-ui.webp'),
  route('/skills/video-editor', 'Video Editor - HyyAnk', 'Editing, motion, sound and title design shaped into clear stories with an honest rhythm.', 'src/assets/generated/work-video.webp'),
  route('/skills/automation', 'Automation - HyyAnk', 'Dependable workflow, API and operations automation that removes repetitive work without hiding the system.', 'src/assets/generated/work-automation.webp'),
  route('/skills/blockchain', 'Blockchain Integration - HyyAnk', 'Wallet, smart-contract and on-chain product experiences that make trust and transaction state understandable.', 'src/assets/generated/work-blockchain.webp'),
];

export const seoByPath = Object.fromEntries(seoRoutes.map((entry) => [entry.path, entry]));

export const notFoundSeo = {
  path: '/404',
  title: 'Page not found - HyyAnk',
  description: 'The page you requested could not be found. Return to HyyAnk’s portfolio and capabilities.',
  kind: 'website',
  noindex: true,
};
