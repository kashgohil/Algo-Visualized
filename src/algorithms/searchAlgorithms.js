import { sortingAlgorithms } from "./SortingAlgorithms";

const linearSearch = (searchArray, target) => {
	const n = searchArray.length;
	let ans = [];
	const start = 0;
	const end = n - 1;

	for (let i = 0; i < n; i++) {
		ans.push({ index: i, action: "searching", start: i, end });
		if (searchArray[i] === target) {
			ans.push({ index: i, action: "found", start, end });
			return ans;
		}
	}

	ans.push({ action: "not-found" });
	return ans;
};

const binarySearch = (searchArray, target) => {
	const array = searchArray.slice();
	let ans = sortingAlgorithms[3](array);
	array.sort();
	ans.push({ action: "sorted" });
	let start = 0;
	let end = array.length - 1;
	while (start <= end) {
		const mid = Math.floor(start + (end - start) / 2);
		if (array[mid] === target) {
			ans.push({ index: mid, action: "found", start, end });
			return ans;
		} else if (array[mid] < target) {
			start = mid + 1;
			ans.push({ action: "searching", index: mid, start, end });
		} else {
			end = mid - 1;
			ans.push({ action: "searching", index: mid, start, end });
		}
	}
	ans.push({ action: "not-found" });
	return ans;
};

export const searchingAlgorithms = [linearSearch, binarySearch];
