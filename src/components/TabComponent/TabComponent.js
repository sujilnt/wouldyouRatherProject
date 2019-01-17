import React from "react";
import  {Tab}  from 'semantic-ui-react';
const handleChange= (e)=>{
 console.log("tab is changed",e)
};

const panes = [
	{ menuItem: 'Answered Questions', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
	{ menuItem: 'Unanswered Questions', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
];

const TabComponent = () => <Tab menu={{ pointing: false,attached:true}} panes={panes} />

export default TabComponent;
