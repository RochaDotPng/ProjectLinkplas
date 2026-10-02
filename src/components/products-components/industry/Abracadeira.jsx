import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Abracadeira(){
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return(
        <Container>
            <h1 className="fw-bold mb-24 mt-48 text-white">Abraçadeira</h1>
            <div className="product-container-vertical">
                
                {/* Mobile: Images first */}
                <div className="product-images-section mb-24 d-block d-md-none">
                    <div className="row">
                        <div className="col-md-4 mb-16">
                            <img alt='Imagem da abraçadeira plástica' className='product-img img-fluid' src='../images/abracadeira.png'></img>
                        </div>
                        <div className="col-md-4 mb-16">
                            <img alt='Imagem da de uma perna com as abraçadeiras montadas' className='product-img img-fluid' src='../images/perna1.png'></img>
                        </div>
                        <div className="col-md-4 mb-16">
                            <img alt='Animação da montagem da abraçadeira na perna' className='product-animation img-fluid' src='../images/perna_animation.gif'></img>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className='product-description-section mb-24'>
                    <p className="mb-24">A inovadora Abraçadeira para Tubo da LinkPlas: a solução perfeita para fixação eficiente e de confiança. Com um design inteligente e encaixe fácil, nossa abraçadeira de plástico proporciona uma instalação sem complicações, enquanto a sua resistência garante segurança duradoura. Moldada com precisão, a nossa abraçadeira é a escolha ideal para garantir a estabilidade e integridade dos seus projetos.</p>
                    
                    <div className="product-actions mb-24">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-16 me-16'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-16 btn-secondary text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-8 bi bi-download'></i>
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
                </div>

                {/* Desktop: Images after description */}
                <div className="product-images-section d-none d-md-block">
                    <div className="row">
                        <div className="col-md-4 mb-16">
                            <img alt='Imagem da abraçadeira plástica' className='product-img img-fluid' src='../images/abracadeira.png'></img>
                        </div>
                        <div className="col-md-4 mb-16">
                            <img alt='Imagem da de uma perna com as abraçadeiras montadas' className='product-img img-fluid' src='../images/perna1.png'></img>
                        </div>
                        <div className="col-md-4 mb-16">
                            <img alt='Animação da montagem da abraçadeira na perna' className='product-animation img-fluid' src='../images/perna_animation.gif'></img>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}