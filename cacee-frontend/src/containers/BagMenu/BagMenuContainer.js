import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BagMenu from '../../components/bag/BagMenu';

const BagMenuContainer = ({ isMenuOpen, onCloseMenu }) => {
  const { bagItems } = useSelector(({ bag }) => ({
    bagItems: bag.bagItems,
  }));
  return (
    <BagMenu
      isOpen={isMenuOpen}
      onCloseMenu={onCloseMenu}
      bagItems={bagItems}
    />
  );
};

export default BagMenuContainer;
