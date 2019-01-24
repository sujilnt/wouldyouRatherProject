import React, {Component} from "react";
import {Form, Checkbox} from 'semantic-ui-react';

class RadioGroup extends Component {
	state = {
		value: "value"
	};
	handleChange = (e, {value}) => {
		this.setState(() => ({
			value: value
		}));
	};
	
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
							value={QuestionsData.optionOne.text}
							checked={this.state.value === QuestionsData.optionOne.text}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox
							radio
							label={QuestionsData.optionTwo.text}
							name='checkboxRadioGroup'
							checked={this.state.value === QuestionsData.optionTwo.text}
							value={QuestionsData.optionTwo.text}
							onChange={this.handleChange}
						/>
					</Form.Field>
				</Form>
			</div>
		)
	}
}

export default RadioGroup;
