import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer"
import LoginErrorComponent from "../LoginError/LoginErrorComponent";
const HomePage= (props)=>{
	console.log("inside home",props.currentUser,props);
	return(
		<div>
			{
				props.currentUser.name ?
				<NavBarComponent currentUser={props.currentUser}  /> :
				<div className="fullHeight"><LoginErrorComponent url={"/"}/></div>
				
			}
		</div>
	);
};
export default  HomePage;
