import React,{PureComponent} from "react";
import QuestionTabComponent from "../QuestionTabComponent/QuestionTabComponent";
import {getQuestions} from "../../store/action";

/*
	<QuestionTabComponent />
		- A stateful  child component that render tabs with Questions that is
        answered and un answered .
    <QuestionTabContainer />
            - A parent and pureComponent Component that render that QuestionTabComponent .
              As soon it renders for the first time ComponentDidMount() is called.
            - dispatch(getQuestion()) =>
                   - A function that returns all question data by all the users .
                   - getQuestion () -> Action Creator that is imported .
    Props
      - currentUser: Current Login user ,
      - getQuestions: A function that returns questions and type is "Object"

*/
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
    	return (
    		<div className="QuestionTabontainer">
		    {
		        (Object.keys(this.props.getQuestions).length)  ?
			        
			        <div>
				        <QuestionTabComponent
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
