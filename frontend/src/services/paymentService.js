// Payment Gateway Integration (Razorpay)

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const processPayment = async (amount, orderDetails) => {
  const res = await initializeRazorpay();
  if (!res) {
    alert('Razorpay SDK failed to load');
    return;
  }

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY || 'rzp_test_XXXXXXXX',
    amount: amount * 100,
    currency: 'INR',
    name: 'Highlight Kitchen',
    description: 'Food Order Payment',
    image: '/logo192.png',
    handler: function (response) {
      alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      return response;
    },
    prefill: {
      name: orderDetails.name,
      email: orderDetails.email,
      contact: orderDetails.phone,
    },
    theme: {
      color: '#D99A2E',
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
