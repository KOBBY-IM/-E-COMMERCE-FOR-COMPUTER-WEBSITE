import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ProductItemShape } from './ProductItemShape';
import { useParams } from 'react-router-dom';

const ProductPage = ({ listProduct }) => {
  const { id } = useParams()
  const product = listProduct.find((product) => product._id === id)
  return (
    <div className={css(styles.productContainer)}>
      <div>
        <img className={css(styles.cardImage)} src='' alt='product'/>
      </div>
      <div>
        <h1>Title {product.name}</h1>
        <p>Price: {product.price} $</p>
        <div>
          <button>-</button>
          <label>1</label>
          <button>+</button>
        </div>
        <button className={css(styles.button)}>Add to Cart</button>
        <h2>Description</h2>
        <p>{product.description}</p>
        <table></table>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  listProduct: PropTypes.arrayOf(PropTypes.shape(ProductItemShape))
}

ProductPage.defaultProps = {
  listProduct: [],
}
  

const styles = StyleSheet.create({
  productContainer: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  details: {
    marginLeft: '40px',
  },
  button: {
    position: 'absolute',
    bottom: '20px',
    borderRadius: '30px',
    fontWeight: 'bold',
    backgroundColor: 'dark blue',
    fontSize: '1.2rem',
    height: '40px',
    width: '150px',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'normal',
    left: '20px'
  },
});

export default ProductPage;