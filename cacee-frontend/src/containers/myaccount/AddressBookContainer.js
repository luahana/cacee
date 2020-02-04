import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, edit } from '../../modules/user';
import Addresses from '../../components/myaccount/Addresses';

const AddressBookContainer = () => {
  return (
    <>
      <Addresses />
    </>
  );
};

export default AddressBookContainer;
