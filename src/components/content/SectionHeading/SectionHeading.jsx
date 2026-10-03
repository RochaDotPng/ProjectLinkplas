import PropTypes from 'prop-types';
import Eyebrow from '../Eyebrow/Eyebrow';

// Opens a section: eyebrow, title and an optional line. The title is an h2 by default,
// since the page's only h1 is in its hero.
export default function SectionHeading({ id, eyebrow, title, description, theme = 'light', level: Heading = 'h2' }) {
  return (
    <div className={`lp-section-heading lp-section-heading--${theme}`}>
      {eyebrow && <Eyebrow theme={theme}>{eyebrow}</Eyebrow>}
      <Heading id={id} className="lp-section-heading__title">{title}</Heading>
      {description && <p className="lp-section-heading__description">{description}</p>}
    </div>
  );
}

SectionHeading.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  level: PropTypes.elementType,
};
