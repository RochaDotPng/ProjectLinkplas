import SustainabilityCard from "./SustainabilityCard"

export default function BodySustainabilitySection() {
    return (
        <>
            <div className="sustain-container overflow-hidden">
                <h2 className="sustainability-title">Sustentabilidade</h2>
                <div className="sustainability-cards-container">
                    <SustainabilityCard 
                        src="./images/sustainability-1.jpg"
                        title="Sustentabilidade Economica"
                        text="Atuar de forma económica e ambientalmente responsável" 
                    />
                    <SustainabilityCard 
                        src="./images/sustainability-2.jpg"
                        title="Sustentabilidade Industrial"
                        text="Utilizar materiais reciclados e a reutilização de óleos mecanicos" 
                    />
                    <SustainabilityCard 
                        src="./images/sustainability-3.jpg"
                        title="Sustentabilidade Social"
                        text="Atuar de forma económica, ambiental e socialmente responsável" 
                    />
                </div>
            </div>
        </>
    )
}