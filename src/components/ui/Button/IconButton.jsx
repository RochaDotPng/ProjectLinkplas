import PropTypes from 'prop-types';
import Button from './Button';

// `label` is required because an icon-only control has no visible text to name it.
export default function IconButton({ label, icon, variant = 'ghost', size = 'medium', className = '', ...rest }) {
  return (
    <Button variant={variant} size={size} className={`btn-icon ${className}`.trim()} aria-label={label} {...rest}>
      {icon}
    </Button>
  );
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'inverse']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};
