import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CardSection from './CardSection';

export default function BodyAboutSection() {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/About');
    };
    
    return (
        <>  
            <Container>
            <CardSection jsonPath="./LinkplasData/cards.json"></CardSection>
                <div className="about-container">
                    <div className="about-text-container">
                        <h1 className="fw-bold mb-4">Sobre</h1>
                        <span>Somos especializados na transformação de matéria plástica, utilizando o nosso processo de Injeção em que contamos com uma equipa dinâmica e profissional dedicada a superar expectativas e atender às necessidades dos nossos clientes.</span>
                        <br />
                        <br />
                        <span>Temos como compromisso fornecer soluções de alta qualidade e personalizadas para empresas industriais em todo o mundo.</span>
                    </div>
                    <div aria-label='Imagem do escritorio da Linkplas' className="about-img-container">
                        <div className='about-vision-div'>
                            <div>
                                <h5>Visão</h5>
                                <p className='hightlight m-0'>Dar uma resposta global às necessidades dos mais exigentes clientes</p>
                            </div>
                            <div>
                                <a onClick={handleNavigate} className='pointer link-light text-decoration-none d-flex fw-semibold align-items-center'>Saber mais<i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className='about-mission-div'>
                            <div>
                                <h5>Missão</h5>
                                <p className='highlight m-0'>Fornecer peças e componentes plásticos de elevada qualidade e complexidade técnica, desenvolvendo as mais eficientes e inovadoras soluções</p>
                            </div>
                            <div>
                                <a onClick={handleNavigate} className='pointer link-light text-decoration-none d-flex fw-semibold align-items-center gap-1'>Saber mais <i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}