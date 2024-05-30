import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export const NavItem = ({ to, name }) => {
  return(
    <li>
      <Link className={css(styles.link)} to={to}>
        {name}
      </Link>
    </li>
  )
};

const styles = StyleSheet.create({
  link: {
    color: 'gray',
    textDecoration: 'none'
  }
});