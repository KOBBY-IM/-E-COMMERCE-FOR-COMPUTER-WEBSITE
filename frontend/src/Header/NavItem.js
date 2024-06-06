import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NavItem extends React.Component {
  render() {
    const { to, children } = this.props;
    return(
      <li>
        <Link className={css(styles.link)} to={to}>
          {children}
        </Link>
      </li>
    );
  }
}

NavItem.proptypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
};

NavItem.defaultProps = {
  to: '/',
  children: <></>,
};

const styles = StyleSheet.create({
  link: {
    color: 'gray',
    textDecoration: 'none',
    fill: 'white',
    stroke: 'white',
  }
});

export default NavItem;