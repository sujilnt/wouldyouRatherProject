import React from "react";
import {Redirect} from "react-router-dom";
import {NavBarComponent} from "../NavBar/NavBarContainer"
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
					<Redirect to={"/"}/>
			}
		</div>
	);
};
export default  HomePage;
