import ProductButton from './ProductButton';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function HomeBodyProductSection({ className, onProductChange, initialProduct }) {

    const navigate = useNavigate();

    return (
        <>
            <div className={`products-body-container ${className}`}>
                <div className="products-body-img">
                    <Container>
                        <div className="products-text">
                            <h1 className='fw-bold text-shadow'>Os nossos produtos</h1>
                        </div>
                        <div className="product-buttons-container">
                            <ProductButton
                                label="Indústria"
                                icon="buildings"
                                onClick={() => navigate('/Products/Industria')}
                            />
                            <ProductButton
                                label="Farmacêutica"
                                icon="capsule"
                                onClick={() => navigate('/Products/Servicos')}
                            />
                            <ProductButton
                                label="Serviços"
                                icon="tools"
                                onClick={() => navigate('/Products/Servicos')}
                            />
                            <ProductButton
                                label="Alimentar"
                                icon="basket"
                                onClick={() => navigate('/Products/Servicos')}
                            />
                            <ProductButton
                                label="Take-Away"
                                icon="box2"
                                onClick={() => navigate('/Products/Servicos')}
                            />
                            <ProductButton
                                label="Brevemente..."
                                icon="hourglass-split"
                                disabledClass={"disabled"}
                            />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}