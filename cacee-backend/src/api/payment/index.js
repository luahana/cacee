import Router from 'koa-router';
import * as paymentCtrl from './payment.ctrl';

const payment = new Router();

payment.post('/pay', paymentCtrl.pay);

export default payment;
