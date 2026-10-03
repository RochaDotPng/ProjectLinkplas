import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import alertCircle from '../../../assets/icons/alert-circle-20.svg';

// Label, helper and error around one control. `children` is a function that receives the
// attributes tying the control to them, so a screen reader reads the helper and the error
// with the field.
export default function FormField({ id, label, required = false, helper, error, children }) {
  const helperId = helper ? `${id}-ajuda` : undefined;
  const errorId = error ? `${id}-erro` : undefined;

  return (
    <div className="lp-form-field">
      <label className="lp-form-field__label" htmlFor={id}>
        {label}
        {/* `required` on the control already tells assistive technology. */}
        {required && <span className="lp-form-field__required" aria-hidden="true">*</span>}
      </label>
      {children({
        id,
        required,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': [helperId, errorId].filter(Boolean).join(' ') || undefined,
      })}
      {helper && <p id={helperId} className="lp-form-field__helper">{helper}</p>}
      {error && (
        <p id={errorId} className="lp-form-field__error">
          <Icon src={alertCircle} size={16} />
          {error}
        </p>
      )}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helper: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.func.isRequired,
};
