import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyContactsSection from "../components/BodyContactsSection";
import PageMeta from '../components/seo/PageMeta/PageMeta';

export default function Contacts() {
    return (
        <div>
            <PageMeta page="contacts" />
            <Header />
            <main id="conteudo" tabIndex={-1}>
                <BodyContactsSection/>
            </main>
            <Footer />
        </div>
    )
}