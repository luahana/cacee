import React from 'react';
import styled, { css } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import CollectionPreview from './CollectionPreview';
import BagIconContainer from '../../containers/bagIcon/BagIconContainer';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

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
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 10vh;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const Close = styled.div`
  cursor: pointer;
`;

const Bag = styled.div``;

const BagBlock = styled.div``;

const EmptyBagBlock = styled.div`
  padding: 2rem;
`;

const BagWithItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
`;

const ItemsBlock = styled.div`
  padding: 0rem 2rem;
  position: relative;
  overflow-y: scroll;
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  padding: 1rem 2rem;
`;

const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 0rem;
`;

const LinkWithMarginTop = styled(Link)`
  margin-top: 1rem;
`;

const FooterLineContent = styled.div``;

const BagMenu = ({
  onCloseMenu,
  isOpen,
  bagItems,
  onRemoveItemClick,
  onChangeQuantityClick,
  toggleMenu,
  totalPrice,
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
              <BagIconContainer onClick={toggleMenu} />
            </Bag>
          </HeaderBlock>
          <BagBlock>
            {bagItems.length === 0 ? (
              <EmptyBagBlock>
                <div>Your Bag is Empty</div>
                <Link to={'/collections/all'} onClick={() => toggleMenu()}>
                  SHOP NOW
                </Link>
              </EmptyBagBlock>
            ) : (
              <BagWithItemsBlock>
                <ItemsBlock>
                  {bagItems.map((bagItem, index) => (
                    <CollectionPreview
                      collection={bagItem}
                      key={
                        bagItem._id +
                        bagItem.selectedSize +
                        bagItem.selectedColor
                      }
                      index={index}
                      onRemoveItemClick={onRemoveItemClick}
                      onChangeQuantityClick={onChangeQuantityClick}
                    ></CollectionPreview>
                  ))}
                </ItemsBlock>
                <FooterBlock>
                  <FooterLine>
                    <FooterLineContent>SHIPPING</FooterLineContent>
                    <FooterLineContent>$10</FooterLineContent>
                  </FooterLine>
                  <FooterLine>
                    <FooterLineContent>SUBTOTAL</FooterLineContent>
                    <FooterLineContent>${totalPrice}</FooterLineContent>
                  </FooterLine>
                  <LinkWithMarginTop to="/checkout" onClick={toggleMenu}>
                    <Button checkoutBtn>CONTINUE TO CHECKOUT</Button>
                  </LinkWithMarginTop>
                </FooterBlock>
              </BagWithItemsBlock>
            )}
          </BagBlock>
        </BagMenuBlock>
      </OverlayBlock>
    </>
  );
};

export default BagMenu;
