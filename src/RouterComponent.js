import React, {PureComponent} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import AnswerQuestions from "./components/AnswerQuestions/AnswerQuestions";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import LoginPageContainer from "./components/LoginPage/LoginPageDataContainer";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import Page404 from './components/Page404/Page404';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Results from "./components/Results/Results";

class RouterComponent extends PureComponent {
	render() {
		console.log('%c RouterComponent ', 'background: #222; color: #bada55', this.props);
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route exact path="/" render={(props) => {
					    console.log("props login", props);
					    return (<LoginPageContainer {...this.props}/>);
				    }}/>
				    <PrivateRoute
					    exact
					    path="/home"
					    component={HomePageContainer}
				    />
				    <PrivateRoute
					    exact
					    path={"/add"}
					    routeState={this.props}
					    component={NewQuestion}
				    />
				    <PrivateRoute
					    exact
					    path={"/LeaderBoard"}
					    routeState={this.props}
					    component={LeaderBoard}
				    />
				    <PrivateRoute
					    exact
					    path={"/question/:id"}
					    routeState={this.props}
					    component={AnswerQuestions}
				    />
				    <PrivateRoute
					    exact
					    path={"/question/:id/results"}
					    routeState={this.props}
					    component={Results}
				    />
				    <Route
					    path="/*"
					    component={Page404}
				    />
			    </Switch>
		    </HashRouter>
	    </div>
    );
  }
}
export default RouterComponent;
