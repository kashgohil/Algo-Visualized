const col=55
const row=25

const dfs = (grid, start) => {
	let st = [];
	let ans = [];
	let path = [];
	let flag = false;
	let copy = grid.map((arr) =>
		arr.map((item) => {
			return { visited: item === "w" ? true : false, parent: null };
		})
	);

	st.push(start);

	while (st.length > 0) {
		const current = st.pop();

		if (grid[current.x][current.y] === "t") {
			ans.push({ ...current, action: "target" });
			flag = true;
			break;
		}

		copy[current.x][current.y].visited = true;
		ans.push({ ...current, action: "visited" });

		if (current.x - 1 >= 0 && !copy[current.x - 1][current.y].visited) {
			st.push({ x: current.x - 1, y: current.y });
			copy[current.x - 1][current.y].parent = { ...current };
		}
		if (current.x + 1 < row && !copy[current.x + 1][current.y].visited) {
			st.push({ x: current.x + 1, y: current.y });
			copy[current.x + 1][current.y].parent = { ...current };
		}
		if (current.y - 1 >= 0 && !copy[current.x][current.y - 1].visited) {
			st.push({ x: current.x, y: current.y - 1 });
			copy[current.x][current.y - 1].parent = { ...current };
		}
		if (current.y + 1 < col && !copy[current.x][current.y + 1].visited) {
			st.push({ x: current.x, y: current.y + 1 });
			copy[current.x][current.y + 1].parent = { ...current };
		}
	}

	if (flag) {
		const last = ans[ans.length - 1];
		let target = copy[last.x][last.y].parent && {
			...copy[last.x][last.y].parent,
		};
		while (target) {
			path.push({ ...target, action: "path" });
			target = copy[target.x][target.y].parent && {
				...copy[target.x][target.y].parent,
			};
		}
		for (let i = path.length - 1; i >= 0; i--) ans.push(path[i]);
	} else ans.push({ action: "no-path" });
	ans.push({ action: "end" });
	return ans;
};

const bfs = (grid, start) => {
	let q = [];
	let ans = [];
	let path = [];
	let flag = false;
	let copy = grid.map((arr) =>
		arr.map((item) => {
			return { visited: item === "w" ? true : false, parent: null };
		})
	);

	q.push(start);

	while (q.length > 0) {
		let current = q.shift();

		if (grid[current.x][current.y] === "t") {
			ans.push({ ...current, action: "target" });
			flag = true;
			break;
		}

		copy[current.x][current.y].visited = true;
		ans.push({ ...current, action: "visited" });

		if (current.x - 1 >= 0 && !copy[current.x - 1][current.y].visited) {
			q.push({ x: current.x - 1, y: current.y });
			copy[current.x - 1][current.y].parent = { ...current };
		}
		if (current.x + 1 < row && !copy[current.x + 1][current.y].visited) {
			q.push({ x: current.x + 1, y: current.y });
			copy[current.x + 1][current.y].parent = { ...current };
		}
		if (current.y - 1 >= 0 && !copy[current.x][current.y - 1].visited) {
			q.push({ x: current.x, y: current.y - 1 });
			copy[current.x][current.y - 1].parent = { ...current };
		}
		if (current.y + 1 < col && !copy[current.x][current.y + 1].visited) {
			q.push({ x: current.x, y: current.y + 1 });
			copy[current.x][current.y + 1].parent = { ...current };
		}
	}
	if (flag) {
		const last = ans[ans.length - 1];
		let target = copy[last.x][last.y].parent && {
			...copy[last.x][last.y].parent,
		};
		while (target) {
			path.push({ ...target, action: "path" });
			target = copy[target.x][target.y].parent && {
				...copy[target.x][target.y].parent,
			};
		}
		for (let i = path.length - 1; i >= 0; i--) ans.push(path[i]);
	} else ans.push({ action: "no-path" });
	ans.push({ action: "end" });
	return ans;
};

export const graphAlgorithms = [bfs, dfs];
