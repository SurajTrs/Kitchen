import React, { useState } from 'react';
import './PincodeChecker.css';

const PincodeChecker = () => {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const availablePincodes = ['110001', '110002', '110003', '400001', '400002', '560001', '560002'];

  const checkAvailability = () => {
    if (pincode.length !== 6) {
      setStatus({ available: false, message: 'Please enter valid 6-digit pincode' });
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      const isAvailable = availablePincodes.includes(pincode);
      setStatus({
        available: isAvailable,
        message: isAvailable ? '🎉 Great! We deliver to your area' : '😔 Sorry, we don\'t deliver here yet'
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pincode-checker">
      <h3>Check Delivery Availability</h3>
      <div className="pincode-input-group">
        <input
          type="text"
          placeholder="Enter your pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          maxLength="6"
        />
        <button onClick={checkAvailability} disabled={loading}>
          {loading ? 'Checking...' : 'Check'}
        </button>
      </div>
      {status && (
        <div className={`pincode-status ${status.available ? 'available' : 'unavailable'}`}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default PincodeChecker;
