import React, { useState, useEffect } from 'react';
import { sortingAlgorithms } from 'algorithms/SortingAlgorithms';
import {
	primaryColor,
	sourceColor,
	destinationColor,
} from 'constants/styleConstants';
import { NextIcon } from 'icons';
import { message } from 'components/message';
import './sortpage.scss';

const sortingAlgos = [
	'Selection',
	'Insertion',
	'Bubble',
	'Merge',
	'Quick',
	'Heap',
];

const Details = () => {
	return (
		<section className='details'>
			<ul>
				<li>
					<span className='list-title'>Selection Sort</span>
					<ul>
						<li>
							Divides the array in two parts
							<ul>
								<li>Sorted subarray</li>
								<li>Unsorted subarray</li>
							</ul>
						</li>
						<li>
							Finds minimum element from the unsorted array in each interation
						</li>
						<li>Puts it at the end of the sorted array</li>

						<li>
							Time Complexity O(n<sup>2</sup>)
						</li>
						<li>Space Complexity O(1)</li>
					</ul>
				</li>
				<span className='divider'></span>
				<li>
					<span className='list-title'>Insertion Sort</span>
					<ul>
						<li>Similar to the way we sort playing cards</li>
						<li>
							Divides the array in two parts
							<ul>
								<li>Sorted subarray</li>
								<li>Unsorted subarray</li>
							</ul>
						</li>
						<li>Pick an element from the unsorted subarray</li>
						<li>
							Place the element into the right place in the sorted subarray
						</li>
						<li>
							Time Complexity O(n<sup>2</sup>)
						</li>
						<li>Space Complexity O(1)</li>
					</ul>
				</li>
				<span className='divider'></span>
				<li>
					<span className='list-title'>Bubble Sort</span>
					<ul>
						<li>
							Repeatedly swapping adjacent elements if they are in wrong order
						</li>
						<li>
							At the end of each iteration, the maximum element from the
							unsorted array is found
						</li>
						<li>It is placed as the first element of the sorted array</li>
						<li>
							Time Complexity O(n<sup>2</sup>)
						</li>
						<li>Space Complexity O(1)</li>
					</ul>
				</li>
				<span className='divider'></span>
				<li>
					<span className='list-title'>Merge Sort</span>
					<ul>
						<li>Divide and Conquer approach</li>
						<li>
							Dividing the array into 2 parts, up untill all elements are
							individual node in the recursion tree
						</li>
						<li>
							Merge the children nodes of a parent node in ascending order
						</li>
						<li>Backtrack your way to the root node</li>
						<li>Time Complexity O(nlogn)</li>
						<li>Space Complexity O(n)</li>
					</ul>
				</li>
				<span className='divider'></span>
				<li>
					<span className='list-title'>Quick Sort</span>
					<ul>
						<li>Divide and Conquer approach</li>
						<li>
							Pick a pivot element and divide array into 2 parts from the pivot
						</li>
						<li>
							In the partition, place all the elements smaller than pivot on
							left of pivot
						</li>
						<li>
							In the partition, place all the elements greater than pivot on
							right of pivot
						</li>
						<li>Put pivot in it's correct position in sorted array</li>
						<li>
							Time Complexity
							<ul>
								<li>Expected O(nlogn)</li>
								<li>
									Worst Case O(n<sup>2</sup>)
								</li>
							</ul>
						</li>
						<li>Space Complexity O(1)</li>
					</ul>
				</li>
				<span className='divider'></span>
				<li>
					<span clasName='list-title'>Heap Sort</span>
					<ul>
						<li>Based on Binary Heap Data Strcutre</li>
						<li>Max heap or Min heap are used</li>
						<li>Build a max heap</li>
						<li>
							Max element is on the root, so replace the root with the last
							value of the heap
						</li>
						<li>
							Place the max element acquired from the root at the end of the
							array
						</li>
						<li>Reduce the size of heap by one</li>
						<li>
							Bubble down the root to it's correct place in the heap (Heapify
							the current heap)
						</li>
						<li>Repeat this process untill array is sorted</li>
						<li>Time Complexity O(nlogn)</li>
						<li>
							bulding heap takes O(n) (This has to be done only once) time while
							heapify (bubbling down an element) takes O(logn) time
						</li>
						<li>Therefore time complexity of O(nlogn) </li>
						<li>Spacae Complexity O(1)</li>
					</ul>
				</li>
				<span className='divider'></span>
			</ul>
		</section>
	);
};

