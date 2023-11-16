import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyServicesSection from "../components/BodyServicesSection";
import BodyGallerySection from "../components/BodyGallerySection";
import BodyPolicySection from "../components/BodyPolicySection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <BodyHeroSection />
            <BodyAboutSection/>
            <BodyServicesSection/>
            <BodyGallerySection/>
            <BodyPolicySection/>
            <Footer />
        </div>
    )
}