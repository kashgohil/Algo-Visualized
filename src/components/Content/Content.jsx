import React from 'react';
import ParticlesBg from 'particles-bg';

const Content = ({ children }) => {
	return (
		<section style={{ minHeight: 'calc(100vh - 200px)', padding:'20px',boxSizing:'border-box', marginTop: '80px' }}>
			{children}
			<ParticlesBg
				type='cobweb'
				num={window.innerWidth / 10}
				background
				color='#4f30b3'
				bg={true}
			/>
		</section>
	);
};

export default Content;
