import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Details from './components/Details';
import Footer from './components/Footer';
import './App.css';
import Logo from './imgs/mlbb_logo.png';

const App = () => {
	// console.log(Heroes)

	return (
		<div className="App">
			<BrowserRouter>
				<div className="header">
					<img src={Logo} alt="Mobile Legends" />
				</div>
				<Switch>
					<Route exact path="/">
						<div className="App-main">
							<Cards />
						</div>
					</Route>
					<Route path="/hero/:id">
						<Details />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
