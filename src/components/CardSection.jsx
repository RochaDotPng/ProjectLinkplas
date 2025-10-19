import React, { useState, useEffect, useRef } from 'react';

const CardSection = ({ jsonPath }) => {
  const [cards, setCards] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

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

  useEffect(() => {
    if (cards.length === 0) return;

    const startInfiniteScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

       let scrollPosition = 0;
       let scrollSpeed = 0.5; // Normal speed
       const hoverSpeed = 0.1; // Slower speed on hover
       const cardWidth = 320; // Approximate card width + gap
       const totalWidth = cardWidth * cards.length;
       let isHovered = false;
       let direction = 1; // 1 for forward, -1 for backward

       const animate = () => {
         const currentSpeed = isHovered ? hoverSpeed : scrollSpeed;
         scrollPosition += currentSpeed * direction;
         
         // Reverse direction when reaching the end or beginning
         if (scrollPosition >= totalWidth) {
           direction = -1; // Start scrolling backwards
         } else if (scrollPosition <= 0) {
           direction = 1; // Start scrolling forwards
         }
         
         // Use transform for smoother animation
         container.style.transform = `translateX(-${scrollPosition}px)`;
         animationRef.current = requestAnimationFrame(animate);
       };

      // Slow down animation on hover
      const handleMouseEnter = () => {
        isHovered = true;
      };

      const handleMouseLeave = () => {
        isHovered = false;
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      animate();

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    const cleanup = startInfiniteScroll();
    return cleanup;
  }, [cards]);

  return (
    <>
    <div className='container'><h2 className="mb-4 product-title">Novidades</h2></div>
    <div className="w-full overflow-x-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex space-x-4 pb-5 h-600 d-flex gap-60 infinite-scroll-container"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* First set of cards */}
        {cards.map((card, index) => (
          <div 
            key={`first-${index}`} 
            className="flex-shrink-0 w-80 rounded-lg shadow-md"
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
        {/* Duplicate set for seamless loop */}
        {cards.map((card, index) => (
          <div 
            key={`second-${index}`} 
            className="flex-shrink-0 w-80 rounded-lg shadow-md"
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
    </>
  );
};

export default CardSection;