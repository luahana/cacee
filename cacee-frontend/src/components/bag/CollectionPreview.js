import React from 'react';
import styled from 'styled-components';

const CollectionPreviewBlock = styled.div`
  display: flex;
  width: 100%;
`;

const CollectionImageBlock = styled.div`
  width: 30%;
`;

const CollectionImage = styled.img`
  width: 100%;
`;

const CollectionDescBlock = styled.div``;

const DescHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div``;

const Close = styled.div``;

const DescBody = styled.div``;

const DescFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Quantity = styled.div``;

const Price = styled.div``;

const CollectionPreview = ({ collection }) => {
  const {
    name,
    selectedSize,
    selectedColor,
    prices,
    category,
    quantity,
    images,
  } = collection;

  return (
    <>
      <CollectionPreviewBlock>
        <CollectionImageBlock>
          <CollectionImage src={images[0]} />
        </CollectionImageBlock>
        <CollectionDescBlock>
          <DescHeader>
            <Name>{name}</Name>
            <Close>X</Close>
          </DescHeader>
          <DescBody>
            {category === 'rings' ? <span> Size: {selectedSize}, </span> : null}
            Color: {selectedColor}
          </DescBody>
          <DescFooter>
            <Quantity>Qty: {quantity}</Quantity>
            <Price>${prices[0]}</Price>
          </DescFooter>
        </CollectionDescBlock>
      </CollectionPreviewBlock>
    </>
  );
};

export default CollectionPreview;
