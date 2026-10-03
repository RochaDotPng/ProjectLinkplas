import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Icon from '../../ui/Icon/Icon';
import chevronDown from '../../../assets/icons/chevron-down-16.svg';
import arrowRight from '../../../assets/icons/arrow-right-16.svg';
import factory from '../../../assets/icons/factory-24.svg';
import pill from '../../../assets/icons/pill-24.svg';
import packageIcon from '../../../assets/icons/package-24.svg';

const ICONS = { factory, pill, package: packageIcon };

// The menu opens 8px below the header, as the design system asks. The toggle is 40px tall and
// centred in the 80px header, so the menu starts 28px below the toggle.
const BELOW_HEADER = { modifiers: [{ name: 'offset', options: { offset: [0, 28] } }] };

// A main-menu item that opens a list of pages. React-Bootstrap's Dropdown supplies the
// keyboard behaviour (arrow keys, Esc, focus back on the toggle) and the ARIA states.
export default function NavDropdown({ item, megaLinkLabel }) {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(item.base);

  return (
    <Dropdown className={`lp-nav-dropdown${item.mega ? ' lp-nav-dropdown--mega' : ''}`}>
      <Dropdown.Toggle as="button" type="button" className={`lp-nav-item${isActive ? ' is-active' : ''}`}>
        {isActive && <span className="lp-nav-item__marker" aria-hidden="true" />}
        {item.label}
        <Icon src={chevronDown} size={16} className="lp-nav-item__chevron" />
      </Dropdown.Toggle>

      {item.mega ? (
        <Dropdown.Menu className="lp-mega-menu">
          {item.children.map((child) => (
            <Dropdown.Item key={child.to} as={NavLink} to={child.to} className="lp-mega-menu__column">
              <span className="lp-mega-menu__icon" aria-hidden="true">
                <Icon src={ICONS[child.icon]} size={24} />
              </span>
              <span className="lp-mega-menu__title">{child.label}</span>
              <span className="lp-mega-menu__text">{child.description}</span>
              <span className="lp-mega-menu__link" aria-hidden="true">
                {megaLinkLabel(child.label)}
                <Icon src={arrowRight} size={16} />
              </span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      ) : (
        <Dropdown.Menu className="lp-dropdown-menu" popperConfig={BELOW_HEADER}>
          {item.children.map((child) => (
            <Dropdown.Item key={child.to} as={NavLink} to={child.to} end={child.end} className="lp-menu-item">
              {child.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
}

NavDropdown.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired,
    mega: PropTypes.bool,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        end: PropTypes.bool,
        icon: PropTypes.string,
        description: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  megaLinkLabel: PropTypes.func.isRequired,
};
