import { useNavigate } from 'react-router-dom';
import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyPolicySection from "../components/BodyPolicySection";
import BodySustainabilitySection from "../components/BodySustainabilitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyProductShowcaseSection from "../components/BodyProductShowcaseSection";
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const navigate = useNavigate();

    const handleProductChange = (product) => {
        navigate(`/Products/${product}`);
    };

    return (
        <div>
            <Helmet>
                <title>Linkplas - Peças Plásticas & KeepyLink Take-Away</title>
                <meta name="description" content="Linkplas - especialistas em peças plásticas e tupperwares take-away KeepyLink. Recipientes reutilizáveis para delivery, tuppers ecológicos empilháveis e componentes industriais desde 2012." />
                <meta name="keywords" content="Linkplas, peças plásticas, tupperwares takeaway, tuppers take away, recipientes reutilizáveis, delivery containers Portugal, KeepyLink, componentes industriais" />
                <meta property="og:title" content="Linkplas - Peças Plásticas & Tupperwares Take-Away KeepyLink" />
                <meta property="og:description" content="Linkplas - especialistas em peças plásticas e tupperwares take-away KeepyLink. Recipientes reutilizáveis para delivery e componentes industriais desde 2012." />
                <meta property="og:url" content="https://www.linkplas.pt/" />
                <meta property="og:updated_time" content="2026-03-12T00:00:00+00:00" />
                <link rel="canonical" href="https://www.linkplas.pt/" />
            </Helmet>
            <Header/>
            <BodyHeroSection />
            {/*<BodySustainabilitySection/>*/}
            <BodyProductShowcaseSection onProductChange={handleProductChange}/>
            <BodyAboutSection/>
            <BodyPolicySection/>
            <Footer />
        </div>
    )
}