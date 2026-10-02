import PropTypes from 'prop-types';
import Chip from '../../ui/Chip/Chip';

// The colour choice for one part of a product (the box, the lid…), made with the browser's
// colour picker. A part that can also be clear gets that choice first, and its picker only
// once a colour is wanted. `value` is `{}` for clear and `{ color: '#rrggbb' }` otherwise.
export default function ColourOptions({ name, label, canBeClear, anyColour, value, onChange, text }) {
  const labelId = `lp-colour-${name}`;
  const pickerId = `${labelId}-picker`;

  const picker = (
    <input
      id={pickerId}
      type="color"
      className="lp-colour-options__picker"
      aria-label={canBeClear ? `${label}: ${text.chooseColour}` : undefined}
      value={value.color ?? anyColour}
      onChange={(event) => onChange({ color: event.target.value })}
    />
  );

  if (!canBeClear) {
    return (
      <div className="lp-colour-options">
        <label htmlFor={pickerId} className="lp-colour-options__label">{label}</label>
        <div className="lp-colour-options__choices">{picker}</div>
      </div>
    );
  }

  return (
    <div className="lp-colour-options" role="radiogroup" aria-labelledby={labelId}>
      <p id={labelId} className="lp-colour-options__label">{label}</p>
      <div className="lp-colour-options__choices">
        <Chip type="radio" name={labelId} value="clear" checked={!value.color} onChange={() => onChange({})}>
          {text.clearFinish}
        </Chip>
        <Chip
          type="radio"
          name={labelId}
          value="colour"
          checked={Boolean(value.color)}
          onChange={() => onChange({ color: anyColour })}
        >
          {text.colouredFinish}
        </Chip>
        {value.color && picker}
      </div>
    </div>
  );
}

ColourOptions.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  canBeClear: PropTypes.bool,
  anyColour: PropTypes.string.isRequired,
  value: PropTypes.shape({ color: PropTypes.string }).isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.shape({
    clearFinish: PropTypes.string.isRequired,
    colouredFinish: PropTypes.string.isRequired,
    chooseColour: PropTypes.string.isRequired,
  }).isRequired,
};
