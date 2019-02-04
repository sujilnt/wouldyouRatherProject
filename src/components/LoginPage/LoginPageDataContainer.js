import {connect} from "react-redux";
import LoginPage from "./LoginPage";

const mapStateToProps = state => {
	return{
		...state
	};
};

const LoginPageDataContainer = connect(mapStateToProps)(LoginPage);

export default LoginPageDataContainer;
