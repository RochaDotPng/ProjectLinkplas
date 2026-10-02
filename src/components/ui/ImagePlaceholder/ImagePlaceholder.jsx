import Icon from '../Icon/Icon';
import image from '../../../assets/icons/image-32.svg';

// Stands in for a photograph that has not been supplied yet. It says nothing about the
// product, so it is hidden from assistive technology.
export default function ImagePlaceholder() {
  return (
    <div className="lp-image-placeholder" aria-hidden="true">
      <Icon src={image} size={32} />
    </div>
  );
}
