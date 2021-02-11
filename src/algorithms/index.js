const randomNumber = (mn, mx) => {
	return Math.floor(Math.random() * (mx - 1 - mn) + mn);
};

export const generateMaze = () => {
	const row = 25;
	const col = 65;
	const dp = [...Array(25)].map(() => [...Array(65)].map(() => "p"));
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (i % 2 === 0 && j % 2 === 0) {
				dp[i][j] = "w";
				const anotherOne = randomNumber(0, 4);
				if (anotherOne === 0 && i > 0)
					dp[i - 1][j] =
						j > 0 && dp[i - 1][j - 1] === "w" ? "p" : "w";
				else if (anotherOne === 1 && j > 0)
					dp[i][j - 1] =
						i > 0 && dp[i - 1][j - 1] === "w" ? "p" : "w";
				else if (anotherOne === 2 && i < row - 1)
					dp[i + 1][j] =
						j > 0 && dp[i + 1][j - 1] === "w" ? "p" : "w";
				else if (anotherOne === 3 && j < col - 1)
					dp[i][j + 1] =
						i > 0 && dp[i - 1][j + 1] === "w" ? "p" : "w";
			}
		}
	}
	return dp;
};
