import React, { useState, useEffect } from 'react';
import './OfferBanner.css';

const OfferBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const offers = [
    { id: 1, title: '50% OFF', subtitle: 'On First Order', bg: 'linear-gradient(135deg, #D99A2E, #FAD075)' },
    { id: 2, title: 'FREE DELIVERY', subtitle: 'Orders Above ₹299', bg: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { id: 3, title: 'BUY 1 GET 1', subtitle: 'On Selected Items', bg: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offer-banner-container">
      {offers.map((offer, index) => (
        <div key={offer.id} className={`offer-slide ${index === currentSlide ? 'active' : ''}`} style={{ background: offer.bg }}>
          <h2>{offer.title}</h2>
          <p>{offer.subtitle}</p>
        </div>
      ))}
      <div className="offer-dots">
        {offers.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
