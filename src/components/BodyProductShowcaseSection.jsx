import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';

export default function BodyProductShowcaseSection({ className, onProductChange }) {
    const [isKeepyLinkVisible, setIsKeepyLinkVisible] = useState(false);
    const [isKeepyFarmaVisible, setIsKeepyFarmaVisible] = useState(false);
    const keepyLinkRef = useRef(null);
    const keepyFarmaRef = useRef(null);

    const handleProductButtonClick = (label) => {
        onProductChange(label);
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === keepyLinkRef.current && entry.isIntersecting) {
                    setIsKeepyLinkVisible(true);
                    observer.unobserve(entry.target);
                } else if (entry.target === keepyFarmaRef.current && entry.isIntersecting) {
                    setIsKeepyFarmaVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (keepyLinkRef.current) {
            observer.observe(keepyLinkRef.current);
        }
        if (keepyFarmaRef.current) {
            observer.observe(keepyFarmaRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Container>
                <div className="products-text">
                    <h1>Os nossos produtos</h1>
                </div>

                {/* KeepyLink Product Showcase */}
                <div 
                    ref={keepyLinkRef}
                    className={`keepylink-showcase first-circle-background-right ${isKeepyLinkVisible ? 'animate-in' : 'animate-out'}`}
                >
                    <Row className="align-items-center">
                        <Col lg={7} md={6} className="keepylink-content">
                            <div className="keepylink-text">
                                <h2 className="product-title">KeepyLink</h2>
                                <div className="keepylink-description">
                                    <p>
                                    KeepyLink: a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza. A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente.
                                    </p>
                                    <p>
                                    Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os KeepyLink oferecem praticidade sem igual.
                                    </p>
                                </div>
                                <Button
                                    variant="outline-success"
                                    className="keepylink-cta"
                                    onClick={() => handleProductButtonClick('Take-Away')}
                                >
                                    Saber mais →
                                </Button>
                            </div>
                        </Col>
                        <Col lg={5} md={6} className="keepylink-visual">
                            <div className="keepylink-image-container">
                                <img
                                    src="../images/tupperlink_large.png"
                                    alt="KeepyLink containers stacked"
                                    className="keepylink-image"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* KeepyFarma Product Showcase */}
                <div 
                    ref={keepyFarmaRef}
                    className={`keepyfarma-showcase circle-background-left ${isKeepyFarmaVisible ? 'animate-in' : 'animate-out'}`}
                >
                    <Row className="align-items-center wrap-reverse">
                        <Col lg={5} md={6} className="keepyfarma-visual">
                            <div className="keepyfarma-image-container">
                                <img
                                    src="../images/keepyfarma-stacked.png"
                                    alt="KeepyFarma containers stacked"
                                    className="keepyfarma-image keepyfarma-stacked"
                                />
                            </div>
                        </Col>
                        <Col lg={7} md={6} className="keepyfarma-content">
                            <div className="keepyfarma-text">
                                <h2 className="product-title">KeepyFarma</h2>
                                <div className="keepyfarma-description">
                                    <p>
                                    Caixa de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos. Com dimensões otimizadas para facilidade de manuseamento e armazenamento, esta caixa possui um sistema de fecho seguro e é resistente a variações de temperatura e humidade.
                                    </p>
                                    <p>
                                    Ideal para uso em farmácias, hospitais e clínicas, garante a integridade e a qualidade dos medicamentos durante o transporte.
                                    </p>
                                </div>
                                <Button
                                    variant="outline-success"
                                    className="keepyfarma-cta"
                                    onClick={() => handleProductButtonClick('Farmaceutica')}
                                >
                                    Saber mais →
                                </Button>
                                <Container className="text-center-mobile">
                                    <img
                                        src="../images/keepyfarma-white.png"
                                        alt="KeepyFarma white containers"
                                        className="keepyfarma-bottom-img"
                                    />
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}