export const siteIdentity = {
  name: 'HyyAnk',
  fullName: 'Dư Ngọc Minh Hoàng',
  defaultUrl: 'https://portfolio-navy-iota-86.vercel.app',
  email: 'dungocminhhoang@gmail.com',
  locale: 'en_US',
};

const route = (path, title, description, ogSource, kind = 'website') => ({
  path,
  title,
  description,
  ogSource,
  kind,
});

export const seoRoutes = [
  route(
    '/',
    'HyyAnk - Designer and Developer',
    'HyyAnk (Dư Ngọc Minh Hoàng) is a multidisciplinary designer and developer creating clear, thoughtful digital work.',
    'src/assets/case-studies/mat-cover.webp',
    'profile',
  ),
  route('/work/mat', 'MÁT - HyyAnk', 'A heat-aware route planner that helps people choose a kinder path through hot, dense cities.', 'src/assets/case-studies/mat-cover.webp', 'article'),
  route('/work/folded-matter', 'VỤN - HyyAnk', 'An original identity system for a circular-material studio, spanning samples, packaging, space and digital catalogue.', 'src/assets/case-studies/vun-cover.webp', 'article'),
  route('/work/still-moving', 'TRỤC - HyyAnk', 'An original 112-page bilingual corporate profile system for climate-resilient infrastructure.', 'src/assets/case-studies/truc-cover.webp', 'article'),
  route('/work/kitepay', 'KitePay - HyyAnk', 'A milestone escrow that makes scope, payment state and on-chain evidence clear to both sides.', 'src/assets/case-studies/kitepay-cover.webp', 'article'),
  route('/skills/graphic-design', 'Graphic Design - HyyAnk', 'Identity, editorial and campaign systems that make an idea legible before anyone reads the details.', 'src/assets/generated/work-graphic.webp'),
  route('/skills/video-editor', 'Video Editor - HyyAnk', 'Editing, motion, sound and title design shaped into clear stories with an honest rhythm.', 'src/assets/generated/work-video.webp'),
  route('/skills/uiux-webdev', 'Web Design - HyyAnk', 'Responsive product design and React implementation where the visual idea survives the interaction.', 'src/assets/generated/work-ui.webp'),
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
