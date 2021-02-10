import React from "react";
import "./header.scss";

const Header = ({ graph }) => {
	const handleGraph = (graphAlgo) => {
		const ans = graphAlgo(graph.node);
		graph.handleGraphAlgo(ans);
	};

	return (
		<header className="header-container">
			<span className="title">DS-Algo</span>
		</header>
	);
};

export default Header;
