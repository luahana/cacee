import React from 'react';
import styled, { css } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import CollectionPreview from './CollectionPreview';
import BagIcon from '../bag-icon/BagIcon';

const OverlayBlock = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;

  ${props =>
    !props.isOpen &&
    css`
      display: none;
    `}
`;

const GrayBlock = styled.div`
  height: 100vh;
  width: 70%;
  background: rgba(40, 40, 40, 0.75);
`;
const BagMenuBlock = styled.div`
  height: 100vh;
  width: 30%;
  position: absolute;
  background-color: white;
  right: 0;
  top: 0;
  z-index: 101;
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const Close = styled.div`
  cursor: pointer;
`;

const Bag = styled.div``;

const BagBlock = styled.div`
  padding-top: 2rem;
`;

const EmptyBagBlock = styled.div`
  padding-left: 2rem;
`;

const BagMenu = ({
  onCloseMenu,
  isOpen,
  bagItems,
  onRemoveItemClick,
  onChangeQuantityClick,
  toggleMenu,
}) => {
  return (
    <>
      <OverlayBlock isOpen={isOpen}>
        <GrayBlock onClick={() => onCloseMenu()} />
        <BagMenuBlock>
          <HeaderBlock>
            <Close onClick={() => onCloseMenu()}>
              <i className="fa fa-times fa-lg"></i>
            </Close>
            <Title>YOUR BAG</Title>
            <Bag>
              <BagIcon onClick={toggleMenu} />
            </Bag>
          </HeaderBlock>
          <BagBlock>
            {bagItems.length === 0 ? (
              <EmptyBagBlock>Your Bag is Empty</EmptyBagBlock>
            ) : (
              bagItems.map((bagItem, index) => (
                <CollectionPreview
                  collection={bagItem}
                  key={
                    bagItem._id + bagItem.selectedSize + bagItem.selectedColor
                  }
                  index={index}
                  onRemoveItemClick={onRemoveItemClick}
                  onChangeQuantityClick={onChangeQuantityClick}
                ></CollectionPreview>
              ))
            )}
          </BagBlock>
        </BagMenuBlock>
      </OverlayBlock>
    </>
  );
};

export default BagMenu;
