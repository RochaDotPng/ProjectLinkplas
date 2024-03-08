import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function BodyAboutSection() {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/About');
    };
    
    return (
        <>
            <Container>
                <div className="about-container">
                    <div className="about-text-container">
                        <h1 className="fw-bold mb-4">Sobre</h1>
                        <p>A LinkPlas é uma empresa industrial de produção e comercialização de plásticos para peças industriais, e para outros fins. Somos uma organização dinâmica, moderna e dedicada na satisfação das necessidades dos nossos clientes.</p>
                        <p>Apesar de sermos uma empresa com uma história recente, podemos afirmar que possuímos um Know-how bastante especializado e a tecnologia mais avançada na indústria, já que a aposta na inovação, é uma constante na nossa empresa.</p>
                    </div>
                    <div className="about-img-container">
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