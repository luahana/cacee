import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BagIcon from '../../components/bag-icon/BagIcon';
import {} from '../../modules/bag';

const BagIconContainer = ({ onClick }) => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(({ bag }) => ({
    itemCount: bag.itemCount,
  }));

  return <BagIcon onClick={onClick} totalCount={itemCount} />;
};

export default BagIconContainer;
