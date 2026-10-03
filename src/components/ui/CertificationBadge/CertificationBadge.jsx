import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import shieldCheck from '../../../assets/icons/shield-check-20.svg';

// `theme="dark"` is for bg/inverse surfaces such as the footer.
export default function CertificationBadge({ title, description, theme = 'light' }) {
  return (
    <div className={`lp-certification-badge lp-certification-badge--${theme}`}>
      <Icon src={shieldCheck} size={20} />
      <div className="lp-certification-badge__text">
        <span className="lp-certification-badge__title">{title}</span>
        <span className="lp-certification-badge__description">{description}</span>
      </div>
    </div>
  );
}

CertificationBadge.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};
