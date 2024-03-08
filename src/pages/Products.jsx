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
  let isChangeURL = false;
  let { parameter } = useParams();
  if (parameter == undefined) {
    let isChangeURL = true;
    parameter = "Industria";
  }
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
  if (isChangeURL) {
    useEffect(() => {
      handleProductChange(parameter);
    }, []) //this is here with an array with only 1 item so it runs only once at the loading of the page
  }

  return (
    <div>
      <Header />
      <BodyProductSection className="mb-1" onProductChange={handleProductChange} initialProduct={parameter} />
      {selectedProduct === 'Industria' && <ProductsIndustry />}
      {selectedProduct === 'Farmaceutica' && <ProductsFarmacy />}
      {selectedProduct === 'Take-Away' && <ProductsTakeAway />}
      {selectedProduct === 'Servicos' && <ProductsServices />}
      <Footer />
    </div>
  )
}