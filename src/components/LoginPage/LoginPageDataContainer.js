import {connect} from "react-redux";
import {currentUser} from "../../store/action"
import LoginPage from "./LoginPage";

const mapStateToProps = state => {
	return{
		...state
	};
};
const mapDispatchToProps= dispatch =>({
	async getcurrentUser(userName) {
		return await dispatch(currentUser(userName));
   }
});
const LoginPageDataContainer= connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default LoginPageDataContainer;
