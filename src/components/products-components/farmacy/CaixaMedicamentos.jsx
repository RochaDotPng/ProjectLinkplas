import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function CaixaMedicamentos() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>

            <div className="product-container mt-5">
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-5 ">Caixa de medicamentos</h1>
                    <p className='mb-3'>Caixa de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos. Com dimensões otimizadas para facilidade de manuseamento e armazenamento, esta caixa possui um sistema de fecho seguro e é resistente a variações de temperatura e humidade. Ideal para uso em farmácias, hospitais e clínicas, garante a integridade e a qualidade dos medicamentos durante o transporte.</p>
                    <div className='d-flex gap-3 justify-content-between'>
                        <div>
                            <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        </div>
                    </div>
                </div>
                <div className="product-img-container">
                    <div className='ultrasons-img-div'>
                        <img className='ultrasons-img' src='../images/ultra-sons.png'></img>
                    </div>
                </div>
            </div>
        </Container>
    )
}