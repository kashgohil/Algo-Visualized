import React from 'react';
import { Link } from 'react-router-dom';
import ArrayPage from 'views/ArrayPage/ArrayPage';
import LinkedListPage from 'views/LinkedListPage/LinkedListPage';
import StackPage from 'views/StackPage/StackPage';
import QueuePage from 'views/QueuePage/QueuePage';

const datastructures = ['Array', 'Linked List', 'Stack', 'Queue'];

const DSPage = (props) => {
	document.title = 'DS-Algo | Data Structures';

	switch (props.match.params.type) {
		case 'Array':
			return <ArrayPage />;
		case 'Linked List':
			return <LinkedListPage />;
		case 'Stack':
			return <StackPage />;
		case 'Queue':
			return <QueuePage />;
		default:
			return (
				<section className='ds-algo-page'>
					{datastructures.map((data, index) => (
						<Link
							key={index}
							style={{ textDecoration: 'none' }}
							to={`/datastructures/${data}`}
						>
							<span className='card'>{data}</span>
						</Link>
					))}
				</section>
			);
	}
};

export default DSPage;
