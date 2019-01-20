import React from "react";
import {connect} from "react-redux";
import TabComponent from "../TabComponent/TabComponent";
import {getQuestions} from "../../store/action";

const mapStateToProps = (state)=>{
 return{
 	...state
 };
};
const mapDispatchToProps = dispatch=>({
	getAllQuestions(){
		dispatch(getQuestions());
	}
});
const QuestionTabComponent = (props)=>{
	console.log(props);
	return(
		<div className="QuestionTabontainer">
			<TabComponent
				data={[]}
			/>
		</div>
	);
};
const QuestionTabs = connect(mapStateToProps,mapDispatchToProps)(QuestionTabComponent);
export default QuestionTabs;
