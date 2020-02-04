import React from 'react';
import AddressBookContainer from '../../containers/myaccount/AddressBookContainer';
import MyAccountHeaderContainer from '../../containers/myaccount/MyAccountHeaderContainer';
import OrderTemplate from '../../components/myaccount/OrderTemplate';

const AddressbookPage = () => {
  return (
    <>
      <MyAccountHeaderContainer />
      <OrderTemplate>
        <AddressBookContainer />
      </OrderTemplate>
    </>
  );
};

export default AddressbookPage;
