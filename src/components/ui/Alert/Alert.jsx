import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import checkCircle from '../../../assets/icons/check-circle-22.svg';
import alertCircle from '../../../assets/icons/alert-circle-22.svg';

const ICONS = { success: checkCircle, error: alertCircle };

// An inline message. The side bar and the icon carry the tone as well as the colour.
// Errors interrupt (role="alert"); confirmations are announced politely (role="status").
export default function Alert({ tone, title, children }) {
  return (
    <div className={`lp-alert lp-alert--${tone}`} role={tone === 'error' ? 'alert' : 'status'}>
      <Icon src={ICONS[tone]} size={22} className="lp-alert__icon" />
      <div className="lp-alert__content">
        <p className="lp-alert__title">{title}</p>
        {children && <p className="lp-alert__text">{children}</p>}
      </div>
    </div>
  );
}

Alert.propTypes = {
  tone: PropTypes.oneOf(['success', 'error']).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
