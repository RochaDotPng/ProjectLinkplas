import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            <Header />
            <div className="about-body-img">
                <h1 className='fw-bold text-shadow'>Sobre nós</h1>
            </div>
            <Footer />
        </div>
    )
}