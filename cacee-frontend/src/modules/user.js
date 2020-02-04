import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import * as userAPI from '../lib/api/user';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK',
);

const [EDIT, EDIT_SUCCESS, EDIT_FAILURE] = createRequestActionTypes(
  'user/EDIT',
);

const LOGOUT = 'user/LOGOUT';
const CHANGE_FIELD = 'user/CHANGE_FIELD';

export const tempSetUser = createAction(
  TEMP_SET_USER,
  ({ firstname, lastname, email }) => ({
    firstname,
    lastname,
    email,
  }),
);
export const check = createAction(CHECK);
export const edit = createAction(EDIT, ({ firstname, lastname, email }) => ({
  firstname,
  lastname,
  email,
}));
export const logout = createAction(LOGOUT);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key, //email, password, passwordConfirm, firstname, lastname
  value, //actual value
}));

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const editSaga = createRequestSaga(EDIT, userAPI.edit);

const checkFailureSaga = () => {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
};

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(EDIT, editSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  firstname: null,
  lastname: null,
  email: null,
  checkError: null,
  displayname: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: { firstname, lastname, email } }) => ({
      ...state,
      email,
      firstname,
      lastname,
    }),
    [CHECK_SUCCESS]: (
      state,
      { payload: { firstname, lastname, email, displayname } },
    ) => ({
      ...state,
      email,
      firstname,
      lastname,
      displayname,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      email: null,
      firstname: null,
      lastname: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      email: null,
      firstname: null,
      lastname: null,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [EDIT_SUCCESS]: (state, { payload: { firstname, lastname, email } }) => ({
      ...state,
      email,
      firstname,
      lastname,
      displayname: firstname,
      checkError: null,
    }),
    [EDIT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      email: null,
      firstname: null,
      lastname: null,
      checkError: error,
    }),
  },
  initialState,
);
