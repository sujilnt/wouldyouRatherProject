import React from "react";
import  {Tab}  from 'semantic-ui-react';
import QuestionCard from "../../QuestionCard/QuestionCard";

const listOFQuestions = (array) => {
	const listOFQuestions = [];
	array.forEach((row, index) => {
		listOFQuestions.push(
			<QuestionCard QuestionData={row} key={index}/>
		);
	});
	return listOFQuestions;
};
const renderTabPane = (panesData) => {
	const answered = listOFQuestions(panesData.answeredQuestions);
	const unanswered = listOFQuestions(panesData.unansweredQuestions);
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


const checkVotes = (option, row) => {
	return option.votes.indexOf(row.id);
};
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
	console.log({
		answeredQuestions,
		unansweredQuestions
	});
	return {
		answeredQuestions,
		unansweredQuestions
	};
};
const TabComponent = (props) =>{
	const {getQuestions, currentUser} = props;
	if ( getQuestions.length ) {
		const getPanesData = panesData(getQuestions, currentUser);
		const panes = renderTabPane(getPanesData);
		console.log("panes", panes);
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

export default TabComponent;
