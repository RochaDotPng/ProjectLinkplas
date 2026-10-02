import { useNavigate } from 'react-router-dom';
import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyPolicySection from "../components/BodyPolicySection";
import BodySustainabilitySection from "../components/BodySustainabilitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductShowcaseSection from "../components/BodyProductShowcaseSection";
import BodyZorPartnershipSection from "../components/BodyZorPartnershipSection";
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>LinkPlas - Peças Plásticas & TupperLink Take-Away</title>
                <meta name="description" content="LinkPlas - especialistas em peças plásticas e tupperwares take-away TupperLink. Recipientes reutilizáveis para delivery, tuppers ecológicos empilháveis e componentes industriais desde 2012." />
                <meta name="keywords" content="LinkPlas, peças plásticas, tupperwares takeaway, tuppers take away, recipientes reutilizáveis, delivery containers Portugal, TupperLink, PharmaLink, componentes industriais" />
                <meta property="og:title" content="LinkPlas - Peças Plásticas & Tupperwares Take-Away TupperLink" />
                <meta property="og:description" content="LinkPlas - especialistas em peças plásticas e tupperwares take-away TupperLink. Recipientes reutilizáveis para delivery e componentes industriais desde 2012." />
                <meta property="og:url" content="https://www.linkplas.pt/" />
                <meta property="og:updated_time" content="2026-03-12T00:00:00+00:00" />
                <link rel="canonical" href="https://www.linkplas.pt/" />
            </Helmet>
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