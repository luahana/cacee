import React, { useEffect, useState } from 'react';
import AddressForm from '../../components/common/AddressForm';

const AddressFormContainer = ({}) => {
  const [address, setAddress] = useState({
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const onChange = e => {
    const { value, name } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  return <AddressForm type={'billing'} address={address} onChange={onChange} />;
};

export default AddressFormContainer;
