import React,{Component} from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPageDataContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";

class RouterComponent extends Component{
  render(){
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route exact path = "/" render={()=>(
				    	<div>
						    <LoginPage/>
						 </div>
				    )}/>
				    <Route exact path="/home" render={()=>(
					    <div><HomePageContainer/></div>
				    )}
				    />
			    </Switch>
		    </HashRouter>
	    </div>
    );
  }
}
export default RouterComponent;
