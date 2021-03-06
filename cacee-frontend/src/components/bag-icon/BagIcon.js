import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const CartIconBlock = styled.div`
  height: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  color: red;
`;

const BagIcon = ({ onClick, totalCount }) => {
  return (
    <>
      <CartIconBlock onClick={() => onClick()}>
        <i className="fa fa-shopping-bag fa-lg"></i>
        <ItemCount>{totalCount}</ItemCount>
      </CartIconBlock>
    </>
  );
};

export default BagIcon;
