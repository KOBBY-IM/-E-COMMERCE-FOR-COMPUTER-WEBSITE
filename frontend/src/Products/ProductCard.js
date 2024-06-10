import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const ProductCard = ({ name, cpu, storage, price, ram, description }) => {
  return (
    <>
      <img className={css(styles.cardImage)} src='' alt='product'/>
      <em className={css(styles.name)}>{name} | {cpu} | {storage} | {ram}</em>
      {/* <em className={css(styles.name)}>{name} | {description} </em> */}
      <ul className={css(styles.specs)}>
        <li>Price: {price} $</li>
      </ul>
    </>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  richDescription: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  countInStock: PropTypes.number.isRequired,
  rating: PropTypes.number,
  numReviews: PropTypes.number,
  isFeatured: PropTypes.bool,
  // dateCreated: PropTypes.instanceOf(Date),
  cpu: PropTypes.string.isRequired,
  gpu: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  motherboard: PropTypes.string.isRequired,
  psu: PropTypes.string.isRequired,
  coolingSystem: PropTypes.string,
  dimensions: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
};

ProductCard.defaultProps = {
  name: '',
  description: '',
  richDescription: '',
  images: [],
  brand: '',
  price: 0,
  category: '',
  countInStock: 0,
  rating: 0,
  numReviews: 0,
  isFeatured: false,
  // dateCreated: new Date(),
  cpu: '',
  gpu: '',
  ram: '',
  storage: '',
  motherboard: '',
  psu: '',
  coolingSystem: '',
  dimensions: '',
  weight: '',
  color: '',
}
  

const styles = StyleSheet.create({
  cardImage: {
    display: 'block',
    margin: '0 auto 10px',
    borderRadius: '10px',
    objectFit: 'contain',
    width: '100%',

  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  specs: {
    listStyle: 'none',
    paddingLeft: '0',
  }
});

export default ProductCard;