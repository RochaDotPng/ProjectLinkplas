import Cards from '../components/Cards';

export default function BodyServicesSection() {
    return (
        <>
            <div className="services-body-container">
                <div className="services-body-img"></div>
                <div className="services-text">
                    <h2>Os nossos serviços</h2>
                </div>
                <div className="cards-container">
                    <Cards title={"teste"} text={"teste"} />
                    <Cards title={"teste"} text={"teste"} />
                    <Cards title={"teste"} text={"teste"} />
                    <Cards title={"teste"} text={"teste"} />
                </div>
            </div>
        </>
    )
}