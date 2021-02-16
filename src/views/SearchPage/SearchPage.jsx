import React, { useState, useEffect } from "react";
import { searchingAlgorithms } from "algorithms/searchAlgorithms";
import { NextIcon } from "icons";
import { primaryColor, sourceColor, destinationColor } from "constants/styleConstants";
import { message } from "components/message";
import "./searchpage.scss";

const searchAlgorithms = ["Linear", "Binanry"];

const SearchPage = () => {
	document.title = "DS-Algo | Searching";

	const [algo, setAlgo] = useState("");
	const [play, setPlay] = useState(false);
	const [next, setNext] = useState(false);
	const [process, setProcess] = useState(false);
	const [randomArray, setRandomArray] = useState([]);
	const [range, setRange] = useState(50);
	const [steps, setSteps] = useState([]);
	const [current, setCurrent] = useState(0);
	const [target, setTarget] = useState(null);
	const [selected, setSelected] = useState({ first: null, second: null, index: null, start: null, end: null });

	let ans = [];

	useEffect(() => {
		randomArrayGenerator();
	}, [range]);

	useEffect(() => {
		console.log(selected);
		if ((current < steps.length && play && process) || (current < steps.length - 1 && next))
			handleOperations(steps[current]);
	}, [play, process, next, current, steps]);

	const handleReset = () => {
		setTarget(null);
		setSelected({ first: null, second: null, index: null, start: null, end: null });
		setProcess(false);
		setPlay(false);
		setCurrent(0);
		setSteps([]);
		setAlgo("");
		document.querySelector(".target-input").value = null;
	};

	const randomArrayGenerator = () => {
		const arr = [...Array(range)].map(() => Math.floor(Math.random() * 99) + 1);
		setRandomArray(arr);
		handleReset();
	};

	const handleSearch = ({ target: { id } }) => {
		Promise.resolve()
			.then(() => {
				setAlgo(searchAlgorithms[id]);
			})
			.then(() => {
				ans = searchingAlgorithms[id](randomArray, Number(target));
				ans.push({
					action: "end",
					start: ans[ans.length - 1].start,
					end: ans[ans.length - 1].end,
					index: ans[ans.length - 1].index,
				});
				setSteps(ans);
			})
			.then(() => setProcess(true));
	};

	const handleOperations = async (ans) => {
		Promise.resolve()
			.then(() => {
				setSelected(ans);
				if (ans.action === "swap") {
					[randomArray[ans.first], randomArray[ans.second]] = [
						randomArray[ans.second],
						randomArray[ans.first],
					];
				} else if (ans.action === "replace") {
					randomArray[ans.first] = ans.replace;
				} else if (ans.action === "sorted") {
					message("success", "Array Sorted!");
					setSelected({ ...selected, first: null, second: null });
				} else if (ans.action === "found") {
					message("success", "Target is found!");
				} else if (ans.action === "not-found") {
					message("error", "target is not found!");
				} else if (ans.action === "end") {
					setPlay(false);
					setProcess(false);
					setCurrent(-1);
				}
				if (next) setNext(false);
			})
			.then(() => setCurrent((current) => current + 1));
	};

	const togglePlay = () => {
		setPlay(!play);
	};

	return (
		<section className="page-container">
			<section className="page-footer">
				<button
					disabled={process}
					className={`button reset ${process && "not-allowed"}`}
					onClick={randomArrayGenerator}>
					Reset
				</button>
				<input
					disabled={process}
					value={target}
					onChange={(e) => setTarget(e.target.value)}
					className={`target-input ${process && "not-allowed"}`}
					placeholder="target"
				/>
				{searchAlgorithms.map((item, index) => (
					<span style={{ position: "relative" }}>
						<button
							disabled={process || target === null}
							id={index}
							className={`button ${item === algo ? "reset" : ""} ${
								process || target === null ? "not-allowed" : ""
							}`}
							onClick={handleSearch}>
							{item} Search
						</button>
						{algo === item && (
							<span className="below-position">
								<button
									className={`play-pause-button ${play ? "paused" : "play"}`}
									onClick={togglePlay}></button>
								<NextIcon
									color={primaryColor}
									width="20px"
									height="20px"
									onClick={() => setNext(true)}
								/>
							</span>
						)}
					</span>
				))}
				<input
					disabled={process}
					type="range"
					value={range}
					min={10}
					max={100}
					onChange={(e) => setRange(Number(e.target.value))}
				/>
			</section>
			<section className="search-bar">
				{randomArray.map((item, index) => (
					<span className="bar-container">
						{item}
						<span
							className="bar"
							style={{
								height: `${item}%`,
								background:
									selected.index && selected.index === index
										? "green"
										: (selected.start && selected.start >= index) ||
										  (selected.end && selected.end <= index)
										? "#00000055"
										: selected.first === index
										? sourceColor
										: selected.second === index
										? destinationColor
										: primaryColor,
							}}></span>
					</span>
				))}
			</section>
		</section>
	);
};

export default SearchPage;
