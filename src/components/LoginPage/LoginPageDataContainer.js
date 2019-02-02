import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {currentUser, getQuestions, getUsers} from "../../store/action"

const mapStateToProps = state => {
	return{
		...state
	};
};
const mapDispatchToProps= dispatch =>({
	async getcurrentUser(userName) {
		const data = await dispatch(currentUser(userName));
		return data;
   }
});
const LoginPageDataContainer= connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default LoginPageDataContainer;
