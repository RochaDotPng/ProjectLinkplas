import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Client and partner logos in a row. When they do not fit, the row becomes an endless slow
// marquee (the list is duplicated and slid by half its width). It pauses on hover and on
// keyboard focus; visitors who ask for reduced motion get a row they can scroll instead.
export default function LogoStrip({ title, items }) {
  const viewport = useRef(null);
  const track = useRef(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const measure = () => {
      const first = track.current?.querySelector('.lp-logo-strip__group');
      if (!first || !viewport.current) return;
      setOverflowing(first.scrollWidth > viewport.current.clientWidth + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, [items.length]);

  const group = (hidden) => (
    <ul className="lp-logo-strip__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.name} className="lp-logo-strip__item">
          {item.logo ? (
            <img src={item.logo} alt={hidden ? '' : item.name} loading="lazy" decoding="async" />
          ) : (
            <span className="lp-logo-strip__name">{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="lp-logo-strip" aria-label={title}>
      <div className="container lp-logo-strip__inner">
        <p className="lp-logo-strip__title">{title}</p>
        <div ref={viewport} className={`lp-logo-strip__viewport${overflowing ? ' is-marquee' : ''}`}>
          <div ref={track} className="lp-logo-strip__track">
            {group(false)}
            {/* The copy only exists to make the loop seamless. */}
            {overflowing && group(true)}
          </div>
        </div>
      </div>
    </section>
  );
}

LogoStrip.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    })
  ).isRequired,
};
