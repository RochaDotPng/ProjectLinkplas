import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function TampaVeio(){
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return(
        <Container>
            <h1 className="fw-bold mb-2 mt-5">Tampa para veio</h1>
            <div className="product-container">
                <div className='product-img-container'>
                    <p>Uma tampa para os veios</p>
                    <div>
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary ms-3 text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="" download>2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="" download>3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="" download>3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="" download>3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="product-text-container">
                    <img className='perna-img' src='./images/tampa-veio.png'></img>
                </div>
            </div>
        </Container>
    )
}