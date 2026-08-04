import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { seoRoutes, siteIdentity } from '../src/seo.js';

const startedAt = Date.now();
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const manifestPath = path.join(dist, '.vite', 'manifest.json');
const colorEnabled = Boolean(process.stdout.isTTY && !process.env.NO_COLOR);

const styles = {
  time: '\u001b[2m',
  info: '\u001b[36m',
  step: '\u001b[1;34m',
  success: '\u001b[32m',
  warning: '\u001b[33m',
  error: '\u001b[1;31m',
  reset: '\u001b[0m',
};

function paint(value, style) {
  return colorEnabled ? `${styles[style]}${value}${styles.reset}` : value;
}

function log(level, message, { step = 'build-seo', style = 'info' } = {}) {
  const timestamp = new Date().toISOString().slice(11, 19);
  process.stdout.write(`${paint(timestamp, 'time')} ${paint(`[${level}]`, style)} ${paint(`[STEP:${step}]`, 'step')} ${message}\n`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function normalizeSiteUrl() {
  const configured = process.env.SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  return (configured || (vercelUrl ? `https://${vercelUrl}` : siteIdentity.defaultUrl)).replace(/\/$/, '');
}

function resolveOgImage(manifest, source, siteUrl) {
  if (source.startsWith('public/')) {
    return `${siteUrl}/${source.slice('public/'.length)}`;
  }

  const entry = Object.values(manifest).find((item) => item.src === source);
  if (!entry?.file) {
    log('WARN', `Could not resolve ${source}; using the branded favicon as a fallback.`, { step: 'resolve-assets', style: 'warning' });
    return `${siteUrl}/deer-logo.svg`;
  }
  return `${siteUrl}/${entry.file}`;
}

function structuredData(route, canonical, image) {
  if (route.kind === 'profile') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteIdentity.fullName,
      alternateName: siteIdentity.name,
      url: canonical,
      image,
      email: `mailto:${siteIdentity.email}`,
      jobTitle: 'Designer and Developer',
      sameAs: [
        'https://github.com/HyyAnk',
        'https://x.com/0x_HyyAnk',
        'https://t.me/dungocminhhoang',
      ],
    };
  }

  if (route.kind === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: route.title.replace(` - ${siteIdentity.name}`, ''),
      description: route.description,
      url: canonical,
      image,
      creator: {
        '@type': 'Person',
        name: siteIdentity.fullName,
        alternateName: siteIdentity.name,
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: canonical,
    image,
    author: {
      '@type': 'Person',
      name: siteIdentity.fullName,
      alternateName: siteIdentity.name,
    },
  };
}

function createSeoBlock(route, siteUrl, image) {
  const canonical = `${siteUrl}${route.path === '/' ? '/' : route.path}`;
  const openGraphType = route.kind === 'article' ? 'article' : route.kind === 'profile' ? 'profile' : 'website';
  const jsonLd = JSON.stringify(structuredData(route, canonical, image)).replaceAll('<', '\\u003c');
  return `<!-- SEO:START -->
    <meta name="description" content="${escapeHtml(route.description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:type" content="${openGraphType}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:image:alt" content="${escapeHtml(`${route.title} portfolio preview`)}" />
    <meta property="og:locale" content="${siteIdentity.locale}" />
    <meta property="og:site_name" content="${siteIdentity.name}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    <script type="application/ld+json">${jsonLd}</script>
    <!-- SEO:END -->`;
}

function renderRouteHtml(baseHtml, route, siteUrl, image) {
  const title = `<title>${escapeHtml(route.title)}</title>`;
  const withTitle = baseHtml.replace(/<title>.*?<\/title>/s, title);
  return withTitle.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, createSeoBlock(route, siteUrl, image));
}

