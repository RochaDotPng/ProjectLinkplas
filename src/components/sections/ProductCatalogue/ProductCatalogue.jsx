import { useSearchParams } from 'react-router-dom';
import Eyebrow from '../../content/Eyebrow/Eyebrow';
import Chip from '../../ui/Chip/Chip';
import ProductCard from '../../cards/ProductCard/ProductCard';
import { BRANDS, useProducts, useProductsUi } from '../../../content/products';

const BRAND_PARAM = 'marcas';
const ALL_BRANDS = Object.keys(BRANDS);
const FILTER_LABEL_ID = 'lp-product-filters';

export default function ProductCatalogue() {
  const products = useProducts();
  const text = useProductsUi();
  const [searchParams, setSearchParams] = useSearchParams();

  // As in the Figma frame, every brand starts selected. The address only carries the
  // selection once it has been narrowed, so a filtered catalogue can be linked to.
  const selected = searchParams.has(BRAND_PARAM)
    ? searchParams.get(BRAND_PARAM).split(',').filter((brand) => ALL_BRANDS.includes(brand))
    : ALL_BRANDS;

  const toggle = (brand) => {
    const next = ALL_BRANDS.filter((entry) => (entry === brand ? !selected.includes(entry) : selected.includes(entry)));
    const params = new URLSearchParams(searchParams);
    if (next.length === ALL_BRANDS.length) {
      params.delete(BRAND_PARAM);
    } else {
      params.set(BRAND_PARAM, next.join(','));
    }
    // Filtering must not send the visitor back to the top of the page.
    setSearchParams(params, { replace: true, state: { keepScroll: true } });
  };

  const visible = products.filter((product) => selected.includes(product.brand));

  return (
    <div className="lp-product-catalogue">
      <div className="container lp-product-catalogue__inner">
        <h1 className="visually-hidden">{text.catalogueTitle}</h1>

        <div className="lp-product-catalogue__filters" role="group" aria-labelledby={FILTER_LABEL_ID}>
          <Eyebrow id={FILTER_LABEL_ID}>{text.filtersLabel}</Eyebrow>
          <div className="lp-product-catalogue__chips">
            {ALL_BRANDS.map((brand) => (
              <Chip key={brand} checked={selected.includes(brand)} onChange={() => toggle(brand)}>
                {BRANDS[brand]}
              </Chip>
            ))}
          </div>
        </div>

        {/* Announces the effect of a filter change to screen reader users. */}
        <p className="visually-hidden" role="status">{text.resultCount(visible.length)}</p>

        {visible.length > 0 ? (
          <ul className="lp-product-catalogue__grid">
            {visible.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} linkLabel={text.cardLink} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="lp-product-catalogue__empty">{text.noBrandSelected}</p>
        )}
      </div>
    </div>
  );
}
