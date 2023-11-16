import Button from 'react-bootstrap/Button'

export default function BodyAboutSection() {
    return (
        <>
            <div className="about-container">
                <div className="about-text-container">
                    <h2>Sobre nós</h2>
                    <p>dummydummydummydummydummydummydummydummydummydummy
                        dummydummydummydummydummydummydummydummydummydummydummy
                        dummydummydummydummydummydummydummydummydummydummydummydummy
                    </p>
                    <Button>Ler mais</Button>
                </div>
                <div className="about-img-container">
                    <img src='./images/company-front.jpg' />
                </div>
            </div>
        </>
    )
}