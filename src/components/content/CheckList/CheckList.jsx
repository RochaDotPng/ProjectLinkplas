import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import check from '../../../assets/icons/check-16.svg';

// A list of advantages or characteristics, each with a check mark. A brand page marks its
// points with a square in the brand's accent colour instead (`marker="square"`), like the
// square of the brand's logo.
export default function CheckList({ items, marker = 'check' }) {
  return (
    <ul className="lp-check-list">
      {items.map((item) => (
        <li key={item} className="lp-check-list__item">
          {marker === 'square' ? (
            <span className="lp-check-list__square" aria-hidden="true" />
          ) : (
            <span className="lp-check-list__check" aria-hidden="true">
              <Icon src={check} size={16} />
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

CheckList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  marker: PropTypes.oneOf(['check', 'square']),
};
