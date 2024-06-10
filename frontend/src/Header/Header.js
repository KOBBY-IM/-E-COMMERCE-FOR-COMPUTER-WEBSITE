import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import NavItem from './NavItem';
import logo from '../assets/logo.png';
import {
  SvgHome,
  SvgCart,
  SvgProfil,
  SvgSearch,
  SvgSales
} from '../SVG/svg';
import { displayCartDrawer } from '../actions/uiActionCreator';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {displayCartDrawer} = this.props;
    return (
      <div className={css(styles.header)}>
        <div>
          <Link to="/">
            <img  className={css(styles.logo)} src={logo} alt='Logo' />
          </Link>
        </div>
        <div>
          <nav>
            <ul className={css(styles.navBar)}>
              {/* <NavItem to='/' children={<SvgSearch />}/> */}
              <NavItem to='/' children={<SvgHome />}/>
              <NavItem to='/login' children={<SvgProfil />} />
              {/* <NavItem to='/' children={<SvgSales />}/> */}
              <NavItem action={displayCartDrawer} to='' children={<SvgCart />}/>
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
    backgroundColor: 'black',
    height: '90px'
  },
  logo: {
    height: '130px',
  },
  svg: {
    fill: 'green',
  }
});

const mapDispacthToProps = {
  displayCartDrawer,
}

export default connect(null, mapDispacthToProps)(Header);
