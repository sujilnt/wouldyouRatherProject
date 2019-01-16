import HomePage from "./HomePage";
import {connect} from "react-redux";
const mapStateToProps = state => {
	return{
		...state
	};
};
const HomePageContainer= connect(mapStateToProps)(HomePage);

export default HomePageContainer;

