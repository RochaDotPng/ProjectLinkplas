import PropTypes from 'prop-types';

// The brand's modular pattern (tone-on-tone blocks with a few Azul Petróleo squares), drawn
// for the darker Azul Profundo panel. With `tiles` above 1 the drawing repeats side by side;
// the container sets the gap so the columns keep their rhythm across the joins. It is
// decoration only: hidden from assistive technology and never focusable. The manual allows it
// to be cropped by its container, never placed behind the logo.
export default function ModularPattern({ tiles = 1, className = '' }) {
  return (
    <span className={`lp-modular-pattern ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: tiles }, (_, index) => (
        <img key={index} src="/images/elemento-grafico.svg" alt="" width="304" height="618" />
      ))}
    </span>
  );
}

ModularPattern.propTypes = {
  tiles: PropTypes.number,
  className: PropTypes.string,
};
