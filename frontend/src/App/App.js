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
import cardImage from '../assets/favicon.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.listProducts = [
      {id: 1, title: 'Asus Rog', img: cardImage, proc: 'core i7', memory: 512, memoryType: 'SSD', ram: 32},
      {id: 2, title: 'Acer', img: cardImage, proc: 'core i7', memory: 1024, memoryType: 'SSD', ram: 8},
      {id: 3, title: 'Hp pavilion', img: cardImage, proc: 'core i7', memory: 100, memoryType: 'SSD', ram: 8},
      {id: 4, title: 'MacBook', img: cardImage, proc: 'core i7', memory: 1000, memoryType: 'SSD', ram: 8},
    ];

    this.state = {
      isLoggedIn: false,
    }
  }


  render() {
    return (
      <div className={css(styles.app)}>
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
        <Footer />
      </div>
  );
}
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    padding: '20px 40px'
  },
});

export default App;