function renderNotFoundHtml(siteUrl) {
  const canonical = `${siteUrl}/404`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <meta name="theme-color" content="#f2f0ed" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="/deer-logo.svg" type="image/svg+xml" />
    <title>Page not found - HyyAnk</title>
    <style>
      :root{font-family:Arial,sans-serif;color:#111211;background:#f2f0ed}*{box-sizing:border-box}body{min-width:320px;margin:0}main{width:min(1120px,calc(100% - 40px));min-height:100dvh;margin:auto;display:grid;align-content:center;padding:64px 0}.mark{width:52px;height:52px;margin-bottom:64px}.code{color:#b94200;font-size:.72rem;font-weight:800;letter-spacing:.16em}.grid{display:grid;grid-template-columns:minmax(0,.65fr) minmax(300px,1fr);gap:64px;align-items:end}h1{max-width:7ch;margin:14px 0 0;font-size:clamp(4.8rem,13vw,10rem);line-height:.82;letter-spacing:-.075em}p{max-width:34ch;margin:0 0 28px;color:#686764;font-size:clamp(1.2rem,2.4vw,2rem);line-height:1.32}a{display:inline-flex;padding:14px 18px;border-radius:12px;background:#111211;color:#f2f0ed;font-size:.88rem;font-weight:700;text-decoration:none}@media(max-width:700px){main{align-content:start;padding-top:32px}.mark{margin-bottom:96px}.grid{grid-template-columns:1fr;gap:44px}h1{font-size:clamp(4.6rem,25vw,7rem)}}
    </style>
  </head>
  <body><main><img class="mark" src="/deer-logo.svg" alt="" /><div class="grid"><div><span class="code">ERROR / 404</span><h1>Lost path.</h1></div><div><p>This page is not part of the current portfolio. The portfolio is still close by.</p><a href="/#portfolio">Return to portfolio&nbsp; ↗</a></div></div></main></body>
</html>`;
}

async function writeRouteFile(route, html) {
  const target = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.path.slice(1)}.html`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, 'utf8');
}

async function main() {
  const siteUrl = normalizeSiteUrl();
  log('INFO', `Config: site=${siteUrl}, routes=${seoRoutes.length}, mode=static-shell, concurrency=1, automation=Node filesystem API`, { step: 'startup' });

  const [baseHtml, manifestRaw] = await Promise.all([
    readFile(path.join(dist, 'index.html'), 'utf8'),
    readFile(manifestPath, 'utf8'),
  ]);
  const manifest = JSON.parse(manifestRaw);
  let success = 0;
  let failed = 0;

  for (const route of seoRoutes) {
    try {
      const image = resolveOgImage(manifest, route.ogSource, siteUrl);
      await writeRouteFile(route, renderRouteHtml(baseHtml, route, siteUrl, image));
      success += 1;
      log('OK', `Generated ${route.path}`, { step: 'render-route', style: 'success' });
    } catch (error) {
      failed += 1;
      log('ERROR', `Failed ${route.path}: ${error.message}. Check the route metadata and Vite manifest entry.`, { step: 'render-route', style: 'error' });
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${seoRoutes.map((route) => `  <url><loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc><lastmod>${today}</lastmod><changefreq>${route.path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${route.path === '/' ? '1.0' : route.kind === 'article' ? '0.9' : '0.7'}</priority></url>`).join('\n')}\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

  await Promise.all([
    writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8'),
    writeFile(path.join(dist, 'robots.txt'), robots, 'utf8'),
    writeFile(path.join(dist, '404.html'), renderNotFoundHtml(siteUrl), 'utf8'),
  ]);
  log('OK', 'Generated sitemap.xml, robots.txt and branded 404.html', { step: 'site-files', style: 'success' });

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(2);
  log(failed ? 'WARN' : 'DONE', `Summary: total=${seoRoutes.length}, success=${success}, failed=${failed}, skipped=0, retries=0, elapsed=${elapsed}s`, { step: 'summary', style: failed ? 'warning' : 'success' });
  if (failed) process.exitCode = 1;
}

main().catch((error) => {
  log('ERROR', `${error.message}. Run npm run build again after checking dist/index.html and the Vite manifest.`, { step: 'fatal', style: 'error' });
  process.exitCode = 1;
});
