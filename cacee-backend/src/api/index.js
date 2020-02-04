import Router from 'koa-router';
import collections from './collections';
import auth from './auth';
import user from './user';

const api = new Router();

api.use('/collections', collections.routes());
api.use('/auth', auth.routes());
api.use('/user', user.routes());

export default api;
