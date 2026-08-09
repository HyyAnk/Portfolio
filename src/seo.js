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

const baseSeoRoutes = [
  route(
    '/',
    'HyyAnk - Graphic and Web Designer',
    'Graphic and web design by HyyAnk (Dư Ngọc Minh Hoàng), supported by video editing, automation and blockchain integration.',
    'public/og-home-20260806.png',
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
  route('/work/portfolio-6', 'ECHO Blockchain Ticketing - HyyAnk', 'A visual-first blockchain ticketing case study spanning naming, identity, ticket transfer, venue check-in and attendance records.', 'src/assets/case-studies/echo-hero.webp', 'article'),
  route('/skills/graphic-design', 'Graphic Design - HyyAnk', 'Identity, editorial and campaign systems that make an idea legible before anyone reads the details.', 'src/assets/generated/work-graphic.webp'),
  route('/skills/uiux-webdev', 'Web Design - HyyAnk', 'Responsive product design and React implementation where the visual idea survives the interaction.', 'src/assets/generated/work-ui.webp'),
  route('/skills/video-editor', 'Video Editor - HyyAnk', 'Editing, motion, sound and title design shaped into clear stories with an honest rhythm.', 'src/assets/generated/work-video.webp'),
  route('/skills/automation', 'Automation - HyyAnk', 'Dependable workflow, API and operations automation that removes repetitive work without hiding the system.', 'src/assets/generated/work-automation.webp'),
  route('/skills/blockchain', 'Blockchain Integration - HyyAnk', 'Wallet, smart-contract and on-chain product experiences that make trust and transaction state understandable.', 'src/assets/generated/work-blockchain.webp'),
];

const localizedSeoCopy = {
  vi: {
    '/': {
      title: 'HyyAnk - Thiết kế đồ họa và web',
      description: 'Portfolio thiết kế đồ họa và web của HyyAnk (Dư Ngọc Minh Hoàng), kết hợp video editing, automation và tích hợp blockchain.',
    },
    '/work/portfolio-1': {
      title: 'HAI LONG Presentation - HyyAnk',
      description: 'Bộ presentation doanh nghiệp 43 trang bằng tiếng Anh cho HAI LONG, giới thiệu năng lực, sản xuất, dự án đã hoàn thành và HSE.',
    },
    '/work/portfolio-2': {
      title: 'Vietravel Business Report - HyyAnk',
      description: 'Case study thiết kế báo cáo kinh doanh 54 trang cho Vietravel, ưu tiên visual và sử dụng dữ liệu mô phỏng để bảo mật thông tin.',
    },
    '/work/portfolio-3': {
      title: 'VỤN - HyyAnk',
      description: 'Bộ nhận diện nguyên bản cho studio vật liệu tuần hoàn VỤN, trải dài từ mẫu vật liệu, bao bì và không gian đến catalogue số.',
    },
    '/work/portfolio-4': {
      title: 'HUAXINSHENG - HyyAnk',
      description: 'Catalogue doanh nghiệp 24 trang bằng tiếng Việt cho HUAXINSHENG, trình bày năng lực sản xuất lưới thép hàn, tiêu chuẩn kỹ thuật, ứng dụng và dự án.',
    },
    '/work/portfolio-5': {
      title: 'TAIYO TOURIST Envelope - HyyAnk',
      description: 'Hệ thống phong bì ba định dạng cho TAIYO TOURIST, từ thiết kế artwork và quy cách in đến mockup thành phẩm.',
    },
    '/work/portfolio-6': {
      title: 'ECHO - Thiết kế sản phẩm vé blockchain - HyyAnk',
      description: 'Dự án ECHO ưu tiên hình ảnh, từ đặt tên và nhận diện đến chuyển vé, kiểm vé tại cổng và dấu tham dự.',
    },
    '/skills/graphic-design': {
      title: 'Graphic Design - HyyAnk',
      description: 'Thiết kế identity, editorial và campaign giúp ý tưởng trở nên rõ ràng ngay cả trước khi người xem đọc phần chi tiết.',
    },
    '/skills/uiux-webdev': {
      title: 'Web Design - HyyAnk',
      description: 'Thiết kế sản phẩm responsive và phát triển bằng React, giữ trọn tinh thần visual trong từng tương tác.',
    },
    '/skills/video-editor': {
      title: 'Video Editor - HyyAnk',
      description: 'Dựng phim, motion, âm thanh và title design thành câu chuyện rõ ràng, có nhịp điệu tự nhiên.',
    },
    '/skills/automation': {
      title: 'Automation - HyyAnk',
      description: 'Xây dựng workflow, API và automation vận hành ổn định, giảm việc lặp lại mà vẫn giữ hệ thống minh bạch, dễ kiểm soát.',
    },
    '/skills/blockchain': {
      title: 'Blockchain Integration - HyyAnk',
      description: 'Thiết kế trải nghiệm wallet, smart contract và sản phẩm on-chain để người dùng dễ hiểu trạng thái giao dịch và yếu tố xác thực.',
    },
  },
  zh: {
    '/': {
      title: 'HyyAnk - 平面与网页设计师',
      description: 'HyyAnk（Dư Ngọc Minh Hoàng）的平面与网页设计 Portfolio，涵盖视频剪辑、自动化与区块链整合。',
    },
    '/work/portfolio-1': {
      title: 'HAI LONG Presentation - HyyAnk',
      description: '为 HAI LONG 设计的 43 页英文企业 presentation，清晰呈现公司资历、生产能力、完工项目与 HSE。',
    },
    '/work/portfolio-2': {
      title: 'Vietravel Business Report - HyyAnk',
      description: '为 Vietravel 打造的 54 页商业报告设计 case study，以 visual 为核心，并用模拟数据保护商业信息。',
    },
    '/work/portfolio-3': {
      title: 'VỤN - HyyAnk',
      description: '为循环材料工作室 VỤN 打造的原创品牌识别，覆盖材料样本、包装、空间与数字 catalogue。',
    },
    '/work/portfolio-4': {
      title: 'HUAXINSHENG - HyyAnk',
      description: '为 HUAXINSHENG 设计的 24 页越南语企业 catalogue，介绍焊接钢网的生产实力、工程标准、应用与项目。',
    },
    '/work/portfolio-5': {
      title: 'TAIYO TOURIST Envelope - HyyAnk',
      description: '为 TAIYO TOURIST 设计的三种规格品牌信封系统，涵盖 artwork、印刷结构与实物 mockup。',
    },
    '/work/portfolio-6': {
      title: 'ECHO 区块链票务产品设计 - HyyAnk',
      description: '以视觉为主线的 ECHO 区块链票务案例，涵盖命名、品牌识别、转票、入口验票与到场记录。',
    },
    '/skills/graphic-design': {
      title: 'Graphic Design - HyyAnk',
      description: '以 identity、editorial 与 campaign 设计，让创意在细节被阅读之前就清楚成立。',
    },
    '/skills/uiux-webdev': {
      title: 'Web Design - HyyAnk',
      description: '从 responsive 产品设计到 React 开发，让 visual 概念完整延续到每一次互动。',
    },
    '/skills/video-editor': {
      title: 'Video Editor - HyyAnk',
      description: '把剪辑、motion、声音与 title design 整合成节奏自然、表达清楚的故事。',
    },
    '/skills/automation': {
      title: 'Automation - HyyAnk',
      description: '打造稳定的 workflow、API 与运营自动化，减少重复工作，同时让系统保持透明、可控。',
    },
    '/skills/blockchain': {
      title: 'Blockchain Integration - HyyAnk',
      description: '设计 wallet、smart contract 与链上产品体验，让用户更容易理解验证方式与交易状态。',
    },
  },
};

export const seoRoutes = baseSeoRoutes.map((entry) => ({
  ...entry,
  locales: {
    en: { title: entry.title, description: entry.description },
    vi: localizedSeoCopy.vi[entry.path],
    zh: localizedSeoCopy.zh[entry.path],
  },
}));

export const seoByPath = Object.fromEntries(seoRoutes.map((entry) => [entry.path, entry]));

export const notFoundSeo = {
  path: '/404',
  title: 'Page not found - HyyAnk',
  description: 'The page you requested could not be found. Return to HyyAnk’s portfolio and capabilities.',
  kind: 'website',
  noindex: true,
};
