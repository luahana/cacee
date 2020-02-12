import Router from 'koa-router';
import collections from './collections';
import auth from './auth';
import user from './user';
import payment from './payment';

const api = new Router();

api.use('/collections', collections.routes());
api.use('/auth', auth.routes());
api.use('/user', user.routes());
api.use('/payment', payment.routes());

export default api;
