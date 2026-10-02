import PropTypes from 'prop-types';
import { BRANDS } from '../../../content/products';

export default function SubbrandTag({ brand }) {
  return (
    <span className={`lp-subbrand-tag lp-subbrand-tag--${brand}`}>
      <span className="lp-subbrand-tag__square" aria-hidden="true" />
      {BRANDS[brand]}
    </span>
  );
}

SubbrandTag.propTypes = {
  brand: PropTypes.oneOf(Object.keys(BRANDS)).isRequired,
};
