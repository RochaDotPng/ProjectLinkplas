import Carousel from 'react-bootstrap/Carousel';

export default function BodyHeroSection() {
    return (
        <>
        <Carousel interval="4000" className='carousel'>
            <Carousel.Item>
                <img alt='Imagem do parque de Vale de Cambra.' className='carousel-img' src='./images/home-hero-landscape.jpg'></img>
                <Carousel.Caption>
                    <h1 className='fw-bold'>LINKPLAS</h1>
                    <p className='fs-5' >Juntos, criamos soluções em plástico que não apenas transformam ideias em realidade, mas também cuidam do nosso planeta. Descubra uma parceria que vai além da inovação, moldando um amanhã mais verde, um projeto de cada vez</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='Imagem do produto Tupperlink' className="carousel-img" src='./images/tupperLink-hero.png'></img>
                <Carousel.Caption>
                    <h1 className='fw-bold'>TupperLink</h1>
                    <p className='fs-5' >Take-away economico e reutilizavel</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

