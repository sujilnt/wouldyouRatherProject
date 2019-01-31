import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Checkbox} from 'semantic-ui-react';
import {currentQuestionAction, saveQuestionsAnswer} from "../../store/action";
import "../CardQuestion/CardQuestion.css";
class RadioGroup extends Component {
	state = {
		defaultValue: "",
		disabled: true
	};
	
	handleChange = (e, {value}) => {
		const {QuestionsData, dispatch, currentUser} = this.props;
		dispatch(saveQuestionsAnswer(currentUser, QuestionsData, value));
		this.setState(() => {
			return {
				defaultValue: value
			};
		});
	};
	
	componentDidMount() {
		const {currentUser, QuestionsData} = this.props;
		const propVal = currentUser.answers[ QuestionsData.id ];
		this.setState(() => {
			return {
				defaultValue: propVal,
			}
		});
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		const {currentUser, QuestionsData} = this.props;
		const id = QuestionsData.id;
		const propVal = currentUser.answers[ id ];
		if ( prevProps.currentUser.answers[ id ] !== currentUser.answers[ QuestionsData.id ] ) {
			this.setState(() => {
				return {
					defaultValue: propVal,
					disabled: false
				}
			});
		}
	}
	
	clickedElement = (e) => {
		this.props.dispatch(currentQuestionAction(this.props.QuestionsData));
	};
	render() {
		const {QuestionsData} = this.props;
		let disabledstyles = this.state.disabled ? "pointerNone" : "pointerFill";
		const viewPollLink = `/question/${QuestionsData.id}/results`;
		return (
			<div>
				<section className="section">
					<section>
						<h3 className="alignCenter"><span className="caps">{QuestionsData.author}</span> asks would you
							rather....</h3>
					</section>
					<section className="section h4" style={{marginTop: "10px"}}>
						<Checkbox
							radio
							label={QuestionsData.optionOne.text}
							name='checkboxRadioGroup'
							value={"optionOne"}
							checked={this.state.defaultValue === "optionOne"}
							onChange={this.handleChange}
						/>
					</section>
					<h3 style={{
						fontFamily: "cursive",
						margin: 0,
						textAlign: "center"
					}}>
						Or
					</h3>
					<section className="section h4" style={{marginTop: "10px"}}>
						<Checkbox
							radio
							label={QuestionsData.optionTwo.text}
							name='checkboxRadioGroup'
							checked={this.state.defaultValue === "optionTwo"}
							value={"optionTwo"}
							onChange={this.handleChange}
						/>
					</section>
					<section className="flexContainer" style={{justifyContent: "flex-End"}}>
						<Link to={viewPollLink} className={disabledstyles}>
							<Button color='red' className="fontWeight" onClick={this.clickedElement}
							        disabled={this.state.disabled}>
								Poll Results
							</Button>
						</Link>
					</section>
				</section>
			</div>
		)
	}
}

export default RadioGroup;
