import React from "react";
import Select,{ components } from 'react-select';
import Avatar from 'react-avatar';
import "./LoginPage.css";
const options = [
	{ value: 'chocolate', label: 'Chocolate' ,avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/220px-Hrithik_at_Rado_launch.jpg'},
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
const Option = props => {
	const { innerProps, innerRef } = props;
	return (
		<components.Option {...props}>
			<div className="avatarContainer" ref={innerRef} {...innerProps} >
				<Avatar name={props.label} size="40" round={"4px"} />
				<span style={{padding: "0 20px"}}>{props.label}</span>
			</div>
		</components.Option>
	);
};
const SingleValue = props => {
	const { innerProps, innerRef } = props;
	console.log("props",props);
	return (
		<components.SingleValue {...props}>
			<div className="" ref={innerRef} {...innerProps} >
				<Avatar name={props.data.label} size="30" round={"4px"} />
				<span style={{padding: "0px 10px"}}>{props.data.label}</span>
			</div>
		</components.SingleValue>
	);
};

const ValueContainer = ({ children, ...props }) =>{
	console.log("value",children,props);
	return (
		<components.ValueContainer {...props}>
			<div>
				{children}
				<Avatar name={props.label} size="40" round={"4px"} />
			</div>
		</components.ValueContainer>
	);
}
const LoginPage = ()=>(
		<div className="loginPageSelectcontainer">
		<h1>Login Component </h1>
			<div className="flexContainer">
				<div className="selectContainer">
					<Select
						isClearable
						components={{Option,SingleValue}}
						isSearchable
						name="color"
						options={options}
						className="react-select-LoginPage"
					/>
				</div>
			</div>
			
	</div>
);
export default LoginPage;
