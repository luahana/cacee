import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import DropdownContainer from '../../containers/common/DropdownContainer';

const ItemViewBlock = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ItemViewImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

const ImagesBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ItemDescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
  padding: 3rem;
`;

const ItemDescDesc = styled.div``;

const FormBlock = styled.div`
  width: 80%;
  .select {
    width: 100%;
    margin: 5px 0px;
    height: 30px;
    border: none;
    padding: 50px;
  }
  form {
    margin: 20px 0px;
  }
`;

const ItemOptions = styled.div``;

const ItemDescHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  .title {
    font-weight: bold;
  }
  .description {
    font-size: 10px;
  }
`;

const AddToCartBtn = styled(Button)`
  width: 100%;
  padding: 20px;
  margin-top 10px;
`;

const SampleImages = styled.img`
  margin: 0.5rem;
  width: 13%;
  cursor: pointer;
`;

const ErrorBlock = styled.div``;

const ViewCollection = ({
  collection,
  loadingError,
  loading,
  imageIndex,
  onClick,
  onColorSelect,
  onSizeSelect,
  onAddToBag,
  error,
}) => {
  if (loading || !collection) {
    return null;
  }
  const { name, category, desc, colors, sizes, prices, images } = collection;
  return (
    <>
      <ItemViewBlock>
        <ItemViewImg>
          <img src={images[imageIndex]} width="80%"></img>
          <ImagesBlock>
            {images.map((image, index) => (
              <SampleImages
                src={image}
                key={image}
                onClick={() => onClick(index)}
              />
            ))}
          </ImagesBlock>
        </ItemViewImg>
        <ItemDescriptionBlock>
          <FormBlock>
            <ItemDescHeader>
              <div className="title">{name}</div>
              <div>${prices[0]}</div>
            </ItemDescHeader>
            <ItemDescDesc>{desc}</ItemDescDesc>
            <DropdownContainer
              subTitle={'COLOR: '}
              title={''}
              onSelect={onColorSelect}
              listOpen={false}
              list={colors.map(color => ({
                id: color,
                key: color,
                title: color,
              }))}
              fullWidth
            ></DropdownContainer>
            {category === 'rings' && (
              <DropdownContainer
                subTitle={'SIZE: '}
                title={''}
                onSelect={onSizeSelect}
                listOpen={false}
                list={sizes.map(size => ({ id: size, key: size, title: size }))}
                fullWidth
              ></DropdownContainer>
            )}

            {error && <ErrorBlock>{error}</ErrorBlock>}
            <AddToCartBtn onClick={onAddToBag}>ADD TO BAG</AddToCartBtn>
          </FormBlock>
        </ItemDescriptionBlock>
      </ItemViewBlock>
    </>
  );
};

export default ViewCollection;
