import client from './client';

export const listCollections = ({ category }) =>
  client.get(`/api/collections/${category}`);

export const addCollection = ({
  category,
  name,
  colors,
  sizes,
  desc,
  dateAdded,
  images,
  bestSeller,
  newProduct,
}) =>
  client.post('/api/collections/add', {
    category,
    name,
    colors,
    sizes,
    desc,
    dateAdded,
    images,
    bestSeller,
    newProduct,
  });

export const getCollection = ({ category, collectionId }) =>
  client.get(`/api/collections/${category}/${collectionId}`);

export const updateCollection = ({
  id,
  category,
  name,
  colors,
  sizes,
  desc,
  dateAdded,
  images,
  bestSeller,
  newProduct,
}) =>
  client.patch(`/api/collections/${id}`, {
    category,
    name,
    colors,
    sizes,
    desc,
    dateAdded,
    images,
    bestSeller,
    newProduct,
  });

export const removeCollection = id => client.delete(`/api/collections/${id}`);
