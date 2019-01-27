import {connect} from "react-redux";
import {currentUser, getUsers, getQuestions} from "./store/action"
import RouterComponent from "./RouterComponent";

const mapStateToProps = (state) => {
	const obj = {
		state: {
			currentUser: state.currentUser,
			getUsers: state.getUsers,
			getQuestions: state.getQuestions
		}
	};
	return obj;
};
const mapDispatchToProps = (dispatch) => {
	return {
		action: {
			currentUser: (userName) => dispatch(currentUser(userName)),
			getUsers: dispatch(getUsers()),
			getQuestions: dispatch(getQuestions()),
			dispatch
		}
	}
};
const RouteContainer = connect(mapStateToProps, mapDispatchToProps)(RouterComponent);

export default RouteContainer;
