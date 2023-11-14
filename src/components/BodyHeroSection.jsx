import Carousel from 'react-bootstrap/Carousel';

export default function BodyHeroSection() {
    return (
        <Carousel interval="4000" className='carousel'>
            <Carousel.Item>
                <img className='carousel-img' src='./images/company-front-carousel.jpg'></img>
                <Carousel.Caption>
                    <h1 className='fw-bold'>LINKPLAS</h1>
                    <p className='fs-5' >Uma empresa orientada para a excelência</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src='./images/machine-front-carousel.jpg'></img>
                <Carousel.Caption>
                    <h1 className='fw-bold'>LINKPLAS</h1>
                    <p className='fs-5' >Tudo sobre plásticos</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

