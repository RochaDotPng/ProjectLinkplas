import SustainabilityCard from "./SustainabilityCard"

export default function BodySustainabilitySection() {
    return (
        <>
            <div className="sustain-container">
                <h2 className="sustainability-title">Sustentabilidade</h2>
                <div className="sustainability-cards-container">
                    <SustainabilityCard src={"./images/office1.jpeg"} />
                    <SustainabilityCard src={"./images/office1.jpeg"} />
                    <SustainabilityCard src={"./images/office1.jpeg"} />
                </div>
            </div>
        </>
    )
}