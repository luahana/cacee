import React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';
import Responsive from '../common/Responsive';
import DropdownContainer from '../../containers/common/DropdownContainer';
import 'font-awesome/css/font-awesome.min.css';
import OutsideAlerter from '../../containers/common/OutsideAlerter';

const CollectionListViewBlock = styled.div`
  width: 100%;
  padding: 0rem 3rem;

  .collectionListBlock {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
  }

  @media (min-width: 600px) {
    .collectionListBlock {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .collectionListBlock {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 30px 0px;
`;

const ShopByBlock = styled.div`
  width: 40%;
`;

const SortByBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
`;

const TitleBlock = styled.div`
  width: 20%;
  text-align: center;
`;

const CollectionListTemplate = ({
  collections,
  loading,
  error,
  category,
  onSortBySelect,
  onSetColorBySelect,
}) => {
  // if (error) {
  //   console.log('error collection list');
  //   return (
  //     <CollectionListViewBlock>Error has occurred</CollectionListViewBlock>
  //   );
  // }
  if (loading || !collections) {
    return null;
  }
  console.log(collections);
  return (
    <Wrapper>
      <CollectionListViewBlock>
        <HeaderBlock>
          <ShopByBlock>
            <DropdownContainer
              subTitle={'SHOP BY COLOR: '}
              title={'All'}
              list={[
                { id: '0', title: 'All', key: 'all' },
                { id: '1', title: 'Yellow', key: 'yellow' },
                { id: '2', title: 'Rose', key: 'rose' },
                { id: '3', title: 'White', key: 'white' },
              ]}
              onSelect={onSetColorBySelect}
            ></DropdownContainer>
          </ShopByBlock>
          {category === 'all' ? (
            <TitleBlock> All Collections </TitleBlock>
          ) : (
            <TitleBlock> {category.toUpperCase()} </TitleBlock>
          )}

          <SortByBlock>
            <DropdownContainer
              subTitle={'SORT BY: '}
              title={'All'}
              list={[
                { id: '0', title: 'All', key: 'all' },
                { id: '1', title: 'Price: Low to High', key: 'priceLowToHigh' },
                { id: '2', title: 'Price: High to Low', key: 'priceHighToLow' },
              ]}
              onSelect={onSortBySelect}
            ></DropdownContainer>
          </SortByBlock>
        </HeaderBlock>
        <div className="collectionListBlock">
          {!loading && collections && (
            <>
              {/* {newCollections} */}
              {collections.map(collection => (
                <CollectionItem collection={collection} key={collection._id} />
              ))}
            </>
          )}
        </div>
      </CollectionListViewBlock>
    </Wrapper>
  );
};

export default CollectionListTemplate;
