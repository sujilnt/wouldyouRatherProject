import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Card, Divider, Message, Progress} from "semantic-ui-react";
import src from "../../images/white-image.png";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import Page404 from "../Page404/Page404";
import "./Results.css";

const calculatePercentage = (votes, user) => Math.floor((votes / user) * 100);

class Results extends PureComponent {
	
	render() {
		console.log("result props", this.props);
		const {currentUser, getUsers, currentQuestions, getQuestions} = this.props.state;
		const locationId = this.props.location.pathname.split("/")[ 2 ];
		const QuestionId = Object.keys(getQuestions).filter((val) => val === locationId)[ 0 ];
		if ( currentUser.id && QuestionId ) {
			const checkcurrentQuestions = currentQuestions.author ? currentQuestions : getQuestions[ QuestionId[ 0 ] ];
			const checkPic = getUsers[ checkcurrentQuestions.author ].avatarURL;
			const avatar = checkPic ? checkPic : src;
			const header = `Added by ${checkcurrentQuestions.author}`;
			const optionOneVotes = getQuestions[ checkcurrentQuestions.id ].optionOne.votes.length;
			const optionTwoVotes = getQuestions[ checkcurrentQuestions.id ].optionTwo.votes.length;
			console.log("locationId", getUsers[ currentQuestions.author ], optionTwoVotes, getQuestions[ QuestionId[ 0 ] ], checkcurrentQuestions);
			const totalUsers = Object.keys(getUsers).length;
			const percentOptionOne = calculatePercentage(optionOneVotes, optionOneVotes+optionTwoVotes);
			const percentOptionTwo = calculatePercentage(optionTwoVotes, optionOneVotes+optionTwoVotes);
			
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
												Would you rather {checkcurrentQuestions.optionOne.text}
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
												Would you rather {checkcurrentQuestions.optionTwo.text}
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
					<NavBarComponent currentUser={currentUser}/>
					<Page404
						text={"result of the particular question not found "}
					/>
				</div>
			)
		}
		
	}
}

const mapStateToProps = state => {
	return {
		state: {
			currentUser: state.currentUser,
			getUsers: state.getUsers,
			currentQuestions: state.currentQuestions,
			getQuestions: state.getQuestions,
		}
		
	};
};
export default connect(mapStateToProps)(Results);
