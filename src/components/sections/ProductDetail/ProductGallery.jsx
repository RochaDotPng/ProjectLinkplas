import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';

// The product's preview: the 3D model when there is one, and its photographs. With more than
// one item, thumbnails switch between them. `resetKey` brings the model back whenever the
// visitor changes something the model shows (a size, a colour).
export default function ProductGallery({ model, images, resetKey, labels }) {
  const items = [...(model ? [{ type: 'model' }] : []), ...images.map((image) => ({ type: 'image', ...image }))];
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [resetKey]);

  const current = items[Math.min(active, items.length - 1)];

  return (
    <div className="lp-product-gallery">
      {!current && (
        <div className="lp-product-gallery__stage">
          <ImagePlaceholder />
        </div>
      )}
      {current?.type === 'model' && model}
      {current?.type === 'image' && (
        <div className="lp-product-gallery__stage">
          <img
            className={`lp-product-gallery__image lp-product-gallery__image--${current.fit ?? 'contain'}`}
            src={current.src}
            alt={current.alt}
          />
        </div>
      )}

      {items.length > 1 && (
        <ul className="lp-product-gallery__thumbs">
          {items.map((item, index) => (
            <li key={item.type === 'model' ? 'model' : item.src}>
              <button
                type="button"
                className="lp-product-gallery__thumb"
                aria-pressed={index === active}
                aria-label={item.type === 'model' ? labels.model : labels.image(index + (model ? 0 : 1), images.length)}
                onClick={() => setActive(index)}
              >
                {item.type === 'model' ? (
                  <span className="lp-product-gallery__thumb-label" aria-hidden="true">3D</span>
                ) : (
                  <img src={item.src} alt="" loading="lazy" decoding="async" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ProductGallery.propTypes = {
  model: PropTypes.node,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      fit: PropTypes.oneOf(['contain', 'cover']),
    })
  ).isRequired,
  resetKey: PropTypes.string,
  labels: PropTypes.shape({
    model: PropTypes.string.isRequired,
    image: PropTypes.func.isRequired,
  }).isRequired,
};
