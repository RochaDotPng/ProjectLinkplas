import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyProductSection from "../components/BodyProductsSection";
import BodyPolicySection from "../components/BodyPolicySection";
import BodySustainabilitySection from "../components/BodySustainabilitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <BodyHeroSection />
            <BodySustainabilitySection/>
            <BodyProductSection/>
            <BodyAboutSection/>
            <BodyPolicySection/>
            <Footer />
        </div>
    )
}