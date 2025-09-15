import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyContactsSection from "../components/BodyContactsSection";
import { Helmet } from 'react-helmet-async';

export default function Contacts() {
    return (
        <div>
            <Helmet>
                <title>Contactos - Linkplas</title>
                <meta name="description" content="Contacte a Linkplas: telefone +351 256 601 535, email geral@linkplas.pt. Localização em Oliveira de Azeméis. Pedir cotação para peças plásticas." />
                <meta property="og:title" content="Contactos - Linkplas | Entre em Contacto" />
                <meta property="og:description" content="Contacte a Linkplas para soluções em peças plásticas. Telefone, email e morada disponíveis." />
                <meta property="og:url" content="https://www.linkplas.pt/Contacts" />
                <link rel="canonical" href="https://www.linkplas.pt/Contacts" />
            </Helmet>
            <Header className="shadow z-3"/>
            <BodyContactsSection/>
            <Footer />
        </div>
    )
}