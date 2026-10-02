export const DEFAULT_LANGUAGE = 'pt';

const ALL_LANGUAGES = [
  { code: 'pt', locale: 'pt-PT', short: 'PT', name: 'Português', prefix: '', published: true },
  // Not live yet: page copy is still Portuguese only. Publish once every page is translated
  // (see "Roadmap" in CLAUDE.md for the checklist).
  { code: 'en', locale: 'en', short: 'EN', name: 'English', prefix: '/en', published: false },
];

// Unpublished languages are served by the dev server only, so they can be reviewed before launch.
export const LANGUAGES = ALL_LANGUAGES.filter((language) => language.published || import.meta.env.DEV);

export function getLanguage(code) {
  return LANGUAGES.find((language) => language.code === code);
}

export function languageFromPathname(pathname) {
  const match = LANGUAGES.find(
    ({ prefix }) => prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))
  );
  return match ? match.code : DEFAULT_LANGUAGE;
}

// `path` is a router path, which never carries a language prefix.
export function localizedPath(code, path) {
  const { prefix } = getLanguage(code);
  return path === '/' ? prefix || '/' : `${prefix}${path}`;
}
