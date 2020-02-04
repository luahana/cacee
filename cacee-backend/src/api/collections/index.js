import Router from 'koa-router';
import * as collectionsCtrl from './collections.ctrl';
import checkLoggedInAsAdmin from '../../lib/checkLoggedInAsAdmin';

const collections = new Router();
collections.get('/:category', collectionsCtrl.list);
collections.post('/', checkLoggedInAsAdmin, collectionsCtrl.add);
collections.get('/:category/:id', collectionsCtrl.get);

const collection = new Router();
collection.get('/', collectionsCtrl.get);
collection.delete('/', checkLoggedInAsAdmin, collectionsCtrl.remove);
collection.patch('/', checkLoggedInAsAdmin, collectionsCtrl.update);

// collections.use('/:category/:id', collectionsCtrl.checkObjectId, collection.routes());

export default collections;
