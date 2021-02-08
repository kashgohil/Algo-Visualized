import React, { useState, useEffect } from "react";
import { sortingAlgorithms } from "algorithms/SortingAlgorithms";
import {
	primaryColor,
	sourceColor,
	destinationColor,
} from "constants/styleConstants";
import "./sortpage.scss";

const sortingAlgos = [
	"Selection",
	"Insertion",
	"Bubble",
	"Merge",
	"Quick",
	"Heap",
];

const SortPage = () => {
	document.title = "DS-Algo | Sorting";

	const [randomArray, setRandomArray] = useState([]);
	const [selected, setSelected] = useState({ first: null, second: null });
	const [process, setProcess] = useState(false);
	const [current, setCurrent] = useState(0);
	const [steps, setSteps] = useState([]);
	const [play, setPlay] = useState(false);
	const [next, setNext] = useState(false);

	let ans = [];

	const handleSorting = ({ target: { id } }) => {
		Promise.resolve()
			.then(() => {
				ans = sortingAlgorithms[id](randomArray);
				ans.push({ action: "end" });
				setSteps(ans);
			})
			.then(() => {
				setProcess(true);
				setPlay(true);
			})
			.then(() => {
				setCurrent(0);
			});
	};

	useEffect(() => {
		if (
			(current < steps.length && play && process) ||
			(current < steps.length - 1 && next)
		)
			handleOperations(steps[current]);
	}, [steps, current, play, process, next]);

	const randomArrayGenerator = () => {
		const array = [...Array(100)].map(() => Math.random() * 100 + 1);
		setRandomArray(array);
	};

	useEffect(() => {
		randomArrayGenerator();
	}, []);

	const handleOperations = async (ans) => {
		Promise.resolve()
			.then(() => {
				if (ans.action === "comp")
					setSelected({ first: ans.first, second: ans.second });
				if (ans.action === "swap") {
					setSelected({ first: ans.first, second: ans.second });
					[randomArray[ans.first], randomArray[ans.second]] = [
						randomArray[ans.second],
						randomArray[ans.first],
					];
				} else if (ans.action === "replace") {
					setSelected({ first: ans.first, second: ans.second });
					randomArray[ans.first] = ans.replace;
				} else if (ans.action === "end") {
					setSelected({ first: null, second: null });
					setProcess(false);
					setPlay(false);
					setSteps([]);
					ans = [];
				}
				if (next) setNext(false);
			})
			.then(() => setCurrent((current) => current + 1));
	};

	const togglePlay = () => {
		setPlay(!play);
	};

	return (
		<section className="sorting-page-container flex-center">
			<span className="sorting-footer">
				<button
					disabled={process}
					className={`button reset ${process ? "not-allowed" : ""}`}
					onClick={randomArrayGenerator}
				>
					Reset
				</button>
				{sortingAlgos.map((sort, index) => (
					<button
						disabled={process}
						name={sort}
						id={index}
						className={`button ${process ? "not-allowed" : ""}`}
						onClick={handleSorting}
					>
						{sort} sort
					</button>
				))}
				<button className="button reset" onClick={togglePlay}>
					{play ? "Pause" : "Play"}
				</button>
				<button className="button reset" onClick={() => setNext(true)}>
					Next
				</button>
			</span>
			<span className="sorting-bar flex-center">
				{randomArray.map((bar, ind) => {
					return (
						<div
							className="bar"
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
				})}
			</span>
		</section>
	);
};

export default SortPage;
