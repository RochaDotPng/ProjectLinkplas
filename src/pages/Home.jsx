import { useNavigate } from 'react-router-dom';
import BodyAboutSection from "../components/BodyAboutSection";
import BodyPolicySection from "../components/BodyPolicySection";
import BodySustainabilitySection from "../components/BodySustainabilitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductShowcaseSection from "../components/BodyProductShowcaseSection";
import BodyZorPartnershipSection from "../components/BodyZorPartnershipSection";
import PageMeta from '../components/seo/PageMeta/PageMeta';
import HomeHero from '../components/sections/HomeHero/HomeHero';

export default function Home() {
    const navigate = useNavigate();

    // The showcase still reports the old category and anchor; each maps to a product page.
    const PRODUCT_PAGES = {
        tupperlink: '/Products/recipiente-tupperlink',
        pharmalink: '/Products/caixa-de-transporte-de-medicamentos',
    };

    const handleProductChange = (product) => {
        navigate(PRODUCT_PAGES[product?.hash] ?? '/Products');
    };

    return (
        <div>
            <PageMeta page="home" />
            <Header/>
            <main id="conteudo" tabIndex={-1}>
                <HomeHero />
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