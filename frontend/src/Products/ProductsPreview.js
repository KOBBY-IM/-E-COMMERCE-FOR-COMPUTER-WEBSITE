import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import ProductCard from './ProductCard';
import { ProductItemShape } from './ProductItemShape';
import { Link } from 'react-router-dom';

class ProductsPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listProducts } = this.props
    return (
      <>
        {listProducts.map((product) => (
          <Link key={product._id} className={css(styles.card, styles.hover) } to={`/product/${product._id}`}>
            <div>
              <ProductCard
              product={product}
              />
            </div>
          </Link>
        ))}
      </>
    );
  }
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
    textDecoration: 'none',
    color: 'black'

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
  },
  hover: {
    ':hover': {
        cursor: 'pointer'
    }
},
});

export default ProductsPreview;