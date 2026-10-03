import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// A single-line field. Use it inside FormField, which supplies its label and messages.
const Input = forwardRef(function Input({ type = 'text', ...rest }, ref) {
  return <input ref={ref} type={type} className="lp-input" {...rest} />;
});

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
