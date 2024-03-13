import { Button, Container, Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function TupperLink() {
    const navigate = useNavigate();
    const handleContactsClick = (path) => {
        navigate(path);
    };
    return (
        <Container>

            <div className="product-container mt-5 product-tampa">
                <div className="product-img-container">
                    <div className='tupperlink-square'>
                        <h5 className='mb-4'>Design empilhável</h5>
                        <p>Uma maior otimização de espaço permitindo um transporte mais seguro e estável</p>
                    </div>
                    <div className='tupperlink-img-div'>
                        <img alt='Imagem de tupperlinks empilhados mostrando a facilidade de serem empilhados para um transporte mais seguro' className='tupperlink-img' src='../images/tupperlink.png'></img>
                    </div>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Tupper Link</h1>
                    <p>TupperLink: a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza.  A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente</p>
                    
                    <p>Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os  TupperLink oferecem praticidade sem igual</p>
                    <div className='d-flex gap-3 justify-content-between flex-wrap'>
                        <div>
                            <Button onClick={() => handleContactsClick('/Contacts')} className='p-3'>Pedir cotação</Button>
                        </div>
                        <div className='table-tupperlink'>
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
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}