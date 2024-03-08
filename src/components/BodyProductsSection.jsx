import { useState } from 'react';
import ProductButton from './ProductButton';
import Container from 'react-bootstrap/Container';

export default function BodyProductSection({ className, onProductChange, initialProduct }) {

    const [selectedProduct, setSelectedProduct] = useState(initialProduct);

    const handleProductButtonClick = (label) => {
        setSelectedProduct(label);
        onProductChange(label);
    };

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
                                onClick={() => handleProductButtonClick('Industria')}
                                disabledClass={selectedProduct === 'Industria' ? 'active' : ''}
                            />
                            <ProductButton
                                label="Farmacêutica"
                                icon="bi bi-capsule"
                                onClick={() => handleProductButtonClick('Farmaceutica')}
                                disabledClass={selectedProduct === 'Farmaceutica' ? 'active' : ''}
                            />
                            <ProductButton
                                label="Serviços"
                                icon="bi bi-tools"
                                onClick={() => handleProductButtonClick('Servicos')}
                                disabledClass={selectedProduct === 'Servicos' ? 'active' : ''}
                            />
                            <ProductButton
                                label="Alimentar"
                                icon="icon-kitchen-tools"
                                //onClick={() => handleProductButtonClick('Alimentar')}
                                disabledClass={"disabled"}
                            />
                            <ProductButton
                                label="Take-Away"
                                icon="bi bi-basket"
                                onClick={() => handleProductButtonClick('Take-Away')}
                                disabledClass={selectedProduct === 'Take-Away' ? 'active' : ''}
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