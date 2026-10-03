import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import { ICONS } from '../../ui/Icon/icons';

// A service, value or advantage: icon box (or a number), title and a few lines.
// `icon` is a name from the icon list.
export default function FeatureCard({ title, description, number, icon = 'layers', variant = 'outline', headingLevel: Heading = 'h3' }) {
  return (
    <article className={`lp-feature-card lp-feature-card--${variant}`}>
      <span className="lp-feature-card__icon" aria-hidden="true">
        {number ?? <Icon src={ICONS[icon]} size={24} />}
      </span>
      <Heading className="lp-feature-card__title">{title}</Heading>
      {description && <p className="lp-feature-card__description">{description}</p>}
    </article>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  number: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(ICONS)),
  variant: PropTypes.oneOf(['outline', 'subtle', 'dark']),
  headingLevel: PropTypes.elementType,
};
