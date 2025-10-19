import { Button, Container, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function TupperLink() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5 text-white">KeepyLink</h1>
            <div className="product-container-vertical">
                
                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className="mb-3"><strong>KeepyLink:</strong> a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza. A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente.</p>
                    <p className="mb-4">Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os KeepyLink oferecem praticidade sem igual.</p>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                    </div>
                </div>


                {/* Product Images Section */}
                <div className="product-images-section mb-4">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Transparente</span>
                                </div>
                                <div className="text-center">
                                    <img alt='Tupperwares take-away KeepyLink empilhados - recipientes reutilizáveis para delivery e takeaway, mostrando design empilhável para restaurantes' className='product-img img-fluid' src='../images/tupperlink_large.png'></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="farmacy-image-container">
                                <div className='size-indicator'>
                                    <span>Com cor</span>
                                </div>
                                <div className="text-center">
                                    <img alt='KeepyLink recipientes coloridos - recipientes reutilizáveis para delivery e takeaway em cores vibrantes' className='product-img img-fluid' src='../images/keepylink_colored.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications Table Section */}
                <div>
                    <h5 className="mb-3 text-white">Especificações Técnicas</h5>
                    <div className='table-responsive product-specs-section'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th className='fw-bold'>#</th>
                                    <th>Volume</th>
                                    <th>Comprimento</th>
                                    <th>Largura</th>
                                    <th>Altura</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fw-bold'>1</td>
                                    <td>500ml</td>
                                    <td>210mm</td>
                                    <td>160mm</td>
                                    <td>28mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>2</td>
                                    <td>1000ml</td>
                                    <td>210mm</td>
                                    <td>160mm</td>
                                    <td>45mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>3</td>
                                    <td>1500ml</td>
                                    <td>210mm</td>
                                    <td>160mm</td>
                                    <td>64mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>4</td>
                                    <td>2000ml</td>
                                    <td>210mm</td>
                                    <td>160mm</td>
                                    <td>86mm</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>5</td>
                                    <td>2500ml</td>
                                    <td>346mm</td>
                                    <td>226mm</td>
                                    <td>50mm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Container>
    )
}