import React, {Component} from "react";
import "./QuestionCard.css";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import {Card} from 'semantic-ui-react';
import src from "../images/white-image.png";

class QuestionCard extends Component {
	render() {
		const {QuestionData} = this.props;
		return (
			<div className="questionContainer">
				<div className="QuestionCardImage">
					<Card
						color='red'
						image={src}
						className="semanticCard"
					/>
				</div>
				<div className="QuestionsContent">
					<RadioGroup QuestionsData={QuestionData}/>
				</div>
			</div>
		)
	}
}

export default QuestionCard;
