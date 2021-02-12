import React, { useState, useEffect } from 'react';
import './header.scss';

const Header = () => {
	const [screenWidth, setScreenWidth] = useState(1200);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		window.addEventListener('resize', () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	console.clear();
	console.log(screenWidth);

	return (
		<React.Fragment>
			<header className='header-container'>
				<span className='title'>DS-Algo {screenWidth}</span>
			</header>
			{screenWidth < 1010 && (
				<span style={{ background: 'red', width: '100%', padding: '10px' }}>
					This app will provide best experince in resolutions over 1000.
				</span>
			)}
		</React.Fragment>
	);
};

export default Header;
