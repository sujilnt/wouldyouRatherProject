import React from "react";
import NavBar from "./NavBar";

export const NavBarComponent =(props)=>{
	const navBarLeftSideData= [
		{
			name: "home",
			link: "/home",
			side:"left"
		},{
			name: "NewQuestion",
			link: "/NewQuestion",
			side:"left"
		},{
			name: "LeaderBoard",
			link: "/LeaderBoard",
			side:"left"
		}
	
	];
	const navBarRightSideData= [
		{
		name: props.currentUser.label ,
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
