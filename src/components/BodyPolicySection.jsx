import { Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';

export default function BodyPolicySection() {

    const navigate = useNavigate();
    const [isPolicyVisible, setIsPolicyVisible] = useState(false);
    const policyRef = useRef(null);

    const handlePolicyButtonClick = (e) => {
        e.preventDefault();
        navigate('/Policy');
    };

    const [orientation, setOrientation] = useState('portrait');

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setOrientation('landscape');
        } else {
            setOrientation('portrait');
        }
    };

    useEffect(() => {
        // Check orientation on initial load
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === policyRef.current && entry.isIntersecting) {
                    setIsPolicyVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (policyRef.current) {
            observer.observe(policyRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <><Container className='circle-left'>
            <div 
                ref={policyRef}
                className={`policy-container overflow-hidden ${isPolicyVisible ? 'animate-in' : 'animate-out'}`}
            >
                <div className="policy-img-container">
                    <img alt="Foto da CEO Paula Rocha" src="../images/profile_ceo.jpg" ></img>
                    {orientation === 'portrait' && (<div className="policy-quote-container">
                        <p>Na Linkplas, acreditamos que a qualidade é mais do que um compromisso - é a essência do nosso DNA empresarial. Guiados pela inovação e pela busca constante pela excelência, estamos empenhados em não apenas atender, mas superar as expectativas dos nossos clientes.</p>
                        <span className="fw-bold">Paula Rocha</span>
                        <br />
                        <span className="policy-quote-text">CEO</span>
                    </div>)}
                </div>
                <div className="policy-text-container">
                    <h1 className="product-title mt-5">Estratégia</h1>
                    <p>Através de uma estratégia de Melhoria Contínua, a Linkplas compromete-se a desenvolver e implementar continuamente medidas e ações necessárias no sentido de manter os padrões de qualidade, reduzir e minimizar perigos e riscos da sua atividade tomando todas as medidas necessárias.</p>
                    <div>
                        <Button onClick={handlePolicyButtonClick}
                        variant="outline-success"
                        className="keepylink-cta">Saber mais →
                        </Button>
                    </div>
                    {orientation === 'landscape' && (<div className="policy-quote-container">
                        <p>Na Linkplas, acreditamos que a qualidade é mais do que um compromisso - é a essência do nosso DNA empresarial. Guiados pela inovação e pela busca constante pela excelência, estamos empenhados em não apenas atender, mas superar as expectativas dos nossos clientes.</p>
                        <span className="fw-bold">Paula Rocha</span>
                        <br />
                        <span className="policy-quote-text">CEO</span>
                    </div>)}
                </div>
            </div>
        </Container>
        </>
    )
}