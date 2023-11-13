import Carousel from 'react-bootstrap/Carousel';

export default function BodyHeroSection() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='./images/company-front.jpg'></img>
                <Carousel.Caption>
                    <h2 className='fw-bold'>LINKPLAS</h2>
                    <p>Uma empresa orientada para a excelência</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='./images/machine-front.jpg'></img>
                <Carousel.Caption>
                    <h3 className='fw-bold'>LINKPLAS</h3>
                    <p>Tudo sobre plásticos</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

