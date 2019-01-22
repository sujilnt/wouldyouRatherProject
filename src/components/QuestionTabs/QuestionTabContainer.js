import React,{PureComponent} from "react";
import TabComponent from "../TabComponent/TabComponent";
import {getQuestions} from "../../store/action";
class QuestionTabContainer extends PureComponent{
    state={
    	loading: true,
	    data:{}
    };
    componentDidMount() {
	    this.props.dispatch(
		    getQuestions()
	    );
    }
	
	render() {
    	const {currentUser,getQuestions}=this.props;
    	console.log("QuestionTab container rendered",typeof(this.props.getQuestions));
    	return (
    		<div className="QuestionTabontainer">
		    {
		        (Object.keys(this.props.getQuestions).length)  ?
			        
			        <div>
				        <TabComponent
					        getQuestions={Object.values(getQuestions)}
					        currentUser={currentUser}
				        />
				        </div>
			        :
			        <div>loading Data....</div>
			}
		    </div>
		);
	}
}
export default QuestionTabContainer;
