import React, {Component} from "react";
import {connect} from "react-redux";
import QuestionCard from "../../QuestionCard/QuestionCard";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import Page404 from "../Page404/Page404";
import "./AnswerQuestions.css";

class AnswerQuestions extends Component {
	render() {
		const {currentQuestions, currentUser, dispatch, getQuestions, getUsers} = this.props;
		const locationId = this.props.location.pathname.split("/")[ 2 ];
		const QuestionId = Object.keys(getQuestions).filter((val) => val === locationId)[ 0 ];
		const checkcurrentQuestions = currentQuestions.author ? currentQuestions : getQuestions[ QuestionId ];
		if ( currentUser.id && checkcurrentQuestions ) {
			const updatedQuestion = getQuestions[ checkcurrentQuestions.id ];
			return (
				<div>
					<NavBarComponent currentUser={this.props.currentUser}/>
					<div className="parentFlexBOx">
						<div className="childFlexBox">
							<QuestionCard
								QuestionData={updatedQuestion}
								key={checkcurrentQuestions.id}
								currentUser={currentUser}
								dispatch={dispatch}
								getUsers={getUsers}
							/>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<NavBarComponent currentUser={this.props.currentUser}/>
					<Page404 text={"question not found."}/>
				</div>
			);
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

export default connect(mapStateToProps)(AnswerQuestions);
