import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Intercalar() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-24 mt-48 text-white">Intercalar longarina</h1>
            <div className="product-container-vertical">
                
                {/* Mobile: Images first */}
                <div className="product-images-section mb-24 d-block d-md-none">
                    <div className="text-center">
                        <img alt='Imagem da intercalar longarina' className='product-img img-fluid' src='/images/intercalar.png'></img>
                    </div>
                </div>

                {/* Description Section */}
                <div className='product-description-section mb-24'>
                    <p className="mb-24">Espaçador para longarinas em transportadores.</p>
                    
                    <div className="product-actions mb-24">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-16 me-16'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-16 btn-secondary text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-8 bi bi-download'></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/files/Intercalar/7017030013.DWG" download>2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="/files/Intercalar/7017030013.IGS" download>3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="/files/Intercalar/7017030013.STEP" download>3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="/files/Intercalar/7017030013.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Desktop: Images after description */}
                <div className="product-images-section d-none d-md-block">
                    <div className="text-center">
                        <img alt='Imagem da intercalar longarina' className='product-img img-fluid' src='/images/intercalar.png'></img>
                    </div>
                </div>
            </div>
        </Container>
    )
}