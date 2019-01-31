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
	ClickedElement = (props) => {
		props.dispatch(currentQuestionAction(props.QuestionData));
	};
	
	render() {
		//console.log('%c QuestionCard ', 'background: blue; color: white');
		const {QuestionData, currentUser, dispatch} = this.props;
		console.log(this.props);
		const imageAvatar = QuestionData.avatarURL ? QuestionData.avatarURL : src;
		const viewPollLink = `/question/${QuestionData.id}`;
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
					<Link to={viewPollLink}>
						<Button color='red' className="fontWeight" onClick={(e) => this.ClickedElement(this.props)}>
							View Poll
						</Button>
					</Link>
				</div>
			</div>
		)
	}
}

export default CardQuestion;
