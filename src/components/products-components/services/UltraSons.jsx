import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function UltraSons() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>

            <div className="product-container mt-5 product-tampa">
                <div className="product-img-container">
                    <div className='ultrasons-img-div'>
                        <img alt='Imagem de máquina de soldar com ultrasons' className='ultrasons-img' src='../images/soldadura-ultrassons.jpg'></img>
                    </div>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Soldadura por Ultra Sons</h1>
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
                    <div className='d-flex gap-3 justify-content-between'>
                        <div>
                            <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}