import React,{Component} from "react";
import ErrorComponent from "../../ErrorComponent/ErrorComponent";

class LoginError extends Component{
	render(){
		return(
			<div className="flexContainer">
				<ErrorComponent
					message = "Need to  be logged in  inorder to access this webpage."
					timer="3000"
					url="/"
				/>
			</div>
		);
	}
}
export default LoginError;
