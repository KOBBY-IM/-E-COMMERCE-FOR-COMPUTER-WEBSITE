import { schema, normalize } from 'normalizr';

const product = new schema.Entity('products');

export const productsNormalizer = (data) => {
  const normalizedData = normalize(data, [product]);
  return normalizedData.entities
};