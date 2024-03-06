import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductSection from "../components/BodyProductsSection";
import ProductsIndustry from "../components/ProductsIndustry"

export default function Products() {

    const [selectedProduct, setSelectedProduct] = useState('Indústria');

    const handleProductChange = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <Header />
            <BodyProductSection className="mb-1" onProductChange={handleProductChange}  initialProduct={'Indústria'}/>
            {selectedProduct === 'Indústria' && <ProductsIndustry />}
            <Footer />
        </div>
    )
}