import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export const NavItem = ({ link, name }) => {
  return(
    <li>
      <a className={css(styles.link)} href={link}>{name}</a>
    </li>
  )
};

const styles = StyleSheet.create({
  link: {
    color: 'gray',
    textDecoration: 'none'
  }
});