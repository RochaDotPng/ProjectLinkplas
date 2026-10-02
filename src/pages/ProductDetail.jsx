import { useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageMeta from '../components/seo/PageMeta/PageMeta';
import ProductDetailSection from '../components/sections/ProductDetail/ProductDetail';
import { BRAND_NAME } from '../content/site';
import { LEGACY_PRODUCT_PATHS, useProduct } from '../content/products';

export default function ProductDetail() {
  const params = useParams();
  // The page transition keeps this page mounted for a moment after the address has moved to
  // another route, where there is no slug. It keeps showing its product while it fades out,
  // and must not redirect from there.
  const lastSlug = useRef(params.slug);
  if (params.slug) lastSlug.current = params.slug;
  const slug = lastSlug.current;
  const product = useProduct(slug);

  if (!product) {
    if (!params.slug) return null;
    // Addresses of the old category pages land on the matching part of the catalogue.
    return <Navigate to={LEGACY_PRODUCT_PATHS[slug] ?? '/Products'} replace />;
  }

  return (
    <div>
      <PageMeta
        path={product.path}
        meta={{ title: `${product.name} - ${product.brandName} | ${BRAND_NAME}`, description: product.summary }}
      />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <ProductDetailSection product={product} />
      </main>
      <Footer />
    </div>
  );
}
