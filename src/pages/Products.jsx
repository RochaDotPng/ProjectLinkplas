import Header from '../components/Header';
import Footer from '../components/Footer';
import PageMeta from '../components/seo/PageMeta/PageMeta';
import ProductCatalogue from '../components/sections/ProductCatalogue/ProductCatalogue';

export default function Products() {
  return (
    <div>
      <PageMeta page="products" />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <ProductCatalogue />
      </main>
      <Footer />
    </div>
  );
}
