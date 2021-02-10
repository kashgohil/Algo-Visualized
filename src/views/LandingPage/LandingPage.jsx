import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.scss';

const LandingPage = () => {
	return (
		<section className='content-container'>
			<span className='intro flex-center'>
				<span className='title'>DS-Algo</span>
				<span className='subtitle'>Learning and visualizing it for fun...</span>
				<Link style={{ textDecoration: 'none' }} to='/menu'>
					<button className='button'>Go to menu</button>
				</Link>
			</span>
		</section>
	);
};

export default LandingPage;
