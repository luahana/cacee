import client from './client';

export const pay = ({ payment_method_id }) =>
  client.post('/api/payment/pay', { payment_method_id });
