import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const ProductCard = ({ title, img, proc, memory, memoryType, ram }) => {
  return (
    <>
      <img className={css(styles.cardImage)} src={img} alt='Computer'/>
      <em className={css(styles.title)}>{title}</em>
      <ul className={css(styles.specs)}>
        <li>Proc: {proc}</li>
        <li>Storage: {memory}Go {memoryType} </li>
        <li>RAM: {ram}</li>
      </ul>
    </>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.any,
  proc: PropTypes.string,
  memory: PropTypes.number,
  memoryType: PropTypes.string,
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