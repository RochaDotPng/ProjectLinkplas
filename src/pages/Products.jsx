import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductSection from "../components/BodyProductsSection";
import ProductsIndustry from "../components/products-components/industry/ProductsIndustry"
import ProductsTakeAway from '../components/products-components/take_away/ProductsTakeAway';
import ProductsServices from '../components/products-components/services/ProductsServices';
import ProductsFarmacy from '../components/products-components/farmacy/ProductsFarmacy';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  let { parameter } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(parameter);
  let navigate = useNavigate();

  // SEO content based on selected product category
  const getPageMeta = () => {
    switch(selectedProduct) {
      case 'Industria':
        return {
          title: 'Produtos Industriais - Linkplas',
          description: 'Produtos industriais Linkplas: abraçadeiras, tampas, intercalares, anilhas. Componentes plásticos de alta qualidade para aplicações industriais.',
          url: 'https://www.linkplas.pt/Products/Industria'
        };
      case 'Farmaceutica':
        return {
          title: 'Produtos Farmacêuticos - Linkplas',
          description: 'Caixas de transporte de medicamentos Linkplas. Produtos farmacêuticos em plástico de alta resistência, seguros e certificados.',
          url: 'https://www.linkplas.pt/Products/Farmaceutica'
        };
      case 'Take-Away':
        return {
          title: 'KeepyLink - Linkplas',
          description: 'Tupperwares take-away KeepyLink: recipientes reutilizáveis, tuppers ecológicos empilháveis. Alternativa sustentável aos descartáveis para restaurantes e delivery.',
          url: 'https://www.linkplas.pt/Products/Take-Away'
        };
      case 'Servicos':
        return {
          title: 'Serviços - Linkplas',
          description: 'Serviços Linkplas: soldadura por ultra sons de peças plásticas. Soluções técnicas especializadas para a indústria.',
          url: 'https://www.linkplas.pt/Products/Servicos'
        };
      default:
        return {
          title: 'Produtos - Linkplas',
          description: 'Descubra todos os produtos Linkplas: componentes industriais, produtos farmacêuticos, take-away KeepyLink e serviços de soldadura.',
          url: 'https://www.linkplas.pt/Products'
        };
    }
  };

  const pageMeta = getPageMeta();

  function ChangeUrl(param) {
    if (param == null || param == undefined) {
      navigate('/Products/Industria');
    } else {
      navigate('/Products/' + param);
    }
  }

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    ChangeUrl(product);
  };

  return (
    <div>
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:url" content={pageMeta.url} />
        <link rel="canonical" href={pageMeta.url} />
      </Helmet>
      <Header />
      <BodyProductSection className="mb-1" onProductChange={handleProductChange} initialProduct={parameter} isHomePage={false}/>
      {selectedProduct === 'Industria' && <ProductsIndustry />}
      {selectedProduct === 'Farmaceutica' && <ProductsFarmacy />}
      {selectedProduct === 'Take-Away' && <ProductsTakeAway />}
      {selectedProduct === 'Servicos' && <ProductsServices />}
      <Footer />
    </div>
  )
}