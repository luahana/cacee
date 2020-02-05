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

const CollectionDescBlock = styled.div`
  width: 100%;
  padding: 1rem;
`;

const DescHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div``;

const Close = styled.div`
  cursor: pointer;
`;

const DescBody = styled.div``;

const DescFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuantityBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
`;

const Quantity = styled.div``;

const QuantityBtn = styled.div`
  cursor: pointer;
`;

const Price = styled.div``;

const CollectionPreview = ({
  collection,
  index,
  onRemoveItemClick,
  onChangeQuantityClick,
}) => {
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
            <Close onClick={() => onRemoveItemClick(index)}>X</Close>
          </DescHeader>
          <DescBody>
            {category === 'rings' ? <span> Size: {selectedSize}, </span> : null}
            Color: {selectedColor}
          </DescBody>
          <DescFooter>
            <QuantityBlock>
              <QuantityBtn onClick={() => onChangeQuantityClick(index, -1)}>
                -
              </QuantityBtn>
              <Quantity>{quantity}</Quantity>
              <QuantityBtn onClick={() => onChangeQuantityClick(index, 1)}>
                +
              </QuantityBtn>
            </QuantityBlock>
            <Price>${prices[0] * quantity}</Price>
          </DescFooter>
        </CollectionDescBlock>
      </CollectionPreviewBlock>
    </>
  );
};

export default CollectionPreview;
