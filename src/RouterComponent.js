import React, {PureComponent} from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom";
import AnswerQuestions from "./components/AnswerQuestions/AnswerQuestions";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import LoginPageContainer from "./components/LoginPage/LoginPageDataContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import PageError from './components/PageError/PageError';
import Results from "./components/Results/Results";

class RouterComponent extends PureComponent {
	render() {
		//console.log('%c RouterComponent ', 'background: #222; color: #bada55', this.props);
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route exact path="/" render={() => <LoginPageContainer {...this.props}/>}/>
				    <Route exact path="/home" component={HomePageContainer}/>
				    <Route exact path="/add"
				           {...this.props}
				           render={
					           () => <NewQuestion {...this.props} />
				           }
				    />
				    <Route exact path="/LeaderBoard"
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
						    (props) => <Results {...this.props} />
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
