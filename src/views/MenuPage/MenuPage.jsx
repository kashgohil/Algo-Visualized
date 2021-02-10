import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
import './menupage.scss';
const MenuPage = () => {
	return (
		<div className='algo flex-center'>
			<Link style={{ textDecoration: 'none' }} to='/algo'>
				<span className='card'>Algorithms</span>
			</Link>
			<Link style={{ textDecoration: 'none' }} to='/ds'>
				<span className='card'>Data Structures</span>
			</Link>
            <ParticlesBg
				type='cobweb'
				num={window.innerWidth / 10}
				background
				color='#4f30b3'
				bg={true}
			/>
		</div>
	);
};

export default MenuPage;
