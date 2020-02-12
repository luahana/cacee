import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const AddressFormBlock = styled.div``;

const textMap = {
  shipping: 'Shipping Address',
  billing: 'Billing Address',
};

const InputBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SpaceBlock = styled.div`
  width: 3%;
`;

const AddressForm = ({ type, address, onChange }) => {
  const text = textMap[type];
  console.log('address');
  console.log(address);
  return (
    <AddressFormBlock>
      <Input
        name="firstName"
        value={address.firstname}
        placeholder="First Name"
        onChange={onChange}
        required="true"
        fullWidth="true"
      />
      <Input
        name="lastName"
        value={address.lastname}
        placeholder="Last Name"
        onChange={onChange}
        required="true"
        fullWidth="true"
      />
      <Input
        name="address1"
        value={address.address1}
        placeholder="Address Line 1"
        onChange={onChange}
        required="true"
        fullWidth="true"
      />
      <Input
        name="address2"
        value={address.address2}
        placeholder="Address Line 2 (optional)"
        onChange={onChange}
        required="false"
        fullWidth="true"
      />
      <InputBlock>
        <Input
          name="city"
          value={address.city}
          placeholder="City"
          onChange={onChange}
          required="true"
          fullWidth="true"
        />
        <SpaceBlock />
        <Input
          name="country"
          value={address.country}
          placeholder="Country"
          onChange={onChange}
          required="true"
          fullWidth="true"
        />
      </InputBlock>
      <InputBlock>
        <Input
          name="state"
          value={address.state}
          placeholder="State"
          onChange={onChange}
          required="true"
          fullWidth="true"
        />
        <SpaceBlock />
        <Input
          name="postalCode"
          value={address.postalCode}
          placeholder="Postal Code"
          onChange={onChange}
          required="true"
          fullWidth="true"
        />
      </InputBlock>
    </AddressFormBlock>
  );
};

export default AddressForm;
