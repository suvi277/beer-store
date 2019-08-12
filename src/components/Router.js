import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import BeerDetail from './BeerDetail';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomePage}/>
			<Route path="/beer/:beerId" component={BeerDetail}/>
			<Route component={NotFound}/>
		</Switch>
	</BrowserRouter>
)

export default Router;