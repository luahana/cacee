import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CollectionListTemplate from '../../components/collections/CollectionListTemplate';
import { listCollections, unloadCollections } from '../../modules/collections';

const CollectionListContainer = ({ match, location }) => {
  const { category } = match.params;
  const [sortBy, setSortBy] = useState('all');
  const [colorBy, setColorBy] = useState('all');
  const dispatch = useDispatch();
  const { collections, error, loading } = useSelector(
    ({ collections, loading }) => ({
      collections: collections.collections,
      error: collections.error,
      loading: loading['collections/LIST_COLLECTIONS'],
    }),
  );
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    dispatch(listCollections({ category }));
    setSortBy('all');
    setColorBy('all');
    return () => {
      dispatch(unloadCollections());
    };
  }, [dispatch, location.search, match.params]);

  const sortByPrice = col => {
    if (sortBy === 'all') {
      return col;
    } else if (sortBy === 'priceLowToHigh') {
      return [].concat(col).sort((a, b) => a.prices[0] - b.prices[0]);
    } else if (sortBy === 'priceHighToLow') {
      return [].concat(col).sort((a, b) => b.prices[0] - a.prices[0]);
    }
  };

  useEffect(() => {
    setNewCollections(sortByPrice(newCollections));
  }, [collections, sortBy]);

  useEffect(() => {
    if (colorBy === 'all') {
      setNewCollections(sortByPrice(collections));
    } else if (colorBy === 'yellow') {
      setNewCollections(
        sortByPrice(
          [].concat(collections).filter(a => a.colors.includes('yellow')),
        ),
      );
    } else if (colorBy === 'rose') {
      setNewCollections(
        sortByPrice(
          [].concat(collections).filter(a => a.colors.includes('rose')),
        ),
      );
    } else if (colorBy === 'white') {
      setNewCollections(
        sortByPrice(
          [].concat(collections).filter(a => a.colors.includes('white')),
        ),
      );
    }
  }, [collections, colorBy]);

  const onSortBySelect = key => {
    setSortBy(key);
  };

  const onSetColorBySelect = key => {
    setColorBy(key);
  };

  return (
    <CollectionListTemplate
      loading={loading}
      error={error}
      collections={newCollections}
      category={category}
      onSortBySelect={onSortBySelect}
      onSetColorBySelect={onSetColorBySelect}
    />
  );
};

export default withRouter(CollectionListContainer);
