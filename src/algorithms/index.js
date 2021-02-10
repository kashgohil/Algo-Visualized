export const generateMaze = () => {
	const row = 25;
	const col = 65;
	const dp = [...Array(25)].map((item) => [...Array(65)]);
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			dp[i][j] =
				(i % 2 === 0 && j % 2 === 0 || i===Math.floor(Math.random()*25) || j===Math.floor(Math.random()*65))
					? true
					: false;
		}
	}
	return dp;
};
