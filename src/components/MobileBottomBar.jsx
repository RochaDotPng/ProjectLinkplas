import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileBottomBar({ selectedProduct, onProductChange }) {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        onProductChange(product);
    };

    const handleQuoteClick = () => {
        // Navigate to contacts page or open quote modal
        navigate('/Contacts');
    };

    const categories = [
        { key: 'Farmaceutica', label: 'Farmacêutica', icon: 'bi bi-capsule' },
        { key: 'Take-Away', label: 'Take-Away', icon: 'bi bi-basket' },
        { key: 'Industria', label: 'Indústria', icon: 'bi bi-buildings' },
        { key: 'Servicos', label: 'Serviços', icon: 'bi bi-tools' }
        
    ];

    return (
        <div className="mobile-bottom-bar">
            <div className="mobile-bottom-bar-content">
                <div className="mobile-categories-left">
                    {categories.slice(0, 2).map((category, index) => (
                        <button
                            key={category.key}
                            className={`mobile-category-btn ${selectedProduct === category.key ? 'active' : ''}`}
                            onClick={() => handleProductClick(category.key)}
                        >
                            <i className={category.icon}></i>
                            <span className="mobile-category-label">{category.label}</span>
                        </button>
                    ))}
                </div>
                <div className="mobile-quote-container">
                    <button 
                        className="mobile-quote-btn"
                        onClick={handleQuoteClick}
                        title="Pedir Orçamento"
                    >
                        <i className="bi bi-arrow-right"></i>
                        
                    </button>
                    <span className="mobile-quote-label">Orçamento</span>
                </div>
                <div className="mobile-categories-right">
                    {categories.slice(2, 4).map((category, index) => (
                        <button
                            key={category.key}
                            className={`mobile-category-btn ${selectedProduct === category.key ? 'active' : ''}`}
                            onClick={() => handleProductClick(category.key)}
                        >
                            <i className={category.icon}></i>
                            <span className="mobile-category-label">{category.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
