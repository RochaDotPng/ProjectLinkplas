import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function UltraSons() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-2 text-white">Soldadura por Ultra Sons</h1>
            <div className="product-container-vertical">
                
                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <span>A Linkplas tem a capacidade interna para realizar soldadura de peças plásticas por ultra sons.</span>
                    <br></br>
                    <span>Temos assim a capacidade única de ajustar o processo de solda a variações peça-a-peça e materiais únicos.</span>
                    <p>Benefícios da soldadura por ultras som incluem:</p>
                    <ul>
                        <li>Tempos de ciclo curto;</li>
                        <li>Repetibilidade excecional;</li>
                        <li>Sem tempo de cura, gera uma robusta união imediata</li>
                        <li>Sem consumíveis.</li>
                    </ul>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                    </div>
                </div>

                {/* Service Image Section */}
                <div className="product-images-section mb-4">
                    <div className="text-center">
                        <img alt='Imagem de máquina de soldar com ultrasons' className='service-img img-fluid' src='../images/soldadura-ultrassons.jpg'></img>
                    </div>
                </div>
            </div>
        </Container>
    )
}