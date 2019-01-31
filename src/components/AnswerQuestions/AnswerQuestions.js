import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import QuestionCard from "../../QuestionCard/QuestionCard";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import "./AnswerQuestions.css";
import LoginError from "../LoginError/LoginError";

class AnswerQuestions extends Component {
	render() {
		const {currentQuestions, currentUser, dispatch, getQuestions} = this.props;
		const updatedQuestion = getQuestions[ currentQuestions.id ];
		if ( currentUser.id ) {
			return (
				<div>
					<NavBarComponent currentUser={this.props.currentUser}/>
					<div className="parentFlexBOx">
						<div className="childFlexBox">
							<QuestionCard
								QuestionData={updatedQuestion}
								key={currentQuestions.id}
								currentUser={currentUser}
								dispatch={dispatch}
							/>
						</div>
					</div>
				</div>
			)
		} else {
			return (<div><LoginError url={"/"}/></div>);
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
