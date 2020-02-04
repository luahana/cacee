import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 240px;
  cursor: pointer;
  margin: 1rem;
`;

const ItemImg = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 300px;
  object-fit: cover;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.div``;

const ItemColors = styled.div``;

const ItemPrice = styled.div``;

const CollectionItem = ({ collection }) => {
  const { name, images, category, colors, prices, _id } = collection;
  return (
    <>
      <ItemBlock to={`/collections/${category}/${_id}`}>
        <ItemImg src={images[0]} width="100%" />
        <ItemFooter>
          <ItemDescription>
            <ItemName>{name}</ItemName>
            <ItemColors>{colors}</ItemColors>
          </ItemDescription>
          <ItemPrice>${prices[0]}</ItemPrice>
        </ItemFooter>
      </ItemBlock>
    </>
  );
};

export default CollectionItem;
