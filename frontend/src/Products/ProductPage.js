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
          <button>+</button>
          <button>+</button>
          <button>-</button>
        </div>
        <button>Add to Cart</button>
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
});

export default ProductPage;