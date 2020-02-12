import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as paymentAPI from '../lib/api/payment';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [PAY, PAY_SUCCESS, PAY_FAILURE] = createRequestActionTypes('payment/PAY');

export const pay = createAction(PAY, payment_method_id => payment_method_id);

const paySaga = createRequestSaga(PAY, paymentAPI.pay);

export function* paymentSaga() {
  yield takeLatest(PAY, paySaga);
}

const initialState = {
  response: null,
  error: null,
};

export default handleActions(
  {
    [PAY_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      response,
    }),
    [PAY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkError: error,
    }),
  },
  initialState,
);
