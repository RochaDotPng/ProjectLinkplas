import { Button, Container, Table } from 'react-bootstrap';


export default function Intercalar() {
    return (
        <Container>

            <div className="product-container mt-5">
                <div className="product-img-container">
                    <img className='intercalar-img' src='./images/intercalar.png'></img>
                </div>
                <div className='product-text-container'>
                    <h1 className="fw-bold mb-2 ">Intercalar longarina</h1>
                    <p>Espaçador para longarinas em transportadores.</p>
                    <div><Button className='p-3'>Pedir cotação</Button><Button className='p-3 btn-secondary ms-3 text-white'>Especificações<i className='text-white ms-2 bi bi-download'></i></Button></div>
                </div>
            </div>
        </Container>
    )
}