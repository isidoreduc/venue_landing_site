import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bck_red">
			<Fade delay={500}>
				<div className="font_righteous footer_logo_venue">a+venue</div>
				<div className="footer_copyright">
					&copy; {year}. All rights reserved
				</div>
			</Fade>
		</footer>
	);
};

export default Footer;
