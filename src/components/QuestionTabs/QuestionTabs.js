/*
import React,{PureComponent} from "react";
import {connect} from "react-redux";
import QuestionTabComponent from "../QuestionTabComponent/QuestionTabComponent";
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
		getQuestions: ()=> getQuestions()
	};
};
class QuestionTabComponent extends PureComponent {
	state={
		currentProps: {}
	};
	componentDidMount() {
		const {currentUser, getQuestions,dispatch} = this.props;
		console.log("getQuestions",getQuestions);
		
		
		this.setState(()=>({
			 currentUser,
			getQuestions
		}));
	}
	
	render(){
		console.log(this.state, "fffff");
		return(
			<div className="QuestionTabontainer">
				<QuestionTabComponent
					questionData={getQuestions}
				/>
			</div>
		);
	}
};
const QuestionTabs = connect(mapStateToProps)(QuestionTabComponent);
export default QuestionTabs;

*/
