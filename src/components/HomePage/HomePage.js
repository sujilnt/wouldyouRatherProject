import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer"
import LoginError from "../LoginError/LoginError";
const HomePage= (props)=>{
	console.log("inside home",props.currentUser,props);
	return(
		<div>
			{
				props.currentUser.name ?
				<NavBarComponent currentUser={props.currentUser}  /> :
				<div className="fullHeight"><LoginError url={"/"}/></div>
				
			}
		</div>
	);
};
export default  HomePage;
