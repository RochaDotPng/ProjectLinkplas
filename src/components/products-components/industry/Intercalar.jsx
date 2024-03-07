import { Button, Container, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Intercalar() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>

            <div className="product-container mt-5">
                <div className="product-img-container">
                    <img className='intercalar-img' src='./images/intercalar.png'></img>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Intercalar longarina</h1>
                    <p>Espaçador para longarinas em transportadores.</p>
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
            </div>
        </Container>
    )
}