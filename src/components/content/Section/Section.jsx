import PropTypes from 'prop-types';

// A band of the page: full-width background, content in the container, the standard
// vertical rhythm. `tone` picks the background.
export default function Section({ tone = 'page', className = '', labelledBy, children }) {
  return (
    <section className={`lp-section lp-section--${tone} ${className}`.trim()} aria-labelledby={labelledBy}>
      <div className="container lp-section__inner">{children}</div>
    </section>
  );
}

Section.propTypes = {
  tone: PropTypes.oneOf(['page', 'subtle', 'inverse']),
  className: PropTypes.string,
  labelledBy: PropTypes.string,
  children: PropTypes.node.isRequired,
};
