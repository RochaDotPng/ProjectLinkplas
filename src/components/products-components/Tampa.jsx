import { Button, Container, Table } from 'react-bootstrap';


export default function Tampa() {
    return (
        <Container>

            <div className="product-container mt-5">
                <div className="product-img-container">
                    <div className='tampa-square'>
                        <h5 className='mb-4'>Design empilhável</h5>
                        <p>Uma maior otimização de espaço permitindo um transporte mais seguro e estável</p>
                    </div>
                    <img className='tampa-img' src='./images/tampa.png'></img>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Tampa para tubos</h1>
                    <p>Tampas fabricadas em PE1000, reconhecido pela resistência ao desgaste, impacto e produtos químicos. Uma solução simples robusta.</p>
                    <div className='text-end'><Button className='p-3'>Pedir cotação</Button><Button className='p-3 btn-secondary ms-3 text-white'>Especificações<i className='text-white ms-2 bi bi-download'></i></Button></div>
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
                                    <td>30001</td>
                                    <td>12</td>
                                    <td>10</td>
                                    <td>2,5</td>
                                </tr>
                                <tr>
                                    <td>30002</td>
                                    <td>16</td>
                                    <td>12</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>30003</td>
                                    <td>38</td>
                                    <td>16</td>
                                    <td>3,5</td>
                                </tr>
                                <tr>
                                    <td>30004</td>
                                    <td>42</td>
                                    <td>16</td>
                                    <td>3,5</td>
                                </tr>
                                <tr>
                                    <td>30005</td>
                                    <td>48</td>
                                    <td>18,5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>30006</td>
                                    <td>51</td>
                                    <td>18,5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>30007</td>
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