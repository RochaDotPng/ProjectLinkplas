import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavItem({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive }) => `lp-nav-item${isActive ? ' is-active' : ''}`}>
      {({ isActive }) => (
        <>
          {isActive && <span className="lp-nav-item__marker" aria-hidden="true" />}
          {children}
        </>
      )}
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
