import HomePage from "./HomePage";
import {connect} from "react-redux";
const getData=(props)=>{
	return props.currentUser.length ?
		props :
		JSON.parse(localStorage["app-store"]);
	
};
const mapStateToProps = state => {
	return{
		...getData(state)
	};
};
const HomePageContainer= connect(mapStateToProps)(HomePage);

export default HomePageContainer;

