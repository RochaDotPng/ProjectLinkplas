import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyContactsSection from "../components/BodyContactsSection";

export default function Contacts() {
    return (
        <div>
            <Header className="shadow z-3"/>
            <BodyContactsSection/>
            <Footer />
        </div>
    )
}