import { useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageMeta from '../components/seo/PageMeta/PageMeta';
import ProductDetailSection from '../components/sections/ProductDetail/ProductDetail';
import { BRAND_NAME } from '../content/site';
import { useProduct } from '../content/products';
import { ROUTES } from '../content/routes';

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
    return <Navigate to={ROUTES.products} replace />;
  }

  return (
    <div>
      <PageMeta
        path={product.path}
        meta={{ title: `${product.name} - ${product.brandName} | ${BRAND_NAME}`, description: product.summary }}
      />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        {/* Keyed by product so the chosen size and colours never carry over to another product. */}
        <ProductDetailSection key={product.slug} product={product} />
      </main>
      <Footer />
    </div>
  );
}
