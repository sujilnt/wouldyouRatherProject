import React, {PureComponent} from "react";
import Select,{ components } from 'react-select';
import Avatar from 'react-avatar';
import "./LoginPage.css";
import {
	Link,
} from "react-router-dom";

const Option = props => {
	const { innerProps, innerRef } = props;
	//console.log("props...",props);
	return (
		<components.Option {...props}>
			<Link to="/home">
			<div className="avatarContainer" ref={innerRef} {...innerProps} >
				<Avatar name={props.label} size="40" round={"4px"} />
				<span style={{padding: "0 20px"}}>{props.label}</span>
			</div>
			</Link>
		</components.Option>
	);
};
const SingleValue = props => {
	const { innerProps, innerRef } = props;
	return (
		<components.SingleValue {...props}>
			<div className="" ref={innerRef} {...innerProps}  key={innerRef}>
				<Avatar name={props.data.label} size="30" round={"4px"} />
				<span style={{padding: "0px 10px"}}>{props.data.label}</span>
			</div>
		</components.SingleValue>
	);
};

class LoginPage extends PureComponent {
	state={};
	convertPropItems = (items)=>{
		const keys = Object.keys(items);
		const newKeys= keys.map((list)=>{
			return{
				...items[list],
				label: items[list].name,
				value: items[list].id
			}
		});
		return newKeys;
	};
	handleChange=(e)=>{
		this.props.getcurrentUser(e);
	};
	render(){
		//console.log('%c LoginPage ', 'background: green ; color: #bada55');
		const {getUsers}=this.props;
		const options=this.convertPropItems(getUsers);
		return (
			<div className="loginPageSelectcontainer">
				<h1>Login Component </h1>
				<div className="flexContainer">
					<div className="selectContainer">
						<div key="transition-group-content" >
						<Select
							isClearable
							components={{Option,SingleValue}}
							isSearchable
							name="color"
							options={options}
							className="react-select-LoginPage"
							onChange={this.handleChange}
						/>
						</div>
					</div>
				</div>
			
			</div>
		)
	}
};
export default LoginPage;
