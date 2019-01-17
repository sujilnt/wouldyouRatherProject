import React,{Component} from "react";
import TabComponent from "../TabComponent/TabComponent";
class QuestionTabs extends Component{
	render(){
		return(
			<div className="QuestionTabontainer">
			<TabComponent
				data={[]}
			/>
		</div>
		)
	}
}
export default QuestionTabs;
