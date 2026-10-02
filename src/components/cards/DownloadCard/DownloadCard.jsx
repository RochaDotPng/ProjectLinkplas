import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import fileIcon from '../../../assets/icons/file-24.svg';
import downloadIcon from '../../../assets/icons/download-20.svg';

// The whole card is the download link. The square on the right has the look of the
// secondary icon button but is decoration, so the card is a single control.
export default function DownloadCard({ href, title, meta, actionLabel }) {
  return (
    <a className="lp-download-card" href={href} download aria-label={`${actionLabel}: ${title}, ${meta}`}>
      <span className="lp-download-card__file" aria-hidden="true">
        <Icon src={fileIcon} size={24} />
      </span>
      <span className="lp-download-card__info">
        <span className="lp-download-card__title">{title}</span>
        <span className="lp-download-card__meta">{meta}</span>
      </span>
      <span className="lp-download-card__action" aria-hidden="true">
        <Icon src={downloadIcon} size={20} />
      </span>
    </a>
  );
}

DownloadCard.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
};
