import React from 'react';
import { Link } from 'react-router-dom';
import SortPage from 'views/SortingPage/SortPage';
import GraphPage from 'views/GraphPage/GraphPage';

const algorithms = ['Sorting', 'Search', 'Graph Traversal', 'DP', 'Greedy'];

const AlgoPage = (props) => {

	document.title = 'DS-Algo | Algorithms';

	switch (props.match.params.type) {
		case 'Sorting':
			return <SortPage />;
		case 'Graph Traversal':
			return <GraphPage />;
		default:
			return (
				<section className='ds-algo-page'>
					{algorithms.map((algo, index) => (
						<Link
							key={index}
							style={{ textDecoration: 'none' }}
							to={`/algorithms/${algo}`}
						>
							<span className='card'>{algo}</span>
						</Link>
					))}
				</section>
			);
	}
};

export default AlgoPage;
