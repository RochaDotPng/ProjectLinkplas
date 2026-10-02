import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../navigation/Breadcrumb/Breadcrumb';
import Button from '../../ui/Button/Button';
import Chip from '../../ui/Chip/Chip';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import ModelViewer from '../../ui/ModelViewer/ModelViewer';
import StandaloneLink from '../../ui/StandaloneLink/StandaloneLink';
import SubbrandTag from '../../ui/SubbrandTag/SubbrandTag';
import SpecTable from '../../content/SpecTable/SpecTable';
import DownloadCard from '../../cards/DownloadCard/DownloadCard';
import ColourOptions from './ColourOptions';
import { useProductsUi } from '../../../content/products';

const VARIANT_PARAM = 'medida';
const VARIANT_LABEL_ID = 'lp-product-variant';

export default function ProductDetail({ product }) {
  const text = useProductsUi();
  const [searchParams, setSearchParams] = useSearchParams();
  const { variants } = product;

  const selected = variants.find((variant) => variant.id === searchParams.get(VARIANT_PARAM)) ?? variants[0];

  // The preview follows the selected size when that size has a 3D model. When it has none,
  // the preview keeps the model it was showing and the page says which size that is.
  const lastWithModel = useRef(null);
  if (selected?.model) lastWithModel.current = { slug: product.slug, id: selected.id };
  const remembered = lastWithModel.current?.slug === product.slug ? lastWithModel.current.id : null;
  const previewed = selected?.model
    ? selected
    : variants.find((variant) => variant.id === remembered) ?? variants.find((variant) => variant.model);

  const selectVariant = (id) => {
    const params = new URLSearchParams(searchParams);
    params.set(VARIANT_PARAM, id);
    setSearchParams(params, { replace: true, state: { keepScroll: true } });
  };

  // Colour of each part of the 3D model, keyed by the part's material. An untouched part
  // keeps the finish its model starts in: its `start` colour, or clear when it has none.
  const { colours } = product;
  const [chosenFinishes, setChosenFinishes] = useState({});
  const finishOf = (part) => chosenFinishes[part.material] ?? (part.start ? { color: part.start } : {});
  const showColours = Boolean(colours && previewed);

  const fullName = selected ? `${product.name} (${selected.label})` : product.name;
  // The quote request names the colours, since a colour made to order is part of the request.
  const quoteMessage = [
    text.quoteMessage(fullName),
    ...(showColours
      ? colours.parts.map((part) => `${part.label}: ${finishOf(part).color?.toUpperCase() ?? text.clearFinish}`)
      : []),
  ].join('\n');
  const specRows = [...(selected?.specs ?? []), ...product.specs].map((spec) => [spec.label, spec.value]);
  const downloads = [...(selected?.downloads ?? []), ...product.downloads];

  // The comparison table only helps when the sizes differ in more than their name.
  const comparisonKeys = variants.length > 1 ? variants[0].specs.map((spec) => spec.key) : [];
  const showComparison = comparisonKeys.length > 1;

  return (
    <div className="container lp-product-detail">
      <Breadcrumb
        label={text.breadcrumbLabel}
        items={[
          { label: text.home, to: '/' },
          { label: text.catalogueTitle, to: '/Products' },
          { label: product.brandName, to: `/Products?marcas=${product.brand}` },
          { label: product.name },
        ]}
      />

      <div className="lp-product-detail__top">
        <div className="lp-product-detail__preview">
          {previewed ? (
            <ModelViewer
              src={previewed.model}
              alt={text.viewer.alt(`${product.name} (${previewed.label})`)}
              labels={text.viewer}
              fallback={<ImagePlaceholder />}
              finishes={showColours ? Object.fromEntries(colours.parts.map((part) => [part.material, finishOf(part)])) : undefined}
            />
          ) : (
            <div className="lp-product-detail__image">
              <ImagePlaceholder />
            </div>
          )}
          {previewed && previewed !== selected && (
            <p className="lp-product-detail__preview-note" role="status">{text.previewOf(previewed.label, selected.label)}</p>
          )}
        </div>

        <div className="lp-product-detail__summary">
          <SubbrandTag brand={product.brand} />
          <h1 className="h3 lp-product-detail__name">{product.name}</h1>
          <p className="lp-product-detail__lead">{product.summary}</p>

          {variants.length > 1 && (
            <div className="lp-product-detail__variants" role="radiogroup" aria-labelledby={VARIANT_LABEL_ID}>
              <p id={VARIANT_LABEL_ID} className="lp-product-detail__variants-label">{product.variantLabel}</p>
              <div className="lp-product-detail__chips">
                {variants.map((variant) => (
                  <Chip
                    key={variant.id}
                    type="radio"
                    name={VARIANT_PARAM}
                    value={variant.id}
                    checked={variant.id === selected.id}
                    onChange={() => selectVariant(variant.id)}
                  >
                    {variant.label}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          {showColours &&
            colours.parts.map((part) => (
              <ColourOptions
                key={part.material}
                name={part.material}
                label={part.label}
                canBeClear={!part.start}
                anyColour={part.start ?? colours.anyColour}
                value={finishOf(part)}
                onChange={(finish) => setChosenFinishes((current) => ({ ...current, [part.material]: finish }))}
                text={text}
              />
            ))}

          <Button as={Link} to="/Contacts" state={{ message: quoteMessage }} size="large">
            {text.requestQuote}
          </Button>
        </div>
      </div>

      <div className="lp-product-detail__sections">
        <section className="lp-product-detail__section" aria-labelledby="lp-product-description">
          <h2 id="lp-product-description" className="h4">{text.description}</h2>
          <div className="lp-product-detail__text">
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {product.features && (
              <>
                <p>{product.featuresTitle}:</p>
                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        {(specRows.length > 0 || showComparison) && (
          <section className="lp-product-detail__section" aria-labelledby="lp-product-specs">
            <h2 id="lp-product-specs" className="h4">{text.specifications}</h2>
            {specRows.length > 0 && (
              <div className="lp-product-detail__spec-table">
                <SpecTable caption={`${text.specifications}: ${fullName}`} columns={text.specHeader} rows={specRows} />
              </div>
            )}
            {showComparison && (
              <>
                <h3 className="h6 lp-product-detail__subheading">{text.allVariants}</h3>
                <SpecTable
                  caption={`${text.allVariants}: ${product.name}`}
                  columns={variants[0].specs.map((spec) => spec.label)}
                  rows={variants.map((variant) =>
                    comparisonKeys.map((key) => variant.specs.find((spec) => spec.key === key)?.value ?? '—')
                  )}
                />
              </>
            )}
          </section>
        )}

        {downloads.length > 0 && (
          <section className="lp-product-detail__section" aria-labelledby="lp-product-downloads">
            <h2 id="lp-product-downloads" className="h4">{text.downloads}</h2>
            <ul className="lp-product-detail__downloads">
              {downloads.map((download) => (
                <li key={download.href}>
                  <DownloadCard {...download} actionLabel={text.downloadAction} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <StandaloneLink to="/Products">{text.allProducts}</StandaloneLink>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    featuresTitle: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    variantLabel: PropTypes.string,
    variants: PropTypes.array.isRequired,
    colours: PropTypes.shape({
      anyColour: PropTypes.string,
      parts: PropTypes.array.isRequired,
    }),
    specs: PropTypes.array.isRequired,
    downloads: PropTypes.array.isRequired,
  }).isRequired,
};
