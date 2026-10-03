import PropTypes from 'prop-types';

// A partner: its logo when there is one in src/assets/logos, its name and a line on the
// partnership.
export default function PartnerCard({ name, logo, line, headingLevel: Heading = 'h3' }) {
  return (
    <article className="lp-partner-card">
      {logo && (
        <div className="lp-partner-card__logo">
          {/* The name follows as text, so the logo is not announced. */}
          <img src={logo} alt="" loading="lazy" decoding="async" />
        </div>
      )}
      <Heading className="lp-partner-card__name">{name}</Heading>
      <p className="lp-partner-card__line">{line}</p>
    </article>
  );
}

PartnerCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
  line: PropTypes.string.isRequired,
  headingLevel: PropTypes.elementType,
};
