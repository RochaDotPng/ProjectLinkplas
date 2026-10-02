import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyContactsSection from "../components/BodyContactsSection";
import { Helmet } from 'react-helmet-async';

export default function Contacts() {
    return (
        <div>
            <Helmet>
                <title>Contactos - LinkPlas</title>
                <meta name="description" content="Contacte a LinkPlas: telefone +351 256 601 535, email geral@linkplas.pt. Localização em Oliveira de Azeméis. Pedir cotação para peças plásticas." />
                <meta property="og:title" content="Contactos - LinkPlas | Entre em Contacto" />
                <meta property="og:description" content="Contacte a LinkPlas para soluções em peças plásticas. Telefone, email e morada disponíveis." />
                <meta property="og:url" content="https://www.linkplas.pt/Contacts" />
                <meta property="og:updated_time" content="2026-03-12T00:00:00+00:00" />
                <link rel="canonical" href="https://www.linkplas.pt/Contacts" />
            </Helmet>
            <Header />
            <main id="conteudo" tabIndex={-1}>
                <BodyContactsSection/>
            </main>
            <Footer />
        </div>
    )
}