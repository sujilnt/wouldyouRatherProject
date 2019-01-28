import React, {Component} from "react";
import {Form, Checkbox} from 'semantic-ui-react';
import {saveQuestionsAnswer} from "../../store/action";

class RadioGroup extends Component {
	state = {
		defaultValue: ""
	};
	handleChange = (e, {value}) => {
		const {QuestionsData, dispatch, currentUser} = this.props;
		console.log("called");
		dispatch(saveQuestionsAnswer(currentUser, QuestionsData, value));
	};
	
	componentDidMount() {
		const {currentUser, QuestionsData} = this.props;
		const id = QuestionsData.id;
		const propVal = currentUser.answers[ QuestionsData.id ];
		this.setState(() => {
			return {
				defaultValue: propVal
			}
		});
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		const {currentUser, QuestionsData} = this.props;
		const id = QuestionsData.id;
		const propVal = currentUser.answers[ QuestionsData.id ];
		if ( prevProps.currentUser.answers[ id ] !== currentUser.answers[ QuestionsData.id ] ) {
			this.setState(() => {
				return {
					defaultValue: propVal
				}
			});
		}
	}
	
	render() {
		const {QuestionsData} = this.props;
		return (
			<div>
				<Form>
					<Form.Field>
						<h3> Would you Rather </h3>
					</Form.Field>
					<Form.Field>
						<Checkbox
							radio
							label={QuestionsData.optionOne.text}
							name='checkboxRadioGroup'
							value={"optionOne"}
							checked={this.state.defaultValue === "optionOne"}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox
							radio
							label={QuestionsData.optionTwo.text}
							name='checkboxRadioGroup'
							checked={this.state.defaultValue === "optionTwo"}
							value={"optionTwo"}
							onChange={this.handleChange}
						/>
					</Form.Field>
				</Form>
			</div>
		)
	}
}

export default RadioGroup;
