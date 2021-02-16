import React from 'react';
import { Link } from 'react-router-dom';
import SortPage from 'views/SortingPage/SortPage';
import GraphPage from 'views/GraphPage/GraphPage';
import SearchPage from 'views/SearchPage/SearchPage';

const algorithms = ['Sorting', 'Search', 'Graph Traversal'];

const AlgoPage = (props) => {

	document.title = 'DS-Algo | Algorithms';

	switch (props.match.params.type) {
		case "Sorting":
			return <SortPage />;
		case "Graph Traversal":
			return <GraphPage />;
		case "Search":
			return <SearchPage />;
		default:
			return (
				<section className="ds-algo-page">
					{algorithms.map((algo, index) => (
						<Link
							key={index}
							style={{ textDecoration: "none" }}
							to={`/algorithms/${algo}`}
						>
							<span className="card">{algo}</span>
						</Link>
					))}
				</section>
			);
	}
};

export default AlgoPage;
