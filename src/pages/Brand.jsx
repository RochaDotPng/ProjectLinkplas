import { useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import BrandHero from '../components/sections/BrandHero/BrandHero';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import CheckList from '../components/content/CheckList/CheckList';
import ProductCard from '../components/cards/ProductCard/ProductCard';
import StandaloneLink from '../components/ui/StandaloneLink/StandaloneLink';
import { useBrand, useBrandsUi } from '../content/brands';
import { useProducts, useProductsUi } from '../content/products';
import { ROUTES } from '../content/routes';

export default function Brand() {
  const params = useParams();
  // The page transition keeps this page mounted for a moment after the address has moved
  // to another route, where there is no brand. It keeps showing its brand while it fades
  // out, and must not redirect from there.
  const lastSlug = useRef(params.brand);
  if (params.brand) lastSlug.current = params.brand;
  const brand = useBrand(lastSlug.current);
  const ui = useBrandsUi();
  const products = useProducts();
  const productsUi = useProductsUi();

  if (!brand) {
    if (!params.brand) return null;
    return <Navigate to={ROUTES.products} replace />;
  }

  const more = brand.more ?? [];
  const brandProducts = products.filter((product) => product.brand === brand.slug);

  return (
    <PageLayout>
      <PageMeta path={brand.path} meta={brand.meta} />
      <div className={`lp-brand lp-brand--${brand.slug}`}>
        <BrandHero
          brand={brand}
          groupLabel={ui.crumb}
          productsLabel={ui.allProducts(brand.name)}
          quoteLabel={ui.quote}
        />

        {more.map((block) => (
          <Section key={block.id} labelledBy={`marca-${block.id}`}>
            <div className="lp-split">
              <div className="lp-stack">
                <SectionHeading
                  id={`marca-${block.id}`}
                  eyebrow={block.eyebrow}
                  title={block.title}
                  description={block.text}
                />
                <CheckList items={block.points} marker="square" />
              </div>
              <div className="lp-media lp-media--contain">
                <img src={block.image} alt={block.imageAlt} loading="lazy" decoding="async" />
              </div>
            </div>
          </Section>
        ))}

        {/* Tinted when it follows a white band, so the two read as separate sections. */}
        <Section tone={more.length ? 'subtle' : 'page'} labelledBy="marca-produtos">
          <SectionHeading id="marca-produtos" title={ui.products(brand.name)} />
          <ul className="lp-grid lp-grid--3">
            {brandProducts.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} linkLabel={productsUi.cardLink} headingLevel="h3" />
              </li>
            ))}
          </ul>
          <StandaloneLink to={brand.productsPath}>{ui.allProducts(brand.name)}</StandaloneLink>
        </Section>
      </div>
    </PageLayout>
  );
}
