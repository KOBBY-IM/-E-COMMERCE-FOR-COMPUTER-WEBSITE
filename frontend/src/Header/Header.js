import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NavItem from './NavItem';
import logo from '../assets/logo-white.png';
import {
  SvgHome,
  SvgCart,
  SvgProfil,
  SvgWishlist,
  SvgSearch} from '../SVG/svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {toogleDrawer} = this.props;
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
              {/* <NavItem to='/' children={<SvgSearch />}/> */}
              <NavItem to='/' children={<SvgHome />}/>
              <NavItem to='/login' children={<SvgProfil />} />
              {/* <NavItem to='/' children={<SvgWishlist />}/> */}
              <NavItem to='/cart' children={<SvgCart />}/>
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
    fill: 'green',
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
  },
  svg: {
    fill: 'green',
  }
});

export default Header;
