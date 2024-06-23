import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsPreview from '../Products/ProductsPreview';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Profil from '../Profil/Profil';
import CartWindow from '../Cart/CartWindow';
import Cart from '../Cart/Cart';
import ProductPage from '../Products/ProductPage';
import { hideCartDrawer } from '../actions/uiActionCreator';
import { fetchProducts } from '../actions/productActionCreator';
import PrivateRoute from '../HOC/PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    }
  }

  componentDidMount() {
    this.props.fetchProducts();
  }


  render() {
    const {
            displayDrawer,
            hideCartDrawer,
            listProducts,
            isLoggedIn,
          } = this.props;

    return (
      <div className={css(styles.app)}>
        <Header/>
        {displayDrawer &&
        <div className={css(styles.cart)}>
          <CartWindow/>
        </div>}
        <div className={css(styles.body)}
        onClick={ displayDrawer ? (hideCartDrawer) : (() => {})}>
          <Routes>
            <Route path='/' 
            element={
              <>
              <div className={css(styles.card)}>
                <ProductsPreview listProducts={listProducts}/>
              </div>
              </>
            }
            />
            <Route path='/product/:id' element={<ProductPage listProduct={listProducts}/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path="/profil" element={<PrivateRoute element={Profil} />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    padding: '20px 40px'
  },
  cart: {
    position: 'fixed',
    top: '0px',
    height: '100vh',
    width: '400px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    backgroundColor: 'white',
    right: '0px',
    border: 'dashed 1px grey'
  },
  body: {
    padding: '0 40px'
  }
});

const mapStateToProps = (state) => {
  return {
    displayDrawer: state.ui.get('isCartDrawerVisible'),
    listProducts: state.products.get('products'),
    isLoggedIn: state.ui.get('isUserLoggedIn'),
  };
};

const mapDispatchToProps = {
  hideCartDrawer,
  fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);