import client from './client';

export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

export const register = ({ firstname, lastname, email, password }) =>
  client.post('/api/auth/register', { firstname, lastname, email, password });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
