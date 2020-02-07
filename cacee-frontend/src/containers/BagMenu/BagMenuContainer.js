import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BagMenu from '../../components/bag/BagMenu';
import {
  removeItem,
  changeQuantity,
  toggleMenu,
  calculateTotalPrice,
  countItem,
} from '../../modules/bag';

const BagMenuContainer = ({ isMenuOpen, onCloseMenu }) => {
  const dispatch = useDispatch();
  const { bagItems, totalPrice } = useSelector(({ bag }) => ({
    bagItems: bag.bagItems,
    totalPrice: bag.totalPrice,
  }));

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [dispatch, bagItems]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isMenuOpen]);

  const onRemoveItemClick = index => {
    dispatch(removeItem(index));
  };

  const onChangeQuantityClick = (index, value) => {
    dispatch(changeQuantity(index, value));
    dispatch(countItem());
  };

  const onMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <BagMenu
      isOpen={isMenuOpen}
      onCloseMenu={onCloseMenu}
      bagItems={bagItems}
      onRemoveItemClick={onRemoveItemClick}
      onChangeQuantityClick={onChangeQuantityClick}
      toggleMenu={onMenuClick}
      totalPrice={totalPrice}
    />
  );
};

export default BagMenuContainer;
