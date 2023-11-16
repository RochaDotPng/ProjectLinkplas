import BodyHeroSection from "../components/BodyHeroSection";
import BodyServicesSection from "../components/BodyServicesSection";
import BodyGallerySection from "../components/BodyGallerySection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <BodyHeroSection />
            <BodyServicesSection/>
            <BodyGallerySection/>
            <Footer />
        </div>
    )
}