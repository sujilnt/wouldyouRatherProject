import React from "react";
import {Card} from "semantic-ui-react";
import src from "../../images/white-image.png";
import "../../QuestionCard/QuestionCard.css";

const calculateScores = (params) => {
	return params.length;
};
const ScoreBoard = (props) => {
	console.log("scoreCard", props.users.name);
	const answers = calculateScores(Object.keys(props.users.answers));
	const questions = calculateScores(props.users.questions);
	return (
		<div className="questionContainer " style={{width: "40% !important"}}>
			<div className="QuestionCardImage">
				<Card
					color='red'
					image={props.users.avatarURL}
					className="semanticCard"
				/>
			</div>
			<div className="QuestionsContent">
				<h3>{props.users.name}</h3>
				<div className="fonting">Question Answered : {questions}</div>
				<div className="fonting">Answered Questions : {answers}</div>
				<div className="fonting moveRight">total : {answers + questions}</div>
			</div>
			.
			
		</div>
	)
};
export default ScoreBoard;
