import PropTypes from 'prop-types';
import BsButton from 'react-bootstrap/Button';

const BS_SIZE = { small: 'sm', medium: undefined, large: 'lg' };

// Bootstrap's own `btn-secondary` is still used by pages that predate the design system,
// so the Figma "Secondary" variant gets its own class.
const BS_VARIANT = {
  primary: 'primary',
  accent: 'accent',
  secondary: 'lp-secondary',
  ghost: 'ghost',
  inverse: 'inverse',
};

export default function Button({
  variant = 'primary',
  size = 'medium',
  leadingIcon = null,
  trailingIcon = null,
  children,
  ...rest
}) {
  return (
    <BsButton variant={BS_VARIANT[variant]} size={BS_SIZE[size]} {...rest}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </BsButton>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(BS_VARIANT)),
  size: PropTypes.oneOf(Object.keys(BS_SIZE)),
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
};
