import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import shieldCheck from '../../../assets/icons/shield-check-20.svg';

export default function CertificationBadge({ title, description }) {
  return (
    <div className="lp-certification-badge">
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
};
