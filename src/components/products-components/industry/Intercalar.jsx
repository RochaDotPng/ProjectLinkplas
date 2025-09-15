import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Intercalar() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5">Intercalar longarina</h1>
            <div className="product-container-vertical">
                
                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className="mb-4">Espaçador para longarinas em transportadores.</p>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3 me-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="../files/Intercalar/7017030013.DWG" download>2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="../files/Intercalar/7017030013.IGS" download>3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="../files/Intercalar/7017030013.STEP" download>3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="../files/Intercalar/7017030013.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Product Image Section */}
                <div className="product-images-section">
                    <div className="text-center">
                        <img alt='Imagem da intercalar longarina' className='product-img img-fluid' src='../images/intercalar.png'></img>
                    </div>
                </div>
            </div>
        </Container>
    )
}