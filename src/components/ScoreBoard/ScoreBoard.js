import React from "react";
import {Card} from "semantic-ui-react";
import src from "../../images/white-image.png";
import "../../QuestionCard/QuestionCard.css";

const calculateScores = (params) => {
	return params.length;
};
const ScoreBoard = (props) => {
	console.log("scoreCard", props.users.questions);
	const answers = calculateScores(Object.keys(props.users.answers));
	const questions = calculateScores(props.users.questions);
	return (
		<div className="questionContainer " style={{width: "40% !important"}}>
			<div className="QuestionCardImage">
				<Card
					color='red'
					image={src}
					className="semanticCard"
				/>
			</div>
			<div className="QuestionsContent">
				<div>Question Answered : {questions}</div>
				<div>Answered Questions : {answers}</div>
			</div>
		</div>
	)
};
export default ScoreBoard;
