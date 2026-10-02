import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import arrowRight from '../../../assets/icons/arrow-right-20.svg';

export default function StandaloneLink({ to, children }) {
  return (
    <Link to={to} className="lp-standalone-link">
      {children}
      <Icon src={arrowRight} size={18} />
    </Link>
  );
}

StandaloneLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
