import React from "react";
import { Link } from "react-router-dom";
import ArrayPage from "views/ArrayPage/ArrayPage";

const datastructures = ["Array", "Linked List", "Stack", "Queue", "Trees"];

const DSPage = (props) => {
	document.title = "DS-Algo | Data Structures";

	switch (props.match.params.type) {
		case "Array":
			return <ArrayPage />;
		case "Linked List":
			return null;
		default:
			return (
				<section className="ds-algo-page">
					{datastructures.map((data, index) => (
						<Link
							key={index}
							style={{ textDecoration: "none" }}
							to={`/ds/${data}`}
						>
							<span className="card">{data}</span>
						</Link>
					))}
				</section>
			);
	}
};

export default DSPage;
