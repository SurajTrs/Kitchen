const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/loginuser`,
  SIGNUP: `${API_BASE_URL}/api/creatuser`,
  FOOD_DATA: `${API_BASE_URL}/api/foodData`,
  ORDER_DATA: `${API_BASE_URL}/api/orderData`,
  MY_ORDERS: `${API_BASE_URL}/api/myOrderData`,
  RESTAURANT_ORDERS: `${API_BASE_URL}/api/RestOrder`,
  UPDATE_ORDER_STATUS: `${API_BASE_URL}/api/updateOrderStatus`,
};

export default API_BASE_URL;
