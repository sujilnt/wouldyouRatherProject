import React,{Component} from "react";
import {
	HashRouter,
	Switch,
	Link,
	Route
} from "react-router-dom";
import {LoginPage} from "./components/LoginPage";
class Routes extends Component{
  render(){
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Routes  exact path = "/" render={()=>(
				    	<div>
					    <LoginPage/>
					    </div>
				    )}/>
			    </Switch>
		    </HashRouter>
	    </div>
    );
  }
}
export default Routes
