import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import collection, { collectionSaga } from './collection';
import collections, { collectionsSaga } from './collections';
import global from './global';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  collections,
  collection,
  global,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), collectionsSaga(), collectionSaga()]);
}

export default rootReducer;
