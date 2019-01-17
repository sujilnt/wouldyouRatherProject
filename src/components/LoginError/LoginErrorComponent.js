import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import "./LoginError.css"
const RenderRedirect = (props)=>{
	return(
		<div>
			<Redirect
				exact
				to={props.url}
			/>
		</div>
		);
};

class LoginErrorComponent extends Component{
	state={
		wait: true
	};
	componentDidMount() {
		setTimeout(()=>{
			this.setState(()=>({
				wait:false
			}));
		},3000)
	}
	
	render(){
		return(
			<div className="flexContainer">
				<div className="card">
					<div className="center">Need to  be logged in  inorder to access this webpage.</div>
					<div className="center">Redirecting.....</div>
					<span className="unvisible">{
						this.state.wait=== false ?
							RenderRedirect(this.props):
							""
					}</span>
				</div></div>
		);
	}
}
export default LoginErrorComponent;
