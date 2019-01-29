import React from "react";
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
	return (
		<div>
			<NavBarComponent currentUser={props.state.currentUser}/>
			<div><h2 className="headerStyle">ScoreBoard</h2></div>
			<div className="flexContainer" style={{margin: "0"}}>
				<div className="QuestionTabontainer leaderBoard">
					{renderScoreCard(props)}
				</div>
			</div>
		</div>
	)
};
export default LeaderBoard;
