import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import Icon from '../../ui/Icon/Icon';
import globe from '../../../assets/icons/globe-18.svg';
import chevronDown from '../../../assets/icons/chevron-down-14.svg';
import { languages } from '../../../content/site';

export default function LanguageSwitcher({ drop = 'down' }) {
  const current = languages.options.find((option) => option.code === languages.current);

  return (
    <Dropdown className="lp-language-switcher" drop={drop} align="end">
      <Dropdown.Toggle
        as="button"
        type="button"
        className="lp-language-switcher__toggle"
        aria-label={`${languages.label}: ${current.name}`}
      >
        <Icon src={globe} size={18} />
        {current.short}
        <Icon src={chevronDown} size={14} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.options.map((option) => (
          <Dropdown.Item
            as="button"
            type="button"
            key={option.code}
            lang={option.code}
            active={option.code === current.code}
            aria-current={option.code === current.code ? 'true' : undefined}
          >
            {option.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

LanguageSwitcher.propTypes = {
  drop: PropTypes.oneOf(['down', 'up']),
};
