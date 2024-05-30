import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { NavItem } from './NavItem';
import logo from '../assets/logo-white.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.header)}>
        <div>
          <Link to="/">
            <img className={css(styles.logo)} src={logo} alt='Logo' />
          </Link>
        </div>
        <div>
          <nav>
            <ul className={css(styles.navBar)}>
              <NavItem to='/' name='Home'/>
              <NavItem to='/profil' name='Profil'/>
              <NavItem to='/cart' name='Cart'/>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    textAlign: 'center',
    width: '400px',
    paddingLeft: '0px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black'
  },
  logo: {
    height: '75px'
  }
});

export default Header;
