import { Button, Container } from 'react-bootstrap';

export default function Abracadeira(){
    return(
        <Container>
            <h1 className="fw-bold mb-2 mt-5">Abraçadeira</h1>
            <div className="product-container">
                <div className='product-text-container'>
                    <p>A inovadora Abraçadeira para Tubo da Linkplas: a solução perfeita para fixação eficiente e de confiança. Com um design inteligente e encaixe fácil, nossa abraçadeira de plástico proporciona uma instalação sem complicações, enquanto a sua resistência garante segurança duradoura. Moldada com precisão, a nossa abraçadeira é a escolha ideal para garantir a estabilidade e integridade dos seus projetos.</p>
                    <div><Button>Pedir cotação</Button><Button>Especificações</Button></div>
                </div>
                <div className="product-img-container">
                    <div className='product-square'>
                        <h5>Aplicação Fácil</h5>
                        <p>Permite uma fixação instantânea em qualquer posição</p>
                    </div>
                    <img className='abracadeira-img' src='./images/abracadeira.png'></img>
                    <img className='perna-img' src='./images/perna1.png'></img>
                </div>
            </div>
        </Container>
    )
}