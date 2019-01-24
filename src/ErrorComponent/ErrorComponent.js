import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import "./ErrorComponent.css";
/*
	<ErrorComponent />
		- A stateful Component that is used to display Error Messages.
	RenderRedirect => {
		- A function that returns the React route Redirect tag which is imported from react-router.
		  If any error Occurs its redirected to url provided by the parent Component .
	}
	props -
	  time - wait time ,
	  url - path to redirect .
*/

const RenderRedirect = (url)=>{
	return(
		<div>
			<Redirect
				exact
				to={url}
			/>
		</div>
	);
};

class ErrorComponent extends Component{
	state={
		wait: true
	};
	
	componentDidMount() {
		const {timer} =this.props;
		/*
			setTimeOut => {
			  change the after some minutes , minutes
			}
		*/
		setTimeout(()=>{
			this.setState(()=>({
				wait:false
			}));
		},timer)
	}
	
	render(){
		const {message,url}=this.props;
		return(
			<div className="flexContainer">
				<div className="card">
					<div className="center">{message}</div>
					<div className="center">Redirecting.....</div>
					<span className="unvisible">{
						this.state.wait=== false ?
							RenderRedirect(url):
							""
					}</span>
				</div></div>
		);
	}
}
export default ErrorComponent;

