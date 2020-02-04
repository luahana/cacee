import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, edit } from '../../modules/user';
import ViewOrder from '../../components/myaccount/ViewOrder';

const ViewOrderContainer = () => {
  return (
    <>
      <ViewOrder />
    </>
  );
};

export default ViewOrderContainer;
