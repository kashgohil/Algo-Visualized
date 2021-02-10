import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from 'views/LandingPage/LandingPage';
import MenuPage from 'views/MenuPage/MenuPage';
import Playground from 'components/Playground/Playground';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Content from 'components/Content/Content';
import AlgoPage from 'views/AlgoPage/AlgoPage';
import DSPage from 'views/DSPage/DSPage';
import './App.css';

const App = () => {
	return (
		<section className='App'>
			<Header />
			<Content>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/menu' component={MenuPage} />
						<Route exact path='/algo' component={AlgoPage} />
						<Route exact path='/ds' component={DSPage} />
						<Route exact path='/algo/:type' component={AlgoPage} />
						<Route exact path='/playground' component={Playground} />
					</Switch>
				</BrowserRouter>
			</Content>
			<Footer />
		</section>
	);
};

export default App;
