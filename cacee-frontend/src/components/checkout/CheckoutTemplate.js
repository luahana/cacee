import React from 'react';
import styled from 'styled-components';
import AddressFormContainer from '../../containers/common/AddressFormContainer';
import { Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';

const TemplateBlock = styled.div`
  width: 45%;
  padding: 1.5rem;
  padding: 2rem;
  margin: 3rem;
  margin-left: 6rem;
  border: solid 1px black;
`;

const HeaderBlock = styled.div`
  padding-bottom: 1rem;
  border-bottom: solid 1px black;
`;

const CheckoutTemplate = () => {
  return (
    <>
      <TemplateBlock>
        <HeaderBlock>03 PAYMENT</HeaderBlock>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </TemplateBlock>
    </>
  );
};

export default CheckoutTemplate;
