import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { NavItem } from '../Header/NavItem';

const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<div className={css(styles.footer)}>
			<div>
				<p> Copyright {date}  - All Rights Reserved</p>
			</div>
			<div>
				<ul className={css(styles.navBar)}>
					<NavItem link='#' name='Term of use'/>
					<NavItem link='#' name='Privacy Policy'/>
					<NavItem link='#' name='Cookie Policy'/>
				</ul>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	footer: {
		textAlign: 'center',
		fontStyle: 'italic',
		fontSize: '1.1rem',
		borderTop: 'solid 2px grey',
		margin: '0 5px'
	},
	navBar: {
    display: 'flex',
    flexDirection: 'row',
		justifyContent: 'space-evenly',
    listStyleType: 'none',
    textAlign: 'right',
    paddingLeft: '0px',
    marginRight: '50px',
		fontStyle: 'normal',
		fontSize: '1rem',
		paddingLeft: '20px'
  }
})

export default Footer;