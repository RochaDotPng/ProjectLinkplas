import PropTypes from 'prop-types';
import { useSiteContent } from '../../../content/site';

// Marks, on the page itself, a piece of content the client still has to supply. `children`
// says what is missing. Removed as each piece arrives.
export default function ContentPlaceholder({ children }) {
  const { placeholderLabel } = useSiteContent();
  return (
    <p className="lp-content-placeholder">
      <span className="lp-content-placeholder__label">{placeholderLabel}</span>
      {children}
    </p>
  );
}

ContentPlaceholder.propTypes = {
  children: PropTypes.node.isRequired,
};
