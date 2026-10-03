import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../navigation/Breadcrumb/Breadcrumb';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import Eyebrow from '../../content/Eyebrow/Eyebrow';
import SubbrandLogo from '../../brand/SubbrandLogo/SubbrandLogo';
import arrowRight from '../../../assets/icons/arrow-right-20.svg';
import { useSiteContent } from '../../../content/site';
import { ROUTES } from '../../../content/routes';

// Top of a brand page: the brand's logo, its promise as the page's h1, and a photograph,
// on the brand's own tint. The tint is only ever used on that brand's page.
export default function BrandHero({ brand, groupLabel, productsLabel, quoteLabel }) {
  const { breadcrumbLabel, homeCrumb } = useSiteContent();

  return (
    <div className="lp-brand-hero">
      <div className="container lp-brand-hero__inner">
        <Breadcrumb
          label={breadcrumbLabel}
          items={[{ label: homeCrumb, to: ROUTES.home }, { label: groupLabel }, { label: brand.name }]}
        />
        <div className="lp-brand-hero__row">
          <div className="lp-brand-hero__content">
            <SubbrandLogo brand={brand.slug} symbolHeight={40} />
            <Eyebrow>{brand.eyebrow}</Eyebrow>
            <h1 className="lp-brand-hero__title">
              {/* The logo above is an image; the name is repeated here for the page outline. */}
              <span className="visually-hidden">{brand.name}: </span>
              {brand.title}
            </h1>
            <p className="lp-brand-hero__lead">{brand.lead}</p>
            <div className="lp-brand-hero__actions">
              <Button as={Link} to={brand.productsPath} size="large" trailingIcon={<Icon src={arrowRight} />}>
                {productsLabel}
              </Button>
              <Button as={Link} to={ROUTES.contact} variant="secondary" size="large">
                {quoteLabel}
              </Button>
            </div>
          </div>
          <div className="lp-brand-hero__media">
            <img src={brand.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

BrandHero.propTypes = {
  brand: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    productsPath: PropTypes.string.isRequired,
  }).isRequired,
  groupLabel: PropTypes.string.isRequired,
  productsLabel: PropTypes.string.isRequired,
  quoteLabel: PropTypes.string.isRequired,
};
