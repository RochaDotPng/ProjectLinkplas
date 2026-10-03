import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import check from '../../../assets/icons/check-16.svg';

// A list of advantages or characteristics, each with a check mark.
export default function CheckList({ items }) {
  return (
    <ul className="lp-check-list">
      {items.map((item) => (
        <li key={item} className="lp-check-list__item">
          <span className="lp-check-list__check" aria-hidden="true">
            <Icon src={check} size={16} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

CheckList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
