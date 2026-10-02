import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';
import SubbrandLogo from './brand/SubbrandLogo/SubbrandLogo';

export default function BodyProductShowcaseSection({ className, onProductChange }) {
    const [isTupperLinkVisible, setIsTupperLinkVisible] = useState(false);
    const [isPharmaLinkVisible, setIsPharmaLinkVisible] = useState(false);
    const tupperLinkRef = useRef(null);
    const pharmaLinkRef = useRef(null);

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
                if (entry.target === tupperLinkRef.current && entry.isIntersecting) {
                    setIsTupperLinkVisible(true);
                    observer.unobserve(entry.target);
                } else if (entry.target === pharmaLinkRef.current && entry.isIntersecting) {
                    setIsPharmaLinkVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (tupperLinkRef.current) {
            observer.observe(tupperLinkRef.current);
        }
        if (pharmaLinkRef.current) {
            observer.observe(pharmaLinkRef.current);
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

                {/* TupperLink Product Showcase */}
                <div 
                    ref={tupperLinkRef}
                    className={`keepylink-showcase first-circle-background-right ${isTupperLinkVisible ? 'animate-in' : 'animate-out'}`}
                >
                    <Row className="align-items-center">
                        <Col lg={7} md={6} className="keepylink-content">
                            <div className="keepylink-text">
                                <h2 className="product-title">
                                    <SubbrandLogo brand="tupperlink" />
                                </h2>
                                <div className="keepylink-description">
                                    <p>
                                    TupperLink: a solução de armazenamento versátil e sustentável. Empilháveis para otimizar o espaço, estes recipientes vão do congelador à máquina de lavar louça, facilitando o armazenamento e a limpeza. A escolha consciente para sua cozinha - funcionalidade, conveniência e eco-amigável em cada recipiente.
                                    </p>
                                    <p>
                                    Desenvolvidos para se adaptarem perfeitamente ao serviço de takeaway, os TupperLink oferecem praticidade sem igual.
                                    </p>
                                </div>
                                <Button
                                    variant="outline-success"
                                    className="keepylink-cta"
                                    onClick={() => handleProductButtonClick({ category: 'Take-Away', hash: 'tupperlink' })}
                                >
                                    Saber mais →
                                </Button>
                            </div>
                        </Col>
                        <Col lg={5} md={6} className="keepylink-visual">
                            <div className="keepylink-image-container">
                                <img
                                    src="../images/tupperlink_large.png"
                                    alt="TupperLink containers stacked"
                                    className="keepylink-image"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* PharmaLink Product Showcase */}
                <div 
                    ref={pharmaLinkRef}
                    className={`keepyfarma-showcase circle-background-left ${isPharmaLinkVisible ? 'animate-in' : 'animate-out'}`}
                >
                    <Row className="align-items-center wrap-reverse">
                        <Col lg={5} md={6} className="keepyfarma-visual">
                            <div className="keepyfarma-image-container">
                                <img
                                    src="/images/keepyfarma-stacked.png"
                                    alt="PharmaLink containers stacked"
                                    className="keepyfarma-image keepyfarma-stacked d-none d-md-block"
                                />
                                <img
                                    src="/images/keepyfarma-stacked-mobile.png"
                                    alt="PharmaLink containers stacked"
                                    className="keepyfarma-image keepyfarma-stacked-mobile d-md-none"
                                />
                            </div>
                        </Col>
                        <Col lg={7} md={6} className="keepyfarma-content">
                            <div className="keepyfarma-text">
                                <h2 className="product-title">
                                    <SubbrandLogo brand="pharmalink" />
                                </h2>
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
                                    onClick={() => handleProductButtonClick({ category: 'Farmaceutica', hash: 'pharmalink' })}
                                >
                                    Saber mais →
                                </Button>
                                <Container className="text-center-mobile d-none d-md-block">
                                    <img
                                        src="/images/keepyfarma-white.png"
                                        alt="PharmaLink white containers"
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