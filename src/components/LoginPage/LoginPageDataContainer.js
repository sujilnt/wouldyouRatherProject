import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {currentUser} from "../../store/action"
const mapStateToProps = state => {
	return{
		...state
	};
};
const mapDispatchToProps= dispatch =>({
   getcurrentUser(userName){
   	    dispatch(
   	    	currentUser(userName)
        )
   }
});
const LoginPageDataContainer= connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default LoginPageDataContainer;
