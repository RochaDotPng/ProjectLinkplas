import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ProductsSidebar({ selectedProduct, activeProduct, autoOpenSections, onProductChange }) {
  const [expandedSections, setExpandedSections] = useState({
    'Take-Away': true,
    'Farmaceutica': true,
    'Industria': false,
    'Servicos': false
  });

  const productSections = [
    {
      id: 'Farmaceutica', 
      name: 'Farmaceutica',
      products: [
        { id: 'KeepyFarma', name: 'KeepyFarma' }
      ]
    },
    {
      id: 'Take-Away',
      name: 'Take-Away',
      products: [
        { id: 'KeepyLink', name: 'KeepyLink' }
      ]
    },
    {
      id: 'Industria',
      name: 'Industria', 
      products: [
        
        { id: 'Tampa', name: 'Tampa' },
        { id: 'Intercalar', name: 'Intercalar' },
        { id: 'TampaVeio', name: 'Tampa Veio' },
        { id: 'Anilha', name: 'Anilha' },
        { id: 'Abracadeira', name: 'Abracadeira' }
      ]
    },
    {
      id: 'Servicos',
      name: 'Servicos',
      products: [
        { id: 'UltraSons', name: 'Ultra Sons' }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleProductClick = (productId) => {
    onProductChange(productId);
  };

  // Auto-open sections when scrolling to their products
  useEffect(() => {
    setExpandedSections(prev => ({
      ...prev,
      ...autoOpenSections
    }));
  }, [autoOpenSections]);

  return (
    <div className="products-sidebar">
      <nav className="products-nav">
        {productSections.map((section) => (
          <div key={section.id} className="nav-section">
            <div 
              className={`nav-section-header ${expandedSections[section.id] ? 'expanded' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              <i className="bi bi-chevron-down section-arrow"></i>
              <span className="section-name">{section.name}</span>
              
            </div>
            
             <div className={`nav-section-content-container ${expandedSections[section.id] ? 'expanded' : ''}`}>
               <div className="nav-section-content">
                   {section.products.map((product) => (
                   <div 
                       key={product.id}
                       className={`nav-product ${activeProduct === product.id ? 'active' : ''}`}
                       onClick={() => handleProductClick(product.id)}
                   >
                       <span className="product-link">{product.name}</span>
                   </div>
                   ))}
               </div>
             </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
