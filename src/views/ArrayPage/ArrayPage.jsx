import React, { useState, useEffect } from "react";
import "./arraypage.scss";

const Details = () => {
    return (
		<span className="details">
			<span className="title">Array Points</span>
			<ul>
				<li>Contiguous place to store data</li>
				<li>0 - based indexing</li>
				<li>
					Time Complexity
					<ul>
						<li>Insertion: O(n)</li>
						<li>Deletion: O(n)</li>
						<li>Searching: O(n)</li>
					</ul>
				</li>
				<li>Space Complexity O(n)</li>
			</ul>
		</span>
	);
}

const ArrayPage = () => {
	document.title = "DS-Algo | Array";

	const [array, setArray] = useState([70, 74, 23, 64, 23]);
	const [addValue, setAddValue] = useState("");
	const [select, setSelect] = useState(null);

	const handleAppend = () => {
		setArray([...array, addValue]);
        setAddValue('');
	};

	const handleRemove = () => {
		const tmp = array.filter((item, index) => index !== select);
		setArray(tmp);
		setSelect(null);
	};

	const handleAddValue = (e) => {
		setAddValue(e.target.value);
	};

	return (
		<section className="page-container">
			<section className="page-footer">
				<input className="target-input" placeholder="Value" value={addValue} onChange={handleAddValue} />
				<button
					className={`button ${(addValue === '' || array.length === 10) && "not-allowed"}`}
					onClick={handleAppend}
					disabled={addValue === '' || array.length === 10}>
					{array.length > 0 ? "Append" : "Add"}
				</button>
				<button className={`button ${select===null && "not-allowed"}`} disabled={select===null} onClick={handleRemove}>
					Remove
				</button>
			</section>
			<section className="array-container">
				{array.length > 0 ? (
					<span className="array">
						{array.map((item, index) => (
							<span
								key={index}
								className={`box ${select === index && "select"}`}
								onClick={() => setSelect(index)}>
								{item}
							</span>
						))}
					</span>
				) : (
					<span className="no-element">Add elements</span>
				)}
			</section>
		</section>
	);
};

export default ArrayPage;
