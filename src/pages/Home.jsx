import BodyHeroSection from "../components/BodyHeroSection";
import BodyAboutSection from "../components/BodyAboutSection";
import BodyProductSection from "../components/BodyProductsSection";
import BodyPolicySection from "../components/BodyPolicySection";
import BodySustainabilitySection from "../components/BodySustainabilitySection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Linkplas - Peças Plásticas</title>
                <meta name="description" content="Linkplas: tupperwares take-away KeepyLink, recipientes reutilizáveis para delivery. Empresa portuguesa líder em peças plásticas desde 2012. Tuppers ecológicos e componentes industriais." />
                <meta name="keywords" content="tupperwares takeaway, tuppers take away, recipientes reutilizáveis, delivery containers Portugal, KeepyLink, peças plásticas, componentes industriais" />
                <meta property="og:title" content="Linkplas - Tupperwares Take-Away KeepyLink | Portugal" />
                <meta property="og:description" content="Tupperwares take-away KeepyLink e peças plásticas. Recipientes reutilizáveis para delivery e componentes industriais desde 2012." />
                <meta property="og:url" content="https://www.linkplas.pt/" />
                <link rel="canonical" href="https://www.linkplas.pt/" />
            </Helmet>
            <Header/>
            <BodyHeroSection />
            {/*<BodySustainabilitySection/>*/}
            <BodyProductSection isHomePage={true} initialProduct={null}/>
            <BodyAboutSection/>
            <BodyPolicySection/>
            <Footer />
        </div>
    )
}