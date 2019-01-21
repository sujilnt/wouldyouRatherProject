import React,{PureComponent} from "react";
import {connect} from "react-redux";
import TabComponent from "../TabComponent/TabComponent";
import {getQuestions} from "../../store/action";

const mapStateToProps = (state)=>{
	console.log("called --State");
 return{
 	...state
 };
};

const mapDispatchToProps = dispatch =>{
	console.log("called --Dispatcher");
	return {
		getQuestions: ()=> {
			dispatch(getQuestions());
		}
	};
};
class QuestionTabComponent extends PureComponent {
	render(){
		const {getQuestions} =this.props;
		const questionData = getQuestions();
		console.log("props",questionData);
		return(
			<div className="QuestionTabontainer">
				<TabComponent
					questionData={getQuestions}
				/>
			</div>
		);
	}
};
const QuestionTabs = connect(mapStateToProps,mapDispatchToProps)(QuestionTabComponent);
export default QuestionTabs;
