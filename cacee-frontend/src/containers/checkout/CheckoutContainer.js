import React, { useEffect } from 'react';
import CheckoutTemplate from '../../components/checkout/CheckoutTemplate';
import ShippingTemplate from '../../components/checkout/ShippingTemplate';
import DeliveryTemplate from '../../components/checkout/DeliveryTemplate';
import useScript from '../../hooks/useScript';
// import { useSelector } from 'react-redux';

const CheckoutContainer = () => {
  // useScript('https://js.stripe.com/v3/');

  return (
    <>
      <ShippingTemplate />
      <DeliveryTemplate />
      <CheckoutTemplate />
    </>
  );
};

export default CheckoutContainer;
