import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ViewCollection from '../../components/collection/ViewCollection';
import { getCollection, unloadCollection } from '../../modules/collection';
import { openMenu } from '../../modules/global';

const CollectionViewContainer = ({ match, history }) => {
  const { collectionId, category } = match.params;
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { collection, loadingError, loading } = useSelector(
    ({ collection, loading }) => ({
      collection: collection.collection,
      loadingError: collection.error,
      loading: loading['collection/GET_COLLECTION'],
    }),
  );

  useEffect(() => {
    dispatch(getCollection({ category, collectionId }));

    return () => {
      dispatch(unloadCollection());
    };
  }, [dispatch]);

  const onClick = index => {
    setImageIndex(index);
  };

  const onColorSelect = color => {
    setSelectedColor(color);
  };

  const onSizeSelect = size => {
    setSelectedSize(size);
  };

  const onAddToBag = () => {
    if (category === 'rings') {
      if (!selectedColor) {
        setError('Please select your color');
      } else if (!selectedSize) {
        setError('Please select your size');
      }
    } else {
      if (!selectedColor) {
        setError('Please select your color');
      }
    }
    if ((category !== 'rings' && selectedColor) || selectedColor) {
      setError(null);
      console.log('onAddToBag');
      dispatch(openMenu());
    }
  };

  return (
    <ViewCollection
      collection={collection}
      loading={loading}
      loadingError={loadingError}
      onClick={onClick}
      imageIndex={imageIndex}
      onColorSelect={onColorSelect}
      onSizeSelect={onSizeSelect}
      onAddToBag={onAddToBag}
      selectedColor={selectedColor}
      selectedSize={selectedSize}
      error={error}
    />
  );
};

export default withRouter(CollectionViewContainer);
