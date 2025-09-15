import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import UltraSons from './UltraSons';

export default function ProductsServices(){
    const [activeSection, setActiveSection] = useState('ultrasons');

    const serviceSections = [
        { id: 'ultrasons', title: 'Soldadura de Ultra Sons', icon: 'bi-soundwave' }
        // Future services can be added here
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

        serviceSections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <Container fluid className="products-services-container">
            <Row>
                <Col md={3} className="sidebar-nav">
                    <div className="products-sidebar">
                        <h5 className="sidebar-title mb-4">Nossos Serviços</h5>
                        <nav className="products-nav">
                            {serviceSections.map((section) => (
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
                    <div id="ultrasons" className="product-section">
                        <UltraSons />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}