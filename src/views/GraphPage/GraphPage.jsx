import React, { useState, useEffect } from 'react';
import { generateMaze } from 'algorithms';
import { graphAlgorithms } from 'algorithms/GraphAlgorithms';
import { NextIcon } from 'icons';
import { primaryColor } from 'constants/styleConstants';
import './graphpage.scss';

const initialPoints = {
	source: {
		x: null,
		y: null,
		setting: false,
	},
	target: {
		x: null,
		y: null,
		setting: false,
	},
};

const graphAlgos = ['BFS', 'DFS'];

const Details = () => {
	return (<section className='details'>
		<ul>
			<li>
				<span className='list-title'>Breadth First Search</span>
				<ul>
					<li>Queue based graph traversal algorithm</li>
					<li>Travel all the neighbouring nodes</li>
					<li>Approach
						<ul>
							<li>Start from the source node, mark it as visited</li>
							<li>Dequeue the current node</li>
							<li>if current element is the target, return</li>
							<li>Enqueue all the neighbouring nodes into the queue</li>
							<li>Repeat the process untill the queue is empty</li>
						</ul>
					</li>
					<li>Used to find shortest path in undirected unweighted graph</li>
					<li>Time Compleity O(V+E)</li>
				</ul>
			</li>
			<span className='divider'></span>
			<li>
				<span className='list-title'>Depth First Search</span>
				<ul>
					<li>Stack based graph traversal algorithm</li>
					<li>Travel through all the possible paths from one neighbour, then move onto the others</li>
					<li>Approach
						<ul>
							<li>Start from the source node, mark it as visited</li>
							<li>Pop the current node</li>
							<li>if current element is the target, return</li>
							<li>Push all the neighbouring nodes into the stack</li>
							<li>Repeat the process untill the stack is empty</li>
						</ul>
					</li>
					<li>Used to find connected components</li>
					<li>Time Compleity O(V+E)</li>
				</ul>
			</li>
			<span className='divider'></span>
		</ul>
	</section>);
};

const GraphPage = () => {
	document.title = 'DS-Algo | Graph';

	const [grid, setGrid] = useState([]);
	const [selected, setSelected] = useState({ x: null, y: null });
	const [points, setPoints] = useState(initialPoints);
	const [graphAlgo, setGraphAlgo] = useState('');
	const [current, setCurrent] = useState(0);
	const [steps, setSteps] = useState([]);
	const [process, setProcess] = useState(false);
	const [play, setPlay] = useState(false);
	const [next, setNext] = useState(false);
	const [toggle, setToggle] = useState(false);

	const resetDetails = () => {
		setSelected({ x: null, y: null });
		setProcess(false);
		setPlay(false);
		setCurrent(0);
		setSteps([]);
		setGraphAlgo('');
	};

	const generateRandomMaze = () => {
		const dp = generateMaze();
		setGrid(dp);
		setPoints(initialPoints);
		resetDetails();
	};

	let ans = [];

	const handleAlgo = ({ target: { id } }) => {
		Promise.resolve()
			.then(() => setGraphAlgo(graphAlgos[id]))
			.then(() => {
				ans = graphAlgorithms[id](grid, points.source);
				setSteps(ans);
				console.log(ans);
			})
			.then(() => setProcess(true));
	};

	useEffect(() => {
		if (
			(current < steps.length && play && process) ||
			(current < steps.length - 1 && next)
		)
			handleOperations(steps[current]);
	}, [steps, current, play, process, next]);

	const handleOperations = async (ans) => {
		Promise.resolve()
			.then(() => {
				setSelected({ x: ans.x, y: ans.y });
				if (ans.action === 'visited') {
					grid[ans.x][ans.y] = grid[ans.x][ans.y] === 's' ? 's' : 'v';
				} else if (ans.action === 'path') {
					grid[ans.x][ans.y] = 's';
				} else if (ans.action === 'target') {
					console.log('Path is found!');
				} else if (ans.action === 'no-path') {
					console.log('There is no path!');
				} else if (ans.action === 'end') {
					resetDetails();
					setCurrent(-1);
				}
				if (next) setNext(false);
			})
			.then(() => setCurrent((current) => current + 1));
	};

	const togglePlay = () => {
		setPlay(!play);
	};

	const toggleSource = () => {
		setPoints({ ...points, source: { ...points.source, setting: true } });
	};

	const toggleTarget = () => {
		setPoints({ ...points, target: { ...points.target, setting: true } });
	};

	const handlePointSetter = (x, y) => {
		if (points.source.setting) {
			if (grid[x][y] === 'w') return;
			if (points.source.x !== null && points.source.y !== null)
				grid[points.source.x][points.source.y] = 'p';
			grid[x][y] = 's';
			setPoints({
				...points,
				source: {
					x,
					y,
					setting: false,
				},
			});
		} else if (points.target.setting) {
			if (grid[x][y] === 'w') return;
			if (points.target.x !== null && points.target.y !== null)
				grid[points.target.x][points.target.y] = 'p';
			setPoints({
				...points,
				target: {
					x,
					y,
					setting: false,
				},
			});
			grid[x][y] = 't';
		}
	};

	useEffect(() => {
		generateRandomMaze();
	}, []);

	const Graph = () => {
		return grid.map((box, x) =>
			box.map((item, y) => (
				<span
					className={`grid-item ${
						selected.x === x && selected.y === y
							? 'selected'
							: item === 'w'
							? 'reset'
							: item === 's'
							? 'source'
							: item === 't'
							? 'target'
							: item === 'v'
							? 'visited'
							: ''
					}`}
					onClick={() => handlePointSetter(x, y)}
				></span>
			))
		);
	};

	return (
		<section className='page-container'>
			<section className='page-footer'>
				{toggle ? (
					<>
						<button
							disabled={process}
							className={`button reset ${process ? 'not-allowed' : ''}`}
							onClick={generateRandomMaze}
						>
							Reset
						</button>
						<button
							disabled={process}
							className={`button ${process ? 'not-allowed' : ''} ${
								points.source.x !== null || points.source.setting ? 'reset' : ''
							}`}
							onClick={toggleSource}
						>
							Source
						</button>
						<button
							disabled={process}
							className={`button ${process ? 'not-allowed' : ''} ${
								points.target.x !== null || points.target.setting ? 'reset' : ''
							}`}
							onClick={toggleTarget}
						>
							Target
						</button>
						{graphAlgos.map((algo, index) => (
							<span style={{ position: 'relative' }}>
								<button
									disabled={
										process ||
										points.source.x === null ||
										points.target.x === null
									}
									name={algo}
									id={index}
									className={`button ${graphAlgo === algo ? 'reset' : ''} ${
										process ||
										points.source.x === null ||
										points.target.x === null
											? 'not-allowed'
											: ''
									}`}
									onClick={handleAlgo}
								>
									{algo}
								</button>
								{graphAlgo === algo && (
									<span className='below-position'>
										<button
											className={`play-pause-button ${
												play ? 'paused' : 'play'
											}`}
											onClick={togglePlay}
										></button>
										<NextIcon
											color={primaryColor}
											width='20px'
											height='20px'
											onClick={() => setNext(true)}
										/>
									</span>
								)}
							</span>
						))}
					</>
				) : (
					<span className='title'>Graph Traversal</span>
				)}
				<button
					className='button reset right-aligned'
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? 'Details' : 'Demo'}
				</button>
			</section>
			<section className={`${toggle ? 'grid-container' : 'details-container'}`}>
				{toggle ? <Graph /> : <Details />}
			</section>
		</section>
	);
};

export default GraphPage;
