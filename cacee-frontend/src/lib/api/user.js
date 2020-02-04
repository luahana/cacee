import client from './client';

export const edit = ({ firstname, lastname, email }) =>
  client.post('/api/user/edit', { firstname, lastname, email });
