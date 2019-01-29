import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import "./NewQuestions.css";
import {Container, Header, Input, Button} from 'semantic-ui-react';

const NewQuestion = (props) => {
	return (
		<div>
			<NavBarComponent currentUser={props.state.currentUser}/>
			<div className="wrapper">
				<div className="NewQuestionContainer " style={{marginTop: "30px"}}>
					<Container style={{padding: "32px"}} className="containerClass">
						<section><h3 style={{marginBottom: "15px"}}>Would you Rather....</h3></section>
						<div className="container">
							<Input placeholder='Enter option one text here....'
							       className="flexChild"/>
							<Input placeholder='Enter option two text here....'
							       className="flexChild"
							/>
							<Button content='Submit Question' className="flexChild"
							        style={{background: "#2f54eb", color: "white"}}/>
						</div>
					</Container>
				</div>
			</div>
		</div>
	)
};
export default NewQuestion;
