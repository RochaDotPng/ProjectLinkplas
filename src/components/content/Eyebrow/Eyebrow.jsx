import PropTypes from 'prop-types';

export default function Eyebrow({ children, theme = 'light', as: Tag = 'p', className = '' }) {
  return (
    <Tag className={`lp-eyebrow lp-eyebrow--${theme} ${className}`.trim()}>
      <span className="lp-eyebrow__square" aria-hidden="true" />
      {children}
    </Tag>
  );
}

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  as: PropTypes.elementType,
  className: PropTypes.string,
};
