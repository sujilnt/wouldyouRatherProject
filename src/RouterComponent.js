import React, {Component} from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPageDataContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import PageError from './components/PageError/PageError';

class RouterComponent extends Component {
	render() {
		console.log('%c RouterComponent ', 'background: #222; color: #bada55');
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route exact path = "/" component={LoginPage}/>
				    <Route exact path="/home" component={HomePageContainer}
				    />
				    <Route path={"/*"} component={PageError}
				    />
			    </Switch>
		    </HashRouter>
	    </div>
    );
  }
}
export default RouterComponent;
