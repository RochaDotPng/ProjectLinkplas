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
                                icon="bi bi-buildings"
                                onClick={() => navigate('/Products/Industria')}
                            />
                            <ProductButton
                                label="Farmacêutica"
                                icon="bi bi-capsule"
                                onClick={() => navigate('/Products/Farmaceutica')}
                            />
                            <ProductButton
                                label="Serviços"
                                icon="bi bi-tools"
                                onClick={() => navigate('/Products/Servicos')}
                            />
                            <ProductButton
                                label="Alimentar"
                                icon="icon-kitchen-tools"
                                onClick={() => navigate('/Products/Alimentar')}
                            />
                            <ProductButton
                                label="Take-Away"
                                icon="bi bi-basket"
                                onClick={() => navigate('/Products/Take-Away')}
                            />
                            <ProductButton
                                label="Brevemente..."
                                icon="bi bi-hourglass-split"
                                disabledClass={"disabled"}
                            />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}