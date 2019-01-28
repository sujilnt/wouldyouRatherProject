import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer"
import LoginError from "../LoginError/LoginError";
import QuestionTabContainer from "../QuestionTabs/QuestionTabContainer";

const HomePage= (props)=>{
	//console.log('%c HomePage ', 'background: red; color: #bada55');
	return(
		<div>
			{
				props.currentUser.name ?
					<div>
						<NavBarComponent currentUser={props.currentUser}  />
						<div className="flexContainer">< QuestionTabContainer {...props}/></div>
					</div>:
				<div className="fullHeight"><LoginError url={"/"}/></div>
				
			}
		</div>
	);
};
export default  HomePage;
