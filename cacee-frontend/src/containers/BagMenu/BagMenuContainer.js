import React, { useState, useEffect } from 'react';
import BagMenu from '../../components/bag/BagMenu';

const BagMenuContainer = ({ isMenuOpen, onCloseMenu }) => {
  return <BagMenu isOpen={isMenuOpen} onCloseMenu={onCloseMenu} />;
};

export default BagMenuContainer;
