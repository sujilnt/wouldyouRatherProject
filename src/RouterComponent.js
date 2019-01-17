import React,{Component} from "react";
import {
	HashRouter,
	Switch,
	Route
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPageDataContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import PageEror from "./components/PageError/PageError";

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
				    <Route path={"/*"} render={()=>(
					    <div><PageEror/></div>
				    )}
				    />
			    </Switch>
		    </HashRouter>
	    </div>
    );
  }
}
export default RouterComponent;
