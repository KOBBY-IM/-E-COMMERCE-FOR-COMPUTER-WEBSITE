import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Products from '../ProductsList/Products';
import cardImage from '../assets/favicon.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.listProducts = [
      {id: 2, title: 'Asus Rog', img: cardImage, proc: 'core i7', memory: 512, memoryType: 'SSD', ram: 8},
      {id: 4, title: 'Asus Rog', img: cardImage, proc: 'core i7', memory: 1024, memoryType: 'SSD', ram: 8},
      {id: 6, title: 'Asus Rog', img: cardImage, proc: 'core i7', memory: 100, memoryType: 'SSD', ram: 8},
    ];
  }


  render() {
    return (
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.cardList)}>
          <div className={css(styles.card)}>
            <Products listProducts={this.listProducts}/>
          </div>
        </div>
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
