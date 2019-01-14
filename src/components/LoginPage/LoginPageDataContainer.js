import React from "react";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
const mapStateToProps = state => {
	console.log("state",state);
	return{
		getUsers: state.getUsers
	};
};
const LoginPageDataContainer= connect(mapStateToProps)(LoginPage);

export default LoginPageDataContainer;
