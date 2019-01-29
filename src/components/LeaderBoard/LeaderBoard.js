import React from "react";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import "./LeaderBoard.css";

const renderResults = () => {
	return <h1>hello</h1>
};
const LeaderBoard = (props) => {
	return (
		<div>
			<NavBarComponent currentUser={{name: "sujil"}}/>
			<div><h2 className="headerStyle">ScoreBoard</h2></div>
			<div className="flexContainer" style={{margin: "0"}}>
				<div className="QuestionTabontainer leaderBoard"><ScoreBoard/></div>
			</div>
		</div>
	)
};
export default LeaderBoard;
