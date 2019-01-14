import React,{Component} from "react";
import {
	HashRouter,
	Switch,
	Link,
	Route
} from "react-router-dom";
import App from './App';
import LoginPage from "./components/LoginPage/LoginPageDataContainer";
class RouterComponent extends Component{
  render(){
  	return(
  		<div>
		    <HashRouter>
			    <Switch>
				    <Route path = "/" render={()=>(
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
export default RouterComponent;
