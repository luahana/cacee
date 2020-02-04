import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as collectionsAPI from '../lib/api/collections';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_COLLECTIONS,
  LIST_COLLECTIONS_SUCCESS,
  LIST_COLLECTIONS_FAILURE,
] = createRequestActionTypes('collections/LIST_COLLECTIONS');
const UNLOAD_COLLECTIONS = 'collections/UNLOAD_COLLECTIONS';

export const listCollections = createAction(
  LIST_COLLECTIONS,
  ({ category }) => ({ category }),
);
export const unloadCollections = createAction(UNLOAD_COLLECTIONS);

const listCollectionsSaga = createRequestSaga(
  LIST_COLLECTIONS,
  collectionsAPI.listCollections,
);
export function* collectionsSaga() {
  yield takeLatest(LIST_COLLECTIONS, listCollectionsSaga);
}

const initialState = {
  collections: null,
  error: null,
};

const collections = handleActions(
  {
    [LIST_COLLECTIONS_SUCCESS]: (state, { payload: collections }) => ({
      ...state,
      collections,
    }),
    [LIST_COLLECTIONS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_COLLECTIONS]: () => initialState,
  },
  initialState,
);

export default collections;
