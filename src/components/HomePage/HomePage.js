import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer"

const HomePage= (props)=>{
	return(
		<div>
			<NavBarComponent currentUser={props.currentUser}  />
		</div>
	);
};
export default  HomePage;
