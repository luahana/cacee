import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as collectionsAPI from '../lib/api/collections';
import { takeLatest } from 'redux-saga/effects';

const [
  GET_COLLECTION,
  GET_COLLECTION_SUCCESS,
  GET_COLLECTION_FAILURE,
] = createRequestActionTypes('collection/GET_COLLECTION');
const UNLOAD_COLLECTION = 'collection/UNLOAD_COLLECTION';

export const getCollection = createAction(
  GET_COLLECTION,
  ({ category, collectionId }) => ({ category, collectionId }),
);
export const unloadCollection = createAction(UNLOAD_COLLECTION);

const getCollectionSaga = createRequestSaga(
  GET_COLLECTION,
  collectionsAPI.getCollection,
);
export function* collectionSaga() {
  yield takeLatest(GET_COLLECTION, getCollectionSaga);
}

const initialState = {
  collection: null,
  error: null,
};

const collection = handleActions(
  {
    [GET_COLLECTION_SUCCESS]: (state, { payload: collection }) => ({
      ...state,
      collection,
    }),
    [GET_COLLECTION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_COLLECTION]: () => initialState,
  },
  initialState,
);

export default collection;
