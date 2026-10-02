import { useNavigate } from 'react-router-dom';
import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyPolicySection from "../components/BodyPolicySection";
import BodySustainabilitySection from "../components/BodySustainabilitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductShowcaseSection from "../components/BodyProductShowcaseSection";
import BodyZorPartnershipSection from "../components/BodyZorPartnershipSection";
import PageMeta from '../components/seo/PageMeta/PageMeta';

export default function Home() {
    const navigate = useNavigate();

    const handleProductChange = (product) => {
        if (typeof product === 'string') {
            navigate(`/Products/${product}`);
            return;
        }

        const category = product?.category;
        const hash = product?.hash;
        if (category) {
            navigate(`/Products/${category}${hash ? `#${hash}` : ''}`);
            return;
        }

        // Fallback (keeps previous behavior even if payload is unexpected)
        navigate(`/Products/Farmaceutica`);
    };

    return (
        <div>
            <PageMeta page="home" />
            <Header/>
            <main id="conteudo" tabIndex={-1}>
                <BodyHeroSection />
                {/*<BodySustainabilitySection/>*/}
                <BodyProductShowcaseSection onProductChange={handleProductChange}/>
                <BodyZorPartnershipSection />
                <BodyAboutSection/>
                <BodyPolicySection/>
            </main>
            <Footer />
        </div>
    )
}