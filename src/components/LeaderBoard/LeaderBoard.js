import React from "react";
import LoginError from "../LoginError/LoginError";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import "./LeaderBoard.css";

const renderScoreCard = (props) => {
	const obj = props.state.getUsers;
	const users = Object.keys(obj);
	const renderScores = [];
	users.forEach((data) => {
		renderScores.push(
			<ScoreBoard
				users={obj[ data ]}
			/>);
	});
	return renderScores
};
const LeaderBoard = (props) => {
	const {currentUser} = props.state;
	if ( currentUser.name ) {
		return (
			<div>
				<NavBarComponent currentUser={props.state.currentUser}/>
				<div className="flexContainer" style={{margin: "0", flexDirection: "column"}}>
					<div><h2 className="headerStyle">ScoreBoard</h2></div>
					<div className="QuestionTabontainer leaderBoard" style={{flexWrap: "wrap"}}>
						{renderScoreCard(props)}
					</div>
				</div>
			</div>
		)
	} else {
		return (<div><LoginError url={"/"}/></div>);
	}
};
export default LeaderBoard;
