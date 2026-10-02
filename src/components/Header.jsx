import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './brand/Logo/Logo';
import Button from './ui/Button/Button';
import IconButton from './ui/Button/IconButton';
import Icon from './ui/Icon/Icon';
import NavItem from './navigation/NavItem/NavItem';
import LanguageSwitcher from './navigation/LanguageSwitcher/LanguageSwitcher';
import menuIcon from '../assets/icons/menu-20.svg';
import closeIcon from '../assets/icons/close-20.svg';
import chevronRight from '../assets/icons/chevron-right-20.svg';
import arrowRight from '../assets/icons/arrow-right-20.svg';
import { useSiteContent } from '../content/site';

const MOBILE_MENU_ID = 'lp-mobile-menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { homeLabel, skipLinkLabel, mainNav } = useSiteContent();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a className="lp-skip-link" href="#conteudo">{skipLinkLabel}</a>
      <header className="lp-header">
        <div className="container lp-header__inner">
          <Link to="/" className="lp-header__brand" aria-label={homeLabel}>
            <Logo />
          </Link>

          <nav className="lp-header__nav" aria-label={mainNav.label}>
            {mainNav.items.map((item) => (
              <NavItem key={item.to} to={item.to}>{item.label}</NavItem>
            ))}
          </nav>

          <div className="lp-header__actions">
            <LanguageSwitcher />
            <Button as={Link} to={mainNav.cta.to} size="small">{mainNav.cta.label}</Button>
          </div>

          <IconButton
            className="lp-header__menu-button"
            label={mainNav.openMenuLabel}
            icon={<Icon src={menuIcon} />}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </header>

      <Offcanvas
        id={MOBILE_MENU_ID}
        className="lp-mobile-menu"
        placement="end"
        show={menuOpen}
        onHide={() => setMenuOpen(false)}
        aria-label={mainNav.mobileMenuLabel}
      >
        <div className="lp-mobile-menu__top">
          <Link to="/" className="lp-header__brand" aria-label={homeLabel}>
            <Logo />
          </Link>
          <IconButton
            label={mainNav.closeMenuLabel}
            icon={<Icon src={closeIcon} />}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <nav className="lp-mobile-menu__items" aria-label={mainNav.label}>
          {mainNav.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `lp-mobile-nav-item${isActive ? ' is-active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <span className="lp-mobile-nav-item__label">
                    {isActive && <span className="lp-mobile-nav-item__marker" aria-hidden="true" />}
                    {item.label}
                  </span>
                  <Icon src={chevronRight} className="lp-mobile-nav-item__chevron" />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="lp-mobile-menu__bottom">
          <LanguageSwitcher drop="up" />
          <Button as={Link} to={mainNav.cta.to} size="large" trailingIcon={<Icon src={arrowRight} />}>
            {mainNav.cta.label}
          </Button>
        </div>
      </Offcanvas>
    </>
  );
}
