import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductSection from "../components/BodyProductsSection";
import ProductsIndustry from "../components/products-components/industry/ProductsIndustry"
import ProductsTakeAway from '../components/products-components/take_away/ProductsTakeAway';
import ProductsServices from '../components/products-components/services/ProductsServices';
import ProductsFarmacy from '../components/products-components/farmacy/ProductsFarmacy';

export default function Products() {
  let { parameter } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(parameter);
  let navigate = useNavigate();

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