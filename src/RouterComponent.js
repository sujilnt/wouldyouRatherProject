import React, {PureComponent} from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import LoginPage from "./components/LoginPage/LoginPageDataContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import PageError from './components/PageError/PageError';

class RouterComponent extends PureComponent {
	render() {
		//console.log('%c RouterComponent ', 'background: #222; color: #bada55');
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route exact path = "/" component={LoginPage}/>
				    <Route exact path="/home" component={HomePageContainer}/>
				    <Route exact path="/NewQuestion"
				           {...this.props}
				           render={
					           () => <NewQuestion {...this.props} />
				           }
				    />
				    <Route exact path="/LeaderBoard"
				           {...this.props}
				           render={
					           () => <LeaderBoard {...this.props} />
				           }
				    />
				
				    <Route
					    path={"/*"}
					    component={PageError}
				    />
			    </Switch>
		    </HashRouter>
	    </div>
    );
  }
}
export default RouterComponent;
