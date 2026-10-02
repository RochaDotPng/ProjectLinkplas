import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../ui/Icon/Icon';
import chevronRight from '../../../assets/icons/chevron-right-14.svg';

// The last item is the current page: it is not a link and carries aria-current.
export default function Breadcrumb({ label, items }) {
  return (
    <nav className="lp-breadcrumb" aria-label={label}>
      <ol className="lp-breadcrumb__list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.label} className="lp-breadcrumb__item">
              {isCurrent ? (
                <span className="lp-breadcrumb__current" aria-current="page">{item.label}</span>
              ) : (
                <>
                  <Link to={item.to} className="lp-breadcrumb__link">{item.label}</Link>
                  <Icon src={chevronRight} size={14} className="lp-breadcrumb__separator" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    })
  ).isRequired,
};
