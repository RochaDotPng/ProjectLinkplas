import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductSection from "../components/BodyProductsSection";
import ProductsIndustry from "../components/products-components/industry/ProductsIndustry"
import ProductsTakeAway from '../components/products-components/take_away/ProductsTakeAway';
import ProductsServices from '../components/products-components/services/ProductsServices';

export default function Products() {

    const [selectedProduct, setSelectedProduct] = useState('Industria');

    const handleProductChange = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <Header />
            <BodyProductSection className="mb-1" onProductChange={handleProductChange}  initialProduct={'Industria'}/>
            {selectedProduct === 'Industria' && <ProductsIndustry />}
            {selectedProduct === 'Take-Away' && <ProductsTakeAway />}
            {selectedProduct === 'Servicos' && <ProductsServices />}
            <Footer />
        </div>
    )
}