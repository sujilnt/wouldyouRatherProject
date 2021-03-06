import React, {Component} from "react";
import Avatar from 'react-avatar';
import {NavLink,} from "react-router-dom";
import "./NavBar.css";

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
			let style = value.disabled ? "navLinkSelectedDisabled" : "navLinkSelected";
			const avatar = value.avatarURL ?
				<Avatar size="40" round="20px" name={value.name} src={value.avatarURL}/> : "";
			renderNavChildArr.push(
				<span className={className} key={className + i}>
					<span style={{marginRight: "5px"}}>
						{avatar}
					</span>
					<NavLink exact to={value.link} activeClassName={style}>
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
