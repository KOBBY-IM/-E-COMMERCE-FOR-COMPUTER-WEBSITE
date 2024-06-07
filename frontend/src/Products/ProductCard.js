import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const ProductCard = ({ name, description, ram }) => {
  return (
    <>
      <img className={css(styles.cardImage)} src='' alt='Computer'/>
      <em className={css(styles.name)}>{name}</em>
      <ul className={css(styles.specs)}>
        <li>description: {description}</li>
        {/* <li>Storage: {memory}Go {memoryType} </li> */}
        <li>RAM: {ram}</li>
      </ul>
    </>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  ram: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
  

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