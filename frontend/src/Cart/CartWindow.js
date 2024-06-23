import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite';
import { hideCartDrawer } from '../actions/uiActionCreator';

class CartWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hideCartDrawer } = this.props
    return (
      <>
        <div className={css(styles.title)}>
          <h2>Cart</h2>
        </div>
        <button
        onClick={() => hideCartDrawer()}
        className={css(styles.button)}
        >
          <Link className={css(styles.link)}to='/cart'>View Cart</Link>
        </button>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    borderBottom: 'solid 2px grey',
    justifyContent: 'center',
    margin: '5px'
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
  link: {
    textDecoration: 'none',
  },
});

const mapStateToProps = (state) => {
  return {
    cart: state.carts.get('product')
  };
};

const mapDispacthToProps = {
  hideCartDrawer,
}

export default connect(null, mapDispacthToProps)(CartWindow);