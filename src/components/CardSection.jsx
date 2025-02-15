import React, { useState, useEffect } from 'react';

const CardSection = ({ jsonPath }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    };

    fetchCards();
  }, [jsonPath]);

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="mb-4">Novidades</h2>
      <div className="flex space-x-4 pb-5 h-600 d-flex gap-60">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-80  rounded-lg shadow-md "
          >
            {card.image && (
              <img 
                src={`${card.image}`} 
                alt={card.title || "Card image"} 
                className="w-full h-48 object-cover rounded-md mb-1"
              />
            )}
            {card.date && <p className="text-body-tertiary fw-lighter fs-7 mb-2">{card.date}</p>}
            {card.title && <h4 className="text-xl fw-normal mb-2">{card.title}</h4>}
            {card.description && <p className="text-body-secondary fs-7 mb-1">{card.description}</p>}
            {card.url && (
              <a 
                href={card.url}  
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-body hover:underline fw-semibold"
              >
                Ver mais
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;