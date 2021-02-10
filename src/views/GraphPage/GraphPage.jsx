import React, { useState, useEffect } from "react";
import { generateMaze } from "algorithms";
import "./graphpage.scss";

const GraphPage = () => {
	document.title = "DS-Algo | Graph";

	const [grid, setGrid] = useState([]);
	const [selected, setSelected] = useState({ x: null, y: null });
	const [node, setNode] = useState(null);

	const randomGenerator = () => {
		return Math.floor(Math.random() * 100);
	};

	const generateRandomMaze = () => {
		const dp = generateMaze();
		setGrid(dp);
	};

	const setRandomNodes = () => {
		let tmp = {};
		if (node) grid[node.destination.x][node.destination.y] = undefined;
		do {
			tmp = {
				source: {
					x: randomGenerator() % 10,
					y: randomGenerator() % 10,
				},
				destination: {
					x: randomGenerator() % 10,
					y: randomGenerator() % 10,
				},
			};
		} while (
			tmp.source.x === tmp.destination.x &&
			tmp.source.y === tmp.destination.y
		);
		setNode(tmp);
		setGrid([...Array(10)].map(() => [...Array(10)]));
		setSelected({ x: null, y: null });
	};

	const handleGraph = (ans) => {
		console.log("inside the handleGraph function");
		for (let i = 0; i < ans.length; i++) {
			setTimeout(() => {
				setSelected({ x: ans[i].x, y: ans[i].y });
				grid[ans[i].x][ans[i].y] = "v";
			}, 100);
		}
	};

	useEffect(() => {
		generateRandomMaze();
	}, []);

	return (
		<section className="graph-page-container flex-center">
			<section className="grid-footer">
				<button className="button reset" onClick={generateRandomMaze}>reset</button>
			</section>
			<section className="grid-container">
				{grid.map((box) =>
					box.map((item) => (
						<span
							className={`grid-item ${item ? "reset" : ""}`}
						></span>
					))
				)}
			</section>
		</section>
	);
};

export default GraphPage;
