import React from 'react';
import Proptypes from 'prop-types';
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
          <a href="#">
            <img className={css(styles.logo)} src={logo} alt='Logo' />
          </a>
        </div>
        <div>
          <nav>
            <ul className={css(styles.navBar)}>
              <NavItem link='#' name='Home'/>
              <NavItem link='#Product' name='Products'/>
              <NavItem link='#Profil' name='Profil'/>
              <NavItem link='#ContactUs' name='Contact Us'/>
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
