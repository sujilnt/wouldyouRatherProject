import React, {Component} from "react";
import {Form, Checkbox} from 'semantic-ui-react';

const getDefaultvalue = (currentUser, QuestionsData) => {
	const option = currentUser.answers[ QuestionsData.id ];
	return QuestionsData[ option ] ? QuestionsData[ option ].text : "default";
};

class RadioGroup extends Component {
	state = {
		value: "value"
	};
	handleChange = (e, {value}) => {
		this.setState(() => ({
			value: value
		}));
	};
	check = (StateValue, defaultValue, text) => {
		const stateValue = StateValue === "value" ? defaultValue : StateValue;
		return stateValue === text;
	};
	render() {
		const {QuestionsData, currentUser} = this.props;
		const defaultValue = getDefaultvalue(currentUser, QuestionsData);
		console.log("questionData...", QuestionsData, currentUser, defaultValue, currentUser.answers[ QuestionsData.id ]);
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
							value={QuestionsData.optionOne}
							checked={this.check(this.state.value, defaultValue, QuestionsData.optionOne.text)}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox
							radio
							label={QuestionsData.optionTwo.text}
							name='checkboxRadioGroup'
							checked={this.check(this.state.value, defaultValue, QuestionsData.optionTwo.text)}
							value={QuestionsData.optionTwo}
							onChange={this.handleChange}
						/>
					</Form.Field>
				</Form>
			</div>
		)
	}
}

export default RadioGroup;
