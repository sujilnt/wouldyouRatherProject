import React from "react";
import LoginError from "../LoginError/LoginError";
import {NavBarComponent} from "../NavBar/NavBarContainer";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import "./LeaderBoard.css";

const renderScoreCard = (props) => {
	const {getUsers} = props.state;
	const obj = getUsers;
	const users = Object.keys(obj).sort((a, b) => {
		const getA = getUsers[ a ];
		const getB = getUsers[ b ];
		const totalAnsweresOfA = Object.keys(getA.answers).length + getA.questions.length;
		const totalAnsweresOfB = Object.keys(getB.answers).length + getB.questions.length;
		return totalAnsweresOfB - totalAnsweresOfA;
	});
	const renderScores = [];
	users.forEach((data) => {
		renderScores.push(
			<ScoreBoard
				users={obj[ data ]}
				key={data}
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
					<div><h2 className="headerStyle" style={{"marginBottom": "20"}}>ScoreBoard</h2></div>
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
