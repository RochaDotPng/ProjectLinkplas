import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CaixaMedicamentos from './CaixaMedicamentos';

export default function ProductsFarmacy(){
    const [activeSection, setActiveSection] = useState('caixa');

    const farmacySections = [
        { id: 'caixa', title: 'Caixa de medicamentos', icon: 'bi-box' }
        // Future farmacy products can be added here
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
        }
    };

    // Observer to track which section is currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
        );

        farmacySections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <Container fluid className="products-farmacy-container">
            <Row>
                <Col md={3} className="sidebar-nav">
                    <div className="products-sidebar">
                        <h5 className="sidebar-title mb-4">Produtos Farmacêuticos</h5>
                        <nav className="products-nav">
                            {farmacySections.map((section) => (
                                <button
                                    key={section.id}
                                    className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(section.id)}
                                >
                                    <i className={`${section.icon} me-2`}></i>
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </Col>
                <Col md={9} className="products-content">
                    <div id="caixa" className="product-section">
                        <CaixaMedicamentos />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}