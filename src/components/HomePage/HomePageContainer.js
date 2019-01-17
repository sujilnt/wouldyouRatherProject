import HomePage from "./HomePage";
import {connect} from "react-redux";
/*******************************************************
/*
access the local storage , for the  current user for reference
const getData=(props)=>{
	return props.currentUser.length ?
		props :
		JSON.parse(localStorage["app-store"]);
	
};
 ************************************************/
const mapStateToProps = state => {
	return{
		...state
	};
};
const HomePageContainer= connect(mapStateToProps)(HomePage);

export default HomePageContainer;

