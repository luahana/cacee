import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import AddressForm from '../common/AddressForm';
import Button from '../common/Button';

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

const BodyBlock = styled.div`
  padding: 1rem 0rem;
`;

const ContactInfoBlock = styled.div``;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;
`;
const ContactInfo = styled.div``;
const HaveAnAccount = styled.div``;
const ShippingAddressBlock = styled.div``;

const ShippingTemplate = () => {
  const address = {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  };
  return (
    <>
      <TemplateBlock>
        <HeaderBlock>01 SHIPPING</HeaderBlock>
        <BodyBlock>
          <ContactInfoBlock>
            <ContentHeader>
              <ContactInfo>Contact Info</ContactInfo>
              <HaveAnAccount>Have an account? Log in</HaveAnAccount>
            </ContentHeader>
            <Input name="Email" placeholder="Email" fullWidth="true" />
          </ContactInfoBlock>
          <ShippingAddressBlock>
            <ContentHeader>Shipping Address</ContentHeader>
            <AddressForm address={address} />
          </ShippingAddressBlock>
        </BodyBlock>
        <Button fullWidth="true">CONTINUE</Button>
      </TemplateBlock>
    </>
  );
};

export default ShippingTemplate;
