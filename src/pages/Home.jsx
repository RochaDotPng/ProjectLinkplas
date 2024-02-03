import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyServicesSection from "../components/BodyServicesSection";
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
            <BodyServicesSection/>
            <BodyAboutSection/>
            <BodyPolicySection/>
            <Footer />
        </div>
    )
}