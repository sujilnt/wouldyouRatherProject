import React, {Component} from "react";
import LoginError from "../LoginError/LoginError";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import "./NewQuestions.css";
import {Container, Input, Button} from 'semantic-ui-react';
import {saveQuestions} from "../../store/action";
import {Link} from "react-router-dom";

class NewQuestion extends Component {
	state = {
		optionOne: "",
		optionTwo: "",
	};
	handleClick = (e) => {
		const {optionOne, optionTwo} = this.state;
		const question = {
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: e.id
		};
		this.props.action.dispatch(saveQuestions(question));
	};
	handleChange = (e, state) => {
		const value = e.target.value;
		this.setState(() => {
			return {
				[ state ]: value
			}
		})
	};
	
	render() {
		const {currentUser} = this.props.state;
		if ( currentUser.name ) {
			return (
				<div>
					<NavBarComponent currentUser={this.props.state.currentUser}/>
					<div className="wrapper">
						<div className="NewQuestionContainer " style={{marginTop: "30px"}}>
							<Container style={{padding: "32px"}} className="containerClass">
								<section><h3 style={{marginBottom: "15px"}}>Would you Rather....</h3></section>
								<div className="container">
									<Input placeholder='Enter option one text here....'
									       onChange={(e) => this.handleChange(e, "optionOne")}
									       action={this.state.action}
									       className="flexChild"/>
									<Input placeholder='Enter option two text here....'
									       action={this.state.action}
									       onChange={(e) => this.handleChange(e, "optionTwo")}
									       className="flexChild"
									/>
									<Link to='/home'
									      onClick={(e) => this.handleClick(this.props.state.currentUser)}
									>
										<Button content='Submit Question' className="flexChild"
										        delay={5000}
										        style={{background: "#2f54eb", color: "white"}}/></Link>
								</div>
							</Container>
						</div>
					</div>
				</div>
			)
		} else {
			return (<div><LoginError url={"/"}/></div>)
		}
	}
};
export default NewQuestion;
