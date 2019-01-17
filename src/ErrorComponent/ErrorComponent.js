import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import "./ErrorComponent.css"
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

