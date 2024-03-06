import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductSection from "../components/BodyProductsSection";
import ProductsIndustry from "../components/ProductsIndustry"

export default function Products() {
    return (
        <div>
            <Header />
            <BodyProductSection className="mb-1" />
            <ProductsIndustry></ProductsIndustry>
            <Footer />
        </div>
    )
}