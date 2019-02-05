import React, {PureComponent} from "react";
import Avatar from 'react-avatar';
import {Link,} from "react-router-dom";
import Select, {components} from 'react-select';
import "./LoginPage.css";

const Option = props => {
	const {innerProps, innerRef, selectProps} = props;
	const {from} = selectProps.location.state ? selectProps.location.state : {from: "/home"};
	return (
		<components.Option {...props}>
			<Link to={from}>
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
		const newKeysValue = keys.map((list) => {
			return{
				...items[list],
				label: items[list].name,
				value: items[list].id
			}
		});
		return newKeysValue;
	};
	handleChange=(e)=>{
		this.props.action.currentUser(e);
		this.props.updateauth();
	};
	render(){
		//console.log('%c LoginPage ', 'background: green ; color: #bada55');
		const {getUsers, location} = this.props;
		const options=this.convertPropItems(getUsers);
		return (
			<div className="loginPageSelectcontainer">
				<h3>Would You Rather ..? </h3>
				<p>Login to Continue</p>
				<div className="flexContainer" style={{margin: "2% 0"}}>
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
							location={location}
						/>
						</div>
					</div>
				</div>
			
			</div>
		)
	}
}
export default LoginPage;
