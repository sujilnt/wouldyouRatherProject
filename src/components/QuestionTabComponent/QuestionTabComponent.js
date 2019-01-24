import React from "react";
import  {Tab}  from 'semantic-ui-react';
import QuestionCard from "../../QuestionCard/QuestionCard";
/*
listOfQuestion () =>{
	A function that creates list of Questions using Question Card Component .
	   return array
}
*/
const listOFQuestions = (array, currentUser) => {
	const listOFQuestions = [];
	array.forEach((row, index) => {
		listOFQuestions.push(
			<QuestionCard QuestionData={row} key={index} currentUser={currentUser}/>
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
const renderTabPane = (panesData, currentUser) => {
	const answered = listOFQuestions(panesData.answeredQuestions, currentUser);
	const unanswered = listOFQuestions(panesData.unansweredQuestions, currentUser);
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
checkVotes () =>{
       A function to check the user has answered this particular
      question by parsing the votes array.
  }
 */

const checkVotes = (option, user) => {
	return option.votes.indexOf(user.id);
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
	const answeredQuestions = [];
	const unansweredQuestions = [];
	getQuestions.forEach((row) => {
		const votesOption1 = checkVotes(row.optionOne, user);
		const votesOption2 = checkVotes(row.optionTwo, user);
		return (votesOption2 >= 0 || votesOption1 >= 0) ?
			answeredQuestions.push(row) :
			unansweredQuestions.push(row);
	});
	return {
		answeredQuestions,
		unansweredQuestions
	};
};
/*
*  <QuestionTabComponent /> - Stateless Component that is Imported from semantic Ui Library .
*  passing QuestionCard component inside Tab Pane .
*/
const QuestionTabComponent = (props) => {
	const {getQuestions, currentUser} = props;
	if ( getQuestions.length ) { // If Question are present in the state
		const getPanesData = panesData(getQuestions, currentUser);
		const panes = renderTabPane(getPanesData, currentUser);
		return (
			<div>
				<Tab menu={{pointing: false, attached: true}} panes={panes}/>
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
