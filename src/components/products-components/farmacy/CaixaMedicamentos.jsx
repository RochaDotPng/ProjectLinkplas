import { Button, Container, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function CaixaMedicamentos() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>

            <div className="product-container mt-5">
                <div className="product-img-container">
                    <div className='ultrasons-img-div'>
                        <img className='ultrasons-img' src='./images/ultra-sons.png'></img>
                    </div>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Soldadura por Ultra Sons</h1>
                    <p>TupperLink: a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza.  A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente</p>
                    
                    <p>Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os  TupperLink oferecem praticidade sem igual</p>
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