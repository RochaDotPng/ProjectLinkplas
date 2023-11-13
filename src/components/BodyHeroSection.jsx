import Carousel from 'react-bootstrap/Carousel';

export default function BodyHeroSection() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='./images/company-front.jpg'></img>
                <Carousel.Caption>
                    <h2>LINKPLAS</h2>
                    <p>Uma empresa orientada para a excelência</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='./images/machine-front.jpg'></img>
                <Carousel.Caption>
                    <h3>LINKPLAS</h3>
                    <p>Tudo sobre plásticos</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

