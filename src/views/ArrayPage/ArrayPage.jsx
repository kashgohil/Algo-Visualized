import React, { useState } from 'react';
import {message} from 'components/message';
import './arraypage.scss';

const Details = () => {
	return (
		<span className='details'>
			<ul>
				<li>Contiguous memory to store data</li>
				<li>0 - based indexing</li>
				<li>Cannot change the size once defined</li>
				<li>Multi dimensional array</li>
				<li>
					Vectors are dynamic arrays where elements can be appended and deleted,
					It will change the size of the array
				</li>
				<li>
					Time Complexity
					<ul>
						<li>Access: O(1)</li>
						<li>Search: O(n)</li>
						<li>Update: O(1)</li>
					</ul>
				</li>
				<li>Space Complexity: O(n)</li>
			</ul>
		</span>
	);
};

const ArrayPage = () => {
	document.title = 'DS-Algo | Array';

	const [array, setArray] = useState([70, 74, 23, 64, 23]);
	const [addValue, setAddValue] = useState('');
	const [select, setSelect] = useState(null);
	const [toggle, setToggle] = useState(false);

	const Array = () => {
		return array.length > 0 ? (
			<span className='array'>
				{array.map((item, index) => (
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
		setArray([...array, addValue]);
		setAddValue('');
		message("success",`Added ${addValue} to the array.`);
	};

	const handleRemove = () => {
		const tmp = array.filter((item, index) => index !== select);
		setArray(tmp);
		setSelect(null);
		message("success",`Removed ${addValue} from the array.`);
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
								(addValue === '' || array.length === 10) && 'not-allowed'
							}`}
							onClick={handleAppend}
							disabled={addValue === '' || array.length === 10}
						>
							{array.length > 0 ? 'Append' : 'Add'}
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
					<span className='title padding-10'>Array</span>
				)}
				<button
					className='button reset right-aligned'
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? 'Details' : 'Demo'}
				</button>
			</section>
			<section className='array-container'>
				{toggle ? <Array /> : <Details />}
			</section>
		</section>
	);
};

export default ArrayPage;
