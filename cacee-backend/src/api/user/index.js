import Router from 'koa-router';
import * as userCtrl from './user.ctrl';

const user = new Router();

user.get('/', userCtrl.list);
user.post('/edit', userCtrl.edit);

export default user;
