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
	state = {
		authUser: false,
	};
	
	updateauth = () => {
		this.setState(() => {
			return {
				authUser: true,
			}
		});
	};
	
	
	render() {
		const isAuthenticated = this.state.authUser;
		const updateauth = this.updateauth;
		//console.log('%c RouterComponent ', 'background: #222; color: #bada55', this.props, this.state);
		return (
			<div>
				<HashRouter>
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => {
								const {authUser} = this.state;
								const dataProp = {...this.props, ...props, updateauth};
								return (
									<LoginPageContainer {...dataProp}/>
								);
							}}/>
						<PrivateRoute
							exact
							path="/home"
							isAuthenticated={isAuthenticated}
							component={HomePageContainer}
						/>
						<PrivateRoute
							exact
							path={"/add"}
							isAuthenticated={isAuthenticated}
							routeState={this.props}
							component={NewQuestion}
						/>
						<PrivateRoute
							exact
							path={"/LeaderBoard"}
							routeState={this.props}
							isAuthenticated={isAuthenticated}
							component={LeaderBoard}
						/>
						<PrivateRoute
							exact
							path={"/question/:id"}
							isAuthenticated={isAuthenticated}
							routeState={this.props}
							component={AnswerQuestions}
						/>
						<PrivateRoute
							exact
							path={"/question/:id/results"}
							isAuthenticated={isAuthenticated}
							routeState={this.props}
							component={Results}
						/>
						<Route
							component={Page404}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
  }
}
export default RouterComponent;
