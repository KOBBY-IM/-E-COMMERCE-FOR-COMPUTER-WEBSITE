import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ProductItemShape } from './ProductItemShape';
import { useParams } from 'react-router-dom';
import ProductSpecRow from './ProductSpecRow';
import { connect } from 'react-redux';
import { AddCartItem } from '../actions/cartActionCreator';


const ProductPage = ({ listProduct, isLoggedIn, AddCartItem }) => {
  const { id } = useParams()
  const product = listProduct.find((product) => product._id === id)
  return (
    <div className={css(styles.productContainer)}>
      <div>
        <img className={css(styles.cardImage)} src={product.images} alt='product'/>
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price} $</p>
        <button
        className={!isLoggedIn ? css(styles.disabled) : css(styles.button)} 
        disabled={!isLoggedIn}
        onClick={AddCartItem}
        >Add to Cart</button>
        <h2>Description</h2>
        <p>{product.description}</p>
        <table id='specList' className={css(styles.table)}>
          <>
          <thead>
            <ProductSpecRow spec={product.name} isHeader={true} />
            <ProductSpecRow spec="Caracteristics" value="Value" isHeader={true} />
          </thead>
          <tbody>
              { product.storage && <ProductSpecRow spec='storage' value={product.storage} />}
              { product.cpu && <ProductSpecRow spec='cpu' value={product.cpu} />}
              { product.ram && <ProductSpecRow spec='ram' value={product.ram} />}
              { product.gpu && <ProductSpecRow spec='gpu' value={product.gpu} />}
          </tbody>
          </>
        </table>
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
    borderRadius: '30px',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    fontSize: '1.2rem',
    height: '40px',
    width: '150px',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'normal',
  },
  table: {
    display: "table",
    borderCollapse: "collapse",
    fontSize: "1.2rem",
    width: "50vw",
    margin: "2em auto",
    border: "1px solid black"
  },
  disabled: {
    borderRadius: '30px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    height: '40px',
    width: '150px',
    textAlign: 'center',
    color: 'black',
    fontStyle: 'normal',
    backgroundColor: 'grey'
  }
});

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
  };
};

const mapDispatchToProps = {
  AddCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);