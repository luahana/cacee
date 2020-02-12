import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StripeProvider } from 'react-stripe-elements';

import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const loadUser = () => {
  try {
    const email = localStorage.getItem('email');
    if (!email) return;

    //    store.dispatch(tempSetUser(email));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
};

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST_PUBLIC_KEY}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StripeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
