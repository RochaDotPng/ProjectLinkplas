import Header from "../components/Header";
import Footer from "../components/Footer";
import GreenCard from "../components/about-components/GreenCard";

export default function About() {
    return (
        <div>
            <Header />
            <div className="about-body-img">
                <h1 className='fw-bold text-shadow'>Sobre nós</h1>
            </div>
            <GreenCard/>
            <Footer />
        </div>
    )
}