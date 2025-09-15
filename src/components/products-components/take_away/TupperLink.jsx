import { Button, Container, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function TupperLink() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>
            <h1 className="fw-bold mb-4 mt-5">KeepyLink</h1>
            <div className="product-container-vertical">
                
                {/* Description Section */}
                <div className='product-description-section mb-4'>
                    <p className="mb-3">KeepyLink: a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza. A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente</p>
                    <p className="mb-4">Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os KeepyLink oferecem praticidade sem igual</p>
                    
                    <div className="product-actions mb-4">
                        <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                    </div>
                </div>

                {/* Features Section */}
                <div className='product-features-section mb-4'>
                    <div className='takeaway-feature-box'>
                        <h5 className='mb-3'>Design empilhável</h5>
                        <p>Uma maior otimização de espaço permitindo um transporte mais seguro e estável</p>
                    </div>
                </div>

                {/* Product Image Section */}
                <div className="product-images-section mb-4">
                    <div className="text-center">
                        <img alt='Imagem de tupperlinks empilhados mostrando a facilidade de serem empilhados para um transporte mais seguro' className='product-img img-fluid' src='../images/tupperlink_large.png'></img>
                    </div>
                </div>

                {/* Specifications Table Section */}
                <div className="product-specs-section">
                    <h5 className="mb-3">Especificações Técnicas</h5>
                    <div className='table-responsive'>
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