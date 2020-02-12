import React from 'react';
import styled from 'styled-components';
import { injectStripe } from 'react-stripe-elements';
import Button from '../common/Button';
import CardSection from './CardSection';
import { useDispatch, useSelector } from 'react-redux';
import { pay } from '../../modules/payment';

const ButtonWithMarginTop = styled.div`
  margin-top: 1rem;
`;

const CheckoutForm = props => {
  const handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    var resultContainer = document.getElementById('payment-result');
    resultContainer.textContent = '';
    // Use Elements to get a reference to the Card Element mounted somewhere
    // in your <Elements> tree. Elements will know how to find your Card Element
    // because only one is allowed.
    // See our getElement documentation for more:
    // https://stripe.com/docs/stripe-js/reference#elements-get-element
    const cardElement = props.elements.getElement('card');

    // From here we can call createPaymentMethod to create a PaymentMethod
    // See our createPaymentMethod documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
    props.stripe
      .createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email: 'truepark0@gmail.com',
          name: 'Jenny Rosen',
          address: {
            city: 'Waterloo',
            country: 'CA',
            line1: '410 white birch ave',
            line2: null,
            state: 'ON',
          },
        },
      })
      .then(result => {
        handlePaymentMethodResult(result);
        console.log('Received Stripe PaymentMethod:', result.paymentMethod);
      });

    const handlePaymentMethodResult = async ({ paymentMethod, error }) => {
      if (error) {
        // An error happened when collecting card details, show error in payment form
        resultContainer.textContent = error.message;
      } else {
        // Send paymentMethod.id to your server (see Step 3)
        const response = await fetch('/api/payment/pay', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ payment_method_id: paymentMethod.id }),
        });
        console.log('response');
        console.log(response);
        const responseJson = await response.json();

        handleServerResponse(responseJson);
      }
    };

    const handleServerResponse = async responseJson => {
      if (responseJson.error) {
        // An error happened when charging the card, show it in the payment form
        resultContainer.textContent = responseJson.error;
      } else {
        // Show a success message
        resultContainer.textContent = 'Success!';
      }
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <AddressSection /> */}
      <CardSection />
      <ButtonWithMarginTop>
        <Button fullWidth="true">COMPLETE ORDER</Button>
      </ButtonWithMarginTop>
      <div id="payment-result">Result</div>
    </form>
  );
};

export default injectStripe(CheckoutForm);
