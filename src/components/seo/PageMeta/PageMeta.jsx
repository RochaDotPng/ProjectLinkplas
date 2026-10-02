import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../../i18n/language-context';
import { DEFAULT_LANGUAGE, LANGUAGES, localizedPath } from '../../../i18n/languages';
import { pageMeta, SITE_ORIGIN, UPDATED_TIME } from '../../../content/meta';

const urlFor = (code, path) => `${SITE_ORIGIN}${localizedPath(code, path)}`;

export default function PageMeta({ page }) {
  const language = useLanguage();
  const { path, [language]: meta } = pageMeta[page];
  const url = urlFor(language, path);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <meta property="og:title" content={meta.ogTitle ?? meta.title} />
      <meta property="og:description" content={meta.ogDescription ?? meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:updated_time" content={UPDATED_TIME} />
      <link rel="canonical" href={url} />
      {/* Alternates only make sense once a second language is being served. */}
      {LANGUAGES.length > 1 &&
        LANGUAGES.map(({ code, locale }) => (
          <link key={code} rel="alternate" hrefLang={locale} href={urlFor(code, path)} />
        ))}
      {LANGUAGES.length > 1 && (
        <link rel="alternate" hrefLang="x-default" href={urlFor(DEFAULT_LANGUAGE, path)} />
      )}
    </Helmet>
  );
}

PageMeta.propTypes = {
  page: PropTypes.oneOf(Object.keys(pageMeta)).isRequired,
};