const SortPage = () => {
	document.title = 'DS-Algo | Sorting';

	const [randomArray, setRandomArray] = useState([]);
	const [selected, setSelected] = useState({ first: null, second: null });
	const [process, setProcess] = useState(false);
	const [current, setCurrent] = useState(0);
	const [steps, setSteps] = useState([]);
	const [play, setPlay] = useState(false);
	const [next, setNext] = useState(false);
	const [sortAlgo, setSortAlgo] = useState(null);
	const [range, setRange] = useState(50);
	const [toggle, setToggle] = useState(false);

	let ans = [];

	const handleSorting = ({ target: { id } }) => {
		Promise.resolve()
			.then(() => setSortAlgo(sortingAlgos[id]))
			.then(() => {
				ans = sortingAlgorithms[id](randomArray);
				ans.push({ action: 'end' });
				setSteps(ans);
			})
			.then(() => {
				setProcess(true);
			});
	};

	useEffect(() => {
		if (
			(current < steps.length && play && process) ||
			(current < steps.length - 1 && next)
		)
			handleOperations(steps[current]);
	}, [steps, current, play, process, next]);

	useEffect(() => {
		randomArrayGenerator();
	}, [range]);

	const randomArrayGenerator = () => {
		const array = [...Array(range)].map(() => Math.random() * 100 + 1);
		setRandomArray(array);
	};

	const handleOperations = async (ans) => {
		Promise.resolve()
			.then(() => {
				if (ans.action === 'comp')
					setSelected({ first: ans.first, second: ans.second });
				if (ans.action === 'swap') {
					setSelected({ first: ans.first, second: ans.second });
					[randomArray[ans.first], randomArray[ans.second]] = [
						randomArray[ans.second],
						randomArray[ans.first],
					];
				} else if (ans.action === 'replace') {
					setSelected({ first: ans.first, second: ans.second });
					randomArray[ans.first] = ans.replace;
				} else if (ans.action === 'end') {
					setSelected({ first: null, second: null });
					setProcess(false);
					setPlay(false);
					setSteps([]);
					setSortAlgo('');
					setCurrent(-1);
					ans = [];
					message('success', 'Array Sorted!');
				}
				if (next) setNext(false);
			})
			.then(() => setCurrent((current) => current + 1));
	};

	const togglePlay = () => {
		setPlay(!play);
	};

	const Sort = () => {
		return randomArray.map((bar, ind) => {
			return (
				<div
					className='bar'
					key={ind}
					id={ind}
					style={{
						height: `${bar}%`,
						backgroundColor:
							ind === selected.first
								? sourceColor
								: ind === selected.second
								? destinationColor
								: primaryColor,
					}}
				></div>
			);
		});
	};

	return (
		<section className='page-container'>
			<span className='page-footer'>
				{toggle ? (
					<>
						<button
							disabled={process}
							className={`button reset ${process ? 'not-allowed' : ''}`}
							onClick={randomArrayGenerator}
						>
							Reset
						</button>
						{sortingAlgos.map((sort, index) => (
							<span style={{ position: 'relative' }}>
								<button
									disabled={process}
									name={sort}
									id={index}
									className={`button ${sortAlgo === sort ? 'reset' : ''} ${
										process ? 'not-allowed' : ''
									}`}
									onClick={handleSorting}
								>
									{sort} sort
								</button>
								{sortAlgo === sort && (
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
						<input
							type='range'
							disabled={process}
							value={range}
							min='10'
							max='100'
							className='range-slider'
							onChange={(e) => setRange(Number(e.target.value))}
							style={{ color: primaryColor }}
						/>
					</>
				) : (
					<span className='title'>Sorting</span>
				)}
				<button
					className='button reset right-aligned'
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? 'Details' : 'Demo'}
				</button>
			</span>
			<span className='sorting-bar'>{toggle ? <Sort /> : <Details />}</span>
		</section>
	);
};

export default SortPage;
