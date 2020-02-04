import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import collection, { collectionSaga } from './collection';
import collections, { collectionsSaga } from './collections';
import bag from './bag';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  collections,
  collection,
  bag,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), collectionsSaga(), collectionSaga()]);
}

export default rootReducer;
