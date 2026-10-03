import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../ui/Icon/Icon';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import SubbrandTag from '../../ui/SubbrandTag/SubbrandTag';
import arrowRight from '../../../assets/icons/arrow-right-16.svg';

export default function ProductCard({ product, linkLabel, headingLevel: Heading = 'h2' }) {
  return (
    <article className="lp-product-card">
      <div className="lp-product-card__image">
        {product.images?.[0] ? (
          // The title already names the product, so the picture is not announced again.
          <img
            className={`lp-product-card__photo lp-product-card__photo--${product.images[0].fit ?? 'contain'}`}
            src={product.images[0].src}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
      <div className="lp-product-card__body">
        <SubbrandTag brand={product.brand} />
        <Heading className="lp-product-card__title">
          {/* The title is the card's only link and is stretched over the whole card,
              so each card is one tab stop named after its product. */}
          <Link to={product.path} className="lp-product-card__title-link">{product.name}</Link>
        </Heading>
        <p className="lp-product-card__description">{product.summary}</p>
        {product.cardSpecs && <p className="lp-product-card__specs">{product.cardSpecs.join('  ·  ')}</p>}
        <span className="lp-product-card__link" aria-hidden="true">
          {linkLabel}
          <Icon src={arrowRight} size={16} />
        </span>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    path: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    cardSpecs: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, fit: PropTypes.string })),
  }).isRequired,
  linkLabel: PropTypes.string.isRequired,
  headingLevel: PropTypes.elementType,
};
