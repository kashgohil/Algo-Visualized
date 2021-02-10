import React from 'react';
import { Link } from 'react-router-dom';
import SortPage from 'views/SortingPage/SortPage';
import GraphPage from 'views/GraphPage/GraphPage';
import './algopage.scss';

const algorithms = ['Sorting', 'Binary Search', 'Graph', 'DP', 'Greedy'];

const AlgoPage = (props) => {
	switch (props.match.params.type) {
		case 'Sorting':
			return <SortPage />;
		case 'Graph':
			return <GraphPage />;
		default:
			return (
				<section className='algopage'>
					{algorithms.map((algo, index) => (
						<Link
							key={index}
							style={{ textDecoration: 'none' }}
							to={`/algo/${algo}`}
						>
							<span className='card'>{algo}</span>
						</Link>
					))}
				</section>
			);
	}
};

export default AlgoPage;
