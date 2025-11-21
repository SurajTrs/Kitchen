import React from 'react';
import './WhatsAppSupport.css';

const WhatsAppSupport = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I need help with my order', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="support-buttons">
      <button className="whatsapp-btn" onClick={handleWhatsApp}>
        <span className="icon">💬</span>
        <span>WhatsApp</span>
      </button>
      <button className="call-btn" onClick={handleCall}>
        <span className="icon">📞</span>
        <span>Call Us</span>
      </button>
    </div>
  );
};

export default WhatsAppSupport;
