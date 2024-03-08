import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Abracadeira(){
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return(
        <Container>
            <h1 className="fw-bold mb-2 mt-5">Abraçadeira</h1>
            <div className="product-container">
                <div className='product-text-container'>
                    <p>A inovadora Abraçadeira para Tubo da Linkplas: a solução perfeita para fixação eficiente e de confiança. Com um design inteligente e encaixe fácil, nossa abraçadeira de plástico proporciona uma instalação sem complicações, enquanto a sua resistência garante segurança duradoura. Moldada com precisão, a nossa abraçadeira é a escolha ideal para garantir a estabilidade e integridade dos seus projetos.</p>
                    <div>
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary ms-3 text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="../files/catalogo_Linkplas_sem_taco.pdf" download>Catalogo</Dropdown.Item>
                                <Dropdown.Item href="../files/Abracadeira/7017030008.DWG" download>2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="../files/Abracadeira/7017030008.IGS" download>3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="../files/Abracadeira/7017030008.STEP" download>3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="../files/Abracadeira/7017030008.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <img className='perna-animation' src='../images/perna_animation.gif'></img>
                </div>
                <div className="product-img-container">
                    <div className='abracadeira-square'>
                        <h5 className='mb-4'>Aplicação fácil</h5>
                        <p>Permite uma fixação instantânea em qualquer posição</p>
                    </div>
                    <img className='abracadeira-img' src='../images/abracadeira.png'></img>
                    <img className='perna-img' src='../images/perna1.png'></img>
                </div>
            </div>
        </Container>
    )
}