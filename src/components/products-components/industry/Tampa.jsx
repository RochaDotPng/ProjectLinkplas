import { Button, Container, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Tampa() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5 text-white">Tampa para tubos</h1>
            <div className="product-container-vertical">
                
                {/* Mobile: Images first */}
                <div className="product-images-section mb-4 d-block d-md-none">
                    <div className="text-center">
                        <img alt='Imagem da tampa de tubo' className='product-img img-fluid' src='../images/tampa.png'></img>
                    </div>
                </div>

                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className="mb-4">Tampas fabricadas em PE1000, reconhecido pela resistência ao desgaste, impacto e produtos químicos. Uma solução simples robusta.</p>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3 me-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="../files/catalogo_Linkplas_sem_taco.pdf" download >Catalogo</Dropdown.Item>
                                <Dropdown.Item href="../files/Tampa/7017030005.DWG" download>2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="../files/Tampa/7017030005.IGS" download>3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="../files/Tampa/7017030005.STEP" download>3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="../files/Tampa/7017030005.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Desktop: Images after description */}
                <div className="product-images-section mb-4 d-none d-md-block">
                    <div className="text-center">
                        <img alt='Imagem da tampa de tubo' className='product-img img-fluid' src='../images/tampa.png'></img>
                    </div>
                </div>

                {/* Specifications Table Section */}
                <div>
                    <h5 className="mb-3 text-white">Especificações Técnicas</h5>
                    
                    {/* Desktop Table */}
                    <div className='table-responsive product-specs-section d-none d-md-block'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Diametro</th>
                                    <th>Altura</th>
                                    <th>Espessura</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fw-bold'>30001</td>
                                    <td>12</td>
                                    <td>10</td>
                                    <td>2,5</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30002</td>
                                    <td>16</td>
                                    <td>12</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30003</td>
                                    <td>38</td>
                                    <td>16</td>
                                    <td>3,5</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30004</td>
                                    <td>42</td>
                                    <td>16</td>
                                    <td>3,5</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30005</td>
                                    <td>48</td>
                                    <td>18,5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30006</td>
                                    <td>51</td>
                                    <td>18,5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30007</td>
                                    <td>63</td>
                                    <td>20</td>
                                    <td>4,5</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    
                    {/* Mobile Table */}
                    <div className='table-responsive product-specs-section d-block d-md-none'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Dimensões</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fw-bold'>30001</td>
                                    <td>Ø12×10×2,5 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30002</td>
                                    <td>Ø16×12×3 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30003</td>
                                    <td>Ø38×16×3,5 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30004</td>
                                    <td>Ø42×16×3,5 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30005</td>
                                    <td>Ø48×18,5×4 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30006</td>
                                    <td>Ø51×18,5×4 mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>30007</td>
                                    <td>Ø63×20×4,5 mm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Container>
    )
}