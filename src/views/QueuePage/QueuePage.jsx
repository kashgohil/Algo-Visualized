import React, { useState } from 'react';
import './queuepage.scss';

const Details = () => {
	return (
		<span className='details'>
			<ul>
				<li>First In First Out - FIFO</li>
				<li>Enqueue and Dequeue operations</li>
				<li>Enqueue operation - Appends element on the queue</li>
				<li>Dequeue operation - removes the oldest element from the queue</li>
				<li>
					Vectors are dynamic arrays where elements can be appended and deleted,
					It will change the size of the array
				</li>
				<li>
					Time Complexity
					<ul>
                        <li>Enqueue: O(1)</li>
                        <li>Dequeue: O(1)</li>
						<li>Peek: O(1)</li>
						<li>Search: O(n)</li>
						<li>Update: O(n)</li>
					</ul>
				</li>
				<li>Space Complexity: O(n)</li>
			</ul>
		</span>
	);
};

const QueuePage = () => {
	document.title = 'DS-Algo | queue';

	const [queue, setQueue] = useState([70, 74, 23, 64, 23]);
	const [addValue, setAddValue] = useState('');
	const [select, setSelect] = useState(null);
	const [toggle, setToggle] = useState(false);

	const Queue = () => {
		return queue.length > 0 ? (
			<span className='queue'>
				{queue.map((item, index) => (
					<span
						key={index}
						className={`box ${select === index && 'select'}`}
						onClick={() => setSelect(index)}
					>
						{item}
					</span>
				))}
			</span>
		) : (
			<span className='no-element'>Add elements</span>
		);
	};

	const handleAppend = () => {
		setQueue([...queue, addValue]);
		setAddValue('');
	};

	const handleRemove = () => {
		const tmp = queue.filter((item, index) => index !== select);
		setQueue(tmp);
		setSelect(null);
	};

	const handleAddValue = (e) => {
		setAddValue(e.target.value);
	};

	return (
		<section className='page-container'>
			<section className='page-footer'>
				{toggle ? (
					<>
						<input
							className='target-input'
							placeholder='Value'
							value={addValue}
							onChange={handleAddValue}
						/>
						<button
							className={`button ${
								(addValue === '' || queue.length === 10) && 'not-allowed'
							}`}
							onClick={handleAppend}
							disabled={addValue === '' || queue.length === 10}
						>
							{queue.length > 0 ? 'Append' : 'Add'}
						</button>
						<button
							className={`button ${select === null && 'not-allowed'}`}
							disabled={select === null}
							onClick={handleRemove}
						>
							Remove
						</button>
					</>
				) : (
					<span className='title padding-10'>Queue</span>
				)}
				<button
					className='button reset right-aligned'
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? 'Details' : 'Demo'}
				</button>
			</section>
			<section className='queue-container'>
				{toggle ? <Queue /> : <Details />}
			</section>
		</section>
	);
};

export default QueuePage;
