import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ProductItemShape } from './ProductItemShape';

const ProductsList = ({}) => {
    return (
      <>
        
      </>
    );
  }

ProductsPreview.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.shape(ProductItemShape))
}

const styles = StyleSheet.create({
  card: {
    display: 'block',
    margin: '1rem 1rem',
    padding: '1rem 1rem 0',
    width: 'calc((100% / 4) - 2rem )',
    border: 'solid 1px grey',
    borderRadius: '10px',

  },
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

export default ProductsList;