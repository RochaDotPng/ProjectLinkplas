import { useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PageMeta from '../components/seo/PageMeta/PageMeta';
import PageLayout from '../components/sections/PageLayout/PageLayout';
import BrandHero from '../components/sections/BrandHero/BrandHero';
import Section from '../components/content/Section/Section';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import CheckList from '../components/content/CheckList/CheckList';
import QuoteBlock from '../components/content/QuoteBlock/QuoteBlock';
import TimelineItem from '../components/content/TimelineItem/TimelineItem';
import FeatureCard from '../components/cards/FeatureCard/FeatureCard';
import ProductCard from '../components/cards/ProductCard/ProductCard';
import Stat from '../components/cards/Stat/Stat';
import TestimonialCard from '../components/cards/TestimonialCard/TestimonialCard';
import Badge from '../components/ui/Badge/Badge';
import ContentPlaceholder from '../components/ui/ContentPlaceholder/ContentPlaceholder';
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

  const { purpose, advantages, features, origin, proof } = brand;
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

        <Section labelledBy="marca-proposito">
          <div className="lp-split">
            <div className="lp-stack">
              <SectionHeading id="marca-proposito" title={ui.purpose} />
              <div className="lp-prose lp-prose--lead">
                <p>{purpose.text}</p>
              </div>
            </div>
            <div className="lp-stack">
              <h3 className="lp-subheading">{ui.audience}</h3>
              <CheckList items={purpose.audience} />
            </div>
          </div>
          {purpose.quote && <QuoteBlock quote={purpose.quote} />}
        </Section>

        <Section tone="subtle" labelledBy="marca-vantagens">
          <SectionHeading id="marca-vantagens" title={ui.advantages} />
          {advantages.cards && (
            <ul className="lp-grid lp-grid--3">
              {advantages.cards.map((card) => (
                <li key={card.title}>
                  <FeatureCard title={card.title} description={card.description} icon={card.icon} />
                </li>
              ))}
            </ul>
          )}
          {advantages.items && <CheckList items={advantages.items} />}
          {advantages.note && <p className="lp-note">{advantages.note}</p>}
        </Section>

        <Section labelledBy="marca-caracteristicas">
          <SectionHeading id="marca-caracteristicas" title={ui.features} />
          {features.cards && (
            <ul className="lp-grid lp-grid--3">
              {features.cards.map((card) => (
                <li key={card.title}>
                  <FeatureCard
                    title={card.title}
                    description={card.description}
                    number={card.number}
                    icon={card.icon}
                    variant="subtle"
                  />
                </li>
              ))}
            </ul>
          )}
          {features.stat && (
            <div className="lp-split">
              <Stat value={features.stat.value} label={features.stat.label} />
              <div className="lp-stack">
                <h3 className="lp-subheading">{ui.materials}</h3>
                <ul className="lp-tag-list">
                  {features.materials.map((material) => (
                    <li key={material}><Badge size="medium">{material}</Badge></li>
                  ))}
                </ul>
                <CheckList items={features.checklist} />
              </div>
            </div>
          )}

          <h3 className="lp-subheading">{ui.products(brand.name)}</h3>
          <ul className="lp-grid lp-grid--3">
            {brandProducts.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} linkLabel={productsUi.cardLink} headingLevel="h4" />
              </li>
            ))}
          </ul>
          <StandaloneLink to={brand.productsPath}>{ui.allProducts(brand.name)}</StandaloneLink>
        </Section>

        <Section tone="subtle" labelledBy="marca-origem">
          <SectionHeading id="marca-origem" title={ui.origin} />
          <ol className="lp-timeline">
            {origin.timeline.map((entry) => (
              <TimelineItem key={entry.year} year={entry.year} title={entry.title} />
            ))}
          </ol>
          <ContentPlaceholder>{origin.missing}</ContentPlaceholder>
        </Section>

        <Section labelledBy="marca-clientes">
          <SectionHeading id="marca-clientes" title={ui.proof} />
          {proof.clients && (
            <div className="lp-stack">
              <p className="lp-note">{proof.clientsLabel}</p>
              <ul className="lp-tag-list">
                {proof.clients.map((client) => (
                  <li key={client}><Badge size="medium">{client}</Badge></li>
                ))}
              </ul>
            </div>
          )}
          {proof.testimonial && (
            <TestimonialCard
              quote={proof.testimonial.quote}
              name={proof.testimonial.name}
              role={proof.testimonial.role}
            />
          )}
          {proof.link && <StandaloneLink to={proof.link.to}>{proof.link.label}</StandaloneLink>}
          {proof.missing && <ContentPlaceholder>{proof.missing}</ContentPlaceholder>}
        </Section>
      </div>
    </PageLayout>
  );
}
