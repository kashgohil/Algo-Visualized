import React, { useState } from 'react';
import { message } from 'components/message';
import './stackpage.scss';

const Details = () => {
	return (
		<span className='details'>
			<ul>
				<li>First In Last Out - FILO</li>
				<li>Push and pop operations</li>
				<li>Push operation - appends element on the stack</li>
				<li>
					Pop operation - Removes the recetly appended element from the stack
				</li>
				<li>
					Used in Depth First Search, Palindrome checking, Bracket matching etc
				</li>
				<li>
					Time Complexity
					<ul>
						<li>Pop: O(1)</li>
						<li>Push: O(1)</li>
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

const StackPage = () => {
	document.title = 'DS-Algo | Stack';

	const [stack, setStack] = useState([70, 74, 23, 64, 23]);
	const [addValue, setAddValue] = useState('');
	const [toggle, setToggle] = useState(false);

	const Stack = () => {
		return stack.length > 0 ? (
			<span className='stack'>
				{stack.map((item, index) => (
					<span key={index} className='box'>
						{item}
					</span>
				))}
			</span>
		) : (
			<span className='no-element'>Add elements</span>
		);
	};

	const handleAppend = () => {
		setStack([...stack, addValue]);
		setAddValue('');
		message('success', `Pushed ${addValue} in the stack!`);
	};

	const handleRemove = () => {
		const tmp = stack.slice();
		const a = tmp.pop();
		setStack(tmp);
		message('success', `Popped ${a} from the stack`);
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
								(addValue === '' || stack.length === 10) && 'not-allowed'
							}`}
							onClick={handleAppend}
							disabled={addValue === '' || stack.length === 10}
						>
							Push
						</button>
						<button
							className={`button ${stack.length === 0 && 'not-allowed'}`}
							disabled={stack.length === 0}
							onClick={handleRemove}
						>
							Pop
						</button>
					</>
				) : (
					<span className='title padding-10'>Stack</span>
				)}
				<button
					className='button reset right-aligned'
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? 'Details' : 'Demo'}
				</button>
			</section>
			<section className='stack-container'>
				{toggle ? <Stack /> : <Details />}
			</section>
		</section>
	);
};

export default StackPage;
