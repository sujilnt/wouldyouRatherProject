import React,{Component} from "react";
import {
	NavLink ,
} from "react-router-dom";
import "./NavBar.css";
import Avatar from 'react-avatar';
/*
  <NavBar />
        - A stateful Component that is used render The navbar .
        renderNavChild =>{
             A function that returns list of <span> tags with a NavLink inside it .
        }
    */
class NavBar extends Component{
	state={};
	renderNavChild=(ChildrenArr,className)=>{
		let renderNavChildArr=[];
		ChildrenArr.forEach((value,i)=>{
			console.log(value, "navbar");
			renderNavChildArr.push(
				<span className={className} key={className + i}>
					<span style={{marginRight: "5px"}}>{value.avatarURL ?
						<Avatar size="40" round="20px" src={value.avatarURL}/> : ""}</span>
					<NavLink exact to={value.link} activeClassName="navLinkSelected">
						{value.name}
					</NavLink>
				</span>
			);
		});
		return renderNavChildArr;
	};
	render(){
		//console.log('%c NavBar ', 'background: tomato ; color: white');
		return(
			<div className="navcontainer">
				<section className="section">Would You Rather</section>
				<section className="leftSection">
					{this.renderNavChild(this.props.navBarLeftSideData,"leftChild")}
					
				</section>
				<section className="rightSection">
					{this.renderNavChild(this.props.navBarRightSideData,"rightChild")}
				</section>
			</div>);
	}
}
export default NavBar;
