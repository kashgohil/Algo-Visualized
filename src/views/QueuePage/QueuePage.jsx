import React, { useState } from 'react';
import { message } from 'components/message';
import './queuepage.scss';

const Details = () => {
	return (
		<span className='details'>
			<ul>
				<li>First In First Out - FIFO</li>
				<li>Enqueue and Dequeue operations</li>
				<li>Enqueue operation - Appends element on the queue</li>
				<li>Dequeue operation - removes the oldest element from the queue</li>
				<li>Used in Breadth First Search, Buffers, Sliding Window Problems</li>
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
	document.title = 'DS-Algo | Queue';

	const [queue, setQueue] = useState([70, 74, 23, 64, 23]);
	const [addValue, setAddValue] = useState('');
	const [toggle, setToggle] = useState(false);

	const Queue = () => {
		return queue.length > 0 ? (
			<span className='queue'>
				{queue.map((item, index) => (
					<span key={index} className='box'>
						{item}
					</span>
				))}
			</span>
		) : (
			<span className='no-element'>Enqueue elements</span>
		);
	};

	const handleEnqueue = () => {
		setQueue([...queue, addValue]);
		setAddValue('');
		message('success', `Enqueued ${addValue} to the Queue.`);
	};

	const handleDequeue = () => {
		const tmp = queue.slice();
		const a = tmp.shift();
		setQueue(tmp);
		message('success', `Dequeued ${a} from the Queue.`);
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
							onClick={handleEnqueue}
							disabled={addValue === '' || queue.length === 10}
						>
							Enqueue
						</button>
						<button
							className={`button ${queue.length === 0 && 'not-allowed'}`}
							disabled={queue.length === 0}
							onClick={handleDequeue}
						>
							Dequeue
						</button>
					</>
				) : (
					<span className='title'>Queue</span>
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
