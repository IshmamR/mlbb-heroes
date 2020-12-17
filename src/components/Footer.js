import React, { useEffect } from 'react';
import '../styles/Footer.css';

const Footer = (props) => {
	// console.log(props);
	useEffect(() => {
		// console.log('');
	}, [])
	return (
		<div className="Footer">
			&copy; Created by <a href="https://ishmamz.herokuapp.com" target="_blank" rel="noreferrer">Ishmam</a>
		</div>
	)
}

export default Footer;