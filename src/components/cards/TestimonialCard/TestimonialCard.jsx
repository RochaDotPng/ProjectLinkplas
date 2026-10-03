import PropTypes from 'prop-types';

// A client's words. The quotation marks are part of the text in each language.
export default function TestimonialCard({ quote, name, role }) {
  return (
    <figure className="lp-testimonial">
      <span className="lp-testimonial__accent" aria-hidden="true" />
      <blockquote className="lp-testimonial__quote">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="lp-testimonial__author">
        <span className="lp-testimonial__name">{name}</span>
        <span className="lp-testimonial__role">{role}</span>
      </figcaption>
    </figure>
  );
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
