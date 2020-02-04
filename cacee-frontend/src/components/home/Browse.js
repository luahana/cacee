import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const BrowseBlock = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0rem;
`;

const CategoryBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

const CategoryImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

const Browse = () => {
  const browseImages = [
    {
      category: 'Rings',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0015/0129/8787/t/19/assets/pf-03f09849-bdf2-42d7-928a-aab3674af393--2019NOV29JENNYBIRDRings.png?v=1578943068',
    },
    {
      category: 'Necklaces',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0015/0129/8787/t/19/assets/pf-7c5a87ce-b2ea-4c7a-ab2d-7acc0c034456--2019NOV29JENNYBIRDNecklaces.png?v=1578953748',
    },
    {
      category: 'Earrings',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0015/0129/8787/t/19/assets/pf-9f6a8fa4-5aaf-4b2f-803c-5c0d3111bf97--2019NOV29JENNYBIRDEarrings.png?v=1578939541',
    },
    {
      category: 'Bracelets',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0015/0129/8787/t/19/assets/pf-b06881d8-14c0-44e5-ba47-d49ccaf3d322--2019NOV29JENNYBIRDBracelets.png?v=1578943528',
    },
  ];
  return (
    <>
      <Responsive>
        <BrowseBlock>
          {browseImages.map(bi => (
            <CategoryBlock
              to={`/collections/${bi.category.toLowerCase()}`}
              key={bi.category}
            >
              <CategoryImage src={bi.imageUrl} />
              <div>SHOP {bi.category.toUpperCase()}</div>
            </CategoryBlock>
          ))}
        </BrowseBlock>
      </Responsive>
    </>
  );
};

export default Browse;
