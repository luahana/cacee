import React from 'react';
import styled from 'styled-components';

const CollectionPreviewBlock = styled.div`
  display: flex;
  width: 100%;
`;

const CollectionImageBlock = styled.div`
  width: 30%;
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

const CollectionPreview = ({ Collections }) => {
  // const { name, size, color, price, category } = Collections;

  return (
    <>
      <CollectionPreviewBlock>
        <CollectionImageBlock></CollectionImageBlock>
        <CollectionDescBlock>
          <DescHeader>
            <Name>NAME</Name>
            <Close>X</Close>
          </DescHeader>
          <DescBody>Size: 6, 14k White Gold</DescBody>
          <DescFooter>
            <Quantity>Qty: 1</Quantity>
            <Price>$100</Price>
          </DescFooter>
        </CollectionDescBlock>
      </CollectionPreviewBlock>
    </>
  );
};

export default CollectionPreview;
