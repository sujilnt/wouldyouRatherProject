import React from "react";
import NavBar from "./NavBar";
/*
*  <NavBarComponent />
		- A stateless Component that render custom Navbar .
		1) navBarLeftSideData :-
			- Data for left side of the navBar.
		2) navBarRightSideData
			- Data for Right side of the navBar.
	   Both of 1) and 2) are of type is array of objects.
   <Navbar />
       - A child Stateful Component that render navBar , navBarLeftSideData and  navBarRightSideData is passed as props .
* */
export const NavBarComponent =(props)=>{
	const navBarLeftSideData= [
		{
			name: "home",
			link: "/home",
			side:"left"
		},{
			name: "Add Questions",
			link: "/add",
			side:"left"
		},{
			name: "LeaderBoard",
			link: "/LeaderBoard",
			side:"left"
		}
	
	];
	const navBarRightSideData= [
		{
			name: props.currentUser.name,
			avatarURL: props.currentUser.avatarURL,
			disabled: true,
			link: "#"
		},
		{
			name:"Log Out",
			link: "/"
			
		}];
   return(
   	<NavBar
	    navBarRightSideData={navBarRightSideData}
	    navBarLeftSideData={navBarLeftSideData}
    />
   );
};

