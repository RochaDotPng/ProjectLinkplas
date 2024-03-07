import { Button, Container, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function TupperLink() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>

            <div className="product-container mt-5">
                <div className="product-img-container">
                    <div className='tupperlink-square'>
                        <h5 className='mb-4'>Design empilhável</h5>
                        <p>Uma maior otimização de espaço permitindo um transporte mais seguro e estável</p>
                    </div>
                    <img className='tupperlink-img' src='./images/tampa.png'></img>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Tampa para tubos</h1>
                    <p>Tampas fabricadas em PE1000, reconhecido pela resistência ao desgaste, impacto e produtos químicos. Uma solução simples robusta.</p>
                    <div className='text-end'>
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        <Dropdown className='products-download d-inline'>
                            <Dropdown.Toggle className="p-3 btn-secondary ms-3 text-white" variant="secondary" id="dropdown-basic">
                            <span>Descarregar</span><i className='text-white ms-2 bi bi-download'></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="./files/catalogo_Linkplas_sem_taco.pdf" download>Catalogo</Dropdown.Item>
                                <Dropdown.Item href="./files/Tampa/7017030005.DWG" download>2D - DWG </Dropdown.Item>
                                <Dropdown.Item href="./files/Tampa/7017030005.IGS" download>3D - IGS</Dropdown.Item>
                                <Dropdown.Item href="./files/Tampa/7017030005.STEP" download>3D - STEP</Dropdown.Item>
                                <Dropdown.Item href="./files/Tampa/7017030005.SLDPRT" download>3D - SLDPRT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='table-tampa'>
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
                </div>
            </div>
        </Container>
    )
}