import PropTypes from 'prop-types';

// Decorative by design: the control that holds an icon carries the accessible name.
export default function Icon({ src, size = 20, className = '' }) {
  return (
    <span
      className={`lp-icon ${className}`.trim()}
      style={{ '--lp-icon-src': `url("${src}")`, '--lp-icon-size': `${size}px` }}
      aria-hidden="true"
    />
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
