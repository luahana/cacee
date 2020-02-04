import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const ShippingAddressBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressName = styled.div`
  h2 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const AddressDescription = styled.div`
  margin: 20px 0px;
`;

const Addresses = () => {
  return (
    <>
      <ShippingAddressBlock>
        <AddressName>
          <h2>Shipping Address</h2>
        </AddressName>
        <AddressDescription>
          Click the Add button to add a new shipping address.
        </AddressDescription>
      </ShippingAddressBlock>
    </>
  );
};

export default Addresses;
