import React, { useState } from 'react';
import {message} from 'components/message';
import './linkedlistpage.scss';

const Details = () => {
	return (
		<span className='details'>
			<ul>
				<li>Segmented memory to store data</li>
				<li>Singly Linked List</li>
				<ul>
					<li>
						Singly Linked List has one pointer pointing to the next element
					</li>
                    <li>Cannot go to the previous element</li>
					<li>Less storge space required compared to doubly linked list</li>
				</ul>
                <li>Doubly Linked List</li>
				<ul>
					<li>
						Doubly Linked List has two pointers, one pointing to the next
						element, one pointing to the previous element
					</li>
					<li>Can go to the previous element</li>
					<li>More storage space required</li>
				</ul>
				<li>
					Time Complexity
					<ul>
						<li>Insertion: O(n)</li>
						<li>Deletion: O(n)</li>
						<li>Access: O(n)</li>
						<li>Search: O(n)</li>
						<li>Update: O(n)</li>
					</ul>
				</li>
				<li>Space Complexity: O(n)</li>
			</ul>
		</span>
	);
};

const LinkedListPage = () => {
	document.title = 'DS-Algo | Linked List';

	const [linkedList, setLinkedList] = useState([70, 74, 23, 64, 23]);
	const [addValue, setAddValue] = useState('');
	const [select, setSelect] = useState(null);
	const [toggle, setToggle] = useState(false);

	const LinkedList = () => {
		return linkedList.length > 0 ? (
			<span className='linkedList'>
				{linkedList.map((item, index) => (
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
		setLinkedList([...linkedList, addValue]);
		setAddValue('');
		message("success",`Added ${addValue} to the Linked List.`);
	};

	const handleRemove = () => {
		const tmp = linkedList.filter((item, index) => index !== select);
		setLinkedList(tmp);
		setSelect(null);
		message("success",`Removed ${addValue} from the Linked List.`);
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
								(addValue === '' || linkedList.length === 10) && 'not-allowed'
							}`}
							onClick={handleAppend}
							disabled={addValue === '' || linkedList.length === 10}
						>
							{linkedList.length > 0 ? 'Append' : 'Add'}
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
					<span className='title padding-10'>Linked List</span>
				)}
				<button
					className='button reset right-aligned'
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? 'Details' : 'Demo'}
				</button>
			</section>
			<section className='linkedList-container'>
				{toggle ? <LinkedList /> : <Details />}
			</section>
		</section>
	);
};

export default LinkedListPage;
