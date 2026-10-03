import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import chevronDown from '../../../assets/icons/chevron-down-20.svg';

// The browser's own select, for its keyboard and screen-reader behaviour, drawn as an Input
// with the design system's chevron.
const Select = forwardRef(function Select({ placeholder, options, ...rest }, ref) {
  return (
    <span className="lp-select">
      <select ref={ref} className="lp-input lp-select__control" {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <Icon src={chevronDown} size={20} className="lp-select__chevron" />
    </span>
  );
});

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;
