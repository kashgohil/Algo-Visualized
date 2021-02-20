import React from 'react';
import { LinkedInIcon, GithubIcon } from 'icons';
import { secondaryColor } from 'constants/styleConstants';
import './footer.scss';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<span className='footer-name'>Developed By Kashyap Gohil</span>
			<span className='social-links'>
				<a href='https://www.linkedin.com/in/kashyap-gohil-5190a7128/' target='__blank'>
					<LinkedInIcon height='30' width='30' color={secondaryColor} />
				</a>
				<a href='https://github.com/kashgohil' target='__blank'>
					<GithubIcon height='30' width='30' color={secondaryColor} />
				</a>
			</span>
		</footer>
	);
};

export default Footer;
