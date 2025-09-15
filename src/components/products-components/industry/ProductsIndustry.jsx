import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Abracadeira from './Abracadeira'
import Tampa from './Tampa';
import Intercalar from './Intercalar';
import TampaVeio from './TampaVeio';
import Anilha from './Anilha';

export default function ProductsIndustry(){
    const [activeSection, setActiveSection] = useState('abracadeira');

    const productSections = [
        { id: 'abracadeira', title: 'Abraçadeira', icon: 'bi-tools' },
        { id: 'tampa', title: 'Tampa', icon: 'bi-circle' },
        { id: 'intercalar', title: 'Intercalar', icon: 'bi-distribute-vertical' },
        { id: 'tampa-veio', title: 'Tampa para veio', icon: 'bi-shield' },
        { id: 'anilha', title: 'Anilha Intercalar', icon: 'bi-record-circle' }
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

        productSections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <Container fluid className="products-industry-container">
            <Row>
                <Col md={3} className="sidebar-nav">
                    <div className="products-sidebar">
                        <h5 className="sidebar-title mb-4">Produtos Industriais</h5>
                        <nav className="products-nav">
                            {productSections.map((section) => (
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
                    <div id="abracadeira" className="product-section">
                        <Abracadeira />
                    </div>
                    <div id="tampa" className="product-section">
                        <Tampa />
                    </div>
                    <div id="intercalar" className="product-section">
                        <Intercalar />
                    </div>
                    <div id="tampa-veio" className="product-section">
                        <TampaVeio />
                    </div>
                    <div id="anilha" className="product-section">
                        <Anilha />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}