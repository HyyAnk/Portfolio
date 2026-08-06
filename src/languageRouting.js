export const seoLanguages = [
  { code: 'en', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', prefix: '' },
  { code: 'vi', htmlLang: 'vi', hreflang: 'vi', ogLocale: 'vi_VN', prefix: '/vi' },
  { code: 'zh', htmlLang: 'zh-CN', hreflang: 'zh-Hans', ogLocale: 'zh_CN', prefix: '/zh' },
];

const languageCodes = new Set(seoLanguages.map(({ code }) => code));

export function normalizeLanguage(value) {
  const primary = String(value || '').trim().toLowerCase().split(/[-_]/u)[0];
  return languageCodes.has(primary) ? primary : 'en';
}

export function detectNavigatorLanguage(navigatorLike) {
  const preferences = navigatorLike?.languages?.length
    ? navigatorLike.languages
    : [navigatorLike?.language];
  for (const preference of preferences) {
    const language = normalizeLanguage(preference);
    if (language !== 'en' || /^en(?:[-_]|$)/iu.test(String(preference || ''))) return language;
  }
  return 'en';
}

export function languageFromPath(pathname) {
  const match = String(pathname || '/').match(/^\/(vi|zh)(?:\/|$)/u);
  return match?.[1] || 'en';
}

export function stripLanguagePrefix(pathname) {
  const normalized = String(pathname || '/').startsWith('/') ? String(pathname || '/') : `/${pathname}`;
  const stripped = normalized.replace(/^\/(?:vi|zh)(?=\/|$)/u, '');
  return stripped || '/';
}

export function localizePath(pathname, language) {
  const routePath = stripLanguagePrefix(pathname);
  const option = seoLanguages.find(({ code }) => code === normalizeLanguage(language)) || seoLanguages[0];
  if (!option.prefix) return routePath;
  return routePath === '/' ? option.prefix : `${option.prefix}${routePath}`;
}

export function languageBasePath(language) {
  return seoLanguages.find(({ code }) => code === normalizeLanguage(language))?.prefix || '/';
}

export function resolveBrowserLanguage(windowLike) {
  const pathLanguage = languageFromPath(windowLike.location.pathname);
  if (pathLanguage !== 'en') return pathLanguage;
  try {
    const saved = windowLike.localStorage.getItem('portfolio-language');
    if (languageCodes.has(saved)) return saved;
  } catch {
    // Storage can be unavailable in strict privacy modes; browser preferences still work.
  }
  return detectNavigatorLanguage(windowLike.navigator);
}
