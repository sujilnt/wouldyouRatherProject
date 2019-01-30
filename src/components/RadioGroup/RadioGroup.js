import React, {Component} from "react";
import {Checkbox} from 'semantic-ui-react';
import {saveQuestionsAnswer} from "../../store/action";

class RadioGroup extends Component {
	state = {
		defaultValue: ""
	};
	handleChange = (e, {value}) => {
		const {QuestionsData, dispatch, currentUser} = this.props;
		dispatch(saveQuestionsAnswer(currentUser, QuestionsData, value));
		this.setState(() => {
			return {defaultValue: value};
		})
	};
	
	componentDidMount() {
		const {currentUser, QuestionsData} = this.props;
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
		const propVal = currentUser.answers[ id ];
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
				<section className="section">
					<section>
						<h3 style={{"marginBottom": "8px"}}> Would you Rather </h3>
					</section>
					<section className="section">
						<Checkbox
							radio
							label={QuestionsData.optionOne.text}
							name='checkboxRadioGroup'
							value={"optionOne"}
							checked={this.state.defaultValue === "optionOne"}
							onChange={this.handleChange}
						/>
					</section>
					<section className="section">
						<Checkbox
							radio
							label={QuestionsData.optionTwo.text}
							name='checkboxRadioGroup'
							checked={this.state.defaultValue === "optionTwo"}
							value={"optionTwo"}
							onChange={this.handleChange}
						/>
					</section>
				</section>
			</div>
		)
	}
}

export default RadioGroup;
