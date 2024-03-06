import ProductButton from './ProductButton';
import Container from 'react-bootstrap/Container';

export default function BodyProductSection() {
    return (
        <>
            <div className="products-body-container">
                <div className="products-body-img">
                    <Container>
                    <div className="products-text">
                        <h1 className='fw-bold text-shadow'>Os nossos produtos</h1>
                    </div>
                    <div className="product-buttons-container">
                        <ProductButton label="Indústria" icon="buildings"/>
                        <ProductButton label="Farmacêutica" icon="capsule"/>
                        <ProductButton label="Serviços" icon="tools"/>
                        <ProductButton label="Alimentar" icon="basket"/>
                        <ProductButton label="Take-Away" icon="box2"/>
                        <ProductButton label="Brevemente..." icon="hourglass-split" disabledClass={"disabled"}/>
                    </div>
                    </Container>
                </div>
            </div>
        </>
    )
}