import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from 'views/LandingPage/LandingPage'
import GraphPage from 'views/GraphPage/GraphPage'
import SortPage from 'views/SortingPage/SortPage'
import Playground from 'components/Playground/Playground'
import './App.css'

const App = () => {
  return (
    <BrowserRouter className="App">
      <Route exact path='/' component={LandingPage}></Route>
      <Route path='/graphs' component={GraphPage}></Route>
      <Route path='/sorting' component={SortPage}></Route>
      <Route path='/playground' component={Playground}></Route>
    </BrowserRouter>
  );
}

export default App
