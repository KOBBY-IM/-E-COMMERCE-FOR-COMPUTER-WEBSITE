import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Products from '../ProductsList/Products';
import Login from '../Login/Login';
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
  }


  render() {
    return (
      <div className={css(styles.app)}>
        <Header />
        <Routes>
          <Route path='/' 
          element={
          <div className={css(styles.cardList)}>
            <div className={css(styles.card)}>
             <Products listProducts={this.listProducts}/>
            </div>
          </div>
          }/>
          <Route exact path='/profil' element={<Login />}/>
        </Routes>
        {/* <Login />
        <div className={css(styles.cardList)}>
          <div className={css(styles.card)}>
            <Products listProducts={this.listProducts}/>
          </div>
        </div> */}
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
