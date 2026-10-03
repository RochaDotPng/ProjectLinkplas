import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import check from '../../../assets/icons/check-16.svg';
import alertCircle from '../../../assets/icons/alert-circle-20.svg';

// A native checkbox, visually replaced by the design system's box. The label wraps the
// input, so the whole line is the click target.
const Checkbox = forwardRef(function Checkbox({ id, label, required = false, error, ...rest }, ref) {
  const errorId = error ? `${id}-erro` : undefined;

  return (
    <div className="lp-checkbox">
      <label className="lp-checkbox__row" htmlFor={id}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="lp-checkbox__input"
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          {...rest}
        />
        <span className="lp-checkbox__box" aria-hidden="true">
          <Icon src={check} size={16} />
        </span>
        <span className="lp-checkbox__label">
          {label}
          {required && <span className="lp-checkbox__required" aria-hidden="true"> *</span>}
        </span>
      </label>
      {error && (
        <p id={errorId} className="lp-form-field__error">
          <Icon src={alertCircle} size={16} />
          {error}
        </p>
      )}
    </div>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Checkbox;
