import React from 'react';
import styled from 'styled-components';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  PostalCodeElement,
  CardElement,
} from 'react-stripe-elements';
import './CardSection.css';

const cardNumberStyle = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

const cardExpiryStyle = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

const cardCvcStyle = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

const CardSection = () => {
  return (
    <>
      <CardElement />
      {/* <CardNumberElement
        placeholder="Credit Card Number"
        className="cardNumberElement"
        style={cardNumberStyle}
      />
      <div className="class-block">
        <CardExpiryElement
          className="cardExpiryElement"
          style={cardExpiryStyle}
        />
        <CardCvcElement className="cardCvcElement" style={cardCvcStyle} />
      </div> */}
    </>
  );
};

export default CardSection;
