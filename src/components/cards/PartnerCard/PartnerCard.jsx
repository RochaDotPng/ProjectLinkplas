import PropTypes from 'prop-types';

// A partner: its logo when there is one in src/assets/logos, its name and a line on the
// partnership. `logoSlot` keeps the logo's space in a card that has none, so that the names
// line up across a row while only some partners have a logo.
export default function PartnerCard({ name, logo, logoSlot = false, line, headingLevel: Heading = 'h3' }) {
  return (
    <article className="lp-partner-card">
      {(logo || logoSlot) && (
        <div className="lp-partner-card__logo">
          {/* The name follows as text, so the logo is not announced. */}
          {logo && <img src={logo} alt="" loading="lazy" decoding="async" />}
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
  logoSlot: PropTypes.bool,
  line: PropTypes.string.isRequired,
  headingLevel: PropTypes.elementType,
};
