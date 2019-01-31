import React, {Component} from "react";
import {Card, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import src from "../../images/white-image.png";
import {currentQuestionAction} from "../../store/action";

class CardQuestion extends Component {
	getDefaultvalue = (currentUser, QuestionsData) => {
		const option = currentUser.answers[ QuestionsData.id ];
		return option ? option : "default";
	};
	ClickedElement = () => {
		const {dispatch, QuestionData} = this.props;
		dispatch(currentQuestionAction(QuestionData));
	};
	
	render() {
		//console.log('%c QuestionCard ', 'background: blue; color: white');
		const {QuestionData, status} = this.props;
		const imageAvatar = QuestionData.avatarURL ? QuestionData.avatarURL : src;
		const viewPollLink = `/question/${QuestionData.id}`;
		const resultLink = `/question/${QuestionData.id}/results`;
		const currentLink = status === "unanswered" ? viewPollLink : resultLink;
		return (
			<div className="questionContainer">
				<div className="QuestionCardImage">
					<Card
						color='red'
						image={imageAvatar}
						className="semanticCard"
					/>
				</div>
				<div className="QuestionsContent">
					<div>
						<h3 className="alignCenter"><span className="caps">{QuestionData.author}</span> asks would you
							rather....</h3>
						<div>
							<h4 className="h4">{QuestionData.optionOne.text}</h4>
							<h3 style={{
								fontFamily: "cursive",
								margin: 0,
								textAlign: "center"
							}}>
								Or
							</h3>
							<h4 className="h4">{QuestionData.optionTwo.text}</h4>
						</div>
					</div>
				</div>
				<div>
					<Link to={currentLink}>
						<Button color='red' className="fontWeight"
						        onClick={this.ClickedElement}>
							View Poll
						</Button>
					</Link>
				</div>
			</div>
		)
	}
}

export default CardQuestion;
