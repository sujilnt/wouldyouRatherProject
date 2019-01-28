import React from "react";
import  {Tab}  from 'semantic-ui-react';
import QuestionCard from "../../QuestionCard/QuestionCard";
/*
listOfQuestion () =>{
	A function that creates list of Questions using Question Card Component .
	   return array
}
*/
const listOFQuestions = (array, currentUser, dispatch) => {
	const listOFQuestions = [];
	array.forEach((row) => {
		listOFQuestions.push(
			<QuestionCard
				QuestionData={row}
				key={row.id}
				currentUser={currentUser}
				dispatch={dispatch}
			/>
		);
	});
	return listOFQuestions;
};
/*
renderTabPane() =>{
*   Function that return tab pane data , There are 2 tabs answered  and unanswered Tab .
*   answered Tab - data of answered question by current User .
*   unanswered Tab - data of unanswered question
*  }
* */
const renderTabPane = (panesData, currentUser, dispatch) => {
	const answered = listOFQuestions(panesData.answeredQuestions, currentUser, dispatch);
	const unanswered = listOFQuestions(panesData.unansweredQuestions, currentUser, dispatch);
	console.log("panes Data", panesData);
	return [
		{
			menuItem: 'Answered Questions', key: "answered", render: () => <Tab.Pane attached={false}>
				{answered}
			</Tab.Pane>
		},
		{
			menuItem: 'Unanswered Questions', key: "answered", render: () => <Tab.Pane attached={false}>
				{unanswered}
			</Tab.Pane>
		},
	];
};
/*
panesData = ()=>{
      A function that getQuestion and users as input  from props and then
         returns object with keys {
            answeredQuestions -> list of answered Questions ,
            unansweredQuestions-> list of unanswered Question
      }
	}
*/

const panesData = (getQuestions, user) => {
	const answeredQuestionKeys = Object.keys(user.answers);
	const getQuestionsKeys = Object.values(getQuestions);
	const unansweredQuestions = getQuestionsKeys.filter((e) => answeredQuestionKeys.indexOf(e.id) === -1);
	const answeredQuestion = getQuestionsKeys.filter((e) => answeredQuestionKeys.indexOf(e.id) !== -1);
	
	return {
		answeredQuestions: answeredQuestion,
		unansweredQuestions: unansweredQuestions
	};
};
/*
*  <QuestionTabComponent /> - Stateless Component that is Imported from semantic Ui Library .
*  passing QuestionCard component inside Tab Pane .
*/
const QuestionTabComponent = (props) => {
	const {getQuestions, currentUser, dispatch} = props;
	console.log(props, "Question tab ");
	if ( getQuestions.length ) {
		const getPanesData = panesData(getQuestions, currentUser);
		const panes = renderTabPane(getPanesData, currentUser, dispatch);
		return (
			<div>
				<Tab menu={{pointing: false, attached: true}}
				     panes={panes}
				/>
			</div>
		)
	} else {
		return (
			<div>
				Questions API Failed
			</div>
		)
	}
	
};

export default QuestionTabComponent;
