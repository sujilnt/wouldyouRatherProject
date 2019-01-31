import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Message, Progress, Divider} from "semantic-ui-react";
import src from "../../images/white-image.png";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import LoginError from "../LoginError/LoginError";
import "./Results.css";

const calculatePercentage = (votes, user) => Math.floor((votes / user) * 100);

class Results extends Component {
	render() {
		//console.log("props", this.props, this.props.QuestionData);
		const {currentUser, currentQuestions, getUsers} = this.props;
		if ( currentUser.id ) {
			const checkPic = getUsers[ currentQuestions.author ].avatarURL;
			const avatar = checkPic ? checkPic : src;
			const header = `Added by ${currentQuestions.author}`;
			const optionOneVotes = currentQuestions.optionOne.votes.length;
			const optionTwoVotes = currentQuestions.optionTwo.votes.length;
			const totalUsers = Object.keys(getUsers).length;
			const percentOptionOne = calculatePercentage(optionOneVotes, totalUsers);
			const percentOptionTwo = calculatePercentage(optionTwoVotes, totalUsers);
			
			return (
				<div className="resultContainer">
					<NavBarComponent currentUser={currentUser}/>
					<Divider horizontal>Stats</Divider>
					<div className="questionContainer overrideQuestionContainer">
						<div className="QuestionCardImage">
							<Card
								color='red'
								image={avatar}
								className="semanticCard"
							/>
						</div>
						<div className="QuestionsContent">
							<div>
								<Message>
									<h3>{header}</h3>
									<Message>
										<div>
											<h4 className="h4">
												Would you rather {currentQuestions.optionOne.text}
											</h4>
											<Progress percent={percentOptionOne} size='medium' progress>
											<span>
												{optionOneVotes} out of {totalUsers} votes. ({percentOptionOne}%)
											</span>
											</Progress>
										</div>
									
									</Message>
									<Message>
										<div>
											<h4 className="h4">
												Would you rather {currentQuestions.optionTwo.text}
											</h4>
											<Progress percent={percentOptionTwo} size='medium' progress>
											<span>
												{optionTwoVotes} out of {totalUsers} votes. ({percentOptionTwo} %)
											</span>
											</Progress>
										</div>
									</Message>
								</Message>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<LoginError url={"/"}/>
				</div>
			)
		}
		
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		currentQuestions: state.currentQuestions,
		getUsers: state.getUsers,
		getQuestions: state.getQuestions,
	};
};
export default connect(mapStateToProps)(Results);
