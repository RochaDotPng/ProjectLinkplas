import PropTypes from 'prop-types';

// A short, non-interactive label (Badge, Tone=Brand, Style=Subtle in Figma).
export default function Badge({ children, size = 'small' }) {
  return <span className={`lp-badge lp-badge--${size}`}>{children}</span>;
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
};
