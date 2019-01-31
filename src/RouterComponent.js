import React, {PureComponent} from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom";
import AnswerQuestions from "./components/AnswerQuestions/AnswerQuestions";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import LoginPage from "./components/LoginPage/LoginPageDataContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import PageError from './components/PageError/PageError';
import Results from "./components/Results/Results";

class RouterComponent extends PureComponent {
	render() {
		console.log('%c RouterComponent ', 'background: #222; color: #bada55', this.props);
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route exact path = "/" component={LoginPage}/>
				    <Route exact path="/home" component={HomePageContainer}/>
				    <Route exact path="/add"
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
					    exact
					    path={"/question/:id"}
					    render={
						    () => <AnswerQuestions {...this.props} />
					    }
				    />
				    <Route
					    exact
					    path={"/question/:id/results"}
					    render={
						    () => <div><Results {...this.props}/></div>
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
