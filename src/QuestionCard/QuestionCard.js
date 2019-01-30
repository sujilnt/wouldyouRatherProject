import React, {Component} from "react";
import "./QuestionCard.css";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import {Card} from 'semantic-ui-react';
import src from "../images/white-image.png";

/*
	<QuestionCard/>
        - A component Card Component that displays :-
             - UsersImage ,
             - And the Questions with 2 Options
          <Card />
            - A semantic Ui Component that is used to items in display card.
         <RadioGroup/>
            - Custom Stateful Component that is  list of Button.
*/

class QuestionCard extends Component {
	
	getDefaultvalue = (currentUser, QuestionsData) => {
		const option = currentUser.answers[ QuestionsData.id ];
		return option ? option : "default";
	};
	render() {
		//console.log('%c QuestionCard ', 'background: blue; color: white');
		const {QuestionData, currentUser, dispatch} = this.props;
		return (
			<div className="questionContainer">
				<div className="QuestionCardImage">
					<Card
						color='red'
						image={QuestionData.avatarURL}
						className="semanticCard"
					/>
				</div>
				<div className="QuestionsContent">
					<RadioGroup QuestionsData={QuestionData}
					            currentUser={currentUser}
					            dispatch={dispatch}
					            getDefaultvalue={this.getDefaultvalue}
					/>
				</div>
			</div>
		)
	}
}

export default QuestionCard;
