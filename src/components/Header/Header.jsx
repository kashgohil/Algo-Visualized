import React from 'react';
import {
	selectionSort,
	insertionSort,
	bubbleSort,
	mergeSort,
	quickSort,
	heapSort,
	shellSort,
} from 'algorithms/SortingAlgorithms';
import { bfs, dfs } from 'algorithms/GraphAlgorithms';
import './header.scss';

const Header = ({ sort, graph }) => {
	const handleGraph = (graphAlgo) => {
		const ans = graphAlgo(graph.node);
		graph.handleGraphAlgo(ans);
	};

	return (
		<header className='header-container'>
			<span className='title'>DS-Algo</span>
		</header>
	);
};

export default Header;
