import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BagMenu from '../../components/bag/BagMenu';
import { removeItem, changeQuantity, toggleMenu } from '../../modules/bag';

const BagMenuContainer = ({ isMenuOpen, onCloseMenu }) => {
  const dispatch = useDispatch();
  const { bagItems } = useSelector(({ bag }) => ({
    bagItems: bag.bagItems,
  }));

  const onRemoveItemClick = index => {
    dispatch(removeItem(index));
  };

  const onChangeQuantityClick = (index, value) => {
    dispatch(changeQuantity(index, value));
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
    />
  );
};

export default BagMenuContainer;
