import { schema, normalize } from 'normalizr';

const product = new schema.Entity('products', {}, {
  idAttribute: '_id'});

const cart = new schema.Entity('carts', {
  products: [product],
});


export const cartNormalizer = (data) => {
  const normalizedData = normalize(data, [cart]);
  return normalizedData.entities;
};