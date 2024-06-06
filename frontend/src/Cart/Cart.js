import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.title)}>
        <h2>Cart</h2>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  }
});


export default Cart;