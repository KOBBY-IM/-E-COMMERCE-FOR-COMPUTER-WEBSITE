import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Products from '../ProductsList/Products';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Profil from '../Profil/Profil';
import Cart from '../Cart/Cart';
import cardImage from '../assets/favicon.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toogleDisplayCart = this.toogleDisplayCart.bind(this)

    this.listProducts = [
      {id: 1, title: 'Asus Rog', img: cardImage, proc: 'core i7', memory: 512, memoryType: 'SSD', ram: 32},
      {id: 2, title: 'Acer', img: cardImage, proc: 'core i7', memory: 1024, memoryType: 'SSD', ram: 8},
      {id: 3, title: 'Hp pavilion', img: cardImage, proc: 'core i7', memory: 100, memoryType: 'SSD', ram: 8},
      {id: 4, title: 'MacBook', img: cardImage, proc: 'core i7', memory: 1000, memoryType: 'SSD', ram: 8},
    ];

    this.state = {
      isLoggedIn: false,
      displayDrawer: false,
    }
  }

  toogleDisplayCart() {
    this.setState({displayDrawer: !this.state.displayDrawer})
  }


  render() {
    return (
      <div className={css(styles.app)}>
        {this.state.displayDrawer &&
        <div className={css(styles.cart)}>
          <Cart />
        </div>}
        <div>
          <Header />
          <Routes>
            <Route path='/' 
            element={
              <div className={css(styles.card)}>
                <Products listProducts={this.listProducts}/>
              </div>
            }
            />
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
          </Routes>
          <button onClick={this.toogleDisplayCart}>Cart me</button>
          <Footer />
        </div>
      </div>
  );
}
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    height: '400vh'
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
  }
});

export default App;
