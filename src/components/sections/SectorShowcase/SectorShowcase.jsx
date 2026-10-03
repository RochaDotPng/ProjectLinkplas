import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Badge from '../../ui/Badge/Badge';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import Logo from '../../brand/Logo/Logo';
import SubbrandLogo from '../../brand/SubbrandLogo/SubbrandLogo';
import arrowRight16 from '../../../assets/icons/arrow-right-16.svg';
import arrowRight20 from '../../../assets/icons/arrow-right-20.svg';
import factory from '../../../assets/icons/factory-24.svg';
import pill from '../../../assets/icons/pill-24.svg';
import packageIcon from '../../../assets/icons/package-24.svg';
import linkIcon from '../../../assets/icons/link-24.svg';

const ICONS = { factory, pill, package: packageIcon };
const PANEL_ID = 'lp-sector-panel';
const CYCLE_MS = 4000;

// The home page's sectors: a row of four items and, below, a panel for the active one.
// The active item advances every four seconds, like a slide show, until the visitor hovers,
// clicks or focuses an item; from then on it only changes when they choose.
export default function SectorShowcase({ items, menuLabel }) {
  const root = useRef(null);
  const onScreen = useRef(false);
  const [active, setActive] = useState(0);
  const [cycling, setCycling] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!cycling) return undefined;
    // Only advance while the section can be seen, so nobody arrives mid-way through.
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    observer.observe(root.current);
    const timer = window.setInterval(() => {
      if (onScreen.current && !document.hidden) setActive((index) => (index + 1) % items.length);
    }, CYCLE_MS);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [cycling, items.length]);

  const stop = () => setCycling(false);
  const select = (index) => {
    stop();
    setActive(index);
  };

  const current = items[active];

  return (
    <div ref={root} className="lp-sector-showcase">
      <div className="lp-sector-menu" role="group" aria-label={menuLabel}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`lp-sector-menu__item lp-sector-tone--${item.tone}${index === active ? ' is-active' : ''}`}
            onMouseEnter={() => select(index)}
          >
            {/* The button chooses the item; the link below it, a separate control, opens its page. */}
            <button
              type="button"
              className="lp-sector-menu__button"
              aria-pressed={index === active}
              aria-controls={PANEL_ID}
              onClick={() => select(index)}
              onFocus={stop}
            >
              {item.badge ? (
                <Badge size="medium">{item.badge}</Badge>
              ) : (
                <span className="lp-sector-menu__icon" aria-hidden="true">
                  <Icon src={ICONS[item.icon]} size={24} />
                </span>
              )}
              <span className="lp-sector-menu__title">{item.title}</span>
              {item.text && <span className="lp-sector-menu__text">{item.text}</span>}
            </button>
            <Link className="lp-sector-menu__link" to={item.to} onFocus={stop}>
              {item.linkLabel}
              <Icon src={arrowRight16} size={16} />
            </Link>
          </div>
        ))}
      </div>

      {/* Announced to screen readers only once the visitor is choosing, never while it cycles. */}
      <div
        id={PANEL_ID}
        className={`lp-sector-panel lp-sector-tone--${current.tone}`}
        aria-live={cycling ? 'off' : 'polite'}
      >
        <div className="lp-sector-panel__media">
          <img
            className={`lp-sector-panel__image lp-sector-panel__image--${current.panel.imageFit ?? 'cover'}`}
            src={current.panel.image}
            alt=""
          />
        </div>
        <div className="lp-sector-panel__text">
          {current.brand ? (
            <SubbrandLogo brand={current.brand} symbolHeight={32} />
          ) : (
            <span className="lp-sector-panel__logos">
              <Logo width={200} />
              <Icon src={linkIcon} size={24} />
              <img className="lp-sector-panel__partner-logo" src={current.panel.partnerLogo} alt={current.panel.partnerName} />
            </span>
          )}
          <p className="lp-sector-panel__description">{current.panel.text}</p>
        </div>
        <Button
          as={Link}
          to={current.panel.to}
          variant="inverse"
          size="large"
          className="lp-sector-panel__action"
          trailingIcon={<Icon src={arrowRight20} />}
        >
          {current.panel.action}
          <span className="visually-hidden">: {current.panel.name}</span>
        </Button>
      </div>
    </div>
  );
}

SectorShowcase.propTypes = {
  menuLabel: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tone: PropTypes.string.isRequired,
      icon: PropTypes.string,
      badge: PropTypes.string,
      brand: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      linkLabel: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      panel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageFit: PropTypes.string,
        partnerLogo: PropTypes.string,
        partnerName: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};
