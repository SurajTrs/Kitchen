import React, { useState, useEffect } from 'react';
import './OrderTracking.css';

const OrderTracking = ({ orderId }) => {
  const [orderStatus, setOrderStatus] = useState('placed');
  
  const statuses = [
    { id: 'placed', label: 'Order Placed', icon: '✓', time: '2 mins ago' },
    { id: 'preparing', label: 'Being Prepared', icon: '👨‍🍳', time: 'In progress' },
    { id: 'outfordelivery', label: 'Out for Delivery', icon: '🛵', time: 'Pending' },
    { id: 'delivered', label: 'Delivered', icon: '🎉', time: 'Pending' },
  ];

  const currentIndex = statuses.findIndex(s => s.id === orderStatus);

  return (
    <div className="order-tracking">
      <h2>Track Your Order</h2>
      <div className="tracking-timeline">
        {statuses.map((status, index) => (
          <div key={status.id} className={`tracking-step ${index <= currentIndex ? 'completed' : ''} ${index === currentIndex ? 'active' : ''}`}>
            <div className="step-icon">{status.icon}</div>
            <div className="step-content">
              <h4>{status.label}</h4>
              <p>{status.time}</p>
            </div>
            {index < statuses.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>
      <div className="estimated-time">
        <p>Estimated Delivery: <strong>30-40 mins</strong></p>
      </div>
    </div>
  );
};

export default OrderTracking;
