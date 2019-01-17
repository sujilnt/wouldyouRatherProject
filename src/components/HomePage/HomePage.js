import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer"
import LoginError from "../LoginError/LoginError";
import QuestionTabs from "../QuestionTabs/QuestionTabs";
const HomePage= (props)=>{
	console.log("inside home",props.currentUser,props);
	return(
		<div>
			{
				props.currentUser.name ?
					<div>
						<NavBarComponent currentUser={props.currentUser}  />
						<div className="flexContainer">< QuestionTabs /></div>
					</div>:
				<div className="fullHeight"><LoginError url={"/"}/></div>
				
			}
		</div>
	);
};
export default  HomePage;
