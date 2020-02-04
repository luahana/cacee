import React from 'react';
import ViewOrderContainer from '../../containers/myaccount/ViewOrderContainer';
import MyAccountHeaderContainer from '../../containers/myaccount/MyAccountHeaderContainer';
import OrderTemplate from '../../components/myaccount/OrderTemplate';

const OrderSummaryPage = () => {
  return (
    <>
      <MyAccountHeaderContainer />
      <OrderTemplate>
        <ViewOrderContainer />
      </OrderTemplate>
    </>
  );
};

export default OrderSummaryPage;
