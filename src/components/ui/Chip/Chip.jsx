import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import check from '../../../assets/icons/check-16.svg';

// A native checkbox or radio drawn as a chip, so selection, grouping and keyboard
// behaviour come from the browser rather than from ARIA.
export default function Chip({ type = 'checkbox', children, ...input }) {
  return (
    <label className="lp-chip">
      <input className="lp-chip__input" type={type} {...input} />
      <span className="lp-chip__body">
        <Icon src={check} size={16} className="lp-chip__check" />
        {children}
      </span>
    </label>
  );
}

Chip.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  children: PropTypes.node.isRequired,
};
