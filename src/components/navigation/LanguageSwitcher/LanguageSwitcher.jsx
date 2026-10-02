import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Icon from '../../ui/Icon/Icon';
import globe from '../../../assets/icons/globe-18.svg';
import chevronDown from '../../../assets/icons/chevron-down-14.svg';
import { useLanguage } from '../../../i18n/language-context';
import { getLanguage, LANGUAGES, localizedPath } from '../../../i18n/languages';
import { useSiteContent } from '../../../content/site';

export default function LanguageSwitcher({ drop = 'down' }) {
  const current = getLanguage(useLanguage());
  const { languageLabel } = useSiteContent();
  const { pathname, search, hash } = useLocation();

  return (
    <Dropdown className="lp-language-switcher" drop={drop} align="end">
      <Dropdown.Toggle
        as="button"
        type="button"
        className="lp-language-switcher__toggle"
        aria-label={`${languageLabel}: ${current.name}`}
      >
        <Icon src={globe} size={18} />
        {current.short}
        <Icon src={chevronDown} size={14} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {LANGUAGES.map((language) => (
          // A plain link, not a router link: the language prefix is the router basename,
          // so changing language has to reload the app under the other prefix.
          <Dropdown.Item
            key={language.code}
            href={`${localizedPath(language.code, pathname)}${search}${hash}`}
            hrefLang={language.locale}
            lang={language.locale}
            active={language.code === current.code}
            aria-current={language.code === current.code ? 'true' : undefined}
          >
            {language.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

LanguageSwitcher.propTypes = {
  drop: PropTypes.oneOf(['down', 'up']),
};
