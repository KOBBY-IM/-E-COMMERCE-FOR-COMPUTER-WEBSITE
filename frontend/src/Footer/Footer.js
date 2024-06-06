import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NavItem from '../Header/NavItem';
import { SvgFacebook, SvgInstagram, SvgTwitter, } from '../SVG/svg';

const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<div className={css(styles.footer)}>
			<div className={css(styles.sameLine)}>
				<ul className={css(styles.footerNav)}>
					<NavItem to='/' children='Term of use'/>
					<NavItem to='/' children='Privacy Policy'/>
					<NavItem to='/' children='Cookie Policy'/>
				</ul>
			</div>
			<div className={css(styles.sameLine)}>
			<ul className={css(styles.socialNav)}>
              <li className={css(styles.liInline)}>
                <a href="https://www.facebook.com/" target="_blank">
                  <SvgFacebook />
                </a>
              </li>
              <li className={css(styles.liInline)}>
                <a href="https://twitter.com/" target="_blank">
                  <SvgTwitter />
                </a>
              </li>
              <li className={css(styles.liInline)}>
                <a href="https://www.instagram.com/" target="_blank">
                  <SvgInstagram />
                </a>
              </li>
            </ul>
			</div>
			<div>
				<p> Copyright {date}  - All Rights Reserved</p>
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
		margin: '0 5px',
		display: 'block'
	},
	footerNav: {
    display: 'flex',
    flexDirection: 'row',
		justifyContent: 'flex-start',
    listStyleType: 'none',
    paddingLeft: '0px',
		fontStyle: 'normal',
		fontSize: '1rem',
		paddingLeft: '20px',
		gap: '20px'
  },
	socialNav: {
		listStyle: 'none',
		// display: 'flex',
    // flexDirection: 'row',
		// justifyContent: 'flex-end',
		display: 'inline',
		width: '100%',
		gap: '10px'
	},
	sameLine: {
		display: 'inline-block',
		width: '50%',
		height: '30px'
	},
	liInline: {
		// display: 'inline',
		float: 'right',
		padding: '0 1em'
	}
})

export default Footer;