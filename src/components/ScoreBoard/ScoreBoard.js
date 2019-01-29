import React from "react";
import {Card} from "semantic-ui-react";
import src from "../../images/white-image.png";
import "../../QuestionCard/QuestionCard.css";

const ScoreBoard = (params) => {
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
				<div>Quesition Answered : 8</div>
				<div>Answered Questions : 2</div>
			</div>
		</div>
	)
};
export default ScoreBoard;
