import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './pages/account/Login';
import RegisterPage from './pages/account/Register';
import AddCollectionPage from './pages/admin/AddCollection';
import CollectionsPage from './pages/collections/Collections';
import AboutUsPage from './pages/info/AboutUs';
import CareerPage from './pages/info/Career';
import FAQPage from './pages/info/FAQ';
import RingSizerPage from './pages/info/RingSizer';
import ShippingReturnsPage from './pages/info/ShippingReturns';
import HomePage from './pages/home/Home';
import CollectionViewPage from './pages/collection/Collection';
// import MyaccountPage from './pages/account/Myaccount';
import EditAccountPage from './pages/account/EditAccount';
import OrderSummaryPage from './pages/account/OrderSummary';
import AddressBookPage from './pages/account/AddressBook';
import CheckoutPage from './pages/checkout/Checkout';

import HeaderContainer from './containers/common/HeaderContainer';
import FooterContainer from './containers/common/FooterContainer';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Route component={HomePage} path={'/'} exact />
      <Route component={LoginPage} path={'/login'} />
      <Route component={RegisterPage} path={'/register'} />
      <Route component={AddCollectionPage} path={'/addcollection'} />
      <Route
        component={CollectionsPage}
        path={'/collections/:category'}
        exact
      />
      <Route component={AboutUsPage} path={'/about'} />
      <Route component={CareerPage} path={'/career'} />
      <Route component={FAQPage} path={'/faq'} />
      <Route component={RingSizerPage} path={'/ringsizer'} />
      <Route component={ShippingReturnsPage} path={'/shippingreturns'} />
      <Route component={CheckoutPage} path={'/checkout'} />
      <Route
        component={CollectionViewPage}
        path={'/collections/:category/:collectionId'}
        exact
      />
      {/* <Route component={MyaccountPage} path={'/myaccount'} /> */}
      <Route
        component={EditAccountPage}
        path={'/myaccount/editaccount'}
        exact
      />
      <Route
        component={OrderSummaryPage}
        path={'/myaccount/ordersummary'}
        exact
      />
      <Route
        component={AddressBookPage}
        path={'/myaccount/addressbook'}
        exact
      />
      <FooterContainer />
    </>
  );
};

export default App;
